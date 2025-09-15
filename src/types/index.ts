export interface UserProgress {
  totalHours: number;
  skillsMastered: number;
  projectsCompleted: number;
  certificationsEarned: number;
  currentStreak: number;
  quarterProgress: {
    q1: number;
    q2: number;
    q3: number;
    q4: number;
  };
}

export interface LearningResource {
  id: string;
  title: string;
  type: 'video' | 'book' | 'course' | 'article' | 'tutorial';
  provider: string;
  url: string;
  estimatedHours: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cost: 'free' | 'paid';
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  tags: string[];
  description: string;
  completed: boolean;
  rating?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedWeeks: number;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  skills: string[];
  githubTemplate?: string;
  requirements: string[];
  deliverables: string[];
  evaluationMetrics: string[];
  portfolioTips: string[];
  status: 'not-started' | 'in-progress' | 'completed';
  progress: number;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  cost: number;
  estimatedHours: number;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  description: string;
  url: string;
  prerequisites: string[];
  studyPlan: string[];
  practiceResources: string[];
  status: 'not-started' | 'studying' | 'scheduled' | 'completed';
  progress: number;
  examDate?: string;
  score?: number;
}

export interface ProgressEntry {
  id: string;
  date: string;
  hours: number;
  topics: string[];
  notes: string;
  mood: 'excellent' | 'good' | 'okay' | 'struggling';
  skills: string[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  earned: boolean;
  earnedDate?: string;
}

export interface JobApplication {
  id: string;
  company: string;
  position: string;
  location: string;
  remote: boolean;
  salary?: string;
  applicationDate: string;
  status: 'applied' | 'interview' | 'rejected' | 'offer' | 'accepted';
  notes: string;
  followUp?: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  type: 'milestone' | 'deadline' | 'goal';
  date: string;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
  description: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface Settings {
  theme: 'light' | 'dark';
  notifications: boolean;
  weeklyGoalHours: number;
  startDate: string;
  targetRoles: string[];
  location: string;
  budget: number;
  preferredLearningStyle: 'visual' | 'auditory' | 'kinesthetic' | 'reading';
}