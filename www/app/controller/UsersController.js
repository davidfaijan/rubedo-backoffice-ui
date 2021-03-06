/*
 * File: app/controller/UsersController.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
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

Ext.define('Rubedo.controller.UsersController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.UsersController',

    groupSelect: function(rowmodel, record, index, eOpts) {
        var users = [ ];
        this.getGroupUsers(record,users);
        Ext.getStore("UsersGroupStore").loadData(users);
        Ext.Array.forEach(Ext.getCmp("adminFUtilisateurs").getComponent("contextBar").query("buttongroup"), function(btn){btn.enable();});
        Ext.getCmp("groupDeleteButton").enable();
        Ext.getCmp("groupSaveButton").enable();
        var arButtons = [ ];
        this.ArianneBuilder(record,arButtons);
        Ext.getCmp("adminFUtilisateurs").getComponent("filArianne").removeAll();
        Ext.getCmp("adminFUtilisateurs").getComponent("filArianne").add(arButtons.reverse());
        if (record.isRoot()){
            var name= Rubedo.RubedoAutomatedElementsLoc.rootText+" ";
        } else {
            var name = " "+record.get("name")+" : ";
            var userNb = users.length;
            var calif = Rubedo.RubedoAutomatedElementsLoc.emptyText;
            if (userNb==1) {calif=Rubedo.RubedoAutomatedElementsLoc.userText;} else if (userNb>1) {calif=Rubedo.RubedoAutomatedElementsLoc.usersText;} else if (userNb===0) {userNb= undefined;}
        }
        Ext.getCmp("adminFUtilisateurs").getComponent("barreMeta").getComponent("boiteBarreMeta").update({
            name:name,
            userNb:userNb,
            calif:calif
        });
        Ext.getCmp("groupPropsForm").getForm().setValues(Ext.clone(record.getData()));
        Ext.getCmp("groupAdminPropsForm").getForm().setValues(Ext.clone(record.getData()));

        if ((!ACL.interfaceRights["write.ui.groups"])||(record.get("readOnly"))){
            Ext.getCmp("groupDeleteButton").disable();
            Ext.getCmp("groupSaveButton").disable();
            if (!record.isRoot()){
                Ext.getCmp("groupAddButton").disable();
            } else {
                Ext.getCmp("groupAddButton").enable();
            }
            Ext.Array.forEach(Ext.getCmp("adminFUtilisateurs").getComponent("contextBar").query("buttongroup"), function(btn){btn.disable();});

            Ext.Array.forEach(Ext.getCmp("groupPropsForm").query("field"), function(field){field.setReadOnly(true);});
            Ext.Array.forEach(Ext.getCmp("groupAdminPropsForm").query("field"), function(field){field.setReadOnly(true);});
        } else {
            Ext.Array.forEach(Ext.getCmp("groupPropsForm").query("field"), function(field){field.setReadOnly(false);});
            Ext.Array.forEach(Ext.getCmp("groupAdminPropsForm").query("field"), function(field){field.setReadOnly(false);});
            Ext.getCmp("groupAddButton").enable();

        }
    },

    removeGroup: function(button, e, eOpts) {
        var fenetre = Ext.widget('delConfirmZ');
        fenetre.show();
        Ext.getCmp('delConfirmZOui').on('click', function() {
            var target = Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
            var store = Ext.getCmp("groupsGrid").getStore();
            if (!Ext.isEmpty(target)) {
                store.suspendAutoSync();
                var myParent=target.parentNode;
                if ((myParent.childNodes.length==1)&&(!myParent.isRoot())){
                    myParent.set("expandable",false);
                }
                target.remove();
                store.resumeAutoSync();
                store.sync();
                Ext.Array.forEach(Ext.getCmp("adminFUtilisateurs").getComponent("contextBar").query("buttongroup"), function(btn){btn.disable();});
                button.disable();
                Ext.getCmp("groupSaveButton").disable();
            }
            Ext.getCmp('delConfirmZ').close();

        });

    },

    openGroupAddWindow: function(button, e, eOpts) {
        var window = Ext.widget("GroupAddWindow");
        Ext.getCmp('ViewportPrimaire').add(window);
        window.show();

    },

    createGroup: function(button, e, eOpts) {
        var target = Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
        if (Ext.isEmpty(target)) {
            target=Ext.getCmp("groupsGrid").getStore().getRootNode();
        }
        var store=Ext.getCmp("groupsGrid").getStore();
        var nameField = button.previousSibling();
        if (nameField.isValid()) {
            store.suspendAutoSync();
            target.appendChild({
                name:nameField.getValue(),
                workspace:Ext.getStore("CurrentUserDataStore").getRange()[0].get("defaultWorkspace"),
                members: [ ],
                rights: { },
                expandable:false
            });
            target.set("expandable",true);
            target.expand();
            store.resumeAutoSync();
            store.sync();
        }
        button.up().up().close();

    },

    changeAdminPwdSubmit: function(button, e, eOpts) {
        var myForm=button.up().getForm();

        if (myForm.isValid()) {
            if (myForm.getFieldValues().password==myForm.getFieldValues().passwordConfirm){
                myForm.submit({
                    url:"users/change-password",
                    success: function(form, action) {
                        var record=myForm.getRecord();
                        record.data.version=record.data.version+1;
                        Rubedo.controller.MainStoresController.prototype.fireNotif(Rubedo.RubedoAutomatedElementsLoc.successTitle, Rubedo.RubedoAutomatedElementsLoc.passwordChangedText);
                        button.up().up().close();

                    },
                    failure: function(form, action) {
                        switch (action.failureType) {
                            case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert('Erreur', 'Formulaire invalide');
                            break;
                            case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert('Erreur', 'Erreur Ajax');
                            break;
                            case Ext.form.action.Action.SERVER_INVALID:
                            Ext.Msg.alert('Erreur', action.result.msg);
                        }
                    }
                }); } else {
                    Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.passwordsDoNotMatchError);
                }
            }
    },

    newAdminDelegation: function(button, e, eOpts) {
        var newDel = Ext.create("Rubedo.model.delegationDataModel", {
            giverId:Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected().get("id")
        });
        button.up().up().getStore().add(newDel);
    },

    openUserAddWindow: function(button, e, eOpts) {
        var target = Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
        if (!Ext.isEmpty(target)) {
            var window = Ext.widget("UserAddWindow");
            Ext.getCmp('ViewportPrimaire').add(window);
            window.show();
        }
    },

    userSelectionAdd: function(button, e, eOpts) {
        var selection = Ext.Array.pluck(Ext.Array.pluck(button.up().up().getComponent(0).getSelectionModel().getSelection(),"data"),"id");
        var record = Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
        record.set("members", Ext.Array.union(record.get("members"),selection));
        Ext.getCmp("groupsGrid").getSelectionModel().deselectAll();
        Ext.getCmp("groupsGrid").getSelectionModel().select(record);

        button.up().up().close();
    },

    removeUserFromGroup: function(button, e, eOpts) {
        var targets =Ext.Array.pluck(Ext.Array.pluck(Ext.getCmp("UsersInGroupGrid").getSelectionModel().getSelection(),"data"),"id");
        var record=Ext.getCmp("groupsGrid").getSelectionModel().getLastSelected();
        record.set("members", Ext.Array.difference(record.get("members"),targets));
        Ext.getCmp("groupsGrid").getSelectionModel().deselectAll();
        Ext.getCmp("groupsGrid").getSelectionModel().select(record);
    },

    onGridpanelSelect: function(rowmodel, record, index, eOpts) {
        Ext.getCmp("userAdminMainPanel").enable();
        if ((!ACL.interfaceRights["write.ui.users"])&&(Ext.isEmpty(Ext.getCmp("userAdminMainPanel").alreadyRO))){
            Ext.Array.forEach(Ext.getCmp("userAdminMainPanel").query("field"), function(truc){truc.setReadOnly(true);});
            Ext.getCmp("userAdminMainPanel").alreadyRO=true;
        }
        Ext.getCmp("userAdminInfoDisplay").getForm().loadRecord(record);
        Ext.getCmp("userAdminAccessDisplay").getForm().loadRecord(record);
        if (Ext.isEmpty(record.get("photo"))) {
            Ext.getCmp("userAdminProfilePicture").setSrc("resources/images/userBig.png");
        } else {
            Ext.getCmp("userAdminProfilePicture").setSrc("image/get?file-id="+record.get("photo"));
        }
        /*Ext.getStore("DelegationsDataStore").clearFilter(true);
        Ext.getStore("DelegationsDataStore").filter("giverId", record.get("id"));
        */
    },

    adminInfoUpdate: function(button, e, eOpts) {
        if (Ext.getCmp("userAdminInfoDisplay").getForm().isValid()) {
            Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected().set(Ext.getCmp("userAdminInfoDisplay").getForm().getValues());
        }
    },

    newUser: function(button, e, eOpts) {
        Ext.widget("newUserWindow").show();
    },

    userAdminRemove: function(button, e, eOpts) {
        var fenetre = Ext.widget('delConfirmZ');
        fenetre.show();
        Ext.getCmp('delConfirmZOui').on('click', function() {
            var targets = button.up().up().getComponent(0).getSelectionModel().getSelection();
            button.up().up().getComponent(0).getStore().remove(targets);
            Ext.getCmp("userAdminMainPanel").disable();
            Ext.getCmp('delConfirmZ').close();

        });
    },

    deleteAdminPicture: function(button, e, eOpts) {
        Ext.getCmp("userAdminProfilePicture").setSrc("resources/images/userBig.png");
        Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected().set("photo", null);
    },

    adminAccessEdit: function(button, e, eOpts) {
        if (Ext.getCmp("userAdminAccessDisplay").getForm().isValid()) {
            Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected().set(Ext.getCmp("userAdminAccessDisplay").getForm().getValues());
        }
    },

    openAdminChangePwdWindow: function(button, e, eOpts) {
        var window = Ext.widget("AdminPasswordChange");
        Ext.getCmp('ViewportPrimaire').add(window);
        window.show();
        window.getComponent(0).getForm().loadRecord(Ext.getCmp("userAdminGrid").getSelectionModel().getLastSelected());
    },

    openUserSettings: function(component, eOpts) {
        if (component.isWindow) {
            Ext.getStore("CurrentUserDataStore").addListener("load",function(){
            	var myRecord= Ext.getStore("CurrentUserDataStore").getRange()[0];
                Ext.getCmp("userInfoDisplay").getForm().loadRecord(myRecord);
                if (Ext.isEmpty(myRecord.get("photo"))) {
                    Ext.getCmp("userProfilePicture").setSrc("resources/images/userBig.png");
                } else {
                    Ext.getCmp("userProfilePicture").setSrc("image/get?file-id="+myRecord.get("photo"));
                }
            },this,{single:true});
            Ext.getStore("CurrentUserDataStore").load();
        }
    },

    userInfoUpdate: function(button, e, eOpts) {
        var myRecord= Ext.getStore("CurrentUserDataStore").getRange()[0];
        if (Ext.getCmp("userInfoDisplay").getForm().isValid()){
            myRecord.set(Ext.getCmp("userInfoDisplay").getForm().getValues());
        }
    },

    deleteUserProfilePic: function(button, e, eOpts) {
        Ext.getCmp("userProfilePicture").setSrc("resources/images/userBig.png");
        Ext.getStore("CurrentUserDataStore").getRange()[0].set("photo", null);
    },

    adminDeleteDelegations: function(button, e, eOpts) {
        button.up().up().getStore().remove(button.up().up().getSelectionModel().getSelection());
    },

    changeMyPassword: function(button, e, eOpts) {
        var myForm=button.up().up().getForm();

        if (myForm.isValid()) {
            if (myForm.getFieldValues().newPassword==myForm.getFieldValues().newPasswordConfirm){
                myForm.submit({
                    url:"current-user/change-password",
                    success: function(form, action) {
                        Rubedo.controller.MainStoresController.prototype.fireNotif(Rubedo.RubedoAutomatedElementsLoc.successTitle, Rubedo.RubedoAutomatedElementsLoc.passwordChangedText);
                    },
                    failure: function(form, action) {
                        switch (action.failureType) {
                            case Ext.form.action.Action.CLIENT_INVALID:
                            Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.invalidFieldsError);
                            break;
                            case Ext.form.action.Action.CONNECT_FAILURE:
                            Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.serverConnectionError);
                            break;
                            case Ext.form.action.Action.SERVER_INVALID:
                            Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, action.result.msg);
                        }
                    }
                }); } else {
                    Ext.Msg.alert(Rubedo.RubedoAutomatedElementsLoc.errorTitle, Rubedo.RubedoAutomatedElementsLoc.passwordsDoNotMatchError);
                }
            }
    },

    onUserAdminWindowBeforeClose: function(panel, eOpts) {
        Ext.getStore("UsersAdminDataStore").removeAll();
        Ext.getStore("GroupsComboStore").removeAll();
    },

    onUserAdminWindowRender: function(component, eOpts) {
        if (component.isXType("window")){
            Ext.getStore("UsersAdminDataStore").load();
            Ext.getStore("GroupsComboStore").load();
        }
    },

    onUserCreateSubmitBtnClick: function(button, e, eOpts) {
        var form = button.up().getForm();
        if (form.isValid()){
            var newUser = Ext.create("Rubedo.model.userDataModel", form.getValues());
            Ext.getCmp("userAdminGrid").getStore().add(newUser);
            Ext.getCmp("userAdminGrid").getStore().addListener("datachanged",function(){
                Ext.getCmp("userAdminGrid").getSelectionModel().select(newUser);
            }, this, {single:true});
                button.up().up().close();
            }
    },

    getGroupUsers: function(group, array) {
        if (!group.isRoot()){
            var me=this;
            Ext.Array.forEach(group.get("members"), function(member){
                var someMembre = Ext.getStore("UsersDataStore").findRecord("id", member);
                if (!Ext.isEmpty(someMembre)){
                    Ext.Array.include(array,someMembre);
                }
            });
        }

    },

    ArianneBuilder: function(node, array) {
        var me=this;
        if (node.isRoot()) {
            var button = Ext.widget("button", {text:Rubedo.RubedoAutomatedElementsLoc.groupsText+"<b> ></b>", iconCls:"user"});
            button.on("click",function(){ Ext.getCmp("groupsGrid").getSelectionModel().select(node);});
            array.push(button);
        } else {
            var button = Ext.widget("button", {text:node.get("name")+"<b> ></b>", iconCls:"user"});
            button.on("click",function(){ Ext.getCmp("groupsGrid").getSelectionModel().select(node);});
            array.push(button);
            me.ArianneBuilder(node.parentNode,array);
        }
    },

    init: function(application) {
        this.control({
            "#groupsGrid": {
                select: this.groupSelect
            },
            "#groupDeleteButton": {
                click: this.removeGroup
            },
            "#groupAddButton": {
                click: this.openGroupAddWindow
            },
            "#groupCreateButton": {
                click: this.createGroup
            },
            "#AdminPasswordChangeBtn": {
                click: this.changeAdminPwdSubmit
            },
            "#AdminAddDelegationBtn": {
                click: this.newAdminDelegation
            },
            "#userAddButton": {
                click: this.openUserAddWindow
            },
            "#userSelectionAddButton": {
                click: this.userSelectionAdd
            },
            "#userRemoveButton": {
                click: this.removeUserFromGroup
            },
            "#userAdminGrid": {
                select: this.onGridpanelSelect
            },
            "#userAdminInfoEdit": {
                click: this.adminInfoUpdate
            },
            "#userAdminAdd": {
                click: this.newUser
            },
            "#userAdminRemove": {
                click: this.userAdminRemove
            },
            "#userAdminProfilePictureDelete": {
                click: this.deleteAdminPicture
            },
            "#userAdminAccessEdit": {
                click: this.adminAccessEdit
            },
            "#AdminChangeUserPwd": {
                click: this.openAdminChangePwdWindow
            },
            "#userSettings": {
                afterrender: this.openUserSettings
            },
            "#userInfoEdit": {
                click: this.userInfoUpdate
            },
            "#userProfilePictureDelete": {
                click: this.deleteUserProfilePic
            },
            "#AdminDeleteDelegationBtn": {
                click: this.adminDeleteDelegations
            },
            "#changeMyPasswordBtn": {
                click: this.changeMyPassword
            },
            "#UserAdminWindow": {
                beforeclose: this.onUserAdminWindowBeforeClose,
                render: this.onUserAdminWindowRender
            },
            "#userCreateSubmitBtn": {
                click: this.onUserCreateSubmitBtnClick
            }
        });
    }

});
