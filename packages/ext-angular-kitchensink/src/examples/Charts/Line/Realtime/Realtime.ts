declare var Ext: any;
import { Component } from '@angular/core';
import { addNewData } from './addNewData';
const interval = 1000;

@Component({
  selector: 'audio-component',
  templateUrl: './Realtime.html',
  styles: [``]
})
export class RealtimeComponent {

  timeChartTask: any;
  store = Ext.create('Ext.data.Store', {
    fields: ['yValue', 'metric1', 'metric2']
  });

  chart: any;
  chartNavReady = function (event) {
    this.chart = event.cmp;
    this.startTask();
  };

  startTask = (event) => {
    let callCount = 1;
    this.timeChartTask = setInterval(() => {
      if (callCount >= 120) {
        clearInterval(this.timeChartTask);
      } else {
        callCount++;
        addNewData(this.chart, this.store, interval);
      }
    }, interval);
  };

  stopTask = (event) => {
    clearInterval(this.timeChartTask);
  };

  cartesianAxes = [{
    type: 'numeric',
    minimum: 0,
    maximum: 20,
    grid: true,
    position: 'left',
    title: 'Number of Hits'
  }, {
    type: 'time',
    dateFormat: 'G:i:s',
    segmenter: {
      type: 'time',
      step: {
        unit: Ext.Date.SECOND,
        step: 1
      }
    },
    label: {
      fontSize: 10
    },
    grid: true,
    position: 'bottom',
    title: 'Seconds',
    fields: ['xValue'],
    majorTickSteps: 10
  }];

  cartesianSeries = [{
    type: 'line',
    title: 'Metric 1',
    marker: {
      type: 'cross',
      size: 5
    },
    style: {
      miterLimit: 0
    },
    xField: 'xValue',
    yField: 'metric1'
  }, {
    type: 'line',
    title: 'Metric 2',
    marker: {
      type: 'arrow',
      size: 5
    },
    style: {
      miterLimit: 0
    },
    xField: 'xValue',
    yField: 'metric2'
  }];

}