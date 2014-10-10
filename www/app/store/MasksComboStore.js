/*
 * File: app/store/MasksComboStore.js
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

Ext.define('Rubedo.store.MasksComboStore', {
    extend: 'Ext.data.Store',
    alias: 'store.MasksComboStore',

    requires: [
        'Rubedo.model.masquesDataModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            usedCollection: 'Masks',
            isOptimised: true,
            autoLoad: false,
            model: 'Rubedo.model.masquesDataModel',
            storeId: 'MasksComboStore',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    read: 'masks'
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