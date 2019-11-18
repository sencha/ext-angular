declare var Ext: any;
import { Component } from '@angular/core';
import 'froala-editor/css/froala_editor.pkgd.min.css';

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
    //if (ele.ext) {
      this.parentFormPanelCmp = event.cmp;
    //}
  }

  formPanelOkBtnClick = () => {
    Ext.Msg.alert('getValues()', Ext.JSON.encode(this.parentFormPanelCmp.getValues()));
  }

  onEditorFieldReady = (ele) => {
    if (ele.ext) {
      this.editorFieldCmp = ele.ext;
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
