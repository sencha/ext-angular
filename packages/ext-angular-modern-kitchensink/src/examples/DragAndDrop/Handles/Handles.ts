import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'handles-dragdrop-component',
  templateUrl: "./Handles.html",
  styles: [``]
})
export class HandlesDragDropComponent implements OnInit  {

  constructor() { }

  parentRef: any;
  elementRef: any;
  toParentRef: any;
  verticalRef: any;
  horizontalRef: any;
  snapRef: any;

  doDestroy() {
    Ext.destroy(this.sources);
  }

  parentReady = (ele) => {
    this.parentRef = ele.ext.el;
    this.sources[1].setConstrain({
        element: this.parentRef, vertical: true
    });
    this.sources[2].setConstrain({
        element: this.parentRef, horizontal: true
    });
    this.sources[3].setConstrain({
        element: this.parentReady,
        snap: { x: 60, y: 50 }
    });
    this.parentRef.destroy = this.doDestroy.bind(this);

  }

  elementReady = (ele) => {
    this.elementRef = ele.ext.el;
 }

  toParentReady = (ele) => {
    this.toParentRef = ele.ext.el;
    this.sources[0].setElement(this.toParentRef);
  }

  horizontalReady = (ele) => {
    this.horizontalRef = ele.ext.el;
    this.sources[2].setElement(this.horizontalRef);
  }

  verticalReady = (ele) => {
    this.verticalRef = ele.ext.el;
    this.sources[1].setElement(this.verticalRef);
  }

  snapReady = (ele) => {
    this.snapRef = ele.ext.el;
    this.sources[3].setElement(this.snapRef);
  }

  sources = [
    // Constrain to direct parent
    new Ext.drag.Source({
        constrain: {
            // True means constrain to parent element.
            element: true
        }
    }),

     // Allow only vertical dragging. Constrain to the owner Panel.
    new Ext.drag.Source({}),

    // Allow only horizontal dragging. Constrain to the owner Panel.
    new Ext.drag.Source({}),

    // Snap drag to a [30, 50] grid. Constrain to the owner panel.
    new Ext.drag.Source({})
];

  ngOnInit() {}

}
