//import EWCTreelist from '../dist/ext-treelist.component.js';
//inputs: (new EWCTreelist()).properties,
//import EWCTreelist from '@sencha/ext-web-components-classic/dist/ext-treelist.component.js';
import { EWCTreelist } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtTreelist',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','controller','defaultListenerScope','defaults','disabled','undefined','expanderFirst','expanderOnly','floatLeafItems','focusCls','height','hidden','hideMode','highlightPath','indent','instanceCls','itemRipple','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','micro','name','nameable','plugins','publishes','reference','renderTo','ripple','selection','selectOnExpander','session','shareableName','singleExpand','store','style','touchAction','twoWayBindable','ui','userCls','viewModel','width',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','itemclick','selectionchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreelistComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtTreelistComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','cls','controller','defaultListenerScope','defaults','disabled','undefined','expanderFirst','expanderOnly','floatLeafItems','focusCls','height','hidden','hideMode','highlightPath','indent','instanceCls','itemRipple','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','micro','name','nameable','plugins','publishes','reference','renderTo','ripple','selection','selectOnExpander','session','shareableName','singleExpand','store','style','touchAction','twoWayBindable','ui','userCls','viewModel','width',],
            (new EWCTreelist()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','itemclick','selectionchange','widthchange',],
            vc
        )
        this.xtype = 'treelist'
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

//var events = (new EWCTreelist()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
