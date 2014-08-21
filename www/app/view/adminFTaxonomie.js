/*
 * File: app/view/adminFTaxonomie.js
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

Ext.define('Rubedo.view.adminFTaxonomie', {
    extend: 'Ext.window.Window',
    alias: 'widget.adminFTaxonomie',

    requires: [
        'Rubedo.view.DLSToolbar',
        'Rubedo.view.TermesTaxonomieTree',
        'Rubedo.view.WorkspaceCombo',
        'Ext.panel.Tool',
        'Ext.toolbar.Toolbar',
        'Ext.Img',
        'Ext.XTemplate',
        'Ext.container.ButtonGroup',
        'Ext.toolbar.Fill',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.form.field.TextArea',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Checkbox',
        'Ext.tree.Panel'
    ],

    favoriteIcon: 'tag.png',
    localiserId: 'taxonomyWindow',
    height: 578,
    id: 'adminFTaxonomie',
    width: 1133,
    constrainHeader: true,
    iconCls: 'page_taxonomy',
    title: 'Taxonomie',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

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
                            localiserId: 'taxonomyLaunchBtn',
                            itemId: 'origine',
                            iconCls: 'page_taxonomy',
                            text: 'Taxonomie '
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
                            margin: '0 0 0 20',
                            tpl: [
                                '{customMeta}'
                            ]
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    itemId: 'contextBar',
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'write.ui.taxonomy',
                            localiserId: 'addBtn',
                            id: 'boutonCreerTaxonomie',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.taxonomy',
                            localiserId: 'removeBtn',
                            disabled: true,
                            id: 'boutonSupprimerTaxo',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.taxonomy',
                            localiserId: 'saveBtn',
                            disabled: true,
                            id: 'boutonEnregistrerTaxo',
                            iconAlign: 'top',
                            iconCls: 'floppy_disc_big',
                            scale: 'large',
                            text: 'Enregistrer',
                            listeners: {
                                afterrender: {
                                    fn: me.onBoutonEnregistrerTaxoAfterRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.taxonomyTerms',
                            localiserId: 'editTermsGroup',
                            disabled: true,
                            id: 'taxoTermEditBrnGroup',
                            headerPosition: 'bottom',
                            title: 'Edition des termes',
                            columns: 2,
                            items: [
                                {
                                    xtype: 'button',
                                    localiserId: 'addBtn',
                                    id: 'taxoOpenInsertBtn',
                                    iconAlign: 'top',
                                    iconCls: 'add_big',
                                    scale: 'large',
                                    text: 'Ajouter'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'removeBtn',
                                    id: 'taxoTermKiller',
                                    iconAlign: 'top',
                                    iconCls: 'remove_big',
                                    scale: 'large',
                                    text: 'Supprimer'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            localiserId: 'shortcutBtn',
                            itemId: 'boutonCreerRaccourci',
                            iconAlign: 'top',
                            iconCls: 'favorite_add_big',
                            scale: 'large',
                            text: 'Ajouter aux favoris'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            RApplication: 'taxonomy',
                            itemId: 'RHelpBtn',
                            iconCls: 'info_big',
                            scale: 'large',
                            text: ''
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    managesStore: true,
                    id: 'AdminfTaxonomieGrid',
                    width: 150,
                    resizable: true,
                    resizeHandles: 'e',
                    title: '',
                    store: 'TaxonomieDataJson',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var returner = value;
                                if (record.get("readOnly")){
                                    returner ="<i style=\"color:#777;\">"+value+"</i>";
                                }
                                return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/tag.png"> '+returner);
                            },
                            localiserId: 'nameColumn',
                            dataIndex: 'name',
                            text: 'Nom',
                            flex: 1
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    disabled: true,
                    id: 'taxonomyCenterBox',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            id: 'conteneurAdminfTaxo',
                            iconCls: 'edit',
                            title: 'Edition',
                            layout: {
                                type: 'hbox',
                                align: 'stretch'
                            },
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'editTab'
                            },
                            items: [
                                {
                                    xtype: 'panel',
                                    localiserId: 'propsPanel',
                                    flex: 1,
                                    layout: 'card',
                                    collapseDirection: 'left',
                                    collapsible: true,
                                    title: 'Propriétés',
                                    items: [
                                        {
                                            xtype: 'form',
                                            id: 'ProprietesTaxonomie',
                                            itemId: 'mainLocItem',
                                            width: 300,
                                            autoScroll: true,
                                            bodyPadding: 10,
                                            collapseDirection: 'left',
                                            collapsed: false,
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    localiserId: 'nameField',
                                                    anchor: '100%',
                                                    fieldLabel: 'Nom ',
                                                    name: 'name',
                                                    allowBlank: false
                                                },
                                                {
                                                    xtype: 'textareafield',
                                                    localiserId: 'descriptionField',
                                                    anchor: '100%',
                                                    fieldLabel: 'Description ',
                                                    name: 'description'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    localiserId: 'helpTextField',
                                                    anchor: '100%',
                                                    fieldLabel: 'Texte d\'aide ',
                                                    name: 'helpText'
                                                },
                                                me.processFacetOperator({
                                                    xtype: 'combobox',
                                                    localiserId: 'facetOperatorField',
                                                    anchor: '100%',
                                                    fieldLabel: 'Facet operator',
                                                    name: 'facetOperator',
                                                    allowBlank: false,
                                                    editable: false,
                                                    forceSelection: true
                                                }),
                                                {
                                                    xtype: 'checkboxfield',
                                                    localiserId: 'expandableField',
                                                    anchor: '100%',
                                                    fieldLabel: 'Extensible ',
                                                    name: 'expandable',
                                                    boxLabel: '',
                                                    inputValue: 'true',
                                                    uncheckedValue: 'false'
                                                },
                                                {
                                                    xtype: 'checkboxfield',
                                                    localiserId: 'inputAsTreeField',
                                                    anchor: '100%',
                                                    fieldLabel: 'Saisie arborescente',
                                                    name: 'inputAsTree',
                                                    boxLabel: '',
                                                    inputValue: 'true',
                                                    uncheckedValue: 'false'
                                                },
                                                {
                                                    xtype: 'checkboxfield',
                                                    localiserId: 'multiSelectField',
                                                    anchor: '100%',
                                                    fieldLabel: 'Choix multiple ',
                                                    name: 'multiSelect',
                                                    boxLabel: '',
                                                    inputValue: 'true',
                                                    uncheckedValue: 'false'
                                                },
                                                {
                                                    xtype: 'checkboxfield',
                                                    localiserId: 'mandatoryField',
                                                    anchor: '100%',
                                                    fieldLabel: 'Obligatoire ',
                                                    name: 'mandatory',
                                                    boxLabel: '',
                                                    inputValue: 'true',
                                                    uncheckedValue: 'false'
                                                }
                                            ]
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'DLSToolbar',
                                            replicatorEntity: 'taxonomyReplicator',
                                            specialTaxoMode: true,
                                            id: 'taxonomyDLSToolbar',
                                            dock: 'top'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'TermesTaxonomieTree',
                                    localiserId: 'termsPanel',
                                    flex: 1
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            id: 'taxoRightsBox',
                            bodyPadding: 10,
                            iconCls: 'user',
                            title: 'Droits',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'rightsTab'
                            },
                            items: [
                                {
                                    xtype: 'WorkspaceCombo',
                                    fieldLabel: 'Espaces de travail',
                                    labelWidth: 120,
                                    name: 'workspaces',
                                    multiSelect: true,
                                    store: 'ContributeWorkspacesCombo',
                                    anchor: '100%'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    processFacetOperator: function(config) {
        config.store=[["AND",Rubedo.RubedoAutomatedElementsLoc.andText],["OR",Rubedo.RubedoAutomatedElementsLoc.orText]];
        return config;
    },

    onImageRender: function(component, eOpts) {
        component.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/tag.png');
    },

    onBoutonEnregistrerTaxoAfterRender: function(component, eOpts) {
        component.findParentByType("window").getEl().addKeyListener({key:"s", ctrl:true}, function(e,t){
        if (!component.disabled){
            component.fireEvent("click", component);
            t.stopEvent();
        }
        });
    }

});