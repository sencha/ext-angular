declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'simple-dragdrop-component',
  templateUrl: "./Simple.html",
  styles: [``]
})
export class SimpleDragDropComponent {

  dragText:any = Ext.String.format('Drag Me!');

  panelRef: any;
  containerRef: any;

  onDragMove(source, info) {
    const pos = info.element.current;
    this.dragText = Ext.String.format('X: {0}, Y: {1}', Math.round(pos.x), Math.round(pos.y));
  }

  onDragEnd(source, info) {
    this.dragText = Ext.String.format('Drag Me!');
  }

  doDestroy() {
    Ext.destroy(this.source);
  }

  onParentReady = (event) => {
    this.panelRef = event.cmp.el;
    this.source.setConstrain(this.panelRef);
    this.panelRef.destroy = this.doDestroy.bind(this);
  }

  onElementReady = (event) => {
    this.containerRef = event.cmp.el;
    this.source.setElement(this.containerRef);
  }

  source = new Ext.drag.Source({
    listeners: {
        dragend: this.onDragEnd.bind(this),
        dragmove: this.onDragMove.bind(this)
    }
  });

}
