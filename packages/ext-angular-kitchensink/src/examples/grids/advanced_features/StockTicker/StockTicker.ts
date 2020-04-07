declare var Ext: any;
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { model } from '../../CompanyModel'

Ext.require([
  'Ext.sparkline.Line'
]);

@Component({
  selector: 'stockticker-component',
  templateUrl: './StockTicker.html',
  styleUrls: ['./Ticker.css'],
  encapsulation: ViewEncapsulation.None
})
export class StockTickerComponent implements OnInit {


  tickDelay:number= 200;
  htmlTickDelay: any = "<div>${this.tickDelay}ms</div>"
  flashBackground:boolean= false;
  timer:any;

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: null,
    proxy: {
        type: 'ajax',
        url: 'assets/resources/data/CompanyData.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
  });

  init(event) {

  }



  ngOnInit() {
    if (this.store.isLoaded() && this.store.getCount()) {
      this.onStoreLoad(this.store);
    } else {
      this.store.on('load', 'onStoreLoad', this);
    }
  }

  startTicker = () => {
    const { store } = this;
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      for (let i=0; i<10; i++) {
          const rec = store.getAt(Ext.Number.randomInt(0, store.getCount() - 1));
          rec.addPriceTick();
      }
    }, this.tickDelay);
  }

  destroy = () => {
    clearInterval(this.timer);
  }

  toggleFlashBackground = (checkbox) => {
    this.flashBackground = !this.flashBackground;
  }

  onTickDelayChange = (event) => {
    //slider, value, oldValue
    console.log('onTickDelayChange')
    console.log(event)
    this.tickDelay = event.newValue;
    this.startTicker();
  }

  onStoreLoad = (store) => {
  store.removeAt(15, 70);

  let count = store.getCount(),
      i, j, rec;

  for (i = 0; i < count; i++) {
    rec = store.getAt(i);
    rec.beginEdit();
    for (j = 0; j < 10; j++) {
        rec.addPriceTick();
    }
    rec.endEdit(true);
  }

  this.startTicker();
}



  renderSparkline = (value) => {
    return `
        <ext-sparkline
            [values]="value"
            height="16"
            [tipTpl]="'Price: {y:number("0.00")}'"
        ></ext-sparkline>
    `
}

  renderSign = (format, value) => {
    var formattedVal = Ext.util.Format.number(value, format);
    var col ='';
    if(value > 0) {
      col = 'green'
    }
    else if( value < 0) {
      col = 'red'
    }

    var clsNm = ''
    if(this.flashBackground) {
      if(value > 0) {
        clsNm = 'ticker-cell-gain'
      }
      else if( value < 0) {
        clsNm = 'ticker-cell-loss'
      }
    }

    return `<div style="color: ${col}; padding: '10px';" class="${clsNm}">${formattedVal}</div>`
  }



  trendColumnCell = {
    bind: '{record.trend}',
    xtype: 'widgetcell',
    forceWidth: true,
    widget: {
      xtype: 'sparklineline',
      tipTpl: 'Price: {y:number("0.00")}'
    }
  };

  gridItemConfig = {
    viewModel : {}
  };

}

// <ExtContainer padding="10px" layout="fit" fitToParent="true">
//     <ExtGrid
//         title="Ticker Grid"
//         [store]="this.store"
//         [itemConfig]="gridItemConfig"
//         (onInitialize)="this.init($event)"
//         shadow="true"
//     >
//         <ExtGridcolumn
//             text="Company"
//             dataIndex="name"
//             width="150"
//             sortable="true"
//         ></ExtGridcolumn>
//         <ExtGridcolumn
//             align="right"
//             text="Price"
//             width="85"
//             dataIndex="price"
//             formatter="usMoney"
//             sortable="true"
//         ></ExtGridcolumn>
//         <ExtGridcolumn
//             text="Trend"
//             width="200"
//             dataIndex="trend"
//             sortable="false"
//             [cell]="trendColumnCell"
//         ></ExtGridcolumn>
//         <ExtGridcolumn
//             align="right"
//             text="Change"
//             width="90"
//             dataIndex="change"
//             [cell]="{encodeHtml:false}"
//             [renderer]="this.renderSign.bind(this, '0.00')"
//             sortable="true"
//         >
//         </ExtGridcolumn>
//         <ExtGridcolumn
//             align="right"
//             text="% Change"
//             dataIndex="pctChange"
//             [cell]="{encodeHtml:false}"
//             [renderer]="this.renderSign.bind(this, '0.00%')"
//             sortable="true"
//         ></ExtGridcolumn>
//         <ExtToolbar docked="bottom" [defaults]="{ margin: '0 20 0 0' }">
//             <ExtLabel html="Tick Delay"></ExtLabel>
//             <ExtSliderfield
//                 [padding]="'0 5'"
//                 [minValue]="25"
//                 [maxValue]="2000"
//                 [increment]="10"
//                 (change)="this.onTickDelayChange($event)"
//                 [value]="tickDelay"
//                 flex="1"
//             >
//             </ExtSliderfield>
//             <ExtContainer [html]="tickDelay + 'ms'"></ExtContainer>

//             <ExtCheckbox
//                 margin="0"
//                 boxLabel="Flash background color on change"
//                 (change)="this.toggleFlashBackground($event)"
//             ></ExtCheckbox>
//         </ExtToolbar>
//     </ExtGrid>
// </ExtContainer>
