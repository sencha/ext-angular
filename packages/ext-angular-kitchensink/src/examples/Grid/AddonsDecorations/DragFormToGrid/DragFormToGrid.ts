declare var Ext: any;
import { Component } from "@angular/core";
import { patientData, hospitalData } from "./data";

Ext.require(["Ext.plugin.dd.DragZone", "Ext.plugin.dd.DropZone"]);

@Component({
    selector: "dragformtogrid-component",
    templateUrl: "./DragFormToGrid.html",
    styleUrls: [`./FormToGrid.css`]
})
export class DragFormToGridComponent {
    formDataView: any;
    formDataPanel: any;
    parentPanel: any;
    hospitalGrid: any;

    ngAfterViewInit() {
        this.registerDragZone();
        this.registerDropZone();
    }

    parentPanelReady = (event: any) => {
        this.parentPanel = event.cmp;
    };

    dataViewReady = (event: any) => {
        this.formDataView = event.cmp;
    };

    dataPanelReady = (event: any) => {
        this.formDataPanel = event.cmp;
    };

    hospitalGridReady = (event: any) => {
        this.hospitalGrid = event.cmp;
    };

    registerDragZone = () => {
        let context = this;
        let me = this.formDataPanel;
        let patientView = this.formDataView;
        let touchEvents = Ext.supports.Touch && Ext.supports.TouchEvents;

        me.dragZone = Ext.create("Ext.plugin.dd.DragZone", {
            element: patientView.bodyElement,
            handle: ".patient-source",
            view: patientView,
            activateOnLongPress: touchEvents ? true : false,
            proxy: {
                cls: "x-proxy-drag-el patient-proxy-el"
            },
            $configStrict: false,
            getDragText: function(info) {
                var result = context.getParentElement(
                    info.eventTarget,
                    "x-dataview-item"
                );

                if (result.isFound) {
                    return result.searchedElement.innerHTML;
                }
            },
            getDragData: function(e) {
                return {
                    patientData: this.view.mapToRecord(e)
                };
            }
        });
    };

    registerDropZone = () => {
        let mainContext = this;
        let me = this.parentPanel;
        let hospitalView = this.hospitalGrid;

        me.dropZone = Ext.create("Ext.plugin.dd.DropZone", {
            element: hospitalView.bodyElement,
            view: hospitalView,
            $configStrict: false,
            prepareNameString: me.prepareNameString,

            onDragMove: function(info) {
                let me = this;
                let ddManager = Ext.dd.Manager;
                let targetEl = ddManager.getTargetEl(info);

                let result = mainContext.getParentElement(
                    targetEl,
                    "x-rowbody"
                );
                let isRowBody = result.isFound;
                if (!isRowBody) {
                    return;
                }

                let rowBody = Ext.get(result.searchedElement);
                let hospital;
                let patients;
                let name;

                me.toggleDropMarker(info, false);

                if (!isRowBody) {
                    return;
                }

                hospital = rowBody.component.getRecord();
                patients = hospital.get("patients");
                name = info.data.dragData.patientData.get("name");

                if (patients && patients.indexOf(name) !== -1) {
                    return;
                }

                me.ddEl = rowBody;
                me.toggleDropMarker(info, true);
            },

            onDrop: function(info) {
                let me = this;
                let hospital;
                let patients;
                let name;
                let component;

                if (!me.ddEl) {
                    return;
                }

                component = me.ddEl.component;
                hospital = component.getRecord();
                patients = hospital.get("patients");
                name = info.data.dragData.patientData.get("name");

                if (patients && patients.indexOf(name) !== -1) {
                    return;
                }

                if (!patients) {
                    patients = [];
                    hospital.set("patients", patients);
                }

                patients.push(name);
                component.contentElement.update(
                    mainContext.prepareNameString(patients)
                );
                me.toggleDropMarker(info, false);
            },

            toggleDropMarker: function(info, state) {
                let me = this;
                let ddManager;

                if (!me.ddEl) {
                    return;
                }

                ddManager = Ext.dd.Manager;
                ddManager.toggleTargetNodeCls(
                    me.ddEl,
                    "hospital-target-hover",
                    state
                );
                ddManager.toggleProxyCls(info, me.validDropCls, state);

                if (!state) {
                    me.ddEl = null;
                }
            }
        });
    };

    prepareNameString = (values: any) => {
        let str = "";
        let i = 0;
        let ln = values.length;

        for (; i < ln; i++) {
            str += [
                '<div class="name-tag x-tooltiptool">',
                "<span>",
                values[i],
                "</span>",
                '<span index="',
                i,
                '" class="remove-icon x-icon-el x-font-icon x-tool-type-close"></span></div>'
            ].join("");
        }

        return str || "Drop patients here";
    };

    onRemoveTapped = (e: any, target: any) => {
        let mainContext = this;
        let me = this;
        let patientIndex = +target.getAttribute("index");
        let rowBody = Ext.Component.from(target);
        let record = rowBody.getRecord();
        let patients = record.get("patients");

        if (patientIndex === -1) {
            return;
        }

        patients = Ext.Array.removeAt(patients, patientIndex, 0);
        rowBody.contentElement.update(mainContext.prepareNameString(patients));

        if (!patients.length) {
            record.set("patients", null);
        }
    };

    getParentElement = (selectedElement, selector) => {
        let isFound = false;
        let searchedElement = null;

        while (!isFound) {
            if (selectedElement.className.includes(selector)) {
                isFound = true;
                searchedElement = selectedElement;
            } else {
                selectedElement = selectedElement.parentNode;
                if (selectedElement.tagName === "BODY") {
                    break;
                }
            }
        }

        return { searchedElement, isFound };
    };

    destroy = function() {
        let me = this;

        me.dragZone = me.dropZone = Ext.destroy(me.dragZone, me.dragZone);
        me.callParent();
    };

    patientStore = Ext.create("Ext.data.Store", {
        fields: ["name", "address", "telephone"],
        data: patientData
    });

    hospitalStore = Ext.create("Ext.data.Store", {
        fields: ["name", "address", "telephone", "patients"],
        data: hospitalData
    });

    patientTpl = ` <tpl for=".">
		<div class="patient-source">
			<ext-table>
				<tbody>
					<tr><td class="patient-label">Name</td><td class="patient-name">{name}</td></tr>
					<tr><td class="patient-label">Address</td><td class="patient-name">{address}</td></tr>
					<tr><td class="patient-label">Telephone</td><td class="patient-name">{telephone}</td></tr>
				</tbody>
			</ext-table>
		</div>
	</tpl>`;

    hospitalTpl = `<tpl if="patients">
        <tpl for="patients">
            <div class="name-tag x-tooltiptool">
	            <span>{[values]}</span>
	            <span index="{[xindex - 1]}" class="remove-icon x-icon-el x-font-icon x-tool-type-close"></span>
            </div>
        </tpl>
        <tpl else>
        	<div class="empty-txt">Drop patients here</div>
    </tpl>`;
}
