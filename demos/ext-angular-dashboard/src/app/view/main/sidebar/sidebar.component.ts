import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  encapsulation: ViewEncapsulation.None,
  styles: [`
  `],
  selector: 'sidebar',
  template: `
<panel [layout]="'vbox'" [height]="'100%'" [width]="225">
  <titlebar #item
    [docked]="'top'"
    [titleAlign]="'left'"
    [shadow]
    [height]= "'100px'"
    [title]="''">
  </titlebar>
  <panel #item
    [flex]="'1'"
    [scrollable]="'y'"
    [bodyStyle]="{'z-index': 100, background: '#025b80'}">
    <treelist #item
      [ui]="'nav'"
      [store]="store"
      [expanderFirst]="false"
      [expanderOnly]="false"
      (ready)="readyTreeList($event)"
      (selectionchange)="selectionchangeTreeList($event)">
    </treelist>
  </panel>
  <titlebar #item
    [docked]="'bottom'"
    [titleAlign]="'left'"
    [shadow]
    [title]="''">
  </titlebar>
</panel>
`
})

export class SideBarComponent {
  private store: any = []
  private theTreeList: any

  selectionchangeTreeList(event) {
    let path = event.record.data.path
    this.router.navigate([path])
  }

  readyTreeList(theTreeList) {
    this.theTreeList = theTreeList
  }

  constructor(private router: Router){
    this.store = {
      "type": "tree",
      "root": {
        "expanded": true,
        "children": this.router.config
      }
    }
  }
}
