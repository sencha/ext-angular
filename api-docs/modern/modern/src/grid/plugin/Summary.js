/**
 * @class Ext.grid.plugin.Summary
 * @extend Ext.plugin.Abstract
 * @alias plugin.summaryrow
 * @alias plugin.gridsummaryrow
 * @alias plugin.gridsummary
 *
 * This {@link Ext.grid.Grid grid} plugin manages a bottom-docked summary {@link #row row}.
 *
 * By default, the column's {@link Ext.grid.column.Column#cfg!dataIndex dataIndex} is used
 * to read from the {@link Ext.data.Store#getSummaryRecord summary record} as controlled by
 * the model's {@link Ext.data.Model#cfg!summary summary} definition. To use a different
 * field, the {@link Ext.grid.column.Column#cfg!summaryDataIndex summaryDataIndex} can be
 * specified.
 *
 * The {@link Ext.grid.column.Column#cfg!summary summary} config can be used to perform
 * column-specific summarization. The `summary` config uses one of the registered summary
 * types (see below). Custom summary types can be defined, or a column-specific algorithm
 * can be provided with a {@link Ext.grid.column.Column#cfg!summaryRenderer summaryRenderer}.
 *
 * ## Summary Types
 *
 * The `summary` type can be one of the predefined summary types:
 *
 * + {@link Ext.data.summary.Average average}
 * + {@link Ext.data.summary.Count count}
 * + {@link Ext.data.summary.Max max}
 * + {@link Ext.data.summary.Min min}
 * + {@link Ext.data.summary.Sum sum}
 *
 *
 *            @example packages=[angular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 * 
 *            Ext.require('Ext.grid.plugin.Summary');
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                <container #item layout="fit">
 *                    <grid #item
 *                         [height]="'280px'"
 *                         [store]="this.store"
 *                         [plugins]="['gridsummaryrow']"
 *                     >
 *                         <column #item text="First Name" dataIndex="fname" flex="1"></column>
 *                         <column #item text="Last Name" dataIndex="lname" flex="1"></column>
 *                         <column #item text="Talent" dataIndex="talent" flex="1"></column>
 *                         <column #item text="Wins" dataIndex="wins" flex="1" summary="sum"></column>
 *                     </grid>
 *                 </container>
 *                `
 *            })
 *            export class AppComponent {
 *                store = Ext.create('Ext.data.Store', {
 *                    data: [
 *                        { 'fname': 'Barry', 'lname': 'Allen', 'talent': 'Speedster', 'wins': 150 },
 *                        { 'fname': 'Oliver', 'lname': 'Queen', 'talent': 'Archery', 'wins': 27 },
 *                        { 'fname': 'Kara', 'lname': 'Zor-El', 'talent': 'All', 'wins': 75 },
 *                        { 'fname': 'Helena', 'lname': 'Bertinelli', 'talent': 'Weapons Expert', 'wins': 7 },
 *                        { 'fname': 'Hal', 'lname': 'Jordan', 'talent': 'Willpower', 'wins': 198 }
 *                    ]
 *                });
 *            }
 *      
 */

/**
 * * @cfg {Ext.grid.SummaryRow/Object} row
 * The configuration object for the docked summary row managed by this plugin.
 * @since 6.5.0
 * @accessor
 */
