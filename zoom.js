const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForSelector('text=Dapet');
  await page.waitForTimeout(500);
  const el = await page.$('.hero-visual .phone-stage');
  await el.screenshot({ path: 'phone-zoom.png' });

  await page.evaluate(() => document.getElementById('showcase').scrollIntoView());
  await page.waitForTimeout(900);
  await page.screenshot({ path: 'showcase-v3.png' });
  await browser.close();
})();
