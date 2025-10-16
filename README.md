# Owen R. Thornton Research Portfolio

This repository contains a static website that showcases Owen R. Thornton's research output, resume highlights, and media appearances.

## Local development

The site is a static bundle of HTML, CSS, and JavaScript. You can preview it locally with any static file server. For example:

```bash
python -m http.server --bind 0.0.0.0 8000
```

Then visit `http://localhost:8000` in your browser.

## Publishing online

Because the project is static, it can be hosted on any static hosting provider. Two common options are:

### GitHub Pages
1. Fork or clone the repository to your GitHub account.
2. Push the contents of the `main` branch to the repository on GitHub.
3. In the repository settings, navigate to **Pages**.
4. Select the `main` branch and the `/ (root)` folder, then click **Save**.
5. GitHub Pages will build and deploy the site. Your portfolio will be accessible at `https://<username>.github.io/<repository>/`.

### Netlify
1. Sign in to [Netlify](https://www.netlify.com/) and choose **Add new site** → **Import an existing project**.
2. Connect your Git provider and select this repository.
3. Because the site is pre-built, set the build command to `npm run build` (leave blank) and the publish directory to the repository root (`/`).
4. Deploy the site. Netlify will provision a domain such as `https://<custom>.netlify.app/`. You can assign a custom domain within Netlify's settings.

## Updating content

All homepage content lives in `index.html`, global styling in `styles.css`, shared behavior in `scripts.js`, and publication-specific copy within the `publications/` directory. Edit the relevant file, verify the change locally, and redeploy following the steps above.

