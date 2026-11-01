@echo off
echo Setting up Smart Internship Finder...
echo.

echo Step 1: Installing dependencies...
call npm install next react react-dom @heroicons/react --no-audit --no-fund

echo.
echo Step 2: Installing dev dependencies...
call npm install --save-dev typescript @types/react @types/node tailwindcss postcss autoprefixer @tailwindcss/typography --no-audit --no-fund

echo.
echo Step 3: Initializing Tailwind CSS...
call npx tailwindcss init -p

echo.
echo Step 4: Building the project...
call npm run build

echo.
echo Step 5: Starting development server...
echo.
echo To start the development server, run:
echo npm run dev
echo.
echo Then open http://localhost:3000 in your browser.
echo.
echo Setup complete!