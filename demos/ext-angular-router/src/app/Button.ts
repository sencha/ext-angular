import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'button-component',
  template: `
  <panel #item [title]="'hi'" [layout]="'fit'" [fitToParent]="true">
    <button #item [text]="'click'"></button>
  </panel>
`,
  styles: [``]
})
export class ButtonComponent implements OnInit  {

  style = 'Menu';
  type = 'Text';
  round = false;
  iconCls:string;
  text = true;
  ui:string;
  menu = true;
  isPhone = Ext.os.is.Phone;

  menuButtons = [];

  menuButtonReady = function(event) {
    console.log("button ready : " + event.ext);
    this.menuButtons.push(event.ext);
  }


  onStyleChange = (item) => {
    console.log("onStyleChange : " + item._text);
    this.style = item._text; 
    if (this.style === 'Menu') {
      this.menu = true;
      var tempMenu = Ext.create('Ext.menu.Menu');
      var item1 = new Ext.menu.Item({
        indented: false,
        text: "Item 1"
      });
      var item2 = new Ext.menu.Item({
        indented: false,
        text: "Item 2"
      });
      var item3 = new Ext.menu.Item({
        indented: false,
        text: "Item 3"
      });
      tempMenu.add(item1);
      tempMenu.add(item2);
      tempMenu.add(item3);
      this.menuButtons.forEach(button => {
        button.setMenu(tempMenu);
      });
    } else {
        this.ui = this.style.toLowerCase();
        this.menu=false;
        this.menuButtons.forEach(button => {
          button.setMenu(null);
        });
    }
  }

  onTypeChange = (item) => {
    console.log("onTypeChange : " + item._text);
    this.type = item._text; 
    console.log("this.type : " + this.type);
    this.iconCls = this.type.indexOf('Icon') !== -1 ? 'x-fa fa-heart' : null;
    this.text = this.type.indexOf('Text') !== -1;
  }

  toggleRound = function(){
    //debugger;
    console.log("In toggleRound");
    this.round=!this.round;
    console.log("Round: " + this.round);
    if (this.round) { 
      this.ui += ' round';
    }
    else {
      this.ui = this.ui.replace(' round', '');
    }
  };

  styleChangeDefaults = { handler: this.onStyleChange, group: 'buttonstyle' };
  typeChangeDefaults = { handler: this.onTypeChange, group: 'buttonstyle' };




  constructor() { }




  ngOnInit() {   
  }

  // [height] = "'100%'" [width] = "'100%'" className = "demo-buttons" defaults={margin: '20'}
  // [padding] = "10" [shadow] = "true" defaults={layout: 'hbox', flex:1, margin: '10', width: '100%'}
  layoutPropsVal = Ext.os.is.Phone ? {
    height: '100%',
    width: '100%',
    className: 'demo-buttons',
    defaults: {
      margin: '20'
    }
  } : {
      padding: 10,
      shadow: true,
      defaults: {
        layout: 'hbox',
        flex: 1,
        margin: '10',
        width: '100%'
      }
    }

    // padding= '17 0 17 20' layout= "{ type: 'hbox', align: 'middle', pack: 'space-around' }" flex=1 margin='0 20 0 0' width=400 defaults="{margin: '0 20 0 0'}"
  buttonGroupPropsVal = Ext.os.is.Phone ? {
    padding: '20 0 0 20',
    defaults: {
      margin: '0 20 20 0',
      width: 'calc(50% - 20px)',
    }
  } : {
      padding: '17 0 17 20',
      layout: { type: 'hbox', align: 'middle', pack: 'space-around' },
      flex: 1,
      margin: '0 20 0 0',
      width: 400,
      defaults: {
        margin: '0 20 0 0'
      }
    }

  // width='70px' textAlign='right' margin='24px 20px 0 0'
  groupLabelPropsVal = Ext.os.is.Phone ? {
    style: {
      margin: '0 0 5px 0'
    }
  } : {
      style: {
        width: '70px',
        textAlign: 'right',
        margin: '24px 20px 0 0'
      }
    };

}