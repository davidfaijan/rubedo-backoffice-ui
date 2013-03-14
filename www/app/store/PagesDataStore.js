/*
 * File: app/store/PagesDataStore.js
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

Ext.define('Rubedo.store.PagesDataStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.PagesDataStore',

    requires: [
        'Rubedo.model.pageDataModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            isOptimised: true,
            usedCollection: 'Pages',
            autoLoad: false,
            autoSync: true,
            storeId: 'PagesDataStore',
            model: 'Rubedo.model.pageDataModel',
            proxy: {
                type: 'ajax',
                batchActions: false,
                api: {
                    create: 'pages/create',
                    read: 'pages/tree',
                    update: 'pages/update',
                    destroy: 'pages/delete'
                },
                reader: {
                    type: 'json',
                    getResponseData: function(response) {
                        var data, error;

                        try {
                            data = Ext.decode(response.responseText);
                            if (Ext.isDefined(data.data)){data.children=data.data;}// error fix
                            return this.readRecords(data);
                        } catch (ex) {
                            error = new Ext.data.ResultSet({
                                total  : 0,
                                count  : 0,
                                records: [],
                                success: false,
                                message: ex.message
                            });

                            this.fireEvent('exception', this, response, error);
                            console.log(ex);

                            Ext.Logger.warn('Unable to parse the JSON returned by the server');

                            return error;
                        }
                    },
                    messageProperty: 'message'
                },
                writer: {
                    type: 'json',
                    encode: true,
                    root: 'data'
                }
            },
            sorters: {
                property: 'orderValue'
            }
        }, cfg)]);
    }
});