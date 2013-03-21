/*
 * File: app/view/RFormPage.js
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

Ext.define('Rubedo.view.RFormPage', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.RFormPage',

    frame: false,
    margin: '0 0 10 0',
    minHeight: 80,
    bodyBorder: false,
    bodyPadding: 10,
    title: 'My Panel',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                afterrender: {
                    fn: me.onPanelAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onPanelAfterRender: function(abstractcomponent, options) {
        this.sync();
    },

    sync: function() {
        this.setTitle(this.itemConfig.label);
    }

});