//import EWCTreecell from '../dist/ext-treecell.component.js';
//inputs: (new EWCTreecell()).properties,
//import EWCTreecell from '@sencha/ext-web-components-modern/dist/ext-treecell.component.js';
import { EWCTreecell } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtTreecell',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','align','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoCheckChildren','bind','bodyCls','bodyStyle','border','cellCls','checkable','checkableField','checkedField','checkOnTriTap','cls','column','constrainAlign','controller','defaultListenerScope','defaultToolWeights','disabled','enableTri','encodeHtml','undefined','flex','floated','focusCls','formatter','height','hidden','hideMode','iconCls','iconClsProperty','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','rawValue','record','reference','relative','renderer','renderTo','ripple','scope','selectable','session','shadow','shareableName','shim','style','text','toFrontOnShow','toolDefaults','tools','touchAction','tpl','translatable','twoWayBindable','ui','userCls','value','viewModel','width','x','y','zeroValue',],
    outputs: ['ready','created','beforecheckchange','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','checkchange','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreecellComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtTreecellComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','align','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoCheckChildren','bind','bodyCls','bodyStyle','border','cellCls','checkable','checkableField','checkedField','checkOnTriTap','cls','column','constrainAlign','controller','defaultListenerScope','defaultToolWeights','disabled','enableTri','encodeHtml','undefined','flex','floated','focusCls','formatter','height','hidden','hideMode','iconCls','iconClsProperty','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','rawValue','record','reference','relative','renderer','renderTo','ripple','scope','selectable','session','shadow','shareableName','shim','style','text','toFrontOnShow','toolDefaults','tools','touchAction','tpl','translatable','twoWayBindable','ui','userCls','value','viewModel','width','x','y','zeroValue',],
            (new EWCTreecell()).events,
            ['ready','created','beforecheckchange','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','checkchange','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
            vc
        )
        this.xtype = 'treecell'
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

//var events = (new EWCTreecell()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
