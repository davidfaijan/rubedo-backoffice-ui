/*
 * File: app/view/MultiChoiceConfigurator.js
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

Ext.define('Rubedo.view.MultiChoiceConfigurator', {
    extend: 'Ext.window.Window',
    alias: 'widget.MultiChoiceConfigurator',

    height: 360,
    id: 'MultiChoiceConfigurator',
    width: 632,
    resizable: false,
    layout: {
        type: 'fit'
    },
    title: 'Editeur de question choix multiple',
    constrain: true,
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            id: 'MultiChoiceConfiguratorSubmit',
                            iconCls: 'ouiSpetit',
                            text: 'Valider'
                        }
                    ]
                }
            ],
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'fieldLabel',
                            fieldLabel: 'Label de la question',
                            labelWidth: 140
                        },
                        {
                            xtype: 'textfield',
                            anchor: '100%',
                            name: 'RTip',
                            fieldLabel: 'Bulle d\'aide',
                            labelWidth: 140
                        },
                        {
                            xtype: 'checkboxfield',
                            anchor: '100%',
                            name: 'allowblank',
                            fieldLabel: 'Facultatif',
                            labelWidth: 140,
                            boxLabel: '',
                            inputValue: 'true'
                        },
                        {
                            xtype: 'radiogroup',
                            fieldLabel: 'Mode',
                            labelWidth: 140,
                            items: [
                                {
                                    xtype: 'radiofield',
                                    name: 'fieldType',
                                    boxLabel: 'Une seule réponse',
                                    inputValue: 'radiogroup'
                                },
                                {
                                    xtype: 'radiofield',
                                    name: 'fieldType',
                                    boxLabel: 'Plusieurs réponses',
                                    inputValue: 'checkboxgroup'
                                }
                            ]
                        },
                        {
                            xtype: 'numberfield',
                            anchor: '100%',
                            name: 'columns',
                            fieldLabel: 'Nombre de colonnes',
                            labelWidth: 140,
                            allowDecimals: false,
                            minValue: 1
                        }
                    ]
                }
            ],
            listeners: {
                render: {
                    fn: me.onWindowRender,
                    scope: me
                },
                afterrender: {
                    fn: me.onWindowAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onWindowRender: function(abstractcomponent, options) {
        var optionPicker = Ext.create("Ext.ux.form.field.BoxSelect", {
            store:[],
            anchor:"100%",
            name:"answers",
            fieldLabel:"Réponses possibles",
            labelWidth:140,
            queryMode:"local",
            submitValue:false,
            multiSelect:true,
            forceSelection:false,
            createNewOnEnter:true,
            hideTrigger:true,
            triggerOnClick:false,
            createNewOnBlur:true,
            stacked:true,
            allowBlank:true
        });
        abstractcomponent.getComponent(0).add(optionPicker);
    },

    onWindowAfterRender: function(abstractcomponent, options) {
        var initialValues = { };

    }

});