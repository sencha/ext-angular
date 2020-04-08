//import EWCTreelistitem from '../dist/ext-treelistitem.component.js';
//inputs: (new EWCTreelistitem()).properties,
//import EWCTreelistitem from '@sencha/ext-web-components-modern/dist/ext-treelistitem.component.js';
import { EWCTreelistitem } from '@sencha/ext-web-components-modern';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './common/angularbase';

@Component({
    selector: 'ExtTreelistitem',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','constrainAlign','controller','defaultListenerScope','disabled','undefined','expandable','expanded','flex','floated','focusCls','height','hidden','hideMode','iconCls','iconClsProperty','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','leaf','listeners','loading','margin','name','nameable','node','over','owner','parentItem','plugins','publishes','reference','relative','renderTo','ripple','rowCls','rowClsProperty','selected','selectedParent','session','shadow','shareableName','shim','style','text','textProperty','toFrontOnShow','touchAction','translatable','twoWayBindable','ui','userCls','viewModel','width','x','y',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreelistitemComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtTreelistitemComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','constrainAlign','controller','defaultListenerScope','disabled','undefined','expandable','expanded','flex','floated','focusCls','height','hidden','hideMode','iconCls','iconClsProperty','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','leaf','listeners','loading','margin','name','nameable','node','over','owner','parentItem','plugins','publishes','reference','relative','renderTo','ripple','rowCls','rowClsProperty','selected','selectedParent','session','shadow','shareableName','shim','style','text','textProperty','toFrontOnShow','touchAction','translatable','twoWayBindable','ui','userCls','viewModel','width','x','y',],
            (new EWCTreelistitem()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
            vc
        )
        this.xtype = 'treelistitem'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCTreelistitem()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
