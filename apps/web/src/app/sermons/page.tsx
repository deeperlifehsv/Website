import { Metadata } from 'next'
import { Calendar, User, BookOpen, Play, ExternalLink } from 'lucide-react'
import { getSermons } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Sermons | Deeper Life Bible Church Huntsville',
  description: 'Listen to inspiring sermons from Deeper Life Bible Church Huntsville. Access our library of biblical teachings and messages that strengthen faith and transform lives.',
}

interface Sermon {
  _id: string
  title: string
  slug: { current: string }
  date: string
  speaker: string
  youtubeUrl?: string
  scripture: string
  thumbnail?: any
  summary: string
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function getYouTubeEmbedUrl(url: string) {
  if (!url) return null
  
  // Extract video ID from various YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`
  }
  
  return null
}

export default async function SermonsPage() {
  const sermons = await getSermons() as Sermon[]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sermons
            </h1>
            <p className="text-xl text-gray-100">
              Listen to biblical teachings that inspire, encourage, and challenge us 
              to grow deeper in our relationship with God.
            </p>
          </div>
        </div>
      </section>

      {/* Sermons List */}
      {sermons && sermons.length > 0 ? (
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Recent Messages
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our collection of biblical teachings and be encouraged in your faith journey
              </p>
            </div>

            <div className="space-y-8">
              {sermons.map((sermon) => {
                const embedUrl = sermon.youtubeUrl ? getYouTubeEmbedUrl(sermon.youtubeUrl) : null
                
                return (
                  <div key={sermon._id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Video/Thumbnail Section */}
                      <div className="lg:col-span-1">
                        {embedUrl ? (
                          <div className="aspect-video">
                            <iframe
                              src={embedUrl}
                              title={sermon.title}
                              className="w-full h-full"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                            <Play className="h-16 w-16 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="lg:col-span-2 p-8">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {sermon.scripture}
                          </span>
                          <span className="text-sm text-gray-500">
                            {formatDate(sermon.date)}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                          {sermon.title}
                        </h3>
                        
                        <div className="flex items-center text-gray-600 mb-6">
                          <User className="h-5 w-5 mr-2 text-primary-600" />
                          <span className="font-medium">{sermon.speaker}</span>
                          <Calendar className="h-5 w-5 ml-6 mr-2 text-primary-600" />
                          <span>{formatDate(sermon.date)}</span>
                        </div>
                        
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                          {sermon.summary}
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                          {sermon.youtubeUrl && (
                            <a
                              href={sermon.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
                            >
                              <Play className="h-5 w-5 mr-2" />
                              Watch on YouTube
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                          )}
                          <button className="inline-flex items-center border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors duration-200">
                            <BookOpen className="h-5 w-5 mr-2" />
                            Read Scripture
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : (
        /* No Sermons Message */
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Sermons Coming Soon
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're working on making our sermon library available online. 
                In the meantime, join us for live worship services!
              </p>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">
                  Join Us for Live Services
                </h3>
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
        </section>
      )}

      {/* Featured Scripture */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-8">
              God's Word Transforms Lives
            </h2>
            <blockquote className="text-2xl text-gray-700 font-medium leading-relaxed mb-8 italic">
              "All Scripture is breathed out by God and profitable for teaching, for reproof, 
              for correction, and for training in righteousness, that the man of God may be 
              complete, equipped for every good work."
            </blockquote>
            <cite className="text-lg text-primary-600 font-medium">2 Timothy 3:16-17</cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Join Us This Sunday
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Experience the transforming power of God's Word in person. 
              All are welcome to join our Sunday worship service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
              >
                Get Directions
              </a>
              <a
                href="https://youtube.com/@DeeperLifeHuntsville"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
