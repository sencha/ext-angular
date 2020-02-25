function runTest() {



  var store = {
    autoLoad: true,
    fields: ['name', 'email', 'phone'],
    data: [
      { name: 'Lisa', email: 'lisa@simpsons.com', phone: '555-111-1224' },
      { name: 'Bart', email: 'bart@simpsons.com', phone: '555-222-1234' },
      { name: 'Homer', email: 'homer@simpsons.com', phone: '555-222-1244' },
      { name: 'Marge', email: 'marge@simpsons.com', phone: '555-222-1254' }
    ]
  }
  var o = {xtype: 'grid',store: store, plugins: {viewport: true},
  columns: [
    {xtype: 'gridcolumn', text: 'Name', dataIndex: 'name'},
    {xtype: 'gridcolumn', text: 'Email', dataIndex: 'email', width: 200}
  ]


}
  var grid = Ext.create(o)
  //  var column01 = Ext.create({xtype: 'gridcolumn', text: 'Name', dataIndex: 'name', flex: 1})
  //  var column02 = Ext.create({xtype: 'gridcolumn', text: 'Email', dataIndex: 'email', flex: 1})
  //  grid.add(column01)
  //  grid.add(column02)

  //grid.setColumns([column01,column02,column03,column04,column05,column06,column07])

  //var panel = Ext.create({xtype:'panel', title:'grid'})
  //Ext.Viewport.add([panel])
  //panel.add(grid)
}