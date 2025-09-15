import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Badge as BadgeType } from '../types';

interface BadgeDisplayProps {
  badges: BadgeType[];
}

const BadgeDisplay: React.FC<BadgeDisplayProps> = ({ badges }) => {
  const earnedBadges = badges.filter(badge => badge.earned);
  const totalBadges = badges.length;

  return (
    <Card className="shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">🏆 Achievements & Badges</h5>
        <span className="small text-muted">
          {earnedBadges.length}/{totalBadges} earned
        </span>
      </Card.Header>
      <Card.Body>
        <Row>
          {badges.map((badge) => (
            <Col xs={6} md={4} key={badge.id} className="mb-3">
              <div 
                className={`text-center p-3 rounded border ${
                  badge.earned ? 'badge-earned bg-light' : 'badge-locked'
                }`}
                style={{ 
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                title={badge.description}
              >
                <div 
                  className="display-4 mb-2"
                  style={{ fontSize: '2rem' }}
                >
                  {badge.icon}
                </div>
                <h6 className={`mb-1 ${badge.earned ? '' : 'text-muted'}`}>
                  {badge.name}
                </h6>
                <p className="small text-muted mb-0">
                  {badge.requirement}
                </p>
                {badge.earned && badge.earnedDate && (
                  <div className="mt-2">
                    <span className="badge bg-success small">
                      Earned {new Date(badge.earnedDate).toLocaleDateString('en-GB')}
                    </span>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
        
        <div className="mt-3 p-3 bg-light rounded">
          <h6 className="mb-2">🎯 Next Badges to Unlock</h6>
          <div className="small">
            {badges.filter(badge => !badge.earned).slice(0, 2).map((badge) => (
              <div key={badge.id} className="d-flex align-items-center mb-2">
                <span className="me-2">{badge.icon}</span>
                <div>
                  <strong>{badge.name}:</strong> {badge.requirement}
                </div>
              </div>
            ))}
            {badges.filter(badge => !badge.earned).length === 0 && (
              <p className="text-center text-muted mb-0">
                🎉 Congratulations! You've earned all available badges!
              </p>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BadgeDisplay;