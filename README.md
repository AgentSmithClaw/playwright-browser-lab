# playwright-browser-lab

一个最小可运行的 Playwright 浏览器自动化实验项目，用于快速验证并复用以下能力：

1. 打开网页
2. 截图
3. 点击
4. 输入

并作为后续接入 Clerk / 其他网页任务的基础入口。

---

## 目录结构

```text
playwright-browser-lab/
├─ test-flow.js            # 主验证脚本（4项动作）
├─ 01-open-page.png        # 打开网页后截图
├─ 02-click-input.png      # 点击+输入后截图
├─ package.json
├─ package-lock.json
└─ README.md
```

---

## 安装

在项目根目录执行：

```bash
cd playwright-browser-lab
npm install
npx playwright install chromium
```

> 已在当前环境验证通过（Chromium + Node.js）。

---

## 运行

```bash
node test-flow.js
```

预期输出：

```json
{
  "open": "ok",
  "screenshot": "ok",
  "click": "已点击",
  "input": "input:playwright input ok"
}
```

---

## 4项验证说明

### 1) 打开网页
- 脚本会打开 `https://example.com`
- 使用 `page.goto(..., { waitUntil: 'domcontentloaded' })`

### 2) 截图
- 首次截图输出：`01-open-page.png`
- 使用 `page.screenshot({ fullPage: true })`

### 3) 点击
- 脚本注入本地可控 HTML（按钮 + 输入框）
- 执行 `page.click('#btn')`
- 预期按钮文本变更为：`已点击`

### 4) 输入
- 执行 `page.fill('#ipt', 'playwright input ok')`
- 预期状态文本变更为：`input:playwright input ok`
- 二次截图输出：`02-click-input.png`

---

## 复用到 Clerk / 其他网页任务的入口

你可以基于 `test-flow.js` 直接扩展为真实站点自动化：

1. 把 `page.goto('https://example.com')` 换成目标站点（如 Clerk 页面）
2. 用目标站点选择器替换 `#btn` / `#ipt`
3. 按需增加：
   - 登录态（cookies/storageState）
   - 等待策略（`waitForSelector` / `waitForURL`）
   - 异常重试与截图留证

建议新增脚本：
- `clerk-login.js`：只做登录态验证
- `clerk-flow.js`：串联业务动作（打开→点击→输入→提交）
- `utils/`：统一放等待、截图、重试、日志函数

当前已提供起步脚本：`clerk-flow.js`

运行示例：
```bash
CLERK_EMAIL="you@example.com" CLERK_PASSWORD="***" node clerk-flow.js
```
会产出：
- `clerk-01-open.png`
- `clerk-02-after-login-attempt.png`

---

## 已完成基线

- 独立项目创建：✅
- 四项动作验证：✅
- 产物截图留存：✅
- Git 提交记录：✅
