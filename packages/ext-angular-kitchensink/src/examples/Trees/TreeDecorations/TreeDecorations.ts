declare var Ext: any;
import { Component } from '@angular/core';
import {data} from './store'

@Component({
  selector: 'treedecorations-component',
  templateUrl: './TreeDecorations.html',
  styles: [``]
})
export class TreeDecorationsComponent {
  store = data;
}