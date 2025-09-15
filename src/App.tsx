import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Timeline from './pages/Timeline';
import Resources from './pages/Resources';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import ProgressLogs from './pages/ProgressLogs';
import Portfolio from './pages/Portfolio';
import CareerHub from './pages/CareerHub';
import Settings from './pages/Settings';
import { Settings as SettingsType } from './types';

const App: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [settings, setSettings] = useState<SettingsType>({
    theme: 'light',
    notifications: true,
    weeklyGoalHours: 15,
    startDate: '2025-09-01',
    targetRoles: ['Junior AI Engineer', 'ML Developer'],
    location: 'Belfast, Northern Ireland',
    budget: 200,
    preferredLearningStyle: 'visual'
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('aijourney-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }

    // Apply theme
    document.documentElement.setAttribute('data-theme', settings.theme);
  }, [settings.theme]);

  const updateSettings = (newSettings: SettingsType) => {
    setSettings(newSettings);
    localStorage.setItem('aijourney-settings', JSON.stringify(newSettings));
    document.documentElement.setAttribute('data-theme', newSettings.theme);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="app-container">
      <button 
        className="mobile-sidebar-toggle"
        onClick={toggleMobileSidebar}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      
      <Sidebar 
        collapsed={isSidebarCollapsed}
        mobileOpen={isMobileSidebarOpen}
        onToggle={toggleSidebar}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />
      
      <main className={`main-content ${isSidebarCollapsed ? 'expanded' : ''}`}>
        <Container fluid className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/progress" element={<ProgressLogs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/career" element={<CareerHub />} />
            <Route path="/settings" element={
              <Settings 
                settings={settings} 
                onUpdate={updateSettings} 
              />
            } />
          </Routes>
        </Container>
      </main>
    </div>
  );
};

export default App;