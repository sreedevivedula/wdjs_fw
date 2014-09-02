/*jslint node: true */

(function () {
    'use strict';

    var webdriver = require('selenium-webdriver'),
        SeleniumServer = require('selenium-webdriver/remote').SeleniumServer,
        server,
        driver,
        driverConfig;

//    server = new SeleniumServer("/Users/sreedevi/Downloads/" +
//            "selenium-server-standalone-2.42.2.jar",
//        {port: 4444});
//    server.start();

    driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();

    driver.manage().window().maximize();

    driverConfig = {

        driver: driver,
        by: webdriver.By

    };

    module.exports = driverConfig;

}());