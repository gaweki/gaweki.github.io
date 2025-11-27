#!/bin/bash
echo "Building project..."
npm run build

echo "Deploying to gh-pages..."
git checkout --orphan gh-pages
git rm -rf .
cp -r public/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

echo "Returning to main branch..."
git checkout main

echo "Deployment complete!"