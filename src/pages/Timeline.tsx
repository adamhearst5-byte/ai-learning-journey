import React, { useState } from 'react';
import { Card, Row, Col, ProgressBar, Badge, ListGroup } from 'react-bootstrap';
import { TimelineEvent } from '../types';

const Timeline: React.FC = () => {
  const [activeQuarter, setActiveQuarter] = useState('Q1');

  const quarters = {
    Q1: {
      title: 'Q1: Foundations (Sep - Dec 2025)',
      description: 'Python refresh, AI intro, and building fundamental skills',
      color: 'success',
      goals: [
        'Complete Python programming refresher',
        'Learn AI/ML fundamentals',
        'Complete Google AI Essentials certification',
        'Build first sentiment analysis project',
        'Log 200+ study hours'
      ],
      weeks: [
        {
          week: 1,
          dates: 'Sep 1-7, 2025',
          focus: 'Python Basics Review',
          hours: '15 hours',
          tasks: [
            '5 hours: Python syntax and data structures',
            '5 hours: Object-oriented programming review',
            '3 hours: Python libraries (NumPy, Pandas basics)',
            '2 hours: Set up development environment'
          ]
        },
        {
          week: 2,
          dates: 'Sep 8-14, 2025',
          focus: 'Mathematics for AI',
          hours: '15 hours',
          tasks: [
            '6 hours: Linear algebra fundamentals (3Blue1Brown)',
            '4 hours: Statistics and probability basics',
            '3 hours: Calculus review (derivatives)',
            '2 hours: Practice problems and exercises'
          ]
        },
        {
          week: 3,
          dates: 'Sep 15-21, 2025',
          focus: 'AI Introduction',
          hours: '15 hours',
          tasks: [
            '8 hours: AI Python for Beginners (DeepLearning.AI)',
            '4 hours: Machine learning overview',
            '2 hours: AI ethics and applications',
            '1 hour: Join AI communities and forums'
          ]
        },
        {
          week: 4,
          dates: 'Sep 22-28, 2025',
          focus: 'First AI Project Planning',
          hours: '15 hours',
          tasks: [
            '6 hours: Continue AI Python course',
            '4 hours: Research sentiment analysis techniques',
            '3 hours: Plan first project structure',
            '2 hours: Set up GitHub repository'
          ]
        }
      ]
    },
    Q2: {
      title: 'Q2: Core Skills (Jan - Mar 2026)',
      description: 'Machine learning libraries, data science, and practical projects',
      color: 'warning',
      goals: [
        'Master scikit-learn and pandas',
        'Complete Andrew Ng ML course',
        'Build 3 substantial projects',
        'Earn IBM AI Foundations certification',
        'Contribute to open source'
      ],
      weeks: [
        {
          week: 1,
          dates: 'Jan 6-12, 2026',
          focus: 'Scikit-learn Deep Dive',
          hours: '18 hours',
          tasks: [
            '8 hours: Scikit-learn tutorials and documentation',
            '6 hours: Hands-on classification projects',
            '2 hours: Regression analysis practice',
            '2 hours: Model evaluation techniques'
          ]
        },
        {
          week: 2,
          dates: 'Jan 13-19, 2026',
          focus: 'Data Preprocessing & Feature Engineering',
          hours: '18 hours',
          tasks: [
            '6 hours: Data cleaning techniques',
            '5 hours: Feature selection and engineering',
            '4 hours: Handling missing data',
            '3 hours: Data visualization with matplotlib/seaborn'
          ]
        }
      ]
    },
    Q3: {
      title: 'Q3: Advanced AI (Apr - Jun 2026)',
      description: 'Deep learning, neural networks, and model internals',
      color: 'info',
      goals: [
        'Master PyTorch/TensorFlow',
        'Build neural networks from scratch',
        'Complete TensorFlow certification',
        'Create transformer-based project',
        'Build comprehensive portfolio'
      ],
      weeks: [
        {
          week: 1,
          dates: 'Apr 7-13, 2026',
          focus: 'Neural Network Fundamentals',
          hours: '20 hours',
          tasks: [
            '8 hours: Neural network theory and math',
            '6 hours: Implement neural net from scratch',
            '4 hours: Backpropagation deep dive',
            '2 hours: Optimization algorithms study'
          ]
        }
      ]
    },
    Q4: {
      title: 'Q4: Job Preparation (Jul - Sep 2026)',
      description: 'MLOps, job applications, and interview preparation',
      color: 'danger',
      goals: [
        'Learn MLOps and deployment',
        'Complete portfolio website',
        'Apply to 30+ positions',
        'Complete mock interviews',
        'Land AI/ML role in Belfast'
      ],
      weeks: [
        {
          week: 1,
          dates: 'Jul 7-13, 2026',
          focus: 'MLOps and Deployment',
          hours: '20 hours',
          tasks: [
            '8 hours: Docker and containerization',
            '6 hours: Model deployment on AWS/Azure',
            '4 hours: CI/CD for ML pipelines',
            '2 hours: Monitoring and logging'
          ]
        }
      ]
    }
  };

  const milestones: TimelineEvent[] = [
    {
      id: '1',
      title: 'Complete Python Refresher',
      type: 'milestone',
      date: '2025-09-30',
      quarter: 'Q1',
      description: 'Solid foundation in Python programming',
      completed: false,
      priority: 'high'
    },
    {
      id: '2',
      title: 'Google AI Essentials Certification',
      type: 'deadline',
      date: '2025-10-31',
      quarter: 'Q1',
      description: 'First AI certification completed',
      completed: false,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'First AI Project - Sentiment Analysis',
      type: 'goal',
      date: '2025-11-15',
      quarter: 'Q1',
      description: 'Deploy working sentiment analysis tool',
      completed: false,
      priority: 'high'
    },
    {
      id: '4',
      title: 'Q1 Review and Planning',
      type: 'milestone',
      date: '2025-12-15',
      quarter: 'Q1',
      description: 'Assess progress and plan Q2',
      completed: false,
      priority: 'medium'
    },
    {
      id: '5',
      title: 'Andrew Ng ML Course Complete',
      type: 'deadline',
      date: '2026-02-28',
      quarter: 'Q2',
      description: 'Comprehensive ML fundamentals',
      completed: false,
      priority: 'high'
    },
    {
      id: '6',
      title: 'TensorFlow Developer Certificate',
      type: 'deadline',
      date: '2026-05-31',
      quarter: 'Q3',
      description: 'Professional TensorFlow certification',
      completed: false,
      priority: 'high'
    },
    {
      id: '7',
      title: 'Portfolio Website Launch',
      type: 'goal',
      date: '2026-07-15',
      quarter: 'Q4',
      description: 'Professional portfolio showcasing projects',
      completed: false,
      priority: 'high'
    },
    {
      id: '8',
      title: 'Job Application Blitz',
      type: 'milestone',
      date: '2026-08-31',
      quarter: 'Q4',
      description: 'Apply to 30+ AI/ML positions',
      completed: false,
      priority: 'high'
    }
  ];

  const getCurrentWeek = () => {
    const startDate = new Date('2025-09-01');
    const currentDate = new Date();
    const diffTime = currentDate.getTime() - startDate.getTime();
    const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7));
    return Math.max(1, diffWeeks);
  };

  const getQuarterProgress = (quarter: string) => {
    // Simulate progress based on current date
    const currentDate = new Date();
    const startDates = {
      Q1: new Date('2025-09-01'),
      Q2: new Date('2026-01-01'),
      Q3: new Date('2026-04-01'),
      Q4: new Date('2026-07-01')
    };
    
    const quarterStart = startDates[quarter as keyof typeof startDates];
    const quarterEnd = new Date(quarterStart);
    quarterEnd.setMonth(quarterEnd.getMonth() + 3);
    
    if (currentDate < quarterStart) return 0;
    if (currentDate > quarterEnd) return 100;
    
    const totalDays = (quarterEnd.getTime() - quarterStart.getTime()) / (1000 * 60 * 60 * 24);
    const daysPassed = (currentDate.getTime() - quarterStart.getTime()) / (1000 * 60 * 60 * 24);
    
    return Math.min(100, Math.max(0, (daysPassed / totalDays) * 100));
  };

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>📅 12-Month AI Learning Timeline</h1>
        <Badge bg="primary" className="fs-6">
          Week {getCurrentWeek()} of 52
        </Badge>
      </div>

      {/* Quarter Overview Cards */}
      <Row className="mb-4">
        {Object.entries(quarters).map(([key, quarter]) => {
          const progress = getQuarterProgress(key);
          return (
            <Col md={6} lg={3} key={key} className="mb-3">
              <Card 
                className={`h-100 border-${quarter.color} ${activeQuarter === key ? 'shadow' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveQuarter(key)}
              >
                <Card.Header className={`bg-${quarter.color} text-white`}>
                  <h6 className="mb-0">{key}</h6>
                </Card.Header>
                <Card.Body>
                  <h6 className="mb-2">{quarter.title.split(':')[1]}</h6>
                  <p className="small text-muted mb-3">{quarter.description}</p>
                  <ProgressBar 
                    now={progress} 
                    variant={quarter.color}
                    className="mb-2"
                  />
                  <div className="d-flex justify-content-between small">
                    <span>Progress</span>
                    <strong>{progress.toFixed(0)}%</strong>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      {/* Detailed Quarter View */}
      <Row>
        <Col lg={8}>
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">{quarters[activeQuarter as keyof typeof quarters].title}</h5>
            </Card.Header>
            <Card.Body>
              <p className="lead mb-4">
                {quarters[activeQuarter as keyof typeof quarters].description}
              </p>
              
              <h6 className="mb-3">📋 Quarter Goals</h6>
              <ListGroup className="mb-4">
                {quarters[activeQuarter as keyof typeof quarters].goals.map((goal, index) => (
                  <ListGroup.Item 
                    key={index}
                    className="d-flex align-items-center"
                  >
                    <span className="me-2">□</span>
                    {goal}
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <h6 className="mb-3">📅 Weekly Breakdown</h6>
              {quarters[activeQuarter as keyof typeof quarters].weeks.map((week, index) => (
                <Card key={index} className="mb-3 border-start border-4 border-primary">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="mb-0">Week {week.week}: {week.focus}</h6>
                      <Badge bg="outline-secondary">{week.hours}</Badge>
                    </div>
                    <p className="small text-muted mb-2">{week.dates}</p>
                    <ul className="small mb-0">
                      {week.tasks.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4}>
          {/* Key Milestones */}
          <Card className="shadow-sm mb-4">
            <Card.Header>
              <h5 className="mb-0">🎯 Key Milestones</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <ListGroup variant="flush">
                {milestones.filter(m => m.quarter === activeQuarter).map((milestone) => (
                  <ListGroup.Item key={milestone.id} className="d-flex align-items-start">
                    <div className="me-3">
                      <div className={`timeline-item ${milestone.completed ? 'completed' : ''}`}>
                        <span className="timeline-icon">
                          {milestone.type === 'milestone' ? '🎯' : 
                           milestone.type === 'deadline' ? '⏰' : '🚀'}
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{milestone.title}</h6>
                      <p className="small text-muted mb-1">{milestone.description}</p>
                      <div className="d-flex align-items-center">
                        <Badge 
                          bg={milestone.priority === 'high' ? 'danger' : 
                              milestone.priority === 'medium' ? 'warning' : 'secondary'}
                          className="me-2"
                        >
                          {milestone.priority}
                        </Badge>
                        <small className="text-muted">
                          {new Date(milestone.date).toLocaleDateString('en-GB')}
                        </small>
                      </div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>

          {/* Study Schedule Tips */}
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">💡 Study Tips for Working Professionals</h5>
            </Card.Header>
            <Card.Body>
              <div className="small">
                <div className="mb-3">
                  <h6>⏰ Time Management</h6>
                  <ul className="mb-0">
                    <li>Early morning sessions (6-8 AM) before work</li>
                    <li>Lunch break quick reviews (30 mins)</li>
                    <li>Evening deep focus (7-10 PM, 3-4 days/week)</li>
                    <li>Weekend project time (4-6 hours)</li>
                  </ul>
                </div>
                
                <div className="mb-3">
                  <h6>🧠 Fatigue Management</h6>
                  <ul className="mb-0">
                    <li>25-minute focused sessions (Pomodoro)</li>
                    <li>Alternate theory and practical work</li>
                    <li>Physical exercise between study blocks</li>
                    <li>Adequate sleep (7-8 hours minimum)</li>
                  </ul>
                </div>

                <div>
                  <h6>🎯 Retail-to-Tech Transition</h6>
                  <ul className="mb-0">
                    <li>Leverage customer service skills for user experience</li>
                    <li>Apply problem-solving from retail operations</li>
                    <li>Use team leadership experience in projects</li>
                    <li>Network with Belfast tech community</li>
                  </ul>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Timeline;