// Utility functions for the AI Learning Journey application

import { format, differenceInDays } from 'date-fns';
import { StudySession } from '../types';

// Date formatting utilities
export const formatDate = (date: Date): string => {
  return format(date, 'MMM dd, yyyy');
};

export const formatDateShort = (date: Date): string => {
  return format(date, 'MM/dd');
};

export const formatDateTime = (date: Date): string => {
  return format(date, 'MMM dd, yyyy HH:mm');
};

// Progress calculation utilities
export const calculateOverallProgress = (startDate: Date, targetDate: Date): number => {
  const totalDays = differenceInDays(targetDate, startDate);
  const elapsedDays = differenceInDays(new Date(), startDate);
  return Math.min(Math.max((elapsedDays / totalDays) * 100, 0), 100);
};

export const calculateQuarterProgress = (quarterStart: Date, quarterEnd: Date): number => {
  const totalDays = differenceInDays(quarterEnd, quarterStart);
  const elapsedDays = differenceInDays(new Date(), quarterStart);
  return Math.min(Math.max((elapsedDays / totalDays) * 100, 0), 100);
};

export const getDaysRemaining = (targetDate: Date): number => {
  return Math.max(differenceInDays(targetDate, new Date()), 0);
};

// Study session utilities
export const calculateTotalHours = (sessions: StudySession[]): number => {
  return sessions.reduce((total, session) => total + session.duration, 0);
};

export const calculateWeeklyAverage = (sessions: StudySession[], weeks: number = 4): number => {
  const recentSessions = sessions.filter(session => 
    differenceInDays(new Date(), session.date) <= weeks * 7
  );
  const totalHours = calculateTotalHours(recentSessions);
  return totalHours / weeks;
};

export const calculateCurrentStreak = (sessions: StudySession[]): number => {
  if (sessions.length === 0) return 0;
  
  const sortedSessions = sessions.sort((a, b) => b.date.getTime() - a.date.getTime());
  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  
  for (const session of sortedSessions) {
    const sessionDate = new Date(session.date);
    sessionDate.setHours(0, 0, 0, 0);
    
    if (differenceInDays(currentDate, sessionDate) === streak) {
      streak++;
      currentDate = sessionDate;
    } else if (differenceInDays(currentDate, sessionDate) === streak + 1) {
      // Allow for one day gap (if today hasn't been studied yet)
      continue;
    } else {
      break;
    }
  }
  
  return streak;
};

export const calculateLongestStreak = (sessions: StudySession[]): number => {
  if (sessions.length === 0) return 0;
  
  const sortedSessions = sessions.sort((a, b) => a.date.getTime() - b.date.getTime());
  let longestStreak = 0;
  let currentStreak = 0;
  let previousDate: Date | null = null;
  
  for (const session of sortedSessions) {
    const sessionDate = new Date(session.date);
    sessionDate.setHours(0, 0, 0, 0);
    
    if (previousDate === null || differenceInDays(sessionDate, previousDate) === 1) {
      currentStreak++;
    } else {
      longestStreak = Math.max(longestStreak, currentStreak);
      currentStreak = 1;
    }
    
    previousDate = sessionDate;
  }
  
  return Math.max(longestStreak, currentStreak);
};

// Skill level utilities
export const getSkillLevelText = (level: number): string => {
  switch (level) {
    case 0: return 'None';
    case 1: return 'Beginner';
    case 2: return 'Novice';
    case 3: return 'Intermediate';
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return 'Unknown';
  }
};

export const getSkillLevelColor = (level: number): string => {
  switch (level) {
    case 0: return '#6c757d'; // gray
    case 1: return '#dc3545'; // red
    case 2: return '#fd7e14'; // orange
    case 3: return '#ffc107'; // yellow
    case 4: return '#198754'; // green
    case 5: return '#0d6efd'; // blue
    default: return '#6c757d';
  }
};

// Progress tracking utilities
export const getMotivationalMessage = (progress: number): string => {
  if (progress < 10) return "Every expert was once a beginner. You've got this!";
  if (progress < 25) return "Great start! Consistency is key to mastering AI.";
  if (progress < 50) return "You're making solid progress. Keep building momentum!";
  if (progress < 75) return "Fantastic work! You're over halfway to your goal.";
  if (progress < 90) return "Almost there! The finish line is in sight.";
  return "Outstanding achievement! You've reached your goal!";
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'beginner': return '#28a745';
    case 'intermediate': return '#ffc107';
    case 'advanced': return '#dc3545';
    default: return '#6c757d';
  }
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'completed': return '#28a745';
    case 'in-progress': return '#007bff';
    case 'not-started': return '#6c757d';
    case 'on-hold': return '#ffc107';
    case 'overdue': return '#dc3545';
    default: return '#6c757d';
  }
};

// Time management utilities
export const getTimeOfDayRecommendation = (fatigueLevel: number): string => {
  if (fatigueLevel >= 4) {
    return "Consider light review or reading instead of intensive coding.";
  } else if (fatigueLevel >= 3) {
    return "Good time for tutorials and guided practice.";
  } else {
    return "Perfect time for challenging projects and deep learning.";
  }
};

export const getStudyBreakReminder = (sessionDuration: number): string => {
  if (sessionDuration >= 90) {
    return "Time for a break! Take 15-20 minutes to rest your mind.";
  } else if (sessionDuration >= 45) {
    return "Consider a short 5-10 minute break to stay fresh.";
  }
  return "";
};

// Local storage utilities
export const saveToLocalStorage = (key: string, data: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const loadFromLocalStorage = (key: string): any => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
};

export const removeFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// Quarter utilities
export const getQuarterDates = (year: number) => {
  return {
    Q1: { start: new Date(year, 8, 1), end: new Date(year, 11, 31) }, // Sep-Dec
    Q2: { start: new Date(year + 1, 0, 1), end: new Date(year + 1, 2, 31) }, // Jan-Mar
    Q3: { start: new Date(year + 1, 3, 1), end: new Date(year + 1, 5, 30) }, // Apr-Jun
    Q4: { start: new Date(year + 1, 6, 1), end: new Date(year + 1, 8, 30) } // Jul-Sep
  };
};

export const getCurrentQuarter = (): number => {
  const now = new Date();
  const quarters = getQuarterDates(2025);
  
  if (now >= quarters.Q1.start && now <= quarters.Q1.end) return 1;
  if (now >= quarters.Q2.start && now <= quarters.Q2.end) return 2;
  if (now >= quarters.Q3.start && now <= quarters.Q3.end) return 3;
  if (now >= quarters.Q4.start && now <= quarters.Q4.end) return 4;
  
  return 1; // Default to Q1 if before start date
};

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Export utilities
export const exportToCSV = (data: any[], filename: string): void => {
  if (data.length === 0) return;
  
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => 
      headers.map(header => 
        JSON.stringify(row[header] || '')
      ).join(',')
    )
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  window.URL.revokeObjectURL(url);
};

// Chart utilities for data visualization
export const generateChartColors = (count: number): string[] => {
  const colors = [
    '#007bff', '#28a745', '#ffc107', '#dc3545', '#6f42c1',
    '#fd7e14', '#20c997', '#e83e8c', '#6c757d', '#17a2b8'
  ];
  
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(colors[i % colors.length]);
  }
  return result;
};

export const formatChartData = (labels: string[], data: number[], label: string) => {
  return {
    labels,
    datasets: [{
      label,
      data,
      backgroundColor: generateChartColors(data.length),
      borderColor: generateChartColors(data.length),
      borderWidth: 1
    }]
  };
};