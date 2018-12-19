/**
 * @class Ext.field.Checkbox
 * @extend Ext.field.Field
 * @xtype checkbox
 * @xtype checkboxfield
 *
 * The checkbox field is an enhanced version of the native browser checkbox and is great for enabling your user to
 * choose one or more items from a set. It works like any other
 * {@link Ext.field.Field field} and is usually found in the context of a form:
 *
 * ## Example
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
 *                        <container #item [shadow]="true" [layout]='"center"'>
 *                            <formpanel #item [shadow] [layout]="{type: 'vbox', align: 'left'}">
 *                                <checkboxfield #item [boxLabel]='"Unchecked"'></checkboxfield>
 *                                <checkboxfield #item [boxLabel]='"Checked"' [checked]="true"></checkboxfield>
 *                                <checkboxfield #item [boxLabel]='"Disabled"' [disabled]="true"></checkboxfield>
 *                                <checkboxfield #item [boxLabel]='"Disabled (checked)"' [disabled]="true" [checked]="true"></checkboxfield>
 *                            </formpanel>
 *                        </container>               
 *                        `
 *            })
 *            export class AppComponent {
 *
 *             }
 */

/**
 * @event change
 * Fires when the field value changes.
 * @param {Ext.field.Checkbox} this This field.
 * @param {Boolean} newValue The new value.
 * @param {Boolean} oldValue The original value.
 */

/**
 * @event check
 * Fires when the checkbox is checked.
 * @param {Ext.field.Checkbox} this This checkbox.
 */

/**
 * @event uncheck
 * Fires when the checkbox is unchecked.
 * @param {Ext.field.Checkbox} this This checkbox.
 */

/**
 * @cfg {String} [value='']
 * The string value to submit if the item is in a checked state.
 * @accessor
 */

/**
 * @cfg {Boolean} [checked=false]
 * `true` if the checkbox should render initially checked.
 * @accessor
 */

/**
 * @method getSubmitValue
 * Returns the submit value for the checkbox which can be used when submitting forms.
 * @return {Boolean/String} value The value of {@link #value} or `true`, if {@link #checked}.
 */

/**
 * @method getGroupValues
 * Returns an array of values from the checkboxes in the group that are checked.
 * @return {Array}
 */

/**
 * @method setGroupValues
 * Set the status of all matched checkboxes in the same group to checked.
 * @param {Array} values An array of values.
 * @return {Ext.field.Checkbox} This checkbox.
 */

/**
 * @method resetGroupValues
 * Resets the status of all matched checkboxes in the same group to checked.
 * @return {Ext.field.Checkbox} This checkbox.
 */
