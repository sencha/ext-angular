Ext.define('KitchenSink.store.VirtualForum', {
    extend: 'Ext.data.virtual.Store',
    alias: 'store.infinitegriddata',
    fields: [{name:'id',type:'int'},'firstName','lastName','address','company','title'],
    proxy: {
        type: 'ajax',
        url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user',
        reader: {rootProperty: 'users',totalProperty: 'totalCount'}
    },
    pageSize: 25,
    autoLoad: true
});