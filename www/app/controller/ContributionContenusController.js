/*
 * File: app/controller/ContributionContenusController.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
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

Ext.define('Rubedo.controller.ContributionContenusController', {
    extend: 'Ext.app.Controller',

    models: [
        'contenusDataModel'
    ],
    stores: [
        'ContenusDataJson'
    ],
    views: [
        'AjouterContenu'
    ],

    onGridviewItemClick: function(dataview, record, item, index, e, options) {

        var filArianne = dataview.findParentByType('window').getDockedComponent('filArianne');
        var typeFil = filArianne.getComponent('type');
        if (Ext.isDefined(typeFil)) {typeFil.setText(record.data.type);}
        else { typeFil= Ext.widget('button',{iconCls: "folder", text:record.data.type, itemId:'type'});
        filArianne.add(typeFil);
    }
    var contenus = dataview.getSelectionModel().getLastSelected().data.contenus;
    this.getContenusDataJsonStore().loadData(contenus);
    },

    onButtonClick1: function(button, e, options) {
        this.nContenuRecorder('publié');
    },

    onButtonClick: function(button, e, options) {
        this.nContenuRecorder('brouillon');
    },

    onButtonClick2: function(button, e, options) {
        var cible = Ext.getCmp('ContenusGrid').getSelectionModel().getSelection();
        this.getContenusDataJsonStore().remove(cible);
    },

    onButtonClick3: function(button, e, options) {
        var cible = Ext.getCmp('ContenusGrid').getSelectionModel().getSelection()[0].data;
        var fenetre = Ext.widget('ajouterContenu');
        fenetre.showAt(screen.width/2-300, 100);
    },

    afficheMeta: function(tablepanel, record, item, index, e, options) {
        var boiteMeta = tablepanel.findParentByType('window').getDockedComponent('barreMeta').getComponent('boiteBarreMeta');
        var valeurs= Ext.clone(record.data);
        valeurs.creation= Ext.Date.format(valeurs.creation, 'd-m-Y');
        valeurs.derniereModification= Ext.Date.format(valeurs.derniereModification, 'd-m-Y');
        boiteMeta.update(valeurs);
    },

    nContenuRecorder: function(etat) {

        var formC = Ext.getCmp('boiteAChampsContenus').items.items;
        for (m=0;  m<formC.length; m++) {
            if((formC[m].getComponent(0).isXType('field'))&&(!formC[m].getComponent(0).isValid())){
                return(false);
            }
        }
        var champs = [ ];
        for (k=1; k<formC.length; k++) {
            if (formC[k].getComponent(0).isXType('field')) {
                var champ= {nom : formC[k].getComponent(0).name, value: formC[k].getComponent(0).getValue()};
                champs.push(champ);
            }
        }
        var nContenu = Ext.create('model.contenusDataModel', {
            text: formC[0].getComponent(0).getValue(),
            champs: champs,
            etat: etat,
            type: Ext.getCmp('TypesContenusGridView').getSelectionModel().getLastSelected().data.type,
            version: 1,
            creation: new Date(),
            derniereModification: new Date(),
            auteur: 'Igor'
        });

        Ext.getCmp('ContenusGrid').getStore().add(nContenu);
        Ext.getCmp('TypesContenusGridView').getSelectionModel().getLastSelected().data.contenus.push(nContenu.data);

        Ext.getCmp('ajouterContenu').close();
    },

    init: function(application) {
        this.control({
            "#TypesContenusGridView": {
                itemclick: this.onGridviewItemClick
            },
            "#boutonPublierNouveauContenu": {
                click: this.onButtonClick1
            },
            "#boutonEnregistrerNouveauContenu": {
                click: this.onButtonClick
            },
            "#boutonSupprimerContenu": {
                click: this.onButtonClick2
            },
            "#boutonModifierContenu": {
                click: this.onButtonClick3
            },
            "#ContenusGrid": {
                itemclick: this.afficheMeta
            }
        });
    }

});
