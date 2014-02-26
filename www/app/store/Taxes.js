/*
 * File: app/store/Taxes.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('Rubedo.store.Taxes', {
    extend: 'Ext.data.Store',
    alias: 'store.Taxes',

    requires: [
        'Rubedo.model.tax'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            isOptimised: true,
            usedCollection: 'Taxes',
            autoLoad: false,
            autoSync: true,
            model: 'Rubedo.model.tax',
            storeId: 'Taxes',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'taxes/create',
                    read: 'taxes',
                    update: 'taxes/update',
                    destroy: 'taxes/delete'
                },
                extraParams: {
                    notAll: true
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