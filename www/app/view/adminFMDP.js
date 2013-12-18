/*
 * File: app/view/adminFMDP.js
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

Ext.define('Rubedo.view.adminFMDP', {
    extend: 'Ext.window.Window',
    alias: 'widget.adminFMDP',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17'
    ],

    favoriteIcon: 'application.png',
    localiserId: 'pageMaskWindow',
    height: 578,
    id: 'adminFMDP',
    width: 1400,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    constrainHeader: true,
    iconCls: 'masque-icon',
    title: 'Masques de page',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tools: [
                {
                    xtype: 'mytool16'
                },
                {
                    xtype: 'mytool17'
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
                            localiserId: 'masksLaunchBtn',
                            itemId: 'origine',
                            iconCls: 'masque-icon',
                            text: 'Masques de page '
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
                        me.processBoiteBarreMeta({
                            xtype: 'container',
                            flex: 2,
                            itemId: 'boiteBarreMeta',
                            minWidth: 400,
                            tpl: [
                                '<b>{text}</b> </br> <b>Création : </b> {creation} <b>Dernière modification : </b> {derniereModification} <b>Auteur : </b> {autore}  <b>Version : </b>{version}'
                            ]
                        }),
                        {
                            xtype: 'slider',
                            localiserId: 'zoomLevelSlider',
                            id: 'MaskZoomControlSlider',
                            width: 400,
                            fieldLabel: 'Niveau de zoom',
                            value: 600,
                            maxValue: 2000,
                            minValue: 200,
                            useTips: false,
                            listeners: {
                                change: {
                                    fn: me.onMaskZoomControlSliderChange,
                                    scope: me
                                }
                            }
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
                            ACL: 'write.ui.masks',
                            localiserId: 'newBtn',
                            id: 'boutonNouveauMasque',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Nouveau'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.masks',
                            localiserId: 'removeBtn',
                            disabled: true,
                            id: 'boutonSupprimerMasque',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.masks',
                            localiserId: 'editGroup',
                            disabled: true,
                            id: 'masksEditionTopBarBox',
                            headerPosition: 'bottom',
                            title: 'Edition',
                            columns: 8,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    localiserId: 'newRowBtn',
                                    disabled: true,
                                    id: 'newRow',
                                    iconAlign: 'top',
                                    iconCls: 'window_add_big',
                                    scale: 'large',
                                    text: 'Nouvelle Ligne'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'newColBtn',
                                    disabled: true,
                                    id: 'newCol',
                                    iconAlign: 'top',
                                    iconCls: 'window_add_big',
                                    scale: 'large',
                                    text: 'Nouvelle Colonne'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'newBlocBtn',
                                    disabled: true,
                                    id: 'newBloc',
                                    iconAlign: 'top',
                                    iconCls: 'window_add_big',
                                    scale: 'large',
                                    text: 'Nouveau Bloc'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'removeBtn',
                                    disabled: true,
                                    id: 'deleteElement',
                                    iconAlign: 'top',
                                    iconCls: 'window_remove_big',
                                    scale: 'large',
                                    text: 'Supprimer'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'exportBtn',
                                    disabled: true,
                                    id: 'exportElement',
                                    iconAlign: 'top',
                                    iconCls: 'window_down_big',
                                    scale: 'large',
                                    text: 'Exporter'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'importBtn',
                                    disabled: true,
                                    id: 'importElement',
                                    iconAlign: 'top',
                                    iconCls: 'window_up_big',
                                    scale: 'large',
                                    text: 'Importer'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'moveBtn',
                                    disabled: true,
                                    id: 'moveElementUp',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_up_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'moveBtn',
                                    disabled: true,
                                    id: 'moveElementDown',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_down_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            localiserId: 'clipboardGroup',
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
                                    ACL: 'write.ui.masks',
                                    localiserId: 'duplicateBtn',
                                    id: 'boutonCopierMasque',
                                    iconAlign: 'top',
                                    iconCls: 'applications_big',
                                    scale: 'large',
                                    text: 'Dupliquer'
                                },
                                {
                                    xtype: 'button',
                                    hidden: true,
                                    id: 'ajouterPanierMasques',
                                    iconAlign: 'top',
                                    iconCls: 'shopping_cart_add_big',
                                    scale: 'large',
                                    text: 'Ajouter au panier'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'shotcutBtn',
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
                            ACL: 'write.ui.masks',
                            localiserId: 'saveGroup',
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
                                    localiserId: 'saveBtn',
                                    id: 'AdminfMasquesEnregistrer',
                                    iconAlign: 'top',
                                    iconCls: 'floppy_disc_big',
                                    scale: 'large',
                                    text: 'Enregistrer',
                                    listeners: {
                                        afterrender: {
                                            fn: me.onAdminfMasquesEnregistrerAfterRender,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            disabled: true,
                            hidden: true,
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
                                    ACL: 'write.ui.masks',
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
                            RApplication: 'masks',
                            itemId: 'RHelpBtn',
                            iconCls: 'info_big',
                            scale: 'large'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    managesStore: true,
                    id: 'masquesGrid',
                    width: 200,
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
                            groupHeaderTpl: Ext.create('Ext.XTemplate', 
                                'Site : {name:this.getProperName}',
                                {
                                    getProperName: function(name) {
                                        return(Ext.getStore("SitesComboMasks").findRecord("id",name).get("text"));
                                    }
                                }
                            )
                        }
                    ],
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var returner = value;
                                if (record.get("readOnly")){
                                    returner ="<i style=\"color:#777;\">"+value+"</i>";
                                }
                                return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/application.png"> ' + returner );
                            },
                            localiserId: 'titleColumn',
                            dataIndex: 'text',
                            groupable: false,
                            text: 'Titre',
                            flex: 1.2,
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false
                            }
                        }
                    ],
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            listeners: {
                                beforeedit: {
                                    fn: me.onGridcelleditingpluginBeforeEdit,
                                    scope: me
                                },
                                edit: {
                                    fn: me.onGridcelleditingpluginEdit,
                                    scope: me
                                }
                            }
                        })
                    ],
                    selModel: Ext.create('Ext.selection.RowModel', {

                    }),
                    listeners: {
                        beforerender: {
                            fn: me.onMasquesGridBeforeRender,
                            scope: me
                        },
                        destroy: {
                            fn: me.onMasquesGridDestroy,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    header: false,
                    iconCls: 'edit',
                    title: '',
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            autoScroll: true,
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            items: [
                                me.processMasqueEdition({
                                    xtype: 'panel',
                                    border: 0,
                                    height: 600,
                                    id: 'masqueEdition',
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    }
                                })
                            ]
                        },
                        {
                            xtype: 'panel',
                            localiserId: 'propsPanel',
                            margins: '0, 0, 0, 2',
                            frame: true,
                            id: 'paneauPropMasque',
                            width: 300,
                            autoScroll: true,
                            resizable: true,
                            resizeHandles: 'w',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            collapseDirection: 'right',
                            collapsed: false,
                            collapsible: true,
                            iconCls: 'parametres',
                            title: 'Propriétés',
                            items: [
                                {
                                    xtype: 'hiddenfield',
                                    id: 'elementIdField',
                                    fieldLabel: 'Label'
                                },
                                {
                                    xtype: 'hiddenfield',
                                    id: 'mainColumnIdField',
                                    fieldLabel: 'Label'
                                },
                                {
                                    xtype: 'form',
                                    localiserId: 'selectElementPanel',
                                    flex: 1,
                                    id: 'elementEditControl',
                                    autoScroll: true,
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
                }
            ]
        });

        me.callParent(arguments);
    },

    processBoiteBarreMeta: function(config) {
        config.tpl=[
        '<b>{text}</b> </br> <b>'+Rubedo.RubedoAutomatedElementsLoc.creationText+' : </b> {creation} <b>'+Rubedo.RubedoAutomatedElementsLoc.lastUpdateText+' : </b> {derniereModification} <b>'+Rubedo.RubedoAutomatedElementsLoc.authorText+' : </b> {autore}  <b>'+Rubedo.RubedoAutomatedElementsLoc.versionText+' : </b>{version}'
        ];
        return config;
    },

    processMasqueEdition: function(config) {
        config.plugins=[Ext.create("Ext.ux.BoxReorderer")];
        return config;
    },

    onImageRender: function(component, eOpts) {
        component.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/application.png');
    },

    onMaskZoomControlSliderChange: function(slider, newValue, thumb, eOpts) {
        Ext.getCmp("masqueEdition").setHeight(newValue);
    },

    onAdminfMasquesEnregistrerAfterRender: function(component, eOpts) {
        component.findParentByType("window").getEl().addKeyListener({key:"s", ctrl:true}, function(e,t){
        if (!component.disabled){
            component.fireEvent("click", component);
            t.stopEvent();
        }
    });
    },

    onGridcelleditingpluginBeforeEdit: function(editor, e, eOpts) {
        if (!ACL.interfaceRights['write.ui.masks']){return(false);}
    },

    onGridcelleditingpluginEdit: function(editor, e, eOpts) {
        var bcRep = Ext.getCmp("adminFMDP").getDockedComponent('filArianne').getComponent('type');
        if (!Ext.isEmpty(bcRep)){
            bcRep.setText(e.value);
        }
    },

    onMasquesGridBeforeRender: function(component, eOpts) {
        Ext.getStore("SitesComboMasks").load();
    },

    onMasquesGridDestroy: function(component, eOpts) {
        Ext.getStore("SitesComboMasks").removeAll();
    },

    onPaneauPropMasqueResize: function(component, width, height, oldWidth, oldHeight, eOpts) {
        this.doLayout();
    }

});