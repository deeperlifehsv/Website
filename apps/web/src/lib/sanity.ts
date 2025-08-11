import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || process.env.SANITY_API_VERSION || '2024-01-01'

// if (!projectId) {
//   throw new Error('Missing Sanity Project ID')
// }

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper function for fetching data
export async function fetchGroq<T>(query: string, params: Record<string, any> = {}, tags?: string[]): Promise<T> {
  return client.fetch(query, params, {
    cache: 'force-cache',
    next: {
      tags: tags || ['sanity'],
      revalidate: 60, // Revalidate every minute
    },
  })
}

// Data fetchers
export async function getHomepage() {
  return fetchGroq(queries.homepage, {}, ['homepage'])
}

export async function getSiteSettings() {
  return fetchGroq(queries.siteSettings, {}, ['site-settings'])
}

export async function getSermons() {
  return fetchGroq(queries.sermons, {}, ['sermons'])
}

export async function getSermon(slug: string) {
  return fetchGroq(queries.sermon, { slug }, ['sermons'])
}

export async function getEvents() {
  return fetchGroq(queries.events, {}, ['events'])
}

export async function getEvent(slug: string) {
  return fetchGroq(queries.event, { slug }, ['events'])
}

export async function getMinistries() {
  return fetchGroq(queries.ministries, {}, ['ministries'])
}

export async function getAboutPage() {
  return fetchGroq(queries.about, {}, ['about'])
}

// GROQ queries
export const queries = {
  // Homepage data
  homepage: `
    *[_type == "homepage"][0] {
      _id,
      title,
      heroTitle,
      heroSubtitle,
      heroImage,
      welcomeMessage,
      sundayService {
        time,
        location
      },
      callToActions[] {
        title,
        link,
        type
      }
    }
  `,

  // All sermons
  sermons: `
    *[_type == "sermon"] | order(date desc) {
      _id,
      title,
      slug,
      date,
      speaker,
      youtubeUrl,
      scripture,
      thumbnail,
      summary
    }
  `,

  // Single sermon
  sermon: `
    *[_type == "sermon" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      date,
      speaker,
      youtubeUrl,
      scripture,
      thumbnail,
      summary,
      description
    }
  `,

  // All events
  events: `
    *[_type == "event"] | order(startDate asc) {
      _id,
      title,
      slug,
      startDate,
      endDate,
      location,
      description,
      heroImage
    }
  `,

  // Single event
  event: `
    *[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      startDate,
      endDate,
      location,
      description,
      heroImage,
      content
    }
  `,

  // About page
  about: `
    *[_type == "aboutPage"][0] {
      _id,
      title,
      mission,
      vision,
      history,
      pastor {
        name,
        bio,
        image
      }
    }
  `,

  // Ministries
  ministries: `
    *[_type == "ministry"] | order(order asc) {
      _id,
      title,
      slug,
      description,
      image,
      leader
    }
  `,

  // Site settings
  siteSettings: `
    *[_type == "siteSettings"][0] {
      _id,
      siteName,
      siteDescription,
      contactInfo {
        phone,
        email,
        address,
        mapUrl
      },
      socialMedia {
        facebook,
        youtube,
        instagram
      }
    }
  `
}
