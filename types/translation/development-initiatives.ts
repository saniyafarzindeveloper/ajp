export type DevelopmentInitiativeItem = {
  title: string
  desc: string
  color: "orange" | "green" | "yellow"
  image: string
  focusPoints: string[]
}

export type DevelopmentInitiativesTranslations = {
  hero: {
    title: string
    description: string
  }
  intro: {
    title: string
    description: string
  }
  initiatives: DevelopmentInitiativeItem[]
}
