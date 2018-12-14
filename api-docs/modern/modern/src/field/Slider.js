/**
 * @class Ext.field.Slider
 * @extend Ext.field.Field
 * @xtype sliderfield
 *
 * The slider is a way to allow the user to select a value from a given numerical range. You might use it for choosing
 * a percentage, combine two of them to get min and max values, or use three of them to specify the hex values for a
 * color. Each slider contains a single 'thumb' that can be dragged along the slider's length to change the value.
 * Sliders are equally useful inside {@link Ext.form.Panel forms} and standalone. Here's how to quickly create a
 * slider in form, in this case enabling a user to choose a percentage:
 *
 *          @example packages=[angular]
 *          import { Component } from '@angular/core'
 *          declare var Ext: any;
 *
 *          @Component({
 *              selector: 'app-root-1',
 *              styles: [``],
 *              template: `
 *                  <container #item [layout]="'center'">
 *                      <formpanel #item [shadow]="true" [width]="400" [height]="300">
 *                          <sliderfield #item
 *                              (change)="onSingleChange($event)"
 *                              label="Single Thumb"
 *                              [value]="singleValue"
 *                          ></sliderfield>
 *                          <container #item [style]="{marginBottom: 20}" [html]="'Value: '+singleValue"></container>
 *                          <sliderfield #item
 *                              (change)="onMultipleChange($event)"
 *                              label="Multiple Thumbs"
 *                              [value]="multipleValue"
 *                          ></sliderfield>
 *                          <container #item [html]="'Values: '+multipleValue.join(', ')"></container>
 *                      </formpanel>
 *                  </container>
 *              `
 *          })
 *          export class AppComponent {
 *              singleValue:number = 20;
 *              multipleValue:number[] = [10, 70];
 *
 *              onSingleChange = (params) => {
 *                  this.singleValue = params.newValue;
 *              }
 *                     
 *              onMultipleChange = (params) => {
 *                  this.multipleValue = params.newValue;
 *              }
 *          }
 * 
 */

/**
 * @event change
 * Fires when the value changes.
 * @param {Ext.field.Slider} me
 * @param {Number[]} newValue The new value.
 * @param {Number[]} oldValue The old value.
 */

/**
 * @event dragchange
 * Fires when a thumb value changes via drag.
 * @param {Ext.field.Slider} me
 * @param {Ext.slider.Slider} sl Slider Component.
 * @param {Ext.slider.Thumb} thumb
 * @param {Number[]} newValue The new value of this thumb.
 * @param {Number[]} oldValue The old value of this thumb.
 */

/**
 * @event dragstart
 * Fires when the slider thumb starts a drag operation.
 * @param {Ext.field.Slider} this
 * @param {Ext.slider.Slider} sl Slider Component.
 * @param {Ext.slider.Thumb} thumb The thumb being dragged.
 * @param {Array} value The start value.
 * @param {Ext.event.Event} e
 */

/**
 * @event drag
 * Fires when the slider thumb starts a drag operation.
 * @param {Ext.field.Slider} this
 * @param {Ext.slider.Slider} sl Slider Component.
 * @param {Ext.slider.Thumb} thumb The thumb being dragged.
 * @param {Ext.event.Event} e
 */

/**
 * @event dragend
 * Fires when the slider thumb ends a drag operation.
 * @param {Ext.field.Slider} this
 * @param {Ext.slider.Slider} sl Slider Component.
 * @param {Ext.slider.Thumb} thumb The thumb being dragged.
 * @param {Array} value The end value.
 * @param {Ext.event.Event} e
 */

/**
 * @cfg values
 * @inheritdoc Ext.slider.Slider#cfg-values
 */

/**
 * @method setValues
 * Convenience method. Calls {@link #setValue}.
 * @param {Object} value
 */

/**
 * @method getValues
 * Convenience method. Calls {@link #getValue}
 * @return {Object}
 */

/**
 * @cfg {Boolean} [liveUpdate=false]
 * `true` to fire change events while the slider is dragging. `false` will
 * only fire a change once the drag is complete.
 * @accessor
 */

/**
 * @cfg [tabIndex=-1]
 * @inheritdoc
 * @accessor
 */

/**
 * @cfg {Boolean} [readOnly=false]
 * Will make this field read only, meaning it cannot be changed with used interaction.
 * @accessor
 */

/**
 * @cfg [value=0]
 * @inheritdoc Ext.slider.Slider#cfg-value
 * @accessor
 */

/**
 * @cfg [increment=1]
 * @inheritdoc Ext.slider.Slider#cfg-increment
 * @accessor
 */

/**
 * @cfg [minValue=0]
 * @inheritdoc Ext.slider.Slider#cfg-minValue
 *
 * @accessor
 */

/**
 * @cfg [maxValue=100]
 * @inheritdoc Ext.slider.Slider#cfg-maxValue
 * @accessor
 */
