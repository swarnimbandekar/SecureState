
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secureblue-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-display font-bold">SecureState</span>
            </Link>
            <p className="text-secureblue-100 mb-6">
              AI-powered cybersecurity to protect state governments and citizens from modern digital threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="p-2 bg-secureblue-500 rounded-full hover:bg-secureblue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/swarnimbandekar/" aria-label="LinkedIn" className="p-2 bg-secureblue-500 rounded-full hover:bg-secureblue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://github.com/swarnimbandekar/" aria-label="GitHub" className="p-2 bg-secureblue-500 rounded-full hover:bg-secureblue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secureblue-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secureblue-200 transition-colors">About</Link></li>
              <li><Link to="/features" className="hover:text-secureblue-200 transition-colors">Features</Link></li>
              <li><Link to="/demo" className="hover:text-secureblue-200 transition-colors">Demo</Link></li>
              <li><Link to="/resources" className="hover:text-secureblue-200 transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="hover:text-secureblue-200 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secureblue-200 transition-colors">Cybersecurity Best Practices</a></li>
              <li><a href="#" className="hover:text-secureblue-200 transition-colors">AI Detection Methods</a></li>
              <li><a href="#" className="hover:text-secureblue-200 transition-colors">Ransomware Protection</a></li>
              <li><a href="#" className="hover:text-secureblue-200 transition-colors">Phishing Prevention</a></li>
              <li><a href="#" className="hover:text-secureblue-200 transition-colors">Malware Defense</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-secureblue-200 mt-0.5" />
                <span>VIT-AP University, Vijayawada</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-secureblue-200 mt-0.5" />
                <span>123456789</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-secureblue-200 mt-0.5" />
                <span>contact@securestate.domain</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secureblue-500 text-center text-secureblue-200">
          <p>&copy; {new Date().getFullYear()} SecureState. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
