import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'book',
  type: 'document',
  title: 'Book',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'chapters',
      type: 'array',
      title: 'Chapters',
      of: [{ type: 'reference', to: [{ type: 'chapter' }] }],
    }),
    defineField({
      name: 'pdfFile',
      type: 'file',
      title: 'PDF Download',
      options: {
        accept: '.pdf',
      },
    }),
  ],
});