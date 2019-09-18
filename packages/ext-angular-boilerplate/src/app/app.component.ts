declare var Ext: any;
import { Component, VERSION, ChangeDetectorRef } from '@angular/core'
import { Router } from '@angular/router'
import { NgZone } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styles: [``]
})
export class AppComponent {
  isPhone = Ext.platformTags.phone;
  title = 'Sencha ExtAngular 7.0 Boilerplate - Angular v' + VERSION.full

  navTreeListCmp: any
  treeStore: any
  storeData = {
      children: [
        { id: '/', name: 'home', text: 'Home', iconCls: 'x-fa fa-home', leaf: true },
        { id: '/about', name: 'about', text: 'About', iconCls: 'x-fa fa-info', leaf: true }
      ]
  }

  constructor(private router: Router, private ngZone: NgZone, private cd: ChangeDetectorRef) {
    this.router = router
    this.treeStore = Ext.create('Ext.data.TreeStore', {
        rootVisible: true,
        root: this.storeData
    });
  }

  readyViewport = (event) => {
    console.log('readyViewport')
     //this.cd.detectChanges();
     var hash = window.location.hash.substr(2);
     //console.log(hash)
     if (hash == '') {hash = 'all';}
     var node = this.treeStore.findNode('name', hash);
     //console.log(node)
     this.navTreeListCmp.setSelection(node);
     this.nav(node);
}

  showAppMenu: boolean = true;
  toggleAppMenu = () => {
      console.log('toggle')
    this.showAppMenu = !this.showAppMenu
  }

  onHideAppMenu = () => {
    this.showAppMenu = false
  }

  selectionchangeNavTreeList(event) {
    if (event.record != null) {
        this.nav(event.record)
    }
}

  readyNavTreeList = (event) => {
    this.navTreeListCmp = event.detail.cmp;
    this.navTreeListCmp.setStore(this.treeStore);
 }

  nav(node) {
    //console.log('in nav function, node is:');console.dir(node)
    // if (node.childNodes.length > 0) {
    //     this.hideExamples = false
    // }
    // else {
    //     this.hideExamples = true
    // }

    // this.breadcrumbCmp.setSelection(node);
    // if (this.hideExamples == false) {
    //     this.collapseCode = true;
    //     this.dataviewNavCmp.setData(node.childNodes);
    //     this.codeButtonCmp.setHidden(true);
    //     this.selectionCmp.setStyle({display: 'flex'});
    //     this.routerCmp.setStyle({display: 'none'});
    // }
    // else {
    //     this.codeButtonCmp.setHidden(false);
    //     this.selectionCmp.setStyle({display: 'none'});
    //     this.routerCmp.setStyle({display: 'flex'});
    //     this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();
    //     this.setCodeTabs(node);
    // }

    //var me = this

    this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();

//    setTimeout(function(){
        // this.zone.run(() =>
        // {
        //     //console.log('here')
        // this.router.navigateByUrl(node.id).then();
        // //me.cd.detectChanges();
        // })

 //   }, 3000);


    //).then();
    // this.zone.run(function () {
    //     console.log(me.router)
    //     var d = document.getElementById('route')
    //     console.log(d)
    //     console.log(node.id)
    //     var r = me.router.navigate([node.id])
    //     this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();
    //     console.log(r)
    // })
    //this.cd.detectChanges();
}



//   navigate = (event) => {
//     var record = event.record;
//     var me = this
//     this.zone.run(function () {
//         me.router.navigate([record.data.id])
//     })
//   }



  responsiveConfig = {
    medium: {
      micro: true,
      width: 56
    },
    large: {
      micro: false,
      width: 200
    }
  }

}
