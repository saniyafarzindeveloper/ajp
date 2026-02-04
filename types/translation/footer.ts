export type FooterLink = {
  label: string
  href: string
}

export type FooterSection = {
  title: string
  links: FooterLink[]
}

export type FooterTranslations = {
  description: string
  address: string
  sections: FooterSection[]
  copyright: string
  developedBy: string
}
