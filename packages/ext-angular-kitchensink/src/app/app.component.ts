declare var Ext: any;
declare var BUILD_VERSION: any;
import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import {navTreeRoot} from '../examples';
import { Router } from '@angular/router';
import { VERSION } from '@angular/core';
//import { Subject } from "rxjs";
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

    collapseCode: boolean = true;
    hideExamples: any = true;
    showTreeFlag: any = false;

    blockstyle: any = {'background':'top','display':'block','text-align':'center'}
    bodyStyle: any = `
    backgroundSize: 20px 20px;
    borderWidth: 0px;
    backgroundColor: #e8e8e8;
    backgroundImage:
        linear-gradient(0deg, #f5f5f5 1.1px, transparent 0),
        linear-gradient(90deg, #f5f5f5 1.1px, transparent 0)
    `

    files: Array<any> = [];
    node: any

    isDesktop: boolean = Ext.os.is.Desktop;
    filterRegex: any
    filterVal: any

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
    nestedlistCmp: any

    routes: any

    tpl: any = `
    <div class="app-thumbnail">
        <div class="app-thumbnail-icon-wrap">
        <div class="app-thumbnail-icon {navIcon}"></div>
        </div>
        <div class="app-thumbnail-text">{text}</div>
        <div class="{premiumClass}"></div>
    </div>`

    tplToolbar: any = `
    <div class="app-toolbar">
        {text} <span>{divider}</span>
    </div>`

    constructor(private router: Router, private ngZone: NgZone, private cd: ChangeDetectorRef) {
        this.router = router
        this.treeStore = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: navTreeRoot
        });
    }

    readyViewport = (event) => {
        var hash = window.location.hash.substr(1);
        if (hash == '') {hash = 'all';}
        var node = this.treeStore.findNode('name', hash);
        console.log('1')
        this.nav(node);
    }

    nav(node) {
        console.log('in nav function, node is:');console.dir(node)
        if (node.childNodes.length > 0) {
            this.hideExamples = false
        }
        else {
            this.hideExamples = true
        }
        this.navTreeListCmp.setSelection(node);
        this.breadcrumbCmp.setSelection(node);
        if (this.hideExamples == false) {
            this.collapseCode = true;
            this.dataviewNavCmp.setData(node.childNodes);
            this.codeButtonCmp.setHidden(true);
            this.selectionCmp.setStyle({display: 'flex'});
            this.routerCmp.setStyle({display: 'none'});
        }
        else {
            this.codeButtonCmp.setHidden(false);
            this.selectionCmp.setStyle({display: 'none'});
            this.routerCmp.setStyle({display: 'flex'});
            this.ngZone.run(() => this.router.navigateByUrl(node.id)).then();
            this.setCodeTabs(node);
        }
        this.cd.detectChanges();
    }

    selectionchangeNavTreeList(event) {
        if (event.record != null) {
            this.nav(event.record)
        }
    }

    clickDataviewNav = (event) => {
        this.nav(event.location.record);
    }

    changeBreadcrumb = (event) => {
        this.nav(event.node);
    }

    toggleCode = () => {
        console.log('toggleCode')
        //this.codePanelCmp.setCollapsed(this.showCode)
        this.collapseCode = !this.collapseCode
        this.cd.detectChanges();
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
        console.log('5')
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

    setCodeTabs = (node) => {
        this.files = getFiles(node, _code);
        var componentName = node.data.name.replace(/ /g,"")
        var codeMap = _code[componentName];
        this.tabPanelCmp.removeAll();
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
                    xtype: 'panel', title: file, ui: 'code-panel', layout: 'fit', userSelectable: {element: true,bodyElement: true}, scrollable: true,
                    tab: {ui: 'app-code-tab', flex: 0, padding: '0 5 0 0', minWidth: 220, maxWidth: 250},
                    html: `<pre style="user-select: text;"><code class='code'>${codeMapFile.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>`
                }
            );
        }
    }

    toggleTree = function(){
        this.showTreeFlag = !this.showTreeFlag;
        this.cd.detectChanges();
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
    }

    readyRightContainer = (event) => {
        this.rightContainerCmp = event.detail.cmp;
        this.rightContainerCmp.updateHtml('Build: ' + BUILD_VERSION); // eslint-disable-line no-undef
    }

    readyBreadcrumb = (event) => {
        this.breadcrumbCmp = event.detail.cmp;
        this.breadcrumbCmp.setSelection(this.node)
    }

    readyCodeButton = (event) => {
        this.codeButtonCmp = event.detail.cmp;
    }

    readyNavTreePanel = (event) => {
        this.navTreePanelCmp = event.detail.cmp;
        if(Ext.os.is.Phone) {
            this.navTreePanelCmp.setWidth('100%');
        }
    }

    readyNavTreeList = (event) => {
        this.navTreeListCmp = event.detail.cmp;
        this.navTreeListCmp.setStore(this.treeStore);
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
    }

    readyDataviewNav = (event) => {
        this.dataviewNavCmp = event.detail.cmp;
    }

    readyRouter = (event) => {
        this.routerCmp = event.detail.cmp;
    }

    readyCodePanel = (event) => {
        this.codePanelCmp = event.detail.cmp;
    }

    readyTabPanel = (event) => {
        this.tabPanelCmp = event.detail.cmp;
    }

    readyNestedlist = (event) => {
        this.nestedlistCmp = event.detail.cmp;
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
