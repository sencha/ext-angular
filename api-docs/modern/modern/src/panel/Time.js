/**
 * This component presents a time selection view with different interaction modes
 * depending on the device and configuration options. Default time view is analog
 * clock face.
 *
 * Time panel is mostly used as a picker by {@link Ext.field.Time} but can also be
 * created and used directly.
 *
 * @since 6.6.0
 *
 * Example usage:
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
*                        <container #item [padding]="10" [layout]="'auto'">
*                            <timepanel #item shadow="true"></timepanel>
*                        </container>
*                        `
*            })
*            export class AppComponent {
*            }
 */