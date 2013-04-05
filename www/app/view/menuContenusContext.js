/*
 * File: app/view/menuContenusContext.js
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

Ext.define('Rubedo.view.menuContenusContext', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.menuContenusContext',

    requires: [
        'Rubedo.view.override.menuContenusContext'
    ],

    id: 'ContenusGrid',
    title: '',
    store: 'ContenusDataJson',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var returner = value;
                        if (record.get("readOnly")){
                            returner ="<i style=\"color:#777;\">"+value+"</i>";
                        }
                        if (record.get("status")=="published") {
                            return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/page_accept.png"> '+returner);
                        } else if (record.get("status")=="pending") {
                            return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/page_process.png"> '+returner);
                        } else if (record.get("status")=="draft") {
                            return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/page_edit.png"> '+returner);
                        }



                    },
                    filter: true,
                    dataIndex: 'text',
                    text: 'Titre',
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        if (value=="published") {
                            return("publié");
                        } else if (value=="pending") {
                            return("en attente de validation");
                        } else if (value=="draft") {
                            return("brouillon");
                        }
                    },
                    filter: {
                        type: 'combo',
                        store: [
                            [
                                'draft',
                                'brouillon'
                            ],
                            [
                                'pending',
                                'en attente de validation'
                            ],
                            [
                                'published',
                                'publié'
                            ]
                        ]
                    },
                    dataIndex: 'status',
                    text: 'Etat',
                    flex: 1
                },
                {
                    xtype: 'booleancolumn',
                    filter: {
                        type: 'combo',
                        store: [
                            [
                                true,
                                'Oui'
                            ],
                            [
                                false,
                                'Non'
                            ]
                        ]
                    },
                    width: 60,
                    dataIndex: 'online',
                    text: 'En ligne',
                    falseText: 'Non',
                    trueText: 'Oui'
                }
            ],
            selModel: Ext.create('Ext.selection.CheckboxModel', {

            }),
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    width: 360,
                    displayInfo: true,
                    displayMsg: 'Affichage des contenus {0} - {1} sur {2}',
                    emptyMsg: 'Rien à afficher',
                    firstText: 'Première page',
                    lastText: 'Dernière page',
                    nextText: 'Page suivante',
                    prevText: 'Page prècèdente',
                    refreshText: 'Rafraichir',
                    store: 'ContenusDataJson'
                }
            ]
        });

        me.callParent(arguments);
    }

});