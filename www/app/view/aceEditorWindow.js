/*
 * File: app/view/aceEditorWindow.js
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

Ext.define('Rubedo.view.aceEditorWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.aceEditorWindow',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Fill',
        'Ext.button.Button'
    ],

    localiserId: 'codeEditorWindow',
    height: 459,
    id: 'aceEditorWindow',
    width: 850,
    constrain: true,
    layout: 'fit',
    iconCls: 'edit',
    title: 'Code editor',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'component'
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onAceEditorWindowAfterRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onAceEditorWindowBeforeClose,
                    scope: me
                },
                maximize: {
                    fn: me.onAceEditorWindowMaximize,
                    scope: me
                },
                minimize: {
                    fn: me.onAceEditorWindowMinimize,
                    scope: me
                }
            },
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
                            localiserId: 'saveBtn',
                            id: 'aceWindowSaveBtn',
                            iconCls: 'save',
                            text: 'Save',
                            listeners: {
                                click: {
                                    fn: me.onAceWindowSaveBtnClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onAceEditorWindowAfterRender: function(component, eOpts) {
        component.editor=ace.edit(component.getComponent(0).getEl().id);
        if (component.cssMode){
            component.editor.getSession().setMode("ace/mode/css");
        } else if (component.jsMode){
            component.editor.getSession().setMode("ace/mode/javascript");
        } else if (component.twigMode){
            component.editor.getSession().setMode("ace/mode/twig");
        } else if (component.rawObjectMode) {
            component.editor.getSession().setMode("ace/mode/json");
        }else {
        	component.editor.getSession().setMode("ace/mode/html");
        }
        component.editor.setTheme("ace/theme/monokai");
        if (component.rawObjectMode) {
            if (Ext.isEmpty(component.initialValue)){
                component.editor.setValue(Ext.JSON.encode({

                }));
            } else {
                component.editor.setValue(JSON.stringify(component.initialValue, null, '\t'));
            }

        } else {
            component.editor.setValue(component.initialValue);
        }
        var task = new Ext.util.DelayedTask(function(){
            component.editor.setTheme("ace/theme/monokai");
        });
        task.delay(200);
    },

    onAceWindowSaveBtnClick: function(button, e, eOpts) {
        var component=button.up().up();
        if (component.targetedRec){
            component.targetedRec.set("code",component.editor.getValue());
            component.close();
        } else if (component.rawObjectMode) {
            try {
                var decoded=Ext.JSON.decode(component.editor.getValue());
                Ext.getCmp(component.targetedId).setValue(decoded);
                component.close();
            }
            catch(err) {
                Ext.Msg.alert("Error","Invalid JSON");
            }
        } else {
            Ext.getCmp(component.targetedId).setValue(component.editor.getValue());
            component.close();
        }

    },

    onAceEditorWindowBeforeClose: function(panel, eOpts) {
        panel.editor.destroy();
    },

    onAceEditorWindowMaximize: function(window, eOpts) {
        window.editor.setTheme("ace/theme/monokai");
    },

    onAceEditorWindowMinimize: function(window, eOpts) {
        window.editor.setTheme("ace/theme/monokai");
    }

});