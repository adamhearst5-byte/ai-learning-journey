import React, { useState, useMemo } from 'react';
import { Card, Row, Col, Form, Badge, Button, InputGroup } from 'react-bootstrap';
import { LearningResource } from '../types';

const learningResources: LearningResource[] = [
  {
    id: '1',
    title: 'AI Python for Beginners',
    type: 'course',
    provider: 'DeepLearning.AI',
    url: 'https://www.deeplearning.ai/',
    estimatedHours: 25,
    difficulty: 'beginner',
    cost: 'free',
    quarter: 'Q1',
    tags: ['python', 'ai', 'fundamentals'],
    description: 'Comprehensive introduction to AI programming with Python, perfect for beginners.',
    completed: false,
    rating: 4.8
  },
  {
    id: '2',
    title: 'Python for Data Analysis',
    type: 'book',
    provider: 'Wes McKinney',
    url: 'https://github.com/wesm/pydata-book',
    estimatedHours: 40,
    difficulty: 'beginner',
    cost: 'free',
    quarter: 'Q1',
    tags: ['python', 'data-analysis', 'pandas'],
    description: 'Essential guide to data manipulation and analysis with Python and Pandas.',
    completed: false,
    rating: 4.7
  },
  {
    id: '3',
    title: '3Blue1Brown - Essence of Linear Algebra',
    type: 'video',
    provider: '3Blue1Brown',
    url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
    estimatedHours: 12,
    difficulty: 'beginner',
    cost: 'free',
    quarter: 'Q1',
    tags: ['mathematics', 'linear-algebra', 'visualization'],
    description: 'Visual and intuitive introduction to linear algebra concepts essential for AI.',
    completed: false,
    rating: 4.9
  },
  {
    id: '4',
    title: 'Machine Learning Course',
    type: 'course',
    provider: 'Andrew Ng - Coursera',
    url: 'https://www.coursera.org/learn/machine-learning',
    estimatedHours: 60,
    difficulty: 'intermediate',
    cost: 'paid',
    quarter: 'Q2',
    tags: ['machine-learning', 'algorithms', 'comprehensive'],
    description: 'The legendary ML course by Andrew Ng, foundational for any AI practitioner.',
    completed: false,
    rating: 4.9
  },
  {
    id: '5',
    title: 'Fast.ai Deep Learning Course',
    type: 'course',
    provider: 'Fast.ai',
    url: 'https://course.fast.ai/',
    estimatedHours: 80,
    difficulty: 'advanced',
    cost: 'free',
    quarter: 'Q3',
    tags: ['deep-learning', 'neural-networks', 'practical'],
    description: 'Top-down approach to deep learning with practical applications.',
    completed: false,
    rating: 4.8
  }
];

