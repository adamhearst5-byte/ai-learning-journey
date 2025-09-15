#!/bin/bash

# AI Learning Journey - Post-Deployment Verification Script
# This script verifies that the deployed site is working correctly

echo "🔍 AI Learning Journey - Deployment Verification"
echo "==============================================="

SITE_URL="https://adamhearst5-byte.github.io/ai-learning-journey"

echo "🌐 Testing site availability..."
echo "Site URL: $SITE_URL"

# Check if curl is available
if command -v curl >/dev/null 2>&1; then
    echo "📡 Checking site response..."
    
    # Test main site
    response=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL")
    
    if [ "$response" = "200" ]; then
        echo "✅ Site is responding (HTTP $response)"
        
        # Test if it's actually the React app
        content=$(curl -s "$SITE_URL")
        if [[ "$content" == *"AI Learning Journey"* ]]; then
            echo "✅ React app content detected"
        else
            echo "⚠️  Site responding but content may not be updated"
        fi
        
    elif [ "$response" = "404" ]; then
        echo "❌ Site not found (HTTP 404)"
        echo "   This may indicate GitHub Pages is not set up correctly"
        echo "   Please check repository Settings → Pages"
    else
        echo "⚠️  Site responding with HTTP $response"
        echo "   This may indicate the site is still deploying"
    fi
    
else
    echo "⚠️  curl not available - skipping automatic site check"
    echo "   Please manually verify: $SITE_URL"
fi

echo ""
echo "📋 Manual Verification Checklist:"
echo "================================="
echo ""
echo "🔹 Navigation Tests:"
echo "   [ ] Dashboard page loads"
echo "   [ ] Timeline page displays"
echo "   [ ] Resources section works"
echo "   [ ] Projects page functional"
echo "   [ ] Certifications page accessible"
echo "   [ ] Progress Logs working"
echo "   [ ] Portfolio section loads"
echo "   [ ] Career Hub accessible"
echo "   [ ] Settings page works"
echo ""
echo "🔹 Functionality Tests:"
echo "   [ ] Progress rings display correctly"
echo "   [ ] Charts render properly"
echo "   [ ] Dark mode toggle works"
echo "   [ ] Mobile responsiveness good"
echo "   [ ] All links work correctly"
echo "   [ ] No console errors"
echo ""
echo "🔹 Performance Tests:"
echo "   [ ] Pages load within 3 seconds"
echo "   [ ] Images display correctly"
echo "   [ ] Smooth animations"
echo "   [ ] Responsive design works"
echo ""

# Check GitHub Actions status
echo "🔧 GitHub Actions Information:"
echo "============================="
echo "To check deployment status:"
echo "   1. Go to repository on GitHub"
echo "   2. Click 'Actions' tab"
echo "   3. Look for latest workflow run"
echo "   4. Green check = successful deployment"
echo "   5. Red X = deployment failed"
echo ""

# GitHub Pages troubleshooting
echo "🛠️  Troubleshooting Tips:"
echo "========================"
echo ""
echo "If site is not working:"
echo "   1. Check GitHub Pages settings:"
echo "      - Go to Settings → Pages"
echo "      - Source: 'Deploy from a branch'"
echo "      - Branch: 'gh-pages'"
echo "      - Folder: '/ (root)'"
echo ""
echo "   2. Wait 5-10 minutes after deployment"
echo "      - DNS propagation takes time"
echo "      - Clear browser cache"
echo ""
echo "   3. Check Actions tab for errors"
echo "      - Build failures show in logs"
echo "      - Permission issues indicated"
echo ""
echo "   4. Verify repository is public"
echo "      - Private repos need GitHub Pro"
echo "      - Check repository visibility"
echo ""

echo "✅ Verification script complete!"
echo ""
echo "🌐 Site URL: $SITE_URL"
echo "📖 For more help, see DEPLOYMENT.md"