// Scripture API utilities using API.Bible
const API_BIBLE_BASE_URL = 'https://api.scripture.api.bible/v1'
const API_KEY = process.env.SCRIPTURE_API_KEY || process.env.NEXT_PUBLIC_SCRIPTURE_API_KEY
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || process.env.NEXT_PUBLIC_PEXELS_API_KEY

interface ScriptureVerse {
  id: string
  content: string
  reference: string
  copyright?: string
}

interface VerseWithBackground {
  verse: ScriptureVerse
  imageUrl: string
  imageAlt: string
}

interface VerseOfTheDayResponse {
  data: {
    id: string
    content: string
    reference: string
    copyright?: string
  }
}

export async function getVerseOfTheDay(): Promise<ScriptureVerse | null> {
  if (!API_KEY) {
    console.warn('Scripture API key not found. Using fallback verse.')
    return getFallbackVerse()
  }

  try {
    // API.Bible verse of the day endpoint
    const response = await fetch(`${API_BIBLE_BASE_URL}/bibles/de4e12af7f28f599-02/verses/ROM.10.9?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=false`, {
      headers: {
        'api-key': API_KEY,
      },
      next: {
        revalidate: 86400, // Cache for 24 hours
        tags: ['verse-of-the-day']
      }
    })

    if (!response.ok) {
      throw new Error(`API.Bible request failed: ${response.status}`)
    }

    const data = await response.json()
    
    return {
      id: data.data.id || 'rom-10-9',
      content: data.data.content || 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.',
      reference: data.data.reference || 'Romans 10:9',
      copyright: data.data.copyright
    }

  } catch (error) {
    console.error('Failed to fetch verse of the day:', error)
    return getFallbackVerse()
  }
}

// Get a rotating verse based on the day of the year
export async function getRotatingVerseOfTheDay(): Promise<ScriptureVerse> {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000)
  
  const verses = [
    {
      id: 'rom-10-9-10',
      content: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.',
      reference: 'Romans 10:9-10'
    },
    {
      id: 'john-3-16',
      content: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
      reference: 'John 3:16'
    },
    {
      id: 'phil-4-13',
      content: 'I can do all things through Christ which strengtheneth me.',
      reference: 'Philippians 4:13'
    },
    {
      id: 'prov-3-5-6',
      content: 'Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.',
      reference: 'Proverbs 3:5-6'
    },
    {
      id: 'jer-29-11',
      content: 'For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.',
      reference: 'Jeremiah 29:11'
    },
    {
      id: 'ps-23-1',
      content: 'The Lord is my shepherd; I shall not want.',
      reference: 'Psalm 23:1'
    },
    {
      id: 'isa-40-31',
      content: 'But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
      reference: 'Isaiah 40:31'
    }
  ]

  return verses[dayOfYear % verses.length]
}

// Get verse with background image
export async function getVerseWithBackground(): Promise<VerseWithBackground> {
  const verse = await getRotatingVerseOfTheDay()
  const imageUrl = await getBibleBackgroundImage()
  
  return {
    verse,
    imageUrl,
    imageAlt: "Holy Bible with scripture background"
  }
}

// Fetch background image from Pexels
async function getBibleBackgroundImage(): Promise<string> {
  if (!PEXELS_API_KEY) {
    console.warn('Pexels API key not found. Using fallback image.')
    return '/assets/church_scenes/worship.jpg' // Fallback to local image
  }

  try {
    const searchQueries = ['holy bible', 'open bible', 'scripture', 'bible pages', 'christian worship']
    const randomQuery = searchQueries[Math.floor(Math.random() * searchQueries.length)]
    
    const response = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(randomQuery)}&per_page=20&orientation=landscape`, {
      headers: {
        'Authorization': PEXELS_API_KEY,
      },
      next: {
        revalidate: 86400, // Cache for 24 hours
        tags: ['pexels-background']
      }
    })

    if (!response.ok) {
      throw new Error(`Pexels API request failed: ${response.status}`)
    }

    const data = await response.json()
    
    if (data.photos && data.photos.length > 0) {
      // Get a random image from the results
      const randomIndex = Math.floor(Math.random() * data.photos.length)
      const photo = data.photos[randomIndex]
      return photo.src.large || photo.src.original
    }
    
    throw new Error('No images found')
    
  } catch (error) {
    console.error('Failed to fetch background image:', error)
    return '/assets/church_scenes/worship.jpg' // Fallback to local image
  }
}

// Fallback verse in case API fails
function getFallbackVerse(): ScriptureVerse {
  return {
    id: 'rom-10-9-10',
    content: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.',
    reference: 'Romans 10:9-10'
  }
}

// Function to get specific verses by reference (for future use)
export async function getScriptureVerse(reference: string): Promise<ScriptureVerse | null> {
  if (!API_KEY) {
    return null
  }

  try {
    // This would need to be adapted based on the specific API.Bible endpoint structure
    const response = await fetch(`${API_BIBLE_BASE_URL}/bibles/de4e12af7f28f599-02/search?query=${encodeURIComponent(reference)}`, {
      headers: {
        'api-key': API_KEY,
      }
    })

    if (!response.ok) {
      throw new Error(`API.Bible search failed: ${response.status}`)
    }

    const data = await response.json()
    // Process the search results to find the exact verse
    // This would need to be implemented based on API.Bible's response structure
    
    return null
  } catch (error) {
    console.error('Failed to fetch scripture verse:', error)
    return null
  }
}
