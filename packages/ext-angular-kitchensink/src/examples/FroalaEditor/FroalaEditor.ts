declare var Ext: any;
import { Component } from '@angular/core';
import 'froala-editor/css/froala_editor.pkgd.min.css';

@Component({
  	selector: 'froalaeditor-component',
  	templateUrl: './FroalaEditor.html',
  	styleUrls: [``]
})

export class FroalaEditorComponent {
	value: any;
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

  listenersObj: any = {
    change: this.froalaTextChange,
    'froala.click': (froalaComponent) => { Ext.toast({ message: 'Click!' }); }
  }

  formPanelOkBtnClick = () => {
    Ext.Msg.alert('getValues()', Ext.JSON.encode(this.refs.parentFormPanelCmp.cmp.getValues()));
  }

  froalaTextChange = (ele, the) => {
    this.value = the;
    Ext.toast({ message: 'Change!' });
  }
}
