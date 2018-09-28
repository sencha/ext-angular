import { Component, Input, ContentChildren, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabComponent {
    constructor() {
        this.active = false;
    }
}
TabComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-tab',
                styles: [
                    `
    .pane{
      padding: 1em;
    }
  `
                ],
                template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
            },] },
];
/** @nocollapse */
TabComponent.ctorParameters = () => [];
TabComponent.propDecorators = {
    "tabTitle": [{ type: Input },],
    "active": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabsComponent {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // get all active tabs
        const /** @type {?} */ activeTabs = this.tabs.filter(tab => tab.active);
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    selectTab(tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => (tab.active = false));
        // activate the tab the user has clicked on.
        tab.active = true;
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-tabs',
                template: `<ul class="nav nav-tabs">
    <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.tabTitle}}</a>
    </li>
</ul>
<ng-content></ng-content>`,
                styles: [`.nav-tabs:after,.nav-tabs:before{-webkit-box-sizing:border-box;box-sizing:border-box}.nav{padding-left:0;margin-bottom:0;list-style:none;height:43px}ol,ul{margin-top:0;margin-bottom:10px}a{color:#337ab7;text-decoration:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav-tabs>li{float:left;margin-bottom:-1px}.nav>li{position:relative;display:block}`]
            },] },
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [];
TabsComponent.propDecorators = {
    "tabs": [{ type: ContentChildren, args: [TabComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgxTabsLibModule {
}
NgxTabsLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TabsComponent, TabComponent],
                exports: [TabsComponent, TabComponent]
            },] },
];
/** @nocollapse */
NgxTabsLibModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { NgxTabsLibModule, TabsComponent, TabComponent };
//# sourceMappingURL=ngx-tabs-libdemo.js.map
