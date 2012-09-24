/*
 * File: app/view/MyForm11.js
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

Ext.define('Rubedo.view.MyForm11', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myform11',

    etape: '4',
    id: 'assisstantRE6',
    bodyPadding: 10,
    title: 'Finalisation et enregistrement',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Nom ',
                    allowBlank: false
                },
                {
                    xtype: 'button',
                    anchor: '100%',
                    text: '<b>Enregistrer la requête </b>'
                }
            ]
        });

        me.callParent(arguments);
    }

});