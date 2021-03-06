/*
 * File: app/view/userSettings.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('Rubedo.view.userSettings', {
    extend: 'Ext.window.Window',
    alias: 'widget.userSettings',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.tab.Tab',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.Img',
        'Ext.panel.Tool',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill'
    ],

    localiserId: 'settingWindow',
    height: 460,
    id: 'userSettings',
    width: 604,
    layout: 'fit',
    constrainHeader: true,
    iconCls: 'parametres',
    title: 'Paramètres',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'form',
                            id: 'userInfoDisplay',
                            overflowY: 'auto',
                            layout: 'hbox',
                            bodyPadding: 10,
                            title: 'Informations',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'informationsTab'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'informationsFieldSet',
                                    flex: 1,
                                    height: 160,
                                    margin: 0,
                                    width: 356,
                                    autoScroll: true,
                                    title: 'Informations',
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
                                            xtype: 'textfield',
                                            localiserId: 'loginField',
                                            anchor: '100%',
                                            fieldLabel: 'Login ',
                                            name: 'login',
                                            allowBlank: false
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'mailField',
                                            anchor: '100%',
                                            fieldLabel: 'E-mail ',
                                            name: 'email',
                                            allowBlank: false,
                                            vtype: 'email'
                                        },
                                        {
                                            xtype: 'combobox',
                                            localiserId: 'languageField',
                                            anchor: '100%',
                                            fieldLabel: 'Langue ',
                                            name: 'language',
                                            editable: false,
                                            displayField: 'label',
                                            forceSelection: true,
                                            queryMode: 'local',
                                            store: 'BOLanguageStore',
                                            valueField: 'key'
                                        },
                                        {
                                            xtype: 'button',
                                            localiserId: 'applyBtn',
                                            anchor: '100%',
                                            id: 'userInfoEdit',
                                            text: 'Appliquer'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'photoFieldSet',
                                    height: 278,
                                    margin: '0 0 0 10',
                                    width: 200,
                                    title: 'Photo',
                                    items: [
                                        {
                                            xtype: 'image',
                                            height: 180,
                                            id: 'userProfilePicture',
                                            margin: '0 0 18 18',
                                            width: 140,
                                            src: 'resources/images/userBig.png'
                                        },
                                        {
                                            xtype: 'button',
                                            handler: function(button, event) {
                                                Ext.widget("PersoPicUploadWindow", {userMode:true}).show();
                                            },
                                            localiserId: 'changeBtn',
                                            anchor: '100%',
                                            margin: '0 0 10 0',
                                            text: 'Changer'
                                        },
                                        {
                                            xtype: 'button',
                                            localiserId: 'removeBtn',
                                            anchor: '100%',
                                            id: 'userProfilePictureDelete',
                                            text: 'Supprimer'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            bodyPadding: 10,
                            title: 'Accès',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'accessTab'
                            },
                            items: [
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'changePassFieldSet',
                                    height: 128,
                                    title: 'Changer de mot de passe',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'oldPasswordField',
                                            anchor: '100%',
                                            fieldLabel: 'Mot de passe actuel ',
                                            labelWidth: 160,
                                            name: 'oldPassword',
                                            inputType: 'password'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'newPasswordField',
                                            anchor: '100%',
                                            fieldLabel: 'Nouveau mot de passe ',
                                            labelWidth: 160,
                                            name: 'newPassword',
                                            inputType: 'password'
                                        },
                                        {
                                            xtype: 'textfield',
                                            localiserId: 'newPasswordConfirmField',
                                            anchor: '100%',
                                            fieldLabel: 'Confirmer le mot passe ',
                                            labelWidth: 160,
                                            name: 'newPasswordConfirm',
                                            submitValue: false,
                                            inputType: 'password'
                                        },
                                        {
                                            xtype: 'button',
                                            localiserId: 'changePasswordBtn',
                                            anchor: '100%',
                                            id: 'changeMyPasswordBtn',
                                            text: 'Changer le mot de passe'
                                        }
                                    ]
                                }
                            ]
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
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    hidden: true,
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                var e=e;
                                var menu= Ext.getCmp('settingsContextMenu');
                                if (Ext.isEmpty(menu)){
                                    menu = Ext.widget('settingsContextMenu');
                                    menu.on('blur', function(){this.destroy();});
                                }
                                menu.showAt(e.browserEvent.clientX,e.browserEvent.clientY);

                            },
                            localiserId: 'desktopBtn',
                            iconCls: 'personalize',
                            text: 'Bureau'
                        }
                    ],
                    listeners: {
                        afterrender: {
                            fn: me.onButtonAfterRender,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onButtonAfterRender: function(component, eOpts) {
        if (MyPrefData.simpleMode){
            component.hide();
        }
    }

});