/*
 * File: app/view/PDFPreviewWindow.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('Rubedo.view.PDFPreviewWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.PDFPreviewWindow',

    height: 600,
    width: 500,
    layout: 'fit',
    constrainHeader: true,
    iconCls: 'pdfIco',
    title: 'Titre',
    maximizable: true,
    minimizable: true,

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }

});