/*
 * File: app/store/MainLanguagesStore.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('Rubedo.store.MainLanguagesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.MainLanguagesStore',

    requires: [
        'Rubedo.model.languageModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json',
        'Ext.util.Sorter'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            isOptimised: true,
            usedCollection: 'Languages',
            autoLoad: true,
            autoSync: true,
            model: 'Rubedo.model.languageModel',
            storeId: 'MainLanguagesStore',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    read: 'languages',
                    update: 'languages/update'
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
            },
            sorters: {
                property: 'label'
            }
        }, cfg)]);
    }
});