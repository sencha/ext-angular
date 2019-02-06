/**
 * @class Ext.chart.series.Radar
 * @extend Ext.chart.series.Polar
 * @alias series.radar
 *
 * Creates a Radar Chart. A Radar Chart is a useful visualization technique for comparing different quantitative values for
 * a constrained number of categories.
 *
 * As with all other series, the Radar series must be appended in the *series* Chart array configuration. See the Chart
 * documentation for more information.
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
*                        <polar downloadServerUrl ="http://svg.sencha.io" #item
*                        [width]="'800px'"
*                        [height]="'600px'"
*                        theme="green"
*                        [interactions]="['rotate']"
*                        [store]="this.store"
*                        [series]="polarSeries"
*                        [axes]="polarAxes"
*                            ></polar>
*                        `
*            })
*            export class AppComponent {
*                store = new Ext.data.Store({
*                        fields: ['name', 'data1'],
*                        data: [
*                            { name: 'metric one', data1: 14 },
*                            { name: 'metric two', data1: 16 },
*                            { name: 'metric three', data1: 14 },
*                            { name: 'metric four', data1: 6 },
*                            { name: 'metric five', data1: 36 }
*                        ]
*                })
*
*                polarSeries =[{
*                        type: 'radar',
*                        angleField: 'name',
*                        radiusField: 'data1',
*                        style: {
*                            fillStyle: '#388FAD',
*                            fillOpacity: .1,
*                            strokeStyle: '#388FAD',
*                            strokeOpacity: .8,
*                            lineWidth: 1
*                        }
*                        }];
*
*                polarAxes = [{
*                    type: 'numeric',
*                    position: 'radial',
*                    fields: 'data1',
*                    style: {
*                        estStepSize: 10
*                    },
*                    grid: true
*                    }, {
*                    type: 'category',
*                    position: 'angular',
*                    fields: 'name',
*                    style: {
*                        estStepSize: 1
*                    },
*                    grid: true
*                }];
*            }
 *
 */

