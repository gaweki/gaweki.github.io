#!/bin/bash

# Exit on error
set -e

# Get current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "🚀 Starting deployment process..."

# 1. Clean and Build
echo "📦 Building project..."
npm run clean
npm run build

# 2. Prepare gh-pages
echo "🌿 Preparing gh-pages branch..."

# If gh-pages exists locally, delete it to start fresh
if git show-ref --verify --quiet refs/heads/gh-pages; then
    git branch -D gh-pages
fi

# Create orphan branch
git checkout --orphan gh-pages

# 3. Clean working directory
echo "🧹 Cleaning working directory..."
git rm -rf . > /dev/null

# 4. Copy build files
echo "📄 Copying build files from public/..."
cp -r public/* .
cp public/.* . 2>/dev/null || true

# 5. Commit and Push
echo "⬆️ Pushing to GitHub..."
git add .
git commit -m "Deploy to GitHub Pages: $(date)"
git push origin gh-pages --force

# 6. Return to original branch
echo "🔙 Returning to $CURRENT_BRANCH branch..."
git checkout $CURRENT_BRANCH

echo "✅ Deployment complete! Your site should be live shortly."
