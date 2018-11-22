import { Component, OnInit} from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'split-button-component',
  templateUrl: './SplitButton.html',
  styles: [``]
})
export class SplitButtonComponent implements OnInit {

    isPhone = Ext.os.is.Phone;

    style = 'Menu';
    type = 'Text';
    round = false;
    iconCls:string;
    text = true;
    ui:string;
    menu = true;

  constructor() { }

  onStyleChange = (item) => {
    console.log("onStyleChange : " + item._text);
    this.style = item._text; 
    if (this.style === 'Menu') {
      this.menu = true;
    } else {
        this.ui = this.style.toLowerCase();
        this.menu=false;
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