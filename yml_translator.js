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
    var ja = '‘—‚é';
    this.sendKeys('#source', ja, {reset: true});
    this.wait(1000, function() {
        this.echo(this.getHTML('#result_box'));
    });
});

casper.run();
