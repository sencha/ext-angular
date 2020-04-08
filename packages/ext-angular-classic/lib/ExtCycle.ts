//import EWCCycle from '../dist/ext-cycle.component.js';
//inputs: (new EWCCycle()).properties,
//import EWCCycle from '@sencha/ext-web-components-classic/dist/ext-cycle.component.js';
import { EWCCycle } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtCycle',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','allowDepress','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','arrowAlign','arrowCls','arrowHandler','arrowTooltip','arrowVisible','autoEl','autoRender','undefined','autoShow','baseCls','baseParams','bind','border','changeHandler','childEls','clickEvent','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','destroyMenu','disabled','disabledCls','dock','draggable','enableToggle','fixed','flex','floating','focusCls','focusOnToFront','forceGlyph','forceIcon','formBind','frame','glyph','handleMouseEvents','handler','height','hidden','hideMode','href','hrefTarget','html','icon','iconAlign','iconCls','id','itemId','undefined','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','menu','menuAlign','minHeight','minWidth','modal','modelValidation','nameable','overCls','overflowText','undefined','undefined','padding','params','plugins','prependText','pressed','preventDefault','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeat','resizable','resizeHandles','saveDelay','scale','scope','scrollable','separateArrowStyling','session','shadow','shadowOffset','shareableName','shim','showEmptyMenu','showText','shrinkWrap','stateEvents','stateful','stateId','style','tabIndex','text','textAlign','toFrontOnShow','toggleGroup','toggleHandler','tooltip','tooltipType','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','value','viewModel','weight','width','xtype',],
    outputs: ['ready','created','activate','added','afterlayoutanimation','afterrender','arrowclick','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','beforetoggle','blur','boxready','change','click','deactivate','destroy','disable','enable','focus','focusenter','focusleave','glyphchange','hide','iconchange','menuhide','menushow','menutriggerout','menutriggerover','mouseout','mouseover','move','removed','render','resize','show','staterestore','statesave','textchange','toggle',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCycleComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCycleComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeCounter','alignOnScroll','alignTarget','allowDepress','alwaysOnTop','anchor','animateShadow','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','arrowAlign','arrowCls','arrowHandler','arrowTooltip','arrowVisible','autoEl','autoRender','undefined','autoShow','baseCls','baseParams','bind','border','changeHandler','childEls','clickEvent','cls','columnWidth','componentCls','componentLayout','constrain','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultListenerScope','destroyMenu','disabled','disabledCls','dock','draggable','enableToggle','fixed','flex','floating','focusCls','focusOnToFront','forceGlyph','forceIcon','formBind','frame','glyph','handleMouseEvents','handler','height','hidden','hideMode','href','hrefTarget','html','icon','iconAlign','iconCls','id','itemId','undefined','keyMap','keyMapEnabled','keyMapTarget','liquidLayout','listeners','liveDrag','loader','margin','maskDefaults','maskElement','maxHeight','maxWidth','menu','menuAlign','minHeight','minWidth','modal','modelValidation','nameable','overCls','overflowText','undefined','undefined','padding','params','plugins','prependText','pressed','preventDefault','publishes','reference','region','renderConfig','renderData','undefined','renderTo','renderTpl','repeat','resizable','resizeHandles','saveDelay','scale','scope','scrollable','separateArrowStyling','session','shadow','shadowOffset','shareableName','shim','showEmptyMenu','showText','shrinkWrap','stateEvents','stateful','stateId','style','tabIndex','text','textAlign','toFrontOnShow','toggleGroup','toggleHandler','tooltip','tooltipType','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','value','viewModel','weight','width','xtype',],
            (new EWCCycle()).events,
            ['ready','created','activate','added','afterlayoutanimation','afterrender','arrowclick','beforeactivate','beforedeactivate','beforedestroy','beforehide','beforerender','beforeshow','beforestaterestore','beforestatesave','beforetoggle','blur','boxready','change','click','deactivate','destroy','disable','enable','focus','focusenter','focusleave','glyphchange','hide','iconchange','menuhide','menushow','menutriggerout','menutriggerover','mouseout','mouseover','move','removed','render','resize','show','staterestore','statesave','textchange','toggle',],
            vc
        )
        this.xtype = 'cycle'
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

//var events = (new EWCCycle()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
