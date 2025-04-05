
import React from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/shared/PageHeader';
import CallToAction from '../components/shared/CallToAction';
import { Mail, Lock, Activity, Shield, Bell, Fingerprint } from 'lucide-react';

const Features = () => {
  return (
    <Layout>
      <PageHeader 
        title="Features & Capabilities"
        description="Explore the comprehensive protection features of SecureState's AI-powered cybersecurity platform."
      />
      
      {/* Main Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Feature 1: Phishing Protection */}
            <div className="col-span-1">
              <div className="feature-card h-full">
                <Mail className="h-12 w-12 text-secureblue-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Phishing Protection</h3>
                <p className="text-gray-600 mb-6">
                  Our advanced AI identifies and blocks sophisticated phishing attempts that traditional security measures might miss.
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Email link and attachment scanning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Real-time website analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Social engineering detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Adaptive learning from new threats</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Feature 2: Ransomware Defense */}
            <div className="col-span-1">
              <div className="feature-card h-full">
                <Lock className="h-12 w-12 text-secureblue-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Ransomware Defense</h3>
                <p className="text-gray-600 mb-6">
                  Proactively detect and neutralize ransomware before it can encrypt files or lock systems, protecting critical government data.
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Early encryption detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Suspicious file activity monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Automated system isolation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rapid backup restoration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Feature 3: Malware Detection */}
            <div className="col-span-1">
              <div className="feature-card h-full">
                <Activity className="h-12 w-12 text-secureblue-500 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">Malware Detection</h3>
                <p className="text-gray-600 mb-6">
                  Continuously scans and eliminates malicious software using advanced behavioral analysis and machine learning techniques.
                </p>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Zero-day threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Behavioral analysis</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Network traffic monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-secureblue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Immediate threat neutralization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Detailed Features Section */}
      <section className="py-16 md:py-24 bg-secureblue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Comprehensive Protection</h2>
            <p className="section-subtitle mx-auto">
              SecureState delivers end-to-end security for state government digital infrastructure and services.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Feature Detail 1: Phishing */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-4">Advanced Phishing Protection</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our AI constantly analyzes incoming communications to detect sophisticated phishing attempts that traditional systems miss.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-secureblue-600 mb-1">Email Protection</h4>
                    <p className="text-gray-600">
                      Analyzes email content, links, attachments, and sender information to detect malicious intent and block potential threats.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-secureblue-600 mb-1">URL Analysis</h4>
                    <p className="text-gray-600">
                      Scans all links in real-time to identify fraudulent websites designed to steal credentials or distribute malware.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-secureblue-600 mb-1">Brand Impersonation Detection</h4>
                    <p className="text-gray-600">
                      Identifies attempts to impersonate government agencies, financial institutions, and other trusted organizations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="bg-white p-6 rounded-xl shadow-md border border-secureblue-100">
                  <div className="mb-4 pb-4 border-b border-secureblue-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium">Phishing Attempt Detected</span>
                      </div>
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">High Risk</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">From:</p>
                      <p className="text-sm font-medium">security-alert@bankofamer1ca.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Subject:</p>
                      <p className="text-sm font-medium">URGENT: Your account has been locked</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Detection Type:</p>
                      <p className="text-sm font-medium">Domain spoofing, suspicious link</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Action Taken:</p>
                      <p className="text-sm font-medium text-green-600">Email blocked and quarantined</p>
                    </div>
                    
                    <div className="pt-3 border-t border-secureblue-100">
                      <p className="text-sm text-gray-500">AI Analysis:</p>
                      <p className="text-sm text-gray-600">This email attempts to impersonate Bank of America using a slight misspelling in the domain name. It contains a malicious link that leads to a credential harvesting site. Content analysis shows typical urgent language patterns used in phishing attempts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature Detail 2: Ransomware */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-md border border-secureblue-100">
                  <div className="mb-4 pb-4 border-b border-secureblue-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Lock className="h-5 w-5 text-amber-500 mr-2" />
                        <span className="font-medium">Ransomware Prevention Report</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Blocked</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="text-sm">Suspicious encryption activities detected</div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="text-sm">Multiple file changes in short timeframe</div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="text-sm">File extension modifications detected</div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-amber-500 rounded-full mr-2"></div>
                      <div className="text-sm">Registry modifications attempted</div>
                    </div>
                    
                    <div className="pt-4 border-t border-secureblue-100">
                      <div className="mb-2">
                        <span className="text-sm font-medium">Threat Response:</span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Suspicious process terminated</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Affected files quarantined</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>System restored to secure state</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Proactive Ransomware Defense</h3>
                <p className="text-lg text-gray-600 mb-6">
                  SecureState identifies ransomware activity at the earliest stages, before critical files can be encrypted or systems locked.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-secureblue-600 mb-1">Behavioral Detection</h4>
                    <p className="text-gray-600">
                      Monitors for file system activities typical of ransomware, such as mass file modifications or unusual encryption patterns.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-secureblue-600 mb-1">System Rollback</h4>
                    <p className="text-gray-600">
                      Maintains secure backups for immediate system restoration in case of an attack, minimizing downtime and data loss.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-secureblue-600 mb-1">Automatic Isolation</h4>
                    <p className="text-gray-600">
                      Immediately isolates affected systems to prevent ransomware from spreading across government networks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature Detail 3: Malware */}
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h3 className="text-2xl font-semibold mb-4">Comprehensive Malware Detection</h3>
                <p className="text-lg text-gray-600 mb-6">
                  SecureState's AI engine continuously scans for known and unknown malware, protecting government infrastructure from evolving threats.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-secureblue-600 mb-1">Zero-Day Protection</h4>
                    <p className="text-gray-600">
                      Identifies previously unknown malware variants by analyzing behavior patterns rather than relying solely on signature-based detection.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-secureblue-600 mb-1">Network Traffic Analysis</h4>
                    <p className="text-gray-600">
                      Monitors network communications to detect command-and-control servers and data exfiltration attempts.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-secureblue-600 mb-1">Continuous Scanning</h4>
                    <p className="text-gray-600">
                      Performs ongoing system scans without impacting performance, ensuring constant protection against emerging threats.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="bg-white p-6 rounded-xl shadow-md border border-secureblue-100">
                  <div className="mb-4 pb-4 border-b border-secureblue-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Activity className="h-5 w-5 text-red-500 mr-2" />
                        <span className="font-medium">Malware Detected and Removed</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Resolved</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Threat Type:</p>
                      <p className="text-sm font-medium">Advanced Persistent Threat</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Detection Method:</p>
                      <p className="text-sm font-medium">Behavioral Analysis, Network Monitoring</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Infection Vector:</p>
                      <p className="text-sm font-medium">Compromised document downloaded from web</p>
                    </div>
                  </div>
                  
                  <div className="bg-secureblue-50 p-3 rounded-lg mb-4">
                    <div className="text-sm font-medium mb-2">Behavioral Indicators Detected:</div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>- Unusual system registry modifications</li>
                      <li>- Encrypted communications to unknown servers</li>
                      <li>- Attempt to disable security services</li>
                      <li>- Data harvesting from protected directories</li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t border-secureblue-100">
                    <p className="text-sm text-gray-500 mb-1">Resolution:</p>
                    <p className="text-sm text-gray-600">Malware isolated and removed, affected systems restored, security policies updated to prevent similar infections. Threat information shared with partner agencies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Additional Security Features</h2>
            <p className="section-subtitle mx-auto">
              SecureState provides comprehensive protection beyond the core security functions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Additional Feature 1 */}
            <div className="feature-card">
              <Shield className="h-10 w-10 text-secureblue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Continuous surveillance of all protected systems ensures immediate detection and response to potential security incidents, with 24/7 threat monitoring.
              </p>
            </div>
            
            {/* Additional Feature 2 */}
            <div className="feature-card">
              <Bell className="h-10 w-10 text-secureblue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Alert System</h3>
              <p className="text-gray-600">
                Configurable alert system notifies security teams of potential threats based on severity levels, allowing for prioritized response to critical incidents.
              </p>
            </div>
            
            {/* Additional Feature 3 */}
            <div className="feature-card">
              <Fingerprint className="h-10 w-10 text-secureblue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Identity Protection</h3>
              <p className="text-gray-600">
                Safeguards employee and citizen identities through multi-factor authentication and advanced identity verification systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </Layout>
  );
};

export default Features;
