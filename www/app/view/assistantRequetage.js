/*
 * File: app/view/assistantRequetage.js
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

Ext.define('Rubedo.view.assistantRequetage', {
    extend: 'Ext.window.Window',
    alias: 'widget.assistantRequetage',

    requires: [
        'Rubedo.view.assisstantRE4',
        'Rubedo.view.MyForm11'
    ],

    height: 400,
    id: 'assistantRequetage',
    width: 539,
    layout: {
        type: 'card'
    },
    iconCls: 'search',
    title: 'Assistant de requêtage ',
    constrainHeader: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'progressbar',
                            flex: 1,
                            id: 'progressAR',
                            animate: true,
                            text: 'Etape 1 sur 4',
                            value: 0.2
                        },
                        {
                            xtype: 'button',
                            id: 'boutonPrevRequeteur',
                            iconCls: 'arrow_left',
                            text: 'Précédent'
                        },
                        {
                            xtype: 'button',
                            id: 'boutonNextRequeteur',
                            iconAlign: 'right',
                            iconCls: 'arrow_right',
                            text: 'Suivant'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    etape: '1',
                    id: 'assisstantRE1',
                    bodyPadding: 10,
                    title: 'Choix des types de contenus',
                    items: [
                        {
                            xtype: 'combobox',
                            anchor: '90%',
                            id: 'champTCRequeteur',
                            style: '{float:left}',
                            fieldLabel: '',
                            allowBlank: false,
                            editable: false,
                            displayField: 'type',
                            forceSelection: true,
                            multiSelect: true,
                            store: 'TypesContenusNDepDataJson',
                            valueField: 'type'
                        },
                        {
                            xtype: 'button',
                            id: 'boutonSelectAllTCAR',
                            style: '{float:right;}',
                            iconCls: 'ouiSpetit',
                            text: '',
                            tooltip: 'Tout selectionner'
                        }
                    ]
                },
                {
                    xtype: 'form',
                    etape: '2',
                    id: 'assisstantRE2',
                    autoScroll: false,
                    bodyPadding: 10,
                    title: 'Choix des termes de la taxonomie'
                },
                {
                    xtype: 'assisstantRE4'
                },
                {
                    xtype: 'myform11'
                }
            ]
        });

        me.callParent(arguments);
    }

});