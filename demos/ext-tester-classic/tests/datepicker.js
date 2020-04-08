function runTest() {


  var o = {xtype: 'form',plugins: {viewport: true},
          items: [
            {xtype: 'datefield',labelAlign: 'top', fieldLabel: 'Start Date', format: 'Y-m-d'}
          ]
 }
  var panel = Ext.create(o)

  // var d = {xtype: 'datefield',labelAlign: 'top', fieldLabel: 'Start Date', format: 'Y-m-d'}
  // var datepicker = Ext.create(d)
  // panel.add(datepicker)

  //grid.setColumns([column01,column02,column03,column04,column05,column06,column07])

  //var panel = Ext.create({xtype:'panel', title:'grid'})
  //Ext.Viewport.add([panel])
  //panel.add(grid)
}