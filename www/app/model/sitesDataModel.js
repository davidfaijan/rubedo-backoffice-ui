/*
 * File: app/model/sitesDataModel.js
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

Ext.define('Rubedo.model.sitesDataModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'version'
        },
        {
            name: 'id'
        },
        {
            name: 'alias'
        },
        {
            name: 'description'
        },
        {
            name: 'keywords'
        },
        {
            name: 'defaultLanguage'
        },
        {
            name: 'languages'
        },
        {
            name: 'activeMessagery'
        },
        {
            name: 'SMTPServer'
        },
        {
            name: 'SMTPPort'
        },
        {
            name: 'SMTPLogin'
        },
        {
            name: 'SMTPPassword'
        },
        {
            name: 'defaultEmail'
        },
        {
            name: 'accessibilityLevel'
        },
        {
            name: 'opquastLogin'
        },
        {
            name: 'opquastPassword'
        },
        {
            defaultValue: [
                'HTTP'
            ],
            name: 'protocol'
        },
        {
            name: 'filter'
        },
        {
            name: 'theme'
        },
        {
            name: 'homePage'
        },
        {
            mapping: 'createUser.fullName',
            name: 'createUser',
            persist: false
        },
        {
            dateFormat: 'timestamp',
            name: 'lastUpdateTime',
            type: 'date'
        },
        {
            dateFormat: 'timestamp',
            name: 'createTime',
            type: 'date'
        },
        {
            name: 'title'
        },
        {
            name: 'author'
        },
        {
            name: 'workspace'
        },
        {
            name: 'readOnly',
            persist: false,
            type: 'boolean'
        },
        {
            name: 'defaultSingle'
        },
        {
            name: 'googleMapsKey'
        },
        {
            name: 'googleAnalyticsKey'
        },
        {
            name: 'disqusKey'
        },
        {
            name: 'builtOnEmptySite',
            type: 'boolean'
        },
        {
            name: 'builtOnModelSiteId'
        },
        {
            defaultValue: 'onlyOne',
            name: 'locStrategy'
        },
        {
            defaultValue: false,
            name: 'useBrowserLanguage',
            type: 'boolean'
        },
        {
            name: 'i18n'
        },
        {
            name: 'locale'
        },
        {
            name: 'nativeLanguage'
        },
        {
            name: 'staticDomain'
        },
        {
            name: 'recaptcha_public_key'
        },
        {
            name: 'recaptcha_private_key'
        },
        {
            name: 'enableECommerceFeatures',
            type: 'boolean'
        }
    ]
});