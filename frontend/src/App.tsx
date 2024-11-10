import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import ContentHub from './pages/ContentHub';
import Campaigns from './pages/Campaigns';
import Analytics from './pages/Analytics';
import Scheduling from './pages/Scheduling';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Help from './pages/Help';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments" element={<Appointments />} />
          {/* Add other routes similarly */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;