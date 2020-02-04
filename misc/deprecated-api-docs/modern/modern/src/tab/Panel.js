/**
 * @class Ext.tab.Panel
 * @extend Ext.Container
 * @xtype tabpanel
 *
 * Tab Panels are a great way to allow the user to switch between several pages that are all full screen. Each
 * Component in the Tab Panel gets its own Tab, which shows the Component when tapped on. Tabs can be positioned at
 * the top or the bottom of the Tab Panel, and can optionally accept title and icon
 * configurations (see {@link Ext.Button#iconCls iconCls} for additional information).
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
*                                     <tabpanel #item shadow="true">
*                                         <container #item [title]="'Tab 1'">
*                                             This is content for Tab 1!
*                                         </container>
*                                         <container #item [title]="'Tab 2'">
*                                             This is content for Tab 2!
*                                         </container>
*                                         <container #item [title]="'Tab 3'">
*                                             This is content for Tab 3!
*                                         </container>
*                                     </tabpanel>
*                        `
*            })
*            export class AppComponent {
*            }
 *
 * One tab was created for each of the {@link Ext.Container containers} defined in the within the tabpanel.
 * Each tab automatically uses the title and icon defined on the item configuration, and
 * switches to that item when tapped.
 */
