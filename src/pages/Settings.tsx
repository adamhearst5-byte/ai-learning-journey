import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Settings as SettingsType } from '../types';

interface SettingsProps {
  settings: SettingsType;
  onUpdate: (settings: SettingsType) => void;
}

const Settings: React.FC<SettingsProps> = ({ settings, onUpdate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Settings are updated via controlled components
  };

  const handleChange = (field: keyof SettingsType, value: any) => {
    onUpdate({
      ...settings,
      [field]: value
    });
  };

  return (
    <div className="fade-in">
      <h1>⚙️ Settings</h1>
      
      <Row>
        <Col lg={8}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Preferences</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Theme</Form.Label>
                      <Form.Select
                        value={settings.theme}
                        onChange={(e) => handleChange('theme', e.target.value)}
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Weekly Goal (hours)</Form.Label>
                      <Form.Control
                        type="number"
                        value={settings.weeklyGoalHours}
                        onChange={(e) => handleChange('weeklyGoalHours', parseInt(e.target.value))}
                        min="1"
                        max="40"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Enable notifications"
                    checked={settings.notifications}
                    onChange={(e) => handleChange('notifications', e.target.checked)}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    value={settings.location}
                    onChange={(e) => handleChange('location', e.target.value)}
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Budget (£)</Form.Label>
                  <Form.Control
                    type="number"
                    value={settings.budget}
                    onChange={(e) => handleChange('budget', parseInt(e.target.value))}
                    min="0"
                    max="1000"
                  />
                </Form.Group>
                
                <Button type="submit" variant="primary">
                  Save Settings
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">About</h5>
            </Card.Header>
            <Card.Body>
              <p>AI Learning Journey v1.0.0</p>
              <p className="small text-muted">
                Your comprehensive 12-month path from retail to AI expertise, 
                tailored for Northern Ireland tech opportunities.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;