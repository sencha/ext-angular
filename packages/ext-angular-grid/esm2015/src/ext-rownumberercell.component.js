//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
var ExtRownumberercellComponent_1;
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
export class rownumberercellMetaData {
}
rownumberercellMetaData.XTYPE = 'rownumberercell';
rownumberercellMetaData.PROPERTIES = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'align',
    'alignSelf',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'bodyCls',
    'bodyStyle',
    'border',
    'cellCls',
    'cls',
    'column',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'defaultToolWeights',
    'disabled',
    'encodeHtml',
    'flex',
    'floated',
    'focusCls',
    'format',
    'height',
    'hidden',
    'hideMode',
    'id',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'rawValue',
    'record',
    'reference',
    'relative',
    'renderTo',
    'ripple',
    'selectable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'style',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
    'touchAction',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'width',
    'x',
    'y',
    'zeroValue',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
rownumberercellMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforetofront', parameters: 'rownumberercell' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'rownumberercell,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'rownumberercell,event' },
    { name: 'focusenter', parameters: 'rownumberercell,event' },
    { name: 'focusleave', parameters: 'rownumberercell,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'tofront', parameters: 'rownumberercell' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
rownumberercellMetaData.EVENTNAMES = [
    'beforedisabledchange',
    'beforeheightchange',
    'beforehiddenchange',
    'beforetofront',
    'beforewidthchange',
    'blur',
    'disabledchange',
    'focus',
    'focusenter',
    'focusleave',
    'heightchange',
    'hiddenchange',
    'tofront',
    'widthchange',
    'ready'
];
let ExtRownumberercellComponent = ExtRownumberercellComponent_1 = class ExtRownumberercellComponent extends EngBase {
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, rownumberercellMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    ngOnInit() {
        this.baseOnInit(rownumberercellMetaData);
    }
    ngAfterViewInit() {
        this.baseAfterViewInit(rownumberercellMetaData);
    }
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ngOnChanges(changes) { this.baseOnChanges(changes); }
};
ExtRownumberercellComponent = ExtRownumberercellComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ext-rownumberercell',
        inputs: rownumberercellMetaData.PROPERTIES,
        outputs: rownumberercellMetaData.EVENTNAMES,
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtRownumberercellComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
], ExtRownumberercellComponent);
export { ExtRownumberercellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXJvd251bWJlcmVyY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWdyaWQvIiwic291cmNlcyI6WyJzcmMvZXh0LXJvd251bWJlcmVyY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywyQ0FBMkM7OztBQUczQyxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxNQUFNLE9BQU8sdUJBQXVCOztBQUNwQiw2QkFBSyxHQUFXLGlCQUFpQixDQUFDO0FBQ2xDLGtDQUFVLEdBQWE7SUFDbkMsS0FBSztJQUNMLFVBQVU7SUFDVixPQUFPO0lBQ1AsU0FBUztJQUNULGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsS0FBSztJQUNMLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsSUFBSTtJQUNKLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtJQUNSLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLFFBQVE7SUFDUixNQUFNO0lBQ04sVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsZUFBZTtJQUNmLGNBQWM7SUFDZCxPQUFPO0lBQ1AsYUFBYTtJQUNiLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsSUFBSTtJQUNKLFNBQVM7SUFDVCxPQUFPO0lBQ1AsV0FBVztJQUNYLE9BQU87SUFDUCxHQUFHO0lBQ0gsR0FBRztJQUNILFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtDQUNYLENBQUM7QUFDYyw4QkFBTSxHQUFVO0lBQ2hDLEVBQUMsSUFBSSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztJQUMxRSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7SUFDeEUsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO0lBQ3hFLEVBQUMsSUFBSSxFQUFDLGVBQWUsRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUM7SUFDbkQsRUFBQyxJQUFJLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO0lBQ3ZFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7SUFDaEQsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO0lBQzFELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7SUFDakQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztJQUN0RCxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO0lBQ3RELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7SUFDeEQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztJQUN4RCxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDO0lBQzdDLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7SUFDdkQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7Q0FDM0IsQ0FBQztBQUNjLGtDQUFVLEdBQWE7SUFDdkMsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsU0FBUztJQUNULGFBQWE7SUFDYixPQUFPO0NBQ04sQ0FBQztBQVNGLElBQWEsMkJBQTJCLG1DQUF4QyxNQUFhLDJCQUE0QixTQUFRLE9BQU87SUFDcEQsWUFBWSxJQUFlLEVBQXlDLGFBQXVCO1FBQ3ZGLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLHVCQUF1QixFQUFDLGFBQWEsQ0FBQyxDQUFBO1FBREMsa0JBQWEsR0FBYixhQUFhLENBQVU7SUFFM0YsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVNLGVBQWU7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUlILCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsR0FBRztJQUVJLFdBQVcsQ0FBQyxPQUFzQixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDO0NBT3pFLENBQUE7QUExQlksMkJBQTJCO0lBUHZDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsTUFBTSxFQUFFLHVCQUF1QixDQUFDLFVBQVU7UUFDMUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLFVBQVU7UUFDM0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNkJBQTJCLENBQUMsRUFBQyxDQUFDO1FBQzNGLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztJQUVnQyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7NkNBQTNDLFVBQVUsRUFBeUQsT0FBTztHQURsRiwyQkFBMkIsQ0EwQnZDO1NBMUJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vRXh0Lm9uUmVhZHkoZnVuY3Rpb24oKSB7XG4vL2ltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5leHBvcnQgY2xhc3Mgcm93bnVtYmVyZXJjZWxsTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAncm93bnVtYmVyZXJjZWxsJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnZW5nJyxcbiAgICAndmlld3BvcnQnLFxuICAgICdhbGlnbicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUZvcm11bGFzJyxcbiAgICAnYWxpZ24nLFxuICAgICdhbGlnblNlbGYnLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9keUNscycsXG4gICAgJ2JvZHlTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NlbGxDbHMnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW4nLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRUb29sV2VpZ2h0cycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZW5jb2RlSHRtbCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmb3JtYXQnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2lkJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3Jhd1ZhbHVlJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3NlbGVjdGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzdHlsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sRGVmYXVsdHMnLFxuICAgICd0b29scycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3knLFxuICAgICd6ZXJvVmFsdWUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczoncm93bnVtYmVyZXJjZWxsJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidyb3dudW1iZXJlcmNlbGwsZXZlbnQnfSxcbntuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J3Jvd251bWJlcmVyY2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3Jvd251bWJlcmVyY2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J3Jvd251bWJlcmVyY2VsbCxldmVudCd9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOidyb3dudW1iZXJlcmNlbGwnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuJ2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcbidiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZWhpZGRlbmNoYW5nZScsXG4nYmVmb3JldG9mcm9udCcsXG4nYmVmb3Jld2lkdGhjaGFuZ2UnLFxuJ2JsdXInLFxuJ2Rpc2FibGVkY2hhbmdlJyxcbidmb2N1cycsXG4nZm9jdXNlbnRlcicsXG4nZm9jdXNsZWF2ZScsXG4naGVpZ2h0Y2hhbmdlJyxcbidoaWRkZW5jaGFuZ2UnLFxuJ3RvZnJvbnQnLFxuJ3dpZHRoY2hhbmdlJyxcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtcm93bnVtYmVyZXJjZWxsJyxcbiAgaW5wdXRzOiByb3dudW1iZXJlcmNlbGxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiByb3dudW1iZXJlcmNlbGxNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Um93bnVtYmVyZXJjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Um93bnVtYmVyZXJjZWxsQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzICB7XG4gICAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogRW5nQmFzZSkge1xuICAgICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQscm93bnVtYmVyZXJjZWxsTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdChyb3dudW1iZXJlcmNlbGxNZXRhRGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KHJvd251bWJlcmVyY2VsbE1ldGFEYXRhKVxuICAgIH1cblxuXG5cbiAgLy9wdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAvLyAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gIC8vfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG5cblxuICAgLy8gcHVibGljIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgIC8vICAgY29uc29sZS5sb2coJ25nQWZ0ZXJWaWV3Q2hlY2tlZCcpXG4gIC8vfVxufVxuXG4iXX0=