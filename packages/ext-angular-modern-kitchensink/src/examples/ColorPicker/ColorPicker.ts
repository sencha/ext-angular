import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'ColorPicker-component',
  templateUrl: './ColorPicker.html',
  styles: [``]
})
export class ColorPickerComponent implements OnInit {

  constructor(private cdref: ChangeDetectorRef) { }

  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }


    color:string = '#0f0';

  ngOnInit() {
  }


    onChange= (picker) => {
        this.color = picker.getValue();
        console.log(" onChange :: this.color: " + this.color);
    }

    panel : any;

    OnSelChange = (event) => {
        this.color = event.color;
        console.log(" OnSelChange :: this.color: " + this.color);
        if(this.panel) {
            var header = this.panel.getHeader();
            //this.panel.setHeader(header);
        }

    }


    onPanelReady = (event) => {
        console.log("onPanelReady");
        this.panel = event.ext;
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
        },
        bind: this.color
    }]
};

}