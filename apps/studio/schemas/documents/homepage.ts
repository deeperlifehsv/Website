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
      name: 'heroSlides',
      title: 'Hero Slider',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'image',
            title: 'Slide Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'title',
            title: 'Slide Title',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'subtitle',
            title: 'Slide Subtitle',
            type: 'text',
            rows: 2,
          },
          {
            name: 'cta',
            title: 'Call to Action Button',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Button Text',
                type: 'string',
              },
              {
                name: 'href',
                title: 'Button Link',
                type: 'string',
              },
              {
                name: 'secondary',
                title: 'Secondary Style',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
        ],
        preview: {
          select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image',
          },
        },
      }],
    }),
    defineField({
      name: 'welcomeMessage',
      title: 'Welcome Message',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'servicesSectionTitle',
      title: 'Services Section Title',
      type: 'string',
      initialValue: 'Join Us for Worship',
    }),
    defineField({
      name: 'servicesSectionSubtitle',
      title: 'Services Section Subtitle',
      type: 'text',
      initialValue: "Come as you are and experience God's love in our welcoming community",
    }),
    defineField({
      name: 'missionSection',
      title: 'Mission Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Mission',
          description: 'The main title for the mission section (e.g., "Our Mission")',
        },
        {
          name: 'statement',
          title: 'Mission Statement',
          type: 'text',
          rows: 3,
          description: 'The main mission statement of the church',
        },
        {
          name: 'bulletPoints',
          title: 'Key Points',
          description: 'Add important points about the church mission',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              {
                name: 'point',
                title: 'Point',
                type: 'string',
                description: 'Enter a single mission point',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                rows: 2,
                description: 'Optional: Add more details about this point',
              }
            ]
          }]
        }
      ]
    }),
    defineField({
      name: 'serviceTimesSection',
      title: 'Service Times',
      type: 'object',
      description: 'Set up your regular service schedule',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Join Us in Worship',
        },
        {
          name: 'sundayService',
          title: 'Sunday Service',
          type: 'object',
          fields: [
            {
              name: 'time',
              title: 'Service Time',
              type: 'string',
              description: 'e.g., "10:30 AM"',
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'e.g., "Main Sanctuary"',
            }
          ]
        },
        {
          name: 'bibleStudy',
          title: 'Bible Study',
          type: 'object',
          fields: [
            {
              name: 'time',
              title: 'Study Time',
              type: 'string',
              description: 'e.g., "Wednesdays at 7:00 PM"',
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'e.g., "Fellowship Hall"',
            }
          ]
        },
        {
          name: 'prayerMeeting',
          title: 'Prayer Meeting',
          type: 'object',
          fields: [
            {
              name: 'time',
              title: 'Prayer Time',
              type: 'string',
              description: 'e.g., "Fridays at 6:30 PM"',
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'e.g., "Prayer Room"',
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'callToActions',
      title: 'Call to Action Buttons',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Button Text',
            type: 'string',
          },
          {
            name: 'link',
            title: 'Button Link',
            type: 'string',
          },
          {
            name: 'type',
            title: 'Button Style',
            type: 'string',
            options: {
              list: [
                {title: 'Primary', value: 'primary'},
                {title: 'Secondary', value: 'secondary'},
                {title: 'Outline', value: 'outline'},
              ]
            },
            initialValue: 'primary',
          }
        ]
      }]
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
