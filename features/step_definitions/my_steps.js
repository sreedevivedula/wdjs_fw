var expect = require('chai').use(require('chai-as-promised')).expect,
 loginpage = require("../../spec/pages/LoginPage.js"),
 homepage = require("../../spec/pages/HomePage.js"),
 webdriver = require("selenium-webdriver"),
 flow = webdriver.promise.controlFlow();

var myStepDefinitionsWrapper = function () {
    this.Given(/^I m on login page$/, function (callback) {

        flow.execute(function(){
            loginpage.go();
            callback();
        });
    });

    this.When(/^I enter login credentials$/, function (callback) {
        flow.execute(function(){
            loginpage.validLogin("mifos","password");
            callback();
        });

    });

    this.Then(/^I should be able to see home page$/, function (callback) {
        flow.execute(function(){
            expect(homepage.isDisplayed()).to.eventually.equal(true);
            callback();
        });

    });

    this.When(/^I enter login credentials as "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, callback) {
        flow.execute(function(){
            loginpage.validLogin(arg1,arg2);
            callback();
        });
    });


    this.Then(/^I should see Invalid Login Error$/, function (callback) {
        flow.execute(function(){
            expect(loginpage.invalidLoginError.isDisplayed()).to.
                eventually.equal(true);
            callback();
        });
    });

    this.When(/^I enter Invalid credentials as "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, callback) {
        flow.execute(function(){
            loginpage.invalidLogin(arg1,arg2);
            callback();
        });
    });
};

module.exports = myStepDefinitionsWrapper;
