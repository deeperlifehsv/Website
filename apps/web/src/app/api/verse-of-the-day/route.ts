import { NextResponse } from 'next/server'
import { getVerseWithBackground } from '@/lib/scripture'

export async function GET() {
  try {
    // Get the verse of the day with background image
    const { verse, imageUrl, imageAlt } = await getVerseWithBackground()
    
    return NextResponse.json({ 
      verse,
      imageUrl,
      imageAlt,
      success: true 
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=86400' // Cache for 24 hours
      }
    })
  } catch (error) {
    console.error('Error in verse-of-the-day API:', error)
    
    // Return fallback verse with fallback image
    const fallbackVerse = {
      id: 'fallback',
      content: 'That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation.',
      reference: 'Romans 10:9-10'
    }
    
    return NextResponse.json({ 
      verse: fallbackVerse,
      imageUrl: '/assets/church_scenes/worship.jpg',
      imageAlt: 'Holy Bible scripture background',
      success: true,
      fallback: true
    })
  }
}
