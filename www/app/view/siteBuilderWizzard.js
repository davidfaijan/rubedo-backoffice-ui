/*
 * File: app/view/siteBuilderWizzard.js
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

Ext.define('Rubedo.view.siteBuilderWizzard', {
    extend: 'Ext.window.Window',
    alias: 'widget.siteBuilderWizzard',

    requires: [
        'Rubedo.view.WorkspaceCombo',
        'Rubedo.view.MyToolbar56'
    ],

    height: 330,
    id: 'siteBuilderWizzard',
    width: 464,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Assistant de création de site',
    constrainHeader: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    layout: {
                        type: 'card'
                    },
                    title: '',
                    items: [
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'anchor'
                            },
                            bodyPadding: 10,
                            header: true,
                            title: 'Etape 1 : Identification',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'text',
                                    fieldLabel: 'Nom de domaine *',
                                    labelWidth: 110,
                                    allowBlank: false,
                                    regex: new RegExp(/^([a-z]|[1-9]|[-]|[.]){0,}$/)
                                },
                                {
                                    xtype: 'combobox',
                                    managesStore: true,
                                    anchor: '100%',
                                    name: 'theme',
                                    value: 'Default',
                                    fieldLabel: 'Theme ',
                                    labelWidth: 110,
                                    displayField: 'label',
                                    store: 'SiteThemesStore',
                                    valueField: 'text'
                                },
                                {
                                    xtype: 'combobox',
                                    anchor: '100%',
                                    name: 'protocol',
                                    fieldLabel: 'Protocole ',
                                    labelWidth: 110,
                                    store: [
                                        'HTTP',
                                        'HTTPS',
                                        'HTTP + HTTPS'
                                    ]
                                },
                                {
                                    xtype: 'WorkspaceCombo',
                                    labelWidth: 110,
                                    store: 'ContributeWorkspacesCombo',
                                    anchor: '100%'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            layout: {
                                type: 'anchor'
                            },
                            bodyPadding: 10,
                            header: true,
                            title: 'Etape 2 : Modèle',
                            items: [
                                {
                                    xtype: 'displayfield',
                                    anchor: '100%',
                                    name: 'siteModelId',
                                    submitValue: false,
                                    value: 'Site Vide',
                                    fieldLabel: 'Modèle '
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            overflowY: 'auto',
                            layout: {
                                type: 'anchor'
                            },
                            bodyPadding: 10,
                            header: true,
                            title: 'Etape 3 : Référencement',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'title',
                                    fieldLabel: 'Titre par défaut'
                                },
                                {
                                    xtype: 'textareafield',
                                    anchor: '100%',
                                    name: 'description',
                                    fieldLabel: 'Description par défaut',
                                    maxLength: 250
                                },
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'author',
                                    value: 'Powered by Rubedo',
                                    fieldLabel: 'Auteur par défaut'
                                },
                                {
                                    xtype: 'button',
                                    anchor: '100%',
                                    id: 'siteWizzardCreateBtn',
                                    margin: '10 0 0 0',
                                    scale: 'large',
                                    text: 'Créer ce site'
                                }
                            ],
                            listeners: {
                                render: {
                                    fn: me.onPanelRender,
                                    scope: me
                                }
                            }
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'mytoolbar56',
                            height: 32,
                            dock: 'bottom'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onPanelRender: function(abstractcomponent, options) {
        var tagPicker = Ext.create("Ext.ux.form.field.BoxSelect", {
            store:[],
            anchor:"100%",
            name:"keywords",
            fieldLabel:"Mots clés par défaut",
            multiSelect:true,
            forceSelection:false,
            createNewOnEnter:true,
            hideTrigger:true,
            triggerOnClick:false,
            createNewOnBlur:true,
            pinList:false
        });
        abstractcomponent.insert(3,tagPicker);
    }

});