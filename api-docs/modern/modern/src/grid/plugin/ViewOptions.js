/**
 * @class Ext.grid.plugin.ViewOptions
 * @extend Ext.Component
 * @alias plugin.gridviewoptions
 *
 * The ViewOptions plugin produces a menu that slides in from the right
 * (by default) when you longpress on the grid headers. The menu displays the column
 * header names which represents the order of the grid's columns. This allows users to
 * easily reorder the grid's columns by reordering the rows. Items may be dragged by
 * grabbing the handle on the left side of the row and moving the item vertically.
 *
 * Once the columns are ordered to your liking, you may then close the menu by tapping the
 * "Done" button.
 *
 *            @example packages=[extangular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            Ext.require('Ext.grid.plugin.ViewOptions');
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                <container #item layout="fit">
 *                    <grid #item
 *                        [height]="'500px'"
 *                        [store]="store"
 *                        plugins="gridviewoptions"
 *                    >
 *                        <column #item text="Name" dataIndex="name" flex="1" [sortable]="false"></column>
 *                        <column #item text="Email" dataIndex="email" flex="1"></column>
 *                        <column #item text="Phone" dataIndex="phone" flex="1"></column>
 *                    </grid>
 *                </container>
 *                `
 *            })
 *            export class AppComponent {
 *                store = new Ext.data.Store({
 *                    data: [
 *                        { "name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224" },
 *                        { "name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234" },
 *                        { "name": "Homer", "email": "home@simpsons.com", "phone": "555-222-1244" },
 *                        { "name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254" }
 *                    ]
 *                });
 *            }
 *
 *
 * Developers may modify the menu and its contents by overriding {@link #sheet} and
 * {@link #columnList} respectively.
 */
 
 /**
 * @cfg {Number} [sheetWidth=250]
  * The width of the menu
  * @accessor
 */

/**
 * @cfg {Object} sheet
 * The configuration of the menu
 * @accessor
 */

/**
 * @cfg {Object} columnList
 * The column's configuration
 * @accessor
 */

/**
 * @cfg visibleIndicatorSelector
 * The CSS class responsible for displaying the visibility indicator.
 * @accessor
 */

/**
 * @cfg groupIndicatorSelector
 * The CSS class responsible for displaying the grouping indicator.
 * @accessor
 */
