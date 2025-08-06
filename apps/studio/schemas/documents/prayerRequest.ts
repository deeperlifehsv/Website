import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'prayerRequest',
  title: 'Prayer Request',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'request',
      title: 'Prayer Request',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'urgent',
      title: 'Urgent',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'anonymous',
      title: 'Anonymous Request',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Reviewed', value: 'reviewed'},
          {title: 'Prayed For', value: 'prayed'},
        ],
      },
      initialValue: 'new',
    }),
  ],
  orderings: [
    {
      title: 'Submitted Date, New',
      name: 'submittedDesc',
      by: [{field: 'submittedAt', direction: 'desc'}],
    },
    {
      title: 'Status',
      name: 'status',
      by: [{field: 'status', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      name: 'name',
      submittedAt: 'submittedAt',
      urgent: 'urgent',
      status: 'status',
    },
    prepare(selection) {
      const {name, submittedAt, urgent, status} = selection
      return {
        title: name,
        subtitle: `${new Date(submittedAt).toLocaleDateString()} - ${status}${urgent ? ' (URGENT)' : ''}`,
      }
    },
  },
})
