/*
 * File: app/store/Verses.js
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

Ext.define('Fihrist.store.Verses', {
    extend: 'Ext.data.Store',

    requires: [
        'Fihrist.model.Verse',
        'Ext.data.proxy.LocalStorage'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        data: [
            {
                UID: 'V1',
                MP3URL: 'Rom8_18-22.mp3',
                LocalURL: '',
                text: 'Rom.8:18-22'
            },
            {
                UID: 'V2',
                MP3URL: 'Luk13_1-5.mp3',
                LocalURL: '',
                text: 'Luk.13:1-5'
            },
            {
                UID: 'V3',
                MP3URL: 'Yuh9_1-3.mp3',
                LocalURL: '',
                text: 'Yuh.9:1-3'
            },
            {
                UID: 'V4',
                MP3URL: 'Rom5_3-5.mp3',
                LocalURL: '',
                text: 'Rom.5:3-5'
            },
            {
                UID: 'V5',
                MP3URL: 'Yak1_2-4.mp3',
                LocalURL: '',
                text: 'Yak.1:2-4'
            },
            {
                UID: 'V6',
                MP3URL: '2Ko1_3-11.mp3',
                LocalURL: '',
                text: '2Ko.1:3-11'
            },
            {
                UID: 'V7',
                MP3URL: 'Rom8_28.mp3',
                LocalURL: '',
                text: 'Rom.8:28'
            },
            {
                UID: 'V8',
                MP3URL: '2Ko4_16-18.mp3',
                LocalURL: '',
                text: '2Ko.4:16-18'
            },
            {
                UID: 'V9',
                MP3URL: '2Ko1_3-11.mp3',
                LocalURL: '',
                text: '2Ko.1:3-11'
            },
            {
                UID: 'V10',
                MP3URL: 'Vah21_4.mp3',
                LocalURL: '',
                text: 'Vah.21:4'
            },
            {
                UID: 'V11',
                MP3URL: 'Mat5_10-13.mp3',
                LocalURL: '',
                text: 'Mat.5:10-13'
            },
            {
                UID: 'V12',
                MP3URL: 'Mat24_9.mp3',
                LocalURL: '',
                text: 'Mat.24:9'
            },
            {
                UID: 'V13',
                MP3URL: 'Yuh15_18-25.mp3',
                LocalURL: '',
                text: 'Yuh.15:18-25'
            },
            {
                UID: 'V14',
                MP3URL: 'Vah6_9-11.mp3',
                LocalURL: '',
                text: 'Vah.6:9-11'
            },
            {
                UID: 'V15',
                MP3URL: 'Ibr5_7-9.mp3',
                LocalURL: '',
                text: 'İbr.5:7-9'
            }
        ],
        model: 'Fihrist.model.Verse',
        storeId: 'verses',
        proxy: {
            type: 'localstorage'
        }
    }
});