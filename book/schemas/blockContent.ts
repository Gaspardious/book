import { defineType, defineArrayMember } from 'sanity';

export default defineType({
  name: 'blockContent',
  type: 'array',
  title: 'Block Content',
  of: [
    defineArrayMember({
      type: 'block',
    }),
    defineArrayMember({
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});