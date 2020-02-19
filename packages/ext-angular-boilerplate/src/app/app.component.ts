declare var Ext: any;
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [``]
})
export class AppComponent {
  isPhone = Ext.platformTags.phone;
  title = "Sencha ExtAngularModern 7.2 Boilerplate - Angular v" + VERSION.full;

  navTreeListCmp: any;
  treeStore: any;
  storeData = {
    children: [
      {
        id: "/about",
        name: "about",
        text: "About",
        iconCls: "x-fa fa-info",
        leaf: true
      },
      {
          id: "/home",
          name: "home",
          text: "Home",
          iconCls: "x-fa fa-home",
          leaf: true
      }
    ]
  };

  constructor() {
    this.treeStore = {
      xtype: 'tree',
      rootVisible: true,
      root: this.storeData
    };
  }

  readyViewport = ({ cmp, cmpObj }) => {
    this['navTreelist'] = cmpObj['navTreelist'];
    this['navTreelist'].setStore(this.treeStore)
    var hash = window.location.hash.substring(2);
    if (hash == '') {
      hash = 'about';
    }
    var node = this['navTreelist'].getStore().findNode('name', hash);
    this['navTreelist'].setSelection(node);
  };

  hideAppMenu: boolean = false;
  toggleAppMenu = () => {
    this.hideAppMenu = !this.hideAppMenu;
  };

  selectionchangeNavTreeList(event) {
    if (event.record != null) {
      this.nav(event.record);
    }
  }

  nav(node) {
    window.location.hash = '#' + node.id;
  }

}
