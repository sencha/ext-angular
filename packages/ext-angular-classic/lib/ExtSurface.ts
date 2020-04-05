//import EWCSurface from '../dist/ext-surface.component.js';
//inputs: (new EWCSurface()).properties,
//import EWCSurface from '@sencha/ext-web-components-classic/dist/ext-surface.component.js';
import { EWCSurface } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtSurface',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','background','bind','border','cls','controller','defaultListenerScope','dirty','disabled','undefined','flipRtlText','focusCls','height','hidden','hideMode','instanceCls','items','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','rect','reference','renderTo','ripple','session','shareableName','style','touchAction','twoWayBindable','ui','userCls','viewModel','width',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSurfaceComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSurfaceComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','background','bind','border','cls','controller','defaultListenerScope','dirty','disabled','undefined','flipRtlText','focusCls','height','hidden','hideMode','instanceCls','items','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','rect','reference','renderTo','ripple','session','shareableName','style','touchAction','twoWayBindable','ui','userCls','viewModel','width',],
            (new EWCSurface()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','widthchange',],
            vc
        )
        this.xtype = 'surface'
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

//var events = (new EWCSurface()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
