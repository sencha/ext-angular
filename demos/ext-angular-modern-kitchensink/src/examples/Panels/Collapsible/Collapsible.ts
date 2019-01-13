import {Component, OnInit} from '@angular/core'
import {mediumText} from '../../dummy';

declare var Ext: any;

@Component({
  selector: 'collapsible-panel-component',
  templateUrl: "./Collapsible.html",
  styles: [``]
})

export class CollapsiblePanelComponent implements OnInit  {

  constructor() { }

  isPhone:boolean = Ext.os.is.Phone;
  mediumText = mediumText;

  ngOnInit() {}

}
