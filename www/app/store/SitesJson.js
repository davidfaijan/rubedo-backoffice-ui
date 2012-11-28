/*
 * File: app/store/SitesJson.js
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

Ext.define('Rubedo.store.SitesJson', {
    extend: 'Ext.data.Store',
    alias: 'store.sitesJson',

    requires: [
        'Rubedo.model.sitesDataModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            usedCollection: 'Sites',
            isOptimised: true,
            autoLoad: false,
            autoSync: true,
            storeId: 'SitesJson',
            model: 'Rubedo.model.sitesDataModel',
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