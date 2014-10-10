/*
 * File: app/view/importProductOptionsFieldset.js
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

Ext.define('Rubedo.view.importProductOptionsFieldset', {
    extend: 'Ext.form.FieldSet',
    alias: 'widget.importProductOptionsFieldset',

    requires: [
        'Ext.form.field.ComboBox'
    ],

    localiserId: 'importProductOptionsFieldset',
    id: 'importProductOptionsFieldset',
    width: 200,
    title: 'Product fields',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'combobox',
                    localiserId: 'baseSkuField',
                    anchor: '100%',
                    fieldLabel: 'Base SKU',
                    labelWidth: 60,
                    name: 'baseSkuFieldIndex',
                    editable: false,
                    displayField: 'name',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'NotInportFieldsStore',
                    valueField: 'csvIndex'
                },
                {
                    xtype: 'combobox',
                    localiserId: 'basePriceField',
                    anchor: '100%',
                    fieldLabel: 'Base price',
                    labelWidth: 60,
                    name: 'basePriceFieldIndex',
                    editable: false,
                    displayField: 'name',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'NotInportFieldsStore',
                    valueField: 'csvIndex'
                },
                {
                    xtype: 'combobox',
                    localiserId: 'preparationDelayField',
                    anchor: '100%',
                    fieldLabel: 'Preparation delay',
                    labelWidth: 60,
                    name: 'preparationDelayFieldIndex',
                    editable: false,
                    displayField: 'name',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'NotInportFieldsStore',
                    valueField: 'csvIndex'
                },
                {
                    xtype: 'combobox',
                    localiserId: 'skuField',
                    anchor: '100%',
                    fieldLabel: 'SKU',
                    labelWidth: 60,
                    name: 'skuFieldIndex',
                    editable: false,
                    displayField: 'name',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'NotInportFieldsStore',
                    valueField: 'csvIndex'
                },
                {
                    xtype: 'combobox',
                    localiserId: 'priceField',
                    anchor: '100%',
                    fieldLabel: 'Price',
                    labelWidth: 60,
                    name: 'priceFieldIndex',
                    editable: false,
                    displayField: 'name',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'NotInportFieldsStore',
                    valueField: 'csvIndex'
                },
                {
                    xtype: 'combobox',
                    localiserId: 'stockField',
                    anchor: '100%',
                    fieldLabel: 'Stock',
                    labelWidth: 60,
                    name: 'stockFieldIndex',
                    editable: false,
                    displayField: 'name',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'NotInportFieldsStore',
                    valueField: 'csvIndex'
                }
            ]
        });

        me.callParent(arguments);
    }

});