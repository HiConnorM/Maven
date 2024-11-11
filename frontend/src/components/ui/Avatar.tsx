import React from 'react';

interface AvatarProps {
  src?: string; // URL of the avatar image
  alt?: string; // Alternative text for the image
  fallback?: string; // Fallback initials
  className?: string; // Optional extra classes for styling
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, fallback, className }) => {
  return (
    <div className={`w-10 h-10 rounded-full overflow-hidden ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-700">
          {fallback ? fallback : 'N/A'}
        </div>
      )}
    </div>
  );
};

export default Avatar;
