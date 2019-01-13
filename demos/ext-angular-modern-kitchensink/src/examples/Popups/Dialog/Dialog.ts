import {Component, OnInit, OnDestroy} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'dialog-popup-component',
  templateUrl: "./Dialog.html",
  styles: [``]
})
export class DialogPopupComponent implements OnInit, OnDestroy  {

  constructor() { }

  isDialogShowing:boolean = false;
  okButtonRef:any;

  showDialog = () => {
    this.isDialogShowing = true;
  }

  onOkButtonReady = (ele) => this.okButtonRef = ele.ext;

  onOk = () => this.isDialogShowing = false;

  onCancel = () => this.isDialogShowing = false;

  onHide = () => this.isDialogShowing = false;

  ngOnInit() {}

  ngOnDestroy() {
    this.okButtonRef.doDestroy();
  }

}
