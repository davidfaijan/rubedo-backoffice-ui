/*
 * File: app/view/paymentMeansInterface.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
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

Ext.define('Rubedo.view.paymentMeansInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.paymentMeansInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Rubedo.view.ImagePickerField',
        'Ext.panel.Tool',
        'Ext.grid.Panel',
        'Ext.grid.View',
        'Ext.grid.column.Column',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.form.field.Hidden'
    ],

    localiserId: 'paymentMeansWindow',
    height: 471,
    id: 'paymentMeansInterface',
    width: 753,
    constrainHeader: true,
    iconCls: 'credit_card',
    title: 'Payment means',

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
                    xtype: 'gridpanel',
                    id: 'paymentMeansGrid',
                    width: 200,
                    title: '',
                    forceFit: true,
                    store: 'PaymentMeans',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            localiserId: 'nameCol',
                            dataIndex: 'name',
                            text: 'Name'
                        }
                    ],
                    listeners: {
                        selectionchange: {
                            fn: me.onPaymentMeansGridSelectionChange,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    autoScroll: true,
                    title: '',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            items: [
                                {
                                    xtype: 'tbfill'
                                },
                                {
                                    xtype: 'button',
                                    localiserId: 'saveConfigurationBtn',
                                    disabled: true,
                                    id: 'pmConfigSaveBtn',
                                    iconCls: 'save',
                                    text: 'Save configuration',
                                    listeners: {
                                        click: {
                                            fn: me.onPmConfigSaveBtnClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    items: [
                        {
                            xtype: 'form',
                            localiserId: 'rubedoConfigurationForm',
                            id: 'pmRubedoConfigForm',
                            bodyPadding: 10,
                            title: 'Rubedo configuration',
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    localiserId: 'activeField',
                                    anchor: '100%',
                                    fieldLabel: 'Active',
                                    name: 'active',
                                    boxLabel: '',
                                    inputValue: 'true',
                                    uncheckedValue: 'false'
                                },
                                {
                                    xtype: 'textfield',
                                    localiserId: 'displayNameField',
                                    anchor: '100%',
                                    fieldLabel: 'Display name',
                                    name: 'displayName',
                                    allowBlank: false,
                                    allowOnlyWhitespace: false
                                },
                                {
                                    xtype: 'ImagePickerField',
                                    allowedFileType: 'Image',
                                    fieldLabel: 'Logo',
                                    name: 'logo'
                                }
                            ]
                        },
                        {
                            xtype: 'form',
                            localiserId: 'nPMCForm',
                            id: 'pmNativeConfigForm',
                            bodyPadding: 10,
                            title: 'Native payment means configuration'
                        }
                    ]
                }
            ],
            listeners: {
                render: {
                    fn: me.onPaymentMeansInterfaceRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onPaymentMeansInterfaceBeforeClose,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onPaymentMeansGridSelectionChange: function(model, selected, eOpts) {
        var adaptiveForm=Ext.getCmp("pmNativeConfigForm");
        Ext.getCmp("pmConfigSaveBtn").disable();
        adaptiveForm.getForm().reset();
        adaptiveForm.removeAll();
        Ext.getStore("PMConfigs").removeAll();
        Ext.getCmp("pmRubedoConfigForm").getForm().reset();
        if (!Ext.isEmpty(selected)){
        	var record=selected[0];
            Ext.Array.forEach(record.get("configFields"),function(field){
                var fConfig=Ext.clone(field.config);
                fConfig.anchor="100%";
            	adaptiveForm.add(Ext.create(field.type,fConfig));
            });
            Ext.getStore("PMConfigs").getProxy().extraParams.paymentMeans=record.get("id");
            Ext.getStore("PMConfigs").addListener("load", function(){
            	var loaded=Ext.getStore("PMConfigs").getRange()[0];
                Ext.getCmp("pmRubedoConfigForm").getForm().setValues(Ext.clone(loaded.getData());
                adaptiveForm.getForm().setValues(Ext.clone(loaded.get("nativePMConfig"));
                Ext.getCmp("pmConfigSaveBtn").enable();
            }, this, {single:true});
            Ext.getStore("PMConfigs").load();

        }
    },

    onPmConfigSaveBtnClick: function(button, e, eOpts) {
        if ((Ext.getCmp("pmRubedoConfigForm").getForm().isValid())&&(Ext.getCmp("pmNativeConfigForm").getForm().isValid())){
        	var record=Ext.getStore("PMConfigs").getRange()[0];
            record.beginEdit();
            record.set(Ext.getCmp("pmRubedoConfigForm").getForm().getValues());
            record.set("nativePMConfig",Ext.getCmp("pmNativeConfigForm").getForm().getValues());
            record.endEdit();
        }
    },

    onPaymentMeansInterfaceRender: function(component, eOpts) {
        Ext.getStore("PaymentMeans").load();
    },

    onPaymentMeansInterfaceBeforeClose: function(panel, eOpts) {
        Ext.getStore("PaymentMeans").removeAll();
    }

});