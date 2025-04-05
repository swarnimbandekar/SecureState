
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/shared/PageHeader';
import CallToAction from '../components/shared/CallToAction';
import { Mail, Lock, Activity, Database, Clock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const Demo = () => {
  const [activeTab, setActiveTab] = useState('phishing');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<null | {
    threat: boolean;
    type: string;
    confidence: number;
    details: string[];
  }>(null);
  const [emailSample, setEmailSample] = useState({
    sender: 'paypal-secure@paypaI-account.com',
    subject: 'Your account has been limited, please verify information',
    content: `Dear valued customer,

We've detected suspicious activity in your account. Your account access has been limited.

Please verify your information immediately by clicking the button below:

[Verify Account Now]

Failure to verify within 24 hours will result in account suspension.

Regards,
PayPal Security Team`
  });
  
  const [threats, setThreats] = useState([
    { id: 1, type: 'Phishing', source: 'Email', status: 'Blocked', time: '2 minutes ago', risk: 'High' },
    { id: 2, type: 'Ransomware', source: 'Download', status: 'Blocked', time: '45 minutes ago', risk: 'Critical' },
    { id: 3, type: 'Malware', source: 'Website', status: 'Blocked', time: '1 hour ago', risk: 'Medium' },
    { id: 4, type: 'Suspicious Login', source: 'Authentication', status: 'Blocked', time: '3 hours ago', risk: 'High' },
    { id: 5, type: 'Data Exfiltration', source: 'Network', status: 'Blocked', time: '5 hours ago', risk: 'High' },
  ]);
  
  const checkIfPhishing = (email: typeof emailSample) => {
    const phishingIndicators = {
      // Check for suspicious senders
      suspiciousSender: 
        email.sender.includes('paypaI') || // Capital I instead of lowercase l
        email.sender.includes('secure-') || 
        email.sender.includes('-secure') ||
        email.sender.includes('account-verify') ||
        !email.sender.includes('@') ||
        (email.sender.toLowerCase().includes('paypal') && !email.sender.endsWith('paypal.com')),
      
      // Check for urgent language
      urgentLanguage: 
        email.subject.toLowerCase().includes('urgent') ||
        email.subject.toLowerCase().includes('immediately') ||
        email.subject.toLowerCase().includes('limited') ||
        email.subject.toLowerCase().includes('suspend') ||
        email.content.toLowerCase().includes('verify immediately') ||
        email.content.toLowerCase().includes('account limited') ||
        email.content.toLowerCase().includes('suspicious activity') ||
        email.content.toLowerCase().includes('24 hours') ||
        email.content.toLowerCase().includes('will be suspended'),
      
      // Check for suspicious links or buttons
      suspiciousLinks:
        email.content.includes('[') && email.content.includes(']') &&
        (email.content.toLowerCase().includes('verify') ||
         email.content.toLowerCase().includes('click') ||
         email.content.toLowerCase().includes('login') ||
         email.content.toLowerCase().includes('sign in')),
      
      // Brand impersonation
      brandImpersonation:
        (email.content.toLowerCase().includes('paypal') && !email.sender.endsWith('paypal.com')) ||
        (email.content.toLowerCase().includes('bank') && !email.sender.includes('bank')) ||
        (email.content.toLowerCase().includes('amazon') && !email.sender.endsWith('amazon.com'))
    };
    
    // Count how many indicators are true
    const indicatorsCount = Object.values(phishingIndicators).filter(Boolean).length;
    
    // Generate details based on detected indicators
    const details = [];
    if (phishingIndicators.suspiciousSender) {
      details.push('Suspicious sender email address');
    }
    if (phishingIndicators.urgentLanguage) {
      details.push('Urgent language and threats to induce action');
    }
    if (phishingIndicators.suspiciousLinks) {
      details.push('Suspicious link or button in content');
    }
    if (phishingIndicators.brandImpersonation) {
      details.push('Potential brand impersonation');
    }
    
    // Calculate confidence based on number of indicators
    let confidence = 0;
    switch(indicatorsCount) {
      case 4: confidence = 98.7; break;
      case 3: confidence = 87.3; break;
      case 2: confidence = 67.8; break;
      case 1: confidence = 45.2; break;
      default: confidence = 15.0; // Very low if no indicators
    }
    
    return {
      threat: indicatorsCount >= 2, // Consider it a threat if 2+ indicators
      type: indicatorsCount >= 2 ? 'Phishing' : 'Legitimate',
      confidence: confidence,
      details: details.length > 0 ? details : ['No suspicious elements detected']
    };
  };
  
  const handleAnalyze = () => {
    setAnalyzing(true);
    setResult(null);
    
    setTimeout(() => {
      setAnalyzing(false);
      const analysisResult = checkIfPhishing(emailSample);
      setResult(analysisResult);
    }, 2000);
  };
  
  const resetDemo = () => {
    setAnalyzing(false);
    setResult(null);
  };
  
  const getRiskColor = (risk: string) => {
    switch(risk.toLowerCase()) {
      case 'critical':
        return 'text-red-600 bg-red-100';
      case 'high':
        return 'text-amber-600 bg-amber-100';
      case 'medium':
        return 'text-orange-600 bg-orange-100';
      case 'low':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <Layout>
      <PageHeader 
        title="Interactive Demo"
        description="See SecureState's AI-powered security platform in action with our interactive demonstration."
      />
      
      {/* Demo Selector */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Experience SecureState in Action</h2>
            <p className="section-subtitle mx-auto">
              Explore interactive demonstrations of our key security features to see how SecureState protects government systems.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'phishing' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('phishing')}
            >
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>Phishing Detection</span>
              </div>
            </button>
            
            <button
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'ransomware' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('ransomware')}
            >
              <div className="flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                <span>Ransomware Defense</span>
              </div>
            </button>
            
            <button
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'malware' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('malware')}
            >
              <div className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                <span>Malware Detection</span>
              </div>
            </button>
            
            <button
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'dashboard' 
                  ? 'bg-secureblue-500 text-white' 
                  : 'bg-secureblue-100 text-secureblue-600 hover:bg-secureblue-200'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <div className="flex items-center">
                <Database className="h-5 w-5 mr-2" />
                <span>Security Dashboard</span>
              </div>
            </button>
          </div>
          
          {/* Phishing Demo */}
          {activeTab === 'phishing' && (
            <div className="bg-white rounded-xl shadow-lg border border-secureblue-100 overflow-hidden">
              <div className="bg-secureblue-600 text-white px-6 py-4">
                <h3 className="text-xl font-semibold">Phishing Email Analysis</h3>
                <p className="text-secureblue-100">See how SecureState's AI identifies and blocks sophisticated phishing attempts.</p>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email From:</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={emailSample.sender}
                        onChange={(e) => setEmailSample({...emailSample, sender: e.target.value})}
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                      <input 
                        type="text" 
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={emailSample.subject}
                        onChange={(e) => setEmailSample({...emailSample, subject: e.target.value})}
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Content:</label>
                      <textarea 
                        className="w-full p-2 border border-gray-300 rounded-md h-40"
                        value={emailSample.content}
                        onChange={(e) => setEmailSample({...emailSample, content: e.target.value})}
                      />
                    </div>
                    <div className="mb-6">
                      <button 
                        className="bg-secureblue-500 text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-secureblue-600 disabled:bg-secureblue-300 inline-flex items-center"
                        onClick={handleAnalyze}
                        disabled={analyzing}
                      >
                        {analyzing ? (
                          <>
                            <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Analyzing Email...
                          </>
                        ) : (
                          'Analyze Email'
                        )}
                      </button>
                      
                      {result && (
                        <button 
                          className="ml-4 border border-secureblue-200 text-secureblue-600 px-6 py-3 rounded-md font-medium transition-colors hover:bg-secureblue-50"
                          onClick={resetDemo}
                        >
                          Reset Demo
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    {result ? (
                      <div className="bg-secureblue-50 p-6 rounded-lg">
                        <div className="flex items-center mb-6">
                          {result.threat ? (
                            <>
                              <AlertTriangle className="h-8 w-8 text-red-500 mr-3" />
                              <div>
                                <h4 className="font-bold text-lg text-red-600">Phishing Attempt Detected</h4>
                                <p className="text-gray-600">This email has been identified as malicious.</p>
                              </div>
                            </>
                          ) : (
                            <>
                              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
                              <div>
                                <h4 className="font-bold text-lg text-green-600">Email Appears Safe</h4>
                                <p className="text-gray-600">No malicious indicators were detected.</p>
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-700 mb-1">Threat Analysis:</h5>
                            <div className="flex items-center">
                              <div className="h-2 flex-grow bg-gray-200 rounded-full">
                                <div 
                                  className={`h-2 rounded-full ${result.confidence > 80 ? 'bg-red-500' : result.confidence > 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                                  style={{ width: `${result.confidence}%` }}
                                ></div>
                              </div>
                              <span className="ml-2 font-medium">{result.confidence}%</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Confidence score for threat detection</p>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-gray-700 mb-2">Detection Details:</h5>
                            <ul className="space-y-2">
                              {result.details.map((detail, index) => (
                                <li key={index} className="flex items-start">
                                  {result.threat ? (
                                    <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                  ) : (
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                  )}
                                  <span className="text-gray-600">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {result.threat && (
                            <div className="pt-4 border-t border-secureblue-200">
                              <h5 className="font-medium text-gray-700 mb-2">AI Response:</h5>
                              <p className="text-gray-600">
                                This email has been blocked and quarantined. The sender has been flagged for additional scrutiny, and similar emails will be automatically blocked in the future.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-secureblue-50 p-6 rounded-lg h-full flex items-center justify-center">
                        <div className="text-center">
                          <Mail className="h-12 w-12 text-secureblue-300 mx-auto mb-4" />
                          <h4 className="text-lg font-medium text-secureblue-600 mb-2">Email Analysis</h4>
                          <p className="text-gray-500">
                            Click "Analyze Email" to see SecureState's AI detection capabilities in action.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Ransomware Demo */}
          {activeTab === 'ransomware' && (
            <div className="bg-white rounded-xl shadow-lg border border-secureblue-100 overflow-hidden">
              <div className="bg-secureblue-600 text-white px-6 py-4">
                <h3 className="text-xl font-semibold">Ransomware Defense Simulation</h3>
                <p className="text-secureblue-100">See how SecureState detects and blocks ransomware before it can encrypt your files.</p>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-secureblue-900 rounded-lg p-4 text-white font-mono text-sm mb-6">
                      <p className="mb-2">{"> "} Initializing file system monitoring...</p>
                      <p className="mb-2">{"> "} Scanning for suspicious activities...</p>
                      <p className="mb-2">{"> "} Detection engines activated.</p>
                      <p className="mb-2 text-yellow-300">{"> "} ALERT: Suspicious process detected!</p>
                      <p className="mb-2 text-yellow-300">{"> "} Multiple file modifications in rapid succession.</p>
                      <p className="mb-2 text-yellow-300">{"> "} Detecting file extension changes.</p>
                      <p className="mb-2 text-red-400">{"> "} CRITICAL: Encryption pattern identified.</p>
                      <p className="mb-2 text-green-400">{"> "} Isolating affected process...</p>
                      <p className="mb-2 text-green-400">{"> "} Process terminated.</p>
                      <p className="mb-2 text-green-400">{"> "} Restoring affected files from secure backup...</p>
                      <p className="mb-2 text-green-400">{"> "} System secured.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">How Ransomware Protection Works:</h4>
                      <ol className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secureblue-500 flex items-center justify-center text-white font-bold text-xs mr-3">1</div>
                          <div>
                            <strong>Continuous Monitoring:</strong> SecureState monitors file system activity for patterns consistent with ransomware.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secureblue-500 flex items-center justify-center text-white font-bold text-xs mr-3">2</div>
                          <div>
                            <strong>Early Detection:</strong> Identification of suspicious encryption patterns before widespread damage occurs.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secureblue-500 flex items-center justify-center text-white font-bold text-xs mr-3">3</div>
                          <div>
                            <strong>Rapid Response:</strong> Immediate isolation of affected processes to stop encryption.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-secureblue-500 flex items-center justify-center text-white font-bold text-xs mr-3">4</div>
                          <div>
                            <strong>System Restore:</strong> Automatic restoration of affected files from secure backups.
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="flex flex-col">
                    <div className="bg-secureblue-50 rounded-lg p-6 mb-6">
                      <div className="flex items-center mb-4">
                        <Lock className="h-8 w-8 text-secureblue-500 mr-3" />
                        <h4 className="font-semibold text-lg">Ransomware Prevention Report</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-gray-700">Attack Prevention Rate</span>
                            <span className="text-green-600 font-medium">98.7%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '98.7%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-gray-700">Recovery Success Rate</span>
                            <span className="text-green-600 font-medium">99.9%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '99.9%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-gray-700">Response Time</span>
                            <span className="text-green-600 font-medium">0.8 seconds</span>
                          </div>
                          <div className="h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-secureblue-100 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-4">Recent Ransomware Threats Blocked</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <div className="flex items-center">
                            <XCircle className="h-5 w-5 text-red-500 mr-2" />
                            <span className="font-medium">CryptoLocker Variant</span>
                          </div>
                          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">Critical</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                          <div className="flex items-center">
                            <XCircle className="h-5 w-5 text-amber-500 mr-2" />
                            <span className="font-medium">WannaCry Derivative</span>
                          </div>
                          <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-600">High</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                          <div className="flex items-center">
                            <XCircle className="h-5 w-5 text-amber-500 mr-2" />
                            <span className="font-medium">Ryuk Ransomware</span>
                          </div>
                          <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-600">High</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Malware Demo */}
          {activeTab === 'malware' && (
            <div className="bg-white rounded-xl shadow-lg border border-secureblue-100 overflow-hidden">
              <div className="bg-secureblue-600 text-white px-6 py-4">
                <h3 className="text-xl font-semibold">Malware Detection Demonstration</h3>
                <p className="text-secureblue-100">See how SecureState identifies and neutralizes malicious software before it can cause damage.</p>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-white border border-secureblue-100 rounded-lg p-6 mb-6">
                      <h4 className="font-semibold text-lg mb-4">System Scan Results</h4>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <span>Scan Progress</span>
                          <span>100%</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full">
                          <div className="h-2 bg-secureblue-500 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 text-secureblue-500 mr-2" />
                            <span className="text-gray-600">Scan Duration</span>
                          </div>
                          <span className="font-medium">3 minutes 42 seconds</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Database className="h-5 w-5 text-secureblue-500 mr-2" />
                            <span className="text-gray-600">Files Scanned</span>
                          </div>
                          <span className="font-medium">482,931</span>
                        </div>
                        <div className="flex justify-between items-center text-red-600">
                          <div className="flex items-center">
                            <AlertTriangle className="h-5 w-5 mr-2" />
                            <span>Threats Detected</span>
                          </div>
                          <span className="font-medium">3</span>
                        </div>
                        <div className="flex justify-between items-center text-green-600">
                          <div className="flex items-center">
                            <CheckCircle className="h-5 w-5 mr-2" />
                            <span>Threats Resolved</span>
                          </div>
                          <span className="font-medium">3</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white border border-secureblue-100 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-4">Detected Threats</h4>
                      <div className="space-y-3">
                        <div className="border border-red-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-red-600">Advanced Persistent Threat</span>
                            <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full">Critical</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">Targeting system files with potential for data exfiltration. Shows characteristics of nation-state activity.</p>
                          <div className="text-green-600 text-sm font-medium">Status: Removed and system restored</div>
                        </div>
                        <div className="border border-amber-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-amber-600">Trojan Backdoor</span>
                            <span className="text-xs px-2 py-1 bg-amber-100 text-amber-600 rounded-full">High</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">Creates persistent access for remote attackers. Attempts to disable security features.</p>
                          <div className="text-green-600 text-sm font-medium">Status: Removed and system restored</div>
                        </div>
                        <div className="border border-orange-200 rounded-lg p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-orange-600">Adware/Spyware</span>
                            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full">Medium</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">Collects browsing data and system information without authorization.</p>
                          <div className="text-green-600 text-sm font-medium">Status: Removed and system restored</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-secureblue-900 rounded-lg p-5 text-white font-mono text-sm mb-6 h-96 overflow-y-auto">
                      <p className="mb-2">{"> "} Initializing system scan...</p>
                      <p className="mb-2">{"> "} Loading threat definitions: version 2025.04.05.01</p>
                      <p className="mb-2">{"> "} Scanning system files...</p>
                      <p className="mb-2">{"> "} Scanning program files...</p>
                      <p className="mb-2">{"> "} Scanning user data...</p>
                      <p className="mb-2 text-yellow-300">{"> "} ALERT: Suspicious file detected at /system/bin/svchost.exe</p>
                      <p className="mb-2 text-yellow-300">{"> "} Analysis: File appears to be a modified system binary</p>
                      <p className="mb-2 text-yellow-300">{"> "} Behavioral analysis in progress...</p>
                      <p className="mb-2 text-red-400">{"> "} CRITICAL: File attempts to establish unauthorized network connection</p>
                      <p className="mb-2 text-red-400">{"> "} CRITICAL: File attempts to modify system registry</p>
                      <p className="mb-2 text-red-400">{"> "} CRITICAL: File attempts to disable security services</p>
                      <p className="mb-2 text-red-400">{"> "} Threat classification: Advanced Persistent Threat</p>
                      <p className="mb-2 text-green-400">{"> "} Isolating threat...</p>
                      <p className="mb-2 text-green-400">{"> "} Removing malicious file...</p>
                      <p className="mb-2 text-green-400">{"> "} Restoring original system file...</p>
                      <p className="mb-2 text-green-400">{"> "} Scanning for additional related threats...</p>
                      <p className="mb-2">{"> "} Continuing system scan...</p>
                      <p className="mb-2 text-yellow-300">{"> "} ALERT: Suspicious file detected at /users/downloads/invoice.pdf.exe</p>
                      <p className="mb-2 text-yellow-300">{"> "} Analysis: File contains obfuscated code</p>
                      <p className="mb-2 text-yellow-300">{"> "} Behavioral analysis in progress...</p>
                      <p className="mb-2 text-amber-400">{"> "} HIGH RISK: File attempts to establish persistence</p>
                      <p className="mb-2 text-amber-400">{"> "} HIGH RISK: File creates backdoor access</p>
                      <p className="mb-2 text-amber-400">{"> "} Threat classification: Trojan Backdoor</p>
                      <p className="mb-2 text-green-400">{"> "} Removing threat...</p>
                      <p className="mb-2 text-green-400">{"> "} Cleaning affected system components...</p>
                      <p className="mb-2">{"> "} Continuing system scan...</p>
                      <p className="mb-2 text-yellow-300">{"> "} ALERT: Suspicious browser extension detected</p>
                      <p className="mb-2 text-yellow-300">{"> "} Analysis: Extension collecting user data</p>
                      <p className="mb-2 text-yellow-300">{"> "} Threat classification: Adware/Spyware</p>
                      <p className="mb-2 text-green-400">{"> "} Removing extension...</p>
                      <p className="mb-2 text-green-400">{"> "} Cleaning browser data...</p>
                      <p className="mb-2">{"> "} Completing system scan...</p>
                      <p className="mb-2">{"> "} Scan complete. System secured.</p>
                    </div>
                    
                    <div className="p-6 bg-secureblue-50 rounded-lg">
                      <h4 className="font-semibold text-lg mb-4">Malware Protection Summary</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            <strong className="text-gray-800">Real-time monitoring</strong> continuously scans for threats as they appear.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            <strong className="text-gray-800">Behavioral analysis</strong> detects new and unknown threats based on suspicious activity.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            <strong className="text-gray-800">Zero-day protection</strong> identifies previously unknown malware without relying on signatures.
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">
                            <strong className="text-gray-800">System restoration</strong> automatically returns systems to secure state after threats are removed.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Dashboard Demo */}
          {activeTab === 'dashboard' && (
            <div className="bg-white rounded-xl shadow-lg border border-secureblue-100 overflow-hidden">
              <div className="bg-secureblue-600 text-white px-6 py-4">
                <h3 className="text-xl font-semibold">Security Dashboard</h3>
                <p className="text-secureblue-100">Monitor threat activity and system protection status in real-time.</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-secureblue-50 rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="text-secureblue-500 font-bold text-3xl mb-2">97.3%</div>
                    <div className="text-gray-600 text-center">Threat Prevention Rate</div>
                  </div>
                  <div className="bg-secureblue-50 rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="text-secureblue-500 font-bold text-3xl mb-2">12,482</div>
                    <div className="text-gray-600 text-center">Threats Blocked This Month</div>
                  </div>
                  <div className="bg-secureblue-50 rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="text-green-500 font-bold text-3xl mb-2">Protected</div>
                    <div className="text-gray-600 text-center">Current System Status</div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-lg mb-4">Threat Activity (Last 7 Days)</h4>
                  <div className="h-64 bg-secureblue-50 rounded-lg"></div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-4">Recent Threat Activity</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr className="bg-secureblue-50">
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Threat Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {threats.map(threat => (
                          <tr key={threat.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{threat.type}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{threat.source}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {threat.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{threat.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskColor(threat.risk)}`}>
                                {threat.risk}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      <CallToAction />
    </Layout>
  );
};

export default Demo;
