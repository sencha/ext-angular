declare var Ext: any;
import { Component } from '@angular/core'

Ext.require(['Ext.field.CheckboxGroup']);

@Component({
  selector: 'checkboxgroups-component',
  templateUrl: "./CheckboxGroups.html",
  styleUrls: [`./CheckboxGroups.css`],
})

export class CheckBoxGroupsComponent {
  parentPanelCmp:any;

  onParentPanelReady = (event) => {
      console.log('onParentPanelReady')
    this.parentPanelCmp = event.cmp;
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
