            import { Component } from '@angular/core'
            declare var Ext: any;

            Ext.require('Ext.grid.plugin.Editable');
            @Component({
                selector: 'app-root-1',
                styles: [`
                        `],
                template: `
                <container #item>
                    <grid #item
                        [height]="'275px'"
                        [store]="this.store"
                        [plugins]="['grideditable']"
                    >
                        <column #item 
                            text="First Name"
                            dataIndex="fname"
                            flex="1"
                            editable="true"
                        ></column>
                        <column #item
                            text="Last Name"
                            dataIndex="lname"
                            flex="1"
                            editable="true"
                        ></column>
                        <column #item
                            text="Talent"
                            dataIndex="talent"
                            flex="1"
                            editable="true"
                            (ready)="readyColumn($event)"
                        >
                        </column>
                    </grid>
                </container>
                `
            })
            export class AppComponent {
                store = new Ext.data.Store({
                    data: [
                        { 'fname': 'Barry',  'lname': 'Allen', 'talent': 'Speedster'},
                        { 'fname': 'Oliver', 'lname': 'Queen', 'talent': 'Archery'},
                        { 'fname': 'Kara',   'lname': 'Zor-El', 'talent': 'All'},
                        { 'fname': 'Helena', 'lname': 'Bertinelli', 'talent': 'Weapons Expert'},
                        { 'fname': 'Hal',    'lname': 'Jordan', 'talent': 'Willpower'  }
                    ]
                });
                talentColumn:any;
                readyColumn = (event) => {
                    this.talentColumn = event.ext;
                    this.talentColumn.setEditor({
                        xtype: 'selectfield',
                        options: [
                            { text: 'All', value: 'All' },
                            { text: 'Archery', value: 'Archery' },
                            { text: 'Speedster', value: 'Speedster' },
                            { text: 'Weapons', value: 'Weapons' },
                            { text: 'Willpower', value: 'Willpower' }
                        ]
                    });
                  }
            }

