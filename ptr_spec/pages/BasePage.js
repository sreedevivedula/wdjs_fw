/*jslint node: true */
/*global driver: false */
/*global by: false */


(function () {
    'use strict';

    var appConfig = require('../config/AppConfig'),
        underscore = require('../../bower_components/underscore'),
        BasePage;

    BasePage = function () {
        this.appConfig = appConfig;
    };

    BasePage.prototype.extend = function (page) {
        return underscore.extend(page, this);
    };

    module.exports = BasePage;

}());

