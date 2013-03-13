/*
 * File: app/view/ajoutChampTCFenetre.js
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

Ext.define('Rubedo.view.ajoutChampTCFenetre', {
    extend: 'Ext.window.Window',
    alias: 'widget.ajoutChampTCFenetre',

    height: 300,
    id: 'ajoutChampTCFenetre',
    width: 500,
    resizable: false,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    title: 'Ajouter un champ',
    constrainHeader: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    flex: 0.5,
                    id: 'ChampTCSelectGrid',
                    title: '',
                    store: 'TypesChampsDataStore',
                    viewConfig: {

                    },
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'type',
                            flex: 1,
                            text: 'Type'
                        }
                    ],
                    features: [
                        {
                            ftype: 'grouping',
                            groupHeaderTpl: [
                                '{name}'
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    flex: 1,
                    id: 'PaneauTCDetail',
                    styleHtmlContent: true,
                    tpl: [
                        '{description}'
                    ],
                    bodyPadding: 10,
                    bodyStyle: '{text-align: justify;}',
                    title: ''
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            id: 'boutonAjouterChampTC',
                            iconCls: 'add',
                            text: 'Ajouter'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});