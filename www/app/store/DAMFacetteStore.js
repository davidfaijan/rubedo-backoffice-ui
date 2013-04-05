/*
 * File: app/store/DAMFacetteStore.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
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

Ext.define('Rubedo.store.DAMFacetteStore', {
    extend: 'Ext.data.Store',
    alias: 'store.DAMFacetteStore',

    requires: [
        'Rubedo.model.DAMSearchModel'
    ],

    constructor: function(cfg) {
        var me = this;
        me.addEvents(
            'facettesChanged'
        );

        cfg = cfg || {};
        me.callParent([Ext.apply({
            facettes: [
                
            ],
            activeFacettes: {
                
            },
            autoLoad: false,
            autoSync: true,
            model: 'Rubedo.model.DAMSearchModel',
            remoteSort: true,
            storeId: 'DAMFacetteStore',
            pageSize: 50,
            proxy: {
                type: 'ajax',
                batchActions: false,
                api: {
                    create: 'dam/create',
                    read: 'elastic-search-dam',
                    update: 'dam/update',
                    destroy: 'dam/delete'
                },
                reader: {
                    type: 'json',
                    getResponseData: function(response) {
                        var data, error;

                        try {
                            data = Ext.decode(response.responseText);
                            this.proxy.facettes=data.facets;
                            if (Ext.isEmpty(data.activeFacets)){
                                data.activeFacets=[ ];
                            }
                            this.proxy.activeFacettes=data.activeFacets;
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
                    messageProperty: 'message',
                    root: 'data'
                },
                writer: {
                    type: 'json',
                    encode: true,
                    root: 'data'
                }
            },
            listeners: {
                facettesChanged: {
                    fn: me.onJsonstoreFacettesChanged,
                    scope: me
                },
                load: {
                    fn: me.onJsonstoreLoad,
                    scope: me
                },
                beforeload: {
                    fn: me.onJsonstoreBeforeLoad,
                    scope: me
                }
            },
            sorters: {
                direction: 'DESC',
                property: 'score'
            }
        }, cfg)]);
    },

    onJsonstoreFacettesChanged: function(facettes, activeFacettes, eventOptions) {
        Rubedo.controller.DAMController.prototype.renderFacets(facettes);
        Rubedo.controller.DAMController.prototype.renderActiveFacets(activeFacettes);

    },

    onJsonstoreLoad: function(store, records, successful, eOpts) {
        var rawActiveFacettes = store.getProxy().activeFacettes;
        var refinedActiveFacettes={};
        Ext.Array.forEach(rawActiveFacettes, function(thing){
            if (thing.terms.length==1){
                refinedActiveFacettes[thing.id]=thing.terms[0].term;
            } else {
                refinedActiveFacettes[thing.id]=Ext.Array.pluck(thing.terms, "term");
            }
        });
        store.facettes=store.getProxy().facettes;
        store.activeFacettes=refinedActiveFacettes;
        store.fireEvent("facettesChanged",store.facettes,rawActiveFacettes);
    },

    onJsonstoreBeforeLoad: function(store, operation, eOpts) {
        var source=Ext.clone(store.activeFacettes);
        var adaptedParams= { };
        Ext.Object.each(source, function(key, value, object){
            if (Ext.isArray(value)) {
                adaptedParams[key+"[]"]=value;

            } else {
                adaptedParams[key]=value;
            }
        });
        store.getProxy().extraParams=adaptedParams;
    }

});