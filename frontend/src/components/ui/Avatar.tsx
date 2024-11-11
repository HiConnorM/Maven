import React from 'react';

// Avatar Component
export const Avatar: React.FC<{ src?: string; alt?: string }> = ({ src, alt }) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <AvatarFallback>
          {/* Providing fallback content */}
          {alt ? alt.charAt(0) : "?"}
        </AvatarFallback>
      )}
    </div>
  );
};

// AvatarFallback Component
export const AvatarFallback: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full flex items-center justify-center text-sm text-gray-700">
      {children}
    </div>
  );
};
