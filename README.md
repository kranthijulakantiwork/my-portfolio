# Developer Portfolio Website

A modern, accessible, and responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS v4. Features a clean design with dark/light theme support, optimized for performance with Static Site Generation (SSG).

## Features

- **Modern Tech Stack**: Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4
- **Theme Switching**: Toggle between light and dark modes with persistent preference
- **Fully Accessible**: WCAG compliant with proper ARIA labels, semantic HTML, and keyboard navigation
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Static Site Generation**: Pre-rendered pages for optimal performance and SEO
- **Interactive Components**: 
  - Vertical tabs for experience timeline
  - Smooth scroll navigation
  - Mobile-friendly hamburger menu
  - Custom Stack Overflow icon integration
- **Type-Safe**: Full TypeScript support throughout the application

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19.2
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with all sections
│   ├── globals.css         # Global styles and theme variables
│   └── favicon.ico         # Site favicon
├── components/
│   ├── navigation.tsx      # Header with theme toggle
│   ├── hero.tsx            # Hero section with intro
│   ├── about.tsx           # About section
│   ├── experience.tsx      # Experience with vertical tabs
│   ├── skills.tsx          # Skills showcase
│   ├── education.tsx       # Education details
│   ├── achievements.tsx    # Achievements section
│   ├── contact.tsx         # Contact information
│   ├── theme-provider.tsx  # Theme context provider
│   └── icons/
│       └── stackoverflow-icon.tsx  # Custom Stack Overflow icon
├── lib/
│   ├── constants.ts        # Contact info and social links
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
\`\`\`

## Customization

### Update Personal Information

Edit `lib/constants.ts` to update your contact information:

\`\`\`typescript
export const CONTACT_INFO = {
  email: "your.email@example.com",
  phone: "+1234567890",
  linkedin: "https://linkedin.com/in/yourprofile",
  stackoverflow: "https://stackoverflow.com/users/yourprofile",
  github: "https://github.com/yourusername",
}
\`\`\`

### Modify Content

Update the following components with your information:
- `components/hero.tsx` - Name, title, and introduction
- `components/about.tsx` - About section content
- `components/experience.tsx` - Work experience details
- `components/skills.tsx` - Technical skills
- `components/education.tsx` - Educational background
- `components/achievements.tsx` - Notable achievements

### Theme Customization

Modify theme colors in `app/globals.css`:

\`\`\`css
@theme {
  --color-background: 0.09;
  --color-foreground: 0.95;
  --color-primary: 200 100% 50%;
  /* Add more custom colors */
}
\`\`\`

### Add New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`
3. Update navigation links in `components/navigation.tsx`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live in minutes

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with Node.js

## Accessibility

This portfolio follows WCAG 2.1 Level AA standards:
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Sufficient color contrast
- Screen reader friendly
- Skip-to-content link

## Performance

- Static Site Generation (SSG) for instant page loads
- Optimized images and assets
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind for optimal performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/)
