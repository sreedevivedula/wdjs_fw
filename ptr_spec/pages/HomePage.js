/*jslint node: true */
/*global driver: false */
/*global by: false */

(function () {
    'use strict';

    var BasePage = require('./BasePage'),
        homePageNavBar = require('./HomePageNavBar'),
        homepage;

    homepage = new BasePage();

    homepage = homepage.extend({

        // Page Elements
        navbar: homePageNavBar,

        // Page Services
        isDisplayed: function () {
            return element(by.id("main")).isDisplayed();
        }

    });

    module.exports = homepage;

}());