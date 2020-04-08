//import EWCYearpicker from '../dist/ext-yearpicker.component.js';
//inputs: (new EWCYearpicker()).properties,
//import EWCYearpicker from '@sencha/ext-web-components-modern/dist/ext-yearpicker.component.js';
import { EWCYearpicker } from '@sencha/ext-web-components-modern';
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
    selector: 'ExtYearpicker',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','bufferSize','cardSwitchAnimation','centered','cls','collapseDefaults','collapsible','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','disclosureProperty','displayed','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','grouped','groupFooter','groupHeader','grouping','groupPlaceholder','height','hidden','hideAnimation','hideMode','hideOnMaskTap','horizontalOverflow','html','id','inactiveChildTabIndex','indexBar','infinite','inline','innerCls','innerCtHeight','innerWidth','instanceCls','itemButtonMode','itemCls','itemConfig','itemContentCls','itemDataMap','itemId','itemInnerCls','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','loadingHeight','loadingText','maintainChildNodes','manageBorders','margin','markDirty','masked','maxHeight','maxItemCache','maxWidth','minHeight','minimumBufferDistance','minWidth','modal','modelValidation','name','nameable','nameHolder','onItemDisclosure','padding','pinFooters','pinHeaders','pinnedFooter','pinnedFooterHeight','pinnedHeader','pinnedHeaderHeight','plugins','pressedDelay','preventSelectionOnDisclose','preventSelectionOnTool','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','rowLines','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selection','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','store','striped','style','tabIndex','toFrontOnShow','tooltip','top','topRenderedIndex','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','undefined','variableHeights','verticalOverflow','viewModel','visibleHeight','visibleLeft','visibleTop','visibleWidth','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforegroupcollapse','beforegroupexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforestorechange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','deactivate','deselect','destroy','disabledchange','disclose','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','groupcollapse','groupexpand','heightchange','hiddenchange','hide','initialize','itemaction','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','scrollablechange','select','show','storechange','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtYearpickerComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtYearpickerComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','associatedData','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','bufferSize','cardSwitchAnimation','centered','cls','collapseDefaults','collapsible','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','deferEmptyText','deselectOnContainerClick','disabled','disableSelection','disclosureProperty','displayed','docked','draggable','emptyItemText','emptyState','emptyText','emptyTextDefaults','emptyTextProperty','undefined','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','grouped','groupFooter','groupHeader','grouping','groupPlaceholder','height','hidden','hideAnimation','hideMode','hideOnMaskTap','horizontalOverflow','html','id','inactiveChildTabIndex','indexBar','infinite','inline','innerCls','innerCtHeight','innerWidth','instanceCls','itemButtonMode','itemCls','itemConfig','itemContentCls','itemDataMap','itemId','itemInnerCls','itemRipple','items','itemsFocusable','itemTpl','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','loadingHeight','loadingText','maintainChildNodes','manageBorders','margin','markDirty','masked','maxHeight','maxItemCache','maxWidth','minHeight','minimumBufferDistance','minWidth','modal','modelValidation','name','nameable','nameHolder','onItemDisclosure','padding','pinFooters','pinHeaders','pinnedFooter','pinnedFooterHeight','pinnedHeader','pinnedHeaderHeight','plugins','pressedDelay','preventSelectionOnDisclose','preventSelectionOnTool','publishes','record','reference','referenceHolder','relative','renderTo','resetFocusPosition','right','ripple','rowLines','scrollable','scrollDock','scrollToTopOnRefresh','selectable','selection','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','store','striped','style','tabIndex','toFrontOnShow','tooltip','top','topRenderedIndex','touchAction','tpl','tplWriteMode','translatable','triggerCtEvent','triggerEvent','twoWayBindable','ui','userCls','userSelectable','undefined','variableHeights','verticalOverflow','viewModel','visibleHeight','visibleLeft','visibleTop','visibleWidth','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCYearpicker()).events,
            ['ready','created','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforegroupcollapse','beforegroupexpand','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforestorechange','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','childdoubletap','childlongpress','childmouseenter','childmouseleave','childsingletap','childtap','childtaphold','childtouchcancel','childtouchend','childtouchmove','childtouchstart','deactivate','deselect','destroy','disabledchange','disclose','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','groupcollapse','groupexpand','heightchange','hiddenchange','hide','initialize','itemaction','itemdoubletap','itemlongpress','itemmouseenter','itemmouseleave','itemsingletap','itemswipe','itemtap','itemtaphold','itemtouchcancel','itemtouchend','itemtouchmove','itemtouchstart','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','navigate','orientationchange','painted','positionedchange','refresh','remove','removed','renderedchange','resize','rightchange','scrollablechange','select','show','storechange','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'yearpicker'
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

//var events = (new EWCYearpicker()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
