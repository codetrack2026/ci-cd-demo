#!/bin/bash
# Ex 11 - Simulated CI/CD pipeline, runs 100% locally (no GitHub/Jenkins server needed).
# This script plays the role of a CI runner: lint -> test -> build -> "deploy".
set -e

echo "=== STAGE 1: LINT ==="
node --check sample_project/app.js && echo "Lint OK: no syntax errors"

echo ""
echo "=== STAGE 2: TEST ==="
node sample_project/app.test.js

echo ""
echo "=== STAGE 3: BUILD ==="
mkdir -p dist
cp sample_project/app.js dist/app.bundle.js
echo "Build artifact created at dist/app.bundle.js"

echo ""
echo "=== STAGE 4: DEPLOY (simulated) ==="
mkdir -p deployed
cp dist/app.bundle.js deployed/app.js
echo "Deployed to local 'deployed/' folder (stand-in for a production server)"

echo ""
echo "=== PIPELINE PASSED ==="
