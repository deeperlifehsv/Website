# Deeper Life Bible Church Huntsville - Website

A modern, mobile-friendly church website built with Next.js 14 and Sanity CMS, designed to serve church members, visitors, and newcomers.

## 🚀 Features

- **Modern Design**: Clean, responsive design with green/navy color scheme
- **Content Management**: Easy-to-use Sanity Studio for non-technical content updates
- **Sermons**: YouTube integration for video sermons with metadata
- **Events**: Church calendar and event management
- **Ministries**: Showcase of church ministries and programs
- **Contact Forms**: Prayer requests and visitor information collection
- **Mobile-First**: Responsive design optimized for all devices
- **SEO Optimized**: Built-in SEO features and meta tags
- **Fast Performance**: Static generation with ISR for optimal loading

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity v3
- **Icons**: Lucide React
- **Hosting**: Vercel (recommended)
- **Forms**: Sanity write API + SendGrid notifications

## 📁 Project Structure

```
deeperlife-huntsville/
├── apps/
│   ├── web/                 # Next.js frontend application
│   │   ├── src/
│   │   │   ├── app/         # App router pages
|   |   |   |  ├─ api/                 # Route handlers (Next.js API routes)
|   |   |   |  ├─ assets/              # Static assets served by Next.js
|   |   |   |  │  ├─ church_scenes/    # Hero / header images
|   |   |   |  │  └─ logo.png          # Church logo
|   |   |   |  ├─ contact/             # /contact page (route segment)
|   |   |   |  ├─ globals.css          # Global styles
|   |   |   |  ├─ layout.tsx           # Root layout
|   |   |   |  └─ page.tsx             # Home page
│   │   │   ├── components/  # React components
│   │   │   └── lib/         # Utilities and Sanity client
│   │   ├── public/          # Static assets
│   │   └── ...config files
│   └── studio/              # Sanity Studio CMS
│       ├── schemas/         # Content schemas
│       │   └── documents/   # Document type definitions
│       └── sanity.config.ts
├── package.json             # Root workspace config
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Sanity account (free)
- Vercel account (free)

### 1. Clone and Install

```bash
git clone [repository-url]
cd deeperlife-huntsville
npm install
```

### 2. Set Up Sanity

1. Create a new project at [sanity.io](https://sanity.io)
2. Note your Project ID and Dataset name
3. Generate an API token with "Editor" permissions

### 3. Environment Setup

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_WRITE_TOKEN=your_api_token
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
```

### 4. Deploy Sanity Studio

```bash
cd apps/studio
npm run deploy
```

This creates your studio at `https://your-project.sanity.studio`

### 5. Add Initial Content

1. Visit your Sanity Studio
2. Create "Site Settings" document with contact info
3. Create "Homepage" document with hero content
4. Add sample sermons, events, and ministries

### 6. Run Development Server

```bash
# Root directory
npm run dev
```

- Website: http://localhost:3000
- Studio: http://localhost:3333

## 🌐 Deployment

### Vercel (Recommended)

1. **Deploy Studio**:
   ```bash
   cd apps/studio
   npm run deploy
   ```

2. **Deploy Website**:
   - Connect your repository to Vercel
   - Set framework preset to "Next.js"
   - Set root directory to `apps/web`
   - Add environment variables in Vercel dashboard

3. **Set Up Webhooks**:
   - In Sanity Studio: Settings → API → Webhooks
   - Add webhook: `https://your-site.vercel.app/api/revalidate`
   - Secret: Add `REVALIDATE_SECRET` to Vercel env vars

### Domain Configuration

Update DNS settings to point to Vercel:
- `www.deeperlifehuntsville.org` → Vercel deployment
- `studio.deeperlifehuntsville.org` → Sanity Studio

## 📧 Email Setup (Optional)

For form notifications:

1. Sign up for SendGrid (free tier: 100 emails/day)
2. Generate API key
3. Add to environment variables:
   ```env
   SENDGRID_API_KEY=your_sendgrid_key
   FORMS_FROM_EMAIL=noreply@deeperlifehuntsville.org
   ```

## 📊 Analytics Setup (Optional)

1. Create Google Analytics 4 property
2. Add Measurement ID to environment:
   ```env
   GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

## 📝 Content Management

### For Administrators

1. **Access Studio**: Visit `https://studio.deeperlifehuntsville.org`
2. **Add Sermons**: Upload title, YouTube URL, date, speaker
3. **Create Events**: Set date, location, description
4. **Update Pages**: Edit homepage, about page content
5. **Manage Forms**: View prayer requests and visitor cards

### Content Types

- **Homepage**: Hero section, service times, call-to-actions
- **About Page**: Mission, vision, pastor info, church history
- **Sermons**: Video sermons with metadata and scripture references
- **Events**: Church calendar events with dates and details
- **Ministries**: Church programs and ministries
- **Prayer Requests**: Submitted prayer requests (private)
- **Visitor Cards**: New visitor information (private)
- **Site Settings**: Contact info, social media, global settings

## 🔧 Development

### Adding New Pages

1. Create page component in `apps/web/src/app/`
2. Add navigation link in `Header.tsx`
3. Create corresponding Sanity schema if needed

### Customizing Styles

- Global styles: `apps/web/src/app/globals.css`
- Tailwind config: `apps/web/tailwind.config.js`
- Color scheme defined in CSS custom properties

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (usually 'production') | Yes |
| `SANITY_WRITE_TOKEN` | API token for form submissions | Yes |
| `SENDGRID_API_KEY` | Email notifications | No |
| `GA_MEASUREMENT_ID` | Google Analytics | No |
| `REVALIDATE_SECRET` | Webhook security | Yes |

## 🎨 Design System

### Colors
- Primary Green: `#16a34a`
- Navy Blue: `#0c4a6e`
- Supporting grays and whites

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold weights
- Body: Regular weight

### Components
- Responsive grid layouts
- Card-based content sections
- Consistent button styles
- Mobile-first navigation

## 📱 Mobile Optimization

- Responsive breakpoints (sm, md, lg, xl)
- Touch-friendly navigation
- Optimized images and loading
- Progressive Web App features

## 🔒 Security

- API tokens stored securely
- Form validation and sanitization
- Rate limiting on contact forms
- HTTPS enforcement

## 📈 Performance

- Static Site Generation (SSG)
- Incremental Static Regeneration (ISR)
- Image optimization
- Code splitting
- CDN delivery via Vercel

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check environment variables are set
2. **Sanity Connection**: Verify project ID and dataset
3. **Images Not Loading**: Check Sanity CDN domains in next.config.js
4. **Forms Not Working**: Verify write token permissions

### Support

For technical issues:
- Check Vercel deployment logs
- Review Sanity Studio console
- Verify environment variable configuration

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

---

**Built with ❤️ for Deeper Life Bible Church Huntsville**
