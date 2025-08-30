import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    if (!process.env.REVALIDATE_SECRET) {
      console.error('REVALIDATE_SECRET is not set')
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 })
    }

    const body = await request.json()
    const secret = request.nextUrl.searchParams.get('secret')

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATE_SECRET) {
      console.warn('Invalid revalidation secret received')
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    if (!body._type) {
      console.error('Missing document type in webhook payload')
      return NextResponse.json({ message: 'Invalid webhook payload' }, { status: 400 })
    }

    // Get the document type from the webhook payload
    const documentType = body._type

    // Revalidate specific paths based on document type
    switch (documentType) {
      case 'homepage':
        revalidatePath('/', 'layout') // Revalidate the entire layout to ensure all pages get updated
        break
      case 'aboutPage':
        revalidatePath('/about')
        break
      case 'sermon':
        revalidatePath('/sermons')
        if (body.slug?.current) {
          revalidatePath(`/sermons/${body.slug.current}`)
        }
        break
      case 'event':
        revalidatePath('/events')
        if (body.slug?.current) {
          revalidatePath(`/events/${body.slug.current}`)
        }
        break
      case 'ministry':
        revalidatePath('/ministries')
        break
      case 'siteSettings':
        // Revalidate all pages when site settings change
        revalidatePath('/', 'layout')
        break
      default:
        // Revalidate homepage for any other changes
        revalidatePath('/')
    }

    return NextResponse.json({ 
      message: 'Revalidated successfully',
      documentType,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error revalidating:', error)
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}
