import * as tslib_1 from "tslib";
var ExtAxis3dComponent_1;
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
export class axis3dMetaData {
}
axis3dMetaData.XTYPE = 'axis3d';
axis3dMetaData.PROPERTIES = [
    'adjustByMajorUnit',
    'background',
    'center',
    'chart',
    'depth',
    'expandRangeBy',
    'fields',
    'floating',
    'grid',
    'hidden',
    'id',
    'label',
    'layout',
    'length',
    'limits',
    'linkedTo',
    'majorTickSteps',
    'margin',
    'maximum',
    'maxZoom',
    'minimum',
    'minorTickSteps',
    'minZoom',
    'needHighPrecision',
    'position',
    'radius',
    'reconcileRange',
    'renderer',
    'rotation',
    'segmenter',
    'style',
    'title',
    'titleMargin',
    'totalAngle',
    'visibleRange',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
axis3dMetaData.EVENTS = [
    { name: 'rangechange', parameters: 'axis,range,oldRange' },
    { name: 'visiblerangechange', parameters: 'axis,visibleRange' },
    { name: 'ready', parameters: '' }
];
axis3dMetaData.EVENTNAMES = [
    'rangechange',
    'visiblerangechange',
    'ready'
];
let ExtAxis3dComponent = ExtAxis3dComponent_1 = class ExtAxis3dComponent extends base {
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, axis3dMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    ngOnInit() {
        this.baseOnInit(axis3dMetaData);
    }
    ngAfterContentInit() {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    }
};
ExtAxis3dComponent = ExtAxis3dComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'axis3d',
        inputs: axis3dMetaData.PROPERTIES,
        outputs: axis3dMetaData.EVENTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(() => ExtAxis3dComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [ElementRef, base])
], ExtAxis3dComponent);
export { ExtAxis3dComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF4aXMzZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1heGlzM2QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsTUFBTSxPQUFPLGNBQWM7O0FBQ1gsb0JBQUssR0FBVyxRQUFRLENBQUM7QUFDekIseUJBQVUsR0FBYTtJQUNuQyxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFFBQVE7SUFDUixPQUFPO0lBQ1AsT0FBTztJQUNQLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsSUFBSTtJQUNKLE9BQU87SUFDUCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixTQUFTO0lBQ1QsU0FBUztJQUNULFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxPQUFPO0lBQ1AsT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGFBQWE7SUFDYixRQUFRO0NBQ1gsQ0FBQztBQUNjLHFCQUFNLEdBQVU7SUFDaEMsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxxQkFBcUIsRUFBQztJQUNyRCxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7SUFDMUQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7Q0FDM0IsQ0FBQztBQUNjLHlCQUFVLEdBQWE7SUFDdkMsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixPQUFPO0NBQ04sQ0FBQztBQVNGLElBQWEsa0JBQWtCLDBCQUEvQixNQUFhLGtCQUFtQixTQUFRLElBQUk7SUFDMUMsWUFDRSxJQUFlLEVBQXlDLGFBQW9CO1FBQzFFLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxhQUFhLENBQUMsQ0FBQTtRQURBLGtCQUFhLEdBQWIsYUFBYSxDQUFPO0lBRTVFLENBQUM7SUFDSSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQ00sa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLDBCQUEwQjtJQUM1QixDQUFDO0NBR0YsQ0FBQTtBQWRZLGtCQUFrQjtJQVA5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixNQUFNLEVBQUUsY0FBYyxDQUFDLFVBQVU7UUFDakMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxVQUFVO1FBQ2xDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFrQixDQUFDLEVBQUMsQ0FBQztRQUMvRSxRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7SUFHb0IsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBOzZDQUEzQyxVQUFVLEVBQXlELElBQUk7R0FGbkUsa0JBQWtCLENBYzlCO1NBZFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBheGlzM2RNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdheGlzM2QnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhZGp1c3RCeU1ham9yVW5pdCcsXG4gICAgJ2JhY2tncm91bmQnLFxuICAgICdjZW50ZXInLFxuICAgICdjaGFydCcsXG4gICAgJ2RlcHRoJyxcbiAgICAnZXhwYW5kUmFuZ2VCeScsXG4gICAgJ2ZpZWxkcycsXG4gICAgJ2Zsb2F0aW5nJyxcbiAgICAnZ3JpZCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lkJyxcbiAgICAnbGFiZWwnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZW5ndGgnLFxuICAgICdsaW1pdHMnLFxuICAgICdsaW5rZWRUbycsXG4gICAgJ21ham9yVGlja1N0ZXBzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWF4aW11bScsXG4gICAgJ21heFpvb20nLFxuICAgICdtaW5pbXVtJyxcbiAgICAnbWlub3JUaWNrU3RlcHMnLFxuICAgICdtaW5ab29tJyxcbiAgICAnbmVlZEhpZ2hQcmVjaXNpb24nLFxuICAgICdwb3NpdGlvbicsXG4gICAgJ3JhZGl1cycsXG4gICAgJ3JlY29uY2lsZVJhbmdlJyxcbiAgICAncmVuZGVyZXInLFxuICAgICdyb3RhdGlvbicsXG4gICAgJ3NlZ21lbnRlcicsXG4gICAgJ3N0eWxlJyxcbiAgICAndGl0bGUnLFxuICAgICd0aXRsZU1hcmdpbicsXG4gICAgJ3RvdGFsQW5nbGUnLFxuICAgICd2aXNpYmxlUmFuZ2UnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J3JhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHJhbmdlLG9sZFJhbmdlJ30sXG57bmFtZTondmlzaWJsZXJhbmdlY2hhbmdlJyxwYXJhbWV0ZXJzOidheGlzLHZpc2libGVSYW5nZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidyYW5nZWNoYW5nZScsXG4ndmlzaWJsZXJhbmdlY2hhbmdlJyxcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdheGlzM2QnLCBcbiAgaW5wdXRzOiBheGlzM2RNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBheGlzM2RNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0QXhpczNkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0QXhpczNkQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2UpIHtcbiAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxheGlzM2RNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmFzZU9uSW5pdChheGlzM2RNZXRhRGF0YSlcbiAgfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxufSJdfQ==