declare var Ext: any;
import {Component, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'handles-dragdrop-component',
  templateUrl: "./Handles.html",
  styleUrls: [`./styles.css`],
  encapsulation: ViewEncapsulation.None
})
export class HandlesDragDropComponent {

  parentRef: any;
  handleRepeatRef: any;
  dragRef: any;

  parentReady = (ele) => {
    this.parentRef = ele.ext.el;
    this.sources[0].setConstrain(this.parentRef);
    this.sources[1].setConstrain(this.parentRef);
  }

  handleRepeatReady = (ele) => {
    this.handleRepeatRef = ele.ext.el;
    this.sources[0].setElement(this.handleRepeatRef);
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
        handle: '.handle',
        listeners: {
          dragstart: (source, info) => {
            source.getProxy().setHtml(info.eventTarget.innerHTML);
          }
        },
        proxy: {
          type: 'placeholder',
          cls: 'handle-proxy'
        }
    }),

    // This source is only draggable by the handle
    new Ext.drag.Source({
      handle: '.handle',
    })
  ];

}
