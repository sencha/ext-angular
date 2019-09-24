import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'dialog-popup-component',
  templateUrl: "./Dialog.html",
  styles: [``]
})
export class DialogPopupComponent {

    constructor(private cd: ChangeDetectorRef) {};

    isDialogShowing:boolean = false;
    showDialog = () => {this.isDialogShowing = true;this.cd.detectChanges();}
    onOk = () => {this.isDialogShowing = false;this.cd.detectChanges();}
    onCancel = () => {this.isDialogShowing = false;this.cd.detectChanges();}
    onHide = () => {this.isDialogShowing = false;this.cd.detectChanges();}

}
