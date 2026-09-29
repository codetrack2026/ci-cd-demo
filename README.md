# Ex 11 - Practice with CI/CD (fully offline simulation)

Real GitHub Actions / cloud Jenkins require a live internet connection to a
remote server. For an **offline lab/exam**, we simulate the same CI/CD
*concepts* — automatic lint -> test -> build -> deploy — using only local
shell scripts and git hooks. The stages and thinking are identical to what
a GitHub Actions YAML file would express; only the "runner" is local.

## Files
- `pipeline.sh` — the 4-stage pipeline (lint, test, build, deploy)
- `sample_project/` — tiny app + test used by the pipeline
- `pre-commit.sample` — a git hook that runs the pipeline before every commit

## Lab task for students
1. Run `bash pipeline.sh` and confirm all 4 stages pass.
2. Break a test in `sample_project/app.test.js` (change an expected value)
   and re-run — the pipeline should stop at STAGE 2 with a non-zero exit code.
3. Fix it, then set up the git hook:
   ```
   git init            # if not already a repo
   cp pre-commit.sample .git/hooks/pre-commit
   chmod +x .git/hooks/pre-commit
   git add . && git commit -m "test commit"
   ```
   Observe the pipeline running automatically before the commit completes.
4. In your project report, map each local stage to its real-world CI/CD
   equivalent (e.g., `pipeline.sh` STAGE 1 == GitHub Actions `lint` job).

## Real GitHub Actions + GitHub Pages

This repo also has a real `.github/workflows/ci.yml` that runs on every push /
pull request to `main`:
- `build-and-test` installs dependencies and runs `npm test` against
  `sample_project/`.
- `deploy` (main branch only, after tests pass) publishes `public/` — a
  small HTML landing page — to GitHub Pages.

Live site: https://codetrack2026.github.io/ci-cd-demo/
