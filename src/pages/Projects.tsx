import React, { useState } from 'react';
import { Card, Row, Col, Badge, Button, ProgressBar, Form, Modal } from 'react-bootstrap';
import { Project } from '../types';

const projectData: Project[] = [
  {
    id: '1',
    title: 'Sentiment Analysis Tool',
    description: 'Build a sentiment analysis application that can classify text as positive, negative, or neutral. Modify base code of a simple ML model to understand model internals.',
    difficulty: 'beginner',
    estimatedWeeks: 2,
    quarter: 'Q1',
    skills: ['Python', 'NLTK', 'Scikit-learn', 'Text Processing', 'Model Evaluation'],
    githubTemplate: 'https://github.com/adamhearst5-byte/sentiment-analysis-template',
    requirements: [
      'Python programming basics',
      'Understanding of text preprocessing',
      'Basic knowledge of machine learning concepts',
      'Familiarity with pandas and numpy'
    ],
    deliverables: [
      'Working sentiment analysis application',
      'Web interface using Streamlit or Flask',
      'Model performance evaluation report',
      'GitHub repository with clean code',
      'README with installation and usage instructions'
    ],
    evaluationMetrics: [
      'Accuracy score above 80%',
      'Precision and recall analysis',
      'F1-score calculation',
      'Confusion matrix visualization',
      'Cross-validation results'
    ],
    portfolioTips: [
      'Create a demo video showing the application in action',
      'Write a blog post explaining your approach',
      'Include visualizations of model performance',
      'Document challenges faced and solutions implemented',
      'Showcase different text inputs and their classifications'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: '2',
    title: 'Custom Neural Network from Scratch',
    description: 'Implement a neural network from scratch without using high-level frameworks. Explore model internals including forward propagation, backpropagation, and gradient descent.',
    difficulty: 'intermediate',
    estimatedWeeks: 4,
    quarter: 'Q2',
    skills: ['Python', 'NumPy', 'Mathematics', 'Neural Networks', 'Backpropagation', 'Optimization'],
    githubTemplate: 'https://github.com/adamhearst5-byte/neural-network-scratch-template',
    requirements: [
      'Strong Python programming skills',
      'Linear algebra fundamentals',
      'Calculus (derivatives)',
      'Understanding of neural network theory',
      'Matrix operations with NumPy'
    ],
    deliverables: [
      'Complete neural network implementation',
      'Training and testing on real dataset',
      'Visualization of learning curves',
      'Comparison with scikit-learn implementation',
      'Detailed documentation of mathematical concepts'
    ],
    evaluationMetrics: [
      'Convergence during training',
      'Accuracy on test dataset',
      'Learning curve analysis',
      'Gradient verification tests',
      'Performance comparison with frameworks'
    ],
    portfolioTips: [
      'Create step-by-step tutorial blog post',
      'Include mathematical derivations',
      'Show training progress animations',
      'Compare different activation functions',
      'Demonstrate understanding of backpropagation'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: '3',
    title: 'AI Chatbot with Transformer Base Code',
    description: 'Build an intelligent chatbot using transformer architecture. Focus on understanding model complexities and modify transformer base code for specific use cases.',
    difficulty: 'advanced',
    estimatedWeeks: 6,
    quarter: 'Q3',
    skills: ['Python', 'PyTorch/TensorFlow', 'Transformers', 'NLP', 'Attention Mechanisms', 'Fine-tuning'],
    githubTemplate: 'https://github.com/adamhearst5-byte/transformer-chatbot-template',
    requirements: [
      'Deep learning framework experience',
      'Understanding of transformer architecture',
      'NLP preprocessing techniques',
      'Experience with pre-trained models',
      'Knowledge of attention mechanisms'
    ],
    deliverables: [
      'Functional chatbot application',
      'Custom transformer implementation',
      'Web interface for user interaction',
      'Model fine-tuning pipeline',
      'Evaluation metrics and testing suite'
    ],
    evaluationMetrics: [
      'Response relevance scoring',
      'BLEU score evaluation',
      'User engagement metrics',
      'Model perplexity measures',
      'Response time optimization'
    ],
    portfolioTips: [
      'Deploy chatbot for public testing',
      'Create technical deep-dive presentation',
      'Show attention visualization',
      'Document fine-tuning process',
      'Include conversation examples'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: '4',
    title: 'Computer Vision Classification',
    description: 'Develop an image classification system using convolutional neural networks. Implement data augmentation and transfer learning techniques.',
    difficulty: 'intermediate',
    estimatedWeeks: 3,
    quarter: 'Q2',
    skills: ['Python', 'CNN', 'OpenCV', 'Transfer Learning', 'Data Augmentation', 'Image Processing'],
    githubTemplate: 'https://github.com/adamhearst5-byte/cv-classification-template',
    requirements: [
      'CNN architecture understanding',
      'Image preprocessing knowledge',
      'Deep learning framework proficiency',
      'Data augmentation techniques',
      'Transfer learning concepts'
    ],
    deliverables: [
      'Image classification model',
      'Data pipeline with augmentation',
      'Model evaluation and comparison',
      'Web demo application',
      'Performance optimization report'
    ],
    evaluationMetrics: [
      'Classification accuracy',
      'Precision/recall per class',
      'ROC curve analysis',
      'Model size and inference time',
      'Generalization performance'
    ],
    portfolioTips: [
      'Create interactive demo',
      'Show before/after augmentation',
      'Compare different architectures',
      'Document optimization process',
      'Include failure case analysis'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: '5',
    title: 'End-to-End ML Pipeline with MLOps',
    description: 'Build a complete machine learning pipeline with deployment, monitoring, and continuous integration. Focus on production-ready ML systems.',
    difficulty: 'advanced',
    estimatedWeeks: 8,
    quarter: 'Q4',
    skills: ['MLOps', 'Docker', 'CI/CD', 'Cloud Deployment', 'Model Monitoring', 'Version Control'],
    githubTemplate: 'https://github.com/adamhearst5-byte/mlops-pipeline-template',
    requirements: [
      'ML model development experience',
      'Docker containerization',
      'Cloud platform knowledge (AWS/Azure)',
      'CI/CD pipeline setup',
      'Model versioning concepts'
    ],
    deliverables: [
      'Deployed ML model API',
      'Automated training pipeline',
      'Model monitoring dashboard',
      'CI/CD integration',
      'Production documentation'
    ],
    evaluationMetrics: [
      'Model performance tracking',
      'API response times',
      'System reliability metrics',
      'Deployment success rate',
      'Resource utilization optimization'
    ],
    portfolioTips: [
      'Document entire pipeline architecture',
      'Show monitoring dashboards',
      'Demonstrate auto-scaling',
      'Include cost optimization',
      'Present to tech professionals'
    ],
    status: 'not-started',
    progress: 0
  }
];

const Projects: React.FC = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectData.filter(project => {
    const matchesQuarter = selectedQuarter === 'All' || project.quarter === selectedQuarter;
    const matchesDifficulty = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    return matchesQuarter && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'danger';
      default: return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'success';
      case 'in-progress': return 'primary';
      case 'not-started': return 'secondary';
      default: return 'secondary';
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const stats = {
    total: projectData.length,
    beginner: projectData.filter(p => p.difficulty === 'beginner').length,
    intermediate: projectData.filter(p => p.difficulty === 'intermediate').length,
    advanced: projectData.filter(p => p.difficulty === 'advanced').length,
    completed: projectData.filter(p => p.status === 'completed').length
  };

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>🚀 AI Projects Portfolio</h1>
        <Badge bg="primary" className="fs-6">
          {filteredProjects.length} of {stats.total} projects
        </Badge>
      </div>

      {/* Stats Overview */}
      <Row className="mb-4">
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-primary mb-1">{stats.total}</h4>
              <small className="text-muted">Total Projects</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-success mb-1">{stats.beginner}</h4>
              <small className="text-muted">Beginner</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-warning mb-1">{stats.intermediate}</h4>
              <small className="text-muted">Intermediate</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-danger mb-1">{stats.advanced}</h4>
              <small className="text-muted">Advanced</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Filters */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🔍 Filter Projects</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Quarter</Form.Label>
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
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Difficulty</Form.Label>
                <Form.Select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  <option value="All">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Projects Grid */}
      <Row>
        {filteredProjects.map((project) => (
          <Col lg={6} key={project.id} className="mb-4">
            <Card 
              className={`h-100 project-card ${project.difficulty} shadow-sm`}
              style={{ cursor: 'pointer' }}
              onClick={() => handleProjectClick(project)}
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h5 className="mb-1">{project.title}</h5>
                    <small className="text-muted">{project.estimatedWeeks} weeks • {project.quarter}</small>
                  </div>
                  <div className="text-end">
                    <Badge bg={getDifficultyColor(project.difficulty)} className="mb-1">
                      {project.difficulty}
                    </Badge>
                    <br />
                    <Badge bg={getStatusColor(project.status)}>
                      {project.status.replace('-', ' ')}
                    </Badge>
                  </div>
                </div>
                
                <p className="mb-3">{project.description}</p>
                
                <div className="mb-3">
                  <small className="text-muted">Skills:</small>
                  <div className="d-flex flex-wrap gap-1 mt-1">
                    {project.skills.slice(0, 4).map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="skill-tag">
                        +{project.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                {project.progress > 0 && (
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <small>Progress</small>
                      <small>{project.progress}%</small>
                    </div>
                    <ProgressBar now={project.progress} variant={getDifficultyColor(project.difficulty)} />
                  </div>
                )}
                
                <div className="d-flex gap-2">
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.githubTemplate, '_blank');
                    }}
                  >
                    📁 Template
                  </Button>
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    🚀 Start Project
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Project Details Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <div>
              <div className="mb-3">
                <Badge bg={getDifficultyColor(selectedProject.difficulty)} className="me-2">
                  {selectedProject.difficulty}
                </Badge>
                <Badge bg="secondary" className="me-2">{selectedProject.quarter}</Badge>
                <Badge bg="info">{selectedProject.estimatedWeeks} weeks</Badge>
              </div>
              
              <p className="lead">{selectedProject.description}</p>
              
              <h6>🛠 Skills You'll Learn</h6>
              <div className="d-flex flex-wrap gap-1 mb-3">
                {selectedProject.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
              
              <h6>📋 Requirements</h6>
              <ul className="mb-3">
                {selectedProject.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              
              <h6>🎯 Deliverables</h6>
              <ul className="mb-3">
                {selectedProject.deliverables.map((deliverable, index) => (
                  <li key={index}>{deliverable}</li>
                ))}
              </ul>
              
              <h6>📊 Evaluation Metrics</h6>
              <ul className="mb-3">
                {selectedProject.evaluationMetrics.map((metric, index) => (
                  <li key={index}>{metric}</li>
                ))}
              </ul>
              
              <h6>💡 Portfolio Tips</h6>
              <ul className="mb-3">
                {selectedProject.portfolioTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
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
            href={selectedProject?.githubTemplate}
            target="_blank"
            rel="noopener noreferrer"
          >
            📁 Use Template
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Getting Started Guide */}
      <Card className="mt-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🚀 Getting Started with Projects</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h6>📅 Recommended Project Sequence</h6>
              <ol className="small">
                <li><strong>Q1:</strong> Start with Sentiment Analysis Tool (beginner-friendly)</li>
                <li><strong>Q2:</strong> Build Computer Vision Classification and Custom Neural Network</li>
                <li><strong>Q3:</strong> Tackle the Transformer Chatbot (most challenging)</li>
                <li><strong>Q4:</strong> Complete MLOps Pipeline (industry-focused)</li>
              </ol>
            </Col>
            <Col md={6}>
              <h6>💼 Portfolio Building Tips</h6>
              <ul className="small">
                <li>Document your process with blog posts</li>
                <li>Create demo videos for each project</li>
                <li>Host projects on your personal domain</li>
                <li>Include technical challenges and solutions</li>
                <li>Show before/after comparisons</li>
                <li>Get feedback from Belfast tech community</li>
              </ul>
            </Col>
          </Row>
          
          <div className="mt-3 p-3 bg-light rounded">
            <h6>🇬🇧 UK/Northern Ireland Opportunities</h6>
            <ul className="small mb-0">
              <li><strong>Belfast Tech Scene:</strong> Showcase projects at local meetups and demo days</li>
              <li><strong>Open Source:</strong> Contribute to UK-based AI projects and repositories</li>
              <li><strong>Industry Projects:</strong> Tailor projects to local company needs (fintech, healthcare)</li>
              <li><strong>Networking:</strong> Share projects on LinkedIn with Belfast tech hashtags</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;