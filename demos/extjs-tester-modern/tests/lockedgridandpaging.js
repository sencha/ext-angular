Ext.application({
  name: "$ExtAngularApp",
  launch: function () {
    runTest()
  }
});

function runTest() {

  plugins = {"pagingtoolbar": true}

  store= Ext.create('Ext.data.Store', {
    autoLoad: true,
    pageSize: 25,
    proxy: {
      type: 'ajax',
      url: 'http://performance-testing-staging.eba-pwtvvdxs.us-east-1.elasticbeanstalk.com/api/rawData/getPageData?tableName=mega_10000',
      reader: {
        rootProperty: 'users',
        totalProperty: 'totalCount'
      },
      timeout: 200000
    }
  })

  columns=[
    {"text": "id","dataIndex": "id","locked": true},
    {"text": "firstname","dataIndex": "firstname","width": 250},
    {"text": "lastname","dataIndex": "lastname","width": 120}
  ]

  gridDefaults = {
    plugins: {
      pagingtoolbar: true
    }
  }

  var o = {xtype: 'lockedgrid',store: store, columns, columns, gridDefaults: gridDefaults, width: '600', height: '400'}
  var lockedgrid = Ext.create(o)

  var panel = Ext.create({xtype:'panel', title:'lockedgrid', layout: 'fit'})
  Ext.Viewport.add([panel])
  panel.add(lockedgrid)

}