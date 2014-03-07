/*
 * File: app/model/Topic.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Fihrist.model.Topic', {
    extend: 'Ext.data.Model',
    alias: 'model.topic',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'UID'
            },
            {
                name: 'Name'
            },
            {
                name: 'subtopic'
            }
        ]
    }
});