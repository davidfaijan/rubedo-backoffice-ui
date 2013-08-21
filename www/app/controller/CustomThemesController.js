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
            var defaultLessVars={
                black:"#000000",
                grayDarker:"#222222",
                grayDark:"#333333",
                gray:"#555555",
                grayLight:"#999999",
                grayLighter:"#eeeeee",
                white:"#ffffff",
                blue:"#049cdb",
                blueDark:"#0064cd",
                green:"#46a546",
                red:"#9d261d",
                yellow:"#ffc40d",
                orange:"#f89406",
                pink:"#c3325f",
                purple:"#7a43b6",
                linkColor:"#0088cc",
                tableBackgroundAccent:"#f9f9f9",
                tableBackgroundHover:"#f5f5f5",
                tableBorder:"#dddddd",
                btnBorder:"#cccccc",
                btnInfoBackground:"#5bc0de",
                btnInfoBackgroundHighlight:"#2f96b4",
                btnSuccessBackground:"#62c462",
                btnSuccessBackgroundHighlight:"#51a351",
                btnDangerBackground:"#ee5f5b",
                btnDangerBackgroundHighlight:"#bd362f",
                btnInverseBackground:"#444444"
            };
            newRec.set("lessVarsJson",Ext.JSON.encode(defaultLessVars));
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

    onCustomThemesSaveBtnClick: function(button, e, eOpts) {
        var form=Ext.getCmp("mainLessVarsForm").getForm();
        if (form.isValid()){
            var record=Ext.getCmp("customThemesGrid").getSelectionModel().getLastSelected();
            record.set("lessVarsJson",Ext.JSON.encode(form.getValues()));
        } else {
            Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.invalidFieldsError);
        }
    },

    onSimulateCustomThemeBtnClick: function(button, e, eOpts) {
        var me=this;
        var form=Ext.getCmp("mainLessVarsForm").getForm();
        if (form.isValid()){
            me.pushLessToSimulator(form.getValues());
        } else {
            Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.invalidFieldsError);
        }
    },

    resetInterfaceSelect: function(record) {
        Ext.getCmp("customThemesRemoveBtn").enable();
        Ext.getCmp("customThemesSaveBtn").enable();
        Ext.getCmp("simulateCustomThemeBtn").enable();
        Ext.getCmp("mainLessVarsForm").getForm().setValues(Ext.JSON.decode(record.get("lessVarsJson")));
        this.pushLessToSimulator(Ext.JSON.decode(record.get("lessVarsJson")));
    },

    resetInterfaceNoSelect: function() {
        Ext.getCmp("customThemesRemoveBtn").disable();
        Ext.getCmp("customThemesSaveBtn").disable();
        Ext.getCmp("simulateCustomThemeBtn").disable();
        Ext.getCmp("mainLessVarsForm").getForm().reset();
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
            },
            "#customThemesSaveBtn": {
                click: this.onCustomThemesSaveBtnClick
            },
            "#simulateCustomThemeBtn": {
                click: this.onSimulateCustomThemeBtnClick
            }
        });
    },

    pushLessToSimulator: function(vars) {
        var refinedVars={ };
        Ext.Object.each(vars, function(key, value, myself) {
            refinedVars['@'+key]=value;
        });
        themeSimulatorFrame.less.modifyVars(refinedVars);
    }

});
