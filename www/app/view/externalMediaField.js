/*
 * File: app/view/externalMediaField.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('Rubedo.view.externalMediaField', {
    extend: 'Ext.form.field.Hidden',
    alias: 'widget.externalMediaField',

    fieldLabel: 'Label',

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

    onHiddenfieldRender: function(component, eOpts) {
        var companion = Ext.widget("externalMediaFieldComponent");
        companion.setFieldLabel(component.getFieldLabel());
        component.on("change", function(a, newValue){
            var decoded = { };
            if (!Ext.isEmpty(newValue)){
                decoded = newValue;
            }
            Ext.Array.forEach(companion.query("field"), function(field){
                field.suspendEvents(false);
                field.setValue(decoded[field.name]);
                field.resumeEvents();
            });
        });
        Ext.Array.forEach(companion.query("field"), function(field){
            field.on("change", function(a, newValue){
                component.suspendEvents(false);
                var decoded = { };
                if (!Ext.isEmpty(component.getValue())) {
                    decoded = component.getValue();
                }
                decoded[field.name]=newValue;
                component.setValue(decoded);
                component.resumeEvents();
            });
        });
        companion.on("afterrender",function(){
            companion.getEl().on("click",function(){

                component.getEl().dom.click();
            });
        });
        component.up().add(companion);
    },

    setValue: function(value) {
        var me=this;
        me.value=value;
        me.fireEvent("change",me,value);
    },

    getValue: function() {
        return(this.value);
    },

    getSubmitValue: function() {
        return (this.value);
    }

});