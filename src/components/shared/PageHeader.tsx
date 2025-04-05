
import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`bg-secureblue-600 text-white py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl max-w-3xl text-secureblue-100">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
