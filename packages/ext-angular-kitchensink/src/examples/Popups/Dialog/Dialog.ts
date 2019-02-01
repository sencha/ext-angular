declare var Ext: any;
import {Component, OnDestroy} from '@angular/core'

@Component({
  selector: 'dialog-popup-component',
  templateUrl: "./Dialog.html",
  styles: [``]
})
export class DialogPopupComponent implements OnDestroy  {
  isDialogShowing:boolean = false;
  okButtonRef:any;

  showDialog = () => {
    this.isDialogShowing = true;
  }

  onOkButtonReady = (ele) => this.okButtonRef = ele.ext;

  onOk = () => this.isDialogShowing = false;

  onCancel = () => this.isDialogShowing = false;

  onHide = () => this.isDialogShowing = false;

  ngOnDestroy() {
    this.okButtonRef.doDestroy();
  }

}
