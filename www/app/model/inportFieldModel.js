/*
 * File: app/model/inportFieldModel.js
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

Ext.define('Rubedo.model.inportFieldModel', {
    extend: 'Ext.data.Model',
    alias: 'model.inportFieldModel',

    fields: [
        {
            name: 'name'
        },
        {
            name: 'newName'
        },
        {
            name: 'label'
        },
        {
            defaultValue: '506441f8c648043912000017',
            name: 'protoId'
        },
        {
            defaultValue: false,
            name: 'mandatory',
            type: 'boolean'
        },
        {
            defaultValue: false,
            name: 'searchable',
            type: 'boolean'
        },
        {
            defaultValue: false,
            name: 'localizable',
            type: 'boolean'
        },
        {
            name: 'csvIndex'
        },
        {
            name: 'cType'
        },
        {
            name: 'mediaTypeId'
        },
        {
            name: 'translatedElement'
        },
        {
            name: 'translateToLanguage'
        }
    ]
});