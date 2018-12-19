/**
 * @class Ext.SplitButton
 * @extend Ext.Button
 * @xtype splitbutton
 *
 * A split button that provides a built-in dropdown arrow that can fire an event separately from the default click event
 * of the button. Typically this would be used to display a dropdown menu that provides additional options to the
 * primary button action, but any custom handler can provide the arrowclick implementation.
 *
 * ## Example usage:
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
*                        <container #item padding="10" layout="vbox">
*                            <splitbutton  #item
*                                text="SplitButton" 
*                                [handler]="this.sayHello" 
*                                ui="action alt" 
*                                iconCls="x-fa fa-heart"
*                                margin="10"
*                                [menu]="this.menu"
*                             ></splitbutton>
*                        </container>
*                        `
*            })
*            export class AppComponent {
*
*                sayHello = () => {
*                    alert("Hello! The button was clicked");
*                }
*
*                menu = [{
*                    text: 'Menu Item 1',
*                    handler: function(){ alert("Item 1 clicked"); }
*                }, {
*                    text: 'Menu Item 2',
*                    handler: function(){ alert("Item 2 clicked"); }
*                }];
*
*
*            }
 */

/**
* @cfg {Function} [arrowHandler=null]
* The arrow handler function to run when the Button is tapped on.
* @controllable
*/
