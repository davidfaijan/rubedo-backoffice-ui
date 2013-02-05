/*
 * File: app/store/WorkspacesStore.js
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

Ext.define('Rubedo.store.WorkspacesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.WorkspacesStore',

    requires: [
        'Rubedo.model.workspaceModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            isOptimised: true,
            usedCollection: 'Workspaces',
            forcedSync: true,
            autoLoad: false,
            autoSync: true,
            storeId: 'WorkspacesStore',
            model: 'Rubedo.model.workspaceModel',
            proxy: {
                type: 'ajax',
                api: {
                    create: 'workspaces/create',
                    read: 'workspaces',
                    update: 'workspaces/update',
                    destroy: 'workspaces/delete'
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