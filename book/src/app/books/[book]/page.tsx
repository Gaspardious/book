import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

// Define our route params as a plain object (not a Promise)
type Params = {
  params: ({ book: string } & { then?: never })
}

type Chapter = {
  title: string
  slug: string
  order: number
}

type Book = {
  title: string
  description: string
  slug: string
  coverImage?: {
    asset: {
      url: string
    }
  }
  chapters: Chapter[]
}

// GROQ query to fetch a book and its chapters by slug
const bookQuery = groq`
  *[_type == "book" && slug.current == $slug][0]{
    title,
    description,
    coverImage {
      asset->{
        url
      }
    },
    "slug": slug.current,
    chapters[]->{
      title,
      "slug": slug.current,
      order
    }
  }
`

export default async function BookPage({ params }: Params) {
  // Destructure the 'book' slug from params
  const { book } = params

  const bookData: Book | null = await client.fetch(bookQuery, { slug: book })

  if (!bookData) return <div>Book not found</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{bookData.title}</h1>

      {bookData.coverImage?.asset?.url && (
        <div className="mb-6">
          <Image
            src={bookData.coverImage.asset.url}
            alt={bookData.title}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      )}

      <p className="text-lg mb-8">{bookData.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Chapters</h2>
      <ul className="space-y-2">
        {bookData.chapters
          ?.sort((a, b) => a.order - b.order)
          .map((chapter) => (
            <li key={chapter.slug}>
              <Link
                href={`/books/${bookData.slug}/${chapter.slug}`}
                className="hover:text-orange-500"
              >
                {chapter.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}