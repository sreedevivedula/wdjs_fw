/*jslint node: true */
/*global driver: false */
/*global by: false */

(function () {
    'use strict';

    var BasePage = require('./BasePage'),
        homepagenavbar;

    homepagenavbar = new BasePage();

    homepagenavbar = homepagenavbar.extend({

        // Page Elements
        userdropdown: {

            open: function () {
                element(by.id("user-dropdown")).click();
            },

            logout: function () {
                this.open();
                element(by.id("logout")).click();
            }
        }

    });

    module.exports = homepagenavbar;

}());

