import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { EventContent, EventFrontmatter } from "./types"

const eventsDir = path.join(process.cwd(), "content", "events")

function parseEventFile(filename: string): EventContent | null {
  const filePath = path.join(eventsDir, filename)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)
  const frontmatter = data as EventFrontmatter

  return {
    frontmatter,
    content,
    slug: frontmatter.slug || filename.replace(/\.mdx$/, ""),
  }
}

export function getAllEvents(): EventContent[] {
  if (!fs.existsSync(eventsDir)) return []

  const files = fs.readdirSync(eventsDir).filter((f) => f.endsWith(".mdx"))

  const events = files
    .map(parseEventFile)
    .filter((e): e is EventContent => e !== null)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  return events
}

export function getEventBySlug(slug: string): EventContent | null {
  const filePath = path.join(eventsDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  return parseEventFile(`${slug}.mdx`)
}

export function getFeaturedEvent(): EventContent | null {
  const events = getAllEvents()
  return events.find((e) => e.frontmatter.featured) ?? events[0] ?? null
}

export function getUpcomingEvents(): EventContent[] {
  const now = new Date()
  return getAllEvents().filter((e) => new Date(e.frontmatter.date) >= now)
}

export function getPastEvents(): EventContent[] {
  const now = new Date()
  return getAllEvents().filter((e) => new Date(e.frontmatter.date) < now)
}
