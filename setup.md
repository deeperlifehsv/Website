# Quick Setup Guide for Deeper Life Bible Church Huntsville Website

## 🚀 Fast Track Setup (5 minutes)

### Step 1: Get Your Sanity Project Ready
1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project (note the Project ID)
3. Go to **Manage** → **API** → **Tokens** and create a token with **Editor** permissions
4. Go to **Manage** → **API** → **CORS Origins** and add:
   - `http://localhost:3000` (for development)
   - Your production domain (when you deploy)

### Step 2: Environment Configuration
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your Sanity details:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   SANITY_STUDIO_PROJECT_ID=your_project_id_here
   SANITY_WRITE_TOKEN=your_token_here
   REVALIDATE_SECRET=any_random_string_123
   ```

### Step 3: Install and Seed
```bash
# Install all dependencies
npm install

# Seed the database with sample content
cd apps/studio
npm run seed
cd ../..
```

### Step 4: Start Development
```bash
# Terminal 1: Start Sanity Studio
cd apps/studio && npm run dev

# Terminal 2: Start Next.js (in new terminal)
cd apps/web && npm run dev
```

### Step 5: Access Your Site
- **Website**: http://localhost:3000
- **Sanity Studio**: http://localhost:3333

## ✅ Quick Verification

1. **Studio Working**: Go to http://localhost:3333 and see the content
2. **Website Working**: Go to http://localhost:3000 and see the homepage
3. **Content Connected**: Make a change in the studio and refresh the website

## 🎯 What You Get After Setup

### Pre-loaded Content:
- **Homepage** with hero slider and service times
- **Site Settings** with contact info and social media
- **Sample Sermons** with YouTube integration
- **Sample Events** and ministry information
- **About Page** with mission and vision

### Working Features:
- **Content Management** via Sanity Studio
- **Form Submissions** (prayer requests, visitor cards)
- **Real-time Updates** when you publish changes
- **Responsive Design** that works on all devices

## 🔧 Customization After Setup

### Change Site Information:
1. Go to Sanity Studio → Site Settings
2. Update church name, contact info, social media
3. Publish changes

### Update Homepage:
1. Go to Sanity Studio → Homepage
2. Change hero title, subtitle, welcome message
3. Add/edit call-to-action buttons

### Add Your Content:
1. **Sermons**: Upload your YouTube videos
2. **Events**: Add your church events
3. **Ministries**: Update ministry information
4. **About**: Add your pastor's info and church history

## 🚀 When Ready to Deploy

### Vercel Deployment (Recommended):
1. Push your code to GitHub
2. Connect GitHub to Vercel
3. Add the same environment variables in Vercel dashboard
4. Update webhook URL in Sanity to your production domain

### Set Production Webhook:
1. In Sanity Manage → API → Webhooks
2. Add: `https://yoursite.com/api/revalidate?secret=your_secret`
3. Enable for all document types

## 📞 Need Help?

### Common First-Time Issues:
- **"Cannot connect to Sanity"**: Check your project ID and token
- **"Content not showing"**: Run the seed script again
- **"Webhook not working"**: Verify the secret matches in both places

### Support:
- Check the full README.md for detailed information
- Create an issue on GitHub if you encounter problems
- All environment variables are documented in `.env.example`

---

**You're all set!** 🎉 Start customizing your church website with the easy-to-use Sanity Studio.
