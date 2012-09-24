/*
 * File: app/view/mediaImageEditor.js
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

Ext.define('Rubedo.view.mediaImageEditor', {
    extend: 'Ext.window.Window',
    alias: 'widget.mediaImageEditor',

    rapport: '1',
    height: 600,
    id: 'mediaImageEditor',
    width: 1000,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'image_edit',
    title: 'Titre',
    constrain: false,
    constrainHeader: true,
    maximizable: true,
    minimizable: false,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    itemId: 'workspace',
                    width: 794,
                    autoScroll: true,
                    layout: {
                        type: 'absolute'
                    }
                },
                {
                    xtype: 'form',
                    itemId: 'proprietes',
                    width: 200,
                    bodyPadding: 10,
                    collapseDirection: 'right',
                    collapsible: true,
                    iconCls: 'parametres',
                    title: 'Propriétés',
                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Taille',
                            items: [
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    id: 'imageEditorHeightField',
                                    fieldLabel: 'Hauteur ',
                                    labelWidth: 60
                                },
                                {
                                    xtype: 'numberfield',
                                    anchor: '100%',
                                    id: 'imageEditorWidthField',
                                    fieldLabel: 'Largeur ',
                                    labelWidth: 60
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            icon: 'resources/icones/32x32/zoom_in.png',
                            scale: 'large',
                            text: 'Zoom in'
                        },
                        {
                            xtype: 'button',
                            icon: 'resources/icones/32x32/zoom_out.png',
                            scale: 'large',
                            text: 'Zoom out'
                        },
                        {
                            xtype: 'button',
                            icon: 'resources/icones/32x32/floppy_disc.png',
                            scale: 'large',
                            text: 'Enregistrer'
                        },
                        {
                            xtype: 'button',
                            id: 'imageEditorUndo',
                            icon: 'resources/icones/32x32/skip_backward.png',
                            scale: 'large',
                            text: 'Undo'
                        },
                        {
                            xtype: 'button',
                            id: 'imageEditorReset',
                            icon: 'resources/icones/32x32/repeat.png',
                            scale: 'large',
                            text: 'Reset'
                        },
                        {
                            xtype: 'button',
                            icon: 'resources/icones/32x32/crop.png',
                            scale: 'large',
                            text: 'Crop'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});