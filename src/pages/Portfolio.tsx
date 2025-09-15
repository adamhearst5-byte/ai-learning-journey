import React, { useState } from 'react';
import { Card, Row, Col, Button, Form, Modal, Badge, Alert } from 'react-bootstrap';

const Portfolio: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [portfolioItems] = useState([
    {
      id: '1',
      title: 'Sentiment Analysis Tool',
      description: 'A machine learning application that analyzes text sentiment using natural language processing techniques.',
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'Streamlit'],
      status: 'completed',
      demoUrl: 'https://your-demo-url.com',
      githubUrl: 'https://github.com/your-username/sentiment-analysis',
      imageUrl: '/placeholder-project.jpg',
      completedDate: '2025-11-15'
    }
  ]);

  const resumeTemplate = `
# Your Name
**AI/ML Developer | Belfast, Northern Ireland**
📧 your.email@example.com | 📱 +44 7XXX XXXXXX | 💼 linkedin.com/in/yourprofile | 🐙 github.com/yourusername

## 🎯 Professional Summary
Motivated software engineering graduate transitioning from retail management to AI/ML development. Completed intensive 12-month self-directed learning program focusing on machine learning, deep learning, and practical AI applications. Seeking Junior AI Engineer position in Belfast's growing tech sector.

## 🛠 Technical Skills
**Programming Languages:** Python, JavaScript, SQL
**ML/AI Frameworks:** TensorFlow, PyTorch, Scikit-learn, Keras
**Data Analysis:** Pandas, NumPy, Matplotlib, Seaborn
**Cloud Platforms:** AWS, Azure (certified)
**Tools & Technologies:** Git, Docker, Jupyter, Streamlit
**Databases:** PostgreSQL, MongoDB

## 📚 Education & Certifications
**Foundation Degree in Software Engineering** | Institution Name | Year
**Google AI Essentials** | Google | 2025
**IBM AI Foundations** | IBM | 2026
**TensorFlow Developer Certificate** | TensorFlow | 2026
**AWS Certified Machine Learning – Specialty** | Amazon Web Services | 2026

## 🚀 AI/ML Projects

### Sentiment Analysis Tool (2025)
- Built end-to-end sentiment classification system using Python and scikit-learn
- Implemented data preprocessing pipeline and model evaluation metrics
- Deployed web application using Streamlit with 85% accuracy on test data
- **Technologies:** Python, NLTK, Scikit-learn, Streamlit

### Custom Neural Network from Scratch (2026)
- Implemented feedforward neural network without high-level frameworks
- Developed backpropagation algorithm and gradient descent optimization
- Achieved comparable performance to scikit-learn on MNIST dataset
- **Technologies:** Python, NumPy, Matplotlib

### AI Chatbot with Transformer Architecture (2026)
- Fine-tuned pre-trained transformer model for domain-specific conversations
- Implemented attention mechanisms and evaluated response quality
- Deployed chatbot with real-time inference capabilities
- **Technologies:** Python, PyTorch, Transformers, FastAPI

### MLOps Pipeline with CI/CD (2026)
- Built complete ML pipeline from data ingestion to model deployment
- Implemented automated testing, monitoring, and model versioning
- Deployed on AWS with Docker containerization and auto-scaling
- **Technologies:** Python, Docker, AWS, GitHub Actions, MLflow

## 💼 Professional Experience

### Retail Supervisor | Sainsbury's | 2020-2026
- Led team of 15+ staff members, developing leadership and communication skills
- Analyzed customer data and sales patterns to optimize product placement
- Implemented process improvements that increased efficiency by 20%
- Managed inventory systems and coordinated with suppliers
- **Transferable Skills:** Data analysis, team leadership, problem-solving, customer focus

## 🏆 Achievements & Recognition
- Completed 780+ hours of self-directed AI/ML study
- Built portfolio of 5 production-ready ML applications
- Achieved 95% completion rate on all certification programs
- Active contributor to Belfast tech community events and meetups

## 🎯 Career Objective
Seeking to leverage strong foundation in software engineering, proven self-learning ability, and hands-on ML project experience to contribute to innovative AI solutions in Belfast's tech ecosystem. Passionate about applying AI to solve real-world business problems.
`;

  const linkedInBio = `
🤖 AI/ML Developer | Belfast Tech | Career Changer

🎓 Software Engineering graduate transitioning from retail to AI
📚 Completed intensive 12-month AI learning journey (780+ hours)
🏆 Certified: Google AI, IBM AI, TensorFlow Developer, AWS ML
🚀 Built 5 production ML projects including neural networks & chatbots
💼 7+ years leadership experience in retail management
📍 Belfast, Northern Ireland | Open to remote UK opportunities

🔗 Portfolio: your-portfolio-site.com
📧 Connect for AI/ML opportunities in the Belfast tech scene

#BelfastTech #AIMLDeveloper #CareerChanger #MachineLearning #TechTransition
`;

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>💼 Portfolio Builder</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          ➕ Add Project
        </Button>
      </div>

      {/* Portfolio Overview */}
      <Alert variant="info" className="mb-4">
        <h5>🎯 Building Your AI Portfolio for Belfast Market</h5>
        <p className="mb-2">
          <strong>Goal:</strong> Create a compelling portfolio that demonstrates your AI/ML skills to Belfast employers
        </p>
        <p className="mb-0">
          <strong>Focus:</strong> Showcase practical projects, clean code, and business impact understanding
        </p>
      </Alert>

      {/* Quick Actions */}
      <Row className="mb-4">
        <Col md={4} className="mb-2">
          <Card className="text-center border-0 bg-light h-100">
            <Card.Body className="py-3">
              <h5 className="mb-2">📄 Resume Generator</h5>
              <p className="small text-muted mb-3">AI-optimized resume template</p>
              <Button variant="outline-primary" size="sm">
                Generate Resume
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-2">
          <Card className="text-center border-0 bg-light h-100">
            <Card.Body className="py-3">
              <h5 className="mb-2">💼 LinkedIn Bio</h5>
              <p className="small text-muted mb-3">Professional social profile</p>
              <Button variant="outline-primary" size="sm">
                Copy Bio Template
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-2">
          <Card className="text-center border-0 bg-light h-100">
            <Card.Body className="py-3">
              <h5 className="mb-2">🌐 Portfolio Site</h5>
              <p className="small text-muted mb-3">Personal website template</p>
              <Button variant="outline-primary" size="sm">
                Deploy Site
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Portfolio Projects */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🚀 Your AI/ML Projects</h5>
        </Card.Header>
        <Card.Body>
          {portfolioItems.length === 0 ? (
            <div className="text-center py-5">
              <h4>📭 No projects added yet</h4>
              <p className="text-muted">Start building your portfolio by adding your first AI/ML project!</p>
              <Button variant="primary" onClick={() => setShowModal(true)}>
                Add Your First Project
              </Button>
            </div>
          ) : (
            <Row>
              {portfolioItems.map((item) => (
                <Col lg={6} key={item.id} className="mb-4">
                  <Card className="h-100 border">
                    <Card.Img 
                      variant="top" 
                      src={item.imageUrl} 
                      style={{ height: '200px', objectFit: 'cover', backgroundColor: '#f8f9fa' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZjNzU3ZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFJL01MIFByb2plY3Q8L3RleHQ+PC9zdmc+';
                      }}
                    />
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Card.Title className="h6">{item.title}</Card.Title>
                        <Badge bg={item.status === 'completed' ? 'success' : 'warning'}>
                          {item.status}
                        </Badge>
                      </div>
                      <Card.Text className="small">{item.description}</Card.Text>
                      <div className="mb-3">
                        {item.technologies.map((tech, index) => (
                          <span key={index} className="skill-tag me-1 mb-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="d-flex gap-2">
                        {item.demoUrl && (
                          <Button variant="primary" size="sm" href={item.demoUrl} target="_blank">
                            🌐 Demo
                          </Button>
                        )}
                        <Button variant="outline-primary" size="sm" href={item.githubUrl} target="_blank">
                          📁 Code
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Card.Body>
      </Card>

      {/* Portfolio Templates */}
      <Row>
        <Col lg={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">📄 AI-Optimized Resume Template</h5>
            </Card.Header>
            <Card.Body>
              <p className="small text-muted mb-3">
                Tailored for Belfast tech market with ATS-friendly formatting
              </p>
              <div 
                className="bg-light p-3 rounded small"
                style={{ 
                  maxHeight: '300px', 
                  overflowY: 'auto',
                  whiteSpace: 'pre-line',
                  fontFamily: 'monospace'
                }}
              >
                {resumeTemplate}
              </div>
              <div className="mt-3 d-flex gap-2">
                <Button variant="primary" size="sm">
                  📋 Copy Template
                </Button>
                <Button variant="outline-primary" size="sm">
                  📥 Download PDF
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6} className="mb-4">
          <Card className="shadow-sm">
            <Card.Header>
              <h5 className="mb-0">💼 LinkedIn Profile Bio</h5>
            </Card.Header>
            <Card.Body>
              <p className="small text-muted mb-3">
                Professional bio optimized for Belfast tech recruiters
              </p>
              <div 
                className="bg-light p-3 rounded small"
                style={{ 
                  maxHeight: '300px', 
                  overflowY: 'auto',
                  whiteSpace: 'pre-line'
                }}
              >
                {linkedInBio}
              </div>
              <div className="mt-3 d-flex gap-2">
                <Button variant="primary" size="sm">
                  📋 Copy Bio
                </Button>
                <Button variant="outline-primary" size="sm">
                  🔗 LinkedIn Tips
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Portfolio Tips */}
      <Card className="mt-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">💡 Portfolio Tips for Belfast Tech Market</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col md={6}>
              <h6>🎯 What Belfast Employers Want</h6>
              <ul className="small">
                <li><strong>Practical Projects:</strong> Show real-world problem solving</li>
                <li><strong>Clean Code:</strong> Well-documented, readable implementations</li>
                <li><strong>Business Impact:</strong> Explain how your projects add value</li>
                <li><strong>Learning Agility:</strong> Demonstrate continuous improvement</li>
                <li><strong>Communication:</strong> Clear explanations of technical concepts</li>
              </ul>
            </Col>
            <Col md={6}>
              <h6>🚀 Standing Out from Other Candidates</h6>
              <ul className="small">
                <li><strong>End-to-End Projects:</strong> From data to deployment</li>
                <li><strong>Local Relevance:</strong> Projects that could help Belfast businesses</li>
                <li><strong>Open Source:</strong> Contribute to projects used by local companies</li>
                <li><strong>Presentation Skills:</strong> Demo videos and technical talks</li>
                <li><strong>Industry Knowledge:</strong> Understanding of fintech, insurance, healthtech</li>
              </ul>
            </Col>
          </Row>
          
          <div className="mt-3 p-3 bg-light rounded">
            <h6>🇬🇧 UK-Specific Portfolio Considerations</h6>
            <ul className="small mb-0">
              <li><strong>GDPR Compliance:</strong> Show awareness of data protection in your projects</li>
              <li><strong>Local Case Studies:</strong> Reference UK companies and use cases</li>
              <li><strong>Right to Work:</strong> Clearly state your work authorization status</li>
              <li><strong>Salary Expectations:</strong> Research Belfast market rates (£30k-£50k)</li>
              <li><strong>Cultural Fit:</strong> Demonstrate understanding of UK business culture</li>
            </ul>
          </div>
        </Card.Body>
      </Card>

      {/* Add Project Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>➕ Add Portfolio Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Project Title</Form.Label>
              <Form.Control type="text" placeholder="e.g., Sentiment Analysis Tool" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Brief description of what the project does and its impact" 
              />
            </Form.Group>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Demo URL (optional)</Form.Label>
                  <Form.Control type="url" placeholder="https://your-demo.com" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>GitHub URL</Form.Label>
                  <Form.Control type="url" placeholder="https://github.com/username/project" />
                </Form.Group>
              </Col>
            </Row>
            
            <Form.Group className="mb-3">
              <Form.Label>Technologies Used (comma-separated)</Form.Label>
              <Form.Control type="text" placeholder="Python, TensorFlow, Streamlit, AWS" />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Project Status</Form.Label>
              <Form.Select>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="planning">Planning</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            💾 Add Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Portfolio;