/*
 * File: app/model/MTFieldModel.js
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

Ext.define('Rubedo.model.MTFieldModel', {
    extend: 'Ext.data.Model',
    alias: 'model.MTFieldModel',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'type',
            type: 'string'
        },
        {
            name: 'cType',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        },
        {
            name: 'config'
        },
        {
            name: 'configFields'
        },
        {
            name: 'id'
        }
    ]
});