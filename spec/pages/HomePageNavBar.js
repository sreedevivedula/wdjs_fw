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
        userDropDown: {

            open: function () {
                driver.findElement(by.id("user-dropdown")).click();
            },

            logout: function () {
                this.open();
                homepagenavbar.waitForElement(by.id("logout"));
                driver.findElement(by.id("logout")).click();
            }
        }

    });

    module.exports = homepagenavbar;

}());

