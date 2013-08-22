/*
 * File: app/store/Subtopics.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
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

Ext.define('Fihrist.store.Subtopics', {
    extend: 'Ext.data.Store',
    alias: 'store.subtopics',

    requires: [
        'Fihrist.model.Subtopic'
    ],

    config: {
        data: [
            {
                UID: 'S1',
                text: 'yozlaşmış bir dünyanın sonucu',
                verse: 'V1'
            },
            {
                UID: 'S2',
                text: 'genellikle ceza değil',
                verse: 'V2,V3'
            },
            {
                UID: 'S3',
                text: 'amacı, sonuçları:',
                verse: 'V4,V5'
            },
            {
                UID: 'S4',
                text: 'Acı çekerken RAB\'be güvenmek:',
                verse: 'V6,V7,V8'
            },
            {
                UID: 'S5',
                text: 'Tanrı\'nın tesellisi',
                verse: 'V9,V10'
            },
            {
                UID: 'S6',
                text: 'doğruluk ve tanıklık üzerine',
                verse: 'V11,V12,V13,V14'
            },
            {
                UID: 'S7',
                text: 'Mesih\'in örneği',
                verse: 'V15'
            }
        ],
        model: 'Fihrist.model.Subtopic',
        storeId: 'subtopics'
    }
});