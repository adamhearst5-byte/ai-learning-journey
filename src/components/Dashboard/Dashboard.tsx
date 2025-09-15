import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { DashboardStats } from '../../types';
import { getCurrentQuarter } from '../../utils/helpers';
import './Dashboard.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

// Mock data for demonstration
const mockStats: DashboardStats = {
  totalHoursStudied: 47,
  currentStreak: 5,
  longestStreak: 12,
  completedProjects: 1,
  earnedCertifications: 0,
  currentLevel: 1,
  overallProgress: 25,
  weeklyAverage: 12,
  monthlyGoalProgress: 85,
  skillsImproved: 8,
  badgesEarned: 3,
  daysRemaining: 280
};

const motivationalQuotes = [
  "The expert in anything was once a beginner.",
  "AI is not just about technology; it's about augmenting human intelligence.",
  "Every algorithm you learn today builds the foundation for tomorrow's innovations.",
  "Machine learning is the art of teaching computers to learn from data.",
  "The future belongs to those who understand both human and artificial intelligence.",
  "Code is poetry, and AI is the most beautiful verse of our time."
];

const Dashboard: React.FC = () => {
  const [stats] = useState<DashboardStats>(mockStats);
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    // Rotate quotes every 10 seconds
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
    }, 10000);

    return () => clearInterval(quoteInterval);
  }, []);

  // Chart data
  const progressChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Hours Studied',
        data: [8, 12, 15, 10, 18, 14],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const skillsChartData = {
    labels: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics', 'Mathematics'],
    datasets: [
      {
        data: [75, 45, 60, 40, 55],
        backgroundColor: [
          '#007bff',
          '#28a745',
          '#ffc107',
          '#dc3545',
          '#6f42c1'
        ],
        borderWidth: 0
      }
    ]
  };

  const quarterProgressData = {
    labels: ['Q1 Sep-Dec', 'Q2 Jan-Mar', 'Q3 Apr-Jun', 'Q4 Jul-Sep'],
    datasets: [
      {
        label: 'Planned Progress',
        data: [25, 50, 75, 100],
        backgroundColor: 'rgba(0, 123, 255, 0.3)',
        borderColor: '#007bff',
        borderWidth: 2
      },
      {
        label: 'Actual Progress',
        data: [25, 0, 0, 0],
        backgroundColor: 'rgba(40, 167, 69, 0.3)',
        borderColor: '#28a745',
        borderWidth: 2
      }
    ]
  };

  const currentQuarterInfo = getCurrentQuarter();

  return (
    <div className="dashboard fade-in">
      {/* Header */}
      <div className="dashboard-header mb-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="h2 mb-2">
              🧠 Welcome back, Adam!
            </h1>
            <p className="text-muted mb-0">
              Based on your foundation degree in software engineering, you're on track to become an AI expert. 
              Currently in Quarter {currentQuarterInfo} of your learning journey.
            </p>
          </div>
          <div className="col-md-4 text-md-end">
            <div className="quick-actions">
              <button className="btn btn-primary me-2">
                📖 Continue Learning
              </button>
              <button className="btn btn-outline-primary">
                💻 Start Project
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card stat-card">
            <div className="card-body">
              <div className="stat-icon text-primary">
                ⏰
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.totalHoursStudied}</h3>
                <p className="stat-label">Hours Studied</p>
                <small className="text-success">
                  +{stats.weeklyAverage}h this week
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card stat-card">
            <div className="card-body">
              <div className="stat-icon text-warning">
                🔥
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.currentStreak}</h3>
                <p className="stat-label">Day Streak</p>
                <small className="text-muted">
                  Best: {stats.longestStreak} days
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card stat-card">
            <div className="card-body">
              <div className="stat-icon text-success">
                🚀
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.completedProjects}</h3>
                <p className="stat-label">Projects Done</p>
                <small className="text-primary">
                  2 in progress
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card stat-card">
            <div className="card-body">
              <div className="stat-icon text-info">
                🏆
              </div>
              <div className="stat-content">
                <h3 className="stat-number">{stats.badgesEarned}</h3>
                <p className="stat-label">Badges Earned</p>
                <small className="text-success">
                  Python Pro unlocked!
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Row */}
      <div className="row g-4 mb-4">
        {/* Progress Overview */}
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">
                📈 Learning Progress
              </h5>
              <span className="badge bg-primary">{stats.overallProgress}% Complete</span>
            </div>
            <div className="card-body">
              <div className="progress-overview mb-4">
                <div className="progress-ring-container">
                  <div className="progress-circle">
                    <div className="progress-ring">
                      <div 
                        className="progress-fill"
                        style={{
                          background: `conic-gradient(
                            #007bff 0deg ${stats.overallProgress * 3.6}deg,
                            #e9ecef ${stats.overallProgress * 3.6}deg 360deg
                          )`
                        }}
                      ></div>
                      <div className="progress-center">
                        <span className="progress-percentage">{stats.overallProgress}%</span>
                        <small className="text-muted">Overall</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="progress-details">
                  <h6>Journey Milestones</h6>
                  <div className="milestone-item">
                    <div className="milestone-icon completed">
                      ✓
                    </div>
                    <div className="milestone-content">
                      <h6>Foundation Skills</h6>
                      <p className="text-muted mb-0">Python basics and AI fundamentals</p>
                    </div>
                  </div>
                  <div className="milestone-item">
                    <div className="milestone-icon in-progress">
                      ▶
                    </div>
                    <div className="milestone-content">
                      <h6>Core ML Concepts</h6>
                      <p className="text-muted mb-0">Machine learning algorithms and libraries</p>
                    </div>
                  </div>
                  <div className="milestone-item">
                    <div className="milestone-icon pending">
                      ⏱
                    </div>
                    <div className="milestone-content">
                      <h6>Advanced AI</h6>
                      <p className="text-muted mb-0">Deep learning and neural networks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chart-container">
                <Line 
                  data={progressChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: 'rgba(0,0,0,0.1)'
                        }
                      },
                      x: {
                        grid: {
                          display: false
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats & Motivation */}
        <div className="col-lg-4">
          {/* Motivational Quote */}
          <div className="card quote-card mb-4">
            <div className="card-body text-center">
              💭
              <blockquote className="blockquote mb-3">
                <p>"{motivationalQuotes[currentQuote]}"</p>
              </blockquote>
              <div className="quote-indicators">
                {motivationalQuotes.map((_, index) => (
                  <span 
                    key={index} 
                    className={`indicator ${index === currentQuote ? 'active' : ''}`}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">
                📅 Upcoming Deadlines
              </h6>
            </div>
            <div className="card-body">
              <div className="deadline-item">
                <div className="deadline-date">
                  <span className="day">15</span>
                  <span className="month">DEC</span>
                </div>
                <div className="deadline-content">
                  <h6>Complete Q1 Projects</h6>
                  <p className="text-muted mb-0">2 projects remaining</p>
                </div>
              </div>
              <div className="deadline-item">
                <div className="deadline-date">
                  <span className="day">31</span>
                  <span className="month">DEC</span>
                </div>
                <div className="deadline-content">
                  <h6>IBM AI Foundations Cert</h6>
                  <p className="text-muted mb-0">Study time: 15 hours</p>
                </div>
              </div>
              <div className="deadline-item">
                <div className="deadline-date">
                  <span className="day">05</span>
                  <span className="month">JAN</span>
                </div>
                <div className="deadline-content">
                  <h6>Q2 Planning Session</h6>
                  <p className="text-muted mb-0">Set goals and milestones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="row g-4">
        {/* Skills Progress */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Skill Development</h6>
            </div>
            <div className="card-body">
              <div className="chart-container-small">
                <Doughnut 
                  data={skillsChartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom' as const,
                        labels: {
                          padding: 20,
                          usePointStyle: true
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quarter Progress */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Quarterly Timeline</h6>
            </div>
            <div className="card-body">
              <div className="chart-container-small">
                <Bar 
                  data={quarterProgressData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'bottom' as const
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                          callback: function(value) {
                            return value + '%';
                          }
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;