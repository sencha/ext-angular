import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'simple-dragdrop-component',
  templateUrl: "./Simple.html",
  styles: [``]
})
export class SimpleDragDropComponent implements OnInit  {

  constructor() { }

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

  onParentReady = (ele) => {
    this.panelRef = ele.ext.el;
    this.source.setConstrain(this.panelRef);
    this.panelRef.destroy = this.doDestroy.bind(this);
  }

  onElementReady = (ele) => {
    this.containerRef = ele.ext.el;
    this.source.setElement(this.containerRef);
  }

  source = new Ext.drag.Source({
    listeners: {
        dragend: this.onDragEnd.bind(this),
        dragmove: this.onDragMove.bind(this)
    }
  });

  ngOnInit() {}

}
