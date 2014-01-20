/*
 * File: app/view/emailTypesInterface.js
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

Ext.define('Rubedo.view.emailTypesInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.emailTypesInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17'
    ],

    favoriteIcon: 'application.png',
    localiserId: 'emailsInterface',
    height: 578,
    id: 'emailTypesInterface',
    width: 1400,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    constrainHeader: true,
    iconCls: 'mail_small',
    title: 'Emails',

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
                            localiserId: 'emailsLaunchBtn',
                            itemId: 'origine',
                            iconCls: 'mail_small',
                            text: 'Emails'
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
                            itemId: 'boiteBarreMeta',
                            minWidth: 400,
                            tpl: [
                                '<b>{text}</b> </br> <b>Création : </b> {creation} <b>Dernière modification : </b> {derniereModification} <b>Auteur : </b> {autore}  <b>Version : </b>{version}'
                            ]
                        }),
                        {
                            xtype: 'tbfill'
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
                            ACL: 'write.ui.emails',
                            localiserId: 'newBtn',
                            id: 'newETBtn',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Nouveau'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.emails',
                            localiserId: 'removeBtn',
                            disabled: true,
                            id: 'deleteEtBtn',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.emails',
                            localiserId: 'editStructureFS',
                            id: 'eTTopBarBox',
                            headerPosition: 'bottom',
                            title: 'Edit structure',
                            columns: 5,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    localiserId: 'newRowBtn',
                                    disabled: true,
                                    id: 'newETRowBtn',
                                    iconAlign: 'top',
                                    iconCls: 'window_add_big',
                                    scale: 'large',
                                    text: 'Nouvelle Ligne'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'newColBtn',
                                    disabled: true,
                                    id: 'newETColBtn',
                                    iconAlign: 'top',
                                    iconCls: 'window_add_big',
                                    scale: 'large',
                                    text: 'Nouvelle Colonne'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'removeBtn',
                                    disabled: true,
                                    id: 'deleteETElBtn',
                                    iconAlign: 'top',
                                    iconCls: 'window_remove_big',
                                    scale: 'large',
                                    text: 'Supprimer'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'moveBtn',
                                    disabled: true,
                                    id: 'moveUPETBtn',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_up_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'moveBtn',
                                    disabled: true,
                                    id: 'moveDownETBTn',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_down_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.emails',
                            localiserId: 'addComponentsFS',
                            disabled: true,
                            id: 'ETAddComponentsBtnGr',
                            headerPosition: 'bottom',
                            title: 'Add components',
                            columns: 3,
                            items: [
                                {
                                    xtype: 'button',
                                    localiserId: 'addImageCBtn',
                                    id: 'ETAddImageBtn',
                                    iconAlign: 'top',
                                    iconCls: 'image_add_big',
                                    scale: 'large',
                                    text: 'Image'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'addSimpleTextCBtn',
                                    id: 'ETAddSimpleTextBtn',
                                    iconAlign: 'top',
                                    iconCls: 'text_big',
                                    scale: 'large',
                                    text: 'Simple text'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'addRichTextCBtn',
                                    id: 'ETAddTextBtn',
                                    iconAlign: 'top',
                                    iconCls: 'text_big',
                                    scale: 'large',
                                    text: 'Rich text'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            localiserId: 'clipboardGroup',
                            disabled: true,
                            id: 'ETppBG',
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
                                    ACL: 'write.ui.emails',
                                    localiserId: 'duplicateBtn',
                                    id: 'duplicateETBtn',
                                    iconAlign: 'top',
                                    iconCls: 'applications_big',
                                    scale: 'large',
                                    text: 'Dupliquer'
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
                            ACL: 'write.ui.emails',
                            localiserId: 'saveGroup',
                            disabled: true,
                            id: 'ETSaverBG',
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
                                    id: 'saveETBtn',
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
                            localiserId: 'exploutFS',
                            disabled: true,
                            id: 'ETEploit',
                            headerPosition: 'bottom',
                            title: 'Exploit',
                            columns: 2,
                            items: [
                                {
                                    xtype: 'button',
                                    localiserId: 'sendEmailBtn',
                                    id: 'ETSendBtn',
                                    iconAlign: 'top',
                                    iconCls: 'sendMail_big',
                                    scale: 'large',
                                    text: 'Send'
                                }
                            ]
                        },
                        {
                            xtype: 'tbfill'
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onEmailTypesInterfaceAfterRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onEmailTypesInterfaceBeforeClose,
                    scope: me
                }
            },
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'mainETGrid',
                    width: 200,
                    title: '',
                    forceFit: true,
                    store: 'EmailTemplates',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            localiserId: 'nameCol',
                            dataIndex: 'text',
                            text: 'Name'
                        }
                    ],
                    features: [
                        {
                            ftype: 'grouping',
                            groupHeaderTpl: Ext.create('Ext.XTemplate', 
                                '{name:this.formatName}',
                                {
                                    formatName: function(name) {
                                        if (name) {
                                            return (Rubedo.RubedoAutomatedElementsLoc.modelText);
                                        } else {
                                            return (Rubedo.RubedoAutomatedElementsLoc.mailText);
                                        }
                                    }
                                }
                            )
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    activeTab: 0,
                    items: [
                        me.processEdit({
                            xtype: 'panel',
                            localiserId: 'editTab',
                            frame: true,
                            layout: {
                                align: 'stretch',
                                type: 'hbox'
                            },
                            title: 'Edit',
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    id: 'mainETContainer',
                                    padding: 10,
                                    autoScroll: true,
                                    layout: {
                                        align: 'center',
                                        type: 'vbox'
                                    },
                                    items: [
                                        me.processMainETHolder({
                                            xtype: 'panel',
                                            id: 'mainETHolder',
                                            minHeight: 200,
                                            width: 804,
                                            layout: {
                                                align: 'stretch',
                                                type: 'vbox'
                                            },
                                            title: ''
                                        })
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    localiserId: 'propsPanel',
                                    margins: '0, 0, 0, 2',
                                    frame: true,
                                    id: 'eTPropsPan',
                                    width: 260,
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
                                            id: 'elementETIdField',
                                            fieldLabel: 'Label'
                                        },
                                        {
                                            xtype: 'form',
                                            localiserId: 'selectElementPanel',
                                            flex: 1,
                                            id: 'eTEditControl',
                                            autoScroll: true,
                                            bodyPadding: 10,
                                            title: 'Sélectionnez un élément'
                                        }
                                    ],
                                    listeners: {
                                        resize: {
                                            fn: me.onPaneauPropMasqueResize1,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }),
                        me.processMainEmailForm({
                            xtype: 'form',
                            localiserId: 'propertiesTab',
                            id: 'mainEmailForm',
                            autoScroll: true,
                            bodyPadding: 10,
                            title: 'Properties',
                            items: [
                                {
                                    xtype: 'textfield',
                                    localiserId: 'nameField',
                                    anchor: '100%',
                                    fieldLabel: 'Name',
                                    name: 'text',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'textfield',
                                    localiserId: 'subjectField',
                                    anchor: '100%',
                                    fieldLabel: 'Subject',
                                    name: 'subject',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'textareafield',
                                    localiserId: 'plainTextField',
                                    anchor: '100%',
                                    fieldLabel: 'Plain text',
                                    name: 'plainText',
                                    grow: true,
                                    growMin: 100,
                                    rows: 10
                                }
                            ]
                        }),
                        me.processETPreviewPanel({
                            xtype: 'panel',
                            localiserId: 'previewTab',
                            id: 'ETPreviewPanel',
                            layout: {
                                type: 'fit'
                            },
                            title: 'Preview'
                        })
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

    processMainETHolder: function(config) {
        config.plugins=[Ext.create("Ext.ux.BoxReorderer")];
        return config;
    },

    processEdit: function(config) {
        config.title=Rubedo.RubedoInterfaceLoc.editTab.text;
        return config;
    },

    processMainEmailForm: function(config) {
        config.title=Rubedo.RubedoInterfaceLoc.propertiesTab.title;
        return config;
    },

    processETPreviewPanel: function(config) {
        config.title=Rubedo.RubedoInterfaceLoc.previewTab.title;
        return config;
    },

    onImageRender: function(component, eOpts) {
        component.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/mail.png');
    },

    onAdminfMasquesEnregistrerAfterRender: function(component, eOpts) {
        component.findParentByType("window").getEl().addKeyListener({key:"s", ctrl:true}, function(e,t){
        if (!component.disabled){
            component.fireEvent("click", component);
            t.stopEvent();
        }
    });
    },

    onEmailTypesInterfaceAfterRender: function(component, eOpts) {
        Ext.getStore("EmailTemplates").load();
    },

    onEmailTypesInterfaceBeforeClose: function(panel, eOpts) {
        Ext.getStore("EmailTemplates").removeAll();
    },

    onPaneauPropMasqueResize1: function(component, width, height, oldWidth, oldHeight, eOpts) {
        this.doLayout();
    }

});