/*
 * File: app/view/TopicsNested.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
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

Ext.define('Fihrist.view.TopicsNested', {
    extend: 'Ext.dataview.NestedList',

    requires: [
        'Ext.Toolbar',
        'Ext.Button'
    ],

    config: {
        scrollable: true,
        backText: 'BinTurkish',
        detailCard: {
            xclass: 'Fihrist.view.DetailsView'
        },
        store: 'NestedTopics',
        title: 'Fihrist',
        layout: {
            type: 'card',
            animation: 'slide'
        },
        listeners: [
            {
                fn: 'onNestedlistLeafItemTap',
                event: 'leafitemtap'
            },
            {
                fn: 'onInfoBtnTap',
                event: 'tap',
                delegate: '#infoBtn'
            }
        ],
        toolbar: {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    docked: 'right',
                    itemId: 'infoBtn',
                    iconCls: 'info'
                }
            ]
        }
    },

    onNestedlistLeafItemTap: function(nestedlist, list, index, target, record, e, eOpts) {
        var detailCard = nestedlist.getDetailCard();
        //detailCard.setHtml(record.get('vtext'));
        var VerseText = detailCard.getComponent( 'versetext' );
        VerseText.setHtml(record.get('vtext'));
        var audio = detailCard.getComponent('mp3player');
        audio.setUrl(record.get('url'));
    },

    onInfoBtnTap: function(button, e, eOpts) {
        console.log('infoBtn has been tapped');
    }

});