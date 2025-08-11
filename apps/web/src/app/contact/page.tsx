'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Send, Users, Heart } from 'lucide-react'

export default function ContactPage() {
  // Set document title and meta description for client component
  useEffect(() => {
    document.title = 'Contact Us | Deeper Life Bible Church Huntsville'
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get in touch with Deeper Life Bible Church Huntsville. Submit prayer requests, visitor information, or contact us for questions about our church services and ministries.')
    } else {
      const meta = document.createElement('meta')
      meta.name = 'description'
      meta.content = 'Get in touch with Deeper Life Bible Church Huntsville. Submit prayer requests, visitor information, or contact us for questions about our church services and ministries.'
      document.head.appendChild(meta)
    }
  }, [])

  const [formType, setFormType] = useState<'prayer' | 'visitor'>('visitor')
  
  const [prayerFormData, setPrayerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    urgent: false,
    anonymous: false
  })

  const [visitorFormData, setVisitorFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    visitType: 'first-time',
    interests: [] as string[],
    followUpPreference: 'email',
    comments: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const formData = formType === 'prayer' ? prayerFormData : visitorFormData
      
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: formType,
          ...formData
        }),
      })

      const result = await response.json()

      if (result.success) {
        const successMessage = formType === 'prayer' 
          ? 'Thank you! Your prayer request has been submitted.' 
          : 'Thank you! We look forward to connecting with you.'
        setMessage(successMessage)
        
        if (formType === 'prayer') {
          setPrayerFormData({
            name: '',
            email: '',
            phone: '',
            request: '',
            urgent: false,
            anonymous: false
          })
        } else {
          setVisitorFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            visitType: 'first-time',
            interests: [],
            followUpPreference: 'email',
            comments: ''
          })
        }
      } else {
        setMessage('There was an error submitting your request. Please try again.')
      }
    } catch (error) {
      setMessage('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePrayerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setPrayerFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setPrayerFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleVisitorInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setVisitorFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleInterestChange = (interest: string) => {
    setVisitorFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-100">
              We'd love to hear from you. Reach out with questions, prayer requests, or just to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      200 Parkway Dr NW<br />
                      Huntsville, AL 35801
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+12566794121</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@deeperlifehuntsville.org</p>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Times</h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Sunday Worship</span>
                    <span>10:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bible Study</span>
                    <span>Tuesdays 6:30 PM</span>
                  </div>
                  <div className="text-sm text-gray-500 text-right">
                    Zoom: 2566794121
                  </div>
                  <div className="flex justify-between">
                    <span>Prayer Meeting</span>
                    <span>Wednesdays 6:30 PM</span>
                  </div>
                  <div className="text-sm text-gray-500 text-right">
                    Zoom: 2566794121
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="card p-8">
              {/* Form Type Toggle */}
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-4 bg-gray-100 rounded-lg p-2">
                  <button
                    onClick={() => setFormType('visitor')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                      formType === 'visitor'
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Users className="h-4 w-4" />
                    <span>Visitor Info</span>
                  </button>
                  <button
                    onClick={() => setFormType('prayer')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                      formType === 'prayer'
                        ? 'bg-primary-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                    <span>Prayer Request</span>
                  </button>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {formType === 'prayer' ? 'Submit a Prayer Request' : 'Visitor Information'}
              </h2>
              
              {message && (
                <div className={`p-4 rounded-lg mb-6 ${
                  message.includes('Thank you') 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {formType === 'prayer' ? (
                  // Prayer Request Form
                  <>
                    <div>
                      <label htmlFor="prayer-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="prayer-name"
                        name="name"
                        value={prayerFormData.name}
                        onChange={handlePrayerInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="prayer-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="prayer-email"
                        name="email"
                        value={prayerFormData.email}
                        onChange={handlePrayerInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="prayer-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="prayer-phone"
                        name="phone"
                        value={prayerFormData.phone}
                        onChange={handlePrayerInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="prayer-request" className="block text-sm font-medium text-gray-700 mb-2">
                        Prayer Request *
                      </label>
                      <textarea
                        id="prayer-request"
                        name="request"
                        rows={4}
                        value={prayerFormData.request}
                        onChange={handlePrayerInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Please share your prayer request..."
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="urgent"
                          name="urgent"
                          checked={prayerFormData.urgent}
                          onChange={handlePrayerInputChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="urgent" className="ml-2 text-sm text-gray-700">
                          This is an urgent prayer request
                        </label>
                      </div>

                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="anonymous"
                          name="anonymous"
                          checked={prayerFormData.anonymous}
                          onChange={handlePrayerInputChange}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                          Please keep this request anonymous
                        </label>
                      </div>
                    </div>
                  </>
                ) : (
                  // Visitor Information Form
                  <>
                    <div>
                      <label htmlFor="visitor-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="visitor-name"
                        name="name"
                        value={visitorFormData.name}
                        onChange={handleVisitorInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="visitor-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="visitor-email"
                        name="email"
                        value={visitorFormData.email}
                        onChange={handleVisitorInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="visitor-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="visitor-phone"
                        name="phone"
                        value={visitorFormData.phone}
                        onChange={handleVisitorInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="visitor-address" className="block text-sm font-medium text-gray-700 mb-2">
                        Address (Optional)
                      </label>
                      <textarea
                        id="visitor-address"
                        name="address"
                        rows={2}
                        value={visitorFormData.address}
                        onChange={handleVisitorInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Street address, city, state, zip"
                      />
                    </div>

                    <div>
                      <label htmlFor="visit-type" className="block text-sm font-medium text-gray-700 mb-2">
                        Visit Type
                      </label>
                      <select
                        id="visit-type"
                        name="visitType"
                        value={visitorFormData.visitType}
                        onChange={handleVisitorInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="first-time">First-time visitor</option>
                        <option value="return">Returning visitor</option>
                        <option value="member">Current member</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Ministry Interests (Check all that apply)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Children's Ministry",
                          "Women's Fellowship", 
                          "Campus Outreach",
                          "Music Ministry",
                          "Prayer Ministry",
                          "Community Outreach"
                        ].map((interest) => (
                          <div key={interest} className="flex items-center">
                            <input
                              type="checkbox"
                              id={interest}
                              checked={visitorFormData.interests.includes(interest)}
                              onChange={() => handleInterestChange(interest)}
                              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                            />
                            <label htmlFor={interest} className="ml-2 text-sm text-gray-700">
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="follow-up" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="follow-up"
                        name="followUpPreference"
                        value={visitorFormData.followUpPreference}
                        onChange={handleVisitorInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone call</option>
                        <option value="text">Text message</option>
                        <option value="no-contact">No follow-up needed</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="visitor-comments" className="block text-sm font-medium text-gray-700 mb-2">
                        Comments or Questions
                      </label>
                      <textarea
                        id="visitor-comments"
                        name="comments"
                        rows={3}
                        value={visitorFormData.comments}
                        onChange={handleVisitorInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Is there anything specific you'd like to know about our church?"
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>
                        {formType === 'prayer' ? 'Submit Prayer Request' : 'Submit Information'}
                      </span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
