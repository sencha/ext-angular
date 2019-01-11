declare var Ext: any;
import {Component} from "@angular/core";
import {GridService} from './Grid.service'
import {model} from './CompanyModel'

@Component({
    selector: "app-root",
    styles: [],
    template: `
<grid #item title="Stock Prices" [store]="store" [shadow]="true" grouped="true" [fitToParent]="true">
  <column #item text="Company" dataIndex="name" width="150"></column>
  <column #item text="Price" width="85" dataIndex="price" formatter='usMoney'></column>
  <column #item
    text="Change" 
    width="100" 
    dataIndex="priceChange" 
    [cell]="{encodeHtml:false}"
    [renderer]="this.renderSign.bind(this,'0.00')"
  ></column>
  <column #item
    text="% Change" 
    dataIndex="priceChangePct" 
    [cell]="{encodeHtml:false}"
    [renderer]="this.renderSign.bind(this,'0.00')"
  ></column>
  <column #item text="Last Updated" width="125" dataIndex="lastChange" formatter='date("m/d/Y")'></column>
</grid>
    `
})
export class AppComponent {

  constructor(gridService :GridService) {
    gridService.initCompanyData();
  }

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/Companys'
    } 
  });

  renderSign = (format, value) =>  {
    //console.log("In renderSign. format: " + format + " value : " + value);
    var formattedValue = Ext.util.Format.number(value, format);
    var col = ''
    if(value > 0) {col = 'green'}
    else if(value < 0 ) {col = 'red'}
    return `<span style='color:${col}'>${formattedValue}</span>`
  }

}







// <!--

// <panel [title]="'hello'" [layout]="'fit'" [fitToParent]="true">
//   <button [text]="'hi'"></button>
// </panel>

// <panel #item [title]="'hello'" [layout]="'fit'" [fitToParent]="true">
//   <div #item >hi</div>
// </panel>

// <grid #item title="Stock Prices" [store]="store" [shadow]="true" grouped="true" [fitToParent]="true">
//   <column #item text="Company" dataIndex="name" width="150"></column>
//   <column #item text="Price" width="85" dataIndex="price" formatter='usMoney'></column>
//   <column  #item
//     text="Change" 
//     width="100" 
//     dataIndex="priceChange" 
//     [cell]="{encodeHtml:false}"
//     [renderer]="this.renderSign.bind(this,'0.00')"
//   ></column>
//   <column  #item
//     text="% Change" 
//     dataIndex="priceChangePct" 
//     [cell]="{encodeHtml:false}"
//     [renderer]="this.renderSign.bind(this,'0.00')"
//   ></column>
//   <column #item text="Last Updated" width="125" dataIndex="lastChange" formatter='date("m/d/Y")'></column>
// </grid>


// -->

