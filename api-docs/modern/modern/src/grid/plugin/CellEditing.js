/**
 * @class Ext.grid.plugin.CellEditing
 * @extend Ext.plugin.Abstract
 * @alias plugin.gridcellediting
 * @alias plugin.cellediting
 * @xtype selectfield
 *
 * The Cell Editing plugin utilizes an `Ext.Editor` to provide inline cell editing for
 * grid cells.  Each `Column` with an `editable` prop value of true will become editable when the user
 * double-clicks on a cell in the column.  By default a `TextField` is used as the editor.  You
 * can substitute a different editor by adding a subclass of `Ext.field.Field` as a child of the `Column`.
 *
 *            @example packages=[extangular]
*
*            import { Component } from '@angular/core'
*            declare var Ext: any;
*
*            @Component({
*                selector: 'app-root-1',
*                styles: [`
*                        `],
*                template: `
*                <container #item>
*                    <grid #item
*                        [height]="'275px'"
*                        [store]="this.store"
*                        [plugins]="['cellediting']"
*                    >
*                        <column #item 
*                            text="First Name"
*                            dataIndex="fname"
*                            flex="1"
*                            editable="true"
*                        ></column>
*                        <column #item
*                            text="Last Name"
*                            dataIndex="lname"
*                            flex="1"
*                            editable="true"
*                        ></column>
*                        <column #item
*                            text="Talent"
*                            dataIndex="talent"
*                            flex="1"
*                            editable="true"
*                            (ready)="readyColumn($event)"
*                        >
*                        </column>
*                    </grid>
*                </container>
*                `
*            })
*            export class AppComponent {
*                store = new Ext.data.Store({
*                    data: [
*                        { 'fname': 'Barry',  'lname': 'Allen', 'talent': 'Speedster'},
*                        { 'fname': 'Oliver', 'lname': 'Queen', 'talent': 'Archery'},
*                        { 'fname': 'Kara',   'lname': 'Zor-El', 'talent': 'All'},
*                        { 'fname': 'Helena', 'lname': 'Bertinelli', 'talent': 'Weapons Expert'},
*                        { 'fname': 'Hal',    'lname': 'Jordan', 'talent': 'Willpower'  }
*                    ]
*                });
*
*                talentColumn:any;
*                readyColumn = (event) => {
*                    this.talentColumn = event.ext;
*                    this.talentColumn.setEditor({
*                        xtype: 'selectfield',
*                        options: [
*                            { text: 'All', value: 'All' },
*                            { text: 'Archery', value: 'Archery' },
*                            { text: 'Speedster', value: 'Speedster' },
*                            { text: 'Weapons', value: 'Weapons' },
*                            { text: 'Willpower', value: 'Willpower' }
*                        ]
*                    });
*                  }
*            }
 *
 */

/**
 * @cfg {String} [triggerEvent='doubletap']
 * The event used to trigger the editor
 * @accessor
 */
