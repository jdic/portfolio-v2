## 🚀 Project Structure

```text
/
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── lib
│   │   └── tw.ts
│   ├── modules
│   │   ├── layout
│   │   │   └── Page.astro
│   │   └── seo
│   │       └── SEO.astro
│   └── pages
│       ├── index.astro
│       └── robots.txt.ts
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
