const { chromium } = require('playwright');

/**
 * Clerk automation skeleton
 *
 * Usage:
 *   CLERK_EMAIL="you@example.com" CLERK_PASSWORD="***" node clerk-flow.js
 *
 * Notes:
 * - This is a starter skeleton for real-site automation.
 * - Google OAuth / 2FA / CAPTCHA may require manual intervention.
 */

const CLERK_URL = process.env.CLERK_URL || 'https://dashboard.clerk.com/';
const EMAIL = process.env.CLERK_EMAIL || '';
const PASSWORD = process.env.CLERK_PASSWORD || '';

async function safeScreenshot(page, name) {
  await page.screenshot({ path: name, fullPage: true });
}

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto(CLERK_URL, { waitUntil: 'domcontentloaded' });
    await safeScreenshot(page, 'clerk-01-open.png');

    // Optional: direct email login flow (selectors may vary by locale/version)
    if (EMAIL && PASSWORD) {
      const emailInput = page.locator('input[type="email"], input[name*="email" i]').first();
      if (await emailInput.count()) {
        await emailInput.fill(EMAIL);
      }

      const passInput = page.locator('input[type="password"], input[name*="password" i]').first();
      if (await passInput.count()) {
        await passInput.fill(PASSWORD);
      }

      const submitBtn = page
        .locator('button:has-text("Continue"), button:has-text("Sign in"), button[type="submit"]')
        .first();
      if (await submitBtn.count()) {
        await submitBtn.click();
      }
    }

    await page.waitForTimeout(3000);
    await safeScreenshot(page, 'clerk-02-after-login-attempt.png');

    console.log('clerk-flow skeleton executed. Check screenshots and continue selector tuning.');
  } catch (err) {
    console.error('clerk-flow failed:', err.message);
    await safeScreenshot(page, 'clerk-error.png');
    process.exitCode = 1;
  } finally {
    // keep browser for manual inspection if needed
    // await browser.close();
  }
})();
