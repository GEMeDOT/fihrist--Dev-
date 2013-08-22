/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    models: [
        'Verse',
        'Topic',
        'Subtopic',
        'Topic2'
    ],
    stores: [
        'Verses',
        'Topics',
        'Subtopics',
        'Topics2'
    ],
    views: [
        'MainPortrait'
    ],
    controllers: [
        'Controller'
    ],
    name: 'Fihrist',

    launch: function() {

        Ext.create('Fihrist.view.MainPortrait', {fullscreen: true});
    }

});
