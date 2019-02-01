declare var Ext: any;
import {Component} from '@angular/core'

Ext.require([
  'Ext.MessageBox'
]);

@Component({
  selector: 'message-popup-component',
  templateUrl: "./Message.html",
  styles: [``]
})
export class MessagePopupComponent {

  onConfirmResult(buttonId, value, opt) {
    Ext.toast(`User clicked ${buttonId} button.`);
  }

  onPromptResult(buttonId, value) {
    Ext.toast(`User clicked ${buttonId} and entered value "${value}".`);
  }

  onAlertTap = () => Ext.Msg.alert('Title', 'The quick brown fox jumped over the lazy dog.');

  onPropmtTap = () => Ext.Msg.prompt('Welcome!', "What's your first name?", this.onPromptResult.bind(this));

  onConfirmTap = () => Ext.Msg.confirm("Confirmation", "Are you sure you want to do that?", this.onConfirmResult.bind(this));

  clickHandler = (event) => {
    Ext.get(event.target).ripple(event, {});
  }

}
