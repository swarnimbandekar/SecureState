
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-secureblue-500 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
          Ready to secure your digital infrastructure?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-secureblue-50">
          Join state agencies across the country in implementing AI-powered security measures to protect citizens and data.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="bg-white text-secureblue-600 px-6 py-3 rounded-md font-medium transition-colors hover:bg-secureblue-50 inline-flex items-center justify-center">
            <span>Request a Demo</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link to="/resources" className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-secureblue-400">
            Explore Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
