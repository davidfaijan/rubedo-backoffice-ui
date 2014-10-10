/*
 * File: app/view/taxonomyReplicator.js
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

Ext.define('Rubedo.view.taxonomyReplicator', {
    extend: 'Ext.form.Panel',
    alias: 'widget.taxonomyReplicator',

    requires: [
        'Ext.form.field.TextArea'
    ],

    bodyPadding: 10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    localiserId: 'nameField',
                    anchor: '100%',
                    fieldLabel: 'Nom ',
                    name: 'name',
                    allowBlank: false
                },
                {
                    xtype: 'textareafield',
                    localiserId: 'descriptionField',
                    anchor: '100%',
                    fieldLabel: 'Description ',
                    name: 'description'
                },
                {
                    xtype: 'textfield',
                    localiserId: 'helpTextField',
                    anchor: '100%',
                    fieldLabel: 'Texte d\'aide ',
                    name: 'helpText'
                }
            ]
        });

        me.callParent(arguments);
    }

});