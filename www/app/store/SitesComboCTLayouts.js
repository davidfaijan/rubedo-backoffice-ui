/*
 * File: app/store/SitesComboCTLayouts.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.store.SitesComboCTLayouts', {
    extend: 'Ext.data.Store',
    alias: 'store.SitesComboCTLayouts',

    requires: [
        'Rubedo.model.sitesDataModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            usedCollection: 'Sites',
            isOptimised: true,
            autoLoad: false,
            model: 'Rubedo.model.sitesDataModel',
            storeId: 'SitesComboCTLayouts',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'sites/create',
                    read: 'sites',
                    update: 'sites/update',
                    destroy: 'sites/delete'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    encode: true,
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});