# Darkim Be Allah - Legacy Over Algorithms

A professional website for Wu-Tang affiliate and underground hip-hop legend Darkim Be Allah, showcasing his music, philosophy, and Inner Circle community.

## 🎯 Features

- **Home Page**: Hero section with "Legacy Over Algorithms" theme, trust indicators, and email capture
- **Inner Circle**: Membership tiers with 5% Nation philosophy and community benefits
- **About**: Comprehensive biography and legacy timeline from Wu-Tang Records to present
- **Tour**: Live performance dates and professional booking inquiry system
- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Email Capture**: Newsletter signup with free track incentive

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Hosting**: Netlify (optimized)

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/CoachAJ/darkim-site.git
   cd darkim-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Netlify Deployment

This project is optimized for Netlify hosting with automatic deployments.

### Automatic Deployment (Recommended)

1. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select the `darkim-site` repository

2. **Build Settings** (Auto-detected)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18

3. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy
   - Future pushes to main branch will auto-deploy

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod --dir=dist
     ```

### Configuration Files

- **`netlify.toml`**: Build settings, headers, and redirects
- **`public/_redirects`**: SPA routing configuration
- **`vite.config.ts`**: Vite build configuration

## 🎨 Design System

### Colors
- **Primary Gold**: `#D4AF37`
- **Bronze**: `#CD7F32`
- **Background**: `#000000` (Black)
- **Text**: `#FFFFFF` (White)
- **Gray Variants**: `#1a1a1a`, `#f5f5f5`

### Typography
- **Headers**: Georgia serif font family
- **Body**: Inter sans-serif font family
- **Responsive**: Mobile-first scaling

### Components
- **Buttons**: Primary (gold) and secondary (outlined) variants
- **Cards**: Border styling with hover effects
- **Forms**: Consistent input styling with validation
- **Navigation**: Sticky header with mobile menu

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation and branding
│   ├── Footer.tsx      # Site footer with links
│   └── Layout.tsx      # Page layout wrapper
├── pages/              # Main application pages
│   ├── Home.tsx        # Landing/conversion page
│   ├── InnerCircle.tsx # Membership tiers
│   ├── About.tsx       # Biography and timeline
│   └── Tour.tsx        # Live dates and booking
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind
```

## 🎵 Content Strategy

### Brand Positioning
- **Wu-Tang Heritage**: Emphasize Wu-Tang Records signing and RZA collaboration
- **5% Nation Teaching**: Highlight knowledge of self and consciousness
- **Independent Legacy**: "Legacy Over Algorithms" messaging
- **Fame Labs Crew**: Showcase collaborative relationships

### SEO Optimization
- Semantic HTML structure
- Meta tags for social sharing
- Fast loading with Vite optimization
- Mobile-responsive design

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Consistent component structure
- Tailwind utility classes

## 📞 Contact & Booking

- **Booking Email**: booking@darkimbeallah.com
- **Fame Labs**: [famelabsmusic.com](https://famelabsmusic.com)
- **GitHub**: [github.com/CoachAJ/darkim-site](https://github.com/CoachAJ/darkim-site)

## 📄 License

© 2024 Darkim Be Allah. All rights reserved.

---

**Built with 💛 for the culture - Wu-Tang Elements | Fame Labs Music**
