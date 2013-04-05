/*
 * File: app/view/newUserWindow.js
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

Ext.define('Rubedo.view.newUserWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.newUserWindow',

    height: 173,
    width: 400,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Nouvel utilisateur',
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
                            labelWidth: 120,
                            name: 'name',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'E-mail ',
                            labelWidth: 120,
                            name: 'email',
                            allowBlank: false,
                            vtype: 'email'
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            fieldLabel: 'Compte utilisateur ',
                            labelWidth: 120,
                            name: 'login',
                            allowBlank: false,
                            vtype: 'alphanum'
                        },
                        {
                            xtype: 'button',
                            anchor: '100%',
                            id: 'userCreateSubmitBtn',
                            scale: 'large',
                            text: 'Valider'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});