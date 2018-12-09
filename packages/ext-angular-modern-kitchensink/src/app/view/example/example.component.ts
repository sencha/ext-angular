            //@example packages=[angular]
            import { Component } from '@angular/core'
            declare var Ext: any;

            @Component({
                selector: 'app-root-1',
                styles: [`
                        `],
                template: `
                        <cartesian #item
                        [width]="'800px'"
                        [height]="'600px'"
                        [store]="store"
                        [series]="cartesianSeries"
                        [axes]="cartesianAxes"
                        ></cartesian>
                        `
            })
            export class AppComponent {
                store = new Ext.data.Store({
                        fields: ['name', 'data1', 'data2', 'data3'],
                        data: [
                            { name: 'metric one', data1: 14, data2: 19 },
                            { name: 'metric two', data1: 16, data2: 7 },
                            { name: 'metric three', data1: 11, data2: 25 },
                            { name: 'metric four', data1: 6, data2: 4 },
                            { name: 'metric five', data1: 36, data2: 12 }
                        ]
                })

                cartesianAxes = [{
                    type: 'numeric',
                    position: 'left',
                    fields: ['data1'],
                    title: {
                        text: 'Sample Values',
                        fontSize: 15
                    },
                    grid: true,
                    minimum: 0
                    }, {
                    type: 'category',
                    position: 'bottom',
                    fields: ['name'],
                    title: {
                        text: 'Sample Values',
                        fontSize: 15
                    }
                }];
                           
            
            cartesianSeries = [{
                    type: 'line',
                    style: {
                        stroke: '#30BDA7',
                        lineWidth: 2
                    },
                    xField: 'name',
                    yField: 'data1',
                    marker: {
                        type: 'path',
                        path: ['M', - 4, 0, 0, 4, 4, 0, 0, - 4, 'Z'],
                        stroke: '#30BDA7',
                        lineWidth: 2,
                        fill: 'white'
                    }
                    }, {
                    type: 'line',
                    fill: true,
                    style: {
                        fill: '#96D4C6',
                        fillOpacity: .6,
                        stroke: '#0A3F50',
                        strokeOpacity: .6,
                    },
                    xField: 'name',
                    yField: 'data2',
                    marker: {
                        type: 'circle',
                        radius: 4,
                        lineWidth: 2,
                        fill: 'white'
                    }
                }]; 
            
                }