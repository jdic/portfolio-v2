## 🚀 Project Structure

```text
.
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── favicon.svg
│   └── logo.webp
├── README.md
├── src
│   ├── helpers
│   │   └── Formatter.astro
│   ├── layouts
│   │   └── index.astro
│   ├── lib
│   │   └── tw.ts
│   ├── modules
│   │   ├── common
│   │   │   └── components
│   │   │       ├── Accent.astro
│   │   │       ├── Badge.astro
│   │   │       ├── Bold.astro
│   │   │       ├── Italic.astro
│   │   │       ├── Link.astro
│   │   │       └── Underline.astro
│   │   ├── hero
│   │   │   ├── components
│   │   │   │   ├── hero-cta.astro
│   │   │   │   ├── hero-ctas.astro
│   │   │   │   ├── hero-heads.astro
│   │   │   │   └── hero-logo.astro
│   │   │   └── Hero.astro
│   │   ├── layout
│   │   │   ├── Page.astro
│   │   │   └── Section.astro
│   │   └── seo
│   │       └── SEO.astro
│   ├── pages
│   │   ├── es
│   │   │   └── index.mdx
│   │   ├── fr
│   │   │   └── index.mdx
│   │   ├── index.mdx
│   │   └── robots.txt.ts
│   └── types
│       └── global.ts
├── tailwind.config.mjs
└── tsconfig.json
```

## 🧞 Commands

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
