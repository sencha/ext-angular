declare var Ext: any;
declare var BUILD_VERSION: any;
//import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
import { Component, OnInit, NgZone } from '@angular/core';
import {hljs} from 'highlightjs';
import 'highlightjs/styles/atom-one-dark.css';
import {navTreeRoot} from '../examples';
import { Router, NavigationEnd } from '@angular/router';
import { VERSION } from '@angular/core';
import { Subject } from "rxjs";
import { getFiles } from "./code_preview_helper";
import { _code } from "./code"

Ext.require([
    //'Ext.layout.*',
    'Ext.MessageBox',
    'Ext.Toast',
    'Ext.panel.Collapser',
    'Ext.data.TreeStore'
])
// const hljs: any = require('highlight.js/lib/highlight');
// hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
// hljs.registerLanguage('http', require('highlight.js/lib/languages/http'));
// hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
// hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
// hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

export class Route {
    hash: any
    hashlower: any
    component: any
    default: any


    constructor(hash, hashlower, component, defaultRoute) {
        try {
            if (!hash) {
                throw "error: hash param is required";
            }
        } catch (e) {
            console.error(e);
        }
        this.hash = hash;
        this.hashlower = hashlower;
        this.component = component;
        if (defaultRoute != undefined) {
            this.default = defaultRoute;
        }
    }

