/*
 * File: resources/contentContributor/app/store/Contents.js
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

Ext.define('ContentContributor.store.Contents', {
    extend: 'Ext.data.Store',
    alias: 'store.Contents',

    requires: [
        'ContentContributor.model.contentDataModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: false,
            autoSync: true,
            storeId: 'Contents',
            model: 'ContentContributor.model.contentDataModel',
            proxy: {
                type: 'ajax',
                batchActions: false,
                api: {
                    create: 'contents/create',
                    read: 'contents',
                    update: 'contents/update',
                    destroy: 'contents/delete'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    nameProperty: 'mapping',
                    encode: true,
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});