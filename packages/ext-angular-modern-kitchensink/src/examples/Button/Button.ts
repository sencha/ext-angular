import {Component, OnInit, OnChanges , ElementRef, Renderer, ViewChild, SimpleChanges} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'button-component',
  templateUrl: "./Button.html",
  styles: [``]
})
export class ButtonComponent implements OnInit, OnChanges  {

  style = 'Menu';
  type = 'Text';
  round = true;
  iconCls;
  ui;
  menu;
  isPhone = Ext.os.is.Phone;


  onStyleChange = function(item){
    //debugger;
    console.log("onStyleChange : " + item._text);
    this.style = item._text; 
  }

  onTypeChange = function(item){
    //debugger;
    console.log("onTypeChange : " + item._text);
    this.type = item._text; 
  }

  toggleRound = function(){
    //debugger;
    console.log("In toggleRound");
    this.round=!this.round;
    console.log("Round: " + this.round);
  };

  styleChangeDefaults = { handler: this.onStyleChange, group: 'buttonstyle' };


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {


    this.iconCls = this.type.indexOf('Icon') !== -1 ? 'x-fa fa-heart' : null;
    console.log("iconCls: " + this.iconCls);


    if (this.style === 'Menu') {
      this.menu = '<menu #item [indented]="false"><menuitem #item  text="Item 1"></menuitem><menuitem #item  text="Item 2"/></menuitem><menuitem #item  text="Item 3"></menuitem></menu>';
    } else {
        this.ui = this.style.toLowerCase();
    }

    if (this.round) {
      this.ui += ' round';
    }

    console.log("ui: " + this.ui);
    console.log("style: " + this.style);

    // changes.prop contains the old and the new value...\
    console.log("In ngOnChanges. changes : " + changes);
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log("cur : " + cur + " prev : " + prev );
    }
  }


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