import {Component, OnInit} from '@angular/core'
import {shortText, mediumText} from '../../../dummy';

declare var Ext: any;

@Component({
  selector: 'basic-panels-component',
  templateUrl: "./BasicPanels.html",
  styles: [``]
})

export class BasicPanelsComponent implements OnInit  {

  isPhone:boolean = Ext.os.is.Phone;
  text:any;

  toolHandler(owner, tool) {
    Ext.toast(`You clicked ${tool.config.type || 'a custom tool'}.`);
  }

  ngOnInit() {
    this.text = Ext.os.is.Phone ? shortText : mediumText;
  }

}
