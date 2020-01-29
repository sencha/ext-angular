/**
 * @class Ext.menu.RadioItem
 * @extend Ext.menu.CheckItem
 * @alias widget.menuradioitem
 *
 * A menu item that contains a radio button item which can participate in a group of
 * mutually exclusive radio items.
 *
 *     @example packages=[extangular]
 *       import { Component } from '@angular/core'
 *       declare var Ext: any;
 *
 *        @Component({
 *        selector: 'app-root',
 *        styles: [`
 *       `],
 *       template: `
 *                           <container #item>
 *                               <button #item text="Menu">
 *                                   <menu #item rel="menu" >
 *                                       <menuradioitem #item text="Mobile" name="ui-type" group="group1"></menuradioitem>
 *                                       <menuradioitem #item text="Desktop" name="ui-type"group="group1"></menuradioitem>
 *                                   </menu>
 *                               </button>
 *                           </container>
 *       
 *       `
 *       })
 *       export class AppComponent {
 *       }
 */

/**
 * @cfg {String} [group=null]
 * Name of a radio group that the item belongs.
 *
 * Specifying this option will turn check item into a radio item.
 *
 * Note that the group name is local to the owning Menu.
 * @accessor
 */

/**
 * @cfg {Boolean} [allowUncheck=null]
 * By default, as in native RadioGroups, a checked radio item cannot be unchecked
 * by the UI. Set this to `true` to allow unchecking of checked RadioItems.
 * @accessor
 */
