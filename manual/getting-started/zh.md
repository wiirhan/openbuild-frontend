[English](./en.md) | 简体中文

# 引子

很高兴你能出现在这里！想必一定是对为本项目贡献聪明才智或从项目代码中学到必要能力而感兴趣，对吧？

在开始大展身手之前，为保证能顺利地参与共建及异步协作，请按顺序通读下列所有内容，已看过并熟悉了解的可跳过：

- [行为规范](#行为规范)
- [环境准备](#环境准备)
- [技术栈](#技术栈)
- [开发规范](../spec/zh.md)

来让我们开始吧！

## 行为规范

沿用 OpenBuild 生态行为规范（待写）。

## 环境准备

确保本地 Node.js 版本号符合 [`package.json`](../../package.json) 中 `engines` 字段所指定的，在根目录用包管理器安装依赖，建议使用 [pnpm](https://pnpm.io)。

在根目录执行 `cp .env.example .env` 或 `cp .env.example .env.local` 以使运行应用所需环境变量能够正常注入：

| 变量名 | 作用 | 是否必需 |
| --- | --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` |  | 是 |
| `NEXT_PUBLIC_APP_URL` |  | 是 |
| `NEXTAUTH_URL` |  | 是 |
| `NEXTAUTH_SECRET` |  | 是 |
| `NEXT_PUBLIC_GITHUB_ID` |  | 用 GitHub 账号授权时 |
| `NEXT_PUBLIC_GOOGLE_ID` |  | 用 Google 账号授权时 |
| `NEXT_PUBLIC_ASPECTA_ID` |  | 展示 [Aspecta](https://aspecta.id) 的数据时 |
| `NEXT_PUBLIC_GA_ID` |  | 做流量统计时 |
| `NEXT_PUBLIC_GA_KEY` |  | - |

根据需要正确设置相应环境变量后，执行 npm scripts 中的 `start` 命令（如 `pnpm start`），即可在本地启动应用开始调试啦！

## 技术栈
