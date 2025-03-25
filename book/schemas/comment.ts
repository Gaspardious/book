import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Comment',
    }),
    defineField({
      name: 'chapter',
      type: 'reference',
      to: [{ type: 'chapter' }],
      title: 'Chapter',
    }),
    defineField({
      name: 'approved',
      type: 'boolean',
      title: 'Approved',
      initialValue: false,
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      title: 'Created at',
      initialValue: () => new Date().toISOString(),
    }),
  ],
});