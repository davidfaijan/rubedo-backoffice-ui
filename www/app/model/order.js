/*
 * File: app/model/order.js
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

Ext.define('Rubedo.model.order', {
    extend: 'Ext.data.Model',
    alias: 'model.order',

    requires: [
        'Ext.data.Field'
    ],

    fields: [
        {
            name: 'name'
        },
        {
            name: 'id'
        },
        {
            name: 'version'
        },
        {
            name: 'readOnly',
            persist: false,
            type: 'boolean'
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
            name: 'createUser'
        },
        {
            name: 'detailedCart'
        },
        {
            name: 'shippingPrice'
        },
        {
            name: 'shippingTaxedPrice'
        },
        {
            name: 'shippingTax'
        },
        {
            name: 'finalTFPrice'
        },
        {
            name: 'finalTaxes'
        },
        {
            name: 'finalPrice'
        },
        {
            name: 'shipper'
        },
        {
            name: 'userId'
        },
        {
            name: 'userName'
        },
        {
            name: 'billingAddress'
        },
        {
            name: 'shippingAddress'
        },
        {
            name: 'hasStockDecrementIssues'
        },
        {
            name: 'stockDecrementIssues'
        },
        {
            name: 'paymentMeans'
        },
        {
            name: 'status'
        },
        {
            name: 'dateCode'
        },
        {
            name: 'incrementalCode'
        },
        {
            name: 'orderNumber'
        },
        {
            name: 'shippingComments'
        },
        {
            name: 'billDocument'
        }
    ]
});