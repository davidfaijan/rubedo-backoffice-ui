/*
 * File: app/view/newSiteWindow.js
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

Ext.define('Rubedo.view.newSiteWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.newSiteWindow',

    height: 101,
    id: 'newSiteWindow',
    width: 390,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Nouveau Site',
    constrain: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Nom ',
                            labelWidth: 50,
                            name: 'text',
                            allowBlank: false,
                            regex: new RegExp(/^([a-z]|[1-9]|[-]|[.]){0,}$/)
                        },
                        {
                            xtype: 'button',
                            anchor: '100%',
                            id: 'newSiteSubmitBtn',
                            text: 'Créer ce site'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});