
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import CallToAction from '../components/shared/CallToAction';
import { Shield, Mail, Lock, Activity, Fingerprint, Cpu } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-tight mb-6">
                <span className="gradient-text">AI-Powered</span> Protection for State Government
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
                SecureState uses advanced artificial intelligence to identify and block phishing, ransomware, and malware targeting state employees and citizens.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center">
                  Get Started
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link to="/demo" className="btn-outline">
                  View Demo
                </Link>
              </div>
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  {['in', 'usa', 'nz', 'it'].map((state) => (
                    <img 
                      key={state}
                      src={`/images/${state}.png`}
                      alt={`${state.toUpperCase()} State Government`}
                      className="inline-block h-8 w-8 rounded-full object-cover border-2 border-white"
                    />
                  ))}
                </div>
                <span className="ml-4 text-gray-600">Trusted by 25+ national agencies</span>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 bg-white rounded-xl shadow-xl p-4 border border-secureblue-100 animate-float">
                <div className="bg-secureblue-600 rounded-lg p-4 text-white">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <Shield className="h-6 w-6 mr-2" />
                      <span className="font-semibold">SecureState Dashboard</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="h-3 w-3 rounded-full bg-secureblue-300"></div>
                      <div className="h-3 w-3 rounded-full bg-secureblue-200"></div>
                      <div className="h-3 w-3 rounded-full bg-secureblue-100"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-secureblue-500 p-3 rounded">
                      <div className="text-xs text-secureblue-100">Threats Blocked Today</div>
                      <div className="text-2xl font-bold">247</div>
                    </div>
                    <div className="bg-secureblue-500 p-3 rounded">
                      <div className="text-xs text-secureblue-100">Protection Status</div>
                      <div className="text-lg font-bold text-green-300">Active</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center px-2 py-3 bg-secureblue-50 rounded mb-2">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-red-500 mr-2" />
                      <span className="text-sm">Phishing Attempt Blocked</span>
                    </div>
                    <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">High Risk</span>
                  </div>
                  <div className="flex justify-between items-center px-2 py-3 bg-secureblue-50 rounded mb-2">
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-amber-500 mr-2" />
                      <span className="text-sm">Ransomware Prevention</span>
                    </div>
                    <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded">Medium Risk</span>
                  </div>
                  <div className="flex justify-between items-center px-2 py-3 bg-secureblue-50 rounded">
                    <div className="flex items-center">
                      <Activity className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-sm">System Scan Complete</span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Secure</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-secureblue-200 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute -top-10 -right-10 h-40 w-40 bg-secureblue-300 rounded-full filter blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-secureblue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-secureblue-600 font-medium">Trusted by government agencies worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['dubai', 'usaa', 'india', 'korea', 'newzealand', 'australian'].map((state) => (
              <div key={state} className="flex items-center justify-center">
                <img 
                  src={`/images/${state}.png`} 
                  alt={`${state.toUpperCase()} State Government`}
                  className="h-12 w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title gradient-text">Comprehensive Protection</h2>
            <p className="section-subtitle mx-auto">
              SecureState's AI-powered platform provides multi-layered protection against the most common and sophisticated cyber threats.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="feature-card">
              <Mail className="h-10 w-10 text-secureblue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phishing Protection</h3>
              <p className="text-gray-600 mb-4">
                Identifies and blocks sophisticated phishing attempts targeting state employees through email, messaging, and online platforms.
              </p>
              <Link to="/features" className="text-secureblue-500 font-medium inline-flex items-center mt-auto">
                Learn more
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card">
              <Lock className="h-10 w-10 text-secureblue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ransomware Defense</h3>
              <p className="text-gray-600 mb-4">
                Detects and prevents ransomware before encryption begins, protecting critical government data and systems from lockouts.
              </p>
              <Link to="/features" className="text-secureblue-500 font-medium inline-flex items-center mt-auto">
                Learn more
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card">
              <Activity className="h-10 w-10 text-secureblue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Malware Detection</h3>
              <p className="text-gray-600 mb-4">
                Continuously scans for and eliminates malicious software using behavioral analysis and machine learning techniques.
              </p>
              <Link to="/features" className="text-secureblue-500 font-medium inline-flex items-center mt-auto">
                Learn more
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Feature 4 */}
            <div className="feature-card">
              <Fingerprint className="h-10 w-10 text-secureblue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Identity Protection</h3>
              <p className="text-gray-600 mb-4">
                Safeguards citizen and employee identities through multi-factor authentication and identity verification systems.
              </p>
              <Link to="/features" className="text-secureblue-500 font-medium inline-flex items-center mt-auto">
                Learn more
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Feature 5 */}
            <div className="feature-card">
              <Shield className="h-10 w-10 text-secureblue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600 mb-4">
                24/7 surveillance of network traffic, user behavior, and system activity to immediately detect and respond to security incidents.
              </p>
              <Link to="/features" className="text-secureblue-500 font-medium inline-flex items-center mt-auto">
                Learn more
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            {/* Feature 6 */}
            <div className="feature-card">
              <Cpu className="h-10 w-10 text-secureblue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI Learning Systems</h3>
              <p className="text-gray-600 mb-4">
                Machine learning algorithms that continuously adapt to emerging threats, ensuring protection against the latest attack vectors.
              </p>
              <Link to="/features" className="text-secureblue-500 font-medium inline-flex items-center mt-auto">
                Learn more
                <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-secureblue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="section-title">How SecureState Works</h2>
              <p className="text-lg text-gray-600 mb-8">
                SecureState's multi-layered AI uses advanced algorithms to identify, analyze, and neutralize threats before they can do damage.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-500 flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Continuous Monitoring</h3>
                    <p className="text-gray-600">AI constantly analyzes network traffic, emails, and system behavior.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-500 flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Threat Assessment</h3>
                    <p className="text-gray-600">Machine learning algorithms identify suspicious patterns and potential threats.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-500 flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Immediate Response</h3>
                    <p className="text-gray-600">Automatic intervention blocks threats before they can compromise systems.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-500 flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Continuous Learning</h3>
                    <p className="text-gray-600">The system evolves with each incident, improving future threat detection.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about" className="btn-primary">Learn More</Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-secureblue-100">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-secureblue-100 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-secureblue-500 flex items-center justify-center cursor-pointer">
                      <svg className="h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">See SecureState in Action</h3>
                <p className="text-gray-600">
                  Watch how our AI-powered system identifies and neutralizes threats in real-time, keeping government systems safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">What Government Officials Say</h2>
            <p className="section-subtitle mx-auto">
              Trusted by state agencies and government departments across the country.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl border border-secureblue-100 shadow-sm">
              <div className="flex items-center mb-4">
              <img src="/images/sb.png" alt="Swarnim Bandekar" className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold">Swarnim Bandekar</h4>
                  <p className="text-sm text-gray-600">Chief Information Security Officer, KA</p>
                </div>
              </div>
              <p className="text-gray-600">
                "SecureState has dramatically reduced our security incidents. The AI detection capabilities have identified sophisticated phishing attempts that traditional systems would have missed."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl border border-secureblue-100 shadow-sm">
              <div className="flex items-center mb-4">
                <img src="/images/vb.png" alt="Vedhant Bidari" className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold">Vedhant Bidari</h4>
                  <p className="text-sm text-gray-600">IT Director, Department of Administrative Services</p>
                </div>
              </div>
              <p className="text-gray-600">
                "After implementing SecureState, we've seen a 94% reduction in ransomware incidents. The early detection system has saved us from potentially devastating attacks multiple times."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl border border-secureblue-100 shadow-sm">
              <div className="flex items-center mb-4">
              <img src="/images/hara.png" alt="Hara" className="h-12 w-12 rounded-full object-cover mr-4" />
                <div>
                  <h4 className="font-semibold">Beast Hara</h4>
                  <p className="text-sm text-gray-600">Cybersecurity Analyst, Digital Service</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The continuous learning capabilities of SecureState have been impressive. The system gets smarter with each attack it detects, providing increasingly better protection for our citizens' data."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-secureblue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <p className="text-secureblue-200">Threat Detection Rate</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <p className="text-secureblue-200">Continuous Monitoring</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">94%</div>
              <p className="text-secureblue-200">Reduction in Incidents</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <p className="text-secureblue-200">State Agencies Protected</p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </Layout>
  );
};

export default Index;
