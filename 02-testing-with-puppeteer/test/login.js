const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  try {
    await page.goto("http://localhost:8000");
    await page.waitForSelector(`#fname`, {timeout, visible: true});

    await page.type(`#email`, "your email");
    await page.type(`#password`, "your password");

    await page.screenshot({path: "./login.png", fullPage: true});

    await Promise.all([
      page.click(`input[name="loginSubmit"]`),
      page.waitForNavigation()
    ])

    const url = await page.url();
    if (url !== `http://localhost:8000/login`) {
      throw new Error(`The URL was not http://localhost:8000/login`);
    }
    console.log(url);
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
})();
