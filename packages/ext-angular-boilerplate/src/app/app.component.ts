declare var Ext: any;
import { Component, VERSION } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    styles: [``]
})
export class AppComponent {
    isPhone = Ext.platformTags.phone;
    title = "Sencha ExtAngularModern 7.1 Boilerplate - Angular v" + VERSION.full;

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
      this.treeStore = Ext.create("Ext.data.TreeStore", {
        rootVisible: true,
        root: this.storeData
      });
    }

    readyViewport = ({ cmp, cmpObj }) => {
      this['navTreelist'] = cmpObj['navTreelist'];
      this['navTreelist'].setStore(this.treeStore)
      var hash = window.location.hash.substr(2);
      var node = this['navTreelist'].getStore().findNode('name', hash);
      this['navTreelist'].setSelection(node);
    };

    showAppMenu: boolean = true;
    toggleAppMenu = () => {
      this.showAppMenu = !this.showAppMenu;
    };

    onHideAppMenu = () => {
      this.showAppMenu = false;
    };

    selectionchangeNavTreeList(event) {
      if (event.record != null) {
        this.nav(event.record);
      }
    }

    nav(node) {
      var hash = '#' + node.id;
      window.location.hash = hash;
    }

    responsiveConfig = {
        medium: {
            micro: true,
            width: 56
        },
        large: {
            micro: false,
            width: 200
        }
    };
}
