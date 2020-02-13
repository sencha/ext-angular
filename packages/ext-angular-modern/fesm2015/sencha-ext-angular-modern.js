import { __decorate, __param } from 'tslib';
import { EventEmitter, ContentChildren, ElementRef, Host, Optional, SkipSelf, ViewContainerRef, Component, forwardRef, NgModule, APP_INITIALIZER } from '@angular/core';
import EWCButton from '@sencha/ext-web-components-modern';

const Ext = window['Ext'];
class EngBase {
    constructor(eRef, hostComponent, properties, events, eventnames, vc) {
        this.node = eRef.nativeElement;
        this.parentNode = hostComponent;
        this.properties = properties;
        this.eventnames = eventnames;
        //this.vc = vc;
        var me = this;
        this.eventnames.forEach(function (eventname) {
            if (eventname != "layout") {
                me[eventname] = new EventEmitter();
            }
        });
        this.A = {};
        this.A.props = {};
        this.base = EngBase;
    }
    //@ViewChildren(EngBase) _viewchildComponents: QueryList<EngBase>;
    get childComponents() {
        if (this._childComponents == undefined) {
            return [];
        }
        return this._childComponents.filter(item => item !== this);
    }
    baseOnInit() {
        //console.log('baseOnInit')
        this.node.newDiv = document.createElement('ext-' + this.xtype);
        for (var i = 0; i < this.properties.length; i++) {
            var property = this.properties[i];
            if (this[property] !== undefined) {
                if (property != 'fullscreen' && property != 'xtype') {
                    if (typeof this[property] == 'function') {
                        this.node.newDiv.attributeObjects[property] = this[property];
                        this.node.newDiv.setAttribute(property, 'function');
                    }
                    else if (typeof this[property] == 'object') {
                        var sPropVal = '';
                        try {
                            sPropVal = JSON.stringify(this[property]);
                            this.node.newDiv.setAttribute(property, sPropVal);
                        }
                        catch (e) {
                            this.node.newDiv.attributeObjects[property] = this[property];
                            this.node.newDiv.setAttribute(property, 'object');
                        }
                    }
                    else {
                        this.node.newDiv.setAttribute(property, this[property]);
                    }
                }
            }
        }
        var me = this;
        this.eventnames.forEach(function (eventname) {
            me.node.newDiv.addEventListener(eventname, function (event) {
                if (me[eventname] != false) {
                    if (eventname != 'layout') {
                        //console.log(eventname)
                        //console.log(me[eventname])
                        me[eventname].emit(event.detail);
                    }
                    //me[eventname].emit(event.detail);
                }
            });
        });
        if (this.node.parentNode.nodeName.substring(0, 3) !== 'EXT') {
            this.node.after(this.node.newDiv);
        }
        else {
            this.node.parentNode.newDiv.appendChild(this.node.newDiv);
        }
    }
    baseAfterViewInit() {
        var me = this;
        this._extitems.toArray().forEach(item => {
            //me.node.newDiv.appendChild(Ext.get(item.nativeElement).dom);
            me.node.newDiv.appendChild(item.nativeElement);
        });
    }
    baseOnChanges(changes) {
        for (let propName in changes) {
            let val = changes[propName].currentValue;
            if (this.node.newDiv != undefined) {
                var propertyVal = '';
                if (typeof val == 'string') {
                    propertyVal = val;
                }
                else {
                    propertyVal = JSON.stringify(val);
                }
                this.node.newDiv.setAttribute(propName, propertyVal);
            }
        }
    }
    baseOnDestroy() {
        try {
            if (this.node.parentNode != undefined) {
                if (this.node.parentNode.newDiv != undefined) {
                    this.node.parentNode.newDiv.removeChild(this.node.newDiv);
                }
            }
        }
        catch (e) {
            console.log(e.toString());
        }
    }
}
__decorate([
    ContentChildren('extitem')
], EngBase.prototype, "_extitems", void 0);
__decorate([
    ContentChildren(EngBase)
], EngBase.prototype, "_childComponents", void 0);

var ExtButtonComponent_1;
let ExtButtonComponent = ExtButtonComponent_1 = class ExtButtonComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'allowDepress', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'arrow', 'arrowAlign', 'autoEvent', 'axisLock', 'badgeText', 'bind', 'border', 'bottom', 'buttonType', 'centered', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'defaultListenerScope', 'destroyMenu', 'disabled', 'displayed', 'docked', 'draggable', 'enableToggle', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'handler', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'menu', 'menuAlign', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'plugins', 'pressed', 'pressedDelay', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'right', 'ripple', 'scope', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'stretchMenu', 'style', 'tabIndex', 'text', 'textAlign', 'toFrontOnShow', 'toggleHandler', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCButton()).events, ['ready', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforepressedchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'moved', 'orientationchange', 'painted', 'positionedchange', 'pressedchange', 'release', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tap', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc);
        this.xtype = 'button';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtButtonComponent = ExtButtonComponent_1 = __decorate([
    Component({
        selector: 'ExtButton',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'allowDepress', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'arrow', 'arrowAlign', 'autoEvent', 'axisLock', 'badgeText', 'bind', 'border', 'bottom', 'buttonType', 'centered', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'defaultListenerScope', 'destroyMenu', 'disabled', 'displayed', 'docked', 'draggable', 'enableToggle', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'handler', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'menu', 'menuAlign', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'plugins', 'pressed', 'pressedDelay', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'right', 'ripple', 'scope', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'stretchMenu', 'style', 'tabIndex', 'text', 'textAlign', 'toFrontOnShow', 'toggleHandler', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',],
        outputs: ['ready', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforepressedchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'moved', 'orientationchange', 'painted', 'positionedchange', 'pressedchange', 'release', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tap', 'tofront', 'topchange', 'updatedata', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtButtonComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtButtonComponent);
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCButton()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);

const Ext$1 = window['Ext'];
function extLaunchFactory() {
    var x = () => {
        //console.log('Hi from exported function');
        return new Promise(function (resolve, reject) {
            //console.log("Loading Ext JS...");
            Ext$1.onReady(function () {
                //console.log("Ext has loaded...");
                resolve();
            });
        });
    };
    return x;
}
// var extLaunchFactory = () => {
//   return () => new Promise<void>((resolve, reject) => {
//       console.log("Loading Ext JS...");
//       Ext.onReady(function () {
//         console.log("Ext has loaded...");
//         resolve();
//       });
//   });
// }
//var ExtAppInitLaunchProvider = { provide: APP_INITIALIZER, useFactory: extLaunchFactory, deps: [], multi: true };
let ExtAngularModernModule = class ExtAngularModernModule {
};
ExtAngularModernModule = __decorate([
    NgModule({
        imports: [],
        declarations: [
            ExtButtonComponent,
        ],
        providers: [
            { provide: APP_INITIALIZER, useFactory: extLaunchFactory, deps: [], multi: true }
        ],
        entryComponents: [],
        exports: [
            ExtButtonComponent,
        ]
    })
], ExtAngularModernModule);

/*
 * Public API Surface of ext-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExtAngularModernModule, extLaunchFactory, ExtButtonComponent as ɵa, EngBase as ɵb };
//# sourceMappingURL=sencha-ext-angular-modern.js.map
