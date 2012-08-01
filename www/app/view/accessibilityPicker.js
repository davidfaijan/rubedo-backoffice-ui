/*
 * File: app/view/accessibilityPicker.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.view.accessibilityPicker', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.accessibilityPicker',

    height: 250,
    id: 'accessibilityPicker',
    width: 400,
    bodyPadding: 10,
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'fieldset',
                    padding: 10,
                    title: 'Mode contraste élevé',
                    items: [
                        {
                            xtype: 'button',
                            id: 'highContrastButton',
                            text: 'Activer',
                            anchor: '100%'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});