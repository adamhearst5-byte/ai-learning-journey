import { LearningResource } from '../types';

export const learningResources: LearningResource[] = [
  // Quarter 1 (Sep-Dec 2025): Foundations
  {
    id: 'res-1',
    title: 'AI Python for Beginners',
    type: 'course',
    difficulty: 'beginner',
    cost: 'free',
    duration: '40 hours',
    url: 'https://www.deeplearning.ai/courses/ai-python-for-beginners/',
    description: 'Comprehensive introduction to Python programming for AI applications',
    topics: ['Python basics', 'Data structures', 'Functions', 'Object-oriented programming'],
    quarter: 1,
    provider: 'DeepLearning.AI',
    rating: 4.8,
    completed: false
  },
  {
    id: 'res-2',
    title: 'Python for Data Analysis',
    type: 'book',
    difficulty: 'beginner',
    cost: 'free',
    duration: '30 hours',
    url: 'https://wesmckinney.com/book/',
    description: 'Essential guide to data analysis with pandas, NumPy, and matplotlib',
    topics: ['Pandas', 'NumPy', 'Data manipulation', 'Data visualization'],
    quarter: 1,
    provider: 'Wes McKinney',
    rating: 4.7,
    completed: false
  },
  {
    id: 'res-3',
    title: 'Mathematics for Machine Learning',
    type: 'video',
    difficulty: 'beginner',
    cost: 'free',
    duration: '25 hours',
    url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
    description: '3Blue1Brown series on linear algebra and calculus for ML',
    topics: ['Linear algebra', 'Calculus', 'Statistics', 'Probability'],
    quarter: 1,
    provider: '3Blue1Brown',
    rating: 4.9,
    completed: false
  },
  {
    id: 'res-4',
    title: 'Introduction to Artificial Intelligence',
    type: 'course',
    difficulty: 'beginner',
    cost: 'free',
    duration: '20 hours',
    url: 'https://www.edx.org/course/introduction-artificial-intelligence-ai',
    description: 'Foundational concepts in AI and machine learning',
    topics: ['AI history', 'Machine learning basics', 'Neural networks', 'AI applications'],
    quarter: 1,
    provider: 'edX',
    rating: 4.5,
    completed: false
  },

  // Quarter 2 (Jan-Mar 2026): Core Skills
  {
    id: 'res-5',
    title: 'Machine Learning Course',
    type: 'course',
    difficulty: 'intermediate',
    cost: 'free',
    duration: '60 hours',
    url: 'https://www.coursera.org/learn/machine-learning',
    description: 'Andrew Ng\'s comprehensive machine learning course',
    topics: ['Supervised learning', 'Unsupervised learning', 'Neural networks', 'Deep learning'],
    quarter: 2,
    provider: 'Stanford/Coursera',
    rating: 4.9,
    completed: false
  },
  {
    id: 'res-6',
    title: 'Kaggle Learn',
    type: 'course',
    difficulty: 'beginner',
    cost: 'free',
    duration: '40 hours',
    url: 'https://www.kaggle.com/learn',
    description: 'Hands-on micro-courses in data science and machine learning',
    topics: ['Pandas', 'Feature engineering', 'Machine learning', 'Data visualization'],
    quarter: 2,
    provider: 'Kaggle',
    rating: 4.6,
    completed: false
  },
  {
    id: 'res-7',
    title: 'Scikit-learn User Guide',
    type: 'documentation',
    difficulty: 'intermediate',
    cost: 'free',
    duration: '30 hours',
    url: 'https://scikit-learn.org/stable/user_guide.html',
    description: 'Comprehensive guide to scikit-learn for machine learning',
    topics: ['Classification', 'Regression', 'Clustering', 'Model selection'],
    quarter: 2,
    provider: 'Scikit-learn',
    rating: 4.7,
    completed: false
  },

  // Quarter 3 (Apr-Jun 2026): Advanced AI
  {
    id: 'res-8',
    title: 'Fast.ai Deep Learning Course',
    type: 'course',
    difficulty: 'advanced',
    cost: 'free',
    duration: '50 hours',
    url: 'https://course.fast.ai/',
    description: 'Practical deep learning for coders',
    topics: ['Deep learning', 'CNNs', 'RNNs', 'Transfer learning'],
    quarter: 3,
    provider: 'Fast.ai',
    rating: 4.8,
    completed: false
  },
  {
    id: 'res-9',
    title: 'Deep Learning Book',
    type: 'book',
    difficulty: 'advanced',
    cost: 'free',
    duration: '80 hours',
    url: 'https://www.deeplearningbook.org/',
    description: 'Comprehensive textbook on deep learning by Ian Goodfellow',
    topics: ['Neural networks', 'Optimization', 'Regularization', 'Deep architectures'],
    quarter: 3,
    provider: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville',
    rating: 4.9,
    completed: false
  },
  {
    id: 'res-10',
    title: 'PyTorch Tutorials',
    type: 'tutorial',
    difficulty: 'intermediate',
    cost: 'free',
    duration: '35 hours',
    url: 'https://pytorch.org/tutorials/',
    description: 'Official PyTorch tutorials for deep learning implementation',
    topics: ['PyTorch basics', 'Neural networks', 'Computer vision', 'NLP'],
    quarter: 3,
    provider: 'PyTorch',
    rating: 4.7,
    completed: false
  },

  // Quarter 4 (Jul-Sep 2026): Professionalization
  {
    id: 'res-11',
    title: 'MLOps Specialization',
    type: 'course',
    difficulty: 'advanced',
    cost: 'paid',
    price: 49,
    duration: '45 hours',
    url: 'https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops',
    description: 'End-to-end machine learning in production',
    topics: ['MLOps', 'Model deployment', 'CI/CD', 'Monitoring'],
    quarter: 4,
    provider: 'DeepLearning.AI',
    rating: 4.6,
    completed: false
  },
  {
    id: 'res-12',
    title: 'AWS Machine Learning Documentation',
    type: 'documentation',
    difficulty: 'intermediate',
    cost: 'free',
    duration: '25 hours',
    url: 'https://docs.aws.amazon.com/machine-learning/',
    description: 'AWS services for machine learning',
    topics: ['SageMaker', 'AWS ML services', 'Cloud deployment', 'Scalability'],
    quarter: 4,
    provider: 'Amazon Web Services',
    rating: 4.4,
    completed: false
  },

  // UK-Specific Resources
  {
    id: 'res-13',
    title: 'Open University AI Modules',
    type: 'course',
    difficulty: 'intermediate',
    cost: 'paid',
    price: 150,
    duration: '60 hours',
    url: 'https://www.open.ac.uk/courses/modules/tm358',
    description: 'Formal AI education from UK Open University',
    topics: ['AI fundamentals', 'Expert systems', 'Machine learning', 'Ethics'],
    quarter: 2,
    provider: 'Open University',
    rating: 4.5,
    completed: false
  },
  {
    id: 'res-14',
    title: 'Belfast Tech Meetups',
    type: 'article',
    difficulty: 'beginner',
    cost: 'free',
    duration: '10 hours',
    url: 'https://www.meetup.com/Belfast-Tech-Meetup/',
    description: 'Local networking and learning opportunities in Belfast',
    topics: ['Networking', 'Local tech scene', 'Career opportunities', 'Community'],
    quarter: 4,
    provider: 'Belfast Tech Community',
    completed: false
  },

  // Additional Specialized Resources
  {
    id: 'res-15',
    title: 'Hands-On Machine Learning',
    type: 'book',
    difficulty: 'intermediate',
    cost: 'paid',
    price: 35,
    duration: '70 hours',
    url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/',
    description: 'Practical machine learning with Scikit-Learn and TensorFlow',
    topics: ['Scikit-Learn', 'TensorFlow', 'End-to-end projects', 'Production systems'],
    quarter: 2,
    provider: 'O\'Reilly Media',
    rating: 4.8,
    completed: false
  }
];

export const resourcesByQuarter = {
  1: learningResources.filter(r => r.quarter === 1),
  2: learningResources.filter(r => r.quarter === 2),
  3: learningResources.filter(r => r.quarter === 3),
  4: learningResources.filter(r => r.quarter === 4)
};

export const freeResources = learningResources.filter(r => r.cost === 'free');
export const paidResources = learningResources.filter(r => r.cost === 'paid');
export const totalCost = paidResources.reduce((sum, resource) => sum + (resource.price || 0), 0);