/**
 * A field that can be clicked to bring up the color picker.
 * The selected color is configurable via {@link #value} and
 * The Format is configurable via {@link #format}.
 *
 *            @example
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                    <colorfield #item
 *                        (change)="onChange($event)"
 *                        format="hex6" 
 *                        value="00f"
 *                    ></colorfield>
 *                `
 *            })
 *            export class AppComponent {
 *                onChange = (param) => {
 *                    Ext.Msg.alert('Color', param.color);
 *                }
 *            }
 * */
 /**
 * @cfg {Object} popup
 * This object configures the popup window and colorselector component displayed
 * when this button is clicked. Applications should not need to configure this.
 * @private
 */
 /**
 * @event change
 * Fires when a color is selected.
 * @param {Ext.ux.colorpick.Field} this
 * @param {String} color The value of the selected color as per specified {@link #format}.
 * @param {String} previousColor The previous color value.
 */