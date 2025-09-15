import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppSettings } from '../../types';
import './Sidebar.css';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  settings: AppSettings;
  onSettingsUpdate: (settings: Partial<AppSettings>) => void;
}

interface MenuItem {
  path: string;
  label: string;
  icon: string;
  description: string;
}

const menuItems: MenuItem[] = [
  {
    path: '/dashboard',
    label: 'Dashboard',
    icon: '📊',
    description: 'Overview and progress summary'
  },
  {
    path: '/timeline',
    label: 'Timeline',
    icon: '📅',
    description: '12-month learning schedule'
  },
  {
    path: '/resources',
    label: 'Resources',
    icon: '📚',
    description: 'Learning materials and courses'
  },
  {
    path: '/projects',
    label: 'Projects',
    icon: '🚀',
    description: 'Hands-on coding projects'
  },
  {
    path: '/certifications',
    label: 'Certifications',
    icon: '🏆',
    description: 'Professional certifications'
  },
  {
    path: '/progress',
    label: 'Progress',
    icon: '📈',
    description: 'Detailed analytics and logs'
  },
  {
    path: '/portfolio',
    label: 'Portfolio',
    icon: '🎨',
    description: 'Showcase your work'
  },
  {
    path: '/career',
    label: 'Career Hub',
    icon: '🧳',
    description: 'Job search and networking'
  }
];

const Sidebar: React.FC<SidebarProps> = ({ 
  collapsed, 
  onToggle, 
  settings, 
  onSettingsUpdate 
}) => {

  const toggleTheme = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light';
    onSettingsUpdate({ theme: newTheme });
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {/* Header */}
      <div className="sidebar-header">
        <button 
          className="toggle-btn"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
        
        {!collapsed && (
          <div className="logo-section">
            <div className="logo-icon">
              🧠
            </div>
            <div className="logo-text">
              <h4 className="mb-0">AI Journey</h4>
              <small className="text-muted">Learning Path 2025-2026</small>
            </div>
          </div>
        )}
      </div>

      {/* User Profile */}
      {!collapsed && (
        <div className="user-profile">
          <div className="user-avatar">
            👤
          </div>
          <div className="user-info">
            <h6 className="mb-0">Adam Hearst</h6>
            <small className="text-muted">AI Learner</small>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="sidebar-nav">
        <ul className="nav flex-column">
          {menuItems.map((item) => (
            <li key={item.path} className="nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                title={collapsed ? item.label : ''}
              >
                <span className="nav-icon">
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className="nav-text">
                    <span className="nav-label">{item.label}</span>
                    <small className="nav-description">{item.description}</small>
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="sidebar-footer">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          title={`Switch to ${settings.theme === 'light' ? 'dark' : 'light'} theme`}
          aria-label={`Switch to ${settings.theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {settings.theme === 'light' ? '🌙' : '☀️'}
          {!collapsed && (
            <span className="ms-2">
              {settings.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </span>
          )}
        </button>

        {!collapsed && (
          <div className="settings-link">
            ⚙️
            <span className="ms-2">Settings</span>
          </div>
        )}
      </div>

      {/* Progress indicator */}
      {!collapsed && (
        <div className="journey-progress">
          <div className="progress-header">
            <small className="text-muted">Journey Progress</small>
            <small className="text-muted">25%</small>
          </div>
          <div className="progress">
            <div 
              className="progress-bar bg-primary" 
              style={{ width: '25%' }}
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            ></div>
          </div>
          <small className="text-muted mt-1">
            Q1 2025 • 3 months remaining
          </small>
        </div>
      )}
    </div>
  );
};

export default Sidebar;