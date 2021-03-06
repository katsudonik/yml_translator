var casper = require("casper").create({
    verbose: true,
    logLevel: 'debug',
    pageSettings: {
        loadImages:  true,
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36'
    }
});

// affiliate amazon top
casper.start('https://translate.google.co.jp/', function() {
    var ja = '���{��';
    this.sendKeys('#source', ja, {reset: true});
    this.capture('big-google.png');
    this.wait(1000, function() {
        console.log(this.getHTML('#result_box', true));
        this.capture('big-google2.png');
    });
});

casper.run();
