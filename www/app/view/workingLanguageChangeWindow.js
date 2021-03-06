/*
 * File: app/view/workingLanguageChangeWindow.js
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

Ext.define('Rubedo.view.workingLanguageChangeWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.workingLanguageChangeWindow',

    requires: [
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.button.Button'
    ],

    localiserId: 'workingLanguageWindow',
    height: 111,
    id: 'workingLanguageChangeWindow',
    width: 400,
    constrain: true,
    resizable: false,
    layout: 'fit',
    iconCls: 'world_small',
    title: 'Change current working language',
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
                            xtype: 'combobox',
                            localiserId: 'TALanguageField',
                            anchor: '100%',
                            id: 'currentLanguageSelectorCombo',
                            fieldLabel: 'Language',
                            name: 'language',
                            allowBlank: false,
                            editable: false,
                            displayField: 'label',
                            forceSelection: true,
                            queryMode: 'local',
                            store: 'AllLanguagesStore3',
                            valueField: 'locale',
                            listeners: {
                                afterrender: {
                                    fn: me.onCurrentLanguageSelectorComboAfterRender,
                                    scope: me
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            localiserId: 'setAsWLBtn',
                            anchor: '100%',
                            id: 'currentLanguageChangeSubmitBtn',
                            scale: 'medium',
                            text: 'Set as current working language'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onCurrentLanguageSelectorComboAfterRender: function(component, eOpts) {
        component.setValue(Ext.getCmp("workingLanguageField").getValue());
    }

});