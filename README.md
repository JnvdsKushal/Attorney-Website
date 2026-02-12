# Cabinet d'avocats Y. Mesraoui - Law Firm Website

A professional, modern website for **Cabinet d'avocats Y. Mesraoui**, a law firm based in Casablanca, Morocco, specializing in Business Law and Banking Law.

## Features

- **Multi-language Support**: Full support for French, Arabic (RTL), and English
- **Modern Design**: Professional navy blue theme with gold accents, inspired by leading Moroccan law firms
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Single-page application with smooth scrolling between sections
- **Sticky Header**: Navigation stays visible while scrolling
- **Theme Support**: Light/Dark theme switching capability

## Sections

- **Hero**: Welcoming banner with firm branding and call-to-action
- **About**: Attorney's message and firm philosophy
- **Services**: Business Law and Banking Law specializations
- **Strengths**: Key differentiators (Availability, Expertise, Commitment, Technology, Security)
- **Clients**: Trusted client showcase
- **Contact**: Location, phone numbers, and email information

## Tech Stack

- **Framework**: [React 19](https://react.dev/) with TypeScript
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Routing**: [Wouter](https://github.com/molefrog/wouter)
- **UI Components**: Custom components with shadcn/ui patterns
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Cormorant Garamond (headings), Inter (body), Cairo (Arabic)
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd attorney-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # If you encounter issues with styling, ensure Tailwind dependencies are installed:
   npm install -D tailwindcss@3.4.17 postcss autoprefixer
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal)

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
attorney-website/
├── public/                 # Static assets
│   └── images/            # Images (hero, services, contact backgrounds)
├── src/
│   ├── assets/            # Application assets
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (Button, Card, etc.)
│   │   ├── Navigation.tsx # Main navigation component
│   │   └── ErrorBoundary.tsx
│   ├── contexts/          # React contexts
│   │   ├── LanguageContext.tsx  # i18n translations
│   │   └── ThemeContext.tsx     # Theme management
│   ├── pages/             # Page components
│   │   ├── Home.tsx      # Main landing page
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # Tailwind and base styles
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript check + Vite build) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Contact Information

**Cabinet d'avocats Y. Mesraoui**

- **Address**: 77 Angle Rue Jules César, 1er Etg, Appt 1, Roches Noires, Casablanca
- **Phone**: +212 5 20 53 44 80 / +212 6 89 81 15 98
- **Email**: maitremesraoui@gmail.com

## License

This project is private and proprietary. All rights reserved.

---

© 2026 Cabinet d'avocats Y. Mesraoui. Tous droits réservés.
