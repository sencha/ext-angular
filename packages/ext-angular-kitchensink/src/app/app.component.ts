declare var Ext: any;
declare var BUILD_VERSION: any;
import { Component, OnInit, NgZone } from '@angular/core';
import {navTreeRoot} from '../examples';
import { Router } from '@angular/router';
import { VERSION } from '@angular/core';
import { Subject } from "rxjs";
import { getFiles } from "./code_preview_helper";
import { _code } from "./code"

Ext.require([
    'Ext.MessageBox',
    'Ext.Toast',
    'Ext.panel.Collapser',
    'Ext.data.TreeStore'
])
const hljs: any = require('highlight.js/lib/highlight');
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('http', require('highlight.js/lib/languages/http'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isPhone = Ext.os.is.Phone;
    ANGULAR_VERSION: any = VERSION.full
    treeStore: any
    hideSelections: any = false
    hideExamples: any = true
    hideCode: any = true
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
        this.wait = 14;
        this.treeStore = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: navTreeRoot
        });
    }

    afterAllLoaded = (readyEventName) => {
        console.log('afterAllLoaded: ' + readyEventName)
        this.wait = this.wait - 1;

        if (this.wait == 0) {
            console.log('the wait is over!')
            var hash = window.location.hash.substr(1);
            console.log('hash: ' + hash)
            if (hash == '') {hash = 'all';}
            var node = this.navTreeListCmp.getStore().findNode('name', hash);
            this.nav(node);
        }
    }

    nav(node) {
        console.log('in nav function, node is:')
        console.dir(node)
        if (node.childNodes.length > 0) {
            this.hideExamples = false
            this.hideSelections = true
        }
        else {
            this.hideExamples = true
            this.hideSelections = false
        }
        //this.codeButtonCmp.setHidden(this.hideSelections)
        //this.dataviewNavCmp.setHidden(this.hideExamples)
        //this.routerCmp.setHidden(this.hideSelections)
        if (this.hideExamples == false) {
            console.log('showing selections')

            this.codeButtonCmp.setHidden(true);

            this.selectionCmp.setStyle({display: 'flex'});
            this.routerCmp.setStyle({display: 'none'});

            this.codePanelCmp.setCollapsed(true);
            this.navTreeListCmp.setSelection(node);
            this.breadcrumbCmp.setSelection(node);
            this.dataviewNavCmp.setData(node.childNodes);
        }
        else {
            console.log('showing example')

            //this.navTreePanelCmp.setStyle({display: 'none'});

            //this.selectionCmp.setHidden(true)

            this.showCode = true
            this.codeButtonCmp.setHidden(false);

            this.selectionCmp.setStyle({display: 'none'});
            this.routerCmp.setStyle({display: 'flex'});


            //[style]="{zIndex: 100, backgroundColor: 'white'}"


            this.codePanelCmp.setCollapsed(false);
            this.navTreeListCmp.setSelection(node);
            this.breadcrumbCmp.setSelection(node);
            this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();
            this.setCodeTabs(node);
        }
    }

    selectionchangeNavTreeList(event) {
        this.nav(event.record)
    }

    clickDataviewNav = (event) => {
        this.nav(event.location.record);
    }

    changeBreadcrumb = (event) => {
        this.nav(event.node);
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
        this.navTreeListCmp.setStore(this.treeStore);
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

    toggleCode = () => {
        console.log('toggleCode')

        this.codePanelCmp.setCollapsed(this.showCode)
        this.showCode = !this.showCode
        // [iconCls]="'x-font-icon ' + (showCode ? 'md-icon-close' : 'md-icon-code')"
        // this.showCode = !this.showCode;
        // this.highlightCode();
        // //this.hideCode = !this.hideCode;
        // console.log(this.hideCode)
        // this.codePanelCmp.setHidden(!this.hideCode)
        // this.hideCode = !this.hideCode;
    }

    itemtapNestedList = (event, record) => {
        var id = event.record.data.id
        this.onNavChange(id, event.record)
    }

    backNestedList = (event) => {
        var id = event.node.getId()
        this.onNavChange(id, event.node)
    }

    onNavChange = (nodeId, node) => {
        this.nav(node);
        return

        if (node.isLeaf()) {
        this.nestedlistCmp.goToLeaf(node);
        } else {
        this.nestedlistCmp.goToNode(node);
        }
        if(nodeId === '' || nodeId) {
        location.hash = nodeId;
        //this.navigate(nodeId)
        this.nav(node)
        }
    }



    // navigate(location) {
    //     //console.log(location)
    //     //this.router.navigateByUrl('' + location)
    //     this.ngZone.run(() => this.router.navigateByUrl(location)).then();
    // }

    // navigate = (record) => {
    //     console.log(record)
    //     if (record == null) {
    //         return;
    //     }
    //     //this.ngZone.run(() => this.router.navigateByUrl(record)).then();

    //     //var hash = record.data.hash;
    //     var hash = record.data.name;
    //     var childNum = record.childNodes.length;
    //     //var node = this.dataviewNavCmp.getStore().findNode('hash', hash);
    //     var node = this.dataviewNavCmp.getStore().findNode('name', hash);
    //     //console.log(node)
    //     //this.breadcrumbCmp.setSelection(node);

    //     // if (childNum == 0) { //} && hash != undefined) {
    //     //     //window.location.hash = '#' + hash;
    //     //     this.showRouter(node);
    //     //     //console.log(' ready to route')
    //     //     //var location = '#' + hash
    //     //     //console.log(location)
    //     //     //console.log(node)
    //     //     //this.router.navigateByUrl(node.id)
    //     //     // this.files = getFiles(node, _code);
    //     //     // this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();
    //     // }
    //     // else {
    //     //     //window.location.hash = '#' + hash;
    //     //     this.showSelection(node);
    //     // }

    //     if(Ext.os.is.Phone) {
    //         this.navTreePanelCmp.setCollapsed(true);
    //     }
    // }



    setCodeTabs = (node) => {
        //var hash = window.location.hash.substr(1);
        //var currentRoute = {};

        //console.dir(node)

        //console.log('setCodeTabs')
        //console.log(node.data.name.replace(/ /g,""))
        //console.log(window.location.hash)

        //this.files = getFiles(node, _code);


        this.files = getFiles(node, _code);
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
        console.log('a')
        // var componentName = currentRoute.hash + 'Component';
        this.setTab(codeMap, componentName + '.html');
        this.setTab(codeMap, componentName + '.ts',);
        this.setTab(codeMap, componentName + '.scss',);
        this.setTab(codeMap, componentName + '.css',);
        this.setTab(codeMap, componentName + 'Data.js');
        this.setTab(codeMap, componentName + 'Dummy.js');
        console.log('b')
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
            console.log('c')
        });
    }

    setTab = (codeMap, file) => {
        var codeMapFile = codeMap[file];
        if (codeMapFile != undefined) {
            this.tabPanelCmp.add(
                {
                    xtype: 'panel', title: file, ui: 'code-panel', layout: 'fit', userSelectable: {element: true,bodyElement: true}, scrollable: true,
                    tab: {ui: 'app-code-tab', flex: 0, padding: '0 5 0 0', minWidth: 220, maxWidth: 250},
                    html: `<pre style="user-select: text;"><code class='code'>${codeMapFile.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
                }
            );
        }
    }

    highlightCode() {
       document.querySelectorAll(".code").forEach((el) => {
          hljs.highlightBlock(el);
       });
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


//     initialize = () => {
//         //console.log(navTreeRoot)

//         try {
//             this.node$.subscribe(({
//                 next: (v) => {
//                 this.node = v;
//                 //console.log(v)
//                 this.files = getFiles(v, _code);
// //                console.log(this.files)
// //                this.highlightCode();
//                 //this.hideSelections = this.node.childNodes.length > 0 ? false : true
//                 this.hideExamples = this.node.childNodes.length > 0 ? true : false
//                 if(this.hideExamples == true) {
//                     if (this.dataviewCmp != undefined) {
//                         this.dataviewCmp.setData(this.node.childNodes)
//                     }
//                 }
//                 else {
//                     var location = window.location.hash.substr(1);
//                     this.navigate(location)
//                 }
//                 }
//             }));

//             this.router.events.subscribe((val) => {
//                 if (val instanceof NavigationEnd) {
//                 var localNode = this.treeStore.getNodeById(val.url);
//                 if (localNode) {
//                     this.files = getFiles(localNode, _code);
//                     this.showCode = false;
//                     this.node$.next(localNode);
//                 } else {
//                     console.log("Not a valid node. Probably looking at resources");
//                 }

//                 this.node = localNode;
//                 //console.log(this.breadcrumbCmp)
//                 this.breadcrumbCmp.setSelection(this.node)
//                 }
//             });
//         }
//         catch(e) {
//             console.log('constructor')
//             console.error(e)
//         }
//     }

    // ngOnInit() {
    //     // var localNode = this.treeStore.getNodeById(location.pathname);
    //     // if(localNode) {
    //     //     this.node = localNode;
    //     //     this.node$.next(this.treeStore.getNodeById(location.pathname));
    //     // }
    //     // else {
    //     //     console.log("Not a valid node. Probably looking at resources");
    //     // }
    // }


// export class Route {
//     hash: any
//     hashlower: any
//     component: any
//     default: any

//     constructor(hash, hashlower, component, defaultRoute) {
//         try {
//             if (!hash) {
//                 throw "error: hash param is required";
//             }
//         } catch (e) {
//             console.error(e);
//         }
//         this.hash = hash;
//         this.hashlower = hashlower;
//         this.component = component;
//         if (defaultRoute != undefined) {
//             this.default = defaultRoute;
//         }
//     }

//     isActiveRoute(hashedPath) {
//         return hashedPath.replace("#", "") === this.hash;
//     }
// }




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


    // showSelection = (node) => {
    //    // this.selectionCmp.setHidden(false);
    //     //this.router.hidden = true;

    //     this.files = []
    //     console.log(node)
    //     this.dataviewNavCmp.setData(node.childNodes);


    //     //this.hideSelections = false;
    //     this.hideExamples = true;
    //     //this.codeButtonCmp.setHidden(true);
    // }

    // showRouter = (node) => {
    //    // this.selectionCmp.setHidden(true);
    //     console.log('in showRouter')
    //     console.dir(this)
    //     this.files = getFiles(node, _code);
    //     this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();
    //     //this.router.hidden = false;
    //     //this.hideSelections = true;
    //     this.hideExamples = false;
    //     //this.codeButtonCmp.setHidden(false);

    //     // if(Ext.os.is.Phone) {
    //     //     this.navTreePanelCmp.setCollapsed(true);
    //     // }

    //     this.setCodeTabs(node);
    // }
