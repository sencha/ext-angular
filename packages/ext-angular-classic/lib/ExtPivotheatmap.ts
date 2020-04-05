//import EWCPivotheatmap from '../dist/ext-pivotheatmap.component.js';
//inputs: (new EWCPivotheatmap()).properties,
//import EWCPivotheatmap from '@sencha/ext-web-components-classic/dist/ext-pivotheatmap.component.js';
import { EWCPivotheatmap } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtPivotheatmap',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clipScene','cls','colorAxis','componentCls','controller','defaultFormatter','defaultListenerScope','disabled','undefined','focusCls','height','hidden','hideMode','instanceCls','interactions','keyMap','keyMapEnabled','keyMapTarget','labels','legend','listeners','margin','matrix','name','nameable','padding','plugins','publishes','reference','renderTo','ripple','session','shareableName','size','store','style','tiles','tooltip','touchAction','transitions','twoWayBindable','ui','userCls','viewModel','width','xAxis','yAxis',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','sceneresize','scenesetup','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotheatmapComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtPivotheatmapComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clipScene','cls','colorAxis','componentCls','controller','defaultFormatter','defaultListenerScope','disabled','undefined','focusCls','height','hidden','hideMode','instanceCls','interactions','keyMap','keyMapEnabled','keyMapTarget','labels','legend','listeners','margin','matrix','name','nameable','padding','plugins','publishes','reference','renderTo','ripple','session','shareableName','size','store','style','tiles','tooltip','touchAction','transitions','twoWayBindable','ui','userCls','viewModel','width','xAxis','yAxis',],
            (new EWCPivotheatmap()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','sceneresize','scenesetup','widthchange',],
            vc
        )
        this.xtype = 'pivotheatmap'
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

//var events = (new EWCPivotheatmap()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
