/*
 * File: app/view/DelConfirmZ.js
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

Ext.define('Rubedo.view.DelConfirmZ', {
    extend: 'Ext.window.Window',
    alias: 'widget.delConfirmZ',

    height: 100,
    id: 'delConfirmZ',
    width: 200,
    resizable: false,
    layout: {
        type: 'fit'
    },
    closable: false,
    iconCls: 'warning',
    title: 'Confirmation de supression',
    modal: true,
    plain: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            xtype: 'button',
                            id: 'delConfirmZOui',
                            margin: '0, 0, 0, 10',
                            iconCls: 'ouiS',
                            scale: 'large',
                            text: 'Oui'
                        },
                        {
                            xtype: 'button',
                            margins: '0, 0, 0, 30',
                            id: 'delConfirmZNon',
                            iconCls: 'nonS',
                            scale: 'large',
                            text: 'Non'
                        },
                        {
                            xtype: 'hiddenfield',
                            id: 'delConfirmZField',
                            fieldLabel: 'Label'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});