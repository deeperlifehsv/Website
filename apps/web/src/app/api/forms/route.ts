import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/lib/sanity'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...data } = body

    // Validate required fields based on form type
    if (type === 'prayer') {
      if (!data.name || !data.request) {
        return NextResponse.json(
          { error: 'Name and prayer request are required' },
          { status: 400 }
        )
      }

      // Create prayer request document
      const prayerRequest = await writeClient.create({
        _type: 'prayerRequest',
        name: data.name,
        email: data.email || '',
        phone: data.phone || '',
        request: data.request,
        urgent: data.urgent || false,
        anonymous: data.anonymous || false,
        submittedAt: new Date().toISOString(),
        status: 'new'
      })

      return NextResponse.json({
        success: true,
        message: 'Prayer request submitted successfully',
        id: prayerRequest._id
      })

    } else if (type === 'visitor') {
      if (!data.name) {
        return NextResponse.json(
          { error: 'Name is required' },
          { status: 400 }
        )
      }

      // Create visitor card document
      const visitorCard = await writeClient.create({
        _type: 'visitorCard',
        name: data.name,
        email: data.email || '',
        phone: data.phone || '',
        address: data.address || '',
        visitType: data.visitType || 'first-time',
        interests: data.interests || [],
        followUpPreference: data.followUpPreference || 'email',
        comments: data.comments || '',
        submittedAt: new Date().toISOString(),
        followedUp: false
      })

      return NextResponse.json({
        success: true,
        message: 'Visitor information submitted successfully',
        id: visitorCard._id
      })

    } else if (type === 'contact') {
      if (!data.name || !data.email || !data.message) {
        return NextResponse.json(
          { error: 'Name, email, and message are required' },
          { status: 400 }
        )
      }

      // For general contact, we could create a simple contact document
      // or handle it differently based on requirements
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully'
      })

    } else {
      return NextResponse.json(
        { error: 'Invalid form type' },
        { status: 400 }
      )
    }

  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
