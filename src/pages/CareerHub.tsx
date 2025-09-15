import React, { useState } from 'react';
import { Card, Row, Col, Badge, Button, Table, Modal, Form, Alert, ListGroup } from 'react-bootstrap';
import { JobApplication } from '../types';

const CareerHub: React.FC = () => {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    location: '',
    remote: false,
    salary: '',
    notes: ''
  });

  const ukJobBoards = [
    {
      name: 'Indeed UK',
      url: 'https://uk.indeed.com/jobs?q=machine+learning&l=Belfast',
      description: 'Search for ML/AI jobs in Belfast and remote UK positions',
      focus: 'General job search'
    },
    {
      name: 'LinkedIn Jobs',
      url: 'https://www.linkedin.com/jobs/search/?keywords=artificial%20intelligence&location=Belfast%2C%20Northern%20Ireland',
      description: 'Professional network with strong Belfast tech presence',
      focus: 'Networking & professional connections'
    },
    {
      name: 'CWJobs',
      url: 'https://www.cwjobs.co.uk/jobs/machine-learning/in-belfast',
      description: 'UK\'s leading technology job board',
      focus: 'Tech-specific roles'
    },
    {
      name: 'Totaljobs',
      url: 'https://www.totaljobs.com/jobs/machine-learning/in-belfast',
      description: 'Major UK job site with Belfast opportunities',
      focus: 'Broad market coverage'
    },
    {
      name: 'AngelList',
      url: 'https://angel.co/jobs',
      description: 'Startup and scale-up opportunities',
      focus: 'Startup ecosystem'
    }
  ];

  const belfastCompanies = [
    {
      name: 'Allstate Northern Ireland',
      type: 'Insurance Tech',
      description: 'Major US insurance company with significant AI/ML initiatives in Belfast',
      opportunities: 'Data Science, ML Engineering, AI Research'
    },
    {
      name: 'Kainos',
      type: 'Software Consultancy',
      description: 'Belfast-based consultancy working on digital transformation projects',
      opportunities: 'AI Consultants, Data Engineers, ML Developers'
    },
    {
      name: 'Rapid7',
      type: 'Cybersecurity',
      description: 'Cybersecurity company using AI for threat detection',
      opportunities: 'ML Security Engineers, Data Scientists'
    },
    {
      name: 'CME Group',
      type: 'Financial Services',
      description: 'Financial markets company with Belfast technology center',
      opportunities: 'Quantitative Analysts, ML Engineers'
    },
    {
      name: 'Neueda',
      type: 'Financial Technology',
      description: 'Fintech consultancy with AI and analytics focus',
      opportunities: 'AI Developers, Data Analysts'
    },
    {
      name: 'Aflac',
      type: 'Insurance',
      description: 'Insurance company leveraging AI for claims processing',
      opportunities: 'Data Scientists, ML Engineers'
    }
  ];

  const interviewQuestions = [
    {
      category: 'Technical Fundamentals',
      questions: [
        'Explain the bias-variance tradeoff in machine learning',
        'What is the difference between supervised and unsupervised learning?',
        'How would you handle missing data in a dataset?',
        'Explain overfitting and how to prevent it',
        'What is cross-validation and why is it important?'
      ]
    },
    {
      category: 'Practical Implementation',
      questions: [
        'Walk me through your sentiment analysis project',
        'How would you deploy a machine learning model to production?',
        'Explain a time when you had to debug a model that wasn\'t performing well',
        'How do you evaluate the performance of a classification model?',
        'Describe your experience with different ML libraries and frameworks'
      ]
    },
    {
      category: 'Business Application',
      questions: [
        'How would you explain machine learning to a non-technical stakeholder?',
        'Give an example of how AI could improve business processes',
        'How do you ensure AI models are ethical and unbiased?',
        'What factors would you consider when choosing between different algorithms?',
        'How would you handle a situation where your model\'s predictions are questioned?'
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newApplication: JobApplication = {
      id: Date.now().toString(),
      company: formData.company,
      position: formData.position,
      location: formData.location,
      remote: formData.remote,
      salary: formData.salary,
      applicationDate: new Date().toISOString().split('T')[0],
      status: 'applied',
      notes: formData.notes
    };

    setApplications([...applications, newApplication]);
    setShowModal(false);
    setFormData({
      company: '',
      position: '',
      location: '',
      remote: false,
      salary: '',
      notes: ''
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'offer': return 'success';
      case 'interview': return 'primary';
      case 'applied': return 'info';
      case 'rejected': return 'danger';
      case 'accepted': return 'success';
      default: return 'secondary';
    }
  };

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>🎯 Career Hub - Belfast Tech Market</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          ➕ Log Application
        </Button>
      </div>

      {/* Market Overview */}
      <Alert variant="info" className="mb-4">
        <h5>🇬🇧 Belfast AI/ML Job Market Insights</h5>
        <p className="mb-2">
          <strong>Average Salary Range:</strong> £30,000 - £50,000 for entry-level AI/ML roles in Belfast
        </p>
        <p className="mb-2">
          <strong>Growth Trends:</strong> 40% increase in AI job postings in Northern Ireland over the past 2 years
        </p>
        <p className="mb-0">
          <strong>Key Sectors:</strong> Financial Services, Insurance, Cybersecurity, Healthtech, and Digital Transformation
        </p>
      </Alert>

      {/* Application Stats */}
      <Row className="mb-4">
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-primary mb-1">{applications.length}</h4>
              <small className="text-muted">Applications Sent</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-warning mb-1">
                {applications.filter(app => app.status === 'interview').length}
              </h4>
              <small className="text-muted">Interviews</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-success mb-1">
                {applications.filter(app => app.status === 'offer').length}
              </h4>
              <small className="text-muted">Offers</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-info mb-1">
                {applications.length > 0 ? 
                  `${((applications.filter(app => ['interview', 'offer'].includes(app.status)).length / applications.length) * 100).toFixed(0)}%` : 
                  '0%'
                }
              </h4>
              <small className="text-muted">Response Rate</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Job Search Resources */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🔍 UK Job Search Resources</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            {ukJobBoards.map((board, index) => (
              <Col md={6} key={index} className="mb-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{board.name}</h6>
                    <p className="small text-muted mb-1">{board.description}</p>
                    <small className="text-primary">{board.focus}</small>
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    href={board.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </Button>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Belfast Companies */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🏢 Target Companies in Belfast</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            {belfastCompanies.map((company, index) => (
              <Col lg={6} key={index} className="mb-3">
                <Card className="border-start border-4 border-primary h-100">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h6 className="mb-0">{company.name}</h6>
                      <Badge bg="secondary">{company.type}</Badge>
                    </div>
                    <p className="small mb-2">{company.description}</p>
                    <div className="small">
                      <strong>Opportunities:</strong> {company.opportunities}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>

      {/* Interview Preparation */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🎤 Interview Preparation</h5>
        </Card.Header>
        <Card.Body>
          {interviewQuestions.map((category, index) => (
            <div key={index} className="mb-4">
              <h6>{category.category}</h6>
              <ListGroup>
                {category.questions.map((question, qIndex) => (
                  <ListGroup.Item key={qIndex} className="border-0 px-0">
                    <small>Q{qIndex + 1}:</small> {question}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          ))}
        </Card.Body>
      </Card>

      {/* Application Tracker */}
      <Card className="shadow-sm">
        <Card.Header>
          <h5 className="mb-0">📊 Application Tracker</h5>
        </Card.Header>
        <Card.Body className="p-0">
          {applications.length === 0 ? (
            <div className="text-center py-5">
              <h4>📭 No applications tracked yet</h4>
              <p className="text-muted">Start tracking your job applications to monitor your progress!</p>
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Log Your First Application
              </Button>
            </div>
          ) : (
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Location</th>
                  <th>Applied</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id}>
                    <td className="fw-bold">{app.company}</td>
                    <td>{app.position}</td>
                    <td>
                      {app.location}
                      {app.remote && <Badge bg="success" className="ms-1">Remote</Badge>}
                    </td>
                    <td>{new Date(app.applicationDate).toLocaleDateString('en-GB')}</td>
                    <td>
                      <Badge bg={getStatusColor(app.status)}>
                        {app.status}
                      </Badge>
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
                        {app.notes}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* Application Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>📝 Log Job Application</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., Kainos, Allstate NI"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., Junior ML Engineer"
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., Belfast, London, Remote"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Salary (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., £35,000 - £45,000"
                    value={formData.salary}
                    onChange={(e) => setFormData({...formData, salary: e.target.value})}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Remote work available"
                checked={formData.remote}
                onChange={(e) => setFormData({...formData, remote: e.target.checked})}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Application details, contact info, next steps..."
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
              💾 Save Application
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Networking and Community */}
      <Card className="mt-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🤝 Belfast Tech Community & Networking</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h6>🇬🇧 Local Tech Events</h6>
              <ul className="small">
                <li><strong>Belfast Tech Meetups:</strong> Regular AI/ML discussions</li>
                <li><strong>Digital DNA:</strong> Northern Ireland's digital festival</li>
                <li><strong>Catalyst Inc:</strong> Innovation hub events</li>
                <li><strong>Women in Tech NI:</strong> Networking and support</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6>📱 Professional Networking</h6>
              <ul className="small">
                <li>Join LinkedIn groups: "Belfast Tech Professionals"</li>
                <li>Follow Belfast tech companies on social media</li>
                <li>Attend virtual conferences and webinars</li>
                <li>Contribute to open source projects</li>
              </ul>
            </Col>
          </Row>
          
          <div className="mt-3 p-3 bg-light rounded">
            <h6>💡 Networking Tips for Career Changers</h6>
            <ul className="small mb-0">
              <li><strong>Share Your Journey:</strong> Document your transition from retail to AI openly</li>
              <li><strong>Volunteer Your Skills:</strong> Offer to help local charities with data analysis</li>
              <li><strong>Informational Interviews:</strong> Reach out to AI professionals in Belfast</li>
              <li><strong>Local Partnerships:</strong> Connect with Queen's University Belfast AI researchers</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CareerHub;