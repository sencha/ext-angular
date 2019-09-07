declare var Ext: any;
declare var BUILD_VERSION: any;
//import { Component, OnInit, NgZone, ViewEncapsulation } from '@angular/core';
import { Component, OnInit, NgZone } from '@angular/core';
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
    theDataview: any
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
    breadcrumbCmp: any
    rightContainerCmp: any
    leftContainerCmp: any
    tplToolbar: any = `
    <div class="app-toolbar">
        {text} <span>{divider}</span>
    </div>`

    constructor(private router: Router, private ngZone: NgZone) {
        //console.log(navTreeRoot)
        this.treeStore = Ext.create('Ext.data.TreeStore', {
        rootVisible: true,
        root: navTreeRoot
        })
        try {
            this.node$.subscribe(({
                next: (v) => {
                this.node = v;
                //console.log(v)
                this.files = getFiles(v, _code);
//                this.highlightCode();
                this.hideSelections = this.node.childNodes.length > 0 ? false: true
                this.hideExamples = this.node.childNodes.length > 0 ? true: false
                if(this.hideSelections == false) {
                    if (this.theDataview != undefined) {
                        this.theDataview.setData(this.node.childNodes)
                    }
                }
                else {
                    var location = window.location.hash.substr(1);
                    this.navigate(location)
                }
                }
            }));

            router.events.subscribe((val) => {
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
        var localNode = this.treeStore.getNodeById(location.pathname);
        if(localNode) {
            this.node = localNode;
            this.node$.next(this.treeStore.getNodeById(location.pathname));
        }
        else {
            console.log("Not a valid node. Probably looking at resources");
        }
    }

    dataviewReady = (event) => {
        //console.log('dataviewReady')
        //console.log(event)
        this.theDataview = event.detail.cmp;
    }

    breadcrumbReady = (event) => {
        //console.log('breadcrumbReady')
        //console.log(event)
        this.breadcrumbCmp = event.detail.cmp;
        //console.log(this.node)
        this.breadcrumbCmp.setSelection(this.node)
    }

    readyLeftContainer = (event) => {
        //console.log('readyLeftContainer')
        //console.log(event)
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
        //console.log('readyRightContainer')
        //console.log(event)
        this.rightContainerCmp = event.detail.cmp;
        this.rightContainerCmp.updateHtml('Build: ' + BUILD_VERSION); // eslint-disable-line no-undef
    }

    theNestedlist: any
    nestedlistReady = (event) => {
        //console.log('nestedListReady')
        //console.log(event)
        this.theNestedlist = event.detail.cmp;
    }

    onNavChange = (nodeId, node) => {
        if (node.isLeaf()) {
        this.theNestedlist.goToLeaf(node);
        } else {
        this.theNestedlist.goToNode(node);
        }
        if(nodeId === '' || nodeId) {
        location.hash = nodeId;
        this.navigate(nodeId)
        }
    }

    toggleCode = () => {
        //console.log('toggleCode')
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

    doClick = (event) => {
        var id = event.location.record.data.id
        this.navigate(id)
    }

    breadcrumbChange = (event) => {
        //console.log('breadcrumbChange')
        //console.log(event)
        this.breadcrumbCmp.setSelection(event.node);
        this.navigate(event.node.id);
    }

    navigate(location) {
        //console.log(location)
        //this.router.navigateByUrl('' + location)
        this.ngZone.run(() => this.router.navigateByUrl(location)).then();
    }

    highlightCode() {
//        document.querySelectorAll(".code").forEach((el) => {
//           hljs.highlightBlock(el);
//        });
    }

    selectionChanged(event) {
        var record = event.record;
        if(record && record.data && record.data.id) {
            var componentSelectedId = record.data.id;
            //console.log(componentSelectedId)
            //this.router.navigate([componentSelectedId])

            this.ngZone.run(() => this.router.navigate([componentSelectedId])).then();
        }
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
