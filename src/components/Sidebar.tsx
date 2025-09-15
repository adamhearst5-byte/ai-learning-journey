import React from 'react';
import { Nav, Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onToggle: () => void;
  onMobileClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  collapsed, 
  mobileOpen, 
  onToggle, 
  onMobileClose 
}) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/timeline', label: 'Timeline', icon: '📅' },
    { path: '/resources', label: 'Resources', icon: '📚' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/certifications', label: 'Certifications', icon: '🏆' },
    { path: '/progress', label: 'Progress Logs', icon: '📈' },
    { path: '/portfolio', label: 'Portfolio', icon: '💼' },
    { path: '/career', label: 'Career Hub', icon: '🎯' },
    { path: '/settings', label: 'Settings', icon: '⚙️' }
  ];

  const handleNavClick = () => {
    onMobileClose();
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">
            🤖 AI Journey
          </h4>
          <Button 
            variant="outline-secondary" 
            size="sm"
            onClick={onToggle}
            className="d-none d-md-block"
            aria-label="Toggle sidebar"
          >
            {collapsed ? '→' : '←'}
          </Button>
          <Button 
            variant="outline-secondary" 
            size="sm"
            onClick={onMobileClose}
            className="d-md-none"
            aria-label="Close sidebar"
          >
            ✕
          </Button>
        </div>
        
        <Nav className="flex-column">
          {menuItems.map((item) => (
            <Nav.Link
              key={item.path}
              as={Link}
              to={item.path}
              onClick={handleNavClick}
              className={`d-flex align-items-center py-2 px-3 mb-1 rounded ${
                location.pathname === item.path ? 'bg-primary text-white' : ''
              }`}
              style={{ textDecoration: 'none' }}
            >
              <span className="me-3" style={{ fontSize: '1.2rem' }}>
                {item.icon}
              </span>
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
        
        <div className="mt-4 p-3 bg-light rounded">
          <h6>Quick Stats</h6>
          <div className="small">
            <div className="d-flex justify-content-between">
              <span>Study Hours:</span>
              <strong>0/780</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span>Current Quarter:</span>
              <strong>Q1</strong>
            </div>
            <div className="d-flex justify-content-between">
              <span>Progress:</span>
              <strong>0%</strong>
            </div>
          </div>
        </div>
        
        <div className="mt-3 p-3 rounded motivation-widget">
          <h6 className="mb-2">💪 Daily Motivation</h6>
          <blockquote className="small mb-0">
            "The journey of a thousand miles begins with one step. Start your AI journey today!"
          </blockquote>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;