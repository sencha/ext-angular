/**
 * @class Ext.chart.series.Bar
 * @extend Ext.chart.series.StackedCartesian
 * @alias series.bar
 * 
 * Creates a Bar or Column Chart (depending on the value of the
 * {@link Ext.chart.CartesianChart#flipXY flipXY} prop).
 *
 * Note: 'bar' series is meant to be used with the
 * {@link Ext.chart.axis.Category 'category'} axis as its x-axis.
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
*                    type: 'bar',
*                    xField: 'name',
*                    yField: 'data1'
*                    }];
*
*                cartesianAxes =[{
*                    type: 'category',
*                    position: 'bottom',
*                    fields: ['name'],
*                    title: {
*                        text: 'Sample Values',
*                        fontSize: 15
*                    }
*                },{
*                    type: 'numeric',
*                    position: 'left',
*                    fields: 'data1'
*                }];
*            }
 */
