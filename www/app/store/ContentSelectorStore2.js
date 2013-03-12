/*
 * File: app/store/ContentSelectorStore2.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.store.ContentSelectorStore2', {
    extend: 'Ext.data.Store',
    alias: 'store.ContentSelectorStore2',

    requires: [
        'Rubedo.model.contenusDataModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            remoteFilter: true,
            remoteSort: true,
            storeId: 'ContentSelectorStore2',
            model: 'Rubedo.model.contenusDataModel',
            pageSize: 50,
            proxy: {
                type: 'ajax',
                api: {
                    read: 'contents'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                }
            },
            listeners: {
                beforeload: {
                    fn: me.onJsonstoreBeforeLoad,
                    scope: me
                },
                add: {
                    fn: me.onJsonstoreAdd,
                    scope: me
                },
                remove: {
                    fn: me.onJsonstoreRemove,
                    scope: me
                }
            }
        }, cfg)]);
    },

    onJsonstoreBeforeLoad: function(store, operation, options) {
        var raw = Ext.getStore("ContentMQueryStore").getRange();
        var refined = Ext.Array.pluck(Ext.Array.pluck(raw, "data"), "id");
        store.getProxy().extraParams.tFilter="[{\"property\":\"id\",\"operator\":\"$nin\",\"value\":"+Ext.JSON.encode(refined)+"}]";
    },

    onJsonstoreAdd: function(store, records, index, options) {
        store.totalCount=store.totalCount+1;
        store.fireEvent("load");
    },

    onJsonstoreRemove: function(store, record, index, options) {
        store.totalCount=store.totalCount-1;
        store.fireEvent("load");
    }

});