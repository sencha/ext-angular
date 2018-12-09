/**
 * @class Ext.chart.series.Area
 * @extend Ext.chart.series.StackedCartesian
 * @alias series.area
 *
 * Creates an Area Chart.
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
*                        <cartesian #item
*                        [width]="'800px'"
*                        [height]="'600px'"
*                        [store]="store"
*                        [series]="cartesianSeries"
*                        [axes]="cartesianAxes"
*                        ></cartesian>
*                        `
*            })
*            export class AppComponent {
*                store = new Ext.data.Store({
*                        fields: ['name', 'data1', 'data2', 'data3'],
*                        data: [
*                        { 'name': 'metric one', 'data1': 10, 'data2': 12, 'data3': 14 },
*                        { 'name': 'metric two', 'data1': 7, 'data2': 8, 'data3': 16 },
*                        { 'name': 'metric three', 'data1': 5, 'data2': 2, 'data3': 14 },
*                        { 'name': 'metric four', 'data1': 2, 'data2': 14, 'data3': 6 },
*                        { 'name': 'metric five', 'data1': 27, 'data2': 38, 'data3': 36 }
*                        ]
*                })
*
*                cartesianSeries = [{
*                        type: 'area',
*                        xField: 'name',
*                        yField: ['data1', 'data2', 'data3']
*                        }];
*
*                cartesianAxes = [{
*                        type: 'category',
*                        position: 'bottom',
*                        fields: ['name'],
*                        title: {
*                            text: 'Sample Values',
*                            fontSize: 15
*                        }
*                    }];
*            }
 */

/**
 * @cfg [splitStacks=false]
 * @inheritdoc
 */

/**
 * @cfg renderer
 * @inheritdoc
 * Area series renderers only affect markers.
 * For styling individual segments with a renderer it is possible to use
 * the Line series with {@link Ext.chart.series.Line#fill} prop set to `true`,
 * which makes Line series look like Area series.
 * @accessor
 */
