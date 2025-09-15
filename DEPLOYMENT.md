# 🚀 Deployment Guide - AI Learning Journey

## Quick Deployment Steps

### Automated Deployment (Recommended)
1. **Merge PR to main branch**
2. **Enable GitHub Pages** (one-time setup):
   - Go to repository **Settings → Pages**
   - Set **Source** to "Deploy from a branch"
   - Select **"gh-pages"** branch and **"/ (root)"** folder
   - Click **Save**
3. **Push changes to main** to trigger automatic deployment via GitHub Actions

### Manual Deployment (Alternative)
```bash
npm run build
npm run deploy
```

## Verification Steps

### Pre-Deployment Check
```bash
npm run check-deployment
```

### Post-Deployment Verification
1. Check **Actions** tab for deployment status
2. Visit: https://adamhearst5-byte.github.io/ai-learning-journey
3. Verify all pages load correctly
4. Test responsive design on mobile

## Deployment Checklist

### ✅ Pre-Deployment
- [ ] All tests pass: `npm test`
- [ ] Build succeeds: `npm run build`
- [ ] No console errors in development
- [ ] All dependencies installed: `npm install`
- [ ] Check deployment script: `npm run check-deployment`

### ✅ GitHub Pages Setup (One-time)
- [ ] Repository is public or has GitHub Pages enabled
- [ ] Go to Settings → Pages
- [ ] Source: "Deploy from a branch"
- [ ] Branch: "gh-pages"
- [ ] Folder: "/ (root)"
- [ ] GitHub Actions enabled in Settings → Actions

### ✅ Post-Deployment
- [ ] Site loads at https://adamhearst5-byte.github.io/ai-learning-journey
- [ ] All navigation links work
- [ ] Dashboard displays correctly
- [ ] Timeline shows proper data
- [ ] Charts render properly
- [ ] Mobile responsiveness works
- [ ] Dark mode toggle functions

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Deployment Permission Errors
1. Ensure repository is public
2. Check GitHub Actions permissions in Settings
3. Verify GitHub Pages is enabled

#### Site Not Loading
1. Check GitHub Pages settings
2. Verify branch is "gh-pages"
3. Wait 5-10 minutes for propagation
4. Check Actions tab for deployment status

#### 404 Errors on Refresh
- This is expected with React Router on GitHub Pages
- The app uses client-side routing

### Getting Help
- Check README.md troubleshooting section
- Review GitHub Actions logs
- Verify build output in `/build` directory

## Technical Details

### Deployment Configuration
- **Homepage**: `https://adamhearst5-byte.github.io/ai-learning-journey`
- **Build Output**: `/build` directory
- **Deployment Target**: gh-pages branch
- **Automation**: GitHub Actions on push to main

### Scripts
- `npm run build` - Create production build
- `npm run deploy` - Deploy to GitHub Pages (manual)
- `npm run check-deployment` - Verify deployment setup

### GitHub Actions Workflows
- **deploy.yml** - Main deployment workflow (GitHub Pages native)
- **deploy-ghpages.yml** - Alternative gh-pages deployment

The project is configured to use GitHub's native Pages deployment for better reliability and permissions handling.