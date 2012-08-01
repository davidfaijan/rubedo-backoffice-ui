/*
 * File: app/view/DesktopCustomizeWindow.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.view.DesktopCustomizeWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.DesktopCustomizeWindow',
    requires: [
        'Rubedo.view.wallpaperPicker'
    ],

    height: 450,
    id: 'DesktopCustomizeWindow',
    width: 600,
    resizable: false,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'personalize',
    title: 'Personalisation du bureau',
    constrainHeader: true,
    maximizable: false,
    minimizable: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    width: 150,
                    layout: {
                        type: 'accordion'
                    },
                    items: [
                        {
                            xtype: 'gridpanel',
                            id: 'wallpaperGrid',
                            collapsed: false,
                            title: 'Fond d\'écran',
                            store: 'WallpapersDataJson',
                            viewConfig: {

                            },
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    flex: 1,
                                    text: 'Nom'
                                }
                            ]
                        },
                        {
                            xtype: 'gridpanel',
                            id: 'themeGrid',
                            collapsed: true,
                            title: 'Themes',
                            store: 'ThemesDataJson',
                            viewConfig: {

                            },
                            columns: [
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'name',
                                    flex: 1,
                                    text: 'Nom'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            id: 'accessibilityOptionsPanel',
                            title: 'Accessibilité'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    id: 'DesktopCustomizeMainArea',
                    layout: {
                        type: 'fit'
                    },
                    flex: 1,
                    items: [
                        {
                            xtype: 'wallpaperPicker'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});