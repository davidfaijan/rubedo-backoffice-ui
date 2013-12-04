/*
 * File: app/controller/EmailController.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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

Ext.define('Rubedo.controller.EmailController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.EmailController',

    onNewETRowBtnClick: function(button, e, eOpts) {
        var newRow=Ext.widget("panel",{
            eType:"row",
            plugins:[Ext.create("Ext.ux.BoxReorderer")],
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            eConfig:{
                styles:""
            },
            flex:1
        });
        Ext.getCmp(Ext.getCmp("elementETIdField").getValue()).add(newRow);
        newRow.getEl().dom.click();
    },

    onMainETContainerAfterRender: function(component, eOpts) {
        component.getComponent(0).addBodyCls('contrastEMBorder');
        component.getEl().on("click", function(e){
            Ext.getCmp("elementETIdField").setValue(component.getComponent(0).getId());
            e.stopEvent();
        });
    },

    onMainETHolderAfterRender: function(component, eOpts) {
        if ((component.eType=="imageComponent")||(component.eType=="textComponent")){
            component.addBodyCls('contrastCBorder');
        } else {
            component.addBodyCls('contrastEMBorder');
        }
        component.getEl().on("click", function(e){
            Ext.getCmp("elementETIdField").setValue(component.getId());
            e.stopEvent();
        });
    },

    onElementETIdFieldChange: function(field, newValue, oldValue, eOpts) {
        var me=this;
        if (!Ext.isEmpty(oldValue)){
            var oldOne=Ext.getCmp(oldValue);
            if (!Ext.isEmpty(oldOne)){
                oldOne.removeBodyCls('selectedEMElement');
                if (oldOne.eType=="col"){
                    oldOne.up().removeBodyCls("contrastEMPadding");
                    oldOne.up().doLayout();
                } else if ((oldOne.eType=="imageComponent")||(oldOne.eType=="textComponent")){
                    oldOne.up().removeBodyCls("contrastEMPadding");
                    oldOne.up().up().removeBodyCls("contrastEMPadding");
                    oldOne.up().up().doLayout();
                }
            }
        }
        if (!Ext.isEmpty(newValue)){
            var newOne=Ext.getCmp(newValue);
            if (!Ext.isEmpty(newOne)){
                newOne.getEl().frame(MyPrefData.themeColor);
                newOne.addBodyCls('selectedEMElement');
                if (newOne.eType=="col"){
                    newOne.up().addBodyCls("contrastEMPadding");
                    newOne.up().doLayout();
                } else if ((newOne.eType=="imageComponent")||(newOne.eType=="textComponent")){
                    newOne.up().addBodyCls("contrastEMPadding");
                    newOne.up().up().addBodyCls("contrastEMPadding");
                    newOne.up().up().doLayout();
                }
            }
        } else {

        }
        me.adaptETEditButtons(newValue);
    },

    onNewETColBtnClick: function(button, e, eOpts) {
        var me=this;
        var newCol=Ext.widget("panel",{
            eType:"col",
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            eConfig:{
                styles:""
            },
            width:Ext.Array.min([100,me.calculateRemainingRowWidth(Ext.getCmp(Ext.getCmp("elementETIdField").getValue()))])

        });
        Ext.getCmp(Ext.getCmp("elementETIdField").getValue()).add(newCol);
        newCol.getEl().dom.click();
    },

    onMoveUPETBtnClick: function(button, e, eOpts) {
        var field = Ext.getCmp(Ext.getCmp("elementETIdField").getValue());
        if (!Ext.isEmpty(field)) {
            var pos = field.up().items.indexOf(field);
            if (pos > 0) {
                field.up().move(pos,pos-1);
            }
        }
    },

    onMoveDownETBTnClick: function(button, e, eOpts) {
        var field = Ext.getCmp(Ext.getCmp("elementETIdField").getValue());
        if (!Ext.isEmpty(field)) {
            var pos = field.up().items.indexOf(field);
            field.up().move(pos,pos+1);
        }
    },

    onETAddImageBtnClick: function(button, e, eOpts) {
        var me=this;
        var newImage=Ext.widget("panel",{
            eType:"imageComponent",
            layout: {
                type: 'fit'
            },
            eConfig:{
                image:null,
                styles:""
            },
            flex:1

        });
        Ext.getCmp(Ext.getCmp("elementETIdField").getValue()).add(newImage);
        me.syncEComponent(newImage, true);
        newImage.getEl().dom.click();
    },

    onETAddTextBtnClick: function(button, e, eOpts) {
        var me=this;
        var newText=Ext.widget("panel",{
            eType:"textComponent",
            layout: {
                type: 'fit'
            },
            eConfig:{
                html:null,
                styles:""
            },
            flex:1

        });
        Ext.getCmp(Ext.getCmp("elementETIdField").getValue()).add(newText);
        me.syncEComponent(newText, true);
        newText.getEl().dom.click();
    },

    onDeleteETElBtnClick: function(button, e, eOpts) {
        Ext.getCmp(Ext.getCmp("elementETIdField").getValue()).up().remove(Ext.getCmp(Ext.getCmp("elementETIdField").getValue()));
        Ext.getCmp("elementETIdField").setValue(null);
    },

    adaptETEditButtons: function(selectedElement) {
        var me=this;
        Ext.Array.forEach(Ext.getCmp("eTTopBarBox").query("button"), function(button){button.disable();});
        Ext.getCmp("ETAddComponentsBtnGr").disable();
        Ext.getCmp("eTEditControl").removeAll();
        Ext.getCmp("eTEditControl").setTitle("Select an element");
        var thing=Ext.getCmp(selectedElement);
        if (!Ext.isEmpty(thing)){
            if (selectedElement=="mainETHolder"){
                Ext.getCmp("newETRowBtn").enable();
                Ext.getCmp("eTEditControl").setTitle("Email body");
                me.displayBodyControls();
            } else if (thing.eType=="row"){
                Ext.getCmp("eTEditControl").setTitle("Row");
                if(me.calculateRemainingRowWidth(thing)>=30){
                    Ext.getCmp("newETColBtn").enable();
                }
                Ext.getCmp("moveUPETBtn").enable();
                Ext.getCmp("moveDownETBTn").enable();
                Ext.getCmp("deleteETElBtn").enable();
                me.displayRowControls(thing);
                me.displayGenericControls(thing,Ext.getCmp("eTEditControl"));
            } else if (thing.eType=="col"){
                Ext.getCmp("eTEditControl").setTitle("Column");
                if (Ext.isEmpty(thing.getComponent(0))){
                    Ext.getCmp("ETAddComponentsBtnGr").enable();
                }
                Ext.getCmp("moveUPETBtn").enable();
                Ext.getCmp("moveDownETBTn").enable();
                Ext.getCmp("deleteETElBtn").enable();
                me.displayColControls(thing);
                me.displayGenericControls(thing,Ext.getCmp("eTEditControl"));
            } else if (thing.eType=="imageComponent"){
                Ext.getCmp("eTEditControl").setTitle("Image");
                Ext.getCmp("deleteETElBtn").enable();
                me.displayImageControls(thing,Ext.getCmp("eTEditControl"));
                me.displayGenericControls(thing,Ext.getCmp("eTEditControl"));
            } else if (thing.eType=="textComponent"){
                Ext.getCmp("eTEditControl").setTitle("Text");
                Ext.getCmp("deleteETElBtn").enable();
                me.displayTextControls(thing,Ext.getCmp("eTEditControl"));
                me.displayGenericControls(thing,Ext.getCmp("eTEditControl"));
            }
        }
    },

    applyWidthConstraints: function(field, col) {
        var maxWidth=col.up().getWidth()-2;
        Ext.Array.forEach(col.up().items.items, function(otherCol){
            if (otherCol.getId()!=col.getId()){
                maxWidth=maxWidth-otherCol.getWidth();
            }
        });
        field.setMaxValue(maxWidth);
    },

    calculateRemainingRowWidth: function(row) {
        var maxWidth=row.getWidth()-2;
        Ext.Array.forEach(row.items.items, function(otherCol){
            maxWidth=maxWidth-otherCol.getWidth();
        });
        return(maxWidth);
    },

    syncEComponent: function(component, firstTime) {
        if (component.eType=="imageComponent"){
            if (firstTime){
                component.add(Ext.create('Ext.Img'));
            } 

            if (Ext.isEmpty(component.eConfig.image)){
                component.getComponent(0).setSrc("resources/icones/generic/image_add.png");
            } else {
                component.getComponent(0).setSrc("/dam?media-id="+component.eConfig.image);
            }
        } else if (component.eType=="textComponent"){
            if (firstTime){
                component.add(Ext.create('Ext.Component'));
            }
            component.getComponent(0).update(component.eConfig.html);
        }
    },

    displayImageControls: function(imageComponent, target) {
        var me=this;
        var imageField=Ext.create('Rubedo.view.ImagePickerField',{
            itemId:"imageEditor",
            fieldLabel:"Image",
            allowedFileType:"Image",
            smallMode:true,
            labelWidth:60,
            anchor:"100%",
            value:Ext.clone(imageComponent.eConfig.image)
        });
        imageField.on("change",function(){
            imageComponent.eConfig.image=imageField.getValue();
            me.syncEComponent(imageComponent);
        });
        target.add(imageField);
    },

    displayTextControls: function(textComponent, target) {
        var me=this;
        var textField=Ext.widget('directRTEField',{
            itemId:"textTEditor",
            fieldLabel:"Text",
            labelWidth:60,
            anchor:"100%",
            value:Ext.clone(textComponent.eConfig.html)
        });
        textField.on("change",function(){
            textComponent.eConfig.html=textField.getValue();
            me.syncEComponent(textComponent);
        });
        target.add(textField);
    },

    displayRowControls: function(row) {

    },

    displayColControls: function(col) {
        var me=this;
        var container=Ext.getCmp("eTEditControl");
        var spanEdit=Ext.widget('numberfield',{
            itemId:"spanEditor",
            fieldLabel:"Width",
            labelWidth:60,
            editable:true,
            allowDecimals:false,
            anchor:"100%",
            value:col.getWidth(),
            minValue:10
        });
        spanEdit.on("change",function(){
            if (spanEdit.isValid()){
                col.setWidth(spanEdit.getValue());
                me.applyWidthConstraints(spanEdit,col);
            }
        });
        me.applyWidthConstraints(spanEdit,col);
        container.add(spanEdit);
    },

    displayGenericControls: function(component, target) {
        var styleEdit=Ext.widget("textareafield",{
            itemId:"styleEditor",
            fieldLabel:"Style",
            labelWidth:60,
            anchor:"100%",
            grow:true,
            value:Ext.clone(component.eConfig.styles)

        });
        styleEdit.on("change", function(){
            component.eConfig.styles=styleEdit.getValue();
        });
        target.add(styleEdit);
    },

    displayBodyControls: function() {
        var container=Ext.getCmp("eTEditControl");
        var mainBody=Ext.getCmp("mainETHolder");
        if (Ext.isEmpty(mainBody.eConfig)){
            mainBody.eConfig={ };
        }
        var widthDisplayer=Ext.widget("displayfield",{
            labelWidth:60,
            fieldLabel:"Width",
            value:mainBody.getWidth()-4
        });
        container.add(widthDisplayer);
        var centerCheckbox=Ext.widget("checkbox",{
            labelWidth:60,
            fieldLabel:"Centered",
            inputValue:true,
            checked:Ext.clone(mainBody.eConfig.centered)
        });
        centerCheckbox.on("change",function(){
            mainBody.eConfig.centered=centerCheckbox.getValue();
        });
        container.add(centerCheckbox);
        var styleEdit=Ext.widget("textareafield",{
            itemId:"styleEditor",
            fieldLabel:"Style",
            labelWidth:60,
            anchor:"100%",
            grow:true,
            value:Ext.clone(mainBody.eConfig.styles)

        });
        styleEdit.on("change", function(){
            mainBody.eConfig.styles=styleEdit.getValue();
        });
        container.add(styleEdit);
    },

    init: function(application) {
        this.control({
            "#newETRowBtn": {
                click: this.onNewETRowBtnClick
            },
            "#mainETContainer": {
                afterrender: this.onMainETContainerAfterRender
            },
            "#mainETHolder panel": {
                afterrender: this.onMainETHolderAfterRender
            },
            "#elementETIdField": {
                change: this.onElementETIdFieldChange
            },
            "#newETColBtn": {
                click: this.onNewETColBtnClick
            },
            "#moveUPETBtn": {
                click: this.onMoveUPETBtnClick
            },
            "#moveDownETBTn": {
                click: this.onMoveDownETBTnClick
            },
            "#ETAddImageBtn": {
                click: this.onETAddImageBtnClick
            },
            "#ETAddTextBtn": {
                click: this.onETAddTextBtnClick
            },
            "#deleteETElBtn": {
                click: this.onDeleteETElBtnClick
            }
        });
    }

});
