/*
 * File: app/store/MasquesDataJson.js
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

Ext.define('Rubedo.store.MasquesDataJson', {
    extend: 'Ext.data.Store',

    requires: [
        'Rubedo.model.masquesDataModel',
        'Ext.util.Grouper',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            usedCollection: 'Masks',
            isOptimised: true,
            autoLoad: false,
            autoSync: true,
            model: 'Rubedo.model.masquesDataModel',
            storeId: 'MasquesDataJson',
            pageSize: 1000,
            groupers: {
                property: 'site'
            },
            proxy: {
                type: 'ajax',
                api: {
                    create: 'masks/create',
                    read: 'masks',
                    update: 'masks/update',
                    destroy: 'masks/delete'
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