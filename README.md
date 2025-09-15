# AI Learning Journey 🧠

A comprehensive, interactive, progress-trackable website for a 12-month self-directed AI learning journey (September 2025 to September 2026). This application is designed specifically for learners with a foundation in software engineering who want to transition into AI/ML roles.

![AI Learning Journey Dashboard](https://github.com/user-attachments/assets/5ce34bff-7b53-49c7-bf4c-ff05bc11df06)

## 🎯 Purpose

This website helps structure a learning path from retail/foundation degree background to AI expert, specifically targeting the UK job market with a focus on Northern Ireland opportunities. It addresses common challenges like imposter syndrome, motivation dips, and work-life balance.

## ✨ Key Features

### 📊 Interactive Dashboard
- **Progress Visualization**: Circular progress indicator showing overall journey completion
- **Key Metrics**: Hours studied, current streak, projects completed, badges earned
- **Learning Progress Chart**: Weekly study hours tracking with Chart.js
- **Motivational Quotes**: Auto-rotating inspirational messages
- **Upcoming Deadlines**: Important milestones and certification dates
- **Journey Milestones**: Visual tracking of quarterly learning goals

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Theme**: Toggle between themes for comfortable studying
- **Collapsible Sidebar**: Space-efficient navigation with detailed descriptions
- **Smooth Animations**: Engaging transitions and hover effects
- **Accessibility**: ARIA labels and keyboard navigation support

### 📈 Progress Tracking
- **Skill Development**: Doughnut chart showing proficiency in key areas
- **Quarterly Timeline**: Bar chart comparing planned vs actual progress
- **Study Analytics**: Detailed tracking of learning sessions and time investment
- **Badge System**: Achievement unlocks for reaching milestones

### 🧭 Learning Structure
- **Quarter-based Timeline**: 12-month journey divided into focused periods
- **Resource Library**: Curated collection of 50+ learning materials
- **Project Portfolio**: 10 hands-on coding projects with GitHub templates
- **Certification Path**: Professional certifications with study plans
- **Career Tools**: UK-focused job search and networking resources

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adamhearst5-byte/ai-learning-journey.git
   cd ai-learning-journey
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## 🏗️ Technology Stack

### Frontend
- **React.js** with TypeScript for type safety and robust development
- **React Router** for client-side routing and navigation
- **Chart.js** with React Chart.js 2 for interactive data visualizations
- **Bootstrap** for responsive design and UI components
- **CSS Custom Properties** for theming and design consistency

### Data Management
- **localStorage** for persistent user data and settings
- **JSON data structures** for learning resources, projects, and certifications
- **Component state management** with React hooks

### Development Tools
- **Create React App** for project setup and build configuration
- **TypeScript** for enhanced development experience and error prevention
- **ESLint** for code quality and consistency

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Dashboard/        # Main dashboard with charts and metrics
│   ├── Sidebar/         # Navigation sidebar with theme switching
│   ├── Timeline/        # 12-month learning timeline
│   ├── Resources/       # Learning materials library
│   ├── Projects/        # Project portfolio and tracking
│   ├── Certifications/  # Certification roadmap
│   ├── Progress/        # Detailed analytics and logging
│   ├── Portfolio/       # Project showcase and resume builder
│   └── Career/         # Job search and networking tools
├── data/               # Static data and configurations
│   ├── resources.ts    # 50+ curated learning resources
│   ├── projects.ts     # 10 hands-on AI/ML projects
│   └── certifications.ts # Professional certification paths
├── types/              # TypeScript type definitions
├── utils/              # Helper functions and utilities
└── App.tsx            # Main application component
```

## 🎯 Learning Path Overview

### Quarter 1 (Sep-Dec 2025): Foundations
- **Focus**: Python refresh and AI fundamentals
- **Goals**: Complete AI basics course, log 200 study hours
- **Key Resources**: DeepLearning.AI Python course, 3Blue1Brown math videos
- **Projects**: Sentiment analysis tool, data visualization dashboard

### Quarter 2 (Jan-Mar 2026): Core Skills
- **Focus**: Machine learning libraries and data science
- **Goals**: Finish 3 projects, earn first certification
- **Key Resources**: Andrew Ng's ML course, Kaggle Learn courses
- **Projects**: Neural network from scratch, image classification

### Quarter 3 (Apr-Jun 2026): Advanced AI
- **Focus**: Deep learning and model complexities
- **Goals**: Contribute to open-source, build portfolio site
- **Key Resources**: Fast.ai course, PyTorch tutorials
- **Projects**: AI chatbot with transformers, computer vision system

### Quarter 4 (Jul-Sep 2026): Professionalization
- **Focus**: MLOps and job preparation
- **Goals**: Apply to 30 jobs, complete mock interviews
- **Key Resources**: MLOps specialization, AWS ML documentation
- **Projects**: End-to-end ML pipeline, professional portfolio

## 💰 Cost Breakdown

**Total Budget**: ~£200 maximum

### Free Resources (£0)
- DeepLearning.AI courses
- Google AI Essentials certification
- IBM AI Foundations certification
- Fast.ai deep learning course
- YouTube educational content
- Open-source documentation

### Paid Resources (£200)
- TensorFlow Developer Certificate (£100)
- AWS ML Specialty Certification (£300 - using free study materials, exam only)
- Optional: Coursera specializations (£49)

## 🇬🇧 UK/Northern Ireland Focus

### Job Market Targeting
- **Salary Range**: £30k-£50k starting for Junior AI Engineer/ML Developer roles
- **Remote Opportunities**: Emphasis on UK remote positions
- **Belfast Tech Scene**: Integration with local Catalyst hub opportunities
- **Networking**: Belfast Tech Meetups and local AI communities

### Regional Resources
- **Invest NI Programs**: Local funding and development opportunities
- **Post-Brexit Considerations**: EU market access and regulations
- **UK Certification Bodies**: Recognition and professional development

## 🤝 Contributing

This is a personal learning journey website, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **DeepLearning.AI** for excellent foundational courses
- **Andrew Ng** for inspiring AI education
- **Fast.ai** for practical deep learning approaches
- **3Blue1Brown** for beautiful mathematical explanations
- **The React Community** for amazing tools and documentation

## 📧 Contact

**Adam Hearst** - AI Learning Journey
- GitHub: [@adamhearst5-byte](https://github.com/adamhearst5-byte)
- Learning Focus: Transitioning from retail to AI/ML career

---

**Start Date**: September 2025  
**Target Completion**: September 2026  
**Current Status**: Foundation Phase (Q1)  

*"The expert in anything was once a beginner."*