/*
 * File: app/store/TCNDepCombo.js
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

Ext.define('Rubedo.store.TCNDepCombo', {
    extend: 'Ext.data.Store',
    alias: 'store.TCNDepCombo',

    requires: [
        'Rubedo.model.typesContenusDataModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            isOptimised: true,
            usedCollection: 'ContentTypes',
            autoLoad: false,
            model: 'Rubedo.model.typesContenusDataModel',
            remoteFilter: true,
            storeId: 'TCNDepCombo',
            pageSize: 1000,
            proxy: {
                type: 'ajax',
                api: {
                    create: 'content-types/create',
                    read: 'content-types',
                    update: 'content-types/update',
                    destroy: 'content-types/delete'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    root: 'data'
                }
            },
            filters: [
                {
                    property: 'dependant',
                    value: false
                },
                {
                    property: 'system',
                    value: {
                        $ne: true
                    }
                }
            ]
        }, cfg)]);
    }
});