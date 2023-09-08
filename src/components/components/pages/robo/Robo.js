import { Chromium, webkit } from 'playwright'

(async ()=>{
    const browser = await webkit.launch({
        headless: false
    })

    const page = await browser.newPage()

    await page.goto('https://www.greenhousetips.com.br/')

    await page.waitForTimeout(1500)

    await page.screenshot({ patch: './greenHouse.png' })

})();