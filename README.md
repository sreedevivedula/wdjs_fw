mifos_spec
==========

This repository is a test framework built to demonstrate WebDriverJS with the help of MIFOSX Application

How to install
==============

1. In the cloned repository, use the below commands to install the dependencies.

   ```
   $ npm install
   $ bower install
   ```

Pre-requisites
==============

1. The specs use a local installation of MIFOSX Application. Please see https://github.com/openMF/community-app#mifosx-community-app for details.
2. The specs require Selenium Server Standalone jar to be downloaded and the location provided where necessary. Please see [installation details](https://code.google.com/p/selenium/downloads/list).
3. Make sure the required Browser Driver binaries are downloaded and available in PATH where necessary.
	* [Chrome Driver Installation Details](http://code.google.com/p/selenium/wiki/ChromeDriver) 

Specs
================

The repo has three types of specs.

1. Specs that use WebDriverJS.

	These specs are present in [spec](spec) directory. The framework in this case uses only WebDriverJS.
	To run the tests, 
	* Open [DriverConfig.js](spec/onfig/DriverConfig.js) and 
	**	Specify the Selenium Server details on your machine
	**	Specify the browser you would wish to use
	* Open [AppConfig.js](spec/config/AppConfig.js) and 
	**	point to the locally installed MIFOSX application
	* Run the tests using
	**	```
	**	node_modules/mocha/bin/mocha --timeout 50000 spec/login
			
2. Specs that use Protractor.

3. Specs that use Cucumber.


Framework Details
=================

The framework consists of

* Page Objects (Abstractions of UI Pages)
* Specs (Specification files written using Mocha)
* Config Objects
* Test Data Objects

Pages
=====

Pages are abstractions of UI Pages

Specs
=====

Config Objects
==============

Test Data Objects
=================
