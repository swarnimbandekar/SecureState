
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/shared/PageHeader';
import CallToAction from '../components/shared/CallToAction';
import { Cpu, Database, Network, Code, Shield, Eye } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <PageHeader 
        title="About SecureState"
        description="Learn how our AI-powered cybersecurity platform protects state governments and citizens from modern digital threats."
      />
      
      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="section-title">Our Mission</h2>
              <p className="text-lg mb-6">
                At SecureState, our mission is to protect state governments and citizens from evolving cyber threats through advanced artificial intelligence and machine learning technologies.
              </p>
              <p className="text-lg mb-6">
                We believe that every government agency and citizen deserves access to enterprise-grade security that can identify and neutralize sophisticated threats before they cause harm.
              </p>
              <p className="text-lg">
                Through continuous innovation and partnership with cybersecurity experts, we're building a safer digital environment for government operations and citizen services.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-video bg-secureblue-100 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-secureblue-600 bg-opacity-90 p-8 rounded-lg max-w-md">
                    <h3 className="text-2xl font-bold text-white mb-4">Protecting Digital Infrastructure</h3>
                    <p className="text-secureblue-100">
                      Our AI-powered solutions safeguard critical government systems and sensitive citizen data from increasingly sophisticated cyber attacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* AI Technology Section */}
      <section className="py-16 md:py-24 bg-secureblue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Our AI Technology</h2>
            <p className="section-subtitle mx-auto">
              SecureState leverages cutting-edge artificial intelligence and machine learning to provide comprehensive protection.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secureblue-100">
              <Cpu className="h-12 w-12 text-secureblue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-3">Machine Learning Core</h3>
              <p className="text-gray-600">
                Our AI models are trained on vast datasets of known cyber threats and continuously learn from new patterns and attack vectors.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secureblue-100">
              <Database className="h-12 w-12 text-secureblue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-3">Threat Database</h3>
              <p className="text-gray-600">
                We maintain a comprehensive and constantly updated database of threat signatures, behaviors, and indicators of compromise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secureblue-100">
              <Network className="h-12 w-12 text-secureblue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-3">Behavioral Analysis</h3>
              <p className="text-gray-600">
                Our system monitors network activity and user behavior to detect anomalies that may indicate a security breach or attack in progress.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secureblue-100">
              <Code className="h-12 w-12 text-secureblue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-3">Pattern Recognition</h3>
              <p className="text-gray-600">
                Advanced algorithms identify subtle patterns in data and code that reveal malicious intent, even in previously unseen threats.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secureblue-100">
              <Shield className="h-12 w-12 text-secureblue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-3">Adaptive Defense</h3>
              <p className="text-gray-600">
                Our protection mechanisms automatically adapt to new threats, creating a dynamic defense system that evolves with the threat landscape.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-secureblue-100">
              <Eye className="h-12 w-12 text-secureblue-500 mb-6" />
              <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
              <p className="text-gray-600">
                24/7 surveillance of all protected systems ensures immediate detection and response to potential security incidents.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">How Our AI Works</h2>
            <p className="section-subtitle mx-auto">
              SecureState employs a multi-layered approach to identify, analyze, and neutralize cyber threats before they can cause damage.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-secureblue-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 md:space-y-24 relative">
              {/* Item 1 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-secureblue-600 mb-3">Data Collection</h3>
                  <p className="text-gray-600">
                    Our system continuously gathers data from network traffic, email communications, user activities, and system operations.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secureblue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-secureblue-50 p-4 rounded-lg">
                    <p className="text-sm text-secureblue-700">
                      The data collection process is privacy-compliant and focuses on behavioral patterns rather than content.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:order-2 mb-6 md:mb-0 md:pl-12">
                  <h3 className="text-xl font-semibold text-secureblue-600 mb-3">Analysis & Pattern Recognition</h3>
                  <p className="text-gray-600">
                    Advanced machine learning algorithms analyze the collected data to identify suspicious patterns or anomalies that may indicate threats.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secureblue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:order-1 md:pr-12 md:text-right">
                  <div className="bg-secureblue-50 p-4 rounded-lg">
                    <p className="text-sm text-secureblue-700">
                      Our AI can detect subtle indicators of compromise that traditional security systems often miss.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-secureblue-600 mb-3">Threat Classification</h3>
                  <p className="text-gray-600">
                    Identified threats are classified by type, severity, target, and potential impact to prioritize response actions.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secureblue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-secureblue-50 p-4 rounded-lg">
                    <p className="text-sm text-secureblue-700">
                      Classification enables appropriate response measures tailored to each specific threat.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 md:order-2 mb-6 md:mb-0 md:pl-12">
                  <h3 className="text-xl font-semibold text-secureblue-600 mb-3">Response & Mitigation</h3>
                  <p className="text-gray-600">
                    Based on threat classification, the system automatically implements appropriate countermeasures to block or neutralize the threat.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secureblue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:order-1 md:pr-12 md:text-right">
                  <div className="bg-secureblue-50 p-4 rounded-lg">
                    <p className="text-sm text-secureblue-700">
                      Automated responses occur in milliseconds, allowing for immediate threat neutralization.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Item 5 */}
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-12 md:text-right">
                  <h3 className="text-xl font-semibold text-secureblue-600 mb-3">Learning & Improvement</h3>
                  <p className="text-gray-600">
                    The system learns from each incident, refining its detection algorithms and response strategies for future threats.
                  </p>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-secureblue-500 border-4 border-white"></div>
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-secureblue-50 p-4 rounded-lg">
                    <p className="text-sm text-secureblue-700">
                      Continuous learning ensures the system becomes more effective with each threat it encounters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link to="/demo" className="btn-primary">See Our AI in Action</Link>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-secureblue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle mx-auto">
              Our team combines expertise in cybersecurity, artificial intelligence, and public sector requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full bg-secureblue-200 mb-4"></div>
              <h3 className="text-xl font-semibold">Dr. Maria Chen</h3>
              <p className="text-secureblue-600 mb-3">Chief Executive Officer</p>
              <p className="text-gray-600">
                Former CISO for the Department of Homeland Security with 20+ years of cybersecurity experience.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full bg-secureblue-200 mb-4"></div>
              <h3 className="text-xl font-semibold">James Wilson</h3>
              <p className="text-secureblue-600 mb-3">Chief Technology Officer</p>
              <p className="text-gray-600">
                AI researcher and architect with previous experience at leading technology companies and government agencies.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full bg-secureblue-200 mb-4"></div>
              <h3 className="text-xl font-semibold">Sarah Patel</h3>
              <p className="text-secureblue-600 mb-3">Chief AI Scientist</p>
              <p className="text-gray-600">
                PhD in Machine Learning with specialization in anomaly detection and cybersecurity applications.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="h-48 w-48 mx-auto rounded-full bg-secureblue-200 mb-4"></div>
              <h3 className="text-xl font-semibold">Robert Jackson</h3>
              <p className="text-secureblue-600 mb-3">Director of Government Relations</p>
              <p className="text-gray-600">
                Former state IT director with deep understanding of public sector cybersecurity requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Partners</h2>
            <p className="section-subtitle mx-auto">
              We collaborate with leading organizations and agencies to enhance our protection capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-16 w-32 bg-secureblue-100 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
    </Layout>
  );
};

export default About;
