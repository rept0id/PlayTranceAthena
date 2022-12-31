const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    try {
        await driver.get('https://player.magicstreams.gr/radio/tranceathena/');
        await driver.sleep(5000);
        /*await driver.executeScript("document.querySelector('#flashradioplaybutton').click();").then(function () {
            //do nothing
        });*/
        await driver.findElement(By.id('flashradioplaybutton')).click();
    } finally {
        //do nothing
    }
})();