/**
 * @class Ext.layout.Fit
 * @extend Ext.layout.Auto
 * This is a layout for container that contain a single item that automatically expands to
 * fill the container. This class is intended to be extended or created via the layout:'fit'
 * {@link Ext.container.Container#layout} config, and should generally not need to be created
 * directly via the new keyword.
 *
 * Fit layout does not have any direct config options (other than inherited ones). To fit a
 * panel to a container using Fit layout, simply set `layout: 'fit'` on the container and
 * add a single panel to it.
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
*                    <container #item width="300" height="150" layout="fit">
*                        <panel #item title="Inner Panel" bodyPadding="20" border="false" [html]="'This is the inner panel content'">
*                            
*                        </panel>
*                    </container>
*                        `
*            })
*            export class AppComponent {
*
*             }
 */
