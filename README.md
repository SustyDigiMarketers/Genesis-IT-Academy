# DevAcademy

A professional coding academy landing page with an interactive coding simulator.

## Deployment to GitHub Pages with Custom Domain

### 1. Setup GitHub Repository
genesisitacademy
1. Create a new repository on GitHub.
2. Push this code to the `main` branch.

### 2. Configure Custom Domain
1. Go to your repository **Settings** > **Pages**.
2. Under **Custom domain**, enter `demos.sustydigimarketers.com`.
3. Ensure **Enforce HTTPS** is checked.
4. The `public/CNAME` file is already updated with this domain.

### 3. Setup API Keys
1. Go to your repository **Settings** > **Secrets and variables** > **Actions**.
2. Create a **New repository secret** named `GEMINI_API_KEY`.
3. Paste your Gemini API key as the value.

### 4. Automatic Deployment
The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site to the `gh-pages` branch whenever you push to `main`.

### 5. DNS Configuration
Point your subdomain's DNS to GitHub Pages:
- **CNAME Record:**
  - Create a CNAME record for `demos` pointing to `yourusername.github.io` (replace `yourusername` with your actual GitHub username).

## Features
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Interactive Coding Test:** Real-time JavaScript/Python simulator with validation.
- **Advanced Animations:** Smooth transitions using Framer Motion.
- **SEO Ready:** Includes `CNAME`, `404.html`, `robots.txt`, and `sitemap.xml`.
