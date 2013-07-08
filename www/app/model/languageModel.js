/*
 * File: app/model/languageModel.js
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

Ext.define('Rubedo.model.languageModel', {
    extend: 'Ext.data.Model',
    alias: 'model.languageModel',

    fields: [
        {
            name: 'key',
            persist: false
        },
        {
            name: 'label',
            persist: false
        },
        {
            name: 'locale',
            persist: false
        },
        {
            defaultValue: false,
            name: 'active',
            type: 'boolean'
        },
        {
            name: 'id'
        },
        {
            name: 'version'
        },
        {
            name: 'iso2',
            persist: false
        },
        {
            defaultValue: false,
            name: 'isDefault',
            persist: false,
            type: 'boolean'
        },
        {
            defaultValue: '_unknown',
            name: 'flagCode'
        },
        {
            name: 'ownLabel'
        }
    ]
});