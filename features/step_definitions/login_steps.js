var myStepDefinitionsWrapper = function () {
    this.Given(/^I am on Login Page$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;