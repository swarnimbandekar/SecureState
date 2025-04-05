
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/shared/PageHeader';
import CallToAction from '../components/shared/CallToAction';
import { Search, FileText, Video, Download, Book, ExternalLink } from 'lucide-react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  
  const resources = [
    {
      id: 1,
      title: 'State Employee Phishing Prevention Guide',
      description: 'Learn how to recognize and avoid sophisticated phishing attempts targeting government employees.',
      type: 'guide',
      format: 'PDF',
      category: 'phishing'
    },
    {
      id: 2,
      title: 'Ransomware Response Playbook',
      description: 'Step-by-step procedures for responding to a ransomware incident and minimizing damage.',
      type: 'playbook',
      format: 'PDF',
      category: 'ransomware'
    },
    {
      id: 3,
      title: 'Introduction to SecureState AI',
      description: 'Overview of how artificial intelligence protects state government systems from cyber threats.',
      type: 'video',
      format: 'Video',
      category: 'general'
    },
    {
      id: 4,
      title: 'Malware Detection and Prevention',
      description: 'Best practices for identifying and preventing malware infections in government systems.',
      type: 'guide',
      format: 'PDF',
      category: 'malware'
    },
    {
      id: 5,
      title: 'Cybersecurity Training for State Employees',
      description: 'Complete training program covering essential cybersecurity practices for government staff.',
      type: 'training',
      format: 'Interactive',
      category: 'training'
    },
    {
      id: 6,
      title: 'Data Security Best Practices',
      description: 'Guidelines for securing sensitive government and citizen data against unauthorized access.',
      type: 'guide',
      format: 'PDF',
      category: 'general'
    },
    {
      id: 7,
      title: 'Phishing Simulation Results Analysis',
      description: 'Understanding the results of phishing simulations and improving employee response.',
      type: 'report',
      format: 'PDF',
      category: 'phishing'
    },
    {
      id: 8,
      title: 'AI in Government Cybersecurity',
      description: 'Research paper on the effectiveness of AI in protecting government infrastructure.',
      type: 'research',
      format: 'PDF',
      category: 'general'
    },
    {
      id: 9,
      title: 'SecureState Implementation Guide',
      description: 'Technical guide for IT teams on implementing and configuring SecureState protection.',
      type: 'guide',
      format: 'PDF',
      category: 'general'
    },
  ];
  
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'all') {
      return matchesSearch;
    } else {
      return resource.category === activeTab && matchesSearch;
    }
  });
  
  const getResourceIcon = (type: string) => {
    switch(type) {
      case 'guide':
      case 'playbook':
      case 'report':
      case 'research':
        return <FileText className="h-6 w-6" />;
      case 'video':
        return <Video className="h-6 w-6" />;
      case 'training':
        return <Book className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  return (
    <Layout>
      <PageHeader 
        title="Resources"
        description="Educational materials and best practices for cybersecurity in state government."
      />
      
      {/* Resource Search and Filter */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:ring-secureblue-500 focus:border-secureblue-500"
              />
            </div>
          </div>
          
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'all' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All Resources
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'phishing' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('phishing')}
            >
              Phishing
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'ransomware' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('ransomware')}
            >
              Ransomware
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'malware' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('malware')}
            >
              Malware
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'training' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('training')}
            >
              Training
            </button>
            <button
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'general' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('general')}
            >
              General
            </button>
          </div>
          
          {filteredResources.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-lg border border-secureblue-100 shadow-sm overflow-hidden">
                  <div className={`p-4 ${
                    resource.format === 'PDF' ? 'bg-red-50' : 
                    resource.format === 'Video' ? 'bg-blue-50' : 
                    resource.format === 'Interactive' ? 'bg-green-50' : 'bg-gray-50'
                  } flex justify-between items-center`}>
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${
                        resource.format === 'PDF' ? 'bg-red-100 text-red-600' : 
                        resource.format === 'Video' ? 'bg-blue-100 text-blue-600' : 
                        resource.format === 'Interactive' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {getResourceIcon(resource.type)}
                      </div>
                      <span className="ml-3 font-medium">{resource.format}</span>
                    </div>
                    <span className="text-xs uppercase tracking-wide bg-white px-2 py-1 rounded font-medium text-gray-600">
                      {resource.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-6">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-secureblue-600">{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
                      <button className="inline-flex items-center text-secureblue-500 hover:text-secureblue-600 font-medium">
                        {resource.format === 'PDF' ? (
                          <>
                            <Download className="h-5 w-5 mr-1" />
                            Download
                          </>
                        ) : resource.format === 'Video' ? (
                          <>
                            <ExternalLink className="h-5 w-5 mr-1" />
                            Watch
                          </>
                        ) : (
                          <>
                            <ExternalLink className="h-5 w-5 mr-1" />
                            Access
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-block p-4 rounded-full bg-secureblue-100 mb-4">
                <Search className="h-8 w-8 text-secureblue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No resources found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Best Practices Section */}
      <section className="py-16 md:py-24 bg-secureblue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Cybersecurity Best Practices</h2>
            <p className="section-subtitle mx-auto">
              Essential security guidelines for state employees and citizens interacting with government services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">For State Employees</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 font-bold mr-4">1</div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Verify Email Sources</h4>
                      <p className="text-gray-600">
                        Always check sender email addresses carefully, especially for emails requesting sensitive information or containing links/attachments.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 font-bold mr-4">2</div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Use Strong, Unique Passwords</h4>
                      <p className="text-gray-600">
                        Create complex passwords for each system and change them regularly. Consider using a government-approved password manager.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 font-bold mr-4">3</div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Enable Multi-Factor Authentication</h4>
                      <p className="text-gray-600">
                        Use MFA for all government systems to add an extra layer of protection beyond passwords.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 font-bold mr-4">4</div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Keep Systems Updated</h4>
                      <p className="text-gray-600">
                        Install security updates promptly to protect against known vulnerabilities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">For Citizens</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 font-bold mr-4">1</div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Verify Government Websites</h4>
                      <p className="text-gray-600">
                        Ensure you're on official government websites (typically .gov domains) before entering personal information.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 font-bold mr-4">2</div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Be Cautious with Personal Information</h4>
                      <p className="text-gray-600">
                        Only provide personal details when necessary and through secure channels. Government agencies won't request sensitive information via email.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 font-bold mr-4">3</div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Report Suspicious Activities</h4>
                      <p className="text-gray-600">
                        If you receive suspicious communications claiming to be from government agencies, report them immediately.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secureblue-100 flex items-center justify-center text-secureblue-600 font-bold mr-4">4</div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">Use Secure Connections</h4>
                      <p className="text-gray-600">
                        When accessing government services online, ensure the connection is secure (look for https:// and a lock icon in your browser).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Webinars Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Upcoming Webinars</h2>
            <p className="section-subtitle mx-auto">
              Join our free educational webinars to learn more about cybersecurity best practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-secureblue-100 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-secureblue-100 relative">
                <div className="absolute bottom-0 left-0 bg-secureblue-500 text-white px-4 py-2">
                  <span className="font-medium">Apr 15, 2025</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Ransomware Prevention Strategies</h3>
                <p className="text-gray-600 mb-4">
                  Learn effective strategies to prevent ransomware attacks on government systems and critical infrastructure.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">2:00 PM - 3:30 PM ET</span>
                  <button className="text-secureblue-500 hover:text-secureblue-600 font-medium">Register Now</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-secureblue-100 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-secureblue-100 relative">
                <div className="absolute bottom-0 left-0 bg-secureblue-500 text-white px-4 py-2">
                  <span className="font-medium">Apr 22, 2025</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Advanced Phishing Detection</h3>
                <p className="text-gray-600 mb-4">
                  Discover the latest techniques used in sophisticated phishing attempts and how to identify them.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">1:00 PM - 2:30 PM ET</span>
                  <button className="text-secureblue-500 hover:text-secureblue-600 font-medium">Register Now</button>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-secureblue-100 rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 bg-secureblue-100 relative">
                <div className="absolute bottom-0 left-0 bg-secureblue-500 text-white px-4 py-2">
                  <span className="font-medium">May 5, 2025</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Securing Government Data</h3>
                <p className="text-gray-600 mb-4">
                  Best practices for securing sensitive government data and protecting citizen information from breaches.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">11:00 AM - 12:30 PM ET</span>
                  <button className="text-secureblue-500 hover:text-secureblue-600 font-medium">Register Now</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="btn-outline">View All Webinars</button>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </Layout>
  );
};

export default Resources;
