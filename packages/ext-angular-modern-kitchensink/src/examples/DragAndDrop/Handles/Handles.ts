import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'handles-dragdrop-component',
  templateUrl: "./Handles.html",
  styles: [`
  .handle-proxy {
    color: #FFF;
    text-align: center;
    width: 60px;
    height: 60px;
    background-color: #43A047;
    border-radius: 5px;
}
  `]
})
export class HandlesDragDropComponent implements OnInit  {

  constructor() { }

  parentRef: any;
  handleRepeatRef: any;
  dragRef: any;

  doDestroy() {
    Ext.destroy(this.sources);
  }

  parentReady = (ele) => {
    this.parentRef = ele.ext.el;
    this.sources[0].setConstrain(this.parentRef);
    this.sources[1].setConstrain(this.parentRef);
    this.sources[1].setHandle('#dragHandler');
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  handleRepeatReady = (ele) => {
    this.handleRepeatRef = ele.ext.el;
    this.sources[0].setElement(this.handleRepeatRef);
    this.sources[0].setHandle('#repeatHandler3,#repeatHandler2,#repeatHandler1');
 }

  dragReady = (ele) => {
    this.dragRef = ele.ext.el;
    this.sources[1].setElement(this.dragRef);
  }


  sources = [
    // This source uses handle to represent a repeating element,so when the item is dragged,
    // contextual information can be gained from the item.
    new Ext.drag.Source({
        groups: 'repeat',
        listeners: {
          dragstart: (source, info) => {
            const innerHTML = info.eventTarget.innerHTML;
            const ele = `<div style="color: #FFF;text-align: center;width: 60px;height: 60px;background-color: #43A047;border-radius: 5px;">${innerHTML}</div>`
            source.getProxy().setHtml(ele);
          }
        },
        proxy: {
          type: 'placeholder',
          html: '<div style="color:#FFF;text-align:center;width:60px;height:60px;background-color:#43A047;border-radius:5px;" />'
        }
    }),

    // This source is only draggable by the handle
    new Ext.drag.Source({})
];

  ngOnInit() {}

}
