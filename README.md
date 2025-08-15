# Firebase Studio - Trivandrum Vibes (Static Export)

This is a Next.js starter project configured for static export, suitable for hosting on platforms like GitHub Pages.

## Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Building for Production

To create a production-ready static build, run:
```bash
npm run build
```
This will generate the static files in the `out` directory.

## Deploying to GitHub Pages

To deploy the application to GitHub Pages, follow these steps:

1.  **Build the application:**
    ```bash
    npm run build
    ```

2.  **Push the `out` directory to your `gh-pages` branch.** A common way to do this is using the `gh-pages` package:

    Install the package:
    ```bash
    npm install --save-dev gh-pages
    ```

    Add a deploy script to your `package.json`:
    ```json
    "scripts": {
      "deploy": "gh-pages -d out"
    }
    ```

    Run the deploy script:
    ```bash
    npm run deploy
    ```

3.  **Configure your repository settings:** In your GitHub repository settings, under "Pages", make sure the source is set to deploy from the `gh-pages` branch.

Your site will be available at `https://<your-username>.github.io/<your-repo-name>/`.
