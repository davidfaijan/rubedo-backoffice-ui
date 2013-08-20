/*
 * File: app/controller/CustomThemesController.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Rubedo.controller.CustomThemesController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.CustomThemesController',

    onCustomThemesAddBtnClick: function(button, e, eOpts) {
        Ext.widget("NewCustomThemeWindow").show();
    },

    onNewCustomThemeSublitBtnClick: function(button, e, eOpts) {
        var form=button.up().getForm();
        if (form.isValid()){
            var newRec=Ext.create("Rubedo.model.customTheme",form.getValues());
            Ext.getStore("CustomThemes").add(newRec);
            button.up().up().close();
        }
    },

    onCustomThemesGridSelectionChange: function(model, selected, eOpts) {
        if (Ext.isEmpty(selected)){
            this.resetInterfaceNoSelect();
        } else {
            this.resetInterfaceSelect(selected[0]);
        }
    },

    onCustomThemesRemoveBtnClick: function(button, e, eOpts) {
        var delCon = Ext.widget('delConfirmZ');
        delCon.show();
        Ext.getCmp('delConfirmZOui').on('click', function() { 
            Ext.getStore("CustomThemes").remove(Ext.getCmp("customThemesGrid").getSelectionModel().getLastSelected());
            Ext.getCmp('delConfirmZ').close();
        }); 
    },

    resetInterfaceSelect: function(record) {
        Ext.getCmp("customThemesRemoveBtn").enable();
        Ext.getCmp("customThemesSaveBtn").enable();
    },

    resetInterfaceNoSelect: function() {
        Ext.getCmp("customThemesRemoveBtn").disable();
        Ext.getCmp("customThemesSaveBtn").disable();
    },

    init: function(application) {
        Ext.define('ColorPickerControlSingleton', {
            singleton:true,
            currentTarget:null
        });

        this.control({
            "#customThemesAddBtn": {
                click: this.onCustomThemesAddBtnClick
            },
            "#newCustomThemeSublitBtn": {
                click: this.onNewCustomThemeSublitBtnClick
            },
            "#customThemesGrid": {
                selectionchange: this.onCustomThemesGridSelectionChange
            },
            "#customThemesRemoveBtn": {
                click: this.onCustomThemesRemoveBtnClick
            }
        });
    }

});
