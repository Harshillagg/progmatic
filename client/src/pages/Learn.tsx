import React from 'react';

const Learn: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className="text-blue-600 text-7xl hover:underline hover:text-blue-400 group"
        target='_blank'
      >
        Best DSA Resources
        <sup>
          <i className="fas fa-external-link-alt ml-2 group-hover:text-blue-800"></i>
        </sup>
      </a>
    </div>
  );
};

export default Learn;
