/**
 * @class Ext.grid.plugin.RowExpander
 * @extend Ext.Component
 * @alias plugin.rowexpander
 *
 * The Row Expander plugin provides an "expander" column to give the user the ability to show
 * or hide the {@link Ext.grid.Row#cfg!body body} of each row.
 *
 *            @example packages=[extangular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            Ext.require('Ext.grid.plugin.RowExpander');
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                <container #item height="600" width="900">
 *                    <grid #item
 *                        [store]="store"
 *                        [fullscreen]="true"
 *                        (ready)="gridReady($event)"
 *                        [itemConfig]="configObj"
 *                        [variableHeights]="true"
 *                    >
 *                        <column #item 
 *                            text="First Name"
 *                            dataIndex="fname"
 *                            flex= "1"
 *                        ></column>
 *                        <column #item 
 *                            text="Last Name"
 *                            dataIndex="lname"
 *                            flex= "1"
 *                        ></column>
 *                        <column #item
 *                            text="Department"
 *                            dataIndex="department"
 *                            flex= "1"
 *                        ></column>
 *                    </grid>
 *                </container>
 *                `
 *            })
 *            export class AppComponent {
 *                configObj = {
 *                    body: {
 *                        tpl: `
 *                            <div>
 *                                <img height="100" src="http://www.sencha.com/assets/images/sencha-avatar-64x64.png"></img>
 *                                <div style="font-size: 16px; margin-bottom: 5px">{fname} {lname}</div>
 *                                <div style="font-weight: bold">{title}</div>
 *                                <div style="font-weight: bold; font-size: 14px">{department}</div>
 *                            </div>
 *                        `
 *                    }
 *                };
 *
 *                store = Ext.create('Ext.data.Store', {
 *                    data: [
 *                        { 'fname': 'Barry',  'lname': 'Allen', 'title': 'Director of Engineering', 'department': 'Engineering'  },
 *                        { 'fname': 'Oliver', 'lname': 'Queen', 'title': 'Senior Developer', 'department': 'Engineering'  },
 *                        { 'fname': 'Kara',   'lname': 'Zor-El', 'title': 'Senior Marketing Manager', 'department': 'Marketing'  },
 *                        { 'fname': 'Helena', 'lname': 'Bertinelli', 'title': 'Marketing Associate', 'department': 'Marketing'  },
 *                        { 'fname': 'Hal',    'lname': 'Jordan', 'title': 'Product Manager', 'department': 'Marketing'  }
 *                    ],
 *                    sorters: [
 *                        { property: 'lname' }
 *                    ]
 *                });
 *                
 *                gridReady  = (ele) => {
 *                    ele.ext.setPlugins({rowexpander: true});
 *                 }
 *            }
 *
 */
