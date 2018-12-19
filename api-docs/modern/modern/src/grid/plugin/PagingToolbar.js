/**
 * @class Ext.grid.plugin.PagingToolbar
 * @extend Ext.plugin.Abstract
 * @alias plugin.pagingtoolbar
 * @alias plugin.gridpagingtoolbar
 *
 * The Paging Toolbar is a specialized toolbar that is
 * bound to a `Ext.data.Store` and provides automatic paging control.
 *
 *            @example packages=[angular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            Ext.require('Ext.grid.plugin.PagingToolbar');
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                <container #item>
 *                    <grid #item
 *                        [height]="'180px'"
 *                        [store]="this.store"
 *                        [plugins]="['pagingtoolbar']"
 *                    >
 *                        <column #item 
 *                            text="First Name"
 *                            dataIndex="fname"
 *                            flex="1"
 *                        ></column>
 *                        <column #item
 *                            text="Last Name"
 *                            dataIndex="lname"
 *                            flex="1"
 *                        ></column>
 *                        <column #item
 *                            text="Talent"
 *                            dataIndex="talent"
 *                            flex="1"
 *                        >
 *                        </column>
 *                    </grid>
 *                </container>
 *                `
 *            })
 *            export class AppComponent {
 *                store = new Ext.data.Store({
 *                    pageSize: 3,
 *                    data: [
 *                        { 'fname': 'Barry',  'lname': 'Allen', 'talent': 'Speedster'},
 *                        { 'fname': 'Oliver', 'lname': 'Queen', 'talent': 'Archery'},
 *                        { 'fname': 'Kara',   'lname': 'Zor-El', 'talent': 'All'},
 *                        { 'fname': 'Helena', 'lname': 'Bertinelli', 'talent': 'Weapons Expert'},
 *                        { 'fname': 'Hal',    'lname': 'Jordan', 'talent': 'Willpower'  }
 *                    ]
 *                });
 *            }
 */
