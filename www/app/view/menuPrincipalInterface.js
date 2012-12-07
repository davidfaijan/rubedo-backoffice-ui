/*
 * File: app/view/menuPrincipalInterface.js
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

Ext.define('Rubedo.view.menuPrincipalInterface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.menuPrincipalInterface',

    border: 0,
    floating: true,
    frame: false,
    height: 310,
    id: 'menuPrincipalInterface',
    width: 350,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    bodyBorder: false,
    bodyPadding: 0,
    frameHeader: false,
    iconCls: 'meUser',
    overlapHeader: false,
    title: 'Alexandru Dobre',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 0.8,
                    width: 210,
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'image',
                            height: 239,
                            width: 210,
                            src: 'resources/images/logoBkg.png'
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'right',
                    id: 'menuPrincipalDroite',
                    items: [
                        {
                            xtype: 'button',
                            ACL: 'read.ui.sites',
                            itemId: 'sitesInterface',
                            iconCls: 'referencement_icon',
                            text: 'Sites'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.pages',
                            itemId: 'contributionPages',
                            iconCls: 'site-icon',
                            text: 'Pages'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.contents',
                            itemId: 'contributionContenus',
                            iconCls: 'content-icon',
                            text: 'Contenus'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.medias',
                            itemId: 'contributionMedias',
                            iconCls: 'media-icon',
                            text: 'Médiathèque'
                        },
                        {
                            xtype: 'tbseparator',
                            ACL: 'read.ui.contentTypes'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.masks',
                            itemId: 'adminFMDP',
                            iconCls: 'masque-icon',
                            text: 'Masques de page'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.contentTypes',
                            itemId: 'adminFTDC',
                            iconCls: 'content-icon',
                            text: 'Types de contenus'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.taxonomy',
                            itemId: 'adminFTaxonomie',
                            iconCls: 'page_taxonomy',
                            text: 'Taxonomie'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.workflows',
                            itemId: 'menuWorkflows',
                            iconCls: 'process-icon',
                            text: 'Workflows'
                        },
                        {
                            xtype: 'tbseparator',
                            ACL: 'read.ui.groups'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.groups',
                            itemId: 'adminFUtilisateurs',
                            iconCls: 'user',
                            text: 'Groupes'
                        },
                        {
                            xtype: 'button',
                            ACL: 'read.ui.users',
                            floating: false,
                            itemId: 'UserAdminWindow',
                            iconCls: 'user_edit',
                            text: 'Utilisateurs'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'userSettings',
                            iconCls: 'parametres',
                            text: 'Paramètres'
                        },
                        {
                            xtype: 'button',
                            itemId: 'deconnexionMenuPrincipal',
                            iconCls: 'deconecter',
                            text: 'Déconnexion'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});