/*
 * File: app/view/MassDamUploadWindow.js
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

Ext.define('Rubedo.view.MassDamUploadWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.MassDamUploadWindow',

    requires: [
        'Rubedo.view.WorkspaceCombo',
        'Ext.tab.Panel',
        'Ext.Img',
        'Ext.tab.Tab',
        'Ext.form.Panel',
        'Ext.form.field.Checkbox',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.TextItem',
        'Ext.toolbar.Fill'
    ],

    localiserId: 'damMassUploadWindow',
    height: 343,
    id: 'MassDamUploadWindow',
    width: 466,
    constrain: true,
    resizable: false,
    layout: 'fit',
    bodyPadding: 2,
    title: 'Digital assets mass upload',
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            xtype: 'panel',
                            localiserId: 'uploadTab',
                            border: 4,
                            id: 'massDamUploadDropZone',
                            bodyBorder: true,
                            bodyCls: [
                                'contrastRow',
                                'x-panel-body-default',
                                'x-box-layout-ct'
                            ],
                            title: 'Upload',
                            layout: {
                                type: 'vbox',
                                align: 'center',
                                pack: 'center'
                            },
                            listeners: {
                                afterrender: {
                                    fn: me.onMassDamUploadDropZoneAfterRender,
                                    scope: me
                                }
                            },
                            items: [
                                {
                                    xtype: 'image',
                                    height: 128,
                                    style: '{opacity:0.4;}',
                                    width: 128,
                                    src: 'resources/icones/generic/image_add.png'
                                },
                                {
                                    xtype: 'container',
                                    localiserId: 'dropFilesHereContainer',
                                    height: 60,
                                    html: '<h1 style="color:#999;">Drop files here</h1>',
                                    width: 179
                                }
                            ],
                            tabConfig: {
                                xtype: 'tab',
                                flex: 1
                            }
                        },
                        {
                            xtype: 'form',
                            localiserId: 'uploadOptionsTab',
                            bodyPadding: 10,
                            title: 'Options',
                            tabConfig: {
                                xtype: 'tab',
                                flex: 1
                            },
                            items: [
                                {
                                    xtype: 'checkboxfield',
                                    localiserId: 'applyCurrentTaxoToUploadField',
                                    anchor: '100%',
                                    id: 'applyCurrentTaxoToUploadField',
                                    fieldLabel: 'Apply current taxonomy facets',
                                    labelWidth: 180,
                                    boxLabel: '',
                                    checked: true,
                                    inputValue: 'true',
                                    uncheckedValue: 'false'
                                },
                                {
                                    xtype: 'fieldset',
                                    localiserId: 'workspacesToApplyFieldset',
                                    title: 'Workspaces to apply to uploaded media',
                                    items: [
                                        {
                                            xtype: 'WorkspaceCombo',
                                            localiserId: 'contributeWorkspaceField',
                                            id: 'contributeWorkspaceMassUploadField',
                                            fieldLabel: 'Contribution',
                                            name: 'writeWorkspace',
                                            store: 'ContributeWorkspacesCombo',
                                            anchor: '100%'
                                        },
                                        {
                                            xtype: 'WorkspaceCombo',
                                            localiserId: 'diffusionWorkspaceField',
                                            id: 'targetWorkspaceMassUploadField',
                                            fieldLabel: 'Diffusion',
                                            name: 'target',
                                            multiSelect: true,
                                            store: 'WorkspacesComboWithAll',
                                            anchor: '100%'
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    listeners: {
                        afterrender: {
                            fn: me.onTabpanelAfterRender,
                            scope: me
                        }
                    }
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    height: 30,
                    hidden: true,
                    listeners: {
                        afterrender: {
                            fn: me.onToolbarAfterRender,
                            scope: me
                        }
                    }
                },
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbtext',
                            id: 'damTypeTextItem',
                            text: 'Media type :',
                            listeners: {
                                afterrender: {
                                    fn: me.onDamTypeTextItemAfterRender,
                                    scope: me
                                }
                            }
                        },
                        me.processFilesUploadedTextItem({
                            xtype: 'tbtext',
                            uploadedItems: 0,
                            id: 'filesUploadedTextItem',
                            text: '0 files uploaded'
                        }),
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            handler: function(button, event) {
                                button.up().up().close();
                            },
                            localiserId: 'doneUploadingBtn',
                            text: 'Done uploading'
                        }
                    ]
                }
            ],
            listeners: {
                beforeclose: {
                    fn: me.onMassDamUploadWindowBeforeClose,
                    scope: me
                },
                render: {
                    fn: me.onMassDamUploadWindowRender,
                    scope: me
                }
            }
        });

        me.callParent(arguments);
    },

    processFilesUploadedTextItem: function(config) {
        config.text=0+" "+Rubedo.RubedoAutomatedElementsLoc.filesUploadedText;
        return config;
    },

    onMassDamUploadDropZoneAfterRender: function(component, eOpts) {
        component.setBorder(4);
    },

    onTabpanelAfterRender: function(component, eOpts) {
        Ext.getCmp("MassDamUploadWindow").getComponent(0).getLayout().setActiveItem(1);
        Ext.getCmp("MassDamUploadWindow").getComponent(0).getLayout().setActiveItem(0);
    },

    onToolbarAfterRender: function(component, eOpts) {
        var updBtn=Ext.create('Ext.ux.upload.Button', {
            text: 'Select files',
            plugins: [Ext.create('Ext.ux.upload.plugin.Window',{
                title: 'Upload',
                width: 520,
                height: 350,
                windowModal:true,
                windowId:"auxUploadWindow1"
            })
            ],
            uploader:
            {
                url: 'dam/mass-upload',
                autoStart: true,
                max_file_size: '2020mb',
                drop_element: 'massDamUploadDropZone',
                statusQueuedText: 'Ready to upload',
                statusUploadingText: 'Uploading ({0}%)',
                autoRemoveUploaded:false,
                multipart_params:{
                    "typeId":Ext.getStore("DAMFacetteStore").activeFacettes.damType,
                    "activeFacets":Ext.JSON.encode(Ext.getCmp("MassDamUploadWindow").activeFacets),
                    "applyTaxoFacets":Ext.getCmp("applyCurrentTaxoToUploadField").value,
                    "token":ACL.CSRFToken,
                    "writeWorkspace":Ext.getCmp("contributeWorkspaceMassUploadField").value,
                    "targetArray":Ext.JSON.encode(Ext.getCmp("targetWorkspaceMassUploadField").value),
                    "workingLanguage":Ext.getCmp("workingLanguageField").getValue()
                },
                statusFailedText: '<span style="color: red">Error</span>',
                statusDoneText: '<span style="color: green">Complete</span>',
                /*filters: [
                {title: "Image files", extensions: "jpg,gif,png"}
                ],*/
                statusInvalidSizeText: 'File too large',
                statusInvalidExtensionText: 'Invalid file type'
            },
            listeners:
            {
                filesadded: function(uploader, files)
                {
                    uploader.multipart_params=Ext.getCmp("MassDamUploadWindow").getMassUploadParams();
                    return true;
                },

                beforeupload: function(uploader, file)
                {
                    //console.log("beforeupload");
                },

                fileuploaded: function(uploader, file)
                {
                    var indicator=Ext.getCmp("filesUploadedTextItem");
                    indicator.uploadedItems=indicator.uploadedItems+1;
                    indicator.setText(" "+indicator.uploadedItems+" "+Rubedo.RubedoAutomatedElementsLoc.filesUploadedText);
                },

                uploadcomplete: function(uploader, success, failed)
                {
                    if(Ext.isEmpty(Ext.getCmp("buttonToExitUploadWindow"))){
                        Ext.getCmp("auxUploadWindow1").getComponent(0).getDockedComponent(2).add(Ext.widget("button",{
                            text:"<b>OK</b>",
                            id:"buttonToExitUploadWindow",
                            handler:function(btn){
                                uploader.removeAll();
                                Ext.getCmp("auxUploadWindow1").hide();
                                btn.up().remove(btn);
                            }
                        }));
                    }
                },
                scope: this
            }


        });
        component.add(updBtn);
    },

    onMassDamUploadWindowBeforeClose: function(panel, eOpts) {
        if (Ext.getCmp("DAMInterface").currentViewMode=="folder"){
            Ext.getStore("DAMFolderViewStore").load();
        } else {
            Ext.getStore("DAMFacetteStore").load();
        }
        Ext.getCmp("auxUploadWindow1").close();
    },

    onDamTypeTextItemAfterRender: function(component, eOpts) {
        try {
            if (Ext.getCmp("DAMInterface").currentViewMode!="search"){
                var myType=Ext.getStore("MediaTypesForDAM").findRecord("id",Ext.getCmp("MassDamUploadWindow").usedType).get("type");

            } else{
                var myType=Ext.getStore("MediaTypesForDAM").findRecord("id",Ext.getStore("DAMFacetteStore").activeFacettes.damType).get("type");
            }
            component.setText(Rubedo.RubedoAutomatedElementsLoc.mediaTypeText+" : "+myType);
        } catch(err){console.log("error displaying type");}
    },

    onMassDamUploadWindowRender: function(component, eOpts) {
        var rawFacets=Ext.clone(Ext.getStore("DAMFacetteStore").activeFacettes);
        delete rawFacets.damType;
        delete rawFacets.query;
        delete rawFacets.lastupdatetime;
        Ext.Object.each(rawFacets, function(key, value, myself) {
            if (!Ext.isArray(value)){
                rawFacets[key]=new Array(value);
            }
        });
        component.activeFacets=rawFacets;
    },

    getMassUploadParams: function() {
        var params={"typeId":Ext.getStore("DAMFacetteStore").activeFacettes.damType,
                "activeFacets":Ext.JSON.encode(Ext.getCmp("MassDamUploadWindow").activeFacets),
                "applyTaxoFacets":Ext.getCmp("applyCurrentTaxoToUploadField").value,
                "token":ACL.CSRFToken,
                "writeWorkspace":Ext.getCmp("contributeWorkspaceMassUploadField").value,
                "targetArray":Ext.JSON.encode(Ext.getCmp("targetWorkspaceMassUploadField").value),
                    "workingLanguage":Ext.getCmp("workingLanguageField").getValue(),
            "directory":"notFiled"};
        if (Ext.getCmp("DAMInterface").currentViewMode=="folder"){
            var realDirectory=Ext.clone(Ext.getStore("DAMFolderViewStore").directoryFilter);
            if ((realDirectory!="emptyDecoy")&&(realDirectory!="root")){
                params.directory=realDirectory;
                params.activeFacets="{ }";
                params.typeId=Ext.getCmp("MassDamUploadWindow").usedType;
            }
        }


        return(params);
    }

});