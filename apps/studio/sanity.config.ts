import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'deeperlife-huntsville',
  title: 'Deeper Life Bible Church Huntsville',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('About Page')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.divider(),
            S.listItem()
              .title('Sermons')
              .child(S.documentTypeList('sermon').title('Sermons')),
            S.listItem()
              .title('Events')
              .child(S.documentTypeList('event').title('Events')),
            S.listItem()
              .title('Ministries')
              .child(S.documentTypeList('ministry').title('Ministries')),
            S.divider(),
            S.listItem()
              .title('Prayer Requests')
              .child(S.documentTypeList('prayerRequest').title('Prayer Requests')),
            S.listItem()
              .title('Visitor Cards')
              .child(S.documentTypeList('visitorCard').title('Visitor Cards')),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
