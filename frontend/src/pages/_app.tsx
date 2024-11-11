import React from 'react';
import MainLayout from '../components/MainLayout';
import Dashboard from './Dashboard';
import ErrorBoundary from '../components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </ErrorBoundary>
  );
};

export default App;

