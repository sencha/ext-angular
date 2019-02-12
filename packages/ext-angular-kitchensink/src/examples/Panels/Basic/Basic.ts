import {Component, OnInit} from '@angular/core'
import {shortText, mediumText} from '../../dummy';

declare var Ext: any;

@Component({
  selector: 'basic-panel-component',
  templateUrl: "./Basic.html",
  styles: [``]
})

export class BasicPanelComponent implements OnInit  {

  isPhone:boolean = Ext.os.is.Phone;
  text:any;

  toolHandler(owner, tool) {
    Ext.toast(`You clicked ${tool.config.type || 'a custom tool'}.`);
  }

  ngOnInit() {
    this.text = Ext.os.is.Phone ? shortText : mediumText;
  }

}
