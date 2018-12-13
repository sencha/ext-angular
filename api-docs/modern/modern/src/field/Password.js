/**
 * @class Ext.field.Password
 * @extend Ext.field.Text
 * @xtype passwordfield
 *
 * The Password field creates a password input and is usually created inside a form.
 * Because it creates a password field, when the user enters text it will show up as
 * stars. Aside from that, the password field is just a normal text field. Here's an
 * example of how to use it in a form:
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
*                            <formpanel #item shadow="true">
*                                <passwordfield #item
*                                    width="200"
*                                    label="Password"
*                                    required="true"
*                                    revealable="true"
*                                ></passwordfield>
*                            </formpanel>
*                        </container>
*                        `
*            })
*            export class AppComponent {
*
*             }
 *
 * Because the password field inherits from {@link Ext.field.Text textfield} it gains all
 * of the functionality that text fields provide, including getting and setting the value
 * at runtime, validations and various events that are fired as the user interacts with
 * the component. Check out the {@link Ext.field.Text} docs to see the additional
 * functionality available.
 */

/**
 * @cfg [autoCapitalize=false]
 * @inheritdoc
 */

/**
 * @cfg {Boolean} [revealable=false]
 * Enables the reveal toggle button that will show the password in clear text.
 */

/**
 * @cfg {Boolean} [revealed=false]
 * A value of 'true' for this prop will show the password from clear text
 */
