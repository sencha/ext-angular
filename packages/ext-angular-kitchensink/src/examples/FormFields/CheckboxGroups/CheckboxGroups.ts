declare var Ext: any;
import { Component } from '@angular/core'

Ext.require(['Ext.field.CheckboxGroup']);

@Component({
  selector: 'checkboxgroups-component',
  templateUrl: "./CheckboxGroups.html",
  styles: ["./CheckboxGroups.scss"]
})

export class CheckBoxGroupsComponent {
  parentPanelCmp:any;

  onParentPanelReady = (event) => {
    this.parentPanelCmp = event.ext;
  }

  onSaveFormClick = () => {
      if (this.parentPanelCmp.isValid()) {
          Ext.Msg.alert(
              'Form completed',
              'Form values will be sent to the server'
          );
      }
      else {
          Ext.Msg.alert(
              'Form incomplete',
              'You must fill out the form with valid values'
          );
      }
  }

  onResetFormClick = () => {
      this.parentPanelCmp.reset();
  }
}
