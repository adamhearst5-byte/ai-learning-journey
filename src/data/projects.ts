import { Project } from '../types';

export const projects: Project[] = [
  // Quarter 1 Projects (Beginner)
  {
    id: 'proj-1',
    title: 'Sentiment Analysis Tool',
    description: 'Build a simple sentiment analysis tool using Python and basic ML libraries. Modify base code of a simple ML model to understand how sentiment classification works.',
    difficulty: 'beginner',
    estimatedTime: '2 weeks',
    skills: ['Python', 'Basic ML', 'Text processing', 'Data visualization'],
    quarter: 1,
    githubTemplate: 'https://github.com/ai-learning-templates/sentiment-analysis-starter',
    requirements: [
      'Basic Python knowledge',
      'Understanding of text preprocessing',
      'Familiarity with pandas and matplotlib'
    ],
    deliverables: [
      'Working sentiment analysis script',
      'Demo with sample text inputs',
      'Basic accuracy metrics',
      'Documentation explaining the approach'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: 'proj-2',
    title: 'Data Visualization Dashboard',
    description: 'Create an interactive dashboard to visualize AI/ML datasets using Python libraries. Focus on understanding data patterns and preprocessing techniques.',
    difficulty: 'beginner',
    estimatedTime: '3 weeks',
    skills: ['Python', 'Data visualization', 'Pandas', 'Plotly/Dash'],
    quarter: 1,
    githubTemplate: 'https://github.com/ai-learning-templates/data-viz-dashboard',
    requirements: [
      'Python pandas proficiency',
      'Basic understanding of data types',
      'HTML/CSS knowledge helpful'
    ],
    deliverables: [
      'Interactive web dashboard',
      'Multiple chart types and filters',
      'Dataset analysis report',
      'User guide for dashboard navigation'
    ],
    status: 'not-started',
    progress: 0
  },

  // Quarter 2 Projects (Intermediate)
  {
    id: 'proj-3',
    title: 'Custom Neural Network from Scratch',
    description: 'Implement a simple neural network from scratch using only NumPy. Explore model internals including forward propagation, backpropagation, and gradient descent.',
    difficulty: 'intermediate',
    estimatedTime: '4 weeks',
    skills: ['Python', 'NumPy', 'Neural networks', 'Mathematics', 'Algorithm implementation'],
    quarter: 2,
    githubTemplate: 'https://github.com/ai-learning-templates/neural-network-scratch',
    requirements: [
      'Strong Python and NumPy skills',
      'Understanding of linear algebra',
      'Basic calculus knowledge',
      'Patience for debugging mathematical implementations'
    ],
    deliverables: [
      'Complete neural network implementation',
      'Training on a simple dataset (e.g., XOR, MNIST)',
      'Visualization of learning progress',
      'Detailed code documentation explaining each component'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: 'proj-4',
    title: 'Image Classification with Transfer Learning',
    description: 'Build an image classifier using pre-trained models and transfer learning. Learn to adapt existing model architectures for specific tasks.',
    difficulty: 'intermediate',
    estimatedTime: '3 weeks',
    skills: ['Deep learning', 'Computer vision', 'Transfer learning', 'TensorFlow/PyTorch'],
    quarter: 2,
    githubTemplate: 'https://github.com/ai-learning-templates/image-classification-transfer',
    requirements: [
      'Understanding of CNNs',
      'Experience with deep learning frameworks',
      'Knowledge of image preprocessing'
    ],
    deliverables: [
      'Trained image classification model',
      'Web interface for image upload and prediction',
      'Model evaluation metrics and confusion matrix',
      'Comparison of different pre-trained models'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: 'proj-5',
    title: 'Recommendation System',
    description: 'Develop a collaborative filtering recommendation system. Implement both user-based and item-based collaborative filtering algorithms.',
    difficulty: 'intermediate',
    estimatedTime: '4 weeks',
    skills: ['Machine learning', 'Collaborative filtering', 'Data mining', 'Evaluation metrics'],
    quarter: 2,
    githubTemplate: 'https://github.com/ai-learning-templates/recommendation-system',
    requirements: [
      'Understanding of recommendation algorithms',
      'Experience with sparse matrices',
      'Knowledge of similarity metrics'
    ],
    deliverables: [
      'Working recommendation engine',
      'Evaluation using standard metrics (RMSE, MAE)',
      'Comparison of different algorithms',
      'Simple web interface for recommendations'
    ],
    status: 'not-started',
    progress: 0
  },

  // Quarter 3 Projects (Advanced)
  {
    id: 'proj-6',
    title: 'AI Chatbot with Modified Transformer',
    description: 'Create an AI chatbot using transformer architecture. Focus on understanding attention mechanisms and modify base transformer code for specific conversational tasks.',
    difficulty: 'advanced',
    estimatedTime: '6 weeks',
    skills: ['NLP', 'Transformers', 'Attention mechanisms', 'PyTorch', 'Advanced deep learning'],
    quarter: 3,
    githubTemplate: 'https://github.com/ai-learning-templates/transformer-chatbot',
    requirements: [
      'Strong understanding of transformer architecture',
      'Experience with sequence-to-sequence models',
      'Knowledge of attention mechanisms',
      'Proficiency in PyTorch or TensorFlow'
    ],
    deliverables: [
      'Functional chatbot with transformer backbone',
      'Custom attention visualization',
      'Training pipeline with custom dataset',
      'Web interface for chatbot interaction',
      'Analysis of attention patterns'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: 'proj-7',
    title: 'Computer Vision Object Detection',
    description: 'Implement an object detection system using YOLO or similar architecture. Understand anchor boxes, non-max suppression, and multi-object detection.',
    difficulty: 'advanced',
    estimatedTime: '5 weeks',
    skills: ['Computer vision', 'Object detection', 'YOLO', 'Image processing', 'Model optimization'],
    quarter: 3,
    githubTemplate: 'https://github.com/ai-learning-templates/object-detection-yolo',
    requirements: [
      'Strong CNN knowledge',
      'Understanding of object detection concepts',
      'Experience with image preprocessing',
      'Knowledge of model evaluation metrics'
    ],
    deliverables: [
      'Trained object detection model',
      'Real-time detection via webcam',
      'Custom dataset training pipeline',
      'Performance optimization techniques',
      'Model deployment to edge device (optional)'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: 'proj-8',
    title: 'Generative AI Art Creator',
    description: 'Build a generative AI system for creating artwork using GANs or diffusion models. Explore the mathematics behind generative models.',
    difficulty: 'advanced',
    estimatedTime: '6 weeks',
    skills: ['Generative AI', 'GANs', 'Diffusion models', 'Creative AI', 'Advanced mathematics'],
    quarter: 3,
    githubTemplate: 'https://github.com/ai-learning-templates/generative-art-creator',
    requirements: [
      'Understanding of generative models',
      'Experience with adversarial training',
      'Knowledge of loss functions for generation',
      'Artistic appreciation helpful'
    ],
    deliverables: [
      'Working generative model for art creation',
      'Web interface for style and prompt input',
      'Training methodology documentation',
      'Gallery of generated artwork',
      'Analysis of different generation techniques'
    ],
    status: 'not-started',
    progress: 0
  },

  // Quarter 4 Projects (Professional/Production)
  {
    id: 'proj-9',
    title: 'End-to-End ML Pipeline with MLOps',
    description: 'Build a complete machine learning pipeline including data ingestion, model training, deployment, and monitoring. Focus on production-ready ML systems.',
    difficulty: 'advanced',
    estimatedTime: '8 weeks',
    skills: ['MLOps', 'CI/CD', 'Model deployment', 'Monitoring', 'Cloud services', 'Docker', 'Kubernetes'],
    quarter: 4,
    githubTemplate: 'https://github.com/ai-learning-templates/mlops-pipeline',
    requirements: [
      'Strong ML fundamentals',
      'DevOps knowledge',
      'Cloud platform experience (AWS/GCP/Azure)',
      'Understanding of containerization'
    ],
    deliverables: [
      'Automated ML pipeline with CI/CD',
      'Model deployment to cloud platform',
      'Monitoring and alerting system',
      'A/B testing framework',
      'Documentation for production deployment',
      'Cost optimization analysis'
    ],
    status: 'not-started',
    progress: 0
  },
  {
    id: 'proj-10',
    title: 'AI Portfolio Website with Demos',
    description: 'Create a comprehensive portfolio website showcasing all your AI projects with interactive demos, code explanations, and career timeline.',
    difficulty: 'intermediate',
    estimatedTime: '4 weeks',
    skills: ['Web development', 'Portfolio design', 'JavaScript', 'Model deployment', 'UI/UX'],
    quarter: 4,
    githubTemplate: 'https://github.com/ai-learning-templates/ai-portfolio-website',
    requirements: [
      'Web development skills',
      'Understanding of model serving',
      'Design sense for portfolio presentation',
      'Knowledge of hosting platforms'
    ],
    deliverables: [
      'Professional portfolio website',
      'Interactive demos of AI projects',
      'Downloadable resume and project summaries',
      'Blog section with learning journey posts',
      'Contact form and social media integration',
      'SEO optimization for discoverability'
    ],
    status: 'not-started',
    progress: 0
  }
];

export const projectsByQuarter = {
  1: projects.filter(p => p.quarter === 1),
  2: projects.filter(p => p.quarter === 2),
  3: projects.filter(p => p.quarter === 3),
  4: projects.filter(p => p.quarter === 4)
};

export const projectsByDifficulty = {
  beginner: projects.filter(p => p.difficulty === 'beginner'),
  intermediate: projects.filter(p => p.difficulty === 'intermediate'),
  advanced: projects.filter(p => p.difficulty === 'advanced')
};

export const projectTemplates = projects.map(project => ({
  id: project.id,
  title: project.title,
  githubTemplate: project.githubTemplate,
  description: project.description,
  skills: project.skills
}));