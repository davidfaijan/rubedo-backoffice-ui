/*
 * File: app/view/RichTextConfigurator.js
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

Ext.define('Rubedo.view.RichTextConfigurator', {
    extend: 'Ext.window.Window',
    alias: 'widget.RichTextConfigurator',

    requires: [
        'Rubedo.view.CKEField'
    ],

    height: 360,
    width: 632,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Editeur de texte riche',
    constrain: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'CKEField',
                    CKETBConfig: 'Standard',
                    hideLabel: true,
                    name: 'html'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            id: 'richTextConfiguratorSubmit',
                            iconCls: 'ouiSpetit',
                            text: 'Valider',
                            listeners: {
                                click: {
                                    fn: me.onRichTextConfiguratorSubmitClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onRichTextConfiguratorSubmitClick: function(button, e, eOpts) {
        var field = button.up().up().getComponent(0);
        if (field.isValid()) {
            var target=Ext.getCmp(button.targetedId);
            target.itemConfig.html=field.getValue();
            button.up().up().close();
            target.sync();
        }

    }

});