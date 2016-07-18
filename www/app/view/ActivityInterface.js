/*
 * File: app/view/ActivityInterface.js
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

Ext.define('Rubedo.view.ActivityInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.ActivityInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Ext.panel.Tool',
        'Ext.tab.Panel',
        'Ext.tab.Tab',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.toolbar.Paging'
    ],

    localiserId: 'activityMonitorWindow',
    height: 456,
    id: 'ActivityInterface',
    width: 723,
    constrainHeader: true,
    iconCls: 'user',
    title: 'Activity',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

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
            items: [
                {
                    xtype: 'tabpanel',
                    flex: 1,
                    activeTab: 0,
                    items: [
                        me.processLogin({
                            xtype: 'panel',
                            localiserId: 'actLogInTab',
                            layout: 'fit',
                            title: 'Log in',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'actLogInTab'
                            },
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    title: '',
                                    forceFit: true,
                                    store: 'ApplicationLogsAuth',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                                return(value.user.fullName);
                                            },
                                            localiserId: 'userCol',
                                            dataIndex: 'context',
                                            text: 'User'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            localiserId: 'logInDateCol',
                                            loaliserId: 'logInDateCol',
                                            dataIndex: 'datetime',
                                            text: 'Log-in date'
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'pagingtoolbar',
                                            dock: 'bottom',
                                            width: 360,
                                            displayInfo: true,
                                            store: 'ApplicationLogsAuth',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    handler: function(button, e) {
                                                        var userId=button.up().up().getSelectionModel().getLastSelected().get("context").user.id;
                                                        Ext.Ajax.request({
                                                            url: 'users/find-one?id='+userId,
                                                            params: {
                                                            },
                                                            method:"GET",
                                                            success: function(response){
                                                                var resp = Ext.JSON.decode(response.responseText);
                                                                if(resp.data&&resp.data.typeId){
                                                                    Rubedo.controller.UserTypesController.prototype.prepareContext(userId,resp.data.typeId);
                                                                }
                                                            }
                                                        });
                                                    },
                                                    localiserId: 'viewUserDetailABtn',
                                                    disabled: true,
                                                    id: 'activityUserUAthDetailBtn',
                                                    iconCls: 'user_edit',
                                                    text: 'View user detail'
                                                }
                                            ]
                                        }
                                    ],
                                    listeners: {
                                        selectionchange: {
                                            fn: me.onGridpanelSelectionChange,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }),
                        me.processContentcontribution({
                            xtype: 'panel',
                            localiserId: 'contentContribATab',
                            layout: 'fit',
                            title: 'Content contribution',
                            tabConfig: {
                                xtype: 'tab',
                                localiserId: 'contentContribATab'
                            },
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    title: '',
                                    forceFit: true,
                                    store: 'ApplicationLogsCont',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            localiserId: 'messageCol',
                                            dataIndex: 'message',
                                            text: 'Message'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            localiserId: 'dateCol',
                                            dataIndex: 'datetime',
                                            text: 'Date'
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'pagingtoolbar',
                                            dock: 'bottom',
                                            width: 360,
                                            displayInfo: true,
                                            store: 'ApplicationLogsCont',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    handler: function(button, e) {
                                                        var userId=button.up().up().getSelectionModel().getLastSelected().get("context").user.id;
                                                        Ext.Ajax.request({
                                                            url: 'users/find-one?id='+userId,
                                                            params: {
                                                            },
                                                            method:"GET",
                                                            success: function(response){
                                                                var resp = Ext.JSON.decode(response.responseText);
                                                                if(resp.data&&resp.data.typeId){
                                                                    Rubedo.controller.UserTypesController.prototype.prepareContext(userId,resp.data.typeId);
                                                                }
                                                            }
                                                        });
                                                    },
                                                    localiserId: 'viewUserDetailABtn',
                                                    disabled: true,
                                                    id: 'activityUserUAthDetailBtn1',
                                                    iconCls: 'user_edit',
                                                    text: 'View user detail'
                                                },
                                                {
                                                    xtype: 'button',
                                                    handler: function(button, e) {
                                                        var contentId=button.up().up().getSelectionModel().getLastSelected().get("context").data.id;
                                                        Rubedo.controller.ContributionContenusController.prototype.unitaryContentEdit(contentId);
                                                    },
                                                    localiserId: 'viewContentDetailBtn1',
                                                    disabled: true,
                                                    id: 'activityViewCdBtn',
                                                    iconCls: 'content-icon',
                                                    text: 'View content detail'
                                                }
                                            ]
                                        }
                                    ],
                                    listeners: {
                                        selectionchange: {
                                            fn: me.onGridpanelSelectionChange1,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        })
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onActivityInterfaceAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processLogin: function(config) {
        if (Rubedo.RubedoInterfaceLoc.actLogInTab){
            config.title=Rubedo.RubedoInterfaceLoc.actLogInTab.title;
        }
        return config;
    },

    processContentcontribution: function(config) {
        if (Rubedo.RubedoInterfaceLoc.contentContribATab){
            config.title=Rubedo.RubedoInterfaceLoc.contentContribATab.title;
        }
        return config;
    },

    onGridpanelSelectionChange: function(model, selected, eOpts) {
        if(Ext.isEmpty(selected)){
            Ext.getCmp("activityUserUAthDetailBtn").disable();
        } else {
            Ext.getCmp("activityUserUAthDetailBtn").enable();
        }
    },

    onGridpanelSelectionChange1: function(model, selected, eOpts) {
        if(Ext.isEmpty(selected)){
            Ext.getCmp("activityUserUAthDetailBtn1").disable();
                Ext.getCmp("activityViewCdBtn").disable();

        } else {
            Ext.getCmp("activityUserUAthDetailBtn1").enable();
                Ext.getCmp("activityViewCdBtn").enable();

        }
    },

    onActivityInterfaceAfterRender: function(component, eOpts) {
        Ext.getStore("ApplicationLogsAuth").loadPage(1);
        Ext.getStore("ApplicationLogsCont").loadPage(1);
    }

});