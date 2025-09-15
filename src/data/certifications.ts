import { Certification } from '../types';

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Google AI Essentials',
    provider: 'Google',
    cost: 0,
    estimatedStudyTime: '10 hours',
    quarter: 1,
    description: 'Introduction to AI concepts and applications for beginners. Covers fundamental AI terminology, use cases, and ethical considerations.',
    skills: ['AI fundamentals', 'AI ethics', 'AI applications', 'Basic terminology'],
    status: 'not-started',
    studyProgress: 0,
    studyResources: [
      'Google AI Essentials Course Materials',
      'AI for Everyone course videos',
      'Google AI principles documentation'
    ],
    practiceTests: [
      'Google AI Essentials Quiz',
      'AI Fundamentals Practice Questions'
    ]
  },
  {
    id: 'cert-2',
    name: 'IBM AI Foundations',
    provider: 'IBM',
    cost: 0,
    estimatedStudyTime: '20 hours',
    quarter: 1,
    description: 'Comprehensive introduction to AI and machine learning concepts, including Watson AI services and practical applications.',
    skills: ['Machine learning basics', 'Watson AI', 'Data science fundamentals', 'AI development lifecycle'],
    status: 'not-started',
    studyProgress: 0,
    studyResources: [
      'IBM AI Foundations on Coursera',
      'Watson Studio documentation',
      'IBM AI Ethics guidelines'
    ],
    practiceTests: [
      'IBM AI Foundations Assessment',
      'Watson AI Quiz'
    ]
  },
  {
    id: 'cert-3',
    name: 'Microsoft Azure AI Fundamentals (AI-900)',
    provider: 'Microsoft',
    cost: 65,
    estimatedStudyTime: '25 hours',
    quarter: 2,
    description: 'Foundational knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services.',
    skills: ['Azure AI services', 'Machine learning concepts', 'Computer vision', 'Natural language processing'],
    status: 'not-started',
    studyProgress: 0,
    studyResources: [
      'Microsoft Learn AI-900 learning path',
      'Azure AI services documentation',
      'Azure Machine Learning Studio tutorials'
    ],
    practiceTests: [
      'AI-900 Practice Tests',
      'Microsoft AI Fundamentals Sample Questions',
      'Azure AI Services Hands-on Labs'
    ]
  },
  {
    id: 'cert-4',
    name: 'TensorFlow Developer Certificate',
    provider: 'TensorFlow',
    cost: 100,
    estimatedStudyTime: '40 hours',
    quarter: 3,
    description: 'Demonstrates proficiency in using TensorFlow to solve deep learning and ML problems. Hands-on certification with practical coding exercises.',
    skills: ['TensorFlow', 'Deep learning', 'Neural networks', 'Model deployment', 'Computer vision', 'NLP'],
    status: 'not-started',
    studyProgress: 0,
    studyResources: [
      'TensorFlow Developer Certificate Handbook',
      'TensorFlow tutorials and guides',
      'DeepLearning.AI TensorFlow courses',
      'Hands-on Machine Learning book'
    ],
    practiceTests: [
      'TensorFlow certification practice environment',
      'Coursera TensorFlow practice exercises',
      'TensorFlow Model Garden examples'
    ]
  },
  {
    id: 'cert-5',
    name: 'AWS Certified Machine Learning – Specialty',
    provider: 'Amazon Web Services',
    cost: 300,
    estimatedStudyTime: '60 hours',
    quarter: 4,
    description: 'Validates expertise in building, training, tuning, and deploying machine learning models using AWS services.',
    skills: ['AWS ML services', 'SageMaker', 'Model deployment', 'MLOps', 'Data engineering', 'ML algorithms'],
    status: 'not-started',
    studyProgress: 0,
    studyResources: [
      'AWS Machine Learning documentation',
      'AWS Training and Certification courses',
      'A Cloud Guru AWS ML course',
      'AWS SageMaker developer guide',
      'AWS Well-Architected ML Lens'
    ],
    practiceTests: [
      'AWS Certified ML Practice Exam',
      'AWS SageMaker hands-on labs',
      'AWS ML services tutorials'
    ]
  },
  {
    id: 'cert-6',
    name: 'Google Professional Machine Learning Engineer',
    provider: 'Google Cloud',
    cost: 200,
    estimatedStudyTime: '50 hours',
    quarter: 4,
    description: 'Validates ability to design, build, and productionize ML models to solve business challenges using Google Cloud technologies.',
    skills: ['Google Cloud ML', 'Vertex AI', 'MLOps', 'AutoML', 'Model deployment', 'Data preprocessing'],
    status: 'not-started',
    studyProgress: 0,
    studyResources: [
      'Google Cloud ML documentation',
      'Coursera Google Cloud ML courses',
      'Google Cloud Skills Boost',
      'Google Cloud Architecture Center ML guides'
    ],
    practiceTests: [
      'Google Professional ML Engineer Practice Exam',
      'Google Cloud ML hands-on labs',
      'Vertex AI tutorials'
    ]
  },
  {
    id: 'cert-7',
    name: 'Deep Learning Specialization',
    provider: 'DeepLearning.AI',
    cost: 49,
    estimatedStudyTime: '60 hours',
    quarter: 3,
    description: 'Comprehensive deep learning specialization covering neural networks, CNNs, RNNs, and practical deep learning applications.',
    skills: ['Deep learning', 'Neural networks', 'CNNs', 'RNNs', 'Optimization', 'Regularization'],
    status: 'not-started',
    studyProgress: 0,
    studyResources: [
      'Deep Learning Specialization courses',
      'Deep Learning book by Ian Goodfellow',
      'CS231n Stanford lectures',
      'PyTorch and TensorFlow tutorials'
    ],
    practiceTests: [
      'Course assignments and quizzes',
      'Programming exercises',
      'Peer-reviewed projects'
    ]
  },
  {
    id: 'cert-8',
    name: 'CompTIA Data+',
    provider: 'CompTIA',
    cost: 358,
    estimatedStudyTime: '40 hours',
    quarter: 2,
    description: 'Validates skills required to facilitate data-driven business decisions including mining and manipulating data, applying basic statistical methods, and analyzing complex datasets.',
    skills: ['Data analysis', 'Statistics', 'Data visualization', 'Data mining', 'Database concepts'],
    status: 'not-started',
    studyProgress: 0,
    studyResources: [
      'CompTIA Data+ certification guide',
      'Official CompTIA training materials',
      'Professor Messer Data+ videos',
      'Practice labs and simulations'
    ],
    practiceTests: [
      'CompTIA Data+ practice exams',
      'Hands-on data analysis exercises',
      'Performance-based questions practice'
    ]
  }
];

