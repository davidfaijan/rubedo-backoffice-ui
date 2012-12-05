/*
 * File: app/view/testingGround.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
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

Ext.define('Rubedo.view.testingGround', {
    extend: 'Ext.window.Window',
    alias: 'widget.testingGround',

    requires: [
        'Rubedo.view.ImagePickerField'
    ],

    height: 450,
    id: 'testingGround',
    width: 959,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    title: 'Testing ground',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    flex: 1,
                    autoScroll: true,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    bodyPadding: 10,
                    title: 'Upload test',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'bottom',
                            listeners: {
                                afterrender: {
                                    fn: me.onToolbarAfterRender,
                                    scope: me
                                }
                            }
                        }
                    ],
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            id: 'dragload'
                        },
                        {
                            xtype: 'ImagePickerField'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onToolbarAfterRender: function(abstractcomponent, options) {
        abstractcomponent.add(Ext.create('Ext.ux.upload.Button', {
            text: 'Select files',
            //singleFile: true,
            plugins: [Ext.create("Ext.ux.upload.plugin.Window",{title:"test",height:300,width:300})
            ],
            uploader: 
            {
                url: 'image/put',
                //uploadpath: '/Root/files',
                autoStart: false,
                max_file_size: '2020mb',			
                drop_element: 'dragload',
                statusQueuedText: 'Ready to upload',
                statusUploadingText: 'Uploading ({0}%)',
                statusFailedText: '<span style="color: red">Error</span>',
                statusDoneText: '<span style="color: green">Complete</span>',

                statusInvalidSizeText: 'File too large',
                statusInvalidExtensionText: 'Invalid file type'
            },
            listeners: 
            {
                filesadded: function(uploader, files)								
                {
                    //console.log('filesadded');
                    return true;
                },

                beforeupload: function(uploader, file)								
                {
                    //console.log('beforeupload');			
                },

                fileuploaded: function(uploader, file)								
                {
                    //console.log('fileuploaded');
                },

                uploadcomplete: function(uploader, success, failed)								
                {
                    //console.log('uploadcomplete');				
                },
                scope: this
            }


        }));
    }

});