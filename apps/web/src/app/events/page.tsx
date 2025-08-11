import { Metadata } from 'next'
import { Calendar, MapPin, Clock, Users } from 'lucide-react'
import { getEvents } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Events | Deeper Life Bible Church Huntsville',
  description: 'Join us for upcoming events at Deeper Life Bible Church Huntsville. Stay connected with our community through special services, outreach programs, and fellowship gatherings.',
}

interface Event {
  _id: string
  title: string
  slug: { current: string }
  startDate: string
  endDate: string
  location: string
  description: string
  heroImage?: any
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function formatTime(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  })
}

function isUpcoming(dateString: string) {
  return new Date(dateString) >= new Date()
}

export default async function EventsPage() {
  const events = await getEvents() as Event[]
  
  const upcomingEvents = events.filter(event => isUpcoming(event.startDate))
  const pastEvents = events.filter(event => !isUpcoming(event.startDate))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Church Events
            </h1>
            <p className="text-xl text-gray-100">
              Join us for special services, community outreach, and fellowship opportunities 
              that strengthen our faith and serve our community.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Mark your calendar and join us for these upcoming gatherings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event._id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                        <Calendar className="h-4 w-4 mr-1" />
                        Upcoming
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-3 text-primary-600" />
                        <span>{formatDate(event.startDate)}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-5 w-5 mr-3 text-primary-600" />
                        <span>{formatTime(event.startDate)} - {formatTime(event.endDate)}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-3 text-primary-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 line-clamp-3">
                      {event.description}
                    </p>
                    
                    <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="bg-gray-50 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Past Events
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Look back at the wonderful gatherings we've shared together
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <div key={event._id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        Completed
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                        <span>{formatDate(event.startDate)}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 line-clamp-3">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Events Message */}
      {events.length === 0 && (
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                No Events Scheduled
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're currently planning exciting events for our community. 
                Check back soon for updates on upcoming gatherings!
              </p>
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  Join us for our regular services:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="flex items-center justify-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary-600" />
                    <span className="font-medium">Sunday Worship: 10:00 AM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary-600" />
                    <span className="font-medium">Tuesday Bible Study: 6:30 PM (Zoom: 2566794121)</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <Calendar className="h-5 w-5 text-primary-600" />
                    <span className="font-medium">Wednesday Prayer Meeting: 6:30 PM (Zoom: 2566794121)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Don't miss out on upcoming events and special gatherings. 
              Contact us to stay informed about all church activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Contact Us
              </a>
              <a
                href="https://facebook.com/deeperlifehuntsville"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
