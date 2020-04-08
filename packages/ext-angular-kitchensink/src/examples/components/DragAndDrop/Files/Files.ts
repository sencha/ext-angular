declare var Ext: any;
import { Component, ViewEncapsulation } from '@angular/core'
const DEFAULT_TEXT = 'Drag a file from your computer here';

@Component({
  selector: 'files-dragdrop-component',
  templateUrl: "./Files.html",
  styleUrls: [`./styles.css`],
  encapsulation: ViewEncapsulation.None
})

export class FilesDragDropComponent {

  parentRef: any;
  iconCls:string = 'drag-file-icon';
  labelText:string = DEFAULT_TEXT;
  timer:any;

  parentReady = (event) => {
    this.parentRef = event.cmp.el;
    this.target.setElement(this.parentRef);
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  onDragEnter() {
    this.iconCls = 'drag-file-icon active';
    console.log('#######1', this.iconCls);
  }

  onDragLeave() {
    this.iconCls = 'drag-file-icon';
    console.log('#######2', this.iconCls);
  }

  onDrop = (target, info) => {
    const files = info.files;
    this.iconCls =  'drag-file-icon dropped fa-spin';
    this.labelText = files.length > 1 ? `Dropped ${files.length} files.` : `Dropped ${files[0].name}`

    this.timer = setTimeout(() => {
      if(!this.parentRef.destroyed) {
        this.iconCls = 'drag-file-icon drag-file-fadeout';
        this.labelText = DEFAULT_TEXT;
        console.log('########3', this.labelText, this.iconCls);
      }
      this.timer = null;
    }, 2000);
  }

  target = new Ext.drag.Target({
    listeners: {
      dragenter: this.onDragEnter.bind(this),
      dragleave: this.onDragLeave.bind(this),
      drop: this.onDrop
    }
  });

  doDestroy() {
    clearInterval(this.timer);
    Ext.destroy(this.target);
  }

}
