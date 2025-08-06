import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, Heart, Book } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container-custom section-padding">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Deeper Life Bible Church
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Growing in faith, fellowship, and service in Huntsville, Alabama
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-primary text-lg px-8 py-3">
                Learn More About Us
              </Link>
              <Link href="/contact" className="btn-outline text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary-600">
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Us for Worship
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Come as you are and experience God's love in our welcoming community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sunday Worship</h3>
              <p className="text-gray-600 mb-2">10:00 AM - 12:00 PM</p>
              <p className="text-sm text-gray-500">Main Sanctuary</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bible Study</h3>
              <p className="text-gray-600 mb-2">Wednesday 7:00 PM</p>
              <p className="text-sm text-gray-500">Fellowship Hall</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prayer Meeting</h3>
              <p className="text-gray-600 mb-2">Friday 6:00 PM</p>
              <p className="text-sm text-gray-500">Prayer Room</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Deeper Life Bible Church Huntsville, we are committed to helping people 
                grow deeper in their relationship with God through biblical teaching, 
                authentic fellowship, and meaningful service to our community.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe in the transformative power of God's Word and the importance 
                of building strong, Christ-centered relationships that last a lifetime.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="lg:order-first">
              <div className="bg-gray-300 h-64 lg:h-96 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Church Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Ministries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover opportunities to grow, serve, and connect with others in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Children's Ministry</h3>
              <p className="text-gray-600 mb-4">
                Nurturing young hearts with age-appropriate biblical teaching and fun activities.
              </p>
              <Link href="/ministries" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="card p-6">
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Women's Fellowship</h3>
              <p className="text-gray-600 mb-4">
                Building sisterhood through Bible study, prayer, and community outreach.
              </p>
              <Link href="/ministries" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="card p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <Book className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Campus Outreach</h3>
              <p className="text-gray-600 mb-4">
                Reaching students and young adults with the Gospel on local campuses.
              </p>
              <Link href="/ministries" className="text-primary-600 hover:text-primary-700 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Your Next Step?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Whether you're seeking prayer, wanting to connect, or looking to serve, 
              we're here to help you on your spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Request Prayer
              </Link>
              <Link href="/events" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                View Events
              </Link>
              <Link href="/give" className="bg-navy-600 hover:bg-navy-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200">
                Give Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
