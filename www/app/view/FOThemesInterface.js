/*
 * File: app/view/FOThemesInterface.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('Rubedo.view.FOThemesInterface', {
    extend: 'Ext.window.Window',
    alias: 'widget.FOThemesInterface',

    requires: [
        'Rubedo.view.MyTool16',
        'Rubedo.view.MyTool17',
        'Ext.panel.Tool',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],

    height: 533,
    id: 'FOThemesInterface',
    width: 852,
    constrainHeader: true,
    iconCls: 'media-icon',
    title: 'Themes',

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
                            xtype: 'button',
                            id: 'foThemeImportBtn',
                            iconAlign: 'top',
                            iconCls: 'database_up_big',
                            scale: 'large',
                            text: 'Import'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});