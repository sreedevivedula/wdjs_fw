/*jslint node: true */
/*global driver: false */
/*global by: false */


(function () {
    'use strict';

    var BasePage = require('./BasePage'),
        homepage = require('./HomePage'),
        loginpage;

    loginpage = new BasePage();

    loginpage = loginpage.extend({

        // Page Elements
        invalidLoginError: element(by.css("label.error")),

        // Page Services
        go : function () {
            browser.get(this.appConfig.baseURL);
        },

        validLogin: function (username, password) {
            element(by.id("uid")).sendKeys(username);
            element(by.id("pwd")).sendKeys(password);
            element(by.id("login-button")).click();
            return homepage;
        },

        invalidLogin: function (username, password) {
            element(by.id("uid")).sendKeys(username);
            element(by.id("pwd")).sendKeys(password);
            element(by.id("login-button")).click();
            return this;
        }

    });

    module.exports = loginpage;

}());

