declare var Ext: any;

export const cityModel = Ext.define('KitchenSink.model.tree.City', {
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
