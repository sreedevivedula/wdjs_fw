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
        get invalidLoginError() {
            return driver.findElement(by.css("label.error"));
        },

        // Page Services
        go : function () {
            driver.get(this.appConfig.baseURL);
        },

        waitForLoad: function () {
            loginpage.waitForElement(by.id("uid"));
        },

        validLogin: function (username, password) {
            this.waitForLoad();
            driver.findElement(by.id("uid")).sendKeys(username);
            driver.findElement(by.id("pwd")).sendKeys(password);
            driver.findElement(by.id("login-button")).click();
            homepage.waitForLoad();
            return homepage;
        },

        invalidLogin: function (username, password) {
            this.waitForLoad();
            driver.findElement(by.id("uid")).sendKeys(username);
            driver.findElement(by.id("pwd")).sendKeys(password);
            driver.findElement(by.id("login-button")).click();
            this.waitForLoad();
            return this;
        }

    });

    module.exports = loginpage;

}());

