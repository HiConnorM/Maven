
// src/pages/index.tsx
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Welcome to Moso Marketing</h1>
          <p className="text-xl text-gray-600">Your Digital Marketing Solution</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
