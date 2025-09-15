import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, Button, Badge, Table, Modal, Alert } from 'react-bootstrap';
import { ProgressEntry } from '../types';

const ProgressLogs: React.FC = () => {
  const [entries, setEntries] = useState<ProgressEntry[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [formData, setFormData] = useState({
    hours: '',
    topics: '',
    notes: '',
    mood: 'good' as 'excellent' | 'good' | 'okay' | 'struggling',
    skills: ''
  });

  useEffect(() => {
    // Load entries from localStorage
    const savedEntries = localStorage.getItem('aijourney-progress-entries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  const saveEntries = (newEntries: ProgressEntry[]) => {
    setEntries(newEntries);
    localStorage.setItem('aijourney-progress-entries', JSON.stringify(newEntries));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newEntry: ProgressEntry = {
      id: Date.now().toString(),
      date: selectedDate,
      hours: parseFloat(formData.hours),
      topics: formData.topics.split(',').map(t => t.trim()),
      notes: formData.notes,
      mood: formData.mood,
      skills: formData.skills.split(',').map(s => s.trim())
    };

    // Remove existing entry for the same date if it exists
    const filteredEntries = entries.filter(entry => entry.date !== selectedDate);
    const newEntries = [...filteredEntries, newEntry].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    saveEntries(newEntries);
    setShowModal(false);
    setFormData({
      hours: '',
      topics: '',
      notes: '',
      mood: 'good',
      skills: ''
    });
  };

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'excellent': return 'success';
      case 'good': return 'primary';
      case 'okay': return 'warning';
      case 'struggling': return 'danger';
      default: return 'secondary';
    }
  };

  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'excellent': return '🌟';
      case 'good': return '😊';
      case 'okay': return '😐';
      case 'struggling': return '😓';
      default: return '🤔';
    }
  };

  const calculateStats = () => {
    const totalHours = entries.reduce((sum, entry) => sum + entry.hours, 0);
    const avgHours = entries.length > 0 ? totalHours / entries.length : 0;
    const currentWeekEntries = entries.filter(entry => {
      const entryDate = new Date(entry.date);
      const today = new Date();
      const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
      return entryDate >= weekStart;
    });
    const thisWeekHours = currentWeekEntries.reduce((sum, entry) => sum + entry.hours, 0);
    const currentStreak = calculateStreak();
    
    return {
      totalHours: totalHours.toFixed(1),
      avgHours: avgHours.toFixed(1),
      thisWeekHours: thisWeekHours.toFixed(1),
      totalEntries: entries.length,
      currentStreak
    };
  };

  const calculateStreak = () => {
    if (entries.length === 0) return 0;
    
    const sortedEntries = [...entries].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    for (const entry of sortedEntries) {
      const entryDate = new Date(entry.date);
      entryDate.setHours(0, 0, 0, 0);
      
      if (entryDate.getTime() === currentDate.getTime()) {
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else if (entryDate.getTime() === currentDate.getTime() + 86400000) {
        // Entry is from yesterday if we haven't logged today yet
        streak++;
        currentDate.setDate(currentDate.getDate() - 1);
      } else {
        break;
      }
    }
    
    return streak;
  };

  const stats = calculateStats();

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>📈 Progress Logs & Analytics</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          ➕ Log Today's Progress
        </Button>
      </div>

      {/* Stats Overview */}
      <Row className="mb-4">
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-primary mb-1">{stats.totalHours}h</h4>
              <small className="text-muted">Total Hours Logged</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-success mb-1">{stats.thisWeekHours}h</h4>
              <small className="text-muted">This Week</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-warning mb-1">{stats.avgHours}h</h4>
              <small className="text-muted">Daily Average</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-danger mb-1">{stats.currentStreak}</h4>
              <small className="text-muted">Day Streak</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Weekly Goal Progress */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🎯 Weekly Goal Progress</h5>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span>This Week: {stats.thisWeekHours}h / 15h</span>
            <span>{((parseFloat(stats.thisWeekHours) / 15) * 100).toFixed(0)}%</span>
          </div>
          <div className="progress mb-3" style={{ height: '20px' }}>
            <div
              className={`progress-bar ${parseFloat(stats.thisWeekHours) >= 15 ? 'bg-success' : 'bg-primary'}`}
              style={{ width: `${Math.min(100, (parseFloat(stats.thisWeekHours) / 15) * 100)}%` }}
            />
          </div>
          {parseFloat(stats.thisWeekHours) >= 15 ? (
            <Alert variant="success" className="mb-0">
              🎉 Congratulations! You've hit your weekly goal of 15 hours!
            </Alert>
          ) : (
            <div className="small text-muted">
              {(15 - parseFloat(stats.thisWeekHours)).toFixed(1)} hours remaining to reach your weekly goal.
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Recent Entries */}
      <Card className="shadow-sm">
        <Card.Header>
          <h5 className="mb-0">📝 Recent Study Sessions</h5>
        </Card.Header>
        <Card.Body className="p-0">
          {entries.length === 0 ? (
            <div className="text-center py-5">
              <h4>📭 No entries yet</h4>
              <p className="text-muted">Start logging your daily progress to track your AI learning journey!</p>
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Log Your First Session
              </Button>
            </div>
          ) : (
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Hours</th>
                  <th>Topics</th>
                  <th>Mood</th>
                  <th>Skills</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {entries.slice(0, 10).map((entry) => (
                  <tr key={entry.id}>
                    <td>
                      <div className="fw-bold">
                        {new Date(entry.date).toLocaleDateString('en-GB')}
                      </div>
                      <small className="text-muted">
                        {new Date(entry.date).toLocaleDateString('en-GB', { weekday: 'short' })}
                      </small>
                    </td>
                    <td>
                      <Badge bg="primary">{entry.hours}h</Badge>
                    </td>
                    <td>
                      <div className="d-flex flex-wrap gap-1">
                        {entry.topics.slice(0, 2).map((topic, index) => (
                          <Badge key={index} bg="secondary" className="small">
                            {topic}
                          </Badge>
                        ))}
                        {entry.topics.length > 2 && (
                          <Badge bg="light" text="dark" className="small">
                            +{entry.topics.length - 2}
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td>
                      <Badge bg={getMoodColor(entry.mood)}>
                        {getMoodEmoji(entry.mood)} {entry.mood}
                      </Badge>
                    </td>
                    <td>
                      <div className="d-flex flex-wrap gap-1">
                        {entry.skills.slice(0, 2).map((skill, index) => (
                          <span key={index} className="skill-tag small">
                            {skill}
                          </span>
                        ))}
                        {entry.skills.length > 2 && (
                          <span className="skill-tag small">
                            +{entry.skills.length - 2}
                          </span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div 
                        className="small text-muted"
                        style={{ 
                          maxWidth: '200px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {entry.notes}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* Progress Entry Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>📝 Log Your Progress</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Study Hours</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.5"
                    min="0"
                    max="24"
                    placeholder="e.g., 2.5"
                    value={formData.hours}
                    onChange={(e) => setFormData({...formData, hours: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Topics Studied (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Python basics, Linear algebra, Neural networks"
                value={formData.topics}
                onChange={(e) => setFormData({...formData, topics: e.target.value})}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Skills Practiced (comma-separated)</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g., Python, NumPy, Pandas, TensorFlow"
                value={formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>How did you feel about today's session?</Form.Label>
              <Form.Select
                value={formData.mood}
                onChange={(e) => setFormData({...formData, mood: e.target.value as any})}
              >
                <option value="excellent">🌟 Excellent - Everything clicked!</option>
                <option value="good">😊 Good - Made solid progress</option>
                <option value="okay">😐 Okay - Some challenges but manageable</option>
                <option value="struggling">😓 Struggling - Found it difficult</option>
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Notes & Reflections</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="What did you learn? What challenges did you face? Any insights or questions?"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              💾 Save Progress
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Insights and Tips */}
      {entries.length > 0 && (
        <Card className="mt-4 shadow-sm">
          <Card.Header>
            <h5 className="mb-0">💡 Your Learning Insights</h5>
          </Card.Header>
          <Card.Body>
            <Row>
              <Col md={6}>
                <h6>📊 Your Progress Patterns</h6>
                <ul className="small">
                  <li><strong>Most productive mood:</strong> Track which moods correlate with longer sessions</li>
                  <li><strong>Favorite topics:</strong> {entries.length > 5 ? 'Analyze your most studied topics' : 'Study more to see patterns'}</li>
                  <li><strong>Consistency:</strong> {stats.currentStreak > 3 ? `Great ${stats.currentStreak}-day streak!` : 'Work on building consistency'}</li>
                  <li><strong>Weekly goal:</strong> {parseFloat(stats.thisWeekHours) >= 15 ? 'You\'re hitting your targets!' : 'Consider adjusting study schedule'}</li>
                </ul>
              </Col>
              <Col md={6}>
                <h6>🎯 Belfast Tech Focus Tips</h6>
                <ul className="small">
                  <li>Document your learning journey for interviews</li>
                  <li>Share weekly progress on LinkedIn with #BelfastTech</li>
                  <li>Join virtual study groups with other career changers</li>
                  <li>Practice explaining concepts in your progress notes</li>
                </ul>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default ProgressLogs;