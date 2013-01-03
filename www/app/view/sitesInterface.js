/*
 * File: app/view/sitesInterface.js
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

Ext.define('Rubedo.view.sitesInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.sitesInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17'
    ],

    height: 449,
    id: 'sitesInterface',
    width: 753,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'referencement_icon',
    title: 'Sites',
    constrainHeader: true,
    maximizable: false,
    minimizable: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'write.ui.sites',
                            id: 'siteAddBtn',
                            iconCls: 'add',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.sites',
                            disabled: true,
                            id: 'siteRemoveBtn',
                            iconCls: 'close',
                            text: 'Supprimer'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    managesStore: false,
                    id: 'mainSitesGrid',
                    width: 200,
                    title: '',
                    forceFit: true,
                    store: 'SitesJson',
                    viewConfig: {

                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'text',
                            text: 'Nom',
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false
                            }
                        }
                    ],
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            ptype: 'cellediting',
                            listeners: {
                                beforeedit: {
                                    fn: me.onGridcelleditingpluginBeforeEdit,
                                    scope: me
                                }
                            }
                        })
                    ]
                },
                {
                    xtype: 'form',
                    flex: 1,
                    disabled: true,
                    id: 'mainSiteProps',
                    overflowY: 'auto',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'fieldset',
                            collapsible: true,
                            title: 'Site',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'text',
                                    fieldLabel: 'Nom ',
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'alias',
                                    fieldLabel: 'Alias '
                                },
                                {
                                    xtype: 'combobox',
                                    managesStore: true,
                                    anchor: '100%',
                                    name: 'theme',
                                    fieldLabel: 'Theme ',
                                    displayField: 'label',
                                    store: 'SiteThemesStore',
                                    valueField: 'text'
                                },
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    name: 'protocol',
                                    fieldLabel: 'Protocole ',
                                    store: [
                                        'HTTP',
                                        'HTTPS',
                                        'HTTP + HTTPS'
                                    ]
                                },
                                {
                                    xtype: 'textareafield',
                                    anchor: '100%',
                                    name: 'filter',
                                    fieldLabel: 'Filtre '
                                },
                                {
                                    xtype: 'textareafield',
                                    anchor: '100%',
                                    name: 'description',
                                    fieldLabel: 'Description ',
                                    maxLength: 250
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'mainLanguage',
                                    fieldLabel: 'Langue principale '
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'languages',
                                    fieldLabel: 'Langues '
                                }
                            ],
                            listeners: {
                                render: {
                                    fn: me.onFieldsetRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'fieldset',
                            collapsed: true,
                            collapsible: true,
                            title: 'Messagerie',
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    anchor: '100%',
                                    name: 'activeMessagery',
                                    fieldLabel: 'Activé ',
                                    boxLabel: ''
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'SMTPServer',
                                    fieldLabel: 'Serveur SMTP '
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    name: 'SMTPPort',
                                    fieldLabel: 'Port SMTP ',
                                    allowDecimals: false,
                                    minValue: 0
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'SMTPLogin',
                                    fieldLabel: 'Login SMTP '
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    inputType: 'password',
                                    name: 'SMTPPassword',
                                    fieldLabel: 'Mot de passe SMTP '
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'defaultEmail',
                                    fieldLabel: 'E-mail par défaut ',
                                    vtype: 'email'
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            collapsed: true,
                            collapsible: true,
                            title: 'Proxy'
                        },
                        {
                            xtype: 'fieldset',
                            collapsed: true,
                            collapsible: true,
                            title: 'Cache'
                        },
                        {
                            xtype: 'fieldset',
                            collapsed: true,
                            collapsible: true,
                            title: 'Accessibilité',
                            items: [
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    name: 'accessibilityLevel',
                                    fieldLabel: 'Niveau d\'accessibilité ',
                                    store: [
                                        'RGAA A',
                                        'RGAA AA',
                                        'RGAA AAA'
                                    ]
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'opquastLogin',
                                    fieldLabel: 'Login Opquast '
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    inputType: 'password',
                                    name: 'opquastPassword',
                                    fieldLabel: 'Mot de passe Optquast '
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            anchor: '100%',
                            id: 'updateSiteBtn',
                            scale: 'large',
                            text: 'Appliquer'
                        }
                    ]
                }
            ],
            tools: [
                {
                    xtype: 'mytool16'
                },
                {
                    xtype: 'mytool17'
                }
            ]
        });

        me.callParent(arguments);
    },

    onGridcelleditingpluginBeforeEdit: function(editor, e, options) {
        if (!ACL.interfaceRights['write.ui.sites']){return(false);}
    },

    onFieldsetRender: function(abstractcomponent, options) {
        var homePageSelector = Ext.create("Ext.ux.TreePicker", {
            store:Ext.getStore("PagePickerStore"),
            displayField:"text",
            fieldLabel:"Page d'accueil",
            anchor: "100%",
            name:"homePage"
        });

        abstractcomponent.add(homePageSelector);

        var tagPicker = Ext.create("Ext.ux.form.field.BoxSelect", {
            store:[],
            anchor:"100%",
            name:"keywords",
            fieldLabel:"Mots clés",
            multiSelect:true,
            forceSelection:false,
            createNewOnEnter:true,
            hideTrigger:true,
            triggerOnClick:false,
            pinList:false
        });
        abstractcomponent.add(tagPicker);
    }

});