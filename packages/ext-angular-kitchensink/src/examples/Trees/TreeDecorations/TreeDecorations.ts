declare var Ext: any;
import { Component } from '@angular/core';
import {data} from './store'

@Component({
  selector: 'treedecorations-component',
  templateUrl: './TreeDecorations.html',
  styles: [``]
})
export class TreeDecorationsComponent {
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  store = data;
}