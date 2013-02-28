/*
 * File: resources/contentContributor/app/view/MainForm.js
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

Ext.define('ContentContributor.view.MainForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.MainForm',

    border: 0,
    id: 'MainForm',
    overflowY: 'auto',
    bodyPadding: 20,
    header: true,
    title: 'Nouveau Contenu',
    titleAlign: 'center',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    ACL: 'write.ui.contents',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbspacer',
                            flex: 1
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.contents.draft',
                            cStatus: 'draft',
                            id: 'mainDraftBtn',
                            scale: 'large',
                            text: 'Brouillon'
                        },
                        {
                            xtype: 'tbspacer',
                            flex: 0.1
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.contents.pending',
                            cStatus: 'pending',
                            id: 'mainSubmitBtn',
                            scale: 'large',
                            text: 'Soumettre'
                        },
                        {
                            xtype: 'tbspacer',
                            flex: 0.1
                        },
                        {
                            xtype: 'button',
                            ACL: 'write.ui.contents.published',
                            cStatus: 'published',
                            id: 'mainPublishBtn',
                            scale: 'large',
                            text: 'Publier'
                        },
                        {
                            xtype: 'tbspacer',
                            flex: 1
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'container',
                    padding: 10,
                    layout: {
                        type: 'anchor'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '90%',
                            style: '{float:left}',
                            name: 'text',
                            fieldLabel: 'Titre ',
                            labelSeparator: ' *',
                            allowBlank: false
                        },
                        {
                            xtype: 'button',
                            itemId: 'helpBouton',
                            style: '{float:right;}',
                            handleMouseEvents: false,
                            iconCls: 'help',
                            pressedCls: 'x-btn',
                            text: '',
                            tooltip: 'Titre du contenu. Obligatoire.'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    padding: 10,
                    layout: {
                        type: 'anchor'
                    },
                    items: [
                        {
                            xtype: 'textareafield',
                            anchor: '90%',
                            style: '{float:left}',
                            name: 'summary',
                            fieldLabel: 'Résumé',
                            labelSeparator: ' '
                        },
                        {
                            xtype: 'button',
                            itemId: 'helpBouton',
                            style: '{float:right;}',
                            handleMouseEvents: false,
                            iconCls: 'help',
                            pressedCls: 'x-btn',
                            text: '',
                            tooltip: 'Résumé facultatif du contenu.'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});