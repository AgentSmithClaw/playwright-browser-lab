# 🧪 playwright-browser-lab

<div align="center">

[![Runtime](https://img.shields.io/badge/runtime-Node.js-339933.svg)](#)
[![Browser](https://img.shields.io/badge/browser-Playwright-45ba63.svg)](https://playwright.dev/)
[![Type](https://img.shields.io/badge/type-Browser%20Automation%20Lab-2563eb.svg)](#)

**一个用于验证浏览器自动化基础能力的最小实验项目**

把打开网页、截图、点击、输入和真实站点起步脚手架整理成一套可快速复用的浏览器自动化入口。

</div>

---

## 📖 项目简介

`playwright-browser-lab` 是一个聚焦 **浏览器自动化基线验证** 的实验项目。

很多自动化脚本失败，不是因为业务逻辑复杂，而是因为最基础的能力没有先跑通：

- 页面是否能稳定打开
- 截图是否正常输出
- 点击和输入是否可靠执行
- 真实站点的选择器是否容易漂移
- 登录态、等待策略、报错留证是否有最小模板

这个项目的目标，就是先用一个 **最小可运行实验** 把浏览器自动化的基础能力验证清楚，再把它作为后续 Clerk 或其他网页任务的起点。

---

## ✨ 功能特性

- 🌐 **页面打开验证** - 最小脚本先验证浏览器能稳定启动并访问页面
- 📸 **截图留证** - 对关键步骤自动输出截图，方便排查环境问题
- 🖱️ **点击动作验证** - 在本地可控 DOM 中验证点击事件是否成功
- ⌨️ **输入动作验证** - 验证输入框填充与状态回写
- 🧪 **确定性实验流** - 通过 `test-flow.js` 构造稳定可复现的最小流程
- 🔐 **真实站点脚手架** - 提供 `clerk-flow.js` 作为登录与选择器调试起点
- 🛠️ **适合快速扩展** - 可继续扩展 storageState、等待策略、异常重试等通用能力

---

## 🎯 适用场景

- 本地验证 Playwright 是否可用
- 新站点自动化前的环境冒烟测试
- Clerk 等登录流程的脚手架搭建
- 浏览器自动化学习与最小实验复用

---

## 📁 目录结构

```bash
playwright-browser-lab/
├── test-flow.js               # 最小四步验证脚本
├── clerk-flow.js              # Clerk 真实站点自动化起步脚本
├── docs/
│   └── next-shadcn-dashboard-starter-deploy-log.md
├── package.json
├── package-lock.json
└── README.md
```

---

## 🛠️ 技术栈

| 模块 | 技术 |
|------|------|
| 运行时 | Node.js |
| 浏览器自动化 | Playwright |
| 输出产物 | PNG 截图 |
| 目标类型 | 静态页验证 + 真实站点脚手架 |

---

## 🧱 当前已实现内容

### 第一阶段（已完成）
- [x] 最小浏览器启动验证
- [x] 打开页面、截图、点击、输入四项动作验证
- [x] 关键步骤截图落盘
- [x] Clerk 登录流起步脚手架
- [x] 环境变量驱动的登录参数输入

### 当前 MVP 能力
- 用一个脚本快速验证 Playwright 环境是否正常
- 用另一个脚本对真实站点做选择器和登录流探索
- 将自动化过程中的关键节点保存为截图，便于排错

---

## 🚀 快速开始

### 1）安装依赖

```bash
git clone https://github.com/AgentSmithClaw/playwright-browser-lab.git
cd playwright-browser-lab

npm install
npx playwright install chromium
```

### 2）运行最小验证脚本

```bash
node test-flow.js
```

预期会输出四项动作结果，并生成：

- `01-open-page.png`
- `02-click-input.png`

### 3）运行 Clerk 脚手架

```bash
CLERK_EMAIL="you@example.com" \
CLERK_PASSWORD="your_password" \
node clerk-flow.js
```

预期会生成：

- `clerk-01-open.png`
- `clerk-02-after-login-attempt.png`

---

## 🗺️ 路线图

### 第二阶段（进行中）
- [ ] 抽取通用等待、截图和重试工具
- [ ] 增加 storageState / cookies 复用能力
- [ ] 提升真实站点登录流的稳定性
- [ ] 补充更多自动化实验样例

### 第三阶段（规划中）
- [ ] 扩展成可复用的浏览器任务模板库
- [ ] 增加统一日志与错误快照机制
- [ ] 支持更多业务站点的起步脚本
- [ ] 作为更复杂自动化项目的公共实验底座

---

## 💡 项目方向

这个项目不是大型测试框架，而是一个偏 **自动化实验底座** 的最小实验室。

核心想表达的能力包括：

- 先把最小能力验证清楚，再进入真实业务流程
- 用截图和可控页面降低自动化排错成本
- 为后续登录流、表单流、后台任务流提供可靠起点
- 让浏览器自动化从一次性脚本变成可复用资产

---

## 📌 当前状态

当前已经具备 **最小可运行基线**，可以快速验证 Playwright 环境、动作执行和真实站点起步流。  
下一步重点，是把它进一步抽象成更稳的浏览器任务模板。

---

<div align="center">

Made for browser automation baselines, selector tuning, and reproducible Playwright experiments.

</div>
