# 🤖 AI Learning Journey

A comprehensive, interactive, progress-trackable website for a 12-month self-directed AI learning journey, specifically designed for professionals transitioning from retail to tech in the Belfast/Northern Ireland market.

![Dashboard Preview](https://github.com/user-attachments/assets/7179a76c-2c02-4f95-9ab7-8c3f225c8551)

## 🎯 Overview

This application is designed for individuals with a foundation degree in software engineering who are working full-time in retail (like Sainsbury's) and want to transition to AI/ML roles by September 2026. The platform provides:

- **Structured 12-month learning path** from September 2025 to September 2026
- **Belfast tech market focus** with local opportunities and salary insights
- **15-20 hours/week study schedule** optimized for working professionals
- **Budget-conscious approach** with mostly free resources (£200 total budget)
- **Portfolio building tools** for demonstrating skills to employers

## ✨ Features

### 📊 Interactive Dashboard
- **Progress tracking** with visual completion indicators
- **Quarterly progress breakdown** (Q1-Q4) with specific goals
- **Motivational widgets** including streak counters and daily tips
- **Quick stats** for hours logged, skills mastered, projects completed
- **Badge system** with achievement unlocks

### 📅 Comprehensive Timeline
- **12-month structured roadmap** with weekly breakdowns
- **Quarter-specific focus areas:**
  - Q1: Python & AI Fundamentals
  - Q2: Machine Learning & Core Skills
  - Q3: Deep Learning & Advanced Topics
  - Q4: MLOps & Job Preparation
- **Interactive milestone tracking** with priority indicators
- **Study tips** for working professionals and career changers

### 📚 Curated Learning Resources
- **50+ carefully selected resources** across all skill levels
- **Advanced filtering** by quarter, type, difficulty, and cost
- **Resource diversity:** Courses, books, videos, tutorials
- **UK/NI specific content** including Open University and Invest NI programs
- **Progress tracking** with completion indicators

### 🚀 Project Portfolio Builder
- **10 comprehensive project ideas** from beginner to advanced
- **GitHub templates** for each project
- **Detailed specifications** including requirements and evaluation metrics
- **Portfolio tips** for maximizing employment potential
- **Industry-relevant projects** (sentiment analysis, neural networks, chatbots, MLOps)

### 🏆 Certification Roadmap
- **Strategic certification path** aligned with Belfast job market
- **Budget tracking** to stay within £200 limit
- **Free certifications prioritized** (Google AI Essentials, IBM AI Foundations)
- **Premium options** (TensorFlow Developer, AWS ML Specialty)
- **Study plans** with detailed breakdowns

### 📈 Progress Logging & Analytics
- **Daily progress tracking** with mood and topic logging
- **Weekly goal monitoring** (15-hour targets)
- **Streak tracking** for consistency motivation
- **Study session insights** and pattern analysis
- **Data persistence** with localStorage

### 🎯 Career Hub
- **Belfast-specific job market insights** (£30k-£50k salary ranges)
- **Target company database** (Allstate NI, Kainos, Rapid7, etc.)
- **UK job board integration** (Indeed UK, LinkedIn, CWJobs)
- **Interview preparation** with common AI/ML questions
- **Application tracking** system
- **Networking resources** for Belfast tech community

## 🛠 Technical Stack

- **Frontend:** React 18 with TypeScript
- **Styling:** Bootstrap 5 + Custom CSS with dark mode support
- **Charts:** Chart.js integration ready
- **Navigation:** React Router with GitHub Pages support
- **State Management:** React hooks with localStorage persistence
- **Accessibility:** ARIA labels, keyboard navigation, semantic HTML
- **Responsive Design:** Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
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

3. **Start development server**
```bash
npm start
```

4. **Build for production**
```bash
npm run build
```

### Available Scripts

- `npm start` - Start development server on http://localhost:3000
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run deploy` - Deploy to GitHub Pages (requires gh-pages setup)
- `npm run check-deployment` - Verify deployment setup and readiness
- `npm run verify-deployment` - Test deployed site functionality

### 🚀 Deployment

For detailed deployment instructions, see **[DEPLOYMENT.md](./DEPLOYMENT.md)**

**Quick Start:**
1. Merge changes to main branch
2. Enable GitHub Pages in Settings → Pages (select "gh-pages" branch)
3. Push to main triggers automatic deployment

### 🔧 Troubleshooting Deployment Issues

If you encounter **Git error (exit code 128)** during deployment:

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Set Source to "Deploy from a branch"
   - Select "gh-pages" branch and "/" root folder
   - Click Save

2. **Check Repository Permissions:**
   - Ensure the repository is public or has appropriate access
   - Verify GitHub Actions are enabled in Settings → Actions

3. **Manual Deployment (if Actions fail):**
   ```bash
   npm run build
   npm run deploy
   ```

4. **Alternative: Use GitHub Actions**
   - The repository includes updated GitHub Actions workflows
   - Push to main branch to trigger automatic deployment
   - Check Actions tab for deployment status

5. **Common Fixes:**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   
   # Rebuild and deploy
   npm run build
   npm run deploy
   ```

**Note:** Deployment only works from the `main` branch. Ensure your changes are merged to main for GitHub Pages deployment.

## 📱 Usage Guide

### Getting Started
1. **Dashboard:** Start here to see your overall progress and next steps
2. **Timeline:** Review the 12-month plan and current quarter goals
3. **Resources:** Browse curated learning materials for your level
4. **Projects:** Choose projects that align with your quarter goals
5. **Progress Logs:** Track daily study sessions and build consistency

### Customization
- **Settings page:** Adjust weekly goals, themes, and preferences
- **Timeline:** Focus on quarters that match your current skill level
- **Resources:** Filter by your learning style and available time
- **Budget:** Track spending to stay within the £200 limit

### Best Practices
- **Log daily progress** to maintain motivation and track patterns
- **Focus on one quarter at a time** to avoid overwhelm
- **Build projects incrementally** and document your process
- **Network actively** with the Belfast tech community
- **Practice explaining concepts** in your progress notes

## 🇬🇧 Belfast Tech Market Focus

### Target Companies
- **Allstate Northern Ireland** - Insurance tech and AI initiatives
- **Kainos** - Digital transformation consultancy
- **Rapid7** - Cybersecurity with AI/ML applications
- **CME Group** - Financial markets technology
- **Neueda** - Fintech and AI consultancy

### Salary Expectations
- **Entry Level:** £30,000 - £40,000
- **Mid Level:** £40,000 - £50,000
- **Senior Level:** £50,000+
- **Remote UK roles:** Often 10-20% higher

### Key Skills in Demand
1. Python programming
2. Machine learning fundamentals
3. Data analysis and visualization
4. Cloud platforms (AWS, Azure)
5. MLOps and deployment
6. Communication and business acumen

## 🗂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BadgeDisplay.tsx
│   ├── ProgressRing.tsx
│   ├── QuickStats.tsx
│   ├── Sidebar.tsx
│   └── UpcomingDeadlines.tsx
├── pages/              # Main application pages
│   ├── Dashboard.tsx
│   ├── Timeline.tsx
│   ├── Resources.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── ProgressLogs.tsx
│   ├── Portfolio.tsx
│   ├── CareerHub.tsx
│   └── Settings.tsx
├── types/              # TypeScript interfaces
│   └── index.ts
├── data/               # Static data and configurations
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── assets/             # Images, icons, and static files
```

## 🎨 Customization

### Themes
The application supports light and dark themes via CSS custom properties:

```css
:root {
  --primary-color: #0d6efd;
  --bg-color: #ffffff;
  --text-color: #212529;
}

[data-theme="dark"] {
  --bg-color: #121212;
  --text-color: #ffffff;
}
```

### Adding Resources
Edit `src/pages/Resources.tsx` to add new learning resources:

```typescript
const newResource: LearningResource = {
  id: 'unique-id',
  title: 'Resource Name',
  type: 'course',
  provider: 'Provider Name',
  url: 'https://example.com',
  estimatedHours: 20,
  difficulty: 'intermediate',
  cost: 'free',
  quarter: 'Q2',
  tags: ['python', 'machine-learning'],
  description: 'Description of the resource',
  completed: false,
  rating: 4.5
};
```

### Adding Projects
Extend `src/pages/Projects.tsx` with new project ideas:

```typescript
const newProject: Project = {
  id: 'unique-id',
  title: 'Project Name',
  description: 'Detailed project description',
  difficulty: 'intermediate',
  estimatedWeeks: 4,
  quarter: 'Q2',
  skills: ['Python', 'TensorFlow'],
  githubTemplate: 'https://github.com/username/template',
  requirements: ['Prerequisites'],
  deliverables: ['Expected outputs'],
  evaluationMetrics: ['Success criteria'],
  portfolioTips: ['Presentation advice'],
  status: 'not-started',
  progress: 0
};
```

## 📊 Data Persistence

The application uses localStorage to persist:
- Progress entries and study logs
- Settings and preferences
- Badge achievements
- Application tracking data

Data is automatically saved when:
- Completing progress log entries
- Updating settings
- Marking resources as complete
- Adding job applications

## 🔒 Privacy & Security

- **No external data collection** - All data stays in your browser
- **Local storage only** - No personal information sent to servers
- **Secure external links** - All external resources open in new tabs
- **GitHub Pages hosting** - Static site with HTTPS encryption

## 🤝 Contributing

This project is designed as a personal learning tool, but contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Ideas
- Additional learning resources
- New project templates
- UI/UX improvements
- Mobile responsiveness enhancements
- Additional Belfast/UK market insights

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Belfast Tech Community** for insights into the local job market
- **Open source learning resources** that make AI education accessible
- **Career changers** who have shared their transition stories
- **Bootstrap** and **React** communities for excellent documentation

## 📞 Support

For questions or suggestions:
- Open an issue on GitHub
- Connect on LinkedIn with #BelfastTech
- Join local tech meetups for in-person networking

---

**Made with ❤️ for aspiring AI professionals in Belfast and beyond**

*Your journey from retail to tech starts here. Every hour of study brings you closer to your goal of joining Belfast's thriving AI scene.*