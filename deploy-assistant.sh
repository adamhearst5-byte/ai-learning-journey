#!/bin/bash

# AI Learning Journey - Complete Deployment Assistant
# This script provides comprehensive deployment guidance and automation

echo "🤖 AI Learning Journey - Deployment Assistant"
echo "=============================================="

# Color codes for better readability
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

print_step() {
    echo -e "${BLUE}🔄 $1${NC}"
}

# Function to check prerequisites
check_prerequisites() {
    echo ""
    print_step "Checking prerequisites..."
    
    # Check Node.js version
    if command -v node >/dev/null 2>&1; then
        node_version=$(node --version)
        print_success "Node.js version: $node_version"
        
        # Check if version is 18 or higher
        major_version=$(echo $node_version | sed 's/v\([0-9]*\).*/\1/')
        if [ "$major_version" -ge 18 ]; then
            print_success "Node.js version is compatible"
        else
            print_warning "Node.js 18+ recommended. Current: $node_version"
        fi
    else
        print_error "Node.js not found. Please install Node.js 18+"
        return 1
    fi
    
    # Check npm
    if command -v npm >/dev/null 2>&1; then
        npm_version=$(npm --version)
        print_success "npm version: $npm_version"
    else
        print_error "npm not found"
        return 1
    fi
    
    # Check git
    if command -v git >/dev/null 2>&1; then
        git_version=$(git --version)
        print_success "Git available: $git_version"
    else
        print_error "Git not found"
        return 1
    fi
    
    return 0
}

# Function to check project status
check_project_status() {
    echo ""
    print_step "Checking project status..."
    
    # Check if in correct directory
    if [ ! -f "package.json" ]; then
        print_error "package.json not found. Please run this script from the project root."
        return 1
    fi
    
    # Check dependencies
    if [ ! -d "node_modules" ]; then
        print_warning "Dependencies not installed. Installing..."
        npm install
        if [ $? -eq 0 ]; then
            print_success "Dependencies installed"
        else
            print_error "Failed to install dependencies"
            return 1
        fi
    else
        print_success "Dependencies found"
    fi
    
    # Check gh-pages package
    if npm list gh-pages > /dev/null 2>&1; then
        print_success "gh-pages package is installed"
    else
        print_warning "gh-pages not found. Installing..."
        npm install --save-dev gh-pages
    fi
    
    return 0
}

# Function to run tests and build
test_and_build() {
    echo ""
    print_step "Testing and building project..."
    
    # Run tests
    print_step "Running tests..."
    if npm test -- --coverage --watchAll=false --passWithNoTests; then
        print_success "Tests passed"
    else
        print_warning "Some tests failed. Review test output above."
        read -p "Continue with deployment? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            print_info "Deployment cancelled"
            return 1
        fi
    fi
    
    # Build project
    print_step "Building project..."
    if npm run build; then
        print_success "Build successful"
        
        # Show build stats
        if [ -d "build" ]; then
            build_size=$(du -sh build | cut -f1)
            print_info "Build size: $build_size"
        fi
    else
        print_error "Build failed"
        return 1
    fi
    
    return 0
}

# Function to check git status
check_git_status() {
    echo ""
    print_step "Checking git status..."
    
    # Check current branch
    current_branch=$(git branch --show-current)
    print_info "Current branch: $current_branch"
    
    if [ "$current_branch" != "main" ]; then
        print_warning "Not on main branch. Deployment typically works from main."
        print_info "Consider merging to main for automatic deployment"
    fi
    
    # Check for uncommitted changes
    if ! git diff-index --quiet HEAD --; then
        print_warning "Uncommitted changes detected"
        print_info "Commit changes before deployment for best results"
    else
        print_success "Working directory clean"
    fi
    
    # Check remote
    remote_url=$(git remote get-url origin 2>/dev/null)
    if [ -n "$remote_url" ]; then
        print_success "Remote repository: $remote_url"
    else
        print_error "No remote repository configured"
        return 1
    fi
    
    return 0
}

# Function to show deployment options
show_deployment_options() {
    echo ""
    echo "🚀 Deployment Options"
    echo "===================="
    echo ""
    echo "1. 🤖 Automatic Deployment (Recommended)"
    echo "   - Merge changes to main branch"
    echo "   - GitHub Actions handles deployment"
    echo "   - Requires GitHub Pages setup (one-time)"
    echo ""
    echo "2. ⚙️  Manual Deployment"
    echo "   - Run 'npm run deploy' command"
    echo "   - Deploys from current branch"
    echo "   - Requires GitHub credentials"
    echo ""
    echo "3. 📋 Setup GitHub Pages (One-time)"
    echo "   - Go to repository Settings → Pages"
    echo "   - Set Source to 'Deploy from a branch'"
    echo "   - Select 'gh-pages' branch"
    echo "   - Select '/ (root)' folder"
    echo ""
}

