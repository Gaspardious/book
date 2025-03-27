import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'


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

export default async function BookPage({
  params,
}: {
  params: Promise<{ book: string }>
}) {
  const { book } = await params 

  const bookData: Book | null = await client.fetch(bookQuery, { slug: book })

  if (!bookData) return <div>Book not found</div>

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl uppercase font-bold text-center mb-4">{bookData.title}</h1>

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

      <h2 className="text-xs font-semibold mb-1">BESKRIVNING</h2>
      <p className="text-sm bg-black/50 border-1 rounded border-orange-400 p-4 mb-8">
        {bookData.description}
      </p>

      <h2 className="text-xs font-semibold mb-1">KAPITEL</h2>
      <ul className="space-y-2 bg-black/50 border-1 rounded border-orange-400 p-4">
        {bookData.chapters
          ?.sort((a, b) => a.order - b.order)
          .map((chapter) => (
            <li key={chapter.slug}>
              <Link href={`/books/${bookData.slug}/${chapter.slug}`} className="hover:text-orange-500">
                {chapter.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}