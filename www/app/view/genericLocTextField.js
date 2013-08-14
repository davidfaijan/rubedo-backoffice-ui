/*
 * File: app/view/genericLocTextField.js
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

Ext.define('Rubedo.view.genericLocTextField', {
    extend: 'Ext.form.FieldContainer',
    alias: 'widget.genericLocTextField',

    CTMode: false,
    height: 26,
    width: 400,
    layout: {
        align: 'stretch',
        type: 'hbox'
    },
    fieldLabel: 'Label',
    labelSeparator: ' ',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    flex: 1,
                    itemId: 'mainTextInput',
                    fieldLabel: '',
                    allowBlank: false,
                    stripCharsRe: /<\/?[^>]+>/gi,
                    listeners: {
                        change: {
                            fn: me.onMainTextInputChange,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'hiddenfield',
                    hidden: true,
                    itemId: 'currentLanguageIntField',
                    fieldLabel: 'Label',
                    listeners: {
                        change: {
                            fn: me.onCurrentLanguageIntFieldChange,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'languageSwitcher',
                    width: 36,
                    iconCls: 'infoWarning',
                    text: '',
                    tooltip: 'Localization Error',
                    tooltipType: 'title',
                    menu: {
                        xtype: 'menu',
                        frame: true,
                        minWidth: 60,
                        items: [
                            {
                                xtype: 'menuitem',
                                text: 'Menu Item'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Menu Item'
                            },
                            {
                                xtype: 'menuitem',
                                text: 'Menu Item'
                            }
                        ]
                    }
                }
            ],
            listeners: {
                afterrender: {
                    fn: me.onFieldcontainerAfterRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    onMainTextInputChange: function(field, newValue, oldValue, eOpts) {
        var me=field.up();
        if (field.isValid()){
            if (me.CTMode){
                var target=Ext.getCmp(me.targetEntity).config;
            }else {
                var target=Ext.getCmp(me.targetEntity);
            }
            var currentLanguage=me.getComponent("currentLanguageIntField").getValue();
            if (Ext.isEmpty(target.i18n)){
                target.i18n={ };
            }
            if (Ext.isEmpty(target.i18n[currentLanguage])){
                target.i18n[currentLanguage]={ };
            }
            target.i18n[currentLanguage][me.targetEntityProp]=newValue;
            if (me.CTMode) { 
                if (currentLanguage==Ext.getStore("CurrentUserDataStore").getRange()[0].get("language")){
                    Ext.getCmp(me.companionFieldId).setValue(newValue);
                }
            } else if (target.isXType("unBloc")){
                target.syncTitle();
            }
        }
    },

    onCurrentLanguageIntFieldChange: function(field, newValue, oldValue, eOpts) {
        var me=field.up();
        if (me.CTMode){
            var target=Ext.getCmp(me.targetEntity).config;
        }else {
            var target=Ext.getCmp(me.targetEntity);
        }
        var myBtn=me.getComponent("languageSwitcher");
        if (Ext.isEmpty(newValue)){
            myBtn.setIcon(null);
            myBtn.setIconCls("infoWarning");
            myBtn.setTooltip(Rubedo.RubedoAutomatedElementsLoc.localizationErrorText);
            myBtn.setText(null);
        } else {
            var myRec=me.store.query("locale",newValue,false,false,true).items[0];
            myBtn.setIconCls(null);
            myBtn.setIcon('/assets/flags/16/'+myRec.get("flagCode")+'.png');
            myBtn.setTooltip(myRec.get("label"));
            myBtn.setText(myRec.get("label"));
            if (!Ext.isEmpty(myRec.get("ownLabel"))){
                myBtn.setText(myRec.get("ownLabel"));
                myBtn.setTooltip(myRec.get("ownLabel"));
            }
        }
        try{
            me.getComponent("mainTextInput").setValue(target.i18n[newValue][me.targetEntityProp]);
        }catch(err){
            if (me.CTMode){
                me.getComponent("mainTextInput").setValue(Ext.getCmp(me.companionFieldId).getValue());
            }else {
                me.getComponent("mainTextInput").setValue(target[me.targetEntityProp]);
            }

        }
    },

    onFieldcontainerAfterRender: function(component, eOpts) {
        var me=component;
        var myMenu=me.getComponent("languageSwitcher").menu;
        me.store=Ext.getStore("AllLanguagesStore3");
        if (me.CTMode){
            me.store=Ext.getStore("MainLanguagesStore");
        }
        var BOArray=Ext.Array.pluck(Ext.Array.pluck(Ext.getStore("BOLanguageStore").getRange(),"data"),"key");
        if(!Ext.isEmpty(myMenu)){
            myMenu.removeAll();
            Ext.Array.forEach(me.store.getRange(),function(language){
                if ((!me.CTMode)||(Ext.Array.contains(BOArray,language.get("locale")))){
                    var newItem=Ext.widget("menuitem",{text:language.get("label"), icon:"/assets/flags/16/"+language.get("flagCode")+".png"});
                    if (!Ext.isEmpty(language.get("ownLabel"))){
                        newItem.setText(language.get("ownLabel"));
                    }
                    newItem.on("click",function(){
                        me.getComponent("currentLanguageIntField").setValue(language.get("locale"));
                    });
                    myMenu.add(newItem);
                }
            });
        }
        me.getComponent("currentLanguageIntField").setValue(me.initialLanguage);
        if ((!me.CTMode)&&(Ext.getStore("AllLanguagesStore3").getRange().length==1)){
            me.getComponent("languageSwitcher").hide();
        } else {
            me.getComponent("languageSwitcher").show();
        }
    }

});