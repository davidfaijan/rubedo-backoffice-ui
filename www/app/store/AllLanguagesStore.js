/*
 * File: app/store/AllLanguagesStore.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Rubedo.store.AllLanguagesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.AllLanguagesStore',

    requires: [
        'Rubedo.model.languageModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            model: 'Rubedo.model.languageModel',
            storeId: 'AllLanguagesStore',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    read: 'languages'
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