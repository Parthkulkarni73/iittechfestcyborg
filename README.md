# CYBORG X - Premium Cyberpunk Landing Page

Welcome to the future. **CYBORG X** is a high-end, futuristic, and fully responsive landing page designed to showcase the intersection of human and artificial intelligence. This project features stunning glassmorphism layouts, glowing HUD elements, canvas particle systems, and micro-interactions built using React, Tailwind CSS v4, and Framer Motion.

---

## ⚡ Live Demo & Development
* **Dev Server Port**: http://localhost:5173/
* **Build Outputs**: `dist/` (static HTML/CSS/JS bundles optimized for high-performance CDNs)

---

## 🚀 Key Features

* **Advanced Background Canvas Particles**: Renders a interactive, smooth 60 FPS neural node web connection that reacts to page dynamics.
* **Sticky Glassmorphism Navigation**: Implements backdrop blur filters and active scroll-link tracking with spring-underlines.
* **Interactive Target Reticle Cursor**: A custom-made HUD reticle that dynamically tracks, rotates, and scales when hovering over links or buttons.
* **Interactive Hero Parallax**: Smooth floating animations on the main Cyborg image, responsive to mouse movement.
* **Multi-Stage Typing Console**: Simulates connection link logs typing in the hero section ("Initializing Neural Core...", etc.).
* **Statistical Counter System**: Automatically counts stats (500+ Projects, 120+ Researchers, etc.) up from zero once scrolled into view using an `IntersectionObserver`.
* **Alternate Roadmap Timeline**: A vertical timeline layout indicating historical milestones from 2025 (Genesis) to 2040 (Civilization).
* **Cyber Lab Gallery**: Responsive grid containing custom graphics that zoom and rotate with neon shadows on hover.
* **Launch Control Contact Form**: A themed comms console with customized neon glows on input focus and secure connection logs upon submission.

---

## 🛠️ Tech Stack

* **Framework**: React 19 (scaffolded with Vite)
* **Styling**: Tailwind CSS v4 (integrated using the official `@tailwindcss/vite` compiler)
* **Animations**: Framer Motion
* **Icons**: Lucide React
* **Icons & Brands**: Custom inline SVG elements for brand compatibility and stability.
* **Build Engine**: Vite 8 & Rolldown/Oxlint

---

## 💻 Installation and Setup

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* [npm](https://www.npmjs.com/) (installed automatically with Node)

### Step-by-Step Installation
1. Clone the repository or navigate to the project directory:
   ```bash
   cd cyborg-x
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## ⚙️ Available Scripts

In the project directory, you can run the following scripts:

### Development Mode
Runs the app in development mode with Hot Module Replacement (HMR).
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Production Build
Builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
```bash
npm run build
```
The build is minified, and all assets are ready to be deployed.

### Preview Production Build
Locally previews the production build compiled in the `dist` folder.
```bash
npm run preview
```

---

## 🌐 Deployment Instructions (Vercel)

CYBORG X is fully configured and ready for one-click deployment on **Vercel** directly from your GitHub repository.

### Easy Deploy Steps:
1. Push this project to your GitHub account (see instructions below).
2. Go to [Vercel.com](https://vercel.com/) and log in with your GitHub account.
3. Click **Add New** -> **Project**.
4. Import the repository where you pushed the code.
5. Vercel will automatically detect **Vite** as the framework:
   * **Framework Preset**: `Vite` (Auto-detected)
   * **Build Command**: `npm run build` (Auto-detected)
   * **Output Directory**: `dist` (Auto-detected)
6. Click **Deploy**. Your site will be live on a production-ready CDN in under a minute!
