import type { NextConfig } from 'next';

// GitHub Pages serves static files only. Keep the normal server build for
// Sites, and switch to a static export only inside the GitHub Actions job.
const nextConfig: NextConfig = process.env.GITHUB_ACTIONS === 'true'
  ? { output: 'export' }
  : {};

export default nextConfig;
