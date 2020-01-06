const puppeteer = require("puppeteer");
const { Movies } = require("../mongodb/index.js");
const url =
    "https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0";
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
    const result = await page.evaluate(x => {
        const $ = window.$;

        console.log(123);
        let data = [];
        let elements = $(".list-wp .list .item");

        elements.each(function(i, item) {
            let _cur = $(this);
            let url = _cur.attr("href");
            let img = _cur.find("img").attr("src");
            let name = _cur
                .find("p")
                .contents()
                .filter(function(index, content) {
                    return content.nodeType === 3;
                })
                .text()
                .trim()
                .replace(/\s/g, "");

            data.push({
                name: name,
                url: url,
                img: img
            });
        });

        console.log("elements===>", data);

        return data;

        // data.map(item => {
        //     const movie = new Movies({
        //         ...item,
        //         date: new Date()
        //     });
        //     movie.save();
        // });
    });

    console.log("======>>>>result", result);
    result.map(item => {
        const movie = new Movies({
            ...item,
            date: new Date()
        });
        movie.save();
    });

    // await page.screenshot({ path: "example.png" });

    // await browser.close();
})();
