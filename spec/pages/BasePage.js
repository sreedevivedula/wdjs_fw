/*jslint node: true */
/*global driver: false */
/*global by: false */


(function () {
    'use strict';

    var appConfig = require('../config/AppConfig'),
        driverConfig = require('../config/DriverConfig'),
        underscore = require('../../bower_components/underscore'),
        BasePage;

    BasePage = function () {
        this.appConfig = appConfig;
    };

    BasePage.prototype.extend = function (page) {
        return underscore.extend(page, this);
    };

    BasePage.prototype.waitForElement = function (locator, timeout,
                                                  timeout_msg) {

        return driver.wait(function () {
            return driver.findElement(locator).then(function (element) {
                return element.isDisplayed();
            });
        },  timeout || this.appConfig.PAGE_LOAD_TIMEOUT,
            timeout_msg || "Could not find element with locator using " +
            locator.using + " and value " + locator.value);
    };

    module.exports = BasePage;

}());

