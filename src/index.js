const puppeteer = require("puppeteer");
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

    // let a = await page.$(".row > li");
    // console.log(a);

    // 1. 获取测试单元的元素
    const list = await page.$(".list-wp .list");

    // 若页面没有timeSwitch, 则不用进行测试
    // if (!timeSwitch) return;

    // 2. time switch的切换按钮
    const tags = await list.$$(".item");

    console.log(tags);
    for (var i = 0; i < tags.length; i++) {
        // console.log(tags[i]);
        await tags[i].click();

        await page.waitFor(3000);
        await page.goBack();
    }

    // const result = await page.evaluate(x => {
    //     let data = [];
    //     let elements = document.querySelectorAll(".list-wp .list .item");

    //     elements.forEach(item => {
    //         // console.log(item);
    //         let name = item.getElementsByTagName("p")[0];

    //         console.log(name.childNodes[0]);

    //         data.push({
    //             name: String(name.childNodes[0].textContent).trim(),
    //             num: String(name.childNodes[1].innerHTML).trim()
    //         });

    //         // page.$x
    //         // let title = item.
    //     });
    //     return data;
    //     console.log(data);
    // });

    // console.log("======>>>>result", result);

    // await page.screenshot({ path: "example.png" });

    // await browser.close();
})();
