/**
 * @class Ext.Progress
 * @extend Ext.Gadget
 * @xtype progress
 * @xtype progressbarwidget
 * @mixin Ext.ProgressBase
 *
 * A simple progress bar widget.
 *
 * You are responsible for showing, updating (via {@link #setValue}) and clearing the
 * progress bar as needed from your own code. This method is most appropriate when you
 * want to show progress throughout an operation that has predictable points of interest
 * at which you can update the control.
 *
*            @example packages=[angular]
*            import { Component, OnInit } from '@angular/core'
*            declare var Ext: any;
*
*            @Component({
*                selector: 'app-root-1',
*                styles: [`
*                        `],
*                template: `
*                <panel #item [layout]="{ type: 'vbox', align: 'center' }" [shadow]="true" width="300">
*                    <progress #item [value]="progress/100.0" [text]="progressText" width="75%"></progress>
*                    <container #item [style]="{marginTop: '20px'}" [html]="progressText"></container>
*                    <progress #item [value]="progress/100.0"></progress>
*                </panel>
*                        `
*            })
*            export class AppComponent {
*
*                progress = 1;
*                progressText:string;
*                updateLoop;
*              
*                constructor() { }
*              
*                ngOnInit() {
*                  this.progressText = "1%";
*                  this.updateLoop = setInterval(() => { 
*                      this.progress += 1;
*                      this.progressText = this.progress + "%";
*                      if (this.progress > 100) this.progress = 0;
*                  }, 100)
*                }
*            
*             }
 *
 */

/**
 * @cfg {String} [text=null]
 * The background text
 */

/**
 * @cfg {Boolean} [animate=false]
 * Specify as `true` to have this progress bar animate to new extent when updated.
 */
