import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'split-button-component',
  templateUrl: './SplitButton.html',
  styles: [``]
})
export class SplitButtonComponent implements OnInit {

    style= 'None';
    type= 'Text';
    round= false;


    menu;
    ui;
    iconCls;
    isPhone = Ext.os.is.Phone;

  constructor() { }

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

  ngOnChanges(changes: SimpleChanges) {
    this.iconCls = this.type.indexOf('icon') !== -1 ? 'x-fa fa-heart' : null;

    if (this.style === 'menu') {
        this.menu = '<menu #item [indented]="false"><menuitem #item  text="Item 1"></menuitem><menuitem #item  text="Item 2"/></menuitem><menuitem #item  text="Item 3"></menuitem></menu>';
    } else {
        this.ui = this.style.toLowerCase();
    }

    if (this.round) {
        this.ui += ' round';
    }
  }



  ngOnInit() {
  }

    menuProp =  [{
        text: 'Menu Item 1'
    }, {
        text: 'Menu Item 2'
    }, {
        text: 'Menu Item 3'
    }];

 layoutProps = Ext.os.is.Phone ? {
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

 buttonGroupProps = Ext.os.is.Phone ? {
    padding: '20 0 0 20',
    defaults: {
        margin: '0 20 20 0',
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

 groupLabelProps = Ext.os.is.Phone ? {
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