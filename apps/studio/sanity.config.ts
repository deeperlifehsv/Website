import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'mda9x8xt'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'deeperlife-huntsville',
  title: 'Deeper Life Bible Church Huntsville',

  projectId,
  dataset,

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Configuration
            S.listItem()
              .title('🔧 Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            
            // Pages
            S.listItem()
              .title('🏠 Homepage')
              .child(S.document().schemaType('homepage').documentId('homepage')),
            S.listItem()
              .title('ℹ️ About Page')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.divider(),
            
            // Content
            S.listItem()
              .title('📖 Sermons')
              .child(S.documentTypeList('sermon').title('Sermons')),
            S.listItem()
              .title('📅 Events')
              .child(S.documentTypeList('event').title('Events')),
            S.listItem()
              .title('🙏 Ministries')
              .child(S.documentTypeList('ministry').title('Ministries')),
            S.divider(),
            
            // Forms & Submissions
            S.listItem()
              .title('💬 Prayer Requests')
              .child(S.documentTypeList('prayerRequest').title('Prayer Requests')),
            S.listItem()
              .title('👥 Visitor Cards')
              .child(S.documentTypeList('visitorCard').title('Visitor Cards')),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    // // Add custom actions for revalidation
    // actions: (prev, context) => {
    //   const defaultActions = prev.filter(({ action }) => 
    //     action && !['publish', 'unpublish', 'discardChanges'].includes(action)
    //   )
      
    //   return [
    //     ...prev,
    //     // Add a custom revalidate action
    //     {
    //       action: 'revalidate',
    //       title: 'Revalidate Website',
    //       onHandle: () => {
    //         const webhookUrl = process.env.SANITY_STUDIO_WEBHOOK_URL || 'http://localhost:3000/api/revalidate'
    //         const secret = process.env.SANITY_STUDIO_REVALIDATE_SECRET
            
    //         if (secret) {
    //           fetch(`${webhookUrl}?secret=${secret}`, {
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //               _type: context.schemaType,
    //               _id: context.documentId,
    //               slug: context.published?.slug,
    //             }),
    //           })
    //           .then(() => {
    //             console.log('Website revalidated successfully')
    //           })
    //           .catch((error) => {
    //             console.error('Failed to revalidate website:', error)
    //           })
    //         }
    //       },
    //     },
    //   ]
    // },
  },
})
