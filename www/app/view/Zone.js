/*
 * File: app/view/Zone.js
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

Ext.define('Rubedo.view.Zone', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.zone',

    requires: [
        'Rubedo.view.Colonne'
    ],

    height: 150,
    style: 'float: left',
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    collapsible: false,
    title: 'Zone',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            resizable: {
                heightIncrement: 10,
                widthIncrement: 10,
                minHeight: 20,
                minWidth: 20
            },
            tools: [
                {
                    xtype: 'tool',
                    itemId: 'zoneBas',
                    type: 'down'
                },
                {
                    xtype: 'tool',
                    itemId: 'zoneHaut',
                    type: 'up'
                },
                {
                    xtype: 'tool',
                    itemId: 'ajouterBlocZone',
                    tooltip: 'Ajouter un bloc',
                    type: 'expand'
                },
                {
                    xtype: 'tool',
                    itemId: 'enleverColonne',
                    tooltip: 'Enlever une colonne',
                    type: 'minus'
                },
                {
                    xtype: 'tool',
                    itemId: 'ajouterColonne',
                    tooltip: 'Ajouter une colonne',
                    type: 'plus'
                },
                {
                    xtype: 'tool',
                    itemId: 'supprimerZone',
                    tooltip: 'Supprimer cette zone',
                    type: 'close'
                }
            ],
            items: [
                {
                    xtype: 'colonne',
                    flex: 1
                }
            ]
        });

        me.callParent(arguments);
    }

});