/*
 * File: resources/contentContributor/app/store/TaxonomieDataJson.js
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

Ext.define('ContentContributor.store.TaxonomieDataJson', {
    extend: 'Ext.data.Store',
    alias: 'store.TaxonomieDataJson',

    requires: [
        'ContentContributor.model.taxonomieDataModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            isOptimised: true,
            usedCollection: 'Taxonomy',
            autoLoad: true,
            autoSync: false,
            storeId: 'TaxonomieDataJson',
            model: 'ContentContributor.model.taxonomieDataModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'taxonomy'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                }
            }
        }, cfg)]);
    }
});