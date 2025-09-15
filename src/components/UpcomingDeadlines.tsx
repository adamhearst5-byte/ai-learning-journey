import React from 'react';
import { Card, ListGroup, Badge } from 'react-bootstrap';
import { TimelineEvent } from '../types';

const UpcomingDeadlines: React.FC = () => {
  const upcomingEvents: TimelineEvent[] = [
    {
      id: '1',
      title: 'Complete Python Refresher Course',
      type: 'milestone',
      date: '2025-09-30',
      quarter: 'Q1',
      description: 'Finish basic Python programming review',
      completed: false,
      priority: 'high'
    },
    {
      id: '2',
      title: 'Google AI Essentials Certification',
      type: 'deadline',
      date: '2025-10-15',
      quarter: 'Q1',
      description: 'Complete free Google AI certification',
      completed: false,
      priority: 'medium'
    },
    {
      id: '3',
      title: 'First AI Project - Sentiment Analysis',
      type: 'goal',
      date: '2025-11-01',
      quarter: 'Q1',
      description: 'Build and deploy sentiment analysis tool',
      completed: false,
      priority: 'high'
    },
    {
      id: '4',
      title: 'Q1 Progress Review',
      type: 'milestone',
      date: '2025-12-01',
      quarter: 'Q1',
      description: 'Evaluate Q1 goals and plan Q2',
      completed: false,
      priority: 'medium'
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'milestone': return '🎯';
      case 'deadline': return '⏰';
      case 'goal': return '🚀';
      default: return '📌';
    }
  };

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case 'high': return 'danger';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'primary';
    }
  };

  const getDaysUntil = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className="shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">📅 Upcoming Deadlines</h5>
        <Badge bg="secondary">{upcomingEvents.length} events</Badge>
      </Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          {upcomingEvents.map((event) => {
            const daysUntil = getDaysUntil(event.date);
            const isOverdue = daysUntil < 0;
            const isUrgent = daysUntil <= 7 && daysUntil >= 0;
            
            return (
              <ListGroup.Item 
                key={event.id}
                className={`d-flex justify-content-between align-items-start ${
                  isOverdue ? 'bg-danger bg-opacity-10' : 
                  isUrgent ? 'bg-warning bg-opacity-10' : ''
                }`}
              >
                <div className="me-auto">
                  <div className="d-flex align-items-center mb-1">
                    <span className="me-2">{getEventIcon(event.type)}</span>
                    <h6 className="mb-0">{event.title}</h6>
                  </div>
                  <p className="mb-1 small text-muted">{event.description}</p>
                  <div className="d-flex align-items-center">
                    <Badge 
                      bg={getPriorityVariant(event.priority)} 
                      className="me-2"
                    >
                      {event.priority}
                    </Badge>
                    <small className="text-muted">
                      📍 {formatDate(event.date)}
                    </small>
                  </div>
                </div>
                <div className="text-end">
                  <div className={`small fw-bold ${
                    isOverdue ? 'text-danger' : 
                    isUrgent ? 'text-warning' : 'text-muted'
                  }`}>
                    {isOverdue ? 
                      `${Math.abs(daysUntil)} days overdue` :
                      daysUntil === 0 ? 'Today' :
                      daysUntil === 1 ? 'Tomorrow' :
                      `${daysUntil} days`
                    }
                  </div>
                  <Badge bg={event.quarter === 'Q1' ? 'success' : 'secondary'}>
                    {event.quarter}
                  </Badge>
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-center">
        <small className="text-muted">
          💡 Tip: Click on any deadline to view details and mark as complete
        </small>
      </Card.Footer>
    </Card>
  );
};

export default UpcomingDeadlines;