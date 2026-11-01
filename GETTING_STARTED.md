# Getting Started - Smart Internship Finder

## Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)

## Installation Steps

### Step 1: Navigate to Project Directory

```bash
cd c:\Users\aman\Music\tinyfish\smart_internship_finder
```

### Step 2: Install Dependencies

```bash
npm install
```

**If this times out**, use:
```bash
npm install --legacy-peer-deps --no-audit --no-fund
```

**Or use yarn**:
```bash
yarn install
```

### Step 3: Start Development Server

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.x.x
✓ Ready in 10.2s
http://localhost:3000
```

### Step 4: Open in Browser

Visit: **http://localhost:3000**

You should see the complete Smart Internship Finder website!

---

## Available Scripts

### Development
```bash
npm run dev
# Starts development server with hot-reload
# Visit: http://localhost:3000
```

### Production Build
```bash
npm run build
# Creates optimized production build
```

### Production Start
```bash
npm start
# Runs the production build
```

### Linting
```bash
npm run lint
# Checks code quality
```

---

## Project Configuration

### Environment Variables
The `.env` file is already configured:
```env
TINYFISH_API_KEY=sk-tinyfish-F7DzhkA3uHG8w_dHciW9ZS3aCsRs8s6V
DEBUG=True
PORT=5000
HOST=127.0.0.1
```

### TypeScript
The project uses TypeScript for type safety. Config is in `tsconfig.json`.

### Next.js
Configuration is in `next.config.js` with image optimization settings.

---

## Directory Structure Explained

```
smart_internship_finder/
│
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (wraps all pages)
│   ├── page.tsx                 # Home page (/route)
│   ├── globals.css              # Global styles
│   ├── api/
│   │   └── match/
│   │       └── route.ts         # API endpoint for matching
│   └── favicon.ico
│
├── components/                   # Reusable React components
│   ├── Navbar.tsx               # Top navigation
│   ├── HeroSection.tsx          # Large banner
│   ├── SearchSection.tsx        # Search form
│   ├── FeaturedInternships.tsx  # Internship cards
│   ├── HowItWorks.tsx           # Process steps
│   ├── StatsSection.tsx         # Key statistics
│   ├── Testimonials.tsx         # Student reviews
│   ├── CTASection.tsx           # Call-to-action
│   └── Footer.tsx               # Footer
│
├── public/                       # Static files (images, icons)
│
├── .env                         # Environment variables
├── .env.local                   # Local overrides (git-ignored)
├── .gitignore                   # Git exclusions
│
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript config
├── next.config.js               # Next.js config
│
├── README.md                    # Full documentation
├── INSTALLATION.md              # Installation guide
├── GETTING_STARTED.md          # This file
│
└── node_modules/                # Dependencies (auto-created by npm)
```

---

## How It Works

### 1. **Home Page (`app/page.tsx`)**
Composes all components into a single page:
```typescript
<HeroSection />
<SearchSection />
<FeaturedInternships />
<HowItWorks />
<StatsSection />
<Testimonials />
<CTASection />
```

### 2. **Layout (`app/layout.tsx`)**
Wraps all pages with:
- Navbar (sticky top)
- Main content area
- Footer

### 3. **Components**
Reusable React components with inline CSS styles:
- Each component is self-contained
- Uses Heroicons for graphics
- No external CSS framework

### 4. **API Endpoint (`app/api/match/route.ts`)**
Handles internship matching requests:
```bash
POST /api/match
Content-Type: application/json

{
  "skills": ["React", "TypeScript"],
  "location": "Remote",
  "preferences": { "type": "Remote" }
}
```

---

## Customization

### Change Brand Colors
All colors are in component inline styles. Search for hex codes like `#2563eb` and change to your brand color.

### Update Internship Data
Edit the `internships` array in:
- `components/FeaturedInternships.tsx`

### Modify Text Content
All text is in components - just edit and save. Changes appear automatically.

### Add Logo
Place your logo in `/public/` and import in `Navbar.tsx`.

---

## Common Issues

### Issue: "npm: not found"
**Cause**: Node.js not installed
**Fix**: Install from https://nodejs.org

### Issue: "Port 3000 is already in use"
**Cause**: Another app is using port 3000
**Fix**: Next.js automatically uses 3001 instead

### Issue: Changes not reflecting
**Cause**: Browser cache
**Fix**: Press `Ctrl + Shift + R` (hard refresh)

### Issue: TypeScript errors
**Cause**: Type mismatches
**Fix**: Check error message, errors are helpful for fixing

### Issue: Slow npm install
**Cause**: Network or large dependencies
**Fix**: Use `--no-audit --no-fund` flags

---

## Deployment Options

### **Option 1: Vercel (Easiest)**
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repo
5. Deploy (one click!)

### **Option 2: Netlify**
1. Run `npm run build`
2. Upload `.next` folder to Netlify
3. Set Node version to 18+

### **Option 3: Your Own Server**
```bash
npm run build
npm start
# App runs on http://localhost:5000 (from .env)
```

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Visit http://localhost:3000
4. 🎨 Customize colors and content
5. 🔗 Connect your database/backend
6. 🚀 Deploy to production

---

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **TypeScript Docs**: https://www.typescriptlang.org/docs
- **Heroicons**: https://heroicons.com
- **TinyFish Docs**: Check your TinyFish dashboard

---

## Getting Help

1. Check the error message in terminal - it's usually very helpful
2. Review the specific component file mentioned in the error
3. Check `README.md` for detailed documentation
4. Review `INSTALLATION.md` for setup issues
5. Look at the code comments in component files

---

## You're Ready! 🎉

Your Smart Internship Finder is set up and ready to go. Start coding and have fun building! 🚀