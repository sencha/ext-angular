import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'Donut-component',
  templateUrl: './Donut.html',
  styles: [``]
})
export class DonutComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

  store = Ext.create('Ext.data.Store', {
    fields: ['os', 'data1' ],
    data: [
        { os: 'Android', data1: 68.3 },
        { os: 'BlackBerry', data1: 1.7 },
        { os: 'iOS', data1: 17.9 },
        { os: 'Windows Phone', data1: 10.2 },
        { os: 'Others', data1: 1.9 }
    ]
})


isPhone = Ext.os.is.Phone;

    theme:string= 'default';


changeTheme = theme => this.theme =theme;

chart:any;

chartNavReady = function(event) {
    console.log("chartNavReady");
    this.chart = event.ext;
}

onResize = (view, width, height) => {
    const legend = this.chart.getLegend();
    if(width > height) {
        legend.setDocked('right');
    } else {
        legend.setDocked('top');
    }
}


polarSeries =  [{
    type: 'pie',
    angleField: 'data1',
    donut: 50,
    highlight: true,
    label: {
        field: 'os'
    },
    tooltip: {
        trackMouse: true,
        renderer: (tooltip, record) => { tooltip.setHtml(record.get('os') + ': ' + record.get('data1') + '%'); }
    }
}];

}