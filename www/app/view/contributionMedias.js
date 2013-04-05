/*
 * File: app/view/contributionMedias.js
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

Ext.define('Rubedo.view.contributionMedias', {
    extend: 'Ext.window.Window',
    alias: 'widget.contributionMedias',

    requires: [
        'Rubedo.view.mediaWindowsView'
    ],

    favoriteIcon: 'folder.png',
    height: 578,
    id: 'contributionMedias',
    width: 1000,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    iconCls: 'media-icon',
    title: 'Médiathèque',
    constrainHeader: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            tools: [
                {
                    xtype: 'tool',
                    itemId: 'windowMinimize',
                    type: 'minimize'
                },
                {
                    xtype: 'tool',
                    itemId: 'windowMaximize',
                    type: 'maximize'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 30,
                    itemId: 'filArianne',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'origine',
                            iconCls: 'media-icon',
                            text: 'Médiathèque<b> ></b> '
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    height: 50,
                    itemId: 'barreMeta',
                    items: [
                        {
                            xtype: 'image',
                            height: 45,
                            itemId: 'imageBarreMeta',
                            width: 48,
                            listeners: {
                                render: {
                                    fn: me.onImageBarreMetaRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'container',
                            itemId: 'boiteBarreMeta',
                            tpl: [
                                '{customMeta}'
                            ]
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'top',
                    height: 54,
                    itemId: 'contextBar',
                    enableOverflow: true,
                    items: [
                        {
                            xtype: 'button',
                            id: 'boutonAjouterDossierMedias',
                            iconCls: 'folder_add_big',
                            scale: 'large',
                            text: 'Ajouter dossier'
                        },
                        {
                            xtype: 'button',
                            id: 'boutonSupprimerDossierMedias',
                            iconCls: 'folder_remove_big',
                            scale: 'large',
                            text: 'Supprimer dossier'
                        },
                        {
                            xtype: 'button',
                            id: 'boutonUploadMedias',
                            iconCls: 'database_up_big',
                            scale: 'large',
                            text: 'Upload'
                        },
                        {
                            xtype: 'button',
                            id: 'boutonDownloadMedias',
                            iconCls: 'database_down_big',
                            scale: 'large',
                            text: 'Download'
                        },
                        {
                            xtype: 'button',
                            id: 'boutonSupprimerMedias',
                            iconCls: 'remove_big',
                            scale: 'large',
                            text: 'Supprimer'
                        },
                        {
                            xtype: 'button',
                            id: 'boutonEditionMedias',
                            iconCls: 'pencil_big',
                            scale: 'large',
                            text: 'Edition'
                        },
                        {
                            xtype: 'button',
                            itemId: 'boutonCreerRaccourci',
                            iconCls: 'favorite_add_big',
                            scale: 'large',
                            text: 'Ajouter aux favoris'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            itemId: 'boutonAide',
                            iconCls: 'info_big',
                            scale: 'large',
                            text: ''
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'gridpanel',
                    managesStore: true,
                    id: 'contributionMediasGrid',
                    width: 150,
                    resizable: true,
                    resizeHandles: 'e',
                    title: '',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                return ('<img src="resources/icones/'+MyPrefData.iconsDir+'/16x16/folder.png"> '+value);
                            },
                            dataIndex: 'titre',
                            groupable: true,
                            menuDisabled: true,
                            text: 'Type',
                            flex: 1
                        }
                    ],
                    features: [
                        {
                            ftype: 'grouping'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    flex: 1,
                    id: 'images-view',
                    layout: {
                        type: 'fit'
                    },
                    items: [
                        {
                            xtype: 'mediaWindowsView'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onImageBarreMetaRender: function(component, eOpts) {
        component.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/database.png');
    }

});