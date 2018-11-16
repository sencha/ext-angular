import { Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'split-button-component',
  templateUrl: './SplitButton.html',
  styles: [``]
})
export class SplitButtonComponent implements OnInit {

    style= '';
    type= 'text';
    round= false;


    menu;
    ui;
    iconCls;
    text;
    isPhone = Ext.os.is.Phone;

  constructor() { }


  onStyleChange = (item) => this.style = item.value;
  onTypeChange = (item) => this.type = item.value;
  toggleRound = () => this.round = !this.round;

  ngOnChanges(changes: SimpleChanges) {
    this.iconCls = this.type.indexOf('icon') !== -1 ? 'x-fa fa-heart' : null;
    this.text = this.type.indexOf('text') !== -1;

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
  

}