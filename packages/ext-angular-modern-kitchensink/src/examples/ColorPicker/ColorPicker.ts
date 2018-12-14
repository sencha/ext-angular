import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'ColorPicker-component',
  templateUrl: './ColorPicker.html',
  styles: [``]
})
export class ColorPickerComponent implements OnInit {

  constructor() { }


    color:string = '#0f0';

  ngOnInit() {
  }


  onShowMoreLess = (button) => {
    //this.getViewModel().set('full', button.getValue());
}


    onChange= (picker) => {
        this.color = picker.getValue();
        console.log("this.color: " + this.color);
    }

   isPhone = Ext.platformTags.phone ? true : false;

   panelHeader =  {
    hidden: this.isPhone ? true : false,
    items: [{
        xtype: 'component',
        html: 'colorbutton &#8680;'
    }, {
        xtype: 'colorbutton',
        width: Ext.platformTags.phone ? 25 : 15,
        height: Ext.platformTags.phone ? 25 : 15,
        listeners: {
            change: this.onChange
        }
    }]
};

}