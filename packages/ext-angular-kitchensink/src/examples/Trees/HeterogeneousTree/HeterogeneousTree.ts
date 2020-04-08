declare var Ext: any;
import { Component } from '@angular/core';
import { cityModel } from './CityModel';
import { countryModel } from './CountryModel';
import { territoryModel } from './TerritoryModel';

@Component({
  selector: 'heterogeneoustree-component',
  templateUrl: './HeterogeneousTree.html',
  styles: [``]
})
export class HeterogeneousTreeComponent {

  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null

  cityModel: any;
  countryModel: any;
  territoryModel: any;

  constructor() {
    this.cityModel = cityModel
    this.countryModel = countryModel
    this.territoryModel = territoryModel
  }

  textField : any;
  onTextFieldReady = (event) => {
    this.textField = event.cmp;
  }

  buttonField : any;
  onButtonReady = (event) => {
    this.buttonField = event.cmp;
  }

  treeField:any;
  onTreeReady = (event) => {
    this.treeField = event.cmp;
  }

  store = Ext.create('Ext.data.TreeStore', {
    proxy: {
      type: 'ajax',
      reader: {
          type: 'json',
          typeProperty: 'mtype'
      },
      url: '/KitchenSink/GeoData'
    },
    lazyFill: false,
    rootVisible: false
  });

  addItem = (event) => {
    var tree = this.treeField;
    var target = tree.getSelections()[0] || this.store.getRoot();
    var node: any;

    var value = this.textField.getValue()
    if (value != null && value != '') {
      if (this.store.getNodeById(value)) {
        return Ext.Msg.alert('Error', 'A node with this name already exists.');
      }
      node = {name : value};
      if (target.isRoot()) {
        //Nothing selected -- adding new Territory
        node.children = [];
        node.mtype = 'Territory';
      } else if (target instanceof this.territoryModel) {
        // Programatically added - must not try to load over Ajax
        node.children = [];
        node.mtype = 'Country';
      } else if (target instanceof this.countryModel) {
        // Adding to the Country level - that is our leaf level
        node.leaf = true;
        node.mtype = 'City';
      }
      node = target.appendChild(node);
      if (!target.isExpanded()) {
        target.expand(false);
      }
      tree.select(node);
      this.textField.reset();
    }
    else {
      Ext.Msg.alert('Enter a Value', 'Please Enter a Value');
    }
  };

  onFieldAction = (event) => {
    if (event.e.ENTER === event.e.getKey()) {
      this.addItem(event);
    }
  };

  onSelectionChange = (event) => {
    var button = this.buttonField,
        selectedNode;
    var selection = event.selected
    if (selection.length) {
      selectedNode = selection[0];

      if (selectedNode instanceof this.territoryModel) {
          button.setText('Add Country');
          button.enable();
      } else if (selectedNode instanceof this.countryModel) {
          button.setText('Add City');
          button.enable();
      } else {
          button.disable();
      }
    } else {
      button.setText('Add Territory');
      button.enable();
    }
  };

}