/**
* Created by sramalin on 02/09/14.
*/
var expect = require('chai').use(require('chai-as-promised')).expect,
    loginpage = require("../../spec/pages/LoginPage.js"),
    homepage = require("../../spec/pages/HomePage.js"),
    webdriver = require("selenium-webdriver"),
    flow = webdriver.promise.controlFlow();
var loginpage = require("../../spec/pages/LoginPage.js");

var myHooks = function () {
    this.Before(function (callback) {
        flow.execute(function(){
            loginpage.go();
            callback();
        });

    });

    this.After(function (callback) {
        flow.execute(function(){
            loginpage.close();
            callback();
        });

    });
};

module.exports = myHooks;