const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedQuarter, setSelectedQuarter] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedCost, setSelectedCost] = useState('All');

  const filteredResources = useMemo(() => {
    return learningResources.filter(resource => {
      const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesQuarter = selectedQuarter === 'All' || resource.quarter === selectedQuarter;
      const matchesType = selectedType === 'All' || resource.type === selectedType;
      const matchesDifficulty = selectedDifficulty === 'All' || resource.difficulty === selectedDifficulty;
      const matchesCost = selectedCost === 'All' || resource.cost === selectedCost;
      
      return matchesSearch && matchesQuarter && matchesType && matchesDifficulty && matchesCost;
    });
  }, [searchTerm, selectedQuarter, selectedType, selectedDifficulty, selectedCost]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return '🎓';
      case 'book': return '📚';
      case 'video': return '📹';
      case 'tutorial': return '📝';
      case 'article': return '📄';
      default: return '📖';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'danger';
      default: return 'secondary';
    }
  };

  const stats = {
    total: learningResources.length,
    free: learningResources.filter(r => r.cost === 'free').length,
    completed: learningResources.filter(r => r.completed).length,
    totalHours: learningResources.reduce((sum, r) => sum + r.estimatedHours, 0)
  };

  return (
    <div className="fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>📚 Learning Resources</h1>
        <Badge bg="primary" className="fs-6">
          {filteredResources.length} of {stats.total} resources
        </Badge>
      </div>

      {/* Stats Overview */}
      <Row className="mb-4">
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-primary mb-1">{stats.total}</h4>
              <small className="text-muted">Total Resources</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-success mb-1">{stats.free}</h4>
              <small className="text-muted">Free Resources</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-info mb-1">{stats.completed}</h4>
              <small className="text-muted">Completed</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6} className="mb-2">
          <Card className="text-center border-0 bg-light">
            <Card.Body className="py-3">
              <h4 className="text-warning mb-1">{stats.totalHours}h</h4>
              <small className="text-muted">Total Study Time</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Filters */}
      <Card className="mb-4 shadow-sm">
        <Card.Header>
          <h5 className="mb-0">🔍 Search & Filter</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={6} className="mb-3">
              <InputGroup>
                <InputGroup.Text>🔍</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Search resources, tags, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col lg={6} className="mb-3">
              <Row>
                <Col sm={3}>
                  <Form.Select
                    value={selectedQuarter}
                    onChange={(e) => setSelectedQuarter(e.target.value)}
                    size="sm"
                  >
                    <option value="All">All Quarters</option>
                    <option value="Q1">Q1</option>
                    <option value="Q2">Q2</option>
                    <option value="Q3">Q3</option>
                    <option value="Q4">Q4</option>
                  </Form.Select>
                </Col>
                <Col sm={3}>
                  <Form.Select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    size="sm"
                  >
                    <option value="All">All Types</option>
                    <option value="course">Courses</option>
                    <option value="book">Books</option>
                    <option value="video">Videos</option>
                    <option value="tutorial">Tutorials</option>
                    <option value="article">Articles</option>
                  </Form.Select>
                </Col>
                <Col sm={3}>
                  <Form.Select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    size="sm"
                  >
                    <option value="All">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </Form.Select>
                </Col>
                <Col sm={3}>
                  <Form.Select
                    value={selectedCost}
                    onChange={(e) => setSelectedCost(e.target.value)}
                    size="sm"
                  >
                    <option value="All">All Costs</option>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </Form.Select>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Resources Grid */}
      <Row>
        {filteredResources.map((resource) => (
          <Col lg={6} key={resource.id} className="mb-4">
            <Card className="h-100 resource-card shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div className="d-flex align-items-center">
                    <span className="me-2 fs-4">{getTypeIcon(resource.type)}</span>
                    <div>
                      <h6 className="mb-1">{resource.title}</h6>
                      <small className="text-muted">{resource.provider}</small>
                    </div>
                  </div>
                  <div className="text-end">
                    <Badge bg={resource.quarter === 'Q1' ? 'success' : 
                               resource.quarter === 'Q2' ? 'warning' : 
                               resource.quarter === 'Q3' ? 'info' : 'danger'}>
                      {resource.quarter}
                    </Badge>
                  </div>
                </div>
                
                <p className="small mb-3">{resource.description}</p>
                
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {resource.tags.map((tag, index) => (
                    <span key={index} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <Badge bg={getDifficultyColor(resource.difficulty)}>
                      {resource.difficulty}
                    </Badge>
                    <Badge bg={resource.cost === 'free' ? 'success' : 'warning'}>
                      {resource.cost === 'free' ? 'FREE' : 'PAID'}
                    </Badge>
                  </div>
                  <div className="text-end small">
                    <div>{resource.estimatedHours}h</div>
                    {resource.rating && (
                      <div className="text-warning">
                        ⭐ {resource.rating}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="d-flex gap-2">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Resource
                  </Button>
                  <Button 
                    variant={resource.completed ? 'success' : 'outline-secondary'} 
                    size="sm"
                  >
                    {resource.completed ? '✓ Completed' : 'Mark Complete'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredResources.length === 0 && (
        <Card className="text-center py-5">
          <Card.Body>
            <h4>📭 No resources found</h4>
            <p className="text-muted">Try adjusting your search criteria or filters.</p>
            <Button variant="outline-primary" onClick={() => {
              setSearchTerm('');
              setSelectedQuarter('All');
              setSelectedType('All');
              setSelectedDifficulty('All');
              setSelectedCost('All');
            }}>
              Clear All Filters
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Resources;