/**
 * @class Ext.field.Toggle
 * @extend Ext.field.SingleSlider
 * @xtype togglefield
 *
 * Specialized {@link Ext.field.Slider} with a single thumb which only supports two
 * {@link #value values}.
 *
*            @example packages=[extangular]
*            import { Component } from '@angular/core'
*            declare var Ext: any;
*
*            @Component({
*                selector: 'app-root-1',
*                styles: [`
*                        `],
*                template: `
*                        <container #item layout="center">
*                            <formpanel #item shadow="true" >
*                                <togglefield #item boxLabel="On" value="true"></togglefield>
*                                <togglefield #item boxLabel="Off" value="false"></togglefield>
*                                <togglefield #item boxLabel="Disabled" disabled="true" ></togglefield>
*                                <togglefield #item boxLabel="Disabled (On)" disabled="true" value="true" ></togglefield>
*                            </formpanel>
*                        </container>
*                        `
*            })
*            export class AppComponent {
*            }
 */

/**
 * @cfg {String} [activeLabel=null]
 * The label to add to the toggle field when it is toggled on.
 * Only available in the Blackberry theme.
 * @accessor
 */

/**
 * @cfg {String} [inactiveLabel=null]
 * The label to add to the toggle field when it is toggled off.
 * Only available in the Blackberry theme.
 * @accessor
 */

/**
 * @cfg [value=false]
 * @inheritdoc Ext.slider.Slider#cfg-value
 * @accessor
 */

/**
 * @event change
 * Fires when an option selection has changed.
 *
 * @param {Ext.field.Toggle} this
 * @param {Number} newValue the new value of this thumb
 * @param {Number} oldValue the old value of this thumb
 */

/**
 * @method toggle
 * Toggles the value of this toggle field.
 * @return {Object} this
 */

/**
 * @method getRawValue
 * Returns the toggled state of the togglefield.
 * @return {Boolean} True if toggled on, else false
 * @since 7.0
 */
