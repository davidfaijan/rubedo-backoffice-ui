/*
 * File: app/view/EditorialInterface.js
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

Ext.define('Rubedo.view.EditorialInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.EditorialInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Ext.panel.Tool',
        'Ext.container.ButtonGroup',
        'Ext.button.Button',
        'Ext.form.field.ComboBox',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.selection.CheckboxModel',
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date',
        'Ext.toolbar.Paging'
    ],

    localiserId: 'EditorialInterface',
    ACL: 'write.ui.contents',
    height: 533,
    id: 'EditorialInterface',
    width: 1119,
    constrainHeader: true,
    iconCls: 'content-icon',
    title: 'Editorial dashboard',

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
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'buttongroup',
                            ACL: 'write.ui.contents',
                            localiserId: 'workflowGroup',
                            disabled: true,
                            id: 'contribWorkflowBox1',
                            headerPosition: 'bottom',
                            title: 'Workflow',
                            columns: 5,
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.getCmp("editorialContentsGrid").getSelectionModel().getSelection()[0].set("status","published");
                                    },
                                    ACL: 'write.ui.contents.pendingToPublished',
                                    localiserId: 'publishBtn',
                                    id: 'contentAcceptPublishBtn1',
                                    iconAlign: 'top',
                                    iconCls: 'accept_big',
                                    scale: 'large',
                                    text: 'Publier'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.getCmp("editorialContentsGrid").getSelectionModel().getSelection()[0].set("status","pending");
                                    },
                                    ACL: 'write.ui.contents.draftToPending',
                                    localiserId: 'submitBtn',
                                    id: 'contentSubmitValBtn1',
                                    iconAlign: 'top',
                                    iconCls: 'validation_submit_big',
                                    scale: 'large',
                                    text: 'Soumettre'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.getCmp("editorialContentsGrid").getSelectionModel().getSelection()[0].set("status","refused");
                                    },
                                    ACL: 'write.ui.contents.pendingToDraft',
                                    localiserId: 'refuseBtn',
                                    id: 'contentRefuseBtn1',
                                    iconAlign: 'top',
                                    iconCls: 'nonS',
                                    scale: 'large',
                                    text: 'Refuser'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.getCmp("editorialContentsGrid").getSelectionModel().getSelection()[0].set("online",true);
                                    },
                                    ACL: 'write.ui.contents.putOnline',
                                    localiserId: 'onlineBtn',
                                    id: 'contentOnlineBtn1',
                                    iconAlign: 'top',
                                    iconCls: 'online_big',
                                    scale: 'large',
                                    text: 'Mettre en ligne'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        Ext.getCmp("editorialContentsGrid").getSelectionModel().getSelection()[0].set("online",false);
                                    },
                                    ACL: 'write.ui.contents.putOffline',
                                    localiserId: 'offlineBtn',
                                    id: 'contentOfflineBtn1',
                                    iconAlign: 'top',
                                    iconCls: 'offline_big',
                                    scale: 'large',
                                    text: 'Mettre hors ligne'
                                }
                            ]
                        },
                        {
                            xtype: 'buttongroup',
                            bodyPadding: 15,
                            headerPosition: 'bottom',
                            title: 'View mode',
                            columns: 1,
                            items: [
                                me.processFilterMode({
                                    xtype: 'combobox',
                                    name: 'filterMode',
                                    listeners: {
                                        change: {
                                            fn: me.onComboboxChange,
                                            scope: me
                                        }
                                    }
                                })
                            ]
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    id: 'EditorialCTGrid',
                    width: 200,
                    title: '',
                    forceFit: true,
                    store: 'CTEditorial',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'type',
                            text: 'Type'
                        }
                    ],
                    selModel: Ext.create('Ext.selection.CheckboxModel', {

                    }),
                    listeners: {
                        selectionchange: {
                            fn: me.onEditorialCTGridSelectionChange,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'gridpanel',
                    flex: 1,
                    id: 'editorialContentsGrid',
                    title: 'Contents',
                    forceFit: false,
                    store: 'ContentsEditorial',
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
                                } else if (record.get("status")=="refused") {
                                    return('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/page_remove.png"> '+returner);
                                }
                            },
                            dataIndex: 'text',
                            text: 'Text',
                            flex: 2
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                try{var myFlagCode=Ext.getStore("AllLanguagesStore3").query("locale",record.get("locale"),false,false,true).items[0].get("flagCode");}
                                catch(err){var myFlagCode="_unknown";}
                                var returner =" <img src=\"/assets/flags/16/"+myFlagCode+".png\"> ";
                                if(!Ext.isEmpty(value)){
                                    Ext.Object.each(value, function(key, value, myself) {
                                        if (key!=record.get("locale")){
                                            try{var myFlagCode2=Ext.getStore("AllLanguagesStore3").query("locale",key,false,false,true).items[0].get("flagCode");}
                                            catch(err){var myFlagCode2="_unknown";}
                                            if (myFlagCode2!="_unknown"){
                                                returner=returner+" <img src=\"/assets/flags/16/"+myFlagCode2+".png\"> ";
                                            }
                                        }
                                    });
                                }
                                return(returner);
                            },
                            localiserId: 'languageCoumn',
                            dataIndex: 'i18n',
                            text: 'Languages',
                            flex: 1,
                            listeners: {
                                afterrender: {
                                    fn: me.onGridcolumnAfterRender1,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                var myType=Ext.getStore("CTEditorial").findRecord("id",value);
                                if(myType){
                                    return (myType.get("type"));
                                } else {
                                    return "";
                                }
                            },
                            dataIndex: 'typeId',
                            text: 'Type',
                            flex: 1
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return(value.fullName);
                            },
                            dataIndex: 'createUser',
                            text: 'Author',
                            flex: 1
                        },
                        me.processEtat({
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                if (value=="published") {
                                    return(Rubedo.RubedoAutomatedElementsLoc.publishedText);
                                } else if (value=="pending") {
                                    return(Rubedo.RubedoAutomatedElementsLoc.pendingText);
                                } else if (value=="draft") {
                                    return(Rubedo.RubedoAutomatedElementsLoc.draftText);
                                } else if (value=="refused") {
                                    return(Rubedo.RubedoAutomatedElementsLoc.refusedText);
                                }
                            },
                            localiserId: 'stateColumn',
                            dataIndex: 'status',
                            text: 'Etat',
                            flex: 1
                        }),
                        me.processOnline({
                            xtype: 'booleancolumn',
                            dataIndex: 'online',
                            text: 'Online',
                            flex: 0.5
                        }),
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'lastUpdateTime',
                            text: 'Last update',
                            flex: 1,
                            format: 'j/m/Y'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'createTime',
                            text: 'Create',
                            flex: 1,
                            format: 'j/m/Y'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'startPublicationDate',
                            text: 'Start Publication',
                            flex: 1,
                            format: 'j/m/Y'
                        },
                        {
                            xtype: 'datecolumn',
                            dataIndex: 'endPublicationDate',
                            text: 'End Publication',
                            flex: 1,
                            format: 'j/m/Y'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'pagingtoolbar',
                            dock: 'bottom',
                            width: 360,
                            displayInfo: true,
                            store: 'ContentsEditorial'
                        }
                    ],
                    listeners: {
                        itemdblclick: {
                            fn: me.onGridpanelItemDblClick,
                            scope: me
                        },
                        selectionchange: {
                            fn: me.onEditorialContentsGridSelectionChange,
                            scope: me
                        }
                    }
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onEditorialInterfaceAfterRender,
                    scope: me
                },
                beforerender: {
                    fn: me.onEditorialInterfaceBeforeRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onEditorialInterfaceBeforeClose,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processFilterMode: function(config) {
        config.store=[
            [false,"All states"],
            ['[{"property":"live.endPublicationDate","operator":"$ne","value":""},{"property":"live.endPublicationDate","operator":"$lte","value":"'+Math.floor(Date.now() / 1000)+'"}]','Archived'],
            ['[{"property":"live.startPublicationDate","operator":"$ne","value":""},{"property":"live.startPublicationDate","operator":"$gte","value":"'+Math.floor(Date.now() / 1000)+'"}]','Future'],
            ['[{"property":"live.endPublicationDate","operator":"$ne","value":{"operator":"$lte","value":"'+Math.floor(Date.now() / 1000)+'"}},{"property":"live.startPublicationDate","operator":"$ne","value":{"operator":"$gte","value":"'+Math.floor(Date.now() / 1000)+'"}}]','Published now'],
            ['[{"property":"status","value":"draft"}]',"Draft"],
            ['[{"property":"status","value":"pending"}]',"Pending validation"]
        ];
        config.value=false;
        return config;
    },

    processEtat: function(config) {
        config.filter={
            type:"list",
            options: [
            ["draft", Rubedo.RubedoAutomatedElementsLoc.draftText],
            ["pending", Rubedo.RubedoAutomatedElementsLoc.pendingText],
            ["published", Rubedo.RubedoAutomatedElementsLoc.publishedText],
            ["refused", Rubedo.RubedoAutomatedElementsLoc.refusedText]
            ]
        };
        return config;
    },

    processOnline: function(config) {
        config.trueText=Rubedo.RubedoAutomatedElementsLoc.yesText;
        config.falseText=Rubedo.RubedoAutomatedElementsLoc.noText;
        return config;
    },

    onComboboxChange: function(field, newValue, oldValue, eOpts) {
        if(newValue){
            Ext.getStore("ContentsEditorial").getProxy().extraParams.filter=newValue;
        } else {
            Ext.getStore("ContentsEditorial").clearFilter(true);
            delete(Ext.getStore("ContentsEditorial").getProxy().extraParams.filter);
        }
        Ext.getStore("ContentsEditorial").loadPage(1);
    },

    onEditorialCTGridSelectionChange: function(model, selected, eOpts) {
        Ext.getStore("ContentsEditorial").loadPage(1);
    },

    onGridcolumnAfterRender1: function(component, eOpts) {
        if (Ext.getStore("AllLanguagesStore3").getRange().length==1){
            component.hide();
        }
    },

    onGridpanelItemDblClick: function(dataview, record, item, index, e, eOpts) {
        Rubedo.controller.ContributionContenusController.prototype.unitaryContentEdit(record.get("id"));
    },

    onEditorialContentsGridSelectionChange: function(model, selected, eOpts) {
        Ext.Array.forEach(Ext.getCmp("contribWorkflowBox1").items.items, function(item){item.disable();});
        if (Ext.isEmpty(selected)){
            Ext.getCmp("contribWorkflowBox1").disable();
        } else {
            var record=selected[0];
            if (!record.get("readOnly")){
                Ext.getCmp("contribWorkflowBox1").enable();
                if (record.get("online")){
                    Ext.getCmp("contentOfflineBtn1").enable();
                } else {
                    Ext.getCmp("contentOnlineBtn1").enable();
                }
                if (record.get("status")=="draft"){
                    Ext.getCmp("contentAcceptPublishBtn1").enable();
                    Ext.getCmp("contentSubmitValBtn1").enable();
                } else if (record.get("status")=="pending"){
                    Ext.getCmp("contentAcceptPublishBtn1").enable();
                    Ext.getCmp("contentRefuseBtn1").enable();
                } else if (record.get("status")=="refused"){
                    Ext.getCmp("contentSubmitValBtn1").enable();
                    Ext.getCmp("contentAcceptPublishBtn1").enable();
                }
            }

        }
    },

    onEditorialInterfaceAfterRender: function(component, eOpts) {
        Ext.getStore("ContentsEditorial").clearFilter(true);
        delete(Ext.getStore("ContentsEditorial").getProxy().extraParams.filter);

    },

    onEditorialInterfaceBeforeRender: function(component, eOpts) {
        Ext.getStore("CTEditorial").load();
    },

    onEditorialInterfaceBeforeClose: function(panel, eOpts) {
        Ext.getStore("ContentsEditorial").removeAll();
    }

});