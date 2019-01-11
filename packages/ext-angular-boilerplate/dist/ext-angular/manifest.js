Ext.application({
  name: "$ExtAngularApp",
  quickTips: true,
  launch: function () {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).catch(function (err) {
      console.log(err);
    });
  }
});
Ext.create({"xtype":"title"});
Ext.create('Ext.data.Store', {
  fields: ['name', 'email', 'phone', 'hoursTaken', 'hoursRemaining'],
  data: data_1.gridData
});
Ext.require('Ext.data.TreeStore');
Ext.create({"xtype":"container"});
Ext.create({"xtype":"titlebar"});
Ext.create({"xtype":"button"});
Ext.create({"xtype":"sheet"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"panel"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"grid"});
Ext.create({"xtype":"toolbar"});
Ext.create({"xtype":"searchfield"});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"column"});
Ext.create({"xtype":"container"});
Ext.create({"xtype":"treelist"});
Ext.apply(o, me.config);
Ext.create(o);
Ext.require("Ext.layout.*");
