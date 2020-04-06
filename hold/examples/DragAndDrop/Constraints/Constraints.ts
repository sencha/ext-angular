declare var Ext: any;
import {Component, ViewEncapsulation} from '@angular/core'

Ext.require(['Ext.drag.*']);

@Component({
  selector: 'constraints-dragdrop-component',
  templateUrl: "./Constraints.html",
  styleUrls: [`./styles.css`],
  encapsulation: ViewEncapsulation.None
})
export class ConstraintsDragDropComponent {

  parentRef: any;
  elementRef: any;
  toParentRef: any;
  verticalRef: any;
  horizontalRef: any;
  snapRef: any;

  doDestroy() {
    this.sources.forEach(Ext.destroy.bind(Ext));
  }

  parentReady = (event) => {
    this.parentRef = event.cmp.el;
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

  elementReady = (event) => {
    this.elementRef = event.cmp.el;
 }

  toParentReady = (event) => {
    this.toParentRef = event.cmp.el;
    this.sources[0].setElement(this.toParentRef);
  }

  horizontalReady = (event) => {
    this.horizontalRef = event.cmp.el;
    this.sources[2].setElement(this.horizontalRef);
  }

  verticalReady = (event) => {
    this.verticalRef = event.cmp.el;
    this.sources[1].setElement(this.verticalRef);
  }

  snapReady = (event) => {
    this.snapRef = event.cmp.el;
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

}