# Function to perform manual deployment
manual_deployment() {
    echo ""
    print_step "Starting manual deployment..."
    
    # Confirm with user
    print_warning "Manual deployment will:"
    echo "   - Build the project"
    echo "   - Deploy to gh-pages branch"
    echo "   - Require GitHub credentials"
    echo ""
    read -p "Continue with manual deployment? (y/N): " -n 1 -r
    echo
    
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_step "Deploying to GitHub Pages..."
        if npm run deploy; then
            print_success "Manual deployment completed!"
            echo ""
            print_info "Site will be available at: https://adamhearst5-byte.github.io/ai-learning-journey"
            print_info "It may take 5-10 minutes to propagate"
        else
            print_error "Manual deployment failed"
            print_info "Check error messages above for details"
            return 1
        fi
    else
        print_info "Manual deployment cancelled"
    fi
    
    return 0
}

# Function to show post-deployment steps
show_post_deployment() {
    echo ""
    echo "📋 Post-Deployment Checklist"
    echo "============================"
    echo ""
    echo "🔹 Verification Steps:"
    echo "   [ ] Visit: https://adamhearst5-byte.github.io/ai-learning-journey"
    echo "   [ ] Check all navigation links work"
    echo "   [ ] Verify dashboard displays correctly"
    echo "   [ ] Test timeline functionality"
    echo "   [ ] Confirm charts render properly"
    echo "   [ ] Test dark mode toggle"
    echo "   [ ] Check mobile responsiveness"
    echo ""
    echo "🔹 GitHub Pages Settings:"
    echo "   [ ] Go to repository Settings → Pages"
    echo "   [ ] Verify Source is 'Deploy from a branch'"
    echo "   [ ] Confirm branch is 'gh-pages'"
    echo "   [ ] Check folder is '/ (root)'"
    echo ""
    echo "🔹 Troubleshooting:"
    echo "   - Wait 5-10 minutes for DNS propagation"
    echo "   - Clear browser cache if issues persist"
    echo "   - Check GitHub Actions tab for deployment status"
    echo "   - Ensure repository is public (or has GitHub Pro)"
    echo ""
    echo "📖 For detailed help: see DEPLOYMENT.md"
    echo "🔧 To verify deployment: run 'npm run verify-deployment'"
}

# Main execution
main() {
    # Check prerequisites
    if ! check_prerequisites; then
        print_error "Prerequisites check failed"
        exit 1
    fi
    
    # Check project status
    if ! check_project_status; then
        print_error "Project status check failed"
        exit 1
    fi
    
    # Test and build
    if ! test_and_build; then
        print_error "Build process failed"
        exit 1
    fi
    
    # Check git status
    check_git_status
    
    # Show deployment options
    show_deployment_options
    
    # Ask user what they want to do
    echo ""
    echo "What would you like to do?"
    echo "1) Show GitHub Pages setup instructions"
    echo "2) Perform manual deployment"
    echo "3) Show post-deployment checklist"
    echo "4) Exit"
    echo ""
    read -p "Enter your choice (1-4): " -n 1 -r
    echo ""
    
    case $REPLY in
        1)
            echo ""
            echo "🔧 GitHub Pages Setup (One-time)"
            echo "================================"
            echo ""
            echo "1. Go to your repository on GitHub"
            echo "2. Click on 'Settings' tab"
            echo "3. Scroll down to 'Pages' section"
            echo "4. Under 'Source', select 'Deploy from a branch'"
            echo "5. Select 'gh-pages' branch"
            echo "6. Select '/ (root)' folder"
            echo "7. Click 'Save'"
            echo ""
            print_success "After setup, push to main branch to deploy automatically!"
            ;;
        2)
            manual_deployment
            ;;
        3)
            show_post_deployment
            ;;
        4)
            print_info "Goodbye!"
            exit 0
            ;;
        *)
            print_warning "Invalid choice"
            ;;
    esac
    
    # Always show post-deployment info
    show_post_deployment
    
    print_success "Deployment assistant complete!"
}

# Run main function
main "$@"