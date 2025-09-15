// Core types for the AI Learning Journey application

export interface User {
  id: string;
  name: string;
  email: string;
  location: string;
  currentJob: string;
  studyHoursPerWeek: number;
  startDate: Date;
  targetDate: Date;
  goals: string[];
}

export interface ProgressEntry {
  id: string;
  date: Date;
  hoursStudied: number;
  topics: string[];
  notes: string;
  skillsWorkedOn: string[];
  completedTasks: string[];
}

export interface LearningResource {
  id: string;
  title: string;
  type: 'video' | 'book' | 'course' | 'article' | 'tutorial' | 'documentation';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  cost: 'free' | 'paid';
  price?: number;
  duration: string;
  url: string;
  description: string;
  topics: string[];
  quarter: 1 | 2 | 3 | 4;
  provider: string;
  rating?: number;
  completed: boolean;
  notes?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  skills: string[];
  quarter: 1 | 2 | 3 | 4;
  githubTemplate?: string;
  requirements: string[];
  deliverables: string[];
  status: 'not-started' | 'in-progress' | 'completed' | 'on-hold';
  startDate?: Date;
  completedDate?: Date;
  progress: number;
  notes?: string;
  repositoryUrl?: string;
  demoUrl?: string;
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  cost: number;
  estimatedStudyTime: string;
  quarter: 1 | 2 | 3 | 4;
  description: string;
  skills: string[];
  status: 'not-started' | 'studying' | 'completed' | 'expired';
  studyProgress: number;
  examDate?: Date;
  completedDate?: Date;
  certificateUrl?: string;
  studyResources: string[];
  practiceTests: string[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  targetDate: Date;
  quarter: 1 | 2 | 3 | 4;
  category: 'learning' | 'project' | 'certification' | 'career';
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  completedDate?: Date;
  requiredHours?: number;
  dependencies?: string[];
}

export interface JobApplication {
  id: string;
  company: string;
  position: string;
  location: string;
  salary?: string;
  appliedDate: Date;
  status: 'applied' | 'interview' | 'offer' | 'rejected' | 'withdrawn';
  notes?: string;
  interviewDate?: Date;
  followUpDate?: Date;
  jobUrl?: string;
  contactPerson?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'programming' | 'ai/ml' | 'data' | 'tools' | 'soft-skills';
  level: 0 | 1 | 2 | 3 | 4 | 5; // 0=none, 5=expert
  targetLevel: 1 | 2 | 3 | 4 | 5;
  hoursInvested: number;
  lastUpdated: Date;
  resources: string[];
  projects: string[];
}

export interface StudySession {
  id: string;
  date: Date;
  duration: number;
  topics: string[];
  resources: string[];
  notes: string;
  productivity: 1 | 2 | 3 | 4 | 5;
  mood: 1 | 2 | 3 | 4 | 5;
  fatigue: 1 | 2 | 3 | 4 | 5;
}

export interface CareerGoal {
  id: string;
  title: string;
  description: string;
  targetDate: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'not-started' | 'in-progress' | 'completed';
  milestones: string[];
  requiredSkills: string[];
  progress: number;
}

export interface WeeklyPlan {
  id: string;
  weekStartDate: Date;
  totalPlannedHours: number;
  actualHours: number;
  goals: string[];
  priorities: string[];
  completed: boolean;
  reflection?: string;
  adjustments?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'time' | 'skill' | 'project' | 'certification' | 'streak';
  criteria: string;
  earnedDate?: Date;
  isEarned: boolean;
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'auto';
  notifications: {
    email: boolean;
    browser: boolean;
    reminders: boolean;
    achievements: boolean;
  };
  privacy: {
    shareProgress: boolean;
    publicProfile: boolean;
  };
  study: {
    defaultSessionLength: number;
    breakReminders: boolean;
    weeklyGoal: number;
  };
}

export interface DashboardStats {
  totalHoursStudied: number;
  currentStreak: number;
  longestStreak: number;
  completedProjects: number;
  earnedCertifications: number;
  currentLevel: number;
  overallProgress: number;
  weeklyAverage: number;
  monthlyGoalProgress: number;
  skillsImproved: number;
  badgesEarned: number;
  daysRemaining: number;
}