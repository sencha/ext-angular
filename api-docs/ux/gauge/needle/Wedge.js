/**
 * @since 6.6.0
 * 
 * Example usage:
 *
 *            @example packages=[extangular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *            Ext.require('Ext.ux.gauge.needle.Wedge');
 *            
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                    <formpanel #item [shadow] [layout]="'vbox'" [width]="850">
 *                        <sliderfield #item [label]="'Value'" [width]="350" (change)="updateGauges($event)" [value]="value"></sliderfield>
 *                        <container  #item
 *                            [layout]="{
 *                                type: 'hbox',
 *                                align: 'stretch'
 *                            }" 
 *                            [margin]="'10 0 10 0'" [flex]="'1'" 
 *                            [width]="'100%'"
 *                            [minHeight]="200"
 *                        >
 *                            <gauge #item [flex]="1" [value]="value" [needle]="'wedge'"></gauge>
 *                        </container>
 *                    </formpanel>
 *                        `
 *            })
 *            export class AppComponent {
 *
 *                value:number = 30;
 *
 *                updateGauges = (param) => {                    
 *                    this.value = param.newValue;
 *                }
 *            }
 */