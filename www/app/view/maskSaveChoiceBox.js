/*
 * File: app/view/maskSaveChoiceBox.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
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

Ext.define('Rubedo.view.maskSaveChoiceBox', {
    extend: 'Ext.window.Window',
    alias: 'widget.maskSaveChoiceBox',

    height: 144,
    width: 400,
    resizable: false,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Ce masque est utilisé par des pages',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    flex: 1,
                    text: 'Enregistrer et répercuter les modifications sur toutes les pages'
                },
                {
                    xtype: 'button',
                    flex: 1,
                    text: 'Enregistrer sous un nouveau masque'
                }
            ]
        });

        me.callParent(arguments);
    }

});