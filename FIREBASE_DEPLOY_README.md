# Firebase Preview Deploy Setup

## Required Repository Secrets

Add these secrets to your GitHub repository (Settings → Secrets and variables → Actions):

- **FIREBASE_TOKEN**: Generate with `firebase login:ci` or use a GCP service account key
- **FIREBASE_PROJECT_ID**: Your Firebase project ID (e.g., `my-awesome-project`)
- **FIREBASE_SITE_ID** (optional): Specific Firebase Hosting site ID if using multiple sites

## Local Development

Test the build locally before pushing:
```bash
npm ci && npm run build
```

## Preview Channel Details

- **Channel naming**: `preview-{clean-branch-name}-{run-id}`
- **Preview URL location**: Check the "Add deployment summary" step in the workflow logs, or look for the job summary after the workflow completes
- **Channel expiration**: 7 days (configurable in workflow)
- **Cleanup**: Preview channels auto-expire; no manual cleanup needed

## Firebase Token Setup Options

### Option 1: CI Token (Simple)
```bash
firebase login:ci
# Copy the token to FIREBASE_TOKEN secret
```

### Option 2: Service Account (Recommended for production)
1. Create a service account in GCP Console
2. Grant "Firebase Admin" role
3. Generate and download JSON key
4. Base64 encode: `base64 service-account-key.json`
5. Add to FIREBASE_TOKEN secret (or use separate GCP auth action)

## Workflow Triggers

- **Push to any branch**: Creates preview deploy
- **Pull requests**: Creates preview deploy for PR branch
- **Concurrency**: Cancels previous deployments for same branch to avoid conflicts

## Important: Pull Requests from Forks

**GitHub Actions does not provide access to repository secrets for pull requests from forked repositories** for security reasons.

### What this means:
- PRs from forks will **build successfully** but **skip Firebase deployment**
- The workflow will show a notice explaining why deployment was skipped
- All other checks (build, tests) will still run to verify code quality

### For maintainers:
If you need to preview changes from a forked PR:
1. Review the code changes first for security
2. Create a branch in the main repository with the changes
3. Push to that branch to trigger a preview deployment
4. Alternatively, merge the PR and the deployment will run on the main branch

### For contributors:
If you're submitting a PR from a fork:
- Your build will be verified automatically
- Deployment preview will be created after a maintainer reviews your PR
- This is a security feature to protect repository secrets