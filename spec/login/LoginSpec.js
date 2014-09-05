/*jslint node: true*/

var loginpage = require('../pages/LoginPage'),
    homepage = require('../pages/HomePage'),
    test = require("selenium-webdriver/testing"),
    logindata = require('../data/LoginData'),
    expect = require('chai').use(require('chai-as-promised')).expect;


test.describe("MIFOSX Login Page", function() {
    'use strict';

    test.beforeEach("Open Login Page", function() {
        loginpage.go();
    });

    test.it("Should login admin user", function() {
        loginpage.validLogin(logindata.adminUsername,
                             logindata.adminPassword);
        expect(homepage.isDisplayed()).to.eventually.equal(true);
    });

    test.it("Should throw an error with invalid credentials", function() {
        loginpage.invalidLogin(logindata.invalidUsername,
                               logindata.invalidPassword);
        expect(loginpage.invalidLoginError.isDisplayed()).to.
            eventually.equal(true);
    });

    test.afterEach("Logout", function() {
        homepage.isDisplayed().then(function(result) {
            if (result) {
                homepage.navbar.userDropDown.logout() ;
            }
        });
    });
});