# Smart Internship Finder

AI-powered internship finding platform built with Next.js and TinyFish technology.

## Features

- **AI-Powered Matching**: Uses TinyFish AI to match students with relevant internships
- **Advanced Search**: Filter internships by location, category, experience level, and more
- **Featured Listings**: Hand-picked internship opportunities from top companies
- **Student Success Stories**: Real testimonials from placed students
- **Mobile Responsive**: Fully responsive design for all devices
- **Modern UI**: Built with Tailwind CSS and Heroicons

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd smart_internship_finder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Add your TinyFish API key to the `.env` file.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
smart_internship_finder/
├── app/                 # Next.js app router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── HeroSection.tsx # Hero section
│   ├── SearchSection.tsx # Search functionality
│   ├── FeaturedInternships.tsx # Featured listings
│   ├── HowItWorks.tsx  # How it works section
│   ├── StatsSection.tsx # Statistics section
│   ├── Testimonials.tsx # Student testimonials
│   ├── CTASection.tsx  # Call to action
│   └── Footer.tsx      # Footer
├── public/             # Static assets
└── package.json        # Dependencies and scripts
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Heroicons**: Icon library
- **TinyFish**: AI-powered matching engine
- **date-fns**: Date formatting library
- **React CountUp**: Animated number counting
- **React Intersection Observer**: Scroll-based animations

## Environment Variables

Create a `.env` file in the root directory:

```env
# TinyFish API Key
TINYFISH_API_KEY=your_api_key_here

# Application Settings
DEBUG=True
PORT=5000
HOST=127.0.0.1
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab
2. Import your repository to Vercel
3. Add environment variables
4. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.