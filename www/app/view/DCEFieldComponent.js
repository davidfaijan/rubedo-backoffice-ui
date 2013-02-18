/*
 * File: app/view/DCEFieldComponent.js
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

Ext.define('Rubedo.view.DCEFieldComponent', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.DCEFieldComponent',

    height: 29,
    width: 455,
    fieldLabel: 'Label',
    labelSeparator: ' ',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'button',
                    itemId: 'addBtn',
                    margin: '0 10 0 0',
                    iconCls: 'add',
                    text: 'Ajouter'
                },
                {
                    xtype: 'button',
                    itemId: 'chooseBtn',
                    margin: '0 10 0 0',
                    iconCls: 'search',
                    text: 'Choisir'
                },
                {
                    xtype: 'button',
                    itemId: 'editBtn',
                    margin: '0 10 0 0',
                    iconCls: 'edit',
                    text: 'Modifier'
                },
                {
                    xtype: 'button',
                    itemId: 'removeBtn',
                    iconCls: 'close',
                    text: 'Supprimer'
                }
            ]
        });

        me.callParent(arguments);
    }

});