declare var Ext: any;
import { Component } from '@angular/core';
import {refreshData, refreshSize} from './createData'

@Component({
  selector: 'SalesPerEmployee-component',
  templateUrl: './SalesPerEmployee.html',
  styles: [``]
})
export class SalesPerEmployeeComponent {

  constructor() {
      this.refreshData();
   }

  store = Ext.create('Ext.data.Store', {
    fields: [
        {name: 'employee', type: 'string'},
        {name: 'dayNumber', type: 'int'},
        {name: 'day', type: 'string'},
        {name: 'sales', type: 'number'}
    ]
});

refreshData = () => {
    this.store.loadData(refreshData());
}

refreshSize = () => {
    this.store.loadData(refreshSize());
}

theme:string= 'default'

changeTheme = (select, choice) => {
    this.theme = choice.get('value');
}

   isPhone = Ext.os.is.Phone;

   platformConfigVar = {
    '!phone': {
        padding: {
            top: 40,
            right: 30,
            bottom: 70,
            left: 120
        },
        legend: {
            docked: 'right',
            padding: 50,
            items: {
                count: 10,
                slice: [1],
                reverse: true,
                size: {
                    x: 60,
                    y: 30
                }
            }
        }
    }
};

xAxisVar = {
    platformConfig: {
        '!phone': {
            title: {
                text: 'Employee',
                attr: {
                    'font-size': '14px'
                }
            }
        }
    },
    axis: {
        orient: 'bottom'
    },
    scale: {
        type: 'band'
    },
    field: 'employee'
};

yAxisVar = {
    platformConfig: {
        '!phone': {
            title: {
                text: 'Day',
                attr: {
                    'font-size': '14px'
                }
            }
        }
    },
    axis: {
        orient: 'left'
    },
    scale: {
        type: 'band'
    },
    field: 'day'
};



}