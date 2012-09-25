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
                    layout: {
                        type: 'fit'
                    },
                    items: [
                        {
                            xtype: 'menu',
                            floating: false,
                            ignoreParentClicks: true
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
                            itemId: 'deconnexionMenuPrincipal',
                            iconCls: 'deconecter',
                            text: 'Déconnexion'
                        },
                        {
                            xtype: 'button',
                            itemId: 'boutonParametresMenuPrincipal',
                            iconCls: 'parametres',
                            text: 'Paramètres'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'contributionPages',
                            iconCls: 'site-icon',
                            text: 'Pages'
                        },
                        {
                            xtype: 'button',
                            itemId: 'contributionContenus',
                            iconCls: 'content-icon',
                            text: 'Contenus'
                        },
                        {
                            xtype: 'button',
                            itemId: 'contributionMedias',
                            iconCls: 'media-icon',
                            text: 'Médiathèque'
                        },
                        {
                            xtype: 'tbseparator'
                        },
                        {
                            xtype: 'button',
                            itemId: 'adminFMDP',
                            iconCls: 'masque-icon',
                            text: 'Masques de page'
                        },
                        {
                            xtype: 'button',
                            itemId: 'adminFTDC',
                            iconCls: 'content-icon',
                            text: 'Types de contenus'
                        },
                        {
                            xtype: 'button',
                            itemId: 'adminFTaxonomie',
                            iconCls: 'page_taxonomy',
                            text: 'Taxonomie'
                        },
                        {
                            xtype: 'button',
                            itemId: 'adminFUtilisateurs',
                            iconCls: 'user',
                            text: 'Utilisateurs'
                        },
                        {
                            xtype: 'button',
                            itemId: 'menuWorkflows',
                            iconCls: 'process-icon',
                            text: 'Workflows'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});