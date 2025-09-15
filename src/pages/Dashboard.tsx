import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';
import { UserProgress, Badge as BadgeType } from '../types';
import ProgressRing from '../components/ProgressRing';
import QuickStats from '../components/QuickStats';
import UpcomingDeadlines from '../components/UpcomingDeadlines';
import BadgeDisplay from '../components/BadgeDisplay';

const Dashboard: React.FC = () => {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    totalHours: 0,
    skillsMastered: 0,
    projectsCompleted: 0,
    certificationsEarned: 0,
    currentStreak: 0,
    quarterProgress: {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0
    }
  });

  const [badges, setBadges] = useState<BadgeType[]>([
    {
      id: '1',
      name: 'Getting Started',
      description: 'Complete your first study session',
      icon: '🌟',
      requirement: 'Log 1 hour of study',
      earned: false
    },
    {
      id: '2',
      name: 'Python Explorer',
      description: 'Complete 10 hours of Python study',
      icon: '🐍',
      requirement: 'Log 10 hours of Python study',
      earned: false
    },
    {
      id: '3',
      name: 'Consistent Learner',
      description: 'Study for 7 consecutive days',
      icon: '🔥',
      requirement: 'Maintain a 7-day streak',
      earned: false
    },
    {
      id: '4',
      name: 'Project Pioneer',
      description: 'Complete your first project',
      icon: '🚀',
      requirement: 'Complete 1 project',
      earned: false
    },
    {
      id: '5',
      name: 'Certificate Collector',
      description: 'Earn your first certification',
      icon: '🏆',
      requirement: 'Complete 1 certification',
      earned: false
    }
  ]);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem('aijourney-progress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }

    const savedBadges = localStorage.getItem('aijourney-badges');
    if (savedBadges) {
      setBadges(JSON.parse(savedBadges));
    }
  }, []);

  const currentDate = new Date();
  const startDate = new Date('2025-09-01');
  const endDate = new Date('2026-09-01');
  const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
  const daysPassed = Math.max(0, Math.ceil((currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
  const overallProgress = Math.min(100, (daysPassed / totalDays) * 100);

  const getCurrentQuarter = () => {
    const month = currentDate.getMonth();
    if (month >= 8 && month <= 11) return 'Q1'; // Sep-Dec
    if (month >= 0 && month <= 2) return 'Q2';  // Jan-Mar
    if (month >= 3 && month <= 5) return 'Q3';  // Apr-Jun
    return 'Q4'; // Jul-Sep
  };

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Dashboard</h1>
        <Badge bg="primary" className="fs-6">
          Current Quarter: {getCurrentQuarter()}
        </Badge>
      </div>

      {/* Welcome Message */}
      <Card className="mb-4 border-0 shadow-sm">
        <Card.Body className="bg-gradient p-4" style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}>
          <Row className="align-items-center">
            <Col md={8}>
              <h2 className="mb-3">Welcome to Your AI Learning Journey! 🚀</h2>
              <p className="mb-3 lead">
                Based on your foundation degree in software engineering, you're perfectly positioned 
                to dive into AI. Let's start with Python fundamentals and AI basics to build a 
                strong foundation for your journey from retail to tech.
              </p>
              <p className="mb-0">
                <strong>Next Steps:</strong> Begin with Python refresher courses and explore 
                machine learning fundamentals. Your goal of 15-20 hours per week is achievable 
                with focused evening and weekend sessions.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <div className="display-1">🎯</div>
              <p className="mb-0"><strong>Target:</strong> AI/ML Developer</p>
              <p className="mb-0"><small>Belfast Tech Hub Ready by Sep 2026</small></p>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Row>
        {/* Progress Overview */}
        <Col lg={4} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Header>
              <h5 className="mb-0">📊 Overall Progress</h5>
            </Card.Header>
            <Card.Body className="text-center">
              <ProgressRing 
                progress={overallProgress} 
                size={120}
                strokeWidth={8}
              />
              <h3 className="mt-3 mb-1">{overallProgress.toFixed(1)}%</h3>
              <p className="text-muted mb-3">Journey Complete</p>
              <div className="d-flex justify-content-between small">
                <span>Start Date:</span>
                <strong>Sep 1, 2025</strong>
              </div>
              <div className="d-flex justify-content-between small">
                <span>Target Date:</span>
                <strong>Sep 1, 2026</strong>
              </div>
              <div className="d-flex justify-content-between small">
                <span>Days Remaining:</span>
                <strong>{Math.max(0, totalDays - daysPassed)}</strong>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Quick Stats */}
        <Col lg={8} className="mb-4">
          <QuickStats userProgress={userProgress} />
        </Col>
      </Row>

      <Row>
        {/* Quarterly Progress */}
        <Col lg={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">📈 Quarterly Progress</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Q1: Foundations (Sep-Dec 2025)</span>
                  <span>{userProgress.quarterProgress.q1}%</span>
                </div>
                <ProgressBar 
                  now={userProgress.quarterProgress.q1} 
                  variant="success"
                  className="mb-2"
                />
              </div>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Q2: Core Skills (Jan-Mar 2026)</span>
                  <span>{userProgress.quarterProgress.q2}%</span>
                </div>
                <ProgressBar 
                  now={userProgress.quarterProgress.q2} 
                  variant="warning"
                  className="mb-2"
                />
              </div>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Q3: Advanced AI (Apr-Jun 2026)</span>
                  <span>{userProgress.quarterProgress.q3}%</span>
                </div>
                <ProgressBar 
                  now={userProgress.quarterProgress.q3} 
                  variant="info"
                  className="mb-2"
                />
              </div>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Q4: Job Preparation (Jul-Sep 2026)</span>
                  <span>{userProgress.quarterProgress.q4}%</span>
                </div>
                <ProgressBar 
                  now={userProgress.quarterProgress.q4} 
                  variant="danger"
                  className="mb-2"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Upcoming Deadlines */}
        <Col lg={6} className="mb-4">
          <UpcomingDeadlines />
        </Col>
      </Row>

      <Row>
        {/* Badges and Achievements */}
        <Col lg={6} className="mb-4">
          <BadgeDisplay badges={badges} />
        </Col>

        {/* Motivation Widget */}
        <Col lg={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">💪 Daily Motivation</h5>
            </Card.Header>
            <Card.Body>
              <div className="text-center p-3">
                <div className="display-4 mb-3">🔥</div>
                <h4 className="streak-counter">{userProgress.currentStreak}</h4>
                <p className="text-muted mb-3">Day Streak</p>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    "Success in AI isn't about being perfect—it's about being persistent. 
                    Every hour you invest brings you closer to your goal of joining Belfast's thriving tech scene."
                  </p>
                </blockquote>
                <div className="mt-3 small text-muted">
                  <p className="mb-1">💡 <strong>Today's Tip:</strong> Break large concepts into 30-minute focused sessions</p>
                  <p className="mb-0">🎯 <strong>Weekly Goal:</strong> {userProgress.totalHours}/15 hours completed</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;