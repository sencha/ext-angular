declare var Ext: any;
import { Component } from '@angular/core';
import { generateData, randomDate, randomItem } from '../generateSaleData';
import { model } from '../SaleModel';

@Component({
  selector: 'DataChanges-component',
  templateUrl: './DataChanges.html',
  styles: [``]
})
export class DataChangesComponent {
   isPhone = Ext.os.is.Phone;

   store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    autoDestroy: true,
    model: model,
    proxy: { type: 'memory' }
  })

  addData = () => { 
    this.store.add(generateData(1)); 
  }

  updateData = () => { 
    const data = generateData(1)[0],
        record = randomItem(this.store.data.items);
    if(record) {
      record.set(data);
    }
  }

  removeData = () => {
    const record = randomItem(this.store.data.items);
    if(record) {
      this.store.remove(record);
    }
  }

  clearData = () => { this.store.removeAll(); }





}