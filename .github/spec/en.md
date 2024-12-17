English | [简体中文](./zh.md)

# Development Specifications

To ensure project quality and maintainability, strict adherence is required.

## Directory Structure

Although this project is developed based on Next.js, the file organization avoids using its default recommended directory structure, as well as the common directory structure seen in other front-end projects.

Instead, a "modular" directory structure guided by domain-driven design principles is adopted, with some compatibility adaptations made according to the limitations of Next.js:

```
project/src
   ├── app
   │   └── ...
   ├── domain
   │   └── [domain-specific-module]
   │       ├── views
   │       │   ├── [detail-view]
   │       │   │   ├── [DetailViewComponent].js
   │       │   │   ├── ...
   │       │   │   └── index.js
   │       │   ├── [form-view]
   │       │   │   ├── [FormViewComponent].js
   │       │   │   ├── ...
   │       │   │   └── index.js
   │       │   └── [list-view]
   │       │       ├── [ListViewComponent].js
   │       │       ├── ...
   │       │       └── index.js
   │       ├── widgets
   │       │   └── [domain-specific-widget]
   │       │       └── ...
   │       ├── helper.js
   │       ├── index.js
   │       ├── model.js
   │       ├── repository.js
   │       └── ...
   ├── entry
   │   └── ...
   ├── shared
   │   └── ...
   └── ...
```

In this way, the importance of the [`app`](https://nextjs.org/docs/app) is greatly diminished, relegating it to a more straightforward role of URL and view routing, while the responsibilities of the other folders are as follows:

- `shared` - Scripts, styles, images, etc., that are unrelated to specific business or pages, essentially globally reusable;
- `domain` - Scripts, styles, images, etc., related to specific business, focusing on business logic processing and rendering of associated data, split by business domain;
- `entry` - Scripts, styles, images, etc., related to specific pages, focusing on pure page rendering and interaction.

As the entire project's directory structure is still under reconstruction, you will see folders in the `src` folder that are not listed above; when developing new features, it is important to avoid adding new content to legacy code and instead follow the directory structure outlined above.

**Before officially submitting code, please carefully review and understand the above directory structure.**

## File References

To avoid confusing dependency relationships and circular dependencies, there are restrictions on file references, with the basic rules being:

1. For folders `src/*`, use relative paths when the `*` parts are the same;
2. When different, use `@/*` for the `shared` folder, and `#/*` for others;
3. Use `public/*` for files under the `public` folder;
4. The "purity" order of `src/*` folders (excluding legacy directory structures) is `shared` > `domain` > `entry` > `app`, with "purer" folders prohibited from referencing "impurer" ones.

Detailed reference rules for `src/*` folders (excluding legacy directory structures) are as follows:

### `shared` Folder

| Permissible Folders | Reference Method |
| --- | --- |
| `public` | `public/*` |
| `shared` | Relative Path |

### `domain` Folder

| Permissible Folders | Reference Method |
| --- | --- |
| `public` | `public/*` |
| `shared` | `@/*` |
| `domain` | Relative Path |
| Others not `entry` and `app` | `#/*` |

### `entry` Folder

| Permissible Folders | Reference Method |
| --- | --- |
| `public` | `public/*` |
| `shared` | `@/*` |
| `entry` | Relative Path |
| Others not `app` | `#/*` |

### `app` Folder

| Permissible Folders | Reference Method |
| --- | --- |
| `public` | `public/*` |
| `shared` | `@/*` |
| `app` | Relative Path |
| Others | `#/*` |

## Coding Style

In the initial stage, there are no hard requirements, but it is necessary to maintain consistency with the existing code as much as possible.
