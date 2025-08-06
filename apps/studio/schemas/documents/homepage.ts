import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Welcome to Deeper Life Bible Church',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      initialValue: 'Growing in faith, fellowship, and service in Huntsville, Alabama',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'sundayService',
      title: 'Sunday Service Information',
      type: 'object',
      fields: [
        {
          name: 'time',
          title: 'Service Time',
          type: 'string',
          initialValue: '10:00 AM - 12:00 PM',
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string',
          initialValue: 'Main Sanctuary',
        },
      ],
    }),
    defineField({
      name: 'callToActions',
      title: 'Call to Action Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Button Text',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'string',
            },
            {
              name: 'type',
              title: 'Button Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Primary', value: 'primary'},
                  {title: 'Secondary', value: 'secondary'},
                  {title: 'Outline', value: 'outline'},
                ],
              },
              initialValue: 'primary',
            },
          ],
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
