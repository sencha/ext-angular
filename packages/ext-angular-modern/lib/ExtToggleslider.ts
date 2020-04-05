//import EWCToggleslider from '../dist/ext-toggleslider.component.js';
//inputs: (new EWCToggleslider()).properties,
//import EWCToggleslider from '@sencha/ext-web-components-modern/dist/ext-toggleslider.component.js';
import { EWCToggleslider } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtToggleslider',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','allowThumbsOverlapping','alwaysOnTop','animation','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','increment','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxValue','maxWidth','minHeight','minValue','minWidth','modal','modelValidation','name','nameable','padding','plugins','publishes','readOnly','record','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','thumbDefaults','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','valueIsArray','values','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','destroy','disabledchange','dockedchange','drag','dragend','dragstart','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTogglesliderComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtTogglesliderComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','allowThumbsOverlapping','alwaysOnTop','animation','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','increment','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','listeners','margin','maxHeight','maxValue','maxWidth','minHeight','minValue','minWidth','modal','modelValidation','name','nameable','padding','plugins','publishes','readOnly','record','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','thumbDefaults','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','value','valueIsArray','values','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCToggleslider()).events,
            ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','change','destroy','disabledchange','dockedchange','drag','dragend','dragstart','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'toggleslider'
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

//var events = (new EWCToggleslider()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
