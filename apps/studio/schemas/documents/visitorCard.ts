import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'visitorCard',
  title: 'Visitor Card',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'visitType',
      title: 'Visit Type',
      type: 'string',
      options: {
        list: [
          {title: 'First Time Visitor', value: 'first-time'},
          {title: 'Return Visitor', value: 'return'},
          {title: 'Regular Attendee', value: 'regular'},
        ],
      },
    }),
    defineField({
      name: 'interests',
      title: 'Areas of Interest',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Bible Study', value: 'bible-study'},
          {title: 'Youth Ministry', value: 'youth'},
          {title: 'Children\'s Ministry', value: 'children'},
          {title: 'Women\'s Fellowship', value: 'women'},
          {title: 'Men\'s Ministry', value: 'men'},
          {title: 'Music Ministry', value: 'music'},
          {title: 'Volunteer Opportunities', value: 'volunteer'},
          {title: 'Prayer Ministry', value: 'prayer'},
        ],
      },
    }),
    defineField({
      name: 'followUpPreference',
      title: 'Follow-up Preference',
      type: 'string',
      options: {
        list: [
          {title: 'Phone Call', value: 'phone'},
          {title: 'Email', value: 'email'},
          {title: 'Text Message', value: 'text'},
          {title: 'No Follow-up', value: 'none'},
        ],
      },
    }),
    defineField({
      name: 'comments',
      title: 'Comments/Questions',
      type: 'text',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'followedUp',
      title: 'Followed Up',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Submitted Date, New',
      name: 'submittedDesc',
      by: [{field: 'submittedAt', direction: 'desc'}],
    },
    {
      title: 'Follow-up Status',
      name: 'followUp',
      by: [{field: 'followedUp', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      name: 'name',
      visitType: 'visitType',
      submittedAt: 'submittedAt',
      followedUp: 'followedUp',
    },
    prepare(selection) {
      const {name, visitType, submittedAt, followedUp} = selection
      return {
        title: name,
        subtitle: `${visitType || 'Visitor'} - ${new Date(submittedAt).toLocaleDateString()}${followedUp ? ' ✓' : ''}`,
      }
    },
  },
})
