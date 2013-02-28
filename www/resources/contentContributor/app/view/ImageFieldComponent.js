/*
 * File: resources/contentContributor/app/view/ImageFieldComponent.js
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

Ext.define('ContentContributor.view.ImageFieldComponent', {
    extend: 'Ext.container.Container',
    alias: 'widget.ImageFieldComponent',

    anchor: '90%',
    height: 120,
    itemId: 'imageFieldComponent',
    width: 338,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    width: 105,
                    text: 'My Label :'
                },
                {
                    xtype: 'image',
                    height: 120,
                    itemId: 'fieldImagePreview',
                    listeners: {
                        render: {
                            fn: me.onFieldImagePreviewRender,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'container',
                    itemId: 'buttonHolder',
                    margin: '0 0 0 10',
                    width: 60,
                    layout: {
                        type: 'absolute'
                    },
                    items: [
                        {
                            xtype: 'button',
                            x: 10,
                            y: 10,
                            itemId: 'fieldChangeImage',
                            iconCls: 'pencil_big',
                            scale: 'large',
                            text: '',
                            tooltip: 'Choisir l\'image'
                        },
                        {
                            xtype: 'button',
                            x: 10,
                            y: 70,
                            itemId: 'fieldClearImage',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: '',
                            tooltip: 'Supprimer l\'image'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onFieldImagePreviewRender: function(abstractcomponent, options) {
        abstractcomponent.getEl().on("load", function(){abstractcomponent.up().doLayout();});
    }

});