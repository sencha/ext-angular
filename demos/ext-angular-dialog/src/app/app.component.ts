import { Component, ChangeDetectorRef } from "@angular/core";
import { DialogComponent } from "./app.dialog";

@Component({
    selector: "app-root",
    template: `
        <ext-panel title="Application Home" [padding]="10" fitToParent="true">
            <ext-container
                html="<h1>Double-Click on an item in this list for the details dialog</h1>"
            ></ext-container>
            <ext-grid
                height="200px"
                [shadow]="true"
                (ready)="readyGrid($event)"
                (childdoubletap)="childdoubletapGrid($event)"
            >
                <ext-gridcolumn text="name" dataIndex="name"></ext-gridcolumn>
                <ext-gridcolumn
                    text="email"
                    dataIndex="email"
                    flex="1"
                ></ext-gridcolumn>
            </ext-grid>

            <ext-toolbar docked="bottom">
                <ext-spacer></ext-spacer>
                <ext-button
                    [text]="'Show dialog'"
                    (tap)="showDialog()"
                    [ui]="'action raised'"
                ></ext-button>
            </ext-toolbar>

            <app-dialog [show]="showDialog1" [name]="name" [email]="email">
            </app-dialog>
        </ext-panel>
    `,
    styles: [],
})
export class AppComponent {
    showDialog1: any;
    name: any;
    email: any;

    // dialog1Width:number = document.body.clientWidth - 100;
    // dialog1Height:number = document.body.clientHeight - 100;

    // isDialog1Showing:boolean = false;
    // isDialog2Showing:boolean = false;
    // isDialog3Showing:boolean = false;

    constructor(private cd: ChangeDetectorRef) {}

    title = "the grid";
    data = [
        { name: "Marc", email: "marc@gmail.com" },
        { name: "Nick", email: "nick@gmail.com" },
        { name: "Andy", email: "andy@gmail.com" },
    ];
    readyGrid(event) {
        //console.log(event)
        var grid = event.detail.cmp;
        grid.setData(this.data);
    }
    childdoubletapGrid(event) {
        console.log(event);
        var item = event.location.record.data;
        this.showDialog1 = new Date();
        this.name = item.name;
        this.email = item.email;
        this.cd.detectChanges();
    }
    showDialog = () => {
        this.showDialog1 = new Date();
        this.cd.detectChanges();
    };

    // onOk1 = () => {
    //     this.isDialog2Showing = false;
    //     this.cd.detectChanges();
    //     this.isDialog2Showing = true;
    //     this.cd.detectChanges();
    // }
    // onCancel1 = () => {this.isDialog1Showing = false;this.cd.detectChanges();}

    // onOk2 = () => {
    //     this.isDialog3Showing = true;
    //     this.cd.detectChanges();
    // }
    // onCancel2 = () => {this.isDialog2Showing = false;this.cd.detectChanges();}

    // onOk3 = () => {
    //     this.isDialog3Showing = true;

    //     this.cd.detectChanges();
    // }
    // onCancel3 = () => {this.isDialog3Showing = false;this.cd.detectChanges();}

    //onHide = () => {this.isDialogShowing = false;this.cd.detectChanges();}
}

@Component({
    selector: "dummy-component",
    template: ``,
    styles: [``],
})
export class DummyComponent {}

import Hammer from "hammerjs";
import { OnInit, OnDestroy, ElementRef } from "@angular/core";

@Component({
    selector: "dummy-hammer-component",
    template: ``,
    styles: [``],
})
export class MyComponentUsingGestures implements OnInit, OnDestroy {
    constructor(private elementRef: ElementRef) {}
    tap() {}

    _hammer: any;
    ngOnInit() {
        let element = this.elementRef.nativeElement;
        this._hammer = new Hammer.Manager(element, {
            recognizers: [[Hammer.Tap]],
        });
        this._hammer.on("tap", this.tap);
    }

    ngOnDestroy() {
        if (this._hammer) {
            this._hammer.off("tap", this.tap);
            this._hammer.destroy();
            this._hammer = null;
        }
    }
}
