import { Metadata } from 'next'
import { Heart, CreditCard, Building, Users, Gift, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Give | Deeper Life Bible Church Huntsville',
  description: 'Support the ministry of Deeper Life Bible Church Huntsville through your generous giving. Learn about tithes, offerings, and how your gifts make a difference.',
}

export default function GivePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Give
            </h1>
            <p className="text-xl text-gray-100">
              Your generosity helps us fulfill our mission to share God's love and serve our community.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Give */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Why We Give
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Giving is an act of worship and obedience to God. It allows us to participate 
              in His work and extend His kingdom here on earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Worship</h3>
              <p className="text-gray-600 text-sm">
                Giving is an expression of our love and gratitude to God.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ministry</h3>
              <p className="text-gray-600 text-sm">
                Your gifts support our pastoral care and discipleship programs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Outreach</h3>
              <p className="text-gray-600 text-sm">
                We reach our community through evangelism and service projects.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Missions</h3>
              <p className="text-gray-600 text-sm">
                Supporting global missions and church planting efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="bg-cream-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Ways to Give
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've made it easy and secure for you to give your tithes and offerings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Online Giving */}
            <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Online Giving</h3>
              <p className="text-gray-600 mb-6">
                Give securely online using your credit card, debit card, or bank transfer.
              </p>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                Give Online
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Secure SSL encrypted transactions
              </p>
            </div>

            {/* Mobile App */}
            <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <div className="text-2xl font-bold text-primary-600">📱</div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Mobile App</h3>
              <p className="text-gray-600 mb-6">
                Download our mobile app for convenient giving on the go.
              </p>
              <button className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                Download App
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Available on iOS and Android
              </p>
            </div>

            {/* In-Person */}
            <div className="bg-white rounded-2xl shadow-soft p-8 text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">In-Person</h3>
              <p className="text-gray-600 mb-6">
                Bring your offering during our Sunday worship service.
              </p>
              <div className="text-primary-600 font-semibold py-3 px-6">
                Sunday 10:00 AM
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Cash, check, or money order accepted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                Biblical Foundation for Giving
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Tithing</h3>
                <blockquote className="text-lg text-gray-700 italic mb-4 border-l-4 border-primary-600 pl-4">
                  "Bring the whole tithe into the storehouse, that there may be food in my house. 
                  Test me in this," says the Lord Almighty, "and see if I will not throw open 
                  the floodgates of heaven and pour out so much blessing that there will not be 
                  room enough to store it."
                </blockquote>
                <cite className="text-primary-600 font-semibold">- Malachi 3:10</cite>
                <p className="text-gray-600 mt-4">
                  The tithe (10% of our income) is our first and best offering to God, 
                  acknowledging His provision and lordship over our lives.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Cheerful Giving</h3>
                <blockquote className="text-lg text-gray-700 italic mb-4 border-l-4 border-primary-600 pl-4">
                  "Each of you should give what you have decided in your heart to give, 
                  not reluctantly or under compulsion, for God loves a cheerful giver."
                </blockquote>
                <cite className="text-primary-600 font-semibold">- 2 Corinthians 9:7</cite>
                <p className="text-gray-600 mt-4">
                  Our giving should be voluntary, intentional, and joyful, flowing from 
                  a heart of gratitude and trust in God's provision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Your Impact
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              See how your generous giving is making a difference in our church and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold mb-2">15+</div>
              <div className="text-primary-100">Years of Ministry</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">500+</div>
              <div className="text-primary-100">Lives Touched</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">5+</div>
              <div className="text-primary-100">Active Ministries</div>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold mb-2">100+</div>
              <div className="text-primary-100">Community Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="bg-cream-50 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Questions About Giving?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help! If you have questions about giving, tithing, or how 
              your gifts are used, please don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
              <a 
                href="tel:+12566794121" 
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300"
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
