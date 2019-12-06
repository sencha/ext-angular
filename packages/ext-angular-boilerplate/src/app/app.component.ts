declare var Ext: any;
import { Component, VERSION, ChangeDetectorRef } from "@angular/core";
import { Router } from "@angular/router";
import { NgZone } from "@angular/core";
//import { extnameToProperty } from "@sencha/ext-runtime-modern-base/util";

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
                id: "/",
                name: "home",
                text: "Home",
                iconCls: "x-fa fa-home",
                leaf: true
            },
            {
                id: "/about",
                name: "about",
                text: "About",
                iconCls: "x-fa fa-info",
                leaf: true
            }
        ]
    };

    constructor(
        private router: Router,
        private ngZone: NgZone,
        private cd: ChangeDetectorRef
    ) {
        this.router = router;
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
        // this.nav(node);

        // var me = this;
        // setTimeout(function(){
        //   var r = document.getElementById('route')
        //   console.dir(r)
        //   var hash = window.location.hash.substr(2);
        //   //console.log(hash)
        //   if (hash == '') {hash = 'all';}
        //   var node = me.treeStore.findNode('name', hash);
        //   console.log(node)
        //   me['navTreelistCmp'].setSelection(node);
        //   me.nav(node);
        // }, 0);
    };

    showAppMenu: boolean = true;
    toggleAppMenu = () => {
        console.log("toggle");
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

    // readyNavTreeList = ({ cmp, cmpObj }) => {
    //     this.navTreeListCmp = cmp;
    //     this.navTreeListCmp.setStore(this.treeStore);
    // };

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

        console.log(node.id);
        this.router.navigateByUrl(node.id);

        //this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();

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
    };
}
