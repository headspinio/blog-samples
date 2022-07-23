const puppeteer = require('puppeteer');
(async () => {
  // const browser = await puppeteer.launch({headless: false});
  const browser = await puppeteer.connect({browserURL: `http://localhost:9222`});
  const page = await browser.newPage();

  try {
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    await page.goto("https://github.com/headspinio");

    const url = await page.url();
    if (url !== `https://github.com/headspinio`) {
      throw new Error(`The URL was not https://github.com/headspinio`);
    }
  } catch (err) {
    console.log(err);
  } finally {
    // await browser.close();
    await page.close();
    await browser.disconnect();
  }
})();
