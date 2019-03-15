declare var Ext: any;

export const territoryModel = Ext.define('KitchenSink.model.tree.Territory', {
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