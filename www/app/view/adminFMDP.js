/*
 * File: app/view/adminFMDP.js
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

Ext.define('Rubedo.view.adminFMDP', {
    extend: 'Ext.window.Window',
    alias: 'widget.adminFMDP',

    requires: [
        'Rubedo.view.MyGridPanel3'
    ],

    height: 578,
    id: 'adminFMDP',
    width: 1200,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'masque-icon',
    title: 'Masques de page',
    constrainHeader: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tools: [
                {
                    xtype: 'tool',
                    itemId: 'windowMinimize',
                    type: 'minimize'
                },
                {
                    xtype: 'tool',
                    itemId: 'windowMaximize',
                    type: 'maximize'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 30,
                    itemId: 'filArianne',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'origine',
                            iconCls: 'masque-icon',
                            text: 'Masques de page <b>></b> '
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    height: 50,
                    itemId: 'barreMeta',
                    items: [
                        {
                            xtype: 'image',
                            height: 45,
                            width: 48,
                            listeners: {
                                render: {
                                    fn: me.onImageRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'container',
                            itemId: 'boiteBarreMeta',
                            tpl: [
                                '<b>{text}</b> </br> <b>Création : </b> {creation} <b>Dernière modification : </b> {derniereModification} <b>Auteur : </b> {auteur}  <b>Version : </b>{version}'
                            ]
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 86,
                    itemId: 'contextBar',
                    enableOverflow: true,
                    items: [
                        {
                            xtype: 'button',
                            id: 'boutonNouveauMasque',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Nouveau'
                        },
                        {
                            xtype: 'button',
                            disabled: true,
                            id: 'boutonSupprimerMasque',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'buttongroup',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Edition',
                            columns: 4,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'newRow',
                                    iconAlign: 'top',
                                    iconCls: 'window_add_big',
                                    scale: 'large',
                                    text: 'Nouvelle Ligne'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'newCol',
                                    iconAlign: 'top',
                                    iconCls: 'window_add_big',
                                    scale: 'large',
                                    text: 'Nouvelle Colonne'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'newBloc',
                                    iconAlign: 'top',
                                    iconCls: 'window_add_big',
                                    scale: 'large',
                                    text: 'Nouveau Bloc'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'deleteElement',
                                    iconAlign: 'top',
                                    iconCls: 'remove_big',
                                    scale: 'large',
                                    text: 'Supprimer'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Presse-papiers',
                            columns: 4,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'boutonCopierMasque',
                                    iconAlign: 'top',
                                    iconCls: 'applications_big',
                                    scale: 'large',
                                    text: 'Copier'
                                },
                                {
                                    xtype: 'button',
                                    id: 'ajouterPanierMasques',
                                    iconAlign: 'top',
                                    iconCls: 'shopping_cart_add_big',
                                    scale: 'large',
                                    text: 'Ajouter au panier'
                                },
                                {
                                    xtype: 'button',
                                    itemId: 'boutonCreerRaccourci',
                                    iconAlign: 'top',
                                    iconCls: 'favorite_add_big',
                                    scale: 'large',
                                    text: 'Ajouter aux favoris'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Sauvegarde',
                            columns: 4,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'AdminfMasquesEnregistrer',
                                    iconAlign: 'top',
                                    iconCls: 'floppy_disc_big',
                                    scale: 'large',
                                    text: 'Enregistrer'
                                },
                                {
                                    xtype: 'button',
                                    id: 'AdminfMasquesPublier',
                                    iconAlign: 'top',
                                    iconCls: 'floppy_disc_accept_big',
                                    scale: 'large',
                                    text: 'Enregistrer et publier'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            disabled: true,
                            headerPosition: 'bottom',
                            title: 'Fichier',
                            columns: 4,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    id: 'AdminfMasquesExporter',
                                    iconAlign: 'top',
                                    iconCls: 'application_down_big',
                                    scale: 'large',
                                    text: 'Exporter'
                                },
                                {
                                    xtype: 'button',
                                    id: 'AdminfMasquesImporter',
                                    iconAlign: 'top',
                                    iconCls: 'application_up_big',
                                    scale: 'large',
                                    text: 'Importer'
                                }
                            ]
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'boutonAide',
                            iconCls: 'info_big',
                            scale: 'large'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    frame: false,
                    id: 'masquesGrid',
                    width: 150,
                    resizable: true,
                    resizeHandles: 'e',
                    title: '',
                    forceFit: false,
                    store: 'MasquesDataJson',
                    viewConfig: {
                        id: 'masquesGridView'
                    },
                    features: [
                        {
                            ftype: 'grouping',
                            startCollapsed: false
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/application.png"> ' + value );
                            },
                            dataIndex: 'text',
                            flex: 1.2,
                            groupable: false,
                            text: 'Titre',
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'etat',
                            flex: 1,
                            groupable: false,
                            text: 'Etat'
                        }
                    ],
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            ptype: 'cellediting'
                        })
                    ],
                    selModel: Ext.create('Ext.selection.RowModel', {

                    })
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            iconCls: 'edit',
                            title: 'Edition',
                            items: [
                                {
                                    xtype: 'panel',
                                    flex: 1,
                                    border: 0,
                                    frame: false,
                                    id: 'masqueEdition',
                                    autoScroll: false,
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    }
                                },
                                {
                                    xtype: 'panel',
                                    margins: '0, 0, 0, 2',
                                    frame: true,
                                    id: 'paneauPropMasque',
                                    width: 300,
                                    autoScroll: true,
                                    resizable: true,
                                    resizeHandles: 'w',
                                    layout: {
                                        type: 'anchor'
                                    },
                                    collapseDirection: 'right',
                                    collapsed: false,
                                    collapsible: true,
                                    iconCls: 'parametres',
                                    title: 'Propriétés',
                                    titleCollapse: false,
                                    items: [
                                        {
                                            xtype: 'hiddenfield',
                                            id: 'elementIdField',
                                            fieldLabel: 'Label'
                                        },
                                        {
                                            xtype: 'form',
                                            id: 'elementEditControl',
                                            margin: '6 0 0 0',
                                            autoScroll: false,
                                            bodyPadding: 10,
                                            title: 'Sélectionnez un élément'
                                        }
                                    ],
                                    listeners: {
                                        resize: {
                                            fn: me.onPaneauPropMasqueResize,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            iconCls: 'versions',
                            title: 'Historique',
                            items: [
                                {
                                    xtype: 'mygridpanel3'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onImageRender: function(abstractcomponent, options) {
        abstractcomponent.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/application.png');
    },

    onPaneauPropMasqueResize: function(abstractcomponent, adjWidth, adjHeight, options) {
        this.doLayout();
    }

});