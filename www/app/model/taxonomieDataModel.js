/*
 * File: app/model/taxonomieDataModel.js
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

Ext.define('Rubedo.model.taxonomieDataModel', {
    extend: 'Ext.data.Model',
    alias: 'model.taxonomieDataModel',

    fields: [
        {
            name: 'titre',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'helpText',
            type: 'string'
        },
        {
            name: 'etiquettes',
            type: 'boolean'
        },
        {
            name: 'choixMultiple',
            type: 'boolean'
        },
        {
            name: 'obligatoire',
            type: 'boolean'
        },
        {
            name: 'termes'
        },
        {
            name: 'version'
        }
    ]
});