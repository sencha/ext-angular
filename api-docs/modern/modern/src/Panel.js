/**
 * @class Ext.Panel
 * @xtype panel
 * @extend Ext.Container
 *
 * Panels add extra functionality by providing various options for configuring a header
 * that is docked inside the panel.
 * See:
 *
 * - {@link #title}
 * - {@link #iconCls}
 * - {@link #tools}
 * - {@link #closable}
 *
 * It is also possible to configure the header directly using the {@link #header}
 * configuration. See {@link Ext.panel.Header Panel Header} for more information.
 * 
 * Panels are also useful as Overlays - containers that float over your application.
 * If configured with `{@link #cfg-anchor: true}`, when you {@link #showBy} another
 * component, there will be an anchor arrow pointing to the reference component.
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
*                        <container #item>
*                            <panel #item
*                                shadow="true"
*                                title="Panel"
*                                height="300"
*                                width="500"
*                                [tools]="[
*                                    { type: 'minimize', handler: toolHandler },
*                                    { type: 'refresh', handler: toolHandler },
*                                    { type: 'save', handler: toolHandler },
*                                    { type: 'search', handler: toolHandler },
*                                    { type: 'close', handler: toolHandler }
*                                ]"
*                            >
*                                <p #item>Panel Body</p>
*                            </panel>
*                            <button #item ui="action" [handler]="showModal" margin="20 0 0 0" text="Show Modal"></button>
*                            <panel #item
*                                (ready)="panelReady($event)"
*                                title="Floated Panel"
*                                modal="true"
*                                floated="true"
*                                centered="true"
*                                hideOnMaskTap="true"
*                                [width]="this.width"
*                                [maxHeight]="this.maxHeight"
*                                [showAnimation]="{
*                                    type: 'popIn',
*                                    duration: 250,
*                                    easing: 'ease-out'
*                                }"
*                                [hideAnimation]="{
*                                    type: 'popOut',
*                                    duration: 250,
*                                    easing: 'ease-out'
*                                }"
*                            >
*                                <p #item>This is a modal, centered and floated panel. hideOnMaskTap is true by default so we can tap anywhere outside the overlay to hide it.</p>
*                            </panel>
*                        </container>
*                        `
*            })
*            export class AppComponent {
*
*                panel:any;
*
*                panelReady = (event) => {
*                    this.panel = event.ext;
*                }
*
*                showModal  = () => this.panel.show();
*
*                width = Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 260 : 400;
*                maxHeight = Ext.filterPlatform('ie10') ? '30%' : (Ext.os.deviceType == 'Phone') ? 220 : 400;
*
*                toolHandler = function(owner, tool) {
*                    Ext.toast(`You clicked ${tool.config.type}`);
*                }
*            }
 *
 */

/**
 * @cfg {Boolean/Object} [header=null]
 * Pass as `false` to prevent a header from being created.
 *
 * You may also assign a header with a config object (optionally containing an `xtype`)
 * to custom-configure your panel's header.
 *
 * See {@link Ext.panel.Header} for all the options that may be specified here.
 */

/**
 * @cfg [border=false]
 * @inheritdoc
 */

/**
 * @cfg {Boolean} [bodyBorder=null]
 * - `true` to enable the border around the panel body (as defined by the theme)
 * Note that even when enabled, the bodyBorder is only visible when there are docked
 * items around the edges of the panel.  Where the bodyBorder touches the panel's outer
 * border it is automatically collapsed into a single border.
 *
 * - `false` to disable the body border
 *
 * - `null` - use the value of {@link #border} as the value for bodyBorder
 */

/**
 * @cfg {Number/Boolean/String} [bodyPadding=null]
 * A shortcut for setting a padding style on the body element. The value can either be
 * a number to be applied to all sides, or a normal CSS string describing padding.
 */

/**
 * @cfg {String/Object} [bodyStyle=null]
 * Custom CSS styles to be applied to the panel's body element, which can be supplied
 * as a valid CSS style string or an object containing style property name/value pairs.
 * For example, these two formats are interpreted to be equivalent:
 *
 *     bodyStyle: 'background:#ffc; padding:10px;'
 *
 *     bodyStyle: {
 *         background: '#ffc',
 *         padding: '10px'
 *     }
 *
 * @accessor set
 * @since 6.5.0
 */

