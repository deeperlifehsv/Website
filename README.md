# Deeper Life Bible Church Huntsville Website

A modern, responsive website built with Next.js 13+ and Sanity CMS for content management.

## 🚀 Features

- **Modern Design**: Responsive design with beautiful UI components
- **Content Management**: Sanity CMS for easy content updates
- **Form Handling**: Prayer requests, visitor cards, and contact forms
- **SEO Optimized**: Built-in SEO features and metadata
- **Performance**: Fast loading with Next.js optimizations
- **Real-time Updates**: Instant content updates via webhooks

## 🛠️ Tech Stack

- **Frontend**: Next.js 13+ with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Sanity Studio
- **Deployment**: Vercel (recommended)
- **Forms**: Sanity document creation
- **Images**: Next.js Image optimization

## 📦 Project Structure
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

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Sanity account and project

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/deeperlifehsv/Website.git
cd Website

# Install dependencies
npm install
```

### 2. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_WRITE_TOKEN=your_api_token
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
REVALIDATE_SECRET=your_secret_key
```

### 3. Sanity Setup

1. Create a new project at [sanity.io](https://sanity.io)
2. Note your Project ID and Dataset name
3. Generate an API token with "Editor" permissions

```bash
# Install studio dependencies
cd apps/studio
npm install

# Seed initial data (optional but recommended)
npm run seed

# Deploy Sanity Studio
npm run deploy
```

This creates your studio at `https://your-project.sanity.studio`

### 4. Add Initial Content

1. Visit your Sanity Studio
2. Create "Site Settings" document with contact info
3. Create "Homepage" document with hero content
4. Add sample sermons, events, and ministries

### 5. Run Development Server

```bash
# Root directory
npm run dev
```

- Website: http://localhost:3000
- Studio: http://localhost:3333

## 📝 Content Management

### Sanity Studio

Access the studio at `http://localhost:3333` (local) or `https://studio.deeperlifehuntsville.org` (production) to manage:

- **Site Settings**: Logo, contact info, social media
- **Homepage**: Hero content, welcome message, call-to-actions
- **About Page**: Mission, vision, pastor info
- **Sermons**: Upload and manage sermon content
- **Events**: Church events and programs
- **Ministries**: Different ministry information
- **Forms**: View prayer requests and visitor cards

### Content Types

- **Homepage**: Hero section, service times, call-to-actions
- **About Page**: Mission, vision, pastor info, church history
- **Sermons**: Video sermons with metadata and scripture references
- **Events**: Church calendar events with dates and details
- **Ministries**: Church programs and ministries
- **Prayer Requests**: Submitted prayer requests (private)
- **Visitor Cards**: New visitor information (private)
- **Site Settings**: Contact info, social media, global settings

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Dataset name (usually 'production') | Yes |
| `SANITY_WRITE_TOKEN` | API token for form submissions | Yes |
| `SENDGRID_API_KEY` | Email notifications | No |
| `GA_MEASUREMENT_ID` | Google Analytics | No |
| `REVALIDATE_SECRET` | Webhook security | Yes |

### Sanity Project Setup

1. Create a Sanity project at [sanity.io](https://sanity.io)
2. Get your project ID from the project dashboard
3. Generate an API token with write permissions
4. Add your domain to CORS origins in Sanity manage

### Webhook Configuration

To enable real-time updates when content changes:

1. In Sanity manage, go to API > Webhooks
2. Add webhook URL: `https://yourdomain.com/api/revalidate?secret=YOUR_SECRET`
3. Enable for all document types
4. Set trigger on create, update, delete

## 🎨 Customization

### Design System

The site uses a custom design system with:

- **Colors**: Primary Green (`#16a34a`), Navy Blue (`#0c4a6e`), supporting grays and whites
- **Typography**: Inter (Google Fonts) - Bold headings, Regular body text
- **Components**: Reusable UI components in `/components`
- **Styling**: Tailwind CSS with custom utilities

### Adding New Pages

1. Create page component in `apps/web/src/app/`
2. Add navigation link in `Header.tsx`
3. Create corresponding Sanity schema if needed

### Adding New Content Types

1. Create schema in `apps/studio/schemas/documents/`
2. Add to schema index in `apps/studio/schemas/index.ts`
3. Add GROQ queries in `apps/web/src/lib/sanity.ts`
4. Create pages/components to display content

### Customizing Styles

- Global styles: `apps/web/src/app/globals.css`
- Tailwind config: `apps/web/tailwind.config.js`
- Color scheme defined in CSS custom properties

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

### Environment Variables for Production

```bash
# Production URLs
SANITY_STUDIO_WEBHOOK_URL=https://yourdomain.com/api/revalidate
SANITY_STUDIO_REVALIDATE_SECRET=your_secret_key

# Same Sanity config as development
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
SANITY_WRITE_TOKEN=your_write_token
```

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

## 🔄 Development Workflow

### Making Content Changes

1. Open Sanity Studio (`npm run dev` in `apps/studio`)
2. Make content changes
3. Publish changes
4. Website updates automatically via webhooks

### Code Changes

1. Make changes to Next.js code
2. Test locally with `npm run dev`
3. Commit and push to trigger deployment

### Adding New Features

1. Create components in `apps/web/src/components/`
2. Add pages in `apps/web/src/app/`
3. Update Sanity schemas if needed
4. Test thoroughly before deployment

## 🎯 Key Features

### Hero Slider
- Full-screen image carousel
- Automatic and manual navigation
- Mobile-responsive with touch controls

### Form Handling
- Prayer request submission
- Visitor card collection
- Contact form processing
- Data stored in Sanity CMS

### SEO & Performance
- Next.js Image optimization
- Metadata management
- Fast loading times
- Mobile-first responsive design

### Content Management
- Easy content updates via Sanity Studio
- Real-time website updates
- Image asset management
- Rich text editing

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

**Sanity connection errors:**
- Check environment variables
- Verify project ID and tokens
- Check CORS settings in Sanity

**Build errors:**
- Run `npm install` to update dependencies
- Check TypeScript errors
- Verify all environment variables are set

**Content not updating:**
- Check webhook configuration
- Verify revalidate secret matches
- Check network connectivity

### Support

For technical support or questions:
- Create an issue in the GitHub repository
- Check the documentation at [sanity.io/docs](https://sanity.io/docs)
- Review Next.js documentation at [nextjs.org](https://nextjs.org)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Deeper Life Bible Church Huntsville** - Growing in faith, fellowship, and service in Huntsville, Alabama.
