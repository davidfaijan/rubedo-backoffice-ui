/*
 * File: resources/contentContributor/app/controller/MainController.js
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

Ext.define('ContentContributor.controller.MainController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.MainController',

    models: [
        'taxonomyTermModel'
    ],

    fieldReplicate: function(button, e, eOpts) {
        var nouvChamp=button.up().getComponent(1).cloneConfig();
        nouvChamp.anchor = '90%';
        nouvChamp.style = '{float:left;}';
        var enrobage =Ext.widget('fieldWrapper');
        enrobage.add(nouvChamp);
        enrobage.getComponent('helpBouton').setTooltip(Rubedo.RubedoAutomatedElementsLoc.duplicateFieldText+" "+button.up().getComponent(1).fieldLabel);
        var supprimeur = Ext.widget('button', {iconCls: 'close', margin: '0 0 0 5', tooltip: Rubedo.RubedoAutomatedElementsLoc.removeText, itemId: 'boutonEffaceurChamps'});
        supprimeur.on('click', function(){
            button.valeursM--;
            button.up().up().remove(supprimeur.up());
        });
        enrobage.add(supprimeur);
        button.up().up().insert(button.up().up().items.indexOf(button.up())+button.valeursM, enrobage);
        button.valeursM++;
    },

    saveContent: function(button, e, eOpts) {
        if (Ext.getCmp("MainForm").getForm().isValid()){
            if (AppGlobals.editMode){
                var currentContent = Ext.getStore("Contents").getRange()[0];
                var myFields = Ext.getCmp("MainForm").getForm().getValues();
                var taxoRes = currentContent.get("taxonomy");
                if (!Ext.isEmpty(Ext.getCmp("taxonomyFieldset"))){
                    Ext.Array.forEach(Ext.getCmp("taxonomyFieldset").query("field"), function(leField){
                        taxoRes[leField.name]=leField.getValue();
                        delete myFields[leField.name];
                    });
                }
                Ext.getStore("Contents").addListener("write", function(){
                        window.parent.confirmContentContribution();
                },this, {single:true});
                    currentContent.beginEdit();
                    currentContent.set("taxonomy",taxoRes);
                    currentContent.set("fields",myFields);
                    var i18n=currentContent.get("i18n");
                    i18n[ACL.workingLanguage]={fields:myFields};
                    currentContent.set("i18n",i18n);
                    currentContent.endEdit();

                } else {
                    var myFields = Ext.getCmp("MainForm").getForm().getValues();
                    var newContent = Ext.create('ContentContributor.model.contentDataModel', {
                        text:myFields.text,
                        fields:myFields,
                        taxonomy: { },
                        online:true,
                        status:button.cStatus,
                        typeId:AppGlobals.typeId

                    });
                    newContent.set("writeWorkspace",AppGlobals.currentWorkspace);
                    newContent.set("target",[AppGlobals.currentWorkspace]);
                    newContent.set("nativeLanguage",ACL.workingLanguage);
                    var taxoRes = {};
                    if (!Ext.isEmpty(Ext.getCmp("taxonomyFieldset"))){
                        Ext.Array.forEach(Ext.getCmp("taxonomyFieldset").query("field"), function(leField){
                            taxoRes[leField.name]=leField.getValue();
                            delete myFields[leField.name];
                        });
                    }
                    taxoRes.navigation=[AppGlobals.currentPage];
                    newContent.set("taxonomy",taxoRes);
                    newContent.set("fields",myFields);
                    var i18n={ };
                    i18n[ACL.workingLanguage]={fields:myFields};
                    newContent.set("i18n",i18n);

                    Ext.getCmp("MainForm").setLoading(true);
                    Ext.getStore("Contents").addListener("write", function(){

                        Ext.getCmp("MainForm").setLoading(false);
                        if (AppGlobals.contextQueryType=="manual"){
                            var queryRecord = Ext.getStore("QueriesStore").getRange()[0];
                            var qArray =Ext.clone(queryRecord.get("query"));
                            qArray.push(newContent.get("id"));
                            queryRecord.set("query", qArray);
                        }
                        var task5689 = new Ext.util.DelayedTask(function(){
                            window.parent.confirmContentContribution();
                        });
                        task5689.delay(600);
                    },this, {single:true});


                        Ext.getStore("Contents").add(newContent);

                    }
                } else {
                    Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.invalidFieldsError);
                }
    },

    onBasefieldBeforeRender: function(component, eOpts) {
        if ((component.isXType("field"))||(component.isXType("checkboxgroup"))){
            component.labelSeparator=" ";
            if (component.isXType("datefield")){
                component.submitFormat='U';
                component.altFormats='U|m/d/Y|n/j/Y|n/j/y|m/j/y|n/d/y|m/j/Y|n/d/Y|m-d-y|m-d-Y|m/d|m-d|md|mdy|mdY|d|Y-m-d|n-j|n/j';
            }    
        }
    },

    onFieldBeforeRender: function(component, eOpts) {
        if (component.localiserId&&Rubedo.RubedoInterfaceLoc){
            var configs = Rubedo.RubedoInterfaceLoc[component.localiserId];
            if (!Ext.isEmpty(configs)) {
                Ext.apply(component, configs);
                if (!Ext.isEmpty(configs.tooltip)) {
                    component.setTooltip(configs.tooltip);
                }
            }
            if ((component.isXType("button"))&&(component.scale=="large")){
                component.minWidth=48;
            }
        }
        if ((component.isXType("field"))||(component.isXType("checkboxgroup"))||(component.isXType("radiogroup"))){
            component.labelSeparator=" ";
            if (component.name=="localizable"){
                //temporary localiser hide
                component.hide();
            }
        }
    },

    onFieldAdded: function(component, container, pos, eOpts) {
        if (component.localiserId&&Rubedo.RubedoInterfaceLoc){
            var configs = Rubedo.RubedoInterfaceLoc[component.localiserId];
            if (!Ext.isEmpty(configs)) {
                Ext.apply(component, configs);
            }
        }
        if (!Ext.isEmpty(component.RTip)){
            component.anchor="90%";
            container.insert(pos,Ext.widget("RHelpBtn", {tooltip:component.RTip}));
        }
    },

    onFieldsetAfterRender: function(component, eOpts) {
        var task = new Ext.util.DelayedTask(function(){
            component.setTitle(component.title);
        });
        task.delay(100);
    },

    initializeContentForm: function(contentType) {
        this.renderMainFields(contentType.fields);
        this.renderTaxoFields(contentType.vocabularies);
        if (AppGlobals.editMode){
            var task336 = new Ext.util.DelayedTask(function(){

                var myWorkingLanguage=ACL.workingLanguage;
                try{var myFlagCode=Ext.getStore("AllLanguagesStore3").query("locale",myWorkingLanguage,false,false,true).items[0].get("flagCode");}
                catch(err){var myFlagCode="_unknown";}
                var returner =" <img src=\"/assets/flags/16/"+myFlagCode+".png\"> ";
                Ext.getCmp("MainForm").setTitle(Ext.getStore("Contents").getRange()[0].get("fields").text+" "+returner);

                var fieldValues=Ext.getStore("Contents").getRange()[0].get("fields");
                var myi18n=Ext.getStore("Contents").getRange()[0].get("i18n");
                if (!Ext.isEmpty(myi18n[myWorkingLanguage])){
                    Ext.apply(fieldValues,myi18n[myWorkingLanguage].fields);

                }

                Ext.getCmp("MainForm").getForm().setValues(fieldValues);
                Ext.Object.each(fieldValues, function(key, value, myself){
                    if (Ext.isArray(value)) {
                        var multiField=Ext.getCmp('MainForm').query('[name='+key+']')[0];
                        var y=0;
                        if (multiField.multivalued) {
                            Ext.Array.each(value,function(val,index){
                                if (index>0) {
                                    multiField.up().getComponent('fieldReplicatorBtn').fireEvent("click",multiField.up().getComponent('fieldReplicatorBtn'));
                                }
                                Ext.getCmp('MainForm').query('[name='+key+']')[index].setValue(val);
                            }); 
                        }
                    }
                });


                var myTaxo =Ext.clone(Ext.getStore("Contents").getRange()[0].get("taxonomy"));
                if (!Ext.isEmpty(Ext.getCmp("taxonomyFieldset"))){
                    Ext.Array.forEach(Ext.getCmp("taxonomyFieldset").query("field"), function(leField){
                        if (!Ext.isEmpty(myTaxo[leField.name])){
                            leField.setValue(myTaxo[leField.name]);
                        }
                    });
                }
            });
            task336.delay(900);

        } else {
            Ext.getCmp("MainForm").setTitle(Rubedo.RubedoAutomatedElementsLoc.newContentText+" "+contentType.type);
        }

        //window.parent.jQuery("#contentModal").modal("loading");
    },

    renderMainFields: function(fields) {
        var target = Ext.getCmp("MainForm");
        Ext.Array.forEach(fields, function(field,index){
            if (!field.config.useAsVariation){
            var configurator=Ext.clone(field.config);
            if (!Ext.isEmpty(configurator.i18n)){
                var BOLanguage=Ext.getStore("CurrentUserDataStore").getRange()[0].get("language");
                if (!Ext.isEmpty(configurator.i18n[BOLanguage])){
                    if (!Ext.isEmpty(configurator.i18n[BOLanguage].fieldLabel)){
                        configurator.fieldLabel=configurator.i18n[BOLanguage].fieldLabel;
                    }
                    if (!Ext.isEmpty(configurator.i18n[BOLanguage].tooltip)){
                        configurator.tooltip=configurator.i18n[BOLanguage].tooltip;
                    }
                }
            }
            if (field.cType =='treepicker'){
                configurator.store = Ext.create("Ext.data.TreeStore", {
                    autoLoad: false,
                    autoSync: false,
                    remoteFilter: true,
                    model: 'ContentContributor.model.taxonomyTermModel',
                    proxy: {
                        type: 'ajax',
                        api: {
                            read: 'taxonomy-terms/navigation-tree'
                        },
                        reader: {
                            type: 'json',
                            getResponseData: function(response) {
                                var data, error;

                                try {
                                    data = Ext.decode(response.responseText);
                                    if (Ext.isDefined(data.data)){data.children=data.data;}// error fix
                                    return this.readRecords(data);
                                } catch (ex) {
                                    error = new Ext.data.ResultSet({
                                        total  : 0,
                                        count  : 0,
                                        records: [],
                                        success: false,
                                        message: ex.message
                                    });

                                    this.fireEvent('exception', this, response, error);
                                    console.log(ex);

                                    Ext.Logger.warn('Unable to parse the JSON returned by the server');

                                    return error;
                                }
                            },
                            messageProperty: 'message'
                        }
                    },
                    sorters: {
                        property: 'orderValue'
                    }
                });
                configurator.store.load();
                configurator.valueField="id";
                configurator.displayField="text";
                configurator.plugins=[Ext.create("Ext.ux.form.field.ClearButton")];
            }
            else if (field.cType == 'combobox') {
                var monStore=  Ext.create('Ext.data.Store', Ext.clone(field.store));
                configurator.store = monStore;
            }
            configurator.labelSeparator=" ";
            try {var newField = Ext.widget(field.cType, configurator);} catch(err){
            var newField = Ext.create(field.cType, configurator);
        }
        var wrapping= Ext.widget("fieldWrapper");
        if (configurator.useTodayDef){
        	newField.setValue(new Date());
        }
        newField.anchor = '90%';
        newField.style = '{float:left;}';
        wrapping.add(newField);
        wrapping.getComponent('helpBouton').setTooltip(configurator.tooltip);
        if (Ext.isEmpty(configurator.tooltip)){
            wrapping.getComponent('helpBouton').hidden=true;
        } 
        if (newField.multivalued) {
            wrapping.add(Ext.widget('button', {iconCls: 'add',valeursM: 1, margin: '0 0 0 5', tooltip: Rubedo.RubedoAutomatedElementsLoc.duplicateText, itemId: 'fieldReplicatorBtn'}));

        }
        target.add(wrapping);

            }
    });

    },

    renderTaxoFields: function(vocabularies) {
        Ext.Array.remove(vocabularies, "navigation");
        if (!Ext.isEmpty(vocabularies)){
            var target = Ext.getCmp("MainForm");
            var taxoFieldset = Ext.widget("fieldset", {title:"Taxonomie", collapsible:true, id:"taxonomyFieldset",localiserId:"taxonomyFieldset"});
            var lesTaxo = vocabularies;
            var i=0;
            for (i=0; i<lesTaxo.length; i++) {
                var leVocab = Ext.getStore('TaxonomieDataJson').findRecord('id', lesTaxo[i]);
                if (leVocab.get("inputAsTree")){
                    var storeT = Ext.create("Ext.data.TreeStore", {
                        model:"Rubedo.model.taxonomyTermModel",
                        remoteFilter:"true",
                        proxy: {
                            type: 'ajax',
                            api: {
                                read: 'taxonomy-terms/tree'
                            },
                            reader: {
                                type: 'json',
                                messageProperty: 'message'
                            },
                            encodeFilters: function(filters) {
                                var min = [],
                                    length = filters.length,
                                    i = 0;

                                for (; i < length; i++) {
                                    min[i] = {
                                        property: filters[i].property,
                                        value   : filters[i].value
                                    };
                                    if (filters[i].type) {
                                        min[i].type = filters[i].type;
                                    }
                                    if (filters[i].operator) {
                                        min[i].operator = filters[i].operator;
                                    }
                                }
                                return this.applyEncoding(min);
                            }
                        },
                        filters: {
                            property: 'vocabularyId',
                            value: leVocab.get("id")
                        }

                    });
                    var toUse="Ext.ux.TreePicker";
                    if(leVocab.get("multiSelect")){toUse="Ext.ux.TreeMultiPicker";}
                    if(leVocab.get("id")=='navigation'){storeT.getProxy().api={read:"taxonomy-terms/navigation-tree"};}
                    storeT.load();
                    var selecteur = Ext.create(toUse, {
                        name:leVocab.get("id"),
                        fieldLabel: leVocab.get("name"),
                        store: storeT,
                        anchor:"90%",
                        ignoreIsNotPage:true,
                        displayField:"text",
                        allowBlank: !leVocab.data.mandatory,
                        plugins:[Ext.create("Ext.ux.form.field.ClearButton")]
                    });


                } else {
                    var storeT = Ext.create('Ext.data.JsonStore', {
                        model:"ContentContributor.model.taxonomyTermModel",
                        remoteFilter:"true",
                        proxy: {
                            type: 'ajax',
                            api: {
                                read: 'taxonomy-terms'
                            },
                            reader: {
                                type: 'json',
                                messageProperty: 'message',
                                root: 'data'
                            },
                            encodeFilters: function(filters) {
                                var min = [],
                                    length = filters.length,
                                    i = 0;

                                for (; i < length; i++) {
                                    min[i] = {
                                        property: filters[i].property,
                                        value   : filters[i].value
                                    };
                                    if (filters[i].type) {
                                        min[i].type = filters[i].type;
                                    }
                                    if (filters[i].operator) {
                                        min[i].operator = filters[i].operator;
                                    }
                                }
                                return this.applyEncoding(min);
                            }
                        },
                        filters: {
                            property: 'vocabularyId',
                            value: leVocab.get("id")
                        }

                    });
                    storeT.on("beforeload", function(s,o){
                        o.filters=Ext.Array.slice(o.filters,0,1);
                        if (!Ext.isEmpty(o.params.comboQuery)){

                            var newFilter=Ext.create('Ext.util.Filter', {
                                property:"text",
                                value:o.params.comboQuery,
                                operator:'like'
                            });

                            o.filters.push(newFilter);

                        }


                    });


                    var selecteur = Ext.widget('comboboxselect', {
                        name:leVocab.get("id"),
                        anchor:"90%",
                        fieldLabel: leVocab.get("name"),
                        submitValue:false,
                        autoScroll: false,
                        store: storeT,
                        queryMode: 'remote',
                        queryParam: 'comboQuery',
                        minChars:3,
                        displayField: 'text',
                        valueField: 'id',
                        filterPickList: true,
                        typeAhead: true,
                        forceSelection: !leVocab.data.expandable,
                        createNewOnEnter: leVocab.data.expandable,
                        multiSelect: leVocab.data.multiSelect,
                        allowBlank: !leVocab.data.mandatory
                    });
                }
                if (AppGlobals.contextQueryType=="simple"){
                    if (!Ext.isEmpty(AppGlobals.contextQuery.vocabularies[leVocab.get("id")])) {
                        selecteur.setValue(AppGlobals.contextQuery.vocabularies[leVocab.get("id")].terms);
                        if (!Ext.isEmpty(AppGlobals.contextQuery.vocabularies[leVocab.get("id")].terms)){
                            selecteur.setReadOnly(true);
                        }
                    }
                }

                var enrobage =Ext.widget('fieldWrapper');
                enrobage.add(selecteur);
                enrobage.getComponent('helpBouton').setTooltip(leVocab.data.helpText);
                if (Ext.isEmpty(leVocab.data.helpText)){enrobage.getComponent('helpBouton').hide();}
                taxoFieldset.add(enrobage);

            }
            target.add(taxoFieldset);
            Ext.getCmp("taxonomyFieldset").doLayout();
        }
    },
    onESFacetQueryBtnClick: function(button, e, eOpts) {
        Ext.getStore("ESFacetteStore").activeFacettes.query=Ext.getCmp("ESFacetQueryField").getValue();
        Ext.getStore("ESFacetteStore").load();
    },

    init: function(application) {
        Ext.require("Rubedo.view.CKEField");
        Ext.require("Rubedo.view.RHelpBtn");
        Ext.require("Rubedo.view.localiserField");
        Ext.require("Rubedo.view.localiserFieldComponent");
        Ext.require("Rubedo.view.externalMediaField");
        Ext.require("Rubedo.view.externalMediaFieldComponent");
        Ext.require("Ext.ux.TreePicker");
        Ext.require("Rubedo.view.DCEField");
        Ext.require("Rubedo.view.DCEFieldComponent");
        Ext.create("Rubedo.store.ContentSelectorStore");
        Ext.create("Rubedo.store.TCNDepComboCS");
        Ext.create("Rubedo.store.SystemCTStore");
        Ext.require("Rubedo.view.contentPickerGrid");
        Ext.require("Rubedo.view.contentPickerWindow");
        Ext.create("Rubedo.store.MediaTypesFORDAMPicker");
        Ext.create("Rubedo.store.DAMPickerStore");
        Ext.create("Rubedo.store.TaxonomyForDam2");
        Ext.create("Rubedo.store.ESFacetteStore");
        Ext.require("Rubedo.view.DAMMainView");
        Ext.require("Rubedo.view.ImagePickerField");
        Ext.require("Rubedo.view.ImageFieldComponent");
        Ext.require("Rubedo.view.ImagePickerWindow");
        Ext.require("Rubedo.controller.LocalisationController");
        Ext.require("Rubedo.controller.SearchController");
        Ext.require("Rubedo.view.searchResultsWindow");
        Ext.create("Rubedo.store.CurrentUserDataStore");
        Ext.create("Rubedo.store.AllLanguagesStore3");
        Ext.define('AppGlobals', {singleton: true});

        this.control({
            "[itemId= 'fieldReplicatorBtn']": {
                click: this.fieldReplicate
            },
            "#mainDraftBtn, #mainSubmitBtn, #mainPublishBtn": {
                click: this.saveContent
            },
            "field": {
                beforerender: this.onBasefieldBeforeRender
            },
            "component": {
                beforerender: this.onFieldBeforeRender
            },
            "field, checkboxgroup, radiogroup": {
                added: this.onFieldAdded
            },
            "fieldset": {
                afterrender: this.onFieldsetAfterRender
            },
            "#ESFacetQueryBtn": {
                click: this.onESFacetQueryBtnClick
            }
        });
    },

    mainAction: function() {
        var me=this;
        var options = decodeURIComponent(window.location.search.slice(1))
        .split('&')
        .reduce(function _reduce (a, b) {
            b = b.split('=');
            a[b[0]] = b[1];
            return a;
        }, {});
            ACL.workingLanguage=options.workingLanguage;
            var task = new Ext.util.DelayedTask(function(){
                if (Ext.isEmpty(options["edit-mode"])){
                    AppGlobals.currentPage=options["current-page"];
                    AppGlobals.currentWorkspace=options["current-workspace"];
                    if (!Ext.isEmpty(options.queryId)){
                        Ext.getStore("QueriesStore").filter("id",options.queryId);
                        Ext.getStore("QueriesStore").addListener("load", function(a, records){
                            if (!Ext.isEmpty(records)){
                                AppGlobals.contextQuery=records[0].get("query");
                                AppGlobals.contextQueryType=records[0].get("type");
                            } else {
                                Ext.Msg.alert('Erreur', 'Erreur dans la récupération de la requête de contexte');
                            }
                            if (!Ext.isEmpty(options.typeId)){
                                Ext.Ajax.request({
                                    url: 'content-types/find-one',
                                    method:'GET',
                                    params: {
                                        id: options.typeId
                                    },
                                    success: function(response){
                                        var result = Ext.JSON.decode(response.responseText).data;
                                        AppGlobals.typeId=options.typeId;
                                        Ext.getCmp("MainViewport").add(Ext.widget("MainForm"));
                                        me.initializeContentForm(result);
                                    }
                                });
                            }
                        }, this, {single:true});
                        } else {
                            if (!Ext.isEmpty(options.typeId)){
                                Ext.Ajax.request({
                                    url: 'content-types/find-one',
                                    method:'GET',
                                    params: {
                                        id: options.typeId
                                    },
                                    success: function(response){
                                        var result = Ext.JSON.decode(response.responseText).data;
                                        AppGlobals.typeId=options.typeId;
                                        Ext.getCmp("MainViewport").add(Ext.widget("MainForm"));
                                        me.initializeContentForm(result);
                                    }
                                });
                            }
                        }
                    } else {
                        AppGlobals.editMode=true;
                        Ext.getStore("Contents").filter("id",options['content-id']);
                        Ext.getStore("Contents").on("load",function(){
                            var theTypeId=Ext.getStore("Contents").getRange()[0].get("typeId");
                            Ext.Ajax.request({
                                url: 'content-types/find-one',
                                method:'GET',
                                params: {
                                    id: theTypeId
                                },
                                success: function(response){
                                    var result = Ext.JSON.decode(response.responseText).data;
                                    AppGlobals.typeId=theTypeId;
                                    Ext.getCmp("MainViewport").add(Ext.widget("MainForm"));
                                    me.initializeContentForm(result);
                                }
                            });
                        },this,{single:true});
                            Ext.getStore("Contents").load();
                        }
                    });
                    task.delay(1400);
    },

    onLaunch: function() {
        var task334 = new Ext.util.DelayedTask(function(){
            try {
                Rubedo.controller.LocalisationController.prototype.init();
            } catch (err){}
                Ext.getStore("CurrentUserDataStore").load();
            });
            task334.delay(600);
    }

});
