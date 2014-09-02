exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['login/LoginSpec.js'],
    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }]
}