/*
 * File: app/view/languagesInterface.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Rubedo.view.languagesInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.languagesInterface',

    requires: [
        'Rubedo.view.MyTool16'
    ],

    height: 368,
    id: 'languagesInterface',
    width: 429,
    layout: {
        type: 'fit'
    },
    iconCls: 'world_small',
    title: 'Languages',
    constrain: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    managesStore: true,
                    title: '',
                    forceFit: true,
                    store: 'MainLanguagesStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return('<img src="/assets/flags/16/'+record.get("iso2").toUpperCase()+'.png"> '+value);
                            },
                            dataIndex: 'label',
                            text: 'Name'
                        },
                        me.processActive({
                            xtype: 'booleancolumn',
                            dataIndex: 'active',
                            text: 'Active',
                            editor: {
                                xtype: 'checkboxfield',
                                inputValue: 'true',
                                uncheckedValue: 'false'
                            }
                        })
                    ],
                    plugins: [
                        Ext.create('Ext.grid.plugin.CellEditing', {
                            listeners: {
                                beforeedit: {
                                    fn: me.onCellEditingBeforeEdit,
                                    scope: me
                                }
                            }
                        })
                    ]
                }
            ],
            tools: [
                {
                    xtype: 'mytool16'
                }
            ]
        });

        me.callParent(arguments);
    },

    processActive: function(config) {
        config.trueText=Rubedo.RubedoAutomatedElementsLoc.yesText;
        config.falseText=Rubedo.RubedoAutomatedElementsLoc.noText;
        return config;
    },

    onCellEditingBeforeEdit: function(editor, e, eOpts) {
        if (!ACL.interfaceRights["write.ui.languages"]){
            return(false);
        }
    }

});