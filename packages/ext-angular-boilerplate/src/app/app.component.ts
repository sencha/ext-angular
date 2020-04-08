declare var Ext: any;
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "app-root",
  //templateUrl: "app.component.html",
  template: `
  <ExtContainer
  (ready)="readyViewport($event)"
  [viewport]="true"
  layout="fit"
  padding="0 0 0 10"
>

  <ExtTitlebar [title]="title" docked="top">
    <ExtButton align="left" [hidden]="false" iconCls="x-fa fa-bars" (tap)="toggleAppMenu($event)" ripple="false"></ExtButton>
  </ExtTitlebar>

  <ExtPanel docked="left" shadow="true" [hidden]="hideAppMenu">
    <ExtTreelist
      extname="navTreelist"
      (selectionchange)="selectionchangeNavTreeList($event)"
      [width]="200"
      ui="nav"
      expanderFirst="false"
    >
    </ExtTreelist>
  </ExtPanel>

  <ExtContainer
    extname="router"
    scrollable="true"
    layout="fit"
  >
    <div #extitem style="width:100%;">
      <router-outlet id="route"></router-outlet>
    </div>
  </ExtContainer>

</ExtContainer>
  `,
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
