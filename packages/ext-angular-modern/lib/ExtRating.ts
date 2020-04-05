//import EWCRating from '../dist/ext-rating.component.js';
//inputs: (new EWCRating()).properties,
//import EWCRating from '@sencha/ext-web-components-modern/dist/ext-rating.component.js';
import { EWCRating } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtRating',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','animate','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','disabled','displayed','docked','draggable','undefined','undefined','undefined','family','flex','floated','focusCls','fullscreen','glyphs','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','limit','listeners','margin','maxHeight','maxWidth','minHeight','minimum','minWidth','modal','modelValidation','name','nameable','overStyle','padding','plugins','publishes','record','reference','relative','renderTo','right','ripple','rounding','scale','scrollable','selectedStyle','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','tip','toFrontOnShow','tooltip','tooltipText','top','touchAction','tpl','tplWriteMode','trackingValue','trackOver','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRatingComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtRatingComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','animate','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','disabled','displayed','docked','draggable','undefined','undefined','undefined','family','flex','floated','focusCls','fullscreen','glyphs','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','limit','listeners','margin','maxHeight','maxWidth','minHeight','minimum','minWidth','modal','modelValidation','name','nameable','overStyle','padding','plugins','publishes','record','reference','relative','renderTo','right','ripple','rounding','scale','scrollable','selectedStyle','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','tip','toFrontOnShow','tooltip','tooltipText','top','touchAction','tpl','tplWriteMode','trackingValue','trackOver','translatable','twoWayBindable','ui','userCls','userSelectable','value','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCRating()).events,
            ['ready','created','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'rating'
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

//var events = (new EWCRating()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
