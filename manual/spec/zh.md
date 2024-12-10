[English](./en.md) | 简体中文

# 开发规范

为保证项目质量和可维护性，需严格遵守。

## 目录结构

源码相关的以《[聊聊中后台前端应用：目录结构划分模式](https://ourai.ws/posts/patterns-of-directory-structure-in-frontend-projects/)》中提到的「模块化」模式为基础，根据 Next.js 的限制进行些许兼容适配：

```
project/src
   ├── app
   │   └── ...
   ├── domain
   │   └── [domain-specific-module]
   │       ├── views
   │       │   ├── [detail-view]
   │       │   │   ├── [DetailViewComponent].tsx
   │       │   │   ├── ...
   │       │   │   └── style.scss
   │       │   ├── [form-view]
   │       │   │   ├── [FormViewComponent].tsx
   │       │   │   ├── ...
   │       │   │   └── style.scss
   │       │   └── [list-view]
   │       │       ├── [ListViewComponent].tsx
   │       │       ├── ...
   │       │       └── style.scss
   │       ├── widgets
   │       │   └── [domain-specific-widget]
   │       │       └── ...
   │       ├── helper.ts
   │       ├── index.ts
   │       ├── model.ts
   │       ├── repository.ts
   │       └── ...
   ├── shared
   │   └── ...
   └── ...
```

其中，`app` 取代了 `entry` 文件夹作为页面渲染的入口。

## 文件引用

在文件引用层面有所限制：

- `shared` 文件夹下的文件不可引用除 `public` 之外的任何其他外部文件夹下的文件；
- `domain` 文件夹下的文件仅可引用 `public`、`shared` 和其他 `domain` 文件夹下的文件；
- `app` 文件夹下的文件可引用 `public`、`shared`、`domain` 及同文件夹下的文件。

使用 `@/*` 引用 `shared` 下的文件。

## 扩展阅读

- [「反混沌」前端工程](https://ntks.ourai.ws/)
