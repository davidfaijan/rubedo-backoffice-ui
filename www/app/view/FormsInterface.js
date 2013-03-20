/*
 * File: app/view/FormsInterface.js
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

Ext.define('Rubedo.view.FormsInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.FormsInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Rubedo.view.WorkspaceCombo'
    ],

    favoriteIcon: 'images.png',
    height: 627,
    id: 'FormsInterface',
    width: 1080,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'form_small',
    title: 'Formulaires',
    constrainHeader: true,

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
                    itemId: 'breadcrumb',
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'form_small',
                            text: 'Formulaires'
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 86,
                    itemId: 'contextBar',
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'write.ui.damTypes',
                            id: 'addFormBtn',
                            iconAlign: 'top',
                            iconCls: 'add_big',
                            scale: 'large',
                            text: 'Ajouter'
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.damTypes',
                            disabled: true,
                            id: 'removeFormBtn',
                            iconAlign: 'top',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.damTypes',
                            disabled: true,
                            id: 'formElementsEditBtnGroup',
                            headerPosition: 'bottom',
                            title: 'Edition',
                            columns: 5,
                            layout: {
                                columns: 2,
                                type: 'table'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'formAddPageBtn',
                                    iconAlign: 'top',
                                    iconCls: 'page_add_big',
                                    scale: 'large',
                                    text: 'Nouvelle page'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'formElementAddBtn',
                                    iconAlign: 'top',
                                    iconCls: 'add_big',
                                    scale: 'large',
                                    text: 'Nouvel élément'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'formElementMoveUpBtn',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_up_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'formElementMoveDownBtn',
                                    iconAlign: 'top',
                                    iconCls: 'arrow_down_big',
                                    scale: 'large',
                                    text: 'Déplacer'
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'formElementRemoveBtn',
                                    iconAlign: 'top',
                                    iconCls: 'remove_big',
                                    scale: 'large',
                                    text: 'Supprimer l\'élément'
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
                                    ACL: 'write.ui.damTypes',
                                    iconAlign: 'top',
                                    iconCls: 'applications_big',
                                    scale: 'large',
                                    text: 'Copier'
                                },
                                {
                                    xtype: 'button',
                                    iconAlign: 'top',
                                    iconCls: 'favorite_add_big',
                                    scale: 'large',
                                    text: 'Ajouter aux favoris'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.damTypes',
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
                                    ACL: 'write.ui.damTypes',
                                    id: 'formSaveBtn',
                                    iconAlign: 'top',
                                    iconCls: 'floppy_disc_big',
                                    scale: 'large',
                                    text: 'Enregistrer',
                                    listeners: {
                                        afterrender: {
                                            fn: me.onSaveMTBtnAfterRender,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            RApplication: 'damTypes',
                            iconCls: 'info_big',
                            scale: 'large',
                            text: ''
                        },
                        {
                            xtype: 'hiddenfield',
                            id: 'formSelectedElementField',
                            fieldLabel: 'Label'
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
                                    fn: me.onImageRender1,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'container',
                            itemId: 'boiteBarreMeta',
                            margin: '0 0 0 20',
                            tpl: [
                                '<b>{title}</b> </br> <b>Création : </b> {creation} <b>Dernière modification : </b> {derniereModification} <b>Auteur : </b> {createUser}  <b>Version : </b>{version}'
                            ]
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'mainFormsGrid',
                    width: 200,
                    title: '',
                    forceFit: true,
                    store: 'FormsStore',
                    viewConfig: {

                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if (record.get("readOnly")){
                                    return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/note_lock.png"> ' + "<i style=\"color:#777;\">"+value+"</i>");
                                }
                                return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/note.png"> ' + value);
                            },
                            dataIndex: 'title',
                            text: 'Titre'
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    disabled: true,
                    id: 'FormsCenterZone',
                    items: [
                        {
                            xtype: 'form',
                            id: 'formPropsForm',
                            bodyPadding: 10,
                            iconCls: 'parametres',
                            title: 'Propriétés',
                            items: [
                                {
                                    xtype: 'textfield',
                                    anchor: '100%',
                                    name: 'title',
                                    fieldLabel: 'Titre du formulaire',
                                    labelWidth: 160,
                                    allowBlank: false
                                },
                                {
                                    xtype: 'textareafield',
                                    anchor: '100%',
                                    name: 'description',
                                    fieldLabel: 'Descriptif',
                                    labelWidth: 160
                                },
                                {
                                    xtype: 'checkboxfield',
                                    anchor: '100%',
                                    name: 'uniqueAnswer',
                                    fieldLabel: 'Unicité de la réponse',
                                    labelWidth: 160,
                                    boxLabel: '',
                                    inputValue: 'true'
                                },
                                {
                                    xtype: 'datefield',
                                    anchor: '50%',
                                    margin: '0 10 0 0',
                                    style: '{float:left;}',
                                    name: 'openingDate',
                                    fieldLabel: 'Date d\'ouverture',
                                    labelWidth: 160
                                },
                                {
                                    xtype: 'datefield',
                                    anchor: '50%',
                                    name: 'closingDate',
                                    fieldLabel: 'Date de fermeture',
                                    labelWidth: 160
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            floating: false,
                            id: 'FormsEditor',
                            autoScroll: true,
                            bodyPadding: 10,
                            iconCls: 'edit',
                            title: 'Edition',
                            dockedItems: [
                                {
                                    xtype: 'toolbar',
                                    dock: 'top',
                                    height: 40
                                }
                            ],
                            items: [
                                {
                                    xtype: 'panel',
                                    id: 'FormsEditContainer',
                                    minHeight: 100,
                                    bodyCls: 'contrastCBorder',
                                    bodyPadding: 10
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            id: 'formRightsForm',
                            bodyPadding: 10,
                            iconCls: 'user',
                            title: 'Droits',
                            items: [
                                {
                                    xtype: 'WorkspaceCombo',
                                    name: 'workspaces',
                                    fieldLabel: 'Espaces de travail',
                                    labelWidth: 120,
                                    multiSelect: true,
                                    store: 'ContributeWorkspacesCombo',
                                    anchor: '100%'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            iconCls: 'monitoring',
                            title: 'Exploitation'
                        }
                    ]
                }
            ],
            listeners: {
                render: {
                    fn: me.onFormsInterfaceRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onFormsInterfaceBeforeClose,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onSaveMTBtnAfterRender: function(abstractcomponent, options) {
        abstractcomponent.findParentByType("window").getEl().addKeyListener({key:"s", ctrl:true}, function(e,t){
        if (!abstractcomponent.disabled){
            abstractcomponent.fireEvent("click", abstractcomponent);
            t.stopEvent();
        }
    });
    },

    onImageRender1: function(abstractcomponent, options) {
        abstractcomponent.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/note_edit.png');
    },

    onFormsInterfaceRender: function(abstractcomponent, options) {
        Ext.getStore("FormsStore").load();
    },

    onFormsInterfaceBeforeClose: function(panel, options) {
        Ext.getStore("FormsStore").removeAll();
    }

});