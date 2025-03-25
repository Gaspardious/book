import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'

type Params = {
  params: {
    book: string
  }
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

// GROQ query to fetch a book + its chapters by slug
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
  const book: Book | null = await client.fetch(bookQuery, { slug: params.book })

  if (!book) return <div>Book not found</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{book.title}</h1>

      {book.coverImage?.asset?.url && (
        <div className="mb-6">
          <Image
            src={book.coverImage.asset.url}
            alt={book.title}
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      )}

      <p className="text-lg mb-8">{book.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Chapters</h2>
      <ul className="space-y-2">
        {book.chapters
          ?.sort((a, b) => a.order - b.order)
          .map((chapter) => (
            <li key={chapter.slug}>
           <Link href={`/books/${book.slug}/${chapter.slug}`} className='hover:text-orange-500'>

                {chapter.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}