/**
 * @cfg {Object/Ext.Button[]} [buttons=null]
 * The buttons for this panel to be displayed in the `buttonToolbar` as a keyed
 * object (or array) of button configuration objects.
 *
 *     <Panel
 *         html="hello world"
 *         padding={20}
 *         buttons={{
 *             ok: {
 *                 text: "OK",
 *                 handler: this.onOK
 *             }
 *         }}
 *     />
 *
 * For buttons that are defined in `standardButtons` (such as `'ok'`), there is a
 * more convenient short-hand for this config:
 *
 *     <Panel
 *         html="hello world"
 *         padding={20}
 *         buttons={{
 *             ok: this.onOk,
 *             cancel: this.onCancel
 *         }}
 *     />
 *
 * The {@link #minButtonWidth} is used as the default
 * {@link Ext.Button#minWidth minWidth} for the buttons in the buttons toolbar.
 * @since 6.5.0
 */

/**
 * @cfg {'top'/'right'/'bottom'/'left'} [headerPosition='top']
 * The position of the header. Ignored if no {@link #cfg-header} is created.
 *
 * @since 6.5.0
 */

/**
 * @cfg {Boolean/Object} [header=null]
 * Pass as `false` to prevent a header from being created.
 *
 * You may also assign a header with a config object (optionally containing an `xtype`)
 * to custom-configure your panel's header.
 *
 * See {@link Ext.panel.Header} for all the options that may be specified here.
 */

/**
 * @cfg [icon=null]
 * @inheritdoc Ext.panel.Header#cfg-icon
 */

/**
 * @cfg [iconCls=null]
 * @inheritdoc Ext.panel.Header#cfg-iconCls
 */

/**
 * @cfg [title=null]
 * @inheritdoc Ext.panel.Header#cfg-title
 */

/**
 * @cfg {Object[]/Ext.panel.Tool[]} [tools=null]
 * An array of {@link Ext.panel.Tool} configs/instances to be added to the header tool area. The tools are stored as
 * child components of the header container.
 */

/**
 * @cfg {Boolean} [anchor=false]
 * Configure `true` to show an anchor element pointing to the target component when this Panel is
 * {@link #showBy shown by} another component.
 */

/**
 * @cfg {Boolean} [closable=null]
 * True to display the 'close' tool button and allow the user to close the panel, false to hide the button and
 * disallow closing the window.
 *
 * By default, when close is requested by clicking the close button in the header, the {@link #method-close} method will be
 * called. This will _{@link Ext.Component#method-destroy destroy}_ the Panel and its content meaning that it may not be
 * reused.
 *
 * To make closing a Panel _hide_ the Panel so that it may be reused, set {@link #closeAction} to 'hide'.
 */

/**
 * @cfg {String} [closeAction='destroy']
 * The action to take when the close header tool is clicked:
 *
 * - **`'{@link #method-destroy}'`** :
 *
 *   {@link #method-remove remove} the window from the DOM and {@link Ext.Component#method-destroy destroy} it and all descendant
 *   Components. The window will **not** be available to be redisplayed via the {@link #method-show} method.
 *
 * - **`'{@link #method-hide}'`** :
 *
 *   {@link #method-hide} the window by setting visibility to hidden and applying negative offsets. The window will be
 *   available to be redisplayed via the {@link #method-show} method.
 *
 * **Note:** This behavior has changed! setting *does* affect the {@link #method-close} method which will invoke the
 * appropriate closeAction.
 */

/**
 * @cfg {String} [closeToolText='Close panel']
 * Text to be announced by screen readers when the
 * **close** {@link Ext.panel.Tool tool} is focused.  Will also be set as the close
 * tool's {@link Ext.panel.Tool#cfg-tooltip tooltip} text.
 *
 * **Note:** Applicable when the panel is {@link #closable}: true
 * @locale
 */
