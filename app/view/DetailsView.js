/*
 * File: app/view/DetailsView.js
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

Ext.define('Fihrist.view.DetailsView', {
    extend: 'Ext.Panel',

    config: {
        ui: '',
        items: [
            {
                xtype: 'audio',
                hidden: true,
                itemId: 'mp3player'
            },
            {
                xtype: 'button',
                centered: false,
                docked: 'top',
                html: '<img src="resources/btns/play.png" />',
                itemId: 'controls',
                margin: '20 auto',
                maxWidth: '80%',
                iconAlign: 'center'
            },
            {
                xtype: 'component',
                border: 5,
                centered: true,
                itemId: 'versetext',
                ui: 'light',
                width: '90%'
            }
        ],
        listeners: [
            {
                fn: 'onControlsTap',
                event: 'tap',
                delegate: '#controls'
            }
        ]
    },

    onControlsTap: function(button, e, eOpts) {
        var audio = this.getParent().down('audio');
        if (audio.isPlaying()) {
            audio.pause();
            button.setHtml('<img src="resources/btns/play.png" />');
        } else {
            audio.play();
            button.setHtml('<img src="resources/btns/pause.png" />');
        }
    }

});