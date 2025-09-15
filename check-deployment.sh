#!/bin/bash

# AI Learning Journey - Deployment Test Script
# This script helps diagnose and fix common deployment issues

echo "🚀 AI Learning Journey - Deployment Diagnostics"
echo "================================================"

# Check Node.js version
echo "📦 Checking Node.js version..."
node_version=$(node --version)
echo "Node.js version: $node_version"

if [[ "$node_version" < "v18" ]]; then
    echo "⚠️  WARNING: Node.js 18+ is recommended. Current version: $node_version"
fi

# Check npm version
echo "📦 Checking npm version..."
npm_version=$(npm --version)
echo "npm version: $npm_version"

# Check if dependencies are installed
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    echo "❌ node_modules not found. Installing dependencies..."
    npm install
else
    echo "✅ Dependencies found"
fi

# Check if gh-pages is installed
echo "📦 Checking gh-pages package..."
if npm list gh-pages > /dev/null 2>&1; then
    echo "✅ gh-pages package is installed"
else
    echo "❌ gh-pages package not found. Installing..."
    npm install --save-dev gh-pages
fi

# Test build process
echo "🔨 Testing build process..."
if npm run build; then
    echo "✅ Build successful"
else
    echo "❌ Build failed. Check console output above."
    exit 1
fi

# Check Git configuration
echo "🔧 Checking Git configuration..."
git_user=$(git config user.name 2>/dev/null)
git_email=$(git config user.email 2>/dev/null)

if [ -z "$git_user" ] || [ -z "$git_email" ]; then
    echo "⚠️  Git user not configured. Setting default configuration..."
    git config user.name "AI Learning Journey Deployer"
    git config user.email "deployer@ai-learning-journey.local"
    echo "✅ Git configuration set"
else
    echo "✅ Git is configured (User: $git_user, Email: $git_email)"
fi

# Check if we're on the main branch
current_branch=$(git branch --show-current)
echo "🌿 Current branch: $current_branch"

if [ "$current_branch" != "main" ]; then
    echo "⚠️  WARNING: Deployment typically works from 'main' branch"
    echo "   Current branch: $current_branch"
    echo "   Consider switching to main branch for deployment"
fi

# Check remote repository
echo "🔗 Checking remote repository..."
remote_url=$(git remote get-url origin 2>/dev/null)
if [ -n "$remote_url" ]; then
    echo "✅ Remote origin: $remote_url"
else
    echo "❌ No remote origin found"
fi

echo ""
echo "🎯 Deployment Status Check Complete!"
echo "===================================="

if [ -d "build" ]; then
    echo "✅ Build directory exists and ready for deployment"
    echo ""
    echo "📋 Deployment Checklist:"
    echo "========================"
    echo ""
    echo "🔹 Pre-Deployment:"
    echo "   ✅ Dependencies installed"
    echo "   ✅ Build successful"
    echo "   ✅ Git configured"
    echo "   ✅ Remote repository connected"
    echo ""
    echo "🔹 GitHub Pages Setup (Required once):"
    echo "   ⚠️  Go to repository Settings → Pages"
    echo "   ⚠️  Set Source to 'Deploy from a branch'"
    echo "   ⚠️  Select 'gh-pages' branch and '/' root folder"
    echo "   ⚠️  Click Save"
    echo ""
    echo "🔹 Deployment Options:"
    echo "   🤖 Automatic: Push changes to main branch"
    echo "   ⚙️  Manual: Run 'npm run deploy'"
    echo ""
    echo "🔹 Post-Deployment Verification:"
    echo "   🌐 Visit: https://adamhearst5-byte.github.io/ai-learning-journey"
    echo "   📊 Check Actions tab for deployment status"
    echo "   📱 Test mobile responsiveness"
    echo "   🌙 Verify dark mode toggle"
    echo ""
    echo "📖 For detailed instructions, see DEPLOYMENT.md"
else
    echo "❌ Build directory not found. Run 'npm run build' first."
fi

echo ""
echo "💡 Need help? Check DEPLOYMENT.md or README.md troubleshooting section"