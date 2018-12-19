/**
 * @class Ext.field.Search
 * @extend Ext.field.Text
 * @xtype searchfield
 *
 * The Search field creates an HTML5 search input and is usually created inside a form. Because it creates an HTML
 * search input type, the visual styling of this input is slightly different to normal text input controls (the corners
 * are rounded), though the virtual keyboard displayed by the operating system is the standard keyboard control.
 *
 * As with all other form fields, the search field gains a "clear" button that appears whenever there
 * is text entered into the form, and which removes that text when tapped.
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
*                                <searchfield #item
*                                    [value]="query"
*                                    width="300"
*                                    placeholder="Search..."
*                                    (change)="search($event)"
*                                ></searchfield>
*                                <div #item>You searched for "{{query}}"</div>
*                            </formpanel>
*                        </container>
*                        `
*            })
*            export class AppComponent {
*                query:string = "";
*                search = (event) => {
*                    console.log("In search : " + event.newValue);
*                    this.query = event.newValue;
*                }
*             }
 *
 * Because search field inherits from {@link Ext.field.Text textfield} it gains all of the functionality that text
 * fields provide, including getting and setting the value at runtime, validations and various events that are fired
 * as the user interacts with the component. Check out the {@link Ext.field.Text} docs to see the additional
 * functionality available.
 */
