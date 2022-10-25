const puppeteer = require('puppeteer');
const url = 'https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/7c1ef52f3fea49d1944b266772379e52/8c35e153a217424de10000000a174cb4.html?locale=en-US';

(async () => {
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto(url);

   await page.waitForSelector('.entry');

    /*
    naslov = await page.evaluate(() => {
        return document.querySelector("#topic-title").textContent.trim();
    });

    console.log(naslov);
    */

    console.log('test 1');
   const data = await page.evaluate(() => {
        const rezultat = [];
        const tabela = document.querySelector('.tbody');

        for(let row of tabela.rows) {
            const vrstica = row.cells;

            let vmesnaVrstica = [];

            for(let i = 0; i < vrstica.length; i++) {
                vmesnaVrstica.push(vrstica[i].innerText);
            }

            rezultat.push(vmesnaVrstica);
        }

        return rezultat;
   });

   console.log(data);


   await browser.close();
})();
