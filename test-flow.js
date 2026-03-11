const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // 1) 打开网页
  await page.goto('https://example.com', { waitUntil: 'domcontentloaded' });

  // 2) 截图
  await page.screenshot({ path: path.join(__dirname, '01-open-page.png'), fullPage: true });

  // 3) 点击（使用本地可控页面确保稳定）
  await page.setContent(`
    <button id="btn">未点击</button>
    <input id="ipt" placeholder="请输入" />
    <div id="status"></div>
    <script>
      const btn = document.getElementById('btn');
      const status = document.getElementById('status');
      btn.addEventListener('click', () => {
        btn.textContent = '已点击';
        status.textContent = 'click-ok';
      });
      const ipt = document.getElementById('ipt');
      ipt.addEventListener('input', () => {
        status.textContent = 'input:' + ipt.value;
      });
    </script>
  `);

  await page.click('#btn');

  // 4) 输入
  await page.fill('#ipt', 'playwright input ok');

  await page.screenshot({ path: path.join(__dirname, '02-click-input.png'), fullPage: true });

  const btnText = await page.textContent('#btn');
  const status = await page.textContent('#status');

  console.log(JSON.stringify({
    open: 'ok',
    screenshot: 'ok',
    click: btnText,
    input: status
  }, null, 2));

  await browser.close();
})();
