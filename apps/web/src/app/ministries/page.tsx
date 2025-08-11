import { Metadata } from 'next'
import Image from 'next/image'
import { Users, Heart, BookOpen, MapPin, Clock, Mail, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ministries | Deeper Life Bible Church Huntsville',
  description: 'Discover the various ministries at Deeper Life Bible Church Huntsville. Find opportunities to serve, grow, and connect with others in our community.',
}

export default function MinistriesPage() {
  const ministries = [
    {
      id: 1,
      title: "Children's Ministry",
      description: "Nurturing young hearts with age-appropriate biblical teaching and fun activities that help children grow in their faith.",
      leader: "Sister Mary Johnson",
      ageGroup: "Ages 3-12",
      meetingTime: "Sundays during worship service",
      location: "Children's Hall",
      image: "/assets/church_scenes/Young-adult-pastor.jpg",
      contact: "children@deeperlifehuntsville.org",
      activities: [
        "Bible stories and lessons",
        "Worship songs and prayer",
        "Crafts and activities",
        "Character building programs"
      ]
    },
    {
      id: 2,
      title: "Women's Fellowship",
      description: "Building sisterhood through Bible study, prayer, and community outreach while supporting one another in faith.",
      leader: "Sister Grace Williams",
      ageGroup: "All women",
      meetingTime: "2nd Saturday of each month, 10:00 AM",
      location: "Fellowship Hall",
      image: "/assets/church_scenes/Testimony_women-leader.jpg",
      contact: "women@deeperlifehuntsville.org",
      activities: [
        "Monthly Bible study",
        "Prayer and fellowship",
        "Community service projects",
        "Women's conferences and retreats"
      ]
    },
    {
      id: 3,
      title: "Campus Outreach",
      description: "Reaching students and young adults with the Gospel on local campuses and universities.",
      leader: "Brother David Thompson",
      ageGroup: "College students & young adults",
      meetingTime: "Fridays 7:00 PM",
      location: "Various campus locations",
      image: "/assets/church_scenes/choir_ministration.jpg",
      contact: "campus@deeperlifehuntsville.org",
      activities: [
        "Campus Bible studies",
        "Evangelism outreach",
        "Student fellowship events",
        "Mentorship programs"
      ]
    },
    {
      id: 4,
      title: "Men's Fellowship",
      description: "Encouraging men to be godly leaders in their homes, workplaces, and communities through fellowship and accountability.",
      leader: "Brother James Wilson",
      ageGroup: "All men",
      meetingTime: "1st Saturday of each month, 8:00 AM",
      location: "Main Sanctuary",
      image: "/assets/church_scenes/Pastor1.jpg",
      contact: "men@deeperlifehuntsville.org",
      activities: [
        "Men's Bible study",
        "Prayer breakfast",
        "Community service",
        "Leadership development"
      ]
    },
    {
      id: 5,
      title: "Choir Ministry",
      description: "Leading the congregation in worship through song and music, bringing glory to God through our voices and instruments.",
      leader: "Brother Michael Davis",
      ageGroup: "All ages",
      meetingTime: "Saturdays 4:00 PM (Practice)",
      location: "Main Sanctuary",
      image: "/assets/church_scenes/choir_ministration.jpg",
      contact: "music@deeperlifehuntsville.org",
      activities: [
        "Weekly choir practice",
        "Sunday worship leading",
        "Special music events",
        "Community performances"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Ministries
            </h1>
            <p className="text-xl text-gray-100">
              Discover opportunities to grow, serve, and connect with others in our church community.
            </p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Get Involved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're looking to serve, learn, or build relationships, 
              there's a place for you in our ministry family.
            </p>
          </div>

          <div className="space-y-16">
            {ministries.map((ministry, index) => (
              <div key={ministry.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
                    <Image
                      src={ministry.image}
                      alt={ministry.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                    {ministry.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {ministry.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Leader</p>
                        <p className="text-gray-600">{ministry.leader}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Age Group</p>
                        <p className="text-gray-600">{ministry.ageGroup}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Meeting Time</p>
                        <p className="text-gray-600">{ministry.meetingTime}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600">{ministry.location}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What We Do:</h4>
                    <ul className="space-y-2">
                      {ministry.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`mailto:${ministry.contact}`}
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Get Involved
                    </a>
                    <a 
                      href="/contact"
                      className="inline-flex items-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Ready to Get Involved?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Don't see a ministry that fits your interests? We'd love to help you 
              start something new or find the perfect place for you to serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Pastor
              </a>
              <a 
                href="tel:+12566794121" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300"
              >
                Call: (256) 679-4121
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
