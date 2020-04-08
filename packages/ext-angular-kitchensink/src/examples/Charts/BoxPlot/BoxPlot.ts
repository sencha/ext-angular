declare var Ext: any;
import { Component } from '@angular/core';
import { data } from './data';

Ext.require([
  'Ext.chart.CartesianChart',
  'Ext.chart.axis.Category',
  'Ext.chart.axis.Numeric',
  'Ext.chart.series.BoxPlot',
  'Ext.chart.series.Scatter'
]);

@Component({
  selector: 'BoxPlot-component',
  templateUrl: './BoxPlot.html',
  styles: [``]
})
export class BoxPlotComponent {

  store = Ext.create('Ext.data.Store', {
    data
  });

  isPhone: boolean = Ext.os.is.Phone;

  theme: string = 'default';

  toggleZoomOnPan= () => {

  };

  refresh = () => {

  };

  changeTheme = (themeParam) => {
    this.theme = themeParam;
  };

  constructor() {
  }

  colors = [
    {
      fillStyle: '#96BBDC',
      strokeStyle: '#3F85C1'
    },
    {
      fillStyle: '#FAC796',
      strokeStyle: '#FDA34A'
    },
    {
      fillStyle: '#94D0AD',
      strokeStyle: '#47B371'
    },
    {
      fillStyle: '#E89BA6',
      strokeStyle: '#DE5465'
    },
    {
      fillStyle: '#BB7BBD',
      strokeStyle: '#8A168A'
    },
    {
      fillStyle: '#C6ABA5',
      strokeStyle: '#8C564B'
    }
  ];

  onBoxPlotRender = (sprite, config, data, index) => {
    return this.colors[index % this.colors.length];
  };

  onBoxPlotTooltip = (tooltip, record, item) => {
    const category = record.get('field'),
      high = record.get('high'),
      q3 = record.get('q3'),
      median = record.get('median'),
      q1 = record.get('q1'),
      low = record.get('low');

    tooltip.setTitle(category);

    tooltip.setHtml(
      'High: ' + high
      + '<br>Q3: ' + q3
      + '<br>Median: ' + median
      + '<br>Q1: ' + q1
      + '<br>Low : ' + low
    );
  };

  cartesianAxes = [{
    type: 'numeric',
    position: 'left',
    minimum: 10,
    majorTickSteps: 8,
    grid: true,
    limits: [{
      value: 60,
      line: {
        strokeStyle: 'red',
        lineWidth: 2,
        lineDash: [6, 3],
        title: {
          text: 'Theoretical mean: 60',
          fontWeight: 'bold',
          fillStyle: 'black',
          fontSize: 14
        }
      }
    }]
  }, {
    type: 'category',
    position: 'bottom'
  }];

  cartesianSeries = [{
    type: 'boxplot',
    xField: 'field',
    store: this.store,
    highlight: true,
    style: {
      maxBoxWidth: 52,
      lineWidth: 2
    },
    renderer: this.onBoxPlotRender,
    tooltip: {
      trackMouse: true,
      renderer: this.onBoxPlotTooltip
    }
  }, {
    type: 'scatter',
    xField: 'field',
    yField: 'age'
  }];


}
