export interface EventFrontmatter {
  title: string
  slug: string
  date: string
  location: string
  cover: string
  gallery: string[]
  registrationUrl?: string
  featured?: boolean
  status?: "upcoming" | "past"
  excerpt: string
}

export interface EventContent {
  frontmatter: EventFrontmatter
  content: string
  slug: string
}

export type EventStatus = "upcoming" | "past"
