import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Us',
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'history',
      title: 'Church History',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'pastor',
      title: 'Pastor Information',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Pastor Name',
          type: 'string',
        },
        {
          name: 'bio',
          title: 'Biography',
          type: 'array',
          of: [{type: 'block'}],
        },
        {
          name: 'image',
          title: 'Pastor Photo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
