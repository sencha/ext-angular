declare var Ext: any;
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

Ext.require([
  'Ext.ux.colorpick.*'
]);

@Component({
  selector: 'ColorPicker-component',
  templateUrl: './ColorPicker.html',
  styles: [``]
})
export class ColorPickerComponent {
  color:string='#0f0'
  colorTitle:string=this.getcolorTitle()
  panel : any
  isPhone = Ext.platformTags.phone ? true : false

  constructor(private cdref: ChangeDetectorRef) { }

  ngAfterContentChecked() {
    this.cdref.detectChanges()
  }

  getcolorTitle() {
    return `<p style="color: #${this.color}">Selected Color: #${this.color}</p>`
  }

  onChange= (picker) => {
    this.color = picker.getValue();
    console.log(" onChange :: this.color: " + this.color);
    this.colorTitle=this.getcolorTitle();
  }

  OnSelChange = (event) => {
    this.color = event.color
    console.log(" OnSelChange :: this.color: " + this.color)
    if(this.panel) {
      var header = this.panel.getHeader()
      //this.panel.setHeader(header)
    }
    this.colorTitle=this.getcolorTitle()
  }

  onPanelReady = (event) => {
    console.log("onPanelReady")
    this.panel = event.ext
  }

  panelHeader =  {
    hidden: this.isPhone ? true : false,
    items: [
      {
        xtype: 'component',
        html: 'colorbutton &#8680;'
      }, 
      {
        xtype: 'colorbutton',
        width: Ext.platformTags.phone ? 25 : 15,
        height: Ext.platformTags.phone ? 25 : 15,
        listeners: {
          change: this.onChange
        },
        bind: this.color
      }
    ]
  }

}