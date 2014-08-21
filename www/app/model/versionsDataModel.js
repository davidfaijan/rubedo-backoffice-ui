/*
 * File: app/model/versionsDataModel.js
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

Ext.define('Rubedo.model.versionsDataModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            mapping: 'fields.text',
            name: 'text'
        },
        {
            name: 'id'
        },
        {
            name: 'version'
        },
        {
            name: 'contentId'
        },
        {
            name: 'publishVersion',
            sortType: 'asInt',
            type: 'int'
        },
        {
            dateFormat: 'U',
            name: 'publishTime',
            type: 'date'
        },
        {
            mapping: 'publishUser.fullName',
            name: 'publishUser'
        },
        {
            name: 'fields'
        },
        {
            name: 'taxonomy'
        },
        {
            name: 'endPublicationDate'
        },
        {
            name: 'startPublicationDate'
        },
        {
            name: 'writeWorkspace'
        },
        {
            name: 'target'
        },
        {
            name: 'i18n'
        },
        {
            name: 'nativeLanguage'
        }
    ]
});