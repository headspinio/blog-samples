const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const timeout = 5000;
  page.setDefaultTimeout(timeout);

  try {
    await page.goto("http://localhost:8000");
    await page.waitForSelector(`#fname`, {timeout, visible: true});

    await page.type(`#fname`, "<your first name>");
    await page.type(`#lname`, "<your last name>");

    await Promise.all([
      page.click(`input[name="nameSubmit"]`),
      page.waitForNavigation()
    ])

    const url = await page.url();
    if (url !== `http://localhost:8000/fill-form`) {
      throw new Error(`The URL was not http://localhost:8000/fill-form`);
    }
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
})();
