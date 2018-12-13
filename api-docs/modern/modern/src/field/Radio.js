/**
 * @class Ext.field.Radio
 * @extend Ext.field.Checkbox
 * @xtype radiofield
 * @xtype radio
 *
 * The radio field is an enhanced version of the native browser radio controls and is a
 * good way of allowing your user to choose one option out of a selection of several
 * (for example, choosing a favorite color):
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
*                        <container #item layout="center">
*                            <formpanel #item shadow="true" [layout]="{type: 'vbox', align: 'left'}">
*                                <radiofield #item name="radios" boxLabel="Checked" value="checked" checked="true"></radiofield>
*                                <radiofield #item name="radios" boxLabel="Unchecked" value="unchecked"></radiofield>
*                                <radiofield #item name="radios" boxLabel="Disabled" value="disabled" disabled="true"></radiofield>
*                            </formpanel>
*                        </container>
*                        `
*            })
*            export class AppComponent {
*
*             }
 */

/**
 * @method getGroupValue
 * Returns the selected value if this radio is part of a group (other radio fields with
 * the same name, in the same FormPanel),
 * @return {String}
 */

/**
 * @method setGroupValue
 * Set the matched radio field's status (that has the same value as the given string)
 * to checked.
 * @param {String} value The value of the radio field to check.
 * @return {Ext.field.Radio} The field that is checked.
 */
