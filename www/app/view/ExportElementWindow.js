/*
 * File: app/view/ExportElementWindow.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('Rubedo.view.ExportElementWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.ExportElementWindow',

    localiserId: 'exportElementsWindow',
    id: 'ExportElementWindow',
    width: 381,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Exporter un élément',
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
                            localiserId: 'mandatoryNameField',
                            anchor: '100%',
                            fieldLabel: 'Nom * ',
                            name: 'name',
                            allowBlank: false
                        },
                        {
                            xtype: 'textareafield',
                            localiserId: 'elementDescriptionField',
                            anchor: '100%',
                            fieldLabel: 'Description ',
                            name: 'description'
                        },
                        {
                            xtype: 'button',
                            localiserId: 'exportElementBtn',
                            anchor: '100%',
                            id: 'ExportElementButton',
                            text: 'Exporter cet élément '
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});