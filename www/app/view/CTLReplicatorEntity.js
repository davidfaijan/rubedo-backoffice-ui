/*
 * File: app/view/CTLReplicatorEntity.js
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

Ext.define('Rubedo.view.CTLReplicatorEntity', {
    extend: 'Ext.form.Panel',
    alias: 'widget.CTLReplicatorEntity',

    requires: [
        'Ext.form.field.Text'
    ],

    height: 250,
    width: 400,
    bodyPadding: 10,
    header: false,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    localiserId: 'mandatoryNameField',
                    anchor: '100%',
                    fieldLabel: 'Name *',
                    labelWidth: 130,
                    name: 'type',
                    allowBlank: false
                }
            ]
        });

        me.callParent(arguments);
    }

});