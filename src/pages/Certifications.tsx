import React, { useState } from 'react';
import { Card, Row, Col, Badge, Button, ProgressBar, Modal, Form } from 'react-bootstrap';
import { Certification } from '../types';

const certificationData: Certification[] = [
  {
    id: '1',
    name: 'Google AI Essentials',
    provider: 'Google',
    cost: 0,
    estimatedHours: 10,
    quarter: 'Q1',
    description: 'Learn AI fundamentals including machine learning, neural networks, and responsible AI practices. Perfect introduction to AI concepts.',
    url: 'https://www.coursera.org/learn/google-ai-essentials',
    prerequisites: [
      'Basic computer literacy',
      'No programming experience required',
      'Curiosity about AI and technology'
    ],
    studyPlan: [
      'Week 1: Introduction to AI (2.5 hours)',
      'Week 2: Machine Learning Basics (2.5 hours)',
      'Week 3: Neural Networks Overview (2.5 hours)',
      'Week 4: AI Ethics and Applications (2.5 hours)'
    ],
    practiceResources: [
      'Google AI Education resources',
      'Interactive AI demos and tools',
      'Coursera discussion forums',
      'Google AI blog articles'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: '2',
    name: 'IBM AI Foundations',
    provider: 'IBM',
    cost: 0,
    estimatedHours: 25,
    quarter: 'Q2',
    description: 'Comprehensive introduction to AI concepts, Watson AI services, and practical applications in business contexts.',
    url: 'https://www.coursera.org/learn/ai-foundations',
    prerequisites: [
      'Basic programming knowledge helpful',
      'Understanding of data concepts',
      'Completion of Google AI Essentials recommended'
    ],
    studyPlan: [
      'Week 1-2: AI History and Fundamentals (6 hours)',
      'Week 3-4: Machine Learning Deep Dive (8 hours)',
      'Week 5-6: Natural Language Processing (6 hours)',
      'Week 7: AI in Business and Ethics (5 hours)'
    ],
    practiceResources: [
      'IBM Watson Studio trials',
      'Hands-on labs and exercises',
      'IBM AI case studies',
      'Peer review assignments'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: '3',
    name: 'TensorFlow Developer Certificate',
    provider: 'TensorFlow',
    cost: 100,
    estimatedHours: 40,
    quarter: 'Q3',
    description: 'Professional certification demonstrating proficiency in TensorFlow for deep learning model development and deployment.',
    url: 'https://www.tensorflow.org/certificate',
    prerequisites: [
      'Python programming proficiency',
      'Neural networks understanding',
      'Experience with ML frameworks',
      'Completion of deep learning courses'
    ],
    studyPlan: [
      'Week 1-2: TensorFlow Fundamentals (8 hours)',
      'Week 3-4: Computer Vision with CNN (10 hours)',
      'Week 5-6: Natural Language Processing (10 hours)',
      'Week 7-8: Time Series and Sequences (8 hours)',
      'Week 9: Exam Preparation (4 hours)'
    ],
    practiceResources: [
      'TensorFlow official tutorials',
      'DeepLearning.AI TensorFlow courses',
      'Practice exam questions',
      'Hands-on coding exercises'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: '4',
    name: 'AWS Certified Machine Learning – Specialty',
    provider: 'Amazon Web Services',
    cost: 300,
    estimatedHours: 60,
    quarter: 'Q4',
    description: 'Validates expertise in building, training, tuning, and deploying machine learning models on AWS platform.',
    url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
    prerequisites: [
      '1-2 years ML experience',
      'AWS services familiarity',
      'Deep learning knowledge',
      'MLOps understanding'
    ],
    studyPlan: [
      'Week 1-2: AWS ML Services Overview (12 hours)',
      'Week 3-4: Data Engineering for ML (12 hours)',
      'Week 5-6: Modeling and Evaluation (12 hours)',
      'Week 7-8: ML Implementation and Operations (12 hours)',
      'Week 9-10: Practice Exams and Review (12 hours)'
    ],
    practiceResources: [
      'AWS Machine Learning University',
      'Official AWS practice exams',
      'AWS documentation and whitepapers',
      'Hands-on AWS labs'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: '5',
    name: 'Microsoft Azure AI Fundamentals',
    provider: 'Microsoft',
    cost: 99,
    estimatedHours: 20,
    quarter: 'Q2',
    description: 'Foundation-level certification covering AI workloads and considerations on Microsoft Azure platform.',
    url: 'https://docs.microsoft.com/en-us/learn/certifications/azure-ai-fundamentals/',
    prerequisites: [
      'Basic cloud concepts',
      'General technology literacy',
      'Interest in AI and machine learning'
    ],
    studyPlan: [
      'Week 1: Introduction to AI on Azure (5 hours)',
      'Week 2: Machine Learning on Azure (5 hours)',
      'Week 3: Computer Vision Workloads (5 hours)',
      'Week 4: NLP and Knowledge Mining (5 hours)'
    ],
    practiceResources: [
      'Microsoft Learn modules',
      'Azure AI demos and trials',
      'Practice assessments',
      'Microsoft documentation'
    ],
    status: 'not-started',
    progress: 0
  }
];

const Certifications: React.FC = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const filteredCertifications = certificationData.filter(cert => {
    return selectedQuarter === 'All' || cert.quarter === selectedQuarter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'studying': return 'primary';
      case 'scheduled': return 'warning';
      case 'not-started': return 'secondary';
      default: return 'secondary';
    }
  };

  const getQuarterColor = (quarter: string) => {
    switch (quarter) {
      case 'Q1': return 'success';
      case 'Q2': return 'warning';
      case 'Q3': return 'info';
      case 'Q4': return 'danger';
      default: return 'secondary';
    }
  };

  const handleCertClick = (cert: Certification) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const stats = {
    total: certificationData.length,
    free: certificationData.filter(c => c.cost === 0).length,
    paid: certificationData.filter(c => c.cost > 0).length,
    completed: certificationData.filter(c => c.status === 'completed').length,
    totalCost: certificationData.reduce((sum, c) => sum + c.cost, 0),
    totalHours: certificationData.reduce((sum, c) => sum + c.estimatedHours, 0)
  };

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>🏆 AI Certifications Roadmap</h1>
        <Badge bg="primary" className="fs-6">
          {filteredCertifications.length} of {stats.total} certifications
        </Badge>
      </div>

      {/* Stats Overview */}
      <Row className="mb-4">
        <Col md={4} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-primary mb-1">{stats.total}</h4>
              <small className="text-muted">Total Certifications</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-success mb-1">{stats.free}</h4>
              <small className="text-muted">Free Certifications</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-warning mb-1">£{stats.totalCost}</h4>
              <small className="text-muted">Total Cost</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Budget Tracker */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">💰 Certification Budget Tracker</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span>Budget Used</span>
                  <span>£0 / £200</span>
                </div>
                <ProgressBar now={0} variant="success" />
              </div>
              <div className="small">
                <div className="d-flex justify-content-between">
                  <span>Free Certifications:</span>
                  <strong>£0</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Paid Certifications:</span>
                  <strong>£{stats.totalCost}</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Remaining Budget:</span>
                  <strong>£{200 - stats.totalCost}</strong>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <h6>💡 Budget Tips</h6>
              <ul className="small mb-0">
                <li>Start with free certifications to build confidence</li>
                <li>Plan paid certifications around quarterly goals</li>
                <li>Look for employer sponsorship opportunities</li>
                <li>Consider group discounts for Belfast tech community</li>
              </ul>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Filter */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🔍 Filter by Quarter</h5>
        </Card.Header>
        <Card.Body>
          <Form.Select
            value={selectedQuarter}
            onChange={(e) => setSelectedQuarter(e.target.value)}
          >
            <option value="All">All Quarters</option>
            <option value="Q1">Q1: Foundations</option>
            <option value="Q2">Q2: Core Skills</option>
            <option value="Q3">Q3: Advanced AI</option>
            <option value="Q4">Q4: Job Preparation</option>
          </Form.Select>
        </Card.Body>
      </Card>

      {/* Certifications Grid */}
      <Row>
        {filteredCertifications.map((cert) => (
          <Col lg={6} key={cert.id} className="mb-4">
            <Card 
              className="h-100 shadow-sm"
              style={{ cursor: 'pointer' }}
              onClick={() => handleCertClick(cert)}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="mb-1">{cert.name}</h5>
                    <small className="text-muted">{cert.provider}</small>
                  </div>
                  <div className="text-end">
                    <Badge bg={getQuarterColor(cert.quarter)} className="mb-1">
                      {cert.quarter}
                    </Badge>
                    <br />
                    <Badge bg={getStatusColor(cert.status)}>
                      {cert.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
                
                <p className="mb-3">{cert.description}</p>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="text-center">
                      <div className="fw-bold">{cert.cost === 0 ? 'FREE' : `£${cert.cost}`}</div>
                      <small className="text-muted">Cost</small>
                    </div>
                    <div className="text-center">
                      <div className="fw-bold">{cert.estimatedHours}h</div>
                      <small className="text-muted">Study Time</small>
                    </div>
                  </div>
                  <div className="text-end">
                    {cert.cost === 0 ? (
                      <Badge bg="success">Free</Badge>
                    ) : (
                      <Badge bg="warning">Paid</Badge>
                    )}
                  </div>
                </div>
                
                {cert.progress > 0 && (
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <small>Progress</small>
                      <small>{cert.progress}%</small>
                    </div>
                    <ProgressBar now={cert.progress} variant="primary" />
                  </div>
                )}
                
                <div className="d-flex gap-2">
                  <Button 
                    variant="primary" 
                    size="sm"
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    📖 Learn More
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    🎯 Start Studying
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Certification Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedCert?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCert && (
            <div>
              <div className="mb-3">
                <Badge bg={getQuarterColor(selectedCert.quarter)} className="me-2">
                  {selectedCert.quarter}
                </Badge>
                <Badge bg="secondary" className="me-2">{selectedCert.provider}</Badge>
                <Badge bg={selectedCert.cost === 0 ? 'success' : 'warning'}>
                  {selectedCert.cost === 0 ? 'FREE' : `£${selectedCert.cost}`}
                </Badge>
              </div>
              
              <p className="lead">{selectedCert.description}</p>
              
              <div className="row mb-3">
                <div className="col-md-6">
                  <h6>⏱ Study Time</h6>
                  <p>{selectedCert.estimatedHours} hours</p>
                </div>
                <div className="col-md-6">
                  <h6>💰 Cost</h6>
                  <p>{selectedCert.cost === 0 ? 'Free' : `£${selectedCert.cost}`}</p>
                </div>
              </div>
              
              <h6>📋 Prerequisites</h6>
              <ul className="mb-3">
                {selectedCert.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
              
              <h6>📅 Study Plan</h6>
              <ul className="mb-3">
                {selectedCert.studyPlan.map((week, index) => (
                  <li key={index}>{week}</li>
                ))}
              </ul>
              
              <h6>📚 Practice Resources</h6>
              <ul className="mb-3">
                {selectedCert.practiceResources.map((resource, index) => (
                  <li key={index}>{resource}</li>
                ))}
              </ul>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button 
            variant="primary" 
            href={selectedCert?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            📖 Start Learning
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Certification Strategy Guide */}
      <Card className="mt-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🎯 Certification Strategy for Belfast Tech Market</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h6>🗓 Recommended Timeline</h6>
              <ol className="small">
                <li><strong>Q1 (Sep-Dec 2025):</strong> Google AI Essentials - Build foundation</li>
                <li><strong>Q2 (Jan-Mar 2026):</strong> IBM AI Foundations + Azure Fundamentals</li>
                <li><strong>Q3 (Apr-Jun 2026):</strong> TensorFlow Developer Certificate</li>
                <li><strong>Q4 (Jul-Sep 2026):</strong> AWS ML Specialty before job applications</li>
              </ol>
            </Col>
            <Col md={6}>
              <h6>💼 Industry Value in UK</h6>
              <ul className="small">
                <li><strong>Google/IBM:</strong> Great for entry-level positions</li>
                <li><strong>TensorFlow:</strong> Highly valued by tech companies</li>
                <li><strong>AWS:</strong> Essential for cloud-first Belfast companies</li>
                <li><strong>Azure:</strong> Strong demand in enterprise sector</li>
              </ul>
            </Col>
          </Row>
          
          <div className="mt-3 p-3 bg-light rounded">
            <h6>🇬🇧 UK-Specific Benefits</h6>
            <ul className="small mb-0">
              <li><strong>Professional Recognition:</strong> Major UK employers recognize these certifications</li>
              <li><strong>Salary Impact:</strong> Can increase starting salary by £3k-£8k in Belfast market</li>
              <li><strong>Visa Support:</strong> Professional certifications strengthen work visa applications</li>
              <li><strong>Networking:</strong> Access to certified professional communities in UK</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Certifications;