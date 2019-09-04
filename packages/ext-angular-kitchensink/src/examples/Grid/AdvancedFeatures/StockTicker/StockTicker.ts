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
        url: 'resources/data/CompanyData.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
  });

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
        <sparkline 
            [values]="value" 
            height="16"
            [tipTpl]="'Price: {y:number("0.00")}'"
        ></sparkline>
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