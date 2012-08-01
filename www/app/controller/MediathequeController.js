/*
 * File: app/controller/MediathequeController.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Rubedo.controller.MediathequeController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.MediathequeController',

    majMedias: function(tablepanel, record, item, index, e, options) {
        var filArianne = tablepanel.findParentByType('window').getDockedComponent('filArianne');
        var typeFil = filArianne.getComponent('type');
        if (Ext.isDefined(typeFil)) {typeFil.setText(record.data.titre+'<b> > </b>');}
        else { typeFil= Ext.widget('button',{iconCls: "folder", text:record.data.titre+'<b> > </b>', itemId:'type'});
        filArianne.add(typeFil);
    }
    var boiteMeta = tablepanel.findParentByType('window').getDockedComponent('barreMeta').getComponent('boiteBarreMeta');
    var imageMeta = tablepanel.findParentByType('window').getDockedComponent('barreMeta').getComponent('imageBarreMeta');
    var customMeta = record.data.titre;
    boiteMeta.update(customMeta);
    imageMeta.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/folder.png');

    Ext.getStore('MediaViewStore').loadData(record.data.medias);

    },

    doubleClickPreview: function(dataview, record, item, index, e, options) {
        var monType =Ext.getCmp('contributionMediasGrid').getSelectionModel().getLastSelected().data.type;
        if (monType=="Image"){
            var fenetre = Ext.getCmp(record.data.text+"NadPreview");
            if (Ext.isDefined(fenetre)){ fenetre.toFront(); }
            else {
                fenetre = Ext.widget('ImagePreviewWindow', {title:record.data.text, id:record.data.text+"NadPreview"});
                var maTaille=record.data.conf;



                fenetre.getComponent(0).setSize(maTaille).setSrc(record.data.fichier);
                Ext.getCmp('desktopCont').add(fenetre);
                fenetre.show();
            }

        }
        else if (monType=="PDF"){
            var fenetre = Ext.getCmp(record.data.text+"PDFPreview");
            if (Ext.isDefined(fenetre)){ fenetre.toFront(); }
            else {
                fenetre = Ext.widget('PDFPreviewWindow', {title:record.data.text, id:record.data.text+"PDFPreview"});
                fenetre.add(Ext.widget('container',{autoEl:{
                    tag: 'iframe',
                    style: 'height: 100%; width: 100%; border: none',
                    src: record.data.fichier
                }}));
                Ext.getCmp('desktopCont').add(fenetre);
                fenetre.show();
            }

        }

    },

    onDataviewSelectionChange: function(dataview, selections, options) {
        var boiteMeta = Ext.getCmp('contributionMedias').getDockedComponent('barreMeta').getComponent('boiteBarreMeta');
        var imageMeta = Ext.getCmp('contributionMedias').getDockedComponent('barreMeta').getComponent('imageBarreMeta');
        if (Ext.isEmpty(selections)) {
            var customMeta = Ext.getCmp('contributionMediasGrid').getSelectionModel().getLastSelected().data.titre;
            boiteMeta.update(customMeta);
            imageMeta.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/folder.png');

        } else if (selections.length==1) {
            var monType= Ext.getCmp('contributionMediasGrid').getSelectionModel().getLastSelected().data.type;   
            if (monType=="Image"){
                imageMeta.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/image.png');
                var customMeta=(selections[0].data.text+"</br> Creation : "+selections[0].data.meta.creation+
                " Dernière modification : "+selections[0].data.meta.derniereModification+" Version : "+selections[0].data.meta.version+
                " Auteur : "+selections[0].data.meta.auteur+" Dimensions : "+selections[0].data.conf.width+"x"+selections[0].data.conf.height);
                boiteMeta.update(customMeta);
            } else  if (monType=="PDF"){
                imageMeta.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/pdf.png');
                var customMeta=(selections[0].data.text+"</br> Creation : "+selections[0].data.meta.creation+
                " Dernière modification : "+selections[0].data.meta.derniereModification+" Version : "+selections[0].data.meta.version+
                " Auteur : "+selections[0].data.meta.auteur);
                boiteMeta.update(customMeta);
            }
        } else {
            var monType= Ext.getCmp('contributionMediasGrid').getSelectionModel().getLastSelected().data.type;   
            if (monType=="Image"){
                imageMeta.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/image.png');
                var customMeta=(selections.length+" Images");
                boiteMeta.update(customMeta);
            } else if (monType=="PDF"){
                imageMeta.setSrc('resources/icones/'+MyPrefData.iconsDir+'/48x48/pdf.png');
                var customMeta=(selections.length+" PDF");
                boiteMeta.update(customMeta);
            }

        }
    },

    supprimeMedia: function(button, e, options) {
        Ext.getCmp('MediaMainView').getStore().remove(Ext.getCmp('MediaMainView').getSelectionModel().getSelection());
    },

    afficheMediaEditor: function(button, e, options) {
        var monType =Ext.getCmp('contributionMediasGrid').getSelectionModel().getLastSelected().data.type;
        var selectedStuf=Ext.getCmp('MediaMainView').getSelectionModel().getSelection();
        if (selectedStuf.length==1){
            var record=selectedStuf[0];
            if (monType=="Image"){
                var fenetre = Ext.getCmp('mediaImageEditor');
                if (Ext.isDefined(fenetre)){ fenetre.toFront(); }
                else {
                    fenetre = Ext.widget('mediaImageEditor', {title:record.data.text});
                    var maTaille=record.data.conf;
                    var image = Ext.widget('image', {
                        src:record.data.fichier,
                        height:maTaille.height,
                        width:maTaille.width,
                        resizable:true
                    });
                    image.on('resize', function(moi, height, width, oldWidth, oldHeight){
                        Ext.getCmp('imageEditorHeightField').setValue(height);
                        Ext.getCmp('imageEditorWidthField').setValue(width);
                        Ext.getCmp('imageEditorHeightField').removeListener('click');
                        Ext.getCmp('imageEditorUndo').on('click', function(){
                            image.setSize(oldWidth, oldHeight);
                            console.log(image.id);
                        });
                    });
                    fenetre.getComponent(0).add(image);


                    Ext.getCmp('desktopCont').add(fenetre);
                    fenetre.show();
                }

            }
        }

    },

    onControllerClickStub: function() {

    },

    init: function() {
        this.control({
            "#contributionMediasGrid": {
                itemclick: this.majMedias
            },
            "#MediaMainView": {
                itemdblclick: this.doubleClickPreview,
                selectionchange: this.onDataviewSelectionChange
            },
            "#boutonSupprimerMedias": {
                click: this.supprimeMedia
            },
            "#boutonEditionMedias": {
                click: this.afficheMediaEditor
            }
        });

    }

});
