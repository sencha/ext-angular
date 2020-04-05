//import EWCD3_pack from '../dist/ext-d3-pack.component.js';
//inputs: (new EWCD3_pack()).properties,
//import EWCD3_pack from '@sencha/ext-web-components-classic/dist/ext-d3-pack.component.js';
import { EWCD3_pack } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtD3_pack',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clipScene','clipText','cls','colorAxis','componentCls','controller','defaultListenerScope','disabled','undefined','expandEventName','focusCls','height','hidden','hideMode','hierarchyCls','instanceCls','interactions','keyMap','keyMapEnabled','keyMapTarget','layout','linkKey','listeners','margin','name','nameable','nodeChildren','nodeClass','nodeKey','nodeText','nodeTransform','nodeValue','noParentValue','noSizeLayout','padding','plugins','publishes','reference','renderLinks','renderTo','ripple','rootVisible','selectEventName','selection','session','shareableName','size','sorter','store','style','textPadding','tooltip','touchAction','transitions','twoWayBindable','ui','userCls','viewModel','width',],
    outputs: ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','layout','sceneresize','scenesetup','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_packComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtD3_packComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','border','clipScene','clipText','cls','colorAxis','componentCls','controller','defaultListenerScope','disabled','undefined','expandEventName','focusCls','height','hidden','hideMode','hierarchyCls','instanceCls','interactions','keyMap','keyMapEnabled','keyMapTarget','layout','linkKey','listeners','margin','name','nameable','nodeChildren','nodeClass','nodeKey','nodeText','nodeTransform','nodeValue','noParentValue','noSizeLayout','padding','plugins','publishes','reference','renderLinks','renderTo','ripple','rootVisible','selectEventName','selection','session','shareableName','size','sorter','store','style','textPadding','tooltip','touchAction','transitions','twoWayBindable','ui','userCls','viewModel','width',],
            (new EWCD3_pack()).events,
            ['ready','created','beforedisabledchange','beforeheightchange','beforehiddenchange','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','layout','sceneresize','scenesetup','widthchange',],
            vc
        )
        this.xtype = 'd3-pack'
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

//var events = (new EWCD3_pack()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
