# Cloudflare Pages deployment

1. Connect your Git repository to Cloudflare Pages.
2. Set the build command to `npm run build` and the build output directory to `.` (Next.js will handle the `.next` directory).
3. Ensure environment variables (if any) are set in the Cloudflare Pages dashboard.

Note: For the most straightforward deployment, use `Framework preset: Next.js` in Cloudflare Pages when available.
