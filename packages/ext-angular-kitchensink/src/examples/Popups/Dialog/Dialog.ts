declare var Ext: any;
import {Component} from '@angular/core'

@Component({
  selector: 'dialog-popup-component',
  templateUrl: "./Dialog.html",
  styles: [``]
})
export class DialogPopupComponent {

  isDialogShowing:boolean = false;
  showDialog = () => {this.isDialogShowing = true;}
  onOk = () => this.isDialogShowing = false;
  onCancel = () => this.isDialogShowing = false;
  onHide = () => this.isDialogShowing = false;

}
