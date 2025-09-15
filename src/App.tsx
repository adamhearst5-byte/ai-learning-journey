import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Components
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Timeline from './components/Timeline/Timeline';
import Resources from './components/Resources/Resources';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Progress from './components/Progress/Progress';
import Portfolio from './components/Portfolio/Portfolio';
import Career from './components/Career/Career';

// Types and utilities
import { AppSettings } from './types';
import { loadFromLocalStorage, saveToLocalStorage } from './utils/helpers';

// Default app settings
const defaultSettings: AppSettings = {
  theme: 'light',
  notifications: {
    email: false,
    browser: true,
    reminders: true,
    achievements: true
  },
  privacy: {
    shareProgress: false,
    publicProfile: false
  },
  study: {
    defaultSessionLength: 60,
    breakReminders: true,
    weeklyGoal: 15
  }
};

function App() {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = loadFromLocalStorage('aiJourneySettings');
    if (savedSettings) {
      setSettings({ ...defaultSettings, ...savedSettings });
    }

    // Apply theme
    document.documentElement.setAttribute('data-theme', settings.theme);
  }, [settings.theme]);

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    const updatedSettings = { ...settings, ...newSettings };
    setSettings(updatedSettings);
    saveToLocalStorage('aiJourneySettings', updatedSettings);
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Router>
      <div className={`app ${settings.theme}`}>
        <Sidebar 
          collapsed={sidebarCollapsed} 
          onToggle={toggleSidebar}
          settings={settings}
          onSettingsUpdate={updateSettings}
        />
        
        <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
          <div className="container-fluid p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
