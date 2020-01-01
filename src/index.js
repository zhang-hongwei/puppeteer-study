const puppeteer = require("puppeteer");
const url = "http://books.toscrape.com/";
(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        timeout: 10000000
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1300,
        height: 938
    });

    await page.goto(url);
    await page.waitFor(1000);

    // let a = await page.$(".row > li");
    // console.log(a);
    const result = await page.evaluate(x => {
        let data = []
        let elements = document.querySelectorAll(".product_pod");
        console.log("elements===> ", elements);
        elements.forEach(item => {
            console.log(item);
            let title = item.
        });
    });

    // await page.screenshot({ path: "example.png" });

    // await browser.close();
})();
