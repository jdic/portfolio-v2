export type FormatterRule =
{
  match: RegExp | string
  key: string
  component: any
}

export type CTA =
{
  label: string
  href: string
  icon?: string
}

export interface Hero
{
  title: string
  subtitle?: string
  CTA?: CTA[]
  image:
  {
    src: string
    alt: string
  }
}

export interface Page
{
  title: string
  description?: string
  favicon?: string
  keywords?: string[]
  class?: string
}

export interface GlobalData extends Page
{
  hero: Hero
}
