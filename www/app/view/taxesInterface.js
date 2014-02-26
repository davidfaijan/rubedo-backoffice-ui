/*
 * File: app/view/taxesInterface.js
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

Ext.define('Rubedo.view.taxesInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.taxesInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17'
    ],

    height: 456,
    id: 'taxesInterface',
    width: 921,
    layout: {
        type: 'fit'
    },
    constrainHeader: true,
    iconCls: 'calculator',
    title: 'Taxes',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                render: {
                    fn: me.onWorkspacesInterfaceRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onWorkspacesInterfaceBeforeClose,
                    scope: me
                }
            },
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
                    title: '',
                    forceFit: true,
                    store: 'Taxes',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'name',
                            text: 'Name',
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false,
                                allowOnlyWhitespace: false
                            }
                        },
                        {
                            xtype: 'booleancolumn',
                            dataIndex: 'active',
                            text: 'Active',
                            falseText: 'No',
                            trueText: 'Yes',
                            editor: {
                                xtype: 'checkboxfield'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                try {
                                    var returner=[ ];
                                    Ext.Array.forEach(value, function(item){
                                        returner.push(Ext.getStore("UserTypesForTaxes").findRecord("id",item).get("type"));
                                    });
                                    return (returner);

                                } catch (err){return value;}
                            },
                            dataIndex: 'userTypes',
                            text: 'UserTypes',
                            editor: {
                                xtype: 'combobox',
                                allowBlank: false,
                                allowOnlyWhitespace: false,
                                displayField: 'type',
                                forceSelection: true,
                                multiSelect: true,
                                queryMode: 'local',
                                store: 'UserTypesForTaxes',
                                valueField: 'id',
                                listeners: {
                                    change: {
                                        fn: me.onComboboxChange,
                                        scope: me
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                try {
                                    var returner=[ ];
                                    Ext.Array.forEach(value, function(item){
                                        returner.push(Ext.getStore("ProductTypesForTaxes").findRecord("id",item).get("type"));
                                    });
                                    return (returner);

                                } catch (err){return value;}
                            },
                            dataIndex: 'productTypes',
                            text: 'ProductTypes',
                            editor: {
                                xtype: 'combobox',
                                displayField: 'type',
                                forceSelection: true,
                                multiSelect: true,
                                queryMode: 'local',
                                store: 'ProductTypesForTaxes',
                                valueField: 'id',
                                listeners: {
                                    change: {
                                        fn: me.onComboboxChange1,
                                        scope: me
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                try {return(Ext.getStore("CountriesForTaxes").findRecord("alpha-2",value).get("name"));} catch (err){
                                return value;
                            }
                            },
                            dataIndex: 'country',
                            text: 'Country',
                            editor: {
                                xtype: 'combobox',
                                allowBlank: false,
                                allowOnlyWhitespace: false,
                                displayField: 'name',
                                forceSelection: true,
                                queryMode: 'local',
                                store: 'CountriesForTaxes',
                                valueField: 'alpha-2'
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'region',
                            text: 'State / Region',
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false,
                                allowOnlyWhitespace: false
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'postalCode',
                            text: 'Zip / PostalCode',
                            editor: {
                                xtype: 'textfield',
                                allowBlank: false,
                                allowOnlyWhitespace: false
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'rate',
                            text: 'Rate (%)',
                            editor: {
                                xtype: 'numberfield',
                                allowBlank: false,
                                allowOnlyWhitespace: false,
                                minValue: 0
                            }
                        },
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'priority',
                            text: 'Priority',
                            editor: {
                                xtype: 'numberfield',
                                allowBlank: false,
                                allowOnlyWhitespace: false,
                                allowDecimals: false,
                                allowExponential: false,
                                minValue: 0
                            }
                        }
                    ],
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
                                    iconCls: 'add',
                                    text: 'Add',
                                    listeners: {
                                        click: {
                                            fn: me.onButtonClick,
                                            scope: me
                                        }
                                    }
                                },
                                {
                                    xtype: 'button',
                                    disabled: true,
                                    id: 'taxRemoveBtn',
                                    iconCls: 'close',
                                    text: 'Remove',
                                    listeners: {
                                        click: {
                                            fn: me.onTaxRemoveBtnClick,
                                            scope: me
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    listeners: {
                        selectionchange: {
                            fn: me.onGridpanelSelectionChange,
                            scope: me
                        }
                    },
                    plugins: [
                        Ext.create('Ext.grid.plugin.RowEditing', {

                        })
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onWorkspacesInterfaceRender: function(component, eOpts) {
        Ext.getStore("CountriesForTaxes").load();
        Ext.getStore("UserTypesForTaxes").load();
        Ext.getStore("ProductTypesForTaxes").load();
        var task = new Ext.util.DelayedTask(function(){
            Ext.getStore("Taxes").load();
        });
        task.delay(200);
    },

    onWorkspacesInterfaceBeforeClose: function(panel, eOpts) {
        Ext.getStore("Taxes").removeAll();
        Ext.getStore("CountriesForTaxes").removeAll();
        Ext.getStore("UserTypesForTaxes").removeAll();
        Ext.getStore("ProductTypesForTaxes").removeAll();
    },

    onComboboxChange: function(field, newValue, oldValue, eOpts) {
        if ((newValue.length>1)&&(Ext.Array.contains(newValue,"*"))){
            field.setValue([ "*" ]);
        }
    },

    onComboboxChange1: function(field, newValue, oldValue, eOpts) {
        if ((newValue.length>1)&&(Ext.Array.contains(newValue,"*"))){
            field.setValue([ "*" ]);
        }
    },

    onButtonClick: function(button, e, eOpts) {
        button.up().up().getStore().add({
            name:"New tax",
            country:"*",
            region:"*",
            postalCode:"*",
            userTypes:["*"],
            productTypes:["*"],
            priority:0,
            rate:0
        });
    },

    onTaxRemoveBtnClick: function(button, e, eOpts) {
        var fenetre = Ext.widget('delConfirmZ');
        fenetre.show();
        Ext.getCmp('delConfirmZOui').on('click', function() { 
            button.up().up().getStore().remove(button.up().up().getSelectionModel().getLastSelected());
            Ext.getCmp('delConfirmZ').close();
        }); 

    },

    onGridpanelSelectionChange: function(model, selected, eOpts) {
        if (Ext.isEmpty(selected)){
            Ext.getCmp("taxRemoveBtn").disable();
        } else {
            Ext.getCmp("taxRemoveBtn").enable();
        }
    }

});