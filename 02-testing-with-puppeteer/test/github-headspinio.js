const puppeteer = require('puppeteer');
(async () => {
  // Local browser directly
  // const browser = await puppeteer.launch({headless: false});
  // Attach to the remote browser via hs connect
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
    await page.screenshot({path: "./github-headspinio.png", fullPage: true});

    const repoTab = await page.$(`a[href$="/orgs/headspinio/repositories"]`);
    await repoTab.click();
    await page.waitForNavigation();

    const placeholder = await page.$eval(`[id="your-repos-filter"]`, el => el.getAttribute("placeholder"))
    if (placeholder !== "Find a repository…") {
      throw new Error(`The search placeholder was not 'Find a repository…'. Actual: ${placeholder}`);
    }
    await page.screenshot({path: "./github-headspinio-repos.png", fullPage: true});

    const imgSrc = await page.$eval(`img[alt="@headspinio"]`, async (el) => await el.getAttribute("src"));
    if (!imgSrc.startsWith("https://avatars.githubusercontent.com")) {
      throw new Error(`The image was not an avatar image`);
    }
  } catch (err) {
    console.log(err);
  } finally {
    // Close the local browser
    // await browser.close();

    // Close and disconnect the remote page and browser
    await page.close();
    await browser.disconnect();
  }
})();
