import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { compileMDX } from "next-mdx-remote/rsc"
import { getEventBySlug, getUpcomingEvents, getPastEvents } from "@/lib/events/utils"
import { Heading } from "@/components/ui/heading"
import { Button } from "@/components/ui/button"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const { getAllEvents } = await import("@/lib/events/utils")
  return getAllEvents().map((event) => ({ slug: event.slug }))
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = getEventBySlug(slug)

  if (!event) notFound()

  const { frontmatter, content } = event

  const { content: renderedContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  })

  const upcoming = getUpcomingEvents().filter((e) => e.slug !== slug).slice(0, 3)
  const past = getPastEvents().filter((e) => e.slug !== slug).slice(0, 3)
  const related = upcoming.length >= 3 ? upcoming : [...upcoming, ...past].slice(0, 3)

  return (
    <main className="bg-bg">
      <article>
        {frontmatter.cover && (
          <div className="relative h-[50vh] min-h-[320px] w-full overflow-hidden">
            <Image
              src={frontmatter.cover}
              alt={frontmatter.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}

        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className={frontmatter.cover ? "-mt-24 relative z-10" : "pt-16"}>
            <div className="rounded-2xl bg-surface p-8 shadow-sm sm:p-12">
              <div className="flex flex-wrap items-center gap-3 text-lg text-muted-fg">
                <span>{format(new Date(frontmatter.date), "EEEE, MMMM dd, yyyy")}</span>
                <span aria-hidden="true">·</span>
                <span>{frontmatter.location}</span>
              </div>

              <Heading tag="h1" className="mt-4">
                {frontmatter.title}
              </Heading>

              <p className="mt-4 text-lg leading-relaxed text-muted-fg max-w-2xl">{frontmatter.excerpt}</p>

              {frontmatter.registrationUrl && (
                <div className="mt-8">
                  <Button
                    variant="primary"
                    color="#a05a28"
                    href={frontmatter.registrationUrl}
                  >
                    Register Now
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 prose prose-neutral max-w-none">
            {renderedContent}
          </div>

          {frontmatter.gallery && frontmatter.gallery.length > 0 && (
            <section className="mt-16">
              <Heading tag="h2" className="mb-8">
                Gallery
              </Heading>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {frontmatter.gallery.map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={src}
                      alt={`${frontmatter.title} gallery image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-7xl px-4 pb-24 sm:px-6">
          <Heading tag="h2" className="mb-8">
            More Events
          </Heading>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((e) => (
              <Link
                key={e.slug}
                href={`/events/${e.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-md"
              >
                {e.frontmatter.cover && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={e.frontmatter.cover}
                      alt={e.frontmatter.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="mb-2 text-xs uppercase tracking-wider text-muted-fg">
                    {format(new Date(e.frontmatter.date), "MMM dd, yyyy")}
                  </div>
                  <h3 className="font-serif text-xl text-fg">{e.frontmatter.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
