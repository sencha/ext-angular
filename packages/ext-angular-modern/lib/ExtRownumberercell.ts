//import EWCRownumberercell from '../dist/ext-rownumberercell.component.js';
//inputs: (new EWCRownumberercell()).properties,
//import EWCRownumberercell from '@sencha/ext-web-components-modern/dist/ext-rownumberercell.component.js';
import { EWCRownumberercell } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtRownumberercell',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','align','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','bodyCls','bodyStyle','border','cellCls','cls','column','constrainAlign','controller','defaultListenerScope','defaultToolWeights','disabled','encodeHtml','undefined','flex','floated','focusCls','format','height','hidden','hideMode','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','rawValue','record','reference','relative','renderTo','ripple','selectable','session','shadow','shareableName','shim','style','toFrontOnShow','toolDefaults','tools','touchAction','translatable','twoWayBindable','ui','userCls','value','viewModel','width','x','y','zeroValue',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRownumberercellComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtRownumberercellComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','align','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','bodyCls','bodyStyle','border','cellCls','cls','column','constrainAlign','controller','defaultListenerScope','defaultToolWeights','disabled','encodeHtml','undefined','flex','floated','focusCls','format','height','hidden','hideMode','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','rawValue','record','reference','relative','renderTo','ripple','selectable','session','shadow','shareableName','shim','style','toFrontOnShow','toolDefaults','tools','touchAction','translatable','twoWayBindable','ui','userCls','value','viewModel','width','x','y','zeroValue',],
            (new EWCRownumberercell()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
            vc
        )
        this.xtype = 'rownumberercell'
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

//var events = (new EWCRownumberercell()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
