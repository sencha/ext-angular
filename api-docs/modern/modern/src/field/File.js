/**
 * @class Ext.field.File
 * @extend Ext.field.Field
 * @xtype filefield
 *
 * Creates an HTML file input field on the page. This is usually used to upload files to remote server. File fields are usually
 * created inside a form like this:
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
 *                        <container #item [layout]='"center"'>
 *                            <formpanel #item [shadow]>
 *                                <filefield #item
 *                                    [label]='"Select a File"'
 *                                    [name]='"photo"'
 *                                    [accept]='"image"'
 *                                ></filefield>
 *                            </formpanel>
 *                        </container>
 *                        `
 *            })
 *            export class AppComponent {
 *
 *             }
 */

/**
 * @cfg {Boolean} [multiple=false]
 * Allow selection of multiple files
 *
 * @accessor
 */

/**
 * @cfg {String} [accept=null]
 * File input accept attribute documented here
 * (http://www.w3schools.com/tags/att_input_accept.asp)
 * Also can be simple strings -- e.g. audio, video, image
 *
 * @accessor
 */

/**
 * @cfg {String} [capture=null]
 * File input capture attribute. Accepts values such as
 * "camera", "camcorder", "microphone"
 *
 * @accessor
 */

/**
 * @event change
 * Fires when a file has been selected
 * @param {Ext.field.File} this This field
 * @param {Mixed} newValue The new value
 * @param {Mixed} oldValue The original value
 */
