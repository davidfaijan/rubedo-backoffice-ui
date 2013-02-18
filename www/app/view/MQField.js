/*
 * File: app/view/MQField.js
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

Ext.define('Rubedo.view.MQField', {
    extend: 'Ext.form.field.Hidden',
    alias: 'widget.MQField',

    allowedFileType: 'Image',
    fieldLabel: 'Label',
    labelSeparator: ' ',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            listeners: {
                render: {
                    fn: me.onHiddenfieldRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onHiddenfieldRender: function(abstractcomponent, options) {
        var myComponent = Ext.widget("MQFieldComponent");
        myComponent.setFieldLabel(abstractcomponent.fieldLabel+" ");
        abstractcomponent.on("change", function(a,newValue){
            if (Ext.isEmpty(newValue)){
                myComponent.getComponent("addBtn").show();
                myComponent.getComponent("editBtn").hide();
                myComponent.getComponent("removeBtn").hide();
            } else {
                myComponent.getComponent("addBtn").hide();
                myComponent.getComponent("editBtn").show();
                myComponent.getComponent("removeBtn").show();
            }
        });
        myComponent.getComponent("removeBtn").on("click", function(){
            abstractcomponent.setValue(null);
        });
        myComponent.getComponent("addBtn").on("click", function(){
            var assistant =Ext.widget("MQA", {targetId:abstractcomponent.getId(), allowedFileType:abstractcomponent.allowedFileType});
            assistant.show();
        });
        myComponent.getComponent("editBtn").on("click", function(){
            var assistant =Ext.widget("MQA", {targetId:abstractcomponent.getId(), allowedFileType:abstractcomponent.allowedFileType, editorMode:true, initialValue:Ext.clone(abstractcomponent.getValue())});
            assistant.show();
        });
        abstractcomponent.up().add(myComponent);
        abstractcomponent.fireEvent("change",abstractcomponent, abstractcomponent.getValue());
    }

});