/**
 * @class Ext.TitleBar
 * @extend Ext.Container
 * @xtype titlebar
 *
 * {@link Ext.TitleBar}'s are most commonly used as a docked item within an {@link Ext.Container}.
 *
 * The main difference between a {@link Ext.TitleBar} and an {@link Ext.Toolbar} is that
 * the {@link #title} prop.
 *
 * You can also give items of a {@link Ext.TitleBar} an `align` prop of `left` or `right`,
 * which will dock them to the `left` or `right` of the bar.
 *
*            @example packages=[angular]
*            import { Component } from '@angular/core'
*            declare var Ext: any;
*
*            @Component({
*                selector: 'app-root-1',
*                styles: [`
*                        `],
*                template: `
*                        <titlebar #item title="App Title" docked="top">
*                            <button #item align="left" iconCls="x-fa fa-bars"></button>
*                            <button #item align="right" iconCls="x-fa fa-inbox" text="Inbox"></button>
*                            <button #item align="right" iconCls="x-fa fa-user" text="Profile"></button>
*                        </titlebar>
*                        `
*            })
*            export class AppComponent {
*                buttonHandler = function() {
*                    Ext.toast('Hello World!');
*                }
*            }
 */

/**
 * @cfg cls
 * @inheritdoc
 */

/**
 * @cfg {String} [title=null]
 * The title of the toolbar.
 * @accessor
 */

/**
 * @cfg {String} [titleAlign='center']
 * The alignment for the title of the toolbar.
 * @accessor
 */

/**
 * @cfg {String} [defaultType='button']
 * The default xtype to create.
 * @accessor
 */

/**
 * @cfg {String} [defaultButtonUI=null]
 * A default {@link Ext.Component#ui ui} to use for {@link Ext.Button Button} items.
 */

/**
 * @cfg {String/Number} [minHeight=null]
 * The minimum height height of the Toolbar.
 * @accessor
 */

/**
 * @cfg layout
 * @hide
 */

/**
 * @cfg {Array/Object} [items=[]]
 * The child items to add to this TitleBar. The {@link #defaultType} of
 * a TitleBar is {@link Ext.Button}.
 *
 * You can also give items an `align` prop, which will align the item to the `left` or `right` of
 * the TitleBar.
 * @accessor
 */

/**
 * @cfg {String} [maxButtonWidth='40%']
 * The maximum width of the button by percentage
 * @accessor
 */
