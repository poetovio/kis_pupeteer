const puppeteer = require('puppeteer');
const url = '';

async function zagon() {
    let browser;

    try {
        browser = await puppeteer.launch({
            headless: false,
            args: ["--disale-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        });
    } catch(err) {
        console.err(err);
    }
    return browser;
}

module.exports = {
    zagon
};