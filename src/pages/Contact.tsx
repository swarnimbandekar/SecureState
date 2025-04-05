import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/shared/PageHeader';
import { MapPin, Phone, Mail, Clock, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    subject: '',
    message: '',
    requestType: 'information'
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Layout>
      <PageHeader 
        title="Contact Us"
        description="Reach out to learn more about SecureState or request a demonstration."
      />
      
      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about SecureState or want to schedule a demonstration? Fill out the form below and our team will get back to you promptly.
              </p>
              
              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800">Thank You!</h3>
                  </div>
                  <p className="text-green-700 mb-4">
                    Your message has been received. A member of our team will be in touch with you shortly.
                  </p>
                  <button 
                    className="text-green-700 font-medium hover:text-green-800"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        phone: '',
                        subject: '',
                        message: '',
                        requestType: 'information'
                      });
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secureblue-500 focus:border-secureblue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secureblue-500 focus:border-secureblue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secureblue-500 focus:border-secureblue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secureblue-500 focus:border-secureblue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-1">Request Type</label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={formData.requestType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secureblue-500 focus:border-secureblue-500"
                      required
                    >
                      <option value="information">General Information</option>
                      <option value="demo">Request a Demo</option>
                      <option value="quote">Request a Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secureblue-500 focus:border-secureblue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-secureblue-500 focus:border-secureblue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="btn-primary w-full md:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-secureblue-50 rounded-xl overflow-hidden">
                <div className="bg-secureblue-600 p-6 text-white">
                  <h3 className="text-2xl font-bold font-display mb-2">Contact Information</h3>
                  <p className="text-secureblue-100">
                    Reach out to us directly or visit our headquarters.
                  </p>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Headquarters</h4>
                      <p className="text-gray-600">
                        Bangalore<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">
                        Main: (555) 123-4567<br />
                        Support: (555) 987-6543
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        General: info@securestate.gov<br />
                        Support: support@securestate.gov<br />
                        Sales: sales@securestate.gov
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 mr-4">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Hours of Operation</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM ET<br />
                        Saturday - Sunday: Closed<br />
                        24/7 Emergency Support Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white border border-secureblue-100 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Regional Offices</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Bangalore Office</h4>
                    <p className="text-gray-600">
                      Bangalore<br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-secureblue-50 h-96 rounded-xl"></div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secureblue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Find answers to commonly asked questions about SecureState.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">How quickly can SecureState be implemented?</h3>
                <p className="text-gray-600">
                  Implementation time varies based on the size and complexity of your state's infrastructure, but most agencies can be fully protected within 4-6 weeks. Our team works to minimize disruption during the transition.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Is SecureState compliant with government security regulations?</h3>
                <p className="text-gray-600">
                  Yes, SecureState is fully compliant with federal and state cybersecurity regulations, including FISMA, NIST 800-53, and state-specific security frameworks. We maintain all necessary certifications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">How does SecureState's AI differ from traditional security solutions?</h3>
                <p className="text-gray-600">
                  Traditional solutions rely primarily on known threat signatures. SecureState's AI analyzes behavioral patterns to identify both known and unknown threats, adapting to new attack vectors in real-time without requiring manual updates.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Can SecureState integrate with our existing security infrastructure?</h3>
                <p className="text-gray-600">
                  Absolutely. SecureState is designed to complement and enhance your existing security measures, not replace them. We offer flexible integration options to work with your current tools and protocols.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">What kind of support and training do you provide?</h3>
                <p className="text-gray-600">
                  We provide comprehensive onboarding, ongoing training for IT staff, and 24/7 technical support. Our customer success team works with you throughout the implementation process and beyond to ensure maximum protection.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="mb-4">Don't see your question answered here?</p>
              <a href="#contact-form" className="btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
