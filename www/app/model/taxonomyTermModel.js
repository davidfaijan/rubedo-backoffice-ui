/*
 * File: app/model/taxonomyTermModel.js
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

Ext.define('Rubedo.model.taxonomyTermModel', {
    extend: 'Ext.data.Model',
    alias: 'model.taxonomyTermModel',

    fields: [
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'id'
        },
        {
            name: 'version'
        },
        {
            name: 'vocabularyId'
        },
        {
            name: 'orderValue',
            sortType: 'asFloat',
            type: 'float'
        },
        {
            name: 'readOnly',
            type: 'boolean'
        }
    ]
});