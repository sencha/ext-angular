import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-dialog',
    template: `
    <ext-dialog
        [displayed]="isDialog2Showing"
        [title]="'Dialog2'"
        [width]="600"
        [height]="600"
        [constrainDrag]="false"
        [closable]="false"
        [maximizable]="true"
        [closeAction]="'hide'"
        [bodyPadding]="20"
        [defaultFocus]="'#ok'"
        (onHide)="onHide()"
        [html]="
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        "
    >
        <ext-button text="Cancel" (tap)="onCancel2()"></ext-button>
        <ext-button text="OK" (tap)="onOk2()"></ext-button>
    </ext-dialog>
    `,
    styles: []
})
export class DialogComponent {
    constructor(private cd: ChangeDetectorRef) {};

    isDialogShowing:boolean = false;
    showDialog = () => {this.isDialogShowing = true;this.cd.detectChanges();}
    onOk = () => {this.isDialogShowing = false;this.cd.detectChanges();}
    onCancel = () => {this.isDialogShowing = false;this.cd.detectChanges();}
    onHide = () => {this.isDialogShowing = false;this.cd.detectChanges();}
}