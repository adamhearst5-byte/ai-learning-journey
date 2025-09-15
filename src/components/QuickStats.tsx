import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { UserProgress } from '../types';

interface QuickStatsProps {
  userProgress: UserProgress;
}

const QuickStats: React.FC<QuickStatsProps> = ({ userProgress }) => {
  const stats = [
    {
      title: 'Study Hours',
      value: userProgress.totalHours,
      target: 780, // 15 hours/week * 52 weeks
      icon: '⏰',
      color: 'primary'
    },
    {
      title: 'Skills Mastered',
      value: userProgress.skillsMastered,
      target: 25,
      icon: '🧠',
      color: 'success'
    },
    {
      title: 'Projects Complete',
      value: userProgress.projectsCompleted,
      target: 10,
      icon: '🚀',
      color: 'warning'
    },
    {
      title: 'Certifications',
      value: userProgress.certificationsEarned,
      target: 4,
      icon: '🏆',
      color: 'info'
    }
  ];

  return (
    <Card className="shadow-sm">
      <Card.Header>
        <h5 className="mb-0">🎯 Quick Stats</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          {stats.map((stat, index) => (
            <Col md={6} lg={3} key={index} className="mb-3 mb-lg-0">
              <div className="text-center">
                <div className="display-4 mb-2">{stat.icon}</div>
                <h3 className={`text-${stat.color} mb-1`}>
                  {stat.value}
                  <small className="text-muted">/{stat.target}</small>
                </h3>
                <p className="mb-0 small">{stat.title}</p>
                <div className="progress mt-2" style={{ height: '4px' }}>
                  <div
                    className={`progress-bar bg-${stat.color}`}
                    style={{ width: `${Math.min(100, (stat.value / stat.target) * 100)}%` }}
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="mt-4 pt-3 border-top">
          <Row className="text-center">
            <Col md={4}>
              <div className="d-flex align-items-center justify-content-center">
                <span className="me-2">🔥</span>
                <div>
                  <div className="fw-bold">{userProgress.currentStreak}</div>
                  <small className="text-muted">Day Streak</small>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex align-items-center justify-content-center">
                <span className="me-2">📅</span>
                <div>
                  <div className="fw-bold">
                    {Math.round((userProgress.totalHours / 15) * 100) / 100}
                  </div>
                  <small className="text-muted">Weeks Progress</small>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="d-flex align-items-center justify-content-center">
                <span className="me-2">💰</span>
                <div>
                  <div className="fw-bold">£0/£200</div>
                  <small className="text-muted">Budget Used</small>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuickStats;