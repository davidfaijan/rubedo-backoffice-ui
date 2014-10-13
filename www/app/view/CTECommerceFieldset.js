/*
 * File: app/view/CTECommerceFieldset.js
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

Ext.define('Rubedo.view.CTECommerceFieldset', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.CTECommerceFieldset',

    requires: [
        'Ext.form.field.Checkbox',
        'Ext.form.FieldSet',
        'Ext.form.field.Number'
    ],

    localiserId: 'eCFieldset',
    id: 'CTECommerceFieldset',
    title: 'E-Commerce',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'checkboxfield',
                    anchor: '100%',
                    fieldLabel: 'Free shipping',
                    name: 'freeShipping',
                    boxLabel: '',
                    inputValue: 'true',
                    uncheckedValue: 'false'
                },
                {
                    xtype: 'checkboxfield',
                    localiserId: 'manageStockField',
                    anchor: '100%',
                    fieldLabel: 'Manage stock',
                    name: 'manageStock',
                    boxLabel: '',
                    inputValue: 'true',
                    uncheckedValue: 'false',
                    listeners: {
                        change: {
                            fn: me.onCheckboxfieldChange,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'fieldset',
                    localiserId: 'stockManagementFieldset',
                    hidden: true,
                    title: 'Stock management',
                    items: [
                        {
                            xtype: 'checkboxfield',
                            localiserId: 'canOrderOutOfStockField',
                            anchor: '100%',
                            fieldLabel: 'Can order out of stock',
                            labelWidth: 140,
                            name: 'canOrderNotInStock',
                            boxLabel: '',
                            inputValue: 'true',
                            uncheckedValue: 'false'
                        },
                        {
                            xtype: 'numberfield',
                            localiserId: 'outOfStockLimitField',
                            anchor: '100%',
                            fieldLabel: 'Out of stock limit',
                            labelWidth: 140,
                            name: 'outOfStockLimit',
                            allowBlank: false,
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            localiserId: 'notifyForQuantityBelowField',
                            anchor: '100%',
                            fieldLabel: 'Notify for stock below',
                            labelWidth: 140,
                            name: 'notifyForQuantityBelow',
                            allowBlank: false,
                            minValue: 0
                        },
                        {
                            xtype: 'numberfield',
                            localiserId: 'resupplyDelayField',
                            anchor: '100%',
                            fieldLabel: 'Resupply delay (days)',
                            labelWidth: 140,
                            name: 'resupplyDelay',
                            allowBlank: false,
                            minValue: 0
                        }
                    ]
                },
                {
                    xtype: 'numberfield',
                    localiserId: 'preparationDelayField',
                    anchor: '100%',
                    fieldLabel: 'Preparation delay (days)',
                    labelWidth: 140,
                    name: 'preparationDelay',
                    allowBlank: false,
                    minValue: 0
                }
            ]
        });

        me.callParent(arguments);
    },

    onCheckboxfieldChange: function(field, newValue, oldValue, eOpts) {
        if (newValue){
            field.nextSibling().show();
        } else {
            field.nextSibling().hide();
        }
    }

});