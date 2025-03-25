import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'chapter',
  type: 'document',
  title: 'Chapter',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Content',
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
    }),
    defineField({
      name: 'book',
      type: 'reference',
      to: [{ type: 'book' }],
      title: 'Parent Book',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    }),
  ],
});