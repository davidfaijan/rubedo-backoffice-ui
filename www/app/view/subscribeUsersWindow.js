/*
 * File: app/view/subscribeUsersWindow.js
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

Ext.define('Rubedo.view.subscribeUsersWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.subscribeUsersWindow',

    requires: [
        'Ext.form.Panel',
        'Ext.button.Button'
    ],

    localiserId: 'subscribeUsersWindow',
    id: 'subscribeUsersWindow',
    width: 400,
    layout: 'fit',
    title: 'Subscribe users',
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
                            xtype: 'button',
                            localiserId: 'subscribeSubmitBtn',
                            anchor: '100%',
                            id: 'subscribeUsersSubmitBtn',
                            text: 'Subscribe'
                        }
                    ],
                    listeners: {
                        afterrender: {
                            fn: me.onFormAfterRender,
                            scope: me
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    },

    onFormAfterRender: function(component, eOpts) {
        var picker=Ext.create("Ext.ux.form.field.BoxSelect",{
        	"store":[ ],
        	"name":"emails",
        	"fieldLabel":"Emails",
            "labelWidth":60,
            "anchor":"100%",
        	"multiSelect":true,
        	"forceSelection":false,
            "allowBlank":false,
        	"stacked":true,
        	"createNewOnEnter":true,
        	"hideTrigger":true,
        	"triggerOnClick":false,
        	"createNewOnBlur":true,
        	"pinList":false
        });
        component.insert(0, picker);
    }

});