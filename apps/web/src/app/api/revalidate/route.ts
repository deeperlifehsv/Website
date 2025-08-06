import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const secret = request.nextUrl.searchParams.get('secret')

    // Check for secret to confirm this is a valid request
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Get the document type from the webhook payload
    const documentType = body._type

    // Revalidate specific paths based on document type
    switch (documentType) {
      case 'homepage':
        revalidatePath('/')
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
