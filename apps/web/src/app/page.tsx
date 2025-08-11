import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, MapPin, Users, Heart, Book, ArrowRight, CheckCircle } from 'lucide-react'
import { HeroSlider } from '@/components/HeroSlider'
import { VerseOfTheDay } from '@/components/VerseOfTheDay'
import { getHomepage, getSiteSettings, getMinistries } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Home | Deeper Life Bible Church Huntsville',
  description: 'Welcome to Deeper Life Bible Church Huntsville. Join us for Sunday worship, Bible study, and fellowship in the heart of Alabama.',
}

export default async function HomePage() {
  // Fetch data from Sanity
  const [homepage, siteSettings, ministries] = await Promise.all([
    getHomepage(),
    getSiteSettings(), 
    getMinistries()
  ])
  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Service Times */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Join Us for Worship
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Come as you are and experience God's love in our welcoming community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 text-center group-hover:-translate-y-2 border-l-4 border-accent-500">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-magenta-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-magenta-600 transition-all duration-300">
                  <Clock className="h-10 w-10 text-primary-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">Sunday Worship</h3>
                <p className="text-lg text-gray-600 mb-2">10:00 AM</p>
                <p className="text-sm text-gray-500">Main Sanctuary</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 text-center group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-navy-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-navy-600 transition-colors duration-300">
                  <Book className="h-10 w-10 text-navy-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">Bible Study</h3>
                <p className="text-lg text-gray-600 mb-2">Tuesdays 6:30 PM</p>
                <p className="text-sm text-gray-500">Zoom: 2566794121</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 text-center group-hover:-translate-y-2">
                <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                  <Heart className="h-10 w-10 text-primary-600 group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">Prayer Meeting</h3>
                <p className="text-lg text-gray-600 mb-2">Wednesdays 6:30 PM</p>
                <p className="text-sm text-gray-500">Zoom: 2566794121</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="bg-cream-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At Deeper Life Bible Church Huntsville, we are committed to helping people 
                grow deeper in their relationship with God through biblical teaching, 
                authentic fellowship, and meaningful service to our community.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Biblical teaching that transforms lives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Authentic fellowship and community</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Meaningful service opportunities</span>
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
                <Image
                  src="/assets/church_scenes/church_standing.jpg"
                  alt="Deeper Life Bible Church Huntsville"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">15+</div>
              <div className="text-primary-100">Years of Ministry</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">500+</div>
              <div className="text-primary-100">Church Family</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">3</div>
              <div className="text-primary-100">Weekly Services</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">5+</div>
              <div className="text-primary-100">Active Ministries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Ministries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities to grow, serve, and connect with others in our community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <Image
                    src="/assets/church_scenes/Young-adult-pastor.jpg"
                    alt="Children's Ministry"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Children's Ministry</h3>
                <p className="text-gray-600 mb-6">
                  Nurturing young hearts with age-appropriate biblical teaching and fun activities.
                </p>
                <Link 
                  href="/ministries" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <Image
                    src="/assets/church_scenes/Testimony_women-leader.jpg"
                    alt="Women's Fellowship"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Women's Fellowship</h3>
                <p className="text-gray-600 mb-6">
                  Building sisterhood through Bible study, prayer, and community outreach.
                </p>
                <Link 
                  href="/ministries" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-8 group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <Image
                    src="/assets/church_scenes/choir_ministration.jpg"
                    alt="Campus Outreach"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Campus Outreach</h3>
                <p className="text-gray-600 mb-6">
                  Reaching students and young adults with the Gospel on local campuses.
                </p>
                <Link 
                  href="/ministries" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verse of the Day */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <VerseOfTheDay className="shadow-soft-lg" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-navy-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Ready to Take Your Next Step?
            </h2>
            <p className="text-xl mb-12 text-navy-100">
              Whether you're seeking prayer, wanting to connect, or looking to serve, 
              we're here to help you on your spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-navy-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Request Prayer
              </Link>
              <Link 
                href="/events" 
                className="border-2 border-white text-white hover:bg-white hover:text-navy-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View Events
              </Link>
              <Link 
                href="/give" 
                className="bg-gradient-to-r from-magenta-600 to-accent-600 hover:from-magenta-700 hover:to-accent-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-magenta-300"
              >
                Give Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
