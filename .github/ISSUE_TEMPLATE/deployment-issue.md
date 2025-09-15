---
name: Deployment Issue Report
about: Report problems with GitHub Pages deployment or Git errors
title: '[DEPLOY] - Brief description of the issue'
labels: ['bug', 'deployment']
assignees: ''

---

## 🚨 Deployment Issue Description
A clear and concise description of what the deployment error is.

## 🔍 Error Details
- **Error Message:** (Copy the exact error message here)
- **Error Code:** (e.g., exit code 128)
- **Where it occurs:** 
  - [ ] GitHub Actions workflow
  - [ ] Manual `npm run deploy`
  - [ ] Local build process
  - [ ] Other (specify): ___________

## 🛠 Environment Information
Please run `npm run check-deployment` and paste the output here:

```
(Paste check-deployment script output here)
```

## 📋 Steps Taken
What steps have you already tried?
- [ ] Checked GitHub Pages settings in repository
- [ ] Enabled GitHub Actions in repository settings
- [ ] Ran `npm run build` successfully
- [ ] Cleared npm cache and reinstalled dependencies
- [ ] Checked Git configuration
- [ ] Verified on main branch
- [ ] Other (specify): ___________

## 🔗 Repository Information
- **Repository URL:** 
- **Branch attempting to deploy from:** 
- **GitHub Pages source setting:** (e.g., Deploy from a branch, GitHub Actions)

## 📱 Expected Behavior
What should happen when the deployment works correctly?

## 📸 Screenshots
If applicable, add screenshots of error messages or configuration screens.

## 🆘 Additional Context
Add any other context about the problem here, including:
- When did it last work (if ever)?
- Any recent changes made to the repository?
- Are you deploying from a fork or the original repository?

---

### 🎯 Quick Fixes Checklist
Before submitting, try these common solutions:

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Set Source to "Deploy from a branch" 
   - Select "gh-pages" branch and "/" root folder

2. **Check repository permissions:**
   - Ensure repository is public or has appropriate access
   - Verify GitHub Actions are enabled in Settings → Actions

3. **Try manual deployment:**
   ```bash
   npm run build
   npm run deploy
   ```

4. **Clear and rebuild:**
   ```bash
   npm cache clean --force
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```