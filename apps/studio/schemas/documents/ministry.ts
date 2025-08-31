import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ministry',
  title: 'Ministry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Ministry Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Short Summary',
      type: 'text',
      description: 'A brief description for ministry overview (1-2 sentences)',
      validation: Rule => Rule.max(200),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      description: 'Detailed information about the ministry',
      validation: Rule => Rule.required().min(50).max(1000),
    }),
    defineField({
      name: 'image',
      title: 'Ministry Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main image representing the ministry',
    }),
    defineField({
      name: 'leader',
      title: 'Ministry Leader',
      type: 'object',
      description: 'Information about the ministry leader',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'role',
          title: 'Role/Title',
          type: 'string',
          description: 'e.g., "Youth Pastor", "Worship Leader"',
        },
        {
          name: 'image',
          title: 'Leader Photo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'bio',
          title: 'Brief Bio',
          type: 'text',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'meetingSchedule',
      title: 'Meeting Schedule',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'day',
            title: 'Day',
            type: 'string',
            description: 'e.g., "Every Sunday", "First Saturday of the month"',
          },
          {
            name: 'time',
            title: 'Time',
            type: 'string',
            description: 'e.g., "9:30 AM - 10:30 AM"',
          },
          {
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g., "Youth Room", "Main Sanctuary"',
          },
        ],
      }],
    }),
    defineField({
      name: 'activities',
      title: 'Key Activities',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Activity Name',
            type: 'string',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
          },
        ],
      }],
      description: 'List main activities or programs of this ministry',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'socialMedia',
          title: 'Social Media',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'platform',
                title: 'Platform',
                type: 'string',
                options: {
                  list: [
                    {title: 'Facebook', value: 'facebook'},
                    {title: 'Instagram', value: 'instagram'},
                    {title: 'WhatsApp', value: 'whatsapp'},
                  ],
                },
              },
              {
                name: 'url',
                title: 'URL/Handle',
                type: 'string',
              },
            ],
          }],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      description: 'Controls the order in which ministries appear (lower numbers appear first)',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      leader: 'leader',
      media: 'image',
    },
    prepare(selection) {
      const {title, leader, media} = selection
      return {
        title,
        subtitle: leader ? `Led by ${leader}` : '',
        media,
      }
    },
  },
})
