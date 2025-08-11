import { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Users, BookOpen, CheckCircle, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Deeper Life Bible Church Huntsville',
  description: 'Learn about our mission, vision, history, and leadership at Deeper Life Bible Church Huntsville. Discover our commitment to biblical teaching and community service.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-100">
              Discover our heart for God, love for His Word, and passion for serving our community in Huntsville, Alabama.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                To help people grow deeper in their relationship with God through His Word, 
                building stronger fellowship with one another, and reaching out to our 
                community with the love of Christ.
              </p>
              
              <div className="space-y-4">
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
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">Spiritual growth and discipleship</span>
                </div>
              </div>
            </div>
            
            <div>
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

      {/* Vision & Values */}
      <section className="bg-cream-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A community where every person experiences the transforming power of God's love 
              and finds their purpose in Christ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Biblical Foundation</h3>
              <p className="text-gray-600">
                We believe in the authority of Scripture and teach God's Word with clarity and conviction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Loving Community</h3>
              <p className="text-gray-600">
                We foster authentic relationships and provide support for one another in life's journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Community Outreach</h3>
              <p className="text-gray-600">
                We actively serve our local community and share God's love through practical action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
              Our History
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Deeper Life Bible Church Huntsville was established in 2009 with a heart to serve 
                the Huntsville community. Over 15+ years of ministry, we have been committed to 
                biblical truth, spiritual growth, and community outreach.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We are part of the global Deeper Life Bible Church family, which began in Nigeria 
                under the leadership of Pastor William Kumuyi. Our church emphasizes the importance 
                of deeper life in Christ through the study of God's Word, prayer, and holy living.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we continue to grow as a multicultural congregation, welcoming people from 
                all backgrounds to experience God's love and discover their purpose in Christ. 
                Our commitment remains steadfast: to teach God's Word faithfully, build authentic 
                community, and serve our neighbors with love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our pastoral team is committed to shepherding the flock with wisdom, 
              compassion, and biblical integrity.
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-white/80" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Pastor William Kumuyi</h3>
              <p className="text-primary-100 leading-relaxed">
                Pastor Kumuyi has been serving in ministry for over 20 years, dedicated to 
                teaching God's Word with clarity and passion. His heart for discipleship and 
                evangelism has shaped our church's commitment to biblical truth and community outreach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-cream-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Join Our Church Family
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're seeking spiritual growth, meaningful community, or a place to serve, 
              we invite you to discover your home at Deeper Life Bible Church Huntsville.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Visit This Sunday
              </a>
              <a 
                href="/contact" 
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Request Prayer
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
