import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'

type PageProps = {
  params: { book: string; chapter: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

const chapterQuery = groq`
  *[_type == "chapter" && slug.current == $chapterSlug && book->slug.current == $bookSlug][0]{
    title,
    body,
    order,
    "slug": slug.current,
    book->{
      title,
      "slug": slug.current
    }
  }
`

const nextChapterQuery = groq`
  *[_type == "chapter" && book->slug.current == $bookSlug && order == $nextOrder][0]{
    title,
    "slug": slug.current
  }
`

export default async function ChapterPage({ params, searchParams }: PageProps) {
  const { book: bookSlug, chapter: chapterSlug } = params

  const currentPage = parseInt(
    typeof searchParams?.page === 'string' ? searchParams.page : '1',
    10
  )

  const blocksPerPage = 20
  const start = (currentPage - 1) * blocksPerPage
  const end = start + blocksPerPage

  const chapter = await client.fetch(chapterQuery, {
    bookSlug,
    chapterSlug,
  })

  if (!chapter) return notFound()

  const totalPages = Math.ceil(chapter.body.length / blocksPerPage)
  const pageContent = chapter.body.slice(start, end)

  const nextChapter =
    currentPage === totalPages
      ? await client.fetch(nextChapterQuery, {
          bookSlug,
          nextOrder: chapter.order + 1,
        })
      : null

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 pb-32">
      <h1 className="text-3xl font-bold mb-2">{chapter.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        Bok: <span className="italic">{chapter.book.title}</span>
      </p>

      <PortableText value={pageContent} />

      {/* Pagination Footer */}
      <div className="flex justify-between items-center mt-10 fixed bottom-0 left-0 right-0 p-4 bg-black border-t-2 border-orange-400">
        {/* Previous page */}
        {currentPage > 1 ? (
          <a
            href={`?page=${currentPage - 1}`}
            className="text-orange-400 hover:underline text-xs"
          >
            ← Föregående sida
          </a>
        ) : (
          <div />
        )}

        {/* Page info */}
        <div className="flex flex-col text-sm text-gray-500 text-center">
          Sida {currentPage} av {totalPages}
          <span className="text-xs">{chapter.title}</span>
        </div>

        {/* Next page or next chapter */}
        {currentPage < totalPages ? (
          <a
            href={`?page=${currentPage + 1}`}
            className="text-orange-400 hover:underline text-xs"
          >
            Nästa sida →
          </a>
        ) : nextChapter ? (
          <a
            href={`/books/${bookSlug}/${nextChapter.slug}`}
            className="text-orange-400 hover:underline text-xs"
          >
            Nästa kapitel → ({nextChapter.title})
          </a>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}