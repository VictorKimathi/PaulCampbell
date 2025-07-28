import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedinIcon, MailIcon, PhoneIcon, FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Paul Campbell</h3>
            <p className="text-gray-400 mb-4">
              Automotive Copywriter & Former Mechanic
            </p>
            <p className="text-gray-400">
              Where Mechanical Precision Meets Editorial Excellence
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MailIcon size={18} className="mr-2" />
                <a href="mailto:paul@example.com" className="hover:text-white transition-colors">
                  paul@example.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <PhoneIcon size={18} className="mr-2" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-gray-400 mt-4">
                <p>City, State/Country</p>
                <p>Response Time: Within 24 hours</p>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-medium mb-2">Newsletter</h5>
              <form className="flex">
                <input type="email" placeholder="Your email" className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none w-full" />
                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Paul Campbell. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;