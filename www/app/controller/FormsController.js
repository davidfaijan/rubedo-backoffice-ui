/*
 * File: app/controller/FormsController.js
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

Ext.define('Rubedo.controller.FormsController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.FormsController',

    onAddFormBtnClick: function(button, e, eOpts) {
        Ext.widget("newFormWindow").show();
    },

    onSubmitNewFormBtnClick: function(button, e, eOpts) {
        var me=this;
        var form=button.up().getForm();
        if (form.isValid()){
            var newOne=Ext.create("Rubedo.model.formModel",form.getValues());
            newOne.set("workspaces",[ACL.defaultWorkspace]);
            newOne.set("uniqueAnswerText",Rubedo.RubedoAutomatedElementsLoc.formUniqueAnswerMessage);
            newOne.set("endMessage",Rubedo.RubedoAutomatedElementsLoc.formEndMessage);
            Ext.Ajax.request({
                url: 'xhr-get-mongo-id',
                params: { },
                success: function(response){
                    var servedId = Ext.JSON.decode(response.responseText).mongoID;
                    newOne.set("formPages",[{
                        elements: [ ],
                        id:servedId,
                        itemConfig: {label:"Page 1"}
                    }]);
                    Ext.getStore("FormsStore").add(newOne);
                    Ext.getStore("FormsStore").addListener("datachanged", function(){
                        Ext.getCmp("mainFormsGrid").getSelectionModel().select([newOne]);
                    },this,{single:true});
                        button.up().up().close();
                    },
                    failure: function(){
                        Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.identifierRecoveryError);

                    }
                });



            }


    },

    onRemoveFormBtnClick: function(button, e, eOpts) {
        var target = Ext.getCmp('mainFormsGrid').getSelectionModel().getLastSelected();
        var me=this;
        if (!Ext.isEmpty(target)) {
            var window = Ext.widget('delConfirmZ');
            Ext.getCmp('ViewportPrimaire').add(window);
            window.show();
            Ext.getCmp('delConfirmZOui').on('click', function() { 
                Ext.getStore("FormsStore").remove(target);            
                Ext.getCmp('delConfirmZ').close();  
                me.resetInterfaceNoSelect();
            });  

        }
    },

    onMainFormsGridSelectionChange: function(model, selected, eOpts) {
        var me=this;
        if (Ext.isEmpty(selected)){
            me.resetInterfaceNoSelect();
        } else {
            me.resetInterfaceSelect(selected[0], true);
        }
    },

    onFormSaveBtnClick: function(button, e, eOpts) {
        var me=this;
        if (Ext.getCmp("formRightsForm").getForm().isValid()){
            if (Ext.getCmp("formPropsForm").getForm().isValid()){
                var target = Ext.getCmp('mainFormsGrid').getSelectionModel().getLastSelected();
                target.beginEdit();
                target.set(Ext.getCmp("formRightsForm").getForm().getValues());
                target.set(Ext.getCmp("formPropsForm").getForm().getValues());
                target.set("formPages",me.saveFormPages());
                target.endEdit();
                Ext.getStore("FormsStore").addListener("datachanged", function(){
                    me.resetInterfaceSelect(target);
                },this,{single:true});
                } else {
                    Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.invalidFormPropertiesError);
                    Ext.getCmp("FormsCenterZone").getLayout().setActiveItem(0);
                }
            } else {
                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.invalidRightsPropertiesError);
                Ext.getCmp("FormsCenterZone").getLayout().setActiveItem(2);
            }
    },

    selectionEvents: function(component, eOpts) {
        if (!component.isXType("RFormPage")){
            component.getEl().on("mouseover", function(e){
                component.addBodyCls("contrastFBorder");
                e.stopEvent();
            });
            component.getEl().on("mouseout", function(e){
                component.removeBodyCls("contrastFBorder");
                e.stopEvent();
            });
        } else {
            component.getEl().on("mouseover", function(e){
                var prevSelected = Ext.getCmp(Ext.getCmp('formSelectedElementField').getValue());
                if ((Ext.isEmpty(prevSelected))||(prevSelected.id!==component.id)) {
                    component.setIconCls('selectBloc');
                }
                e.stopEvent();
            });
            component.getEl().on("mouseout", function(e){
                var prevSelected = Ext.getCmp(Ext.getCmp('formSelectedElementField').getValue());
                if ((Ext.isEmpty(prevSelected))||(prevSelected.id!==component.id)) {
                component.setIconCls();}
                e.stopEvent();
            });

        }

        component.getEl().on("click", function(e){
            Ext.getCmp("formSelectedElementField").setValue(component.getId());
            e.stopEvent();
        });

        component.getEl().on("dblclick", function(e){
            e.stopEvent();
            if (component.id!="FormsEditContainer"){
                Rubedo.controller.FormsController.prototype.fireElementConfigurator(component.itemConfig,component.id);
            }

        });
    },

    onFormSelectedElementFieldChange: function(field, newValue, oldValue, eOpts) {
        var previousOne = Ext.getCmp(oldValue);
        if (!Ext.isEmpty(previousOne)){
            if (!previousOne.isXType("RFormPage")){
                if (previousOne.isXType("RFormField")){previousOne.getDockedComponent("editBar").hide();}
                previousOne.removeBodyCls("selectedFElement");
            } else {
                previousOne.setIconCls();
                previousOne.getDockedComponent("editBar").hide();
            }
        }
        Ext.Array.forEach(Ext.getCmp("formElementsEditBtnGroup").query("button"),function(thing){thing.disable();});
        var newOne=Ext.getCmp(newValue);
        if (!Ext.isEmpty(newOne)){
            newOne.getEl().frame(MyPrefData.themeColor);
            if (newValue=="FormsEditContainer"){
                newOne.addBodyCls("selectedFElement");
                Ext.getCmp("formAddPageBtn").enable();
            } else {

                if (newOne.isXType("RFormPage")){
                    Ext.getCmp("formElementAddBtn").enable();
                    Ext.getCmp("formElementMoveUpBtn").enable();
                    Ext.getCmp("formElementMoveDownBtn").enable();
                    Ext.getCmp("formElementRemoveBtn").enable();
                    newOne.getDockedComponent("editBar").show();
                    newOne.setIconCls('editBloc');
                } else if (newOne.isXType("RFormField")){
                    Ext.getCmp("formElementMoveUpBtn").enable();
                    Ext.getCmp("formElementMoveDownBtn").enable();
                    Ext.getCmp("formElementRemoveBtn").enable();
                    newOne.getDockedComponent("editBar").show();
                    newOne.addBodyCls("selectedFElement");

                }
            }
        }
    },

    onFormElementAddBtnClick: function(button, e, eOpts) {
        Ext.widget("addFormFieldWindow").show();
    },

    onFormAddPageBtnClick: function(button, e, eOpts) {
        Ext.Ajax.request({
            url: 'xhr-get-mongo-id',
            params: { },
            success: function(response){
                var servedId = Ext.JSON.decode(response.responseText).mongoID;
                var target=Ext.getCmp(Ext.getCmp('formSelectedElementField').getValue());
                var newPage = Ext.widget("RFormPage", {id:servedId});
                newPage.itemConfig={
                    label:"Page "+(target.items.items.length+1),
                    conditionals:[ ]
                };
                target.add(newPage); 
                Ext.getCmp("FormsEditor").doLayout();
                newPage.getEl().dom.click();
            },
            failure: function(){
                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.identifierRecoveryError);

            }
        });
    },

    onFormElementMoveUpBtnClick: function(button, e, eOpts) {
        var field = Ext.getCmp(Ext.getCmp('formSelectedElementField').getValue());
        if (!Ext.isEmpty(field)) {
            var pos = field.up().items.indexOf(field);
            if (pos > 0) {
                field.up().move(pos,pos-1);
            }
        }
    },

    onFormElementMoveDownBtnClick: function(button, e, eOpts) {
        var field = Ext.getCmp(Ext.getCmp('formSelectedElementField').getValue());
        if (!Ext.isEmpty(field)) {
            var pos = field.up().items.indexOf(field);
            field.up().move(pos,pos+1);
        }
    },

    onFormElementRemoveBtnClick: function(button, e, eOpts) {
        var field = Ext.getCmp(Ext.getCmp('formSelectedElementField').getValue());
        field.up().remove(field);
        Ext.getCmp('formSelectedElementField').setValue(null);
    },

    onInsertFormElementBtnClick: function(button, e, eOpts) {
        var insertor=Ext.clone(Ext.getCmp("formFieldSelectGrid").getSelectionModel().getLastSelected().getData());
        Ext.Ajax.request({
            url: 'xhr-get-mongo-id',
            params: { },
            success: function(response){
                var servedId = Ext.JSON.decode(response.responseText).mongoID;
                var target=Ext.getCmp(Ext.getCmp('formSelectedElementField').getValue());
                var newElement= Ext.widget("RFormField", {id:servedId});
                newElement.itemConfig=insertor.itemConfig;
                if ((insertor.itemConfig.fType=="richText")||(insertor.itemConfig.fType=="predefinedPrefsQuestion")){
                    newElement.styleHtmlContent=true;
                } 

                if (insertor.itemConfig.fType=="richText"){
                    //no increment for this one
                } else {
                    var incrementor=1;
                    Ext.Array.forEach(Ext.getCmp("FormsEditContainer").query("RFormField"), function(other){
                        if (other.itemConfig.fType!="richText"){
                            incrementor=incrementor+1;
                        }

                    });
                    newElement.itemConfig.qNb="Q"+incrementor;

                }
                target.add(newElement); 
                button.up().up().close();
                Ext.getCmp("FormsEditor").doLayout();
                newElement.getEl().dom.click();

            },
            failure: function(){
                Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.identifierRecoveryError);

            }
        });
    },

    onFormFieldCofiguratorBtnClick: function(button, e, eOpts) {
        var myItemConfig = Ext.clone(button.up().up().itemConfig);
        var myId=button.up().up().id;
        this.fireElementConfigurator(myItemConfig,myId);
    },

    onFormFieldConditionsBtnClick: function(button, e, eOpts) {
        var myItemConfig = Ext.clone(button.up().up().itemConfig);
        var myId=button.up().up().id;
        this.refreshFCEStore(myId);
        var FCEditor = Ext.widget("FCEditor");
        FCEditor.targetedId=myId;
        FCEditor.initialItemConfig=myItemConfig;
        FCEditor.show();
    },

    onFormsDuplicateBtnClick: function(button, e, eOpts) {
        var rec = Ext.clone(Ext.getCmp("mainFormsGrid").getSelectionModel().getLastSelected().data);
        delete(rec.id);
        rec.title=rec.title+" - Copie du "+Ext.Date.format(new Date(), 'j F, Y, G:i');
        Ext.getCmp("mainFormsGrid").getStore().add(rec);
    },

    onFormsExportCSVBtnClick: function(button, e, eOpts) {
        window.onbeforeunload=Ext.emptyFn;
        window.location="forms/get-csv?display-qnb=1&form-id="+Ext.getCmp("mainFormsGrid").getSelectionModel().getLastSelected().get("id");
        var task = new Ext.util.DelayedTask(function(){
            window.onbeforeunload = function() { return Rubedo.RubedoAutomatedElementsLoc.windowBeforeUnloadMessage; };
        });
        task.delay(400);
    },

    resetInterfaceSelect: function(record, pageRefresh) {
        Ext.getCmp("formPropsForm").getForm().setValues(record.getData());
        Ext.getCmp("formRightsForm").getForm().setValues(record.getData());
        if ((!ACL.interfaceRights["write.ui.forms"])||(record.get("readOnly"))){
            Ext.Array.forEach(Ext.getCmp("formPropsForm").up().query("field"),function(field){field.setReadOnly(true);});
            Ext.getCmp("FormsEditContainer").disable();
        } else {
            Ext.Array.forEach(Ext.getCmp("formPropsForm").up().query("field"),function(field){field.setReadOnly(false);});
            Ext.getCmp("FormsEditContainer").enable();
        }
        Ext.getCmp("FormsCenterZone").enable();
        Ext.Array.forEach(Ext.getCmp("FormsInterface").getDockedComponent("contextBar").query("buttongroup"), function(thing){thing.enable();});
        Ext.getCmp("removeFormBtn").enable();
        Ext.getCmp("FormsInterface").getComponent("breadcrumb").removeAll();
        Ext.getCmp("FormsInterface").getComponent("breadcrumb").add(Ext.widget("button", {text: "Questionnaires", iconCls:"form_small", localiserId:"formsLaunchBtn"}));
        Ext.getCmp("FormsInterface").getComponent("breadcrumb").add(Ext.widget("button", {text: record.get("title"), iconCls:"form_small"}));
        var metaBox = Ext.getCmp("FormsInterface").getDockedComponent('barreMeta').getComponent('boiteBarreMeta');
        var values= record.getData();
        values.creation= Ext.Date.format(values.createTime, Ext.Date.defaultFormat);
        values.derniereModification= Ext.Date.format(values.lastUpdateTime, Ext.Date.defaultFormat);
        metaBox.update(values);
        metaBox.show();
        if (pageRefresh){
            Ext.getCmp("FormsCenterZone").getLayout().setActiveItem(0);
            Ext.getCmp("formSelectedElementField").setValue(null);
            Ext.getCmp("FormsEditContainer").removeAll();
            this.readFormPages(record.get("formPages"));
        }
    },

    resetInterfaceNoSelect: function() {
        Ext.getCmp("formPropsForm").getForm().reset();
        Ext.getCmp("formRightsForm").getForm().reset();
        Ext.getCmp("FormsCenterZone").getLayout().setActiveItem(0);
        Ext.getCmp("FormsCenterZone").disable();
        Ext.Array.forEach(Ext.getCmp("FormsInterface").getDockedComponent("contextBar").query("buttongroup"), function(thing){thing.disable();});
        Ext.getCmp("removeFormBtn").disable();
        Ext.getCmp("FormsInterface").getDockedComponent("barreMeta").getComponent("boiteBarreMeta").hide();
        Ext.getCmp("FormsInterface").getComponent("breadcrumb").removeAll();
        Ext.getCmp("FormsInterface").getComponent("breadcrumb").add(Ext.widget("button", {text: "Questionnaires", iconCls:"form_small", localiserId:"formsLaunchBtn"}));
        Ext.getCmp("formSelectedElementField").setValue(null);
        Ext.getCmp("FormsEditContainer").removeAll();
    },

    saveFormPages: function() {
        var pages =[ ];
        Ext.Array.forEach(Ext.getCmp("FormsEditContainer").items.items, function(page){
            var newPage = {
                id:page.id,
                itemConfig:page.itemConfig,
                elements:[ ]
            };
            Ext.Array.forEach(page.items.items, function(element){
                var newElement = {
                    id:element.id,
                    itemConfig:element.itemConfig
                };
                newPage.elements.push(newElement);
            });
            pages.push(newPage);
        });
        return(pages);
    },

    readFormPages: function(pages) {
        var target=Ext.getCmp("FormsEditContainer");
        Ext.Array.forEach(pages, function(page){
            var newPage = Ext.widget("RFormPage", {id:page.id});
            newPage.itemConfig=page.itemConfig;
            Ext.Array.forEach(page.elements, function(element){
                var newElement = Ext.widget("RFormField", element);
                if ((element.itemConfig.fType=="richText")||(element.itemConfig.fType=="predefinedPrefsQuestion")){
                    newElement.styleHtmlContent=true;
                }
                newPage.add(newElement);
            });
            target.add(newPage);
        });
    },

    fireElementConfigurator: function(itemConfig, id) {
        var me=this;
        if (itemConfig.fType=="richText") {
            var RTEditor = Ext.widget("RichTextConfigurator").show();
            RTEditor.getComponent(0).setValue(itemConfig.html);
            Ext.getCmp("richTextConfiguratorSubmit").targetedId=id;  
        } else if (itemConfig.fType=="multiChoiceQuestion") {
            var MCQEditor = Ext.widget("MultiChoiceConfigurator");
            MCQEditor.targetedId=id;
            MCQEditor.initialItemConfig=itemConfig;
            MCQEditor.show();
        } else if (itemConfig.fType=="openQuestion") {
            var OQEditor = Ext.widget("OpenFieldConfigurator");
            OQEditor.targetedId=id;
            OQEditor.initialItemConfig=itemConfig;
            OQEditor.show();
        } else if (itemConfig.fType=="predefinedPrefsQuestion") {
            Ext.require("resources/MouseEventForwarding");
            var PredefEditor = Ext.widget("predefinedPrefsQuestionConfigurator");
            me.refreshFCEStore(id);
            PredefEditor.targetedId=id;
            PredefEditor.initialItemConfig=itemConfig;
            PredefEditor.show();
        } else {
            //definetly a page
            var PEditor = Ext.widget("FormsPageConfigurator");
            PEditor.targetedId=id;
            PEditor.initialItemConfig=itemConfig;
            PEditor.show();

        }

    },

    refreshFCEStore: function(notThisOne) {
        Ext.getStore("FCEStore").removeAll();
        Ext.Array.forEach(Ext.getCmp("FormsEditContainer").query("RFormField"), function(other){
            if ((other.itemConfig.fType!="richText")&&(other.itemConfig.fType!="predefinedPrefsQuestion")&&(other.id!=notThisOne)){
                Ext.getStore("FCEStore").add({
                    id:other.id,
                    qNb:other.itemConfig.qNb,
                    itemConfig:other.itemConfig
                });
            }

        });

    },

    init: function(application) {
        this.control({
            "#addFormBtn": {
                click: this.onAddFormBtnClick
            },
            "#submitNewFormBtn": {
                click: this.onSubmitNewFormBtnClick
            },
            "#removeFormBtn": {
                click: this.onRemoveFormBtnClick
            },
            "#mainFormsGrid": {
                selectionchange: this.onMainFormsGridSelectionChange
            },
            "#formSaveBtn": {
                click: this.onFormSaveBtnClick
            },
            "#FormsEditor panel": {
                render: this.selectionEvents
            },
            "#formSelectedElementField": {
                change: this.onFormSelectedElementFieldChange
            },
            "#formElementAddBtn": {
                click: this.onFormElementAddBtnClick
            },
            "#formAddPageBtn": {
                click: this.onFormAddPageBtnClick
            },
            "#formElementMoveUpBtn": {
                click: this.onFormElementMoveUpBtnClick
            },
            "#formElementMoveDownBtn": {
                click: this.onFormElementMoveDownBtnClick
            },
            "#formElementRemoveBtn": {
                click: this.onFormElementRemoveBtnClick
            },
            "#insertFormElementBtn": {
                click: this.onInsertFormElementBtnClick
            },
            "#formFieldCofiguratorBtn": {
                click: this.onFormFieldCofiguratorBtnClick
            },
            "#formFieldConditionsBtn": {
                click: this.onFormFieldConditionsBtnClick
            },
            "#formsDuplicateBtn": {
                click: this.onFormsDuplicateBtnClick
            },
            "#formsExportCSVBtn": {
                click: this.onFormsExportCSVBtnClick
            }
        });
    }

});
