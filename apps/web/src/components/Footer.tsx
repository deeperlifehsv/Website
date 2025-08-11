import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                <img
                  src="/assets/logo.png"
                  alt="Deeper Life Bible Church Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-bold">Deeper Life Bible Church</h3>
            </div>
            <p className="text-gray-300 mb-4">
              A place where faith comes alive and community thrives in Huntsville, Alabama.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/deeperlifehuntsville" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@DeeperLifeHuntsville" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/deeperlifehuntsville" className="text-gray-300 hover:text-primary-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/give" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Give
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="font-medium">Sunday Worship</p>
                <p>10:00 AM</p>
              </div>
              <div>
                <p className="font-medium">Bible Study</p>
                <p>Tuesdays 6:30 PM</p>
                <p className="text-sm text-gray-400">Zoom: 2566794121</p>
              </div>
              <div>
                <p className="font-medium">Prayer Meeting</p>
                <p>Wednesdays 6:30 PM</p>
                <p className="text-sm text-gray-400">Zoom: 2566794121</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>200 Parkway Dr NW</p>
                  <p>Huntsville, AL 35801</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">+1 (256) 679-4121</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">info@deeperlifehuntsville.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Deeper Life Bible Church Huntsville. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
