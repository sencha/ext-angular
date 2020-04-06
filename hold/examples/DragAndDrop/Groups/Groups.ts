declare var Ext: any;
import { Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'groups-dragdrop-component',
  templateUrl: "./Groups.html",
  styleUrls: [`./styles.css`],
  encapsulation: ViewEncapsulation.None
})

export class GroupsDragDropComponent {

  parentRef: any;
  src1Ref: any;
  src2Ref: any;
  srcbRef: any;
  tar1Ref: any;
  tar2Ref: any;
  tarbRef: any;

  doDestroy() {
    this.sources.forEach(Ext.destroy.bind(Ext));
  }

  parentReady = (event) => {
    this.parentRef = event.cmp.el;
    this.sources.slice(0, 3).forEach((source, i) => {
      source.setConstrain(this.parentRef);
    });
    this.parentRef.destroy = this.doDestroy.bind(this);
  }

  src1Ready = (event) => {
    this.src1Ref = event.cmp.el;
    this.sources[0].setElement(this.src1Ref);
  }

  src2Ready = (event) => {
    this.src2Ref = event.cmp.el;
    this.sources[1].setElement(this.src2Ref);
  }

  srcbReady = (event) => {
    this.srcbRef = event.cmp.el;
    this.sources[2].setElement(this.srcbRef);
  }

  tar1Ready = (event) => {
    this.tar1Ref = event.cmp.el;
    this.sources[3].setElement(this.tar1Ref);
  }

  tar2Ready = (event) => {
    this.tar2Ref = event.cmp.el;
    this.sources[4].setElement(this.tar2Ref);
  }

  tarbReady = (event) => {
    this.tarbRef = event.cmp.el;
    this.sources[5].setElement(this.tarbRef);
  }

  createSource = (cfg) => new Ext.drag.Source(
    Object.assign(cfg, {
      proxy: {
        type: 'placeholder',
        cls: 'group-proxy',
        invalidCls: 'group-proxy-invalid',
        validCls: 'group-proxy-valid',
        html: 'Drag'
      }
    })
  );

  sources = [
    this.createSource({
        id: 'group1-source',
        // This source will only interact with targets that belong to group1
        groups: 'group1'
    }),
    this.createSource({
        id: 'group2-source',
        // This source will only interact with targets that belong to group2
        groups: 'group2'
    }),
    this.createSource({
        id: 'both-source',
        // This source will only interact with targets that belong to group1 or group2
        groups: ['group1', 'group2']
    }),

    new Ext.drag.Target({
        id: 'group1-target',
        // This target will only interact with sources that belong to group1
        groups: 'group1'
    }),
    new Ext.drag.Target({
        id: 'group2-target',
        // This target will only interact with sources that belong to group2
        groups: 'group2'
    }),
    new Ext.drag.Target({
        id: 'both-target',
        // This target will only interact with sources that belong to group1 or group2
        groups: ['group1', 'group2']
    })
];

}
