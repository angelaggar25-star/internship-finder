# Installation Guide

## Quick Start

The npm installation has encountered network issues due to the complexity of dependency chains. Here's how to get started:

### Step 1: Install Dependencies (First Time Only)

Run this command in your terminal from the project root:

```bash
npm install
```

If it times out, try:

```bash
npm install --legacy-peer-deps --no-audit --no-fund
```

### Step 2: Run the Development Server

Once dependencies are installed, start the dev server:

```bash
npm run dev
```

Then open your browser and navigate to: **http://localhost:3000**

### Step 3: Production Build

To build for production:

```bash
npm run build
npm start
```

## Troubleshooting

### Issue: `'next' is not recognized as an internal or external command`
**Solution**: Dependencies aren't installed. Run `npm install` first.

### Issue: Module not found errors
**Solution**: Clear cache and reinstall:
```bash
npm cache clean --force
rm -r node_modules
npm install
```

### Issue: Port 3000 already in use
**Solution**: The dev server will automatically use port 3001 if 3000 is taken.

### Issue: Tailwind/PostCSS errors
**Solution**: We've removed Tailwind to avoid dependency issues. The app uses inline CSS and should work without additional setup.

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable React components
- `/public` - Static files
- `.env` - Environment variables (TinyFish API key already configured)

## Features

✅ **AI-Powered Internship Matching** with TinyFish  
✅ **Modern Responsive UI** built with React  
✅ **Search & Filter** internships  
✅ **Featured Internships** showcase  
✅ **Success Stories** from students  
✅ **API Integration** ready for backend

## Next Steps

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Visit http://localhost:3000
4. Build more features or integrate with your backend

For more help, check the main README.md file.