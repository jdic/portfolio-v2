export interface Page
{
  title: string
  description?: string
  favicon?: string
  keywords?: string[]
  class?: string
}

export interface GlobalData extends Page
{}
