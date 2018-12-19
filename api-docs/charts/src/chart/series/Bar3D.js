/**
 * @class Ext.chart.series.Bar3D
 * @extend Ext.chart.series.Bar
 * @alias series.bar3d
 *
 * Creates a 3D Bar or 3D Column Chart (depending on the value of the
 * {@link Ext.chart.CartesianChart#flipXY flipXY} prop).
 *
 * Note: 'bar3d' series is meant to be used with the
 * {@link Ext.chart.axis.Category 'category3d'} axis as its x-axis.
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
*                        { 'name': 'metric one', 'data1': 10  },
*                        { 'name': 'metric two', 'data1': 7   },
*                        { 'name': 'metric three', 'data1': 5 },
*                        { 'name': 'metric four', 'data1': 2  },
*                        { 'name': 'metric five', 'data1': 2  }
*                        ]
*                })
*
*                cartesianSeries = [{
*                    type: 'bar3d',
*                    xField: 'name',
*                    yField: 'data1'
*                    }];
*
*                cartesianAxes =[{
*                    type: 'category3d',
*                    position: 'bottom',
*                    fields: ['name'],
*                    title: {
*                        text: 'Sample Values',
*                        fontSize: 15
*                    }
*                },{
*                    type: 'numeric3d',
*                    position: 'left',
*                    fields: 'data1'
*                }];
*            }
 */