export const certificationsByQuarter = {
  1: certifications.filter(c => c.quarter === 1),
  2: certifications.filter(c => c.quarter === 2),
  3: certifications.filter(c => c.quarter === 3),
  4: certifications.filter(c => c.quarter === 4)
};

export const freeCertifications = certifications.filter(c => c.cost === 0);
export const paidCertifications = certifications.filter(c => c.cost > 0);
export const totalCertificationCost = certifications.reduce((sum, cert) => sum + cert.cost, 0);

export const certificationPath = [
  {
    quarter: 1,
    focus: 'Foundations',
    certifications: ['Google AI Essentials', 'IBM AI Foundations'],
    totalCost: 0,
    totalHours: 30
  },
  {
    quarter: 2,
    focus: 'Core Skills',
    certifications: ['Microsoft Azure AI Fundamentals', 'CompTIA Data+'],
    totalCost: 423,
    totalHours: 65
  },
  {
    quarter: 3,
    focus: 'Advanced AI',
    certifications: ['TensorFlow Developer Certificate', 'Deep Learning Specialization'],
    totalCost: 149,
    totalHours: 100
  },
  {
    quarter: 4,
    focus: 'Professional Deployment',
    certifications: ['AWS Certified Machine Learning – Specialty'],
    totalCost: 300,
    totalHours: 60
  }
];

export const recommendedOrder = [
  'cert-1', // Google AI Essentials
  'cert-2', // IBM AI Foundations
  'cert-3', // Microsoft Azure AI Fundamentals
  'cert-8', // CompTIA Data+
  'cert-7', // Deep Learning Specialization
  'cert-4', // TensorFlow Developer Certificate
  'cert-5', // AWS Certified Machine Learning – Specialty
  'cert-6'  // Google Professional Machine Learning Engineer (optional)
];