declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  	selector: 'froalaeditor-component',
  	templateUrl: './FroalaEditor.html',
  	styles: [``]
})

export class FroalaEditorComponent {
	value: any = '';
  editorFieldCmp: any;
  parentFormPanelCmp: any;

  onFormPanelReady = (event) => {
    if (event.detail.cmp) {
      this.parentFormPanelCmp = event.detail.cmp;
    }
  }

  formPanelOkBtnClick = () => {
    Ext.Msg.alert('getValues()', Ext.JSON.encode(this.parentFormPanelCmp.getValues()));
  }

  onEditorFieldReady = (event) => {
    if (event.detail.cmp) {
      this.editorFieldCmp = event.detail.cmp;
      this.editorFieldCmp.setValue(this.value);
      this.editorFieldCmp.setListeners({
        'froala.click': (froalaComponent) => { Ext.toast({ message: 'Click!' }); }
      });
    }
  }

  buttonsObj: any = {
    ok: {
        text: 'getValues()',
        handler: this.formPanelOkBtnClick
      }
  };

  editorObj: any = {
    autofocus: true,
    fontSize: [10, 12, 16, 24]
  }

  froalaTextChange = (ele, the) => {
    this.value = the;
    Ext.toast({ message: 'Change!' });
  }

  listenersObj: any = {
    change: this.froalaTextChange,
    'froala.click': (froalaComponent) => { Ext.toast({ message: 'Click!' }); }
  }
}
