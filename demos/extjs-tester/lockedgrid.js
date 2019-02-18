function lockedgrid() {
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
  var o = {xtype: 'lockedgrid',store: store, width: '600', height: '400'}
  var lockedgrid = Ext.create(o)

  var column01 = Ext.create({xtype: 'column', locked: true,    text: 'Name', dataIndex: 'name'})
  var column02 = Ext.create({xtype: 'column', locked: true,    text: 'Email', dataIndex: 'email', width: 60})
  var column03 = Ext.create({xtype: 'column', locked: 'left',  text: 'Email', dataIndex: 'email', width: 60})
  var column04 = Ext.create({xtype: 'column', locked: 'right', text: 'Name', dataIndex: 'name', width: 60})
  var column05 = Ext.create({xtype: 'column', locked: false,   text: 'Email', dataIndex: 'email', width: 160})
  var column06 = Ext.create({xtype: 'column', locked: false,   text: 'Email', dataIndex: 'email', width: 160})
  var column07 = Ext.create({xtype: 'column', locked: false,   text: 'Email', dataIndex: 'email', width: 160})

  lockedgrid.addColumn(column01)
  lockedgrid.addColumn(column02)
  lockedgrid.addColumn(column03)
  lockedgrid.addColumn(column04)
  lockedgrid.addColumn(column05)
  lockedgrid.addColumn(column06)
  lockedgrid.addColumn(column07)

  //lockedgrid.setColumns([column01,column02,column03,column04,column05,column06,column07])

  var panel = Ext.create({xtype:'panel', title:'lockedgrid'})
  Ext.Viewport.add([panel])
  panel.add(lockedgrid)
}