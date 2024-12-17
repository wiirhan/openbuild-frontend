English | [简体中文](./zh.md)

# Getting Started

We're delighted to have you here!

You must be interested in contributing your intelligence to this project or learning necessary skills from the project's code, right?

Before you start making a difference, to ensure smooth participation and asynchronous collaboration, please read all the following content in order.

If you have seen and are familiar with them, you can skip:

- [Code of Conduct](https://openbuildxyz.github.io/eco/guides/code-of-conduct/)
- [Asynchrony Collaboration](https://github.com/openbuildxyz/.github/blob/main/docs/collaboration/en.md)
- [Environment Setup](#environment-setup)
- [Technology Stack](#technology-stack)
- [Development Spec](../spec/en.md)

Let's get started!

## Environment Setup

Ensure that your local Node.js version matches the one specified in the `engines` field of the `package.json` file.

Install dependencies using a package manager in the root directory, and it is recommended to use [pnpm](https://pnpm.io).

Execute `cp .env.example .env` or `cp .env.example .env.local` in the root directory to properly inject the environment variables needed for running the application:

| Variable Name | Purpose | Required |
| --- | --- | --- |
| `NEXT_PUBLIC_API_BASE_URL` |  | Yes |
| `NEXT_PUBLIC_APP_URL` |  | Yes |
| `NEXTAUTH_URL` |  | Yes |
| `NEXTAUTH_SECRET` |  | Yes |
| `NEXT_PUBLIC_GITHUB_ID` |  | When using GitHub account authorization |
| `NEXT_PUBLIC_GOOGLE_ID` |  | When using Google account authorization |
| `NEXT_PUBLIC_ASPECTA_ID` |  | When displaying data from [Aspecta](https://aspecta.id) |
| `NEXT_PUBLIC_GA_ID` |  | For traffic statistics |
| `NEXT_PUBLIC_GA_KEY` |  | - |

After setting the corresponding environment variables as needed, execute the `start` command in npm scripts (e.g., `pnpm start`) to start the application locally and begin debugging!

## Technology Stack

The entire project relies on [React](https://react.dev/), [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) as the underlying dependencies, and other libraries mainly used include:

- Utilities
  - [Lodash](https://lodash.com/)
  - [validator.js](https://github.com/validatorjs/validator.js)
  - [Nano ID](https://zelark.github.io/nano-id-cc/)
- Data handling
  - [React Redux](https://react-redux.js.org/)
  - [React Hook Form](https://www.react-hook-form.com/)
- UI
  - [Heroicons](https://heroicons.com/)
  - [Headless UI](https://headlessui.com/v1)
  - [daisyUI](https://daisyui.com/)
  - [styled-components](https://styled-components.com/)
  - [NextUI](https://nextui.org/)
  - [ByteMD](https://bytemd.js.org/)
  - [SurveyJS](https://surveyjs.io/)
- Animation
  - [aos](https://michalsnik.github.io/aos/)
  - [Animate.css](https://animate.style/)
  - [Framer Motion](https://www.framer.com/motion/)
- Web3
  - [RainbowKit](https://www.rainbowkit.com/)
  - [Wagmi](https://wagmi.sh/)
