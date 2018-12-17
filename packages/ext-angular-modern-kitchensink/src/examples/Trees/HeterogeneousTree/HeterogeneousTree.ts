import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

Ext.define('KitchenSink.data.GeoData', { }, function() {
  Ext.ux.ajax.SimManager.register({
      '/KitchenSink/GeoData': {
          type: 'json',
          data: {
              children: [{
                  mtype: 'Territory',
                  name: 'North America',
                  children :[{
                      mtype: 'Country',
                      name: 'USA',
                      children: [{
                          mtype: 'City',
                          name: 'Redwood City',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Frederick, MD',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Canada',
                      children: [{
                          mtype: 'City',
                          name: 'Vancouver',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Toronto',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Mexico',
                      children: [{
                          mtype: 'City',
                          name: 'Mexico City',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Chihuahua',
                          leaf: true
                      }]
                  }]
              }, {
                  mtype: 'Territory',
                  name: 'Europe, ME, Africa',
                  children :[{
                      mtype: 'Country',
                      name: 'England',
                      children: [{
                          mtype: 'City',
                          name: 'Nottingham',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'London',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Netherlands',
                      children: [{
                          mtype: 'City',
                          name: 'Amsterdam',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Haaksbergen',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Italy',
                      children: [{
                          mtype: 'City',
                          name: 'Ferrara',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Milan',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Kenya',
                      children: [{
                          mtype: 'City',
                          name: 'Kampala',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Croatia',
                      children: [{
                          mtype: 'City',
                          name: 'Split',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Dubrovnik',
                          leaf: true
                      }]
                  }]
              }, {
                  mtype: 'Territory',
                  name: 'South America, Caribbean',
                  children :[{
                      mtype: 'Country',
                      name: 'Brazil',
                      children: [{
                          mtype: 'City',
                          name: 'Rio de Janeiro',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Brasilia',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Argentina',
                      children: [{
                          mtype: 'City',
                          name: 'Buenos Aires',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Chile',
                      children: [{
                          mtype: 'City',
                          name: 'Santiago',
                          leaf: true
                      }]
                  }]
              }, {
                  mtype: 'Territory',
                  name: 'Central and South Asia',
                  children :[{
                      mtype: 'Country',
                      name: 'Russian Federation',
                      children: [{
                          mtype: 'City',
                          name: 'Moscow',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Yekaterinburg',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'India',
                      children: [{
                          mtype: 'City',
                          name: 'Mumbai',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Bangalore',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Kazakhstan',
                      children: [{
                          mtype: 'City',
                          name: 'Astana',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Turkmenistan',
                      children: [{
                          mtype: 'City',
                          name: 'Ashgabat',
                          leaf: true
                      }]
                  }]
              }, {
                  mtype: 'Territory',
                  name: 'East Asia and Pacific',
                  children :[{
                      mtype: 'Country',
                      name: 'Australia',
                      children: [{
                          mtype: 'City',
                          name: 'Sydney',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Canberra',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'China',
                      children: [{
                          mtype: 'City',
                          name: 'Beijing',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Chengdu',
                          leaf: true
                      }]
                  }, {
                      mtype: 'Country',
                      name: 'Japan',
                      children: [{
                          mtype: 'City',
                          name: 'Tokyo',
                          leaf: true
                      }, {
                          mtype: 'City',
                          name: 'Osaka',
                          leaf: true
                      }]
                  }]
              }]
          }
      }
  });
});


@Component({
  selector: 'heterogeneoustree-component',
  templateUrl: './HeterogeneousTree.html',
  styles: [``]
})
export class HeterogeneousTreeComponent implements OnInit {

  constructor() { }


  cityModel = Ext.define('KitchenSink.model.tree.City', {
    extend: 'Ext.data.TreeModel',
    entityName: 'City',
    idProperty: 'name',
    glyph: 'xf19c@FontAwesome',
    fields: [{
        name: 'name',
        convert: undefined
    },{
        name: 'iconCls',
        defaultValue: 'x-fa fa-bank'
    }]
}); 

countryModel = Ext.define('KitchenSink.model.tree.Country', {
    extend: 'Ext.data.TreeModel',
    entityName: 'Country',
    idProperty: 'name',
    glyph: 'xf024@FontAwesome',
    fields: [{
        name: 'name',
        convert: undefined
    },{
        name: 'iconCls',
        defaultValue: 'x-fa fa-flag'
    }]
})

territoryModel = Ext.define('KitchenSink.model.tree.Territory', {
    extend: 'Ext.data.TreeModel',
    entityName: 'Territory',
    idProperty: 'name',
    glyph: 'xf0ac@FontAwesome',
    fields: [{
        name: 'name',
        convert: undefined
    },{
        name: 'iconCls',
        defaultValue: 'x-fa fa-globe'
    }]
});

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

/*
addItem = () => {
    var inputField = this.textfield.cmp,
        tree = this.tree.cmp,
        value = inputField.getValue(),
        target = tree.getSelections()[0] || this.store.getRoot(),
        node;
    
    if (value) {
        if (this.store.getNodeById(value)) {
            return Ext.Msg.alert('Error', 'A node with this name already exists.'); 
        }

        node = {
            name : value
        };

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

        // User might want to see what they've just added!
        if (!target.isExpanded()) {
            target.expand(false);
        }

        tree.select(node);
        inputField.reset();
    }
};

onFieldAction = (field, e) => {
     if (e.ENTER === e.getKey()) {
        this.addItem();
    }
};

onSelectionChange = (selectable, selection) => {
    var button = this.button.cmp,
        selectedNode;
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
*/



  ngOnInit() {
  }


}