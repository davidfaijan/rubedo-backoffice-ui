/*
 * File: app/view/MQA.js
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

Ext.define('Rubedo.view.MQA', {
    extend: 'Ext.window.Window',
    alias: 'widget.MQA',

    requires: [
        'Rubedo.view.MyToolbar56',
        'Rubedo.view.assisstantRE5',
        'Ext.toolbar.Toolbar',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.button.Button'
    ],

    localiserId: 'mediaQueryAssistant',
    height: 373,
    id: 'MQA',
    width: 469,
    constrain: true,
    layout: 'card',
    title: 'Assistant de requêtage sur médias',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'mytoolbar56',
                    dock: 'bottom'
                }
            ],
            items: [
                {
                    xtype: 'form',
                    localiserId: 'mqs1',
                    bodyPadding: 10,
                    title: 'Choix des types de médias',
                    items: [
                        {
                            xtype: 'combobox',
                            localiserId: 'mediaTypesField',
                            anchor: '100%',
                            id: 'DAMTypeWizCombo',
                            fieldLabel: 'Types de media',
                            name: 'DAMTypes',
                            allowBlank: false,
                            editable: false,
                            displayField: 'type',
                            forceSelection: true,
                            multiSelect: true,
                            store: 'MediaTypesFORDAMPicker',
                            valueField: 'id'
                        }
                    ],
                    listeners: {
                        deactivate: {
                            fn: me.onFormDeactivate,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'form',
                    localiserId: 'mqS2',
                    id: 'assisstantRE2',
                    overflowY: 'auto',
                    bodyPadding: 10,
                    title: 'Choix des règles sur la taxonomie'
                },
                {
                    xtype: 'assisstantRE5'
                },
                {
                    xtype: 'panel',
                    localiserId: 'mqls',
                    layout: 'anchor',
                    bodyPadding: 10,
                    title: 'Enregistrement',
                    items: [
                        {
                            xtype: 'button',
                            localiserId: 'saveBtn',
                            anchor: '100%',
                            id: 'MQASaveBtn',
                            scale: 'large',
                            text: 'Enregistrer',
                            listeners: {
                                click: {
                                    fn: me.onMQASaveBtnClick,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onMQAAfterRender,
                    scope: me
                },
                beforeclose: {
                    fn: me.onMQABeforeClose,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onFormDeactivate: function(component, eOpts) {
        if ((component.up().editorMode)&&(component.up().initialQuery.DAMTypes.toString()==Ext.getCmp("DAMTypeWizCombo").getValue().toString())){
            component.up().reactToMTChange(true);
        } else {
            component.up().reactToMTChange(false);
        }
    },

    onMQAAfterRender: function(component, eOpts) {
        Ext.getStore("MediaTypesFORDAMPicker").getProxy().extraParams.filter="[{\"property\":\"mainFileType\",\"value\":\""+component.allowedFileType+"\"}]";
        Ext.getStore("MediaTypesFORDAMPicker").on("load",function(a,records){
            if ((records.length==1)&&(!component.editMode)){
                Ext.getCmp("DAMTypeWizCombo").select(records[0]);
            }
        });
        Ext.getStore("MediaTypesFORDAMPicker").load();
        Ext.getStore('TaxonomyForQA').load();
        if (component.editorMode){
            component.initialQuery=Ext.JSON.decode(component.initialValue);
            var task= new Ext.util.DelayedTask(function(){
                Ext.getCmp("DAMTypeWizCombo").setValue(component.initialQuery.DAMTypes);
                component.reactToMTChange(true);
                Rubedo.controller.assistantRequetageController.prototype.restoreFieldRules(component.initialQuery.fieldRules);
            });
            task.delay(1000);
        }
    },

    onMQABeforeClose: function(panel, eOpts) {
        Ext.getStore("MediaTypesFORDAMPicker").removeAll();
        Ext.getStore('TaxonomyForQA').removeAll();
    },

    onMQASaveBtnClick: function(button, e, eOpts) {
        var result= Ext.getCmp("MQA").readMyQuery();
        Ext.getCmp(Ext.getCmp("MQA").targetId).setValue(Ext.JSON.encode(result));
        Ext.getCmp("MQA").close();
    },

    readMyQuery: function() {
        var mainWin= Ext.getCmp("MQA");
        var result = {};
        result.vocabularies={ };
        result.fieldRules={ };
        Ext.Array.forEach(mainWin.query("field"),function(field){
            if (field.submitValue){
                if (field.isVocabularyField) {
                    if (Ext.isEmpty(result.vocabularies[field.vocabularyId])){
                        result.vocabularies[field.vocabularyId]={ };
                    }
                    if (Ext.isArray(field.getValue())){
                        result.vocabularies[field.vocabularyId][field.usedRole]=field.getValue();
                    } else {
                        result.vocabularies[field.vocabularyId][field.usedRole]=[field.getValue()];
                    }

                } else if (field.isAddedRuleField){
                    if (Ext.isEmpty(result.fieldRules[field.ruleId])){
                        result.fieldRules[field.ruleId]={ };
                    }
                    result.fieldRules[field.ruleId][field.usedRole]=field.getValue();
                } else {
                    result[field.name]=field.getValue();
                }
            }
        });
        if (!Ext.isArray(result.DAMTypes)){
            result.contentTypes=[result.DAMTypes];
        }
        return(result);
    },

    reactToMTChange: function(keepInMind) {
        var editorMode = Ext.getCmp("MQA").editorMode;
        var simpleMode = false;
        var initialQuery=Ext.getCmp("MQA").initialQuery;
        Ext.getCmp('assisstantRE2').removeAll();
        var selectedTypes=Ext.getCmp("DAMTypeWizCombo").getValue();
        var vocabularies= [];
        Ext.Array.forEach(selectedTypes, function(type){
            var myVocs = Ext.getStore("MediaTypesFORDAMPicker").findRecord("id",type).get("vocabularies");
            vocabularies=Ext.Array.merge(vocabularies,myVocs);
        });
        var storeL = Ext.create('Ext.data.Store', {
            fields: ['valeur', 'nom'],
            data : [
            {valeur: 'AND', nom :Rubedo.RubedoAutomatedElementsLoc.andText},
            {valeur: 'OR', nom :Rubedo.RubedoAutomatedElementsLoc.orText}
            ]
        });

        var lien = Ext.create('Ext.form.ComboBox', {
            anchor: '100%',
            fieldLabel: Rubedo.RubedoAutomatedElementsLoc.relationBetweenRulesText,
            store: storeL,
            value: 'OR',
            name: "vocabulariesRule",
            queryMode: 'local',
            displayField: 'nom',
            valueField: 'valeur',
            labelWidth: 150,
            editable: false,
            forceSelect: true,
            allowBlank: false

        });
        var champsRegles = [ ];
        champsRegles.push({nom:Rubedo.RubedoAutomatedElementsLoc.creationText,
            valeur: {
                cType: 'datefield',
                name: 'creation',
                ruleId:'createTime',
                label: Rubedo.RubedoAutomatedElementsLoc.creationText
            }
        });
        champsRegles.push({nom:Rubedo.RubedoAutomatedElementsLoc.lastUpdateText,
            valeur: {
                cType: 'datefield',
                name: 'derniereModification',
                ruleId:'lastUpdateTime',
                label: Rubedo.RubedoAutomatedElementsLoc.lastUpdateText
            }});
            Ext.getStore('champsTCARStore').loadData(champsRegles);
            var vocabulaires=vocabularies;
            if (vocabulaires.length>1) {Ext.getCmp('assisstantRE2').add(lien);}
            Ext.Array.remove(vocabulaires,"navigation");
            var k =0;
            for (k=0; k<vocabulaires.length; k++) {

                var leVocab = Ext.getStore('TaxonomyForQA').findRecord('id', vocabulaires[k]);
                var vocabAPlat= [ ];
                //this.miseAPlatTaxo(leVocab.data.termes.children, vocabAPlat);


                var storeT = Ext.create('Ext.data.JsonStore', {
                    model:"Rubedo.model.taxonomyTermModel",
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
                    if ((!Ext.isEmpty(o.params))&&(!Ext.isEmpty(o.params.comboQuery))){

                        var newFilter=Ext.create('Ext.util.Filter', {
                            property:"text",
                            value:o.params.comboQuery,
                            operator:'like'
                        });

                        o.filters.push(newFilter);

                    }


                });
                storeT.load();

                var selecteur = Ext.widget('comboboxselect', {
                    name:leVocab.get("id"),
                    vocabularyId:leVocab.get("id"),
                    isVocabularyField:true,
                    usedRole:"terms",
                    anchor:"100%",
                    fieldLabel: leVocab.get("name"),
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
                    multiSelect: Ext.clone(leVocab.data.multiSelect),
                    allowBlank: !leVocab.data.mandatory
                });

                var storeR = Ext.create('Ext.data.Store', {
                    fields: ['valeur', 'nom'],
                    data : [
                    {valeur: 'all', nom :Rubedo.RubedoAutomatedElementsLoc.tRuleAllText},
                    {valeur: 'allRec', nom :Rubedo.RubedoAutomatedElementsLoc.tRuleAllRecText},
                    {valeur: 'some', nom :Rubedo.RubedoAutomatedElementsLoc.tRuleSomeText},
                    {valeur: 'someRec', nom :Rubedo.RubedoAutomatedElementsLoc.tRuleSomeRecText}
                    ]
                });

                var regle = Ext.create('Ext.form.ComboBox', {
                    name:leVocab.get("id")+"QueryRule",
                    anchor: '100%',
                    vocabularyId:leVocab.get("id"),
                    isVocabularyField:true,
                    usedRole:"rule",
                    fieldLabel: Rubedo.RubedoAutomatedElementsLoc.ruleText,
                    store: storeR,
                    queryMode: 'local',
                    displayField: 'nom',
                    valueField: 'valeur',
                    editable: false,
                    value: 'some',
                    forceSelect: true,
                    allowBlank: false

                });
                if ((keepInMind)&&(editorMode)&&(!Ext.isEmpty(initialQuery.vocabularies[leVocab.get("id")]))){
                    regle.setValue(initialQuery.vocabularies[leVocab.get("id")].rule[0]);
                    selecteur.setValue(initialQuery.vocabularies[leVocab.get("id")].terms);
                }
                if (simpleMode) {
                    regle.setValue("all");
                    regle.setReadOnly(true);
                    regle.hide();
                    selecteur.multiSelect=false;
                    var enrobage=Ext.widget("container", {anchor:"100%", layout:"anchor"});
                } else {


                    var enrobage = Ext.widget('fieldset', {
                        title : leVocab.get("name"),
                        collapsible: true


                    });}
                    enrobage.add(selecteur);
                    enrobage.add(regle);
                    enrobage.collapse();
                    Ext.getCmp('assisstantRE2').add(enrobage);



                }
    }

});