    isActiveRoute(hashedPath) {
        return hashedPath.replace("#", "") === this.hash;
    }
}




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    isPhone = Ext.os.is.Phone;
    ANGULAR_VERSION: any = VERSION.full
    treeStore: any
    hideSelections: any = false
    hideExamples: any = true
    blockstyle: any = {'background':'top','display':'block','text-align':'center'}
    bodyStyle: any = `
    backgroundSize: 20px 20px;
    borderWidth: 0px;
    backgroundColor: #e8e8e8;
    backgroundImage:
        linear-gradient(0deg, #f5f5f5 1.1px, transparent 0),
        linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)
    `
    wait: any
    dataviewCmp: any
    nestedlistCmp: any
    tpl: any = `
    <div class="app-thumbnail">
        <div class="app-thumbnail-icon-wrap">
        <div class="app-thumbnail-icon {navIcon}"></div>
        </div>
        <div class="app-thumbnail-text">{text}</div>
        <div class="{premiumClass}"></div>
    </div>`
    showCode: boolean = false;
    files: Array<any> = [];
    node: any
    node$: any = new Subject()
    isDesktop: boolean = Ext.os.is.Desktop;
    filterRegex: any
    filterVal: any
    showTreeFlag: any = false


    leftContainerCmp: any
    rightContainerCmp: any
    breadcrumbCmp: any
    codeButtonCmp: any
    navTreePanelCmp: any
    navTreeListCmp: any
    selectionCmp: any
    dataviewNavCmp: any
    routerCmp: any
    codePanelCmp: any
    tabPanelCmp: any

    routes: any

    navTreeView: any
    tplToolbar: any = `
    <div class="app-toolbar">
        {text} <span>{divider}</span>
    </div>`

    constructor(private router: Router, private ngZone: NgZone) {
        this.router = router
        this.wait = 12;
        // this.treeStore = Ext.create('Ext.data.TreeStore', {
        //     rootVisible: true,
        //     root: navTreeRoot
        // })

        // var navTreeRoot = {
        //     hash: 'all',
        //     iconCls: 'x-fa fa-home',
        //     leaf: false,
        //     text: 'All',
        //     children: window.menu
        // };


        this.treeStore = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: navTreeRoot
        });

        this.navTreeView = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: navTreeRoot
        });

        // console.log(navTreeRoot)
        // this.routes = this._getRoutes(navTreeRoot.children)
        // console.log(this.routes)

        // if (Ext.os.is.Phone) {
        //     this.collapsed = true;
        // }


    }

    // _getRoutes = (items) => {
    //     var _routes = []
    //     var me = this
    //     items.forEach(function(item) {
    //         item.leaf = !item.hasOwnProperty("children");
    //         item.hash = item.text.replace(/ /g, "");
    //         item.hashlower = item.hash.toLowerCase();
    //         if (item.children == undefined) {
    //             _routes.push(
    //                 new Route(
    //                     item.hash,
    //                     item.hashlower,
    //                     item.component,
    //                     item.default
    //                 )
    //             );
    //         } else {
    //             me._getRoutes(item.children);
    //         }
    //     });
    //     return _routes;
    // }



    afterAllLoaded = (readyEventName) => {
        console.log('afterAllLoaded: ' + readyEventName)
        this.wait = this.wait - 1;

        if (this.wait == 0) {
            console.log('the wait is over!')

            var hash = window.location.hash.substr(1);
            console.log(hash)
            if (hash == '') {hash = 'all';}
            //var node = this.navTreeListCmp.getStore().findNode('hash', hash);
            var node = this.navTreeListCmp.getStore().findNode('name', hash);
            this.navTreeListCmp.setSelection(node);
            //this.breadcrumbCmp.setSelection(node)
            this.navigate(node);
        }

        // if (this.wait == 0) {
        //     console.log('the wait is over!')

        //     this.initialize()

        //     var localNode = this.treeStore.getNodeById(location.pathname);
        //     if(localNode) {
        //         this.node = localNode;
        //         this.node$.next(this.treeStore.getNodeById(location.pathname));
        //     }
        //     else {
        //         console.log("Not a valid node. Probably looking at resources");
        //     }
        // }
    }

    readyLeftContainer = (event) => {
        this.leftContainerCmp = event.detail.cmp;
        var title
        if(window['title'] == null) {
            title = 'Sencha ExtAngular Kitchen Sink'
        }
        else {
            title = window['title']
        }
        this.leftContainerCmp.updateHtml(title); // eslint-disable-line no-undef
        this.afterAllLoaded('readyLeftContainer');
    }

    readyRightContainer = (event) => {
        this.rightContainerCmp = event.detail.cmp;
        this.rightContainerCmp.updateHtml('Build: ' + BUILD_VERSION); // eslint-disable-line no-undef
        this.afterAllLoaded('readyRightContainer');
    }

    readyBreadcrumb = (event) => {
        this.breadcrumbCmp = event.detail.cmp;
        this.breadcrumbCmp.setSelection(this.node)
        this.afterAllLoaded('readyBreadcrumb');
    }

    readyCodeButton = (event) => {
        this.codeButtonCmp = event.detail.cmp;
        this.afterAllLoaded('readyCodeButton');
    }

    readyNavTreePanel = (event) => {
        this.navTreePanelCmp = event.detail.cmp;
        if(Ext.os.is.Phone) {
            this.navTreePanelCmp.setWidth('100%');
        }
        this.afterAllLoaded('readyNavTreePanel');
    }

    readyNavTreeList = (event) => {
        this.navTreeListCmp = event.detail.cmp;
        this.navTreeListCmp.setStore(this.navTreeView);
        this.afterAllLoaded('readyNavTreeList');
    }

    readySelection = (event) => {
        this.selectionCmp = event.detail.cmp;
        var bodyStyle = `
            backgroundSize: 20px 20px;
            borderWidth: 0px;
            backgroundColor: #e8e8e8;
            backgroundImage:
            linear-gradient(0deg, #f5f5f5 1.1px, transparent 0),
            linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)
        `;
        this.selectionCmp.setBodyStyle(bodyStyle);
        this.afterAllLoaded('readySelection');
    }

    readyDataviewNav = (event) => {
        this.dataviewNavCmp = event.detail.cmp;
        this.afterAllLoaded('readyDataviewNav');
    }

    readyRouter = (event) => {
        this.routerCmp = event.detail.cmp;
        //this.router = event.target;
        this.afterAllLoaded('readyRouter');
    }

    readyCodePanel = (event) => {
        this.codePanelCmp = event.detail.cmp;
        this.afterAllLoaded('readyCodePanel');
    }

    readyTabPanel = (event) => {
        this.tabPanelCmp = event.detail.cmp;
        this.afterAllLoaded('readyTabPanel');
    }

    readyNestedlist = (event) => {
        this.nestedlistCmp = event.detail.cmp;
        this.afterAllLoaded('readyNestedlist');
    }



    onNavChange = (nodeId, node) => {
        if (node.isLeaf()) {
        this.nestedlistCmp.goToLeaf(node);
        } else {
        this.nestedlistCmp.goToNode(node);
        }
        if(nodeId === '' || nodeId) {
        location.hash = nodeId;
        //this.navigate(nodeId)
        this.navigate(node)
        }
    }

    toggleCode = () => {
        console.log('toggleCode')
        this.showCode = !this.showCode;
        //this.highlightCode();
    }

    doTap = (event, record) => {
    }

    doItemTap = (event, record) => {
        var id = event.record.data.id
        this.onNavChange(id, event.record)
    }

    doBack = (event) => {
        var id = event.node.getId()
        this.onNavChange(id, event.node)
    }

    clickDataviewNav = (event) => {
        // var id = event.location.record.data.id
        // this.navigate(id)
        this.navigate(event.location.record)
    }

    breadcrumbChange = (event) => {
        //console.log('breadcrumbChange')
        //console.log(event)
        this.breadcrumbCmp.setSelection(event.node);
        //this.navigate(event.node.id);
        this.navigate(event.node);
    }

    // navigate(location) {
    //     //console.log(location)
    //     //this.router.navigateByUrl('' + location)
    //     this.ngZone.run(() => this.router.navigateByUrl(location)).then();
    // }

    navigate = (record) => {
        console.log(record)
        if (record == null) {
            return;
        }
        //this.ngZone.run(() => this.router.navigateByUrl(record)).then();

        //var hash = record.data.hash;
        var hash = record.data.name;
        var childNum = record.childNodes.length;
        //var node = this.dataviewNavCmp.getStore().findNode('hash', hash);
        var node = this.dataviewNavCmp.getStore().findNode('name', hash);
        //console.log(node)
        this.breadcrumbCmp.setSelection(node);

        if (childNum == 0) { //} && hash != undefined) {
            //window.location.hash = '#' + hash;
            this.showRouter(node);
            //console.log(' ready to route')
            //var location = '#' + hash
            //console.log(location)
            //console.log(node)
            //this.router.navigateByUrl(node.id)
            // this.files = getFiles(node, _code);
            // this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();
        }
        else {
            //window.location.hash = '#' + hash;
            this.showSelection(node);
        }

        if(Ext.os.is.Phone) {
            this.navTreePanelCmp.setCollapsed(true);
        }
    }

    showSelection = (node) => {
       // this.selectionCmp.setHidden(false);
        //this.router.hidden = true;

        this.files = []
        console.log(node)
        this.dataviewNavCmp.setData(node.childNodes);


        this.hideSelections = false;
        this.hideExamples = true;
        //this.codeButtonCmp.setHidden(true);
    }

    showRouter = (node) => {
       // this.selectionCmp.setHidden(true);
        console.log('in showRouter')
        console.dir(this)
        this.files = getFiles(node, _code);
        this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();
        //this.router.hidden = false;
        this.hideSelections = true;
        this.hideExamples = false;
        //this.codeButtonCmp.setHidden(false);

        // if(Ext.os.is.Phone) {
        //     this.navTreePanelCmp.setCollapsed(true);
        // }

        this.setCodeTabs(node);
    }


    setCodeTabs = (node) => {
        var hash = window.location.hash.substr(1);
        var currentRoute = {};

        //console.dir(node)

        console.log('setCodeTabs')
        console.log(node.data.name.replace(/ /g,""))
        console.log(window.location.hash)

        var componentName = node.data.name.replace(/ /g,"")

        var codeMap = _code[componentName];
        console.log(codeMap)
        // this.tabPanelCmp.removeAll();
        // var componentName = currentRoute.hash + 'Component';

        //return


        // window.routes.forEach((route) => {
        //     if(hash == '') {
        //         if (route.default == true) {currentRoute = route;}
        //     }
        //     else {
        //         if (route.hash == hash) {currentRoute = route;}
        //     }
        // });

        // var codeMap = _code[currentRoute.hashlower];
        this.tabPanelCmp.removeAll();
        // var componentName = currentRoute.hash + 'Component';



        this.setTab(codeMap, componentName + '.html');
        this.setTab(codeMap, componentName + '.ts',);
        this.setTab(codeMap, componentName + '.scss',);
        this.setTab(codeMap, componentName + '.css',);
        this.setTab(codeMap, componentName + 'Data.js');
        this.setTab(codeMap, componentName + 'Dummy.js');
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }

    setTab = (codeMap, file) => {
        var codeMapFile = codeMap[file];
        if (codeMapFile != undefined) {
            this.tabPanelCmp.add(
                {
                    xtype: 'panel', title: file, ui: 'code-panel', layout: 'fit', userSelectable: true, scrollable: true,
                    tab: {ui: 'app-code-tab', flex: 0, padding: '0 5 0 0', minWidth: 220, maxWidth: 250},
                    html: `<pre><code class='code'>${codeMapFile.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
                }
            );
        }
    }






    highlightCode() {
//        document.querySelectorAll(".code").forEach((el) => {
//           hljs.highlightBlock(el);
//        });
    }

    selectionchangeNavTreeList(event) {
        var record = event.record;
        console.log(record)
        this.navigate(record);


        // var record = event.record;
        // if(record && record.data && record.data.id) {
        //     var componentSelectedId = record.data.id;
        //     //console.log(componentSelectedId)
        //     //this.router.navigate([componentSelectedId])

        //     this.ngZone.run(() => this.router.navigate([componentSelectedId])).then();
        // }
    }

    toggleTree = function(){
        //console.log('toggleTree')
        this.showTreeFlag = !this.showTreeFlag;
    }

    filterNav = function(event) {
        var oldValue = event.oldValue;
        var newValue = event.newValue;
        this.filterVal = newValue;
        //console.log("In filterNav.oldValue : " + oldValue + " newValue: " + newValue);
        const store = this.treeStore;
        var escapeRegex = Ext.String.escapeRegex(newValue);
        //console.log(escapeRegex);
        this.filterRegex = new RegExp(escapeRegex, 'i');
        store.filterBy(record => this.containsMatches(record));
    }

    containsMatches(node) {
        try {
        const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
        if (found) node.expand();
        node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">' + this.filterVal + '</span>')
        return found;
        }
        catch(e) {
        console.log('containsMatches')
        console.error(e)
        }
    }


    initialize = () => {
        //console.log(navTreeRoot)

        try {
            this.node$.subscribe(({
                next: (v) => {
                this.node = v;
                //console.log(v)
                this.files = getFiles(v, _code);
//                console.log(this.files)
//                this.highlightCode();
                this.hideSelections = this.node.childNodes.length > 0 ? false : true
                this.hideExamples = this.node.childNodes.length > 0 ? true : false
                if(this.hideSelections == false) {
                    if (this.dataviewCmp != undefined) {
                        this.dataviewCmp.setData(this.node.childNodes)
                    }
                }
                else {
                    var location = window.location.hash.substr(1);
                    this.navigate(location)
                }
                }
            }));

            this.router.events.subscribe((val) => {
                if (val instanceof NavigationEnd) {
                var localNode = this.treeStore.getNodeById(val.url);
                if (localNode) {
                    this.files = getFiles(localNode, _code);
                    this.showCode = false;
                    this.node$.next(localNode);
                } else {
                    console.log("Not a valid node. Probably looking at resources");
                }

                this.node = localNode;
                //console.log(this.breadcrumbCmp)
                this.breadcrumbCmp.setSelection(this.node)
                }
            });
        }
        catch(e) {
            console.log('constructor')
            console.error(e)
        }
    }

    ngOnInit() {
        // var localNode = this.treeStore.getNodeById(location.pathname);
        // if(localNode) {
        //     this.node = localNode;
        //     this.node$.next(this.treeStore.getNodeById(location.pathname));
        // }
        // else {
        //     console.log("Not a valid node. Probably looking at resources");
        // }
    }




}

@Component({
    selector: 'dummy-component',
    template: ``,
    styles: [``]
})
export class DummyComponent {}

import Hammer from 'hammerjs';
import { OnDestroy, ElementRef } from '@angular/core';

@Component({
    selector: 'dummy-hammer-component',
    template: ``,
    styles: [``]
})
export class MyComponentUsingGestures implements OnInit, OnDestroy {
    constructor(private elementRef: ElementRef) {}
    tap() {}

    _hammer:any;
    ngOnInit() {
        let element = this.elementRef.nativeElement;
        this._hammer = new Hammer.Manager(element, {
        recognizers: [
            [Hammer.Tap],
        ],
        });
        this._hammer.on('tap', this.tap);
    }

    ngOnDestroy() {
        if (this._hammer) {
        this._hammer.off('tap', this.tap);
        this._hammer.destroy();
        this._hammer = null;
        }
    }
}
