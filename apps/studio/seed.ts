import { createClient } from '@sanity/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '../../.env' })

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'mda9x8xt',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
})

async function seedData() {
  console.log('🌱 Starting to seed Sanity data...')

  try {
    // Site Settings
    const siteSettings = {
      _id: 'siteSettings',
      _type: 'siteSettings',
      siteName: 'Deeper Life Bible Church Huntsville',
      siteDescription: 'Welcome to Deeper Life Bible Church Huntsville. Join us for Sunday worship, Bible study, and fellowship in the heart of Alabama.',
      contactInfo: {
        phone: '(256) 555-0123',
        email: 'info@deeperlifehuntsville.org',
        address: '123 Church Street\nHuntsville, AL 35801',
        mapUrl: 'https://maps.google.com/...'
      },
      socialMedia: {
        facebook: 'https://facebook.com/deeperlifehuntsville',
        youtube: 'https://youtube.com/@deeperlifehuntsville',
        instagram: 'https://instagram.com/deeperlifehuntsville'
      }
    }

    console.log('📝 Creating site settings...')
    await client.createOrReplace(siteSettings)

    // Homepage
    const homepage = {
      _id: 'homepage',
      _type: 'homepage',
      title: 'Homepage',
      heroTitle: 'Welcome to Deeper Life Bible Church',
      heroSubtitle: 'Growing in faith, fellowship, and service in Huntsville, Alabama',
      welcomeMessage: [
        {
          _type: 'block',
          _key: 'welcome1',
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: 'span1',
              text: 'At Deeper Life Bible Church Huntsville, we are committed to helping people grow deeper in their relationship with God through biblical teaching, authentic fellowship, and meaningful service to our community.'
            }
          ]
        }
      ],
      sundayService: {
        time: '10:00 AM - 12:00 PM',
        location: 'Main Sanctuary'
      },
      callToActions: [
        {
          _key: 'cta1',
          title: 'Join Us Sunday',
          link: '/contact',
          type: 'primary'
        },
        {
          _key: 'cta2',
          title: 'Learn More',
          link: '/about',
          type: 'outline'
        }
      ]
    }

    console.log('🏠 Creating homepage...')
    await client.createOrReplace(homepage)

    // About Page
    const aboutPage = {
      _id: 'aboutPage',
      _type: 'aboutPage',
      title: 'About Us',
      mission: 'To help people grow deeper in their relationship with God through His Word, building stronger fellowship with one another, and reaching out to our community with the love of Christ.',
      vision: 'A community where every person experiences the transforming power of God\'s love and finds their purpose in Christ.',
      history: 'Deeper Life Bible Church Huntsville was established in 2008 with a heart to serve the Huntsville community. We are part of the global Deeper Life Bible Church family, committed to biblical truth and spiritual growth.',
      pastor: {
        name: 'Pastor William Kumuyi',
        bio: 'Pastor Kumuyi has been serving in ministry for over 20 years, dedicated to teaching God\'s Word with clarity and passion.',
        image: null
      }
    }

    console.log('ℹ️ Creating about page...')
    await client.createOrReplace(aboutPage)

    // Sample Ministries
    const ministries = [
      {
        _type: 'ministry',
        title: "Children's Ministry",
        slug: { current: 'childrens-ministry' },
        description: 'Nurturing young hearts with age-appropriate biblical teaching and fun activities that help children grow in their faith.',
        leader: 'Sister Mary Johnson',
        order: 1
      },
      {
        _type: 'ministry',
        title: "Women's Fellowship",
        slug: { current: 'womens-fellowship' },
        description: 'Building sisterhood through Bible study, prayer, and community outreach while supporting one another in faith.',
        leader: 'Sister Grace Williams',
        order: 2
      },
      {
        _type: 'ministry',
        title: 'Campus Outreach',
        slug: { current: 'campus-outreach' },
        description: 'Reaching students and young adults with the Gospel on local campuses and universities.',
        leader: 'Brother David Thompson',
        order: 3
      }
    ]

    console.log('🙏 Creating ministries...')
    for (const ministry of ministries) {
      await client.create(ministry)
    }

    // Sample Sermons
    const sermons = [
      {
        _type: 'sermon',
        title: 'Walking in Faith',
        slug: { current: 'walking-in-faith' },
        date: '2024-01-07',
        speaker: 'Pastor William Kumuyi',
        scripture: 'Hebrews 11:1-6',
        summary: 'Understanding what it means to walk by faith and not by sight in our daily lives.',
        youtubeUrl: 'https://youtube.com/watch?v=example1'
      },
      {
        _type: 'sermon',
        title: 'The Power of Prayer',
        slug: { current: 'the-power-of-prayer' },
        date: '2023-12-31',
        speaker: 'Pastor William Kumuyi',
        scripture: 'Matthew 6:5-15',
        summary: 'Exploring the biblical foundation of prayer and its transformative power in our lives.',
        youtubeUrl: 'https://youtube.com/watch?v=example2'
      },
      {
        _type: 'sermon',
        title: 'Living in Unity',
        slug: { current: 'living-in-unity' },
        date: '2023-12-24',
        speaker: 'Pastor William Kumuyi',
        scripture: 'Ephesians 4:1-6',
        summary: 'The importance of unity in the body of Christ and how we can maintain it.',
        youtubeUrl: 'https://youtube.com/watch?v=example3'
      }
    ]

    console.log('📖 Creating sermons...')
    for (const sermon of sermons) {
      await client.create(sermon)
    }

    // Sample Events
    const events = [
      {
        _type: 'event',
        title: 'New Year Revival',
        slug: { current: 'new-year-revival' },
        startDate: '2024-01-15T18:00:00.000Z',
        endDate: '2024-01-15T20:00:00.000Z',
        location: 'Main Sanctuary',
        description: 'Join us for a special revival service to start the new year with prayer and worship.'
      },
      {
        _type: 'event',
        title: 'Community Outreach',
        slug: { current: 'community-outreach' },
        startDate: '2024-01-20T09:00:00.000Z',
        endDate: '2024-01-20T15:00:00.000Z',
        location: 'Downtown Huntsville',
        description: 'Serving our community with love through food distribution and prayer.'
      },
      {
        _type: 'event',
        title: 'Youth Conference',
        slug: { current: 'youth-conference' },
        startDate: '2024-02-10T10:00:00.000Z',
        endDate: '2024-02-11T16:00:00.000Z',
        location: 'Fellowship Hall',
        description: 'A special two-day conference for young people to grow in their faith.'
      }
    ]

    console.log('📅 Creating events...')
    for (const event of events) {
      await client.create(event)
    }

    console.log('✅ Seeding completed successfully!')
    console.log('🎉 Your Sanity studio should now have default content.')

  } catch (error) {
    console.error('❌ Error seeding data:', error)
    process.exit(1)
  }
}

// Run the seed function
seedData()
