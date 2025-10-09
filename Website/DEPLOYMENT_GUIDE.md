# ChimeTex.com Deployment Guide
## GitHub Pages + Cloudflare Setup

### Total Annual Cost: ~$9.77/year

---

## Phase 1: GitHub Pages Setup

### 1. Enable GitHub Pages
1. Go to your GitHub repository settings
2. Navigate to "Pages" section
3. Source: "GitHub Actions"
4. The workflow file is already created in `.github/workflows/deploy.yml`

### 2. Trigger First Deployment
```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### 3. Your Site Will Be Available At:
- `https://hashen-ruwanpura.github.io/ChimeTex/`
- This will change to `https://chimetex.com` after domain setup

---

## Phase 2: Domain Purchase (Cloudflare)

### 1. Create Cloudflare Account
- Visit [cloudflare.com](https://cloudflare.com)
- Sign up for free account

### 2. Purchase Domain
- Go to "Domain Registration"
- Search for "chimetex.com"
- **Expected cost: $9.77/year** (cheapest registrar)
- Complete purchase

### 3. Domain Alternatives if chimetex.com is taken:
- `chimetex.co` - $32/year
- `chimetex.net` - $13/year  
- `chimetex.org` - $14/year
- `chimetexintl.com` - $9.77/year

---

## Phase 3: DNS Configuration

### 1. GitHub Pages Custom Domain
1. In your GitHub repo settings → Pages
2. Add custom domain: `chimetex.com`
3. Check "Enforce HTTPS"

### 2. Cloudflare DNS Records
Add these DNS records in Cloudflare dashboard:

```
Type: CNAME
Name: www
Content: hashen-ruwanpura.github.io
Proxy Status: Proxied (Orange cloud)

Type: A
Name: @
Content: 185.199.108.153
Proxy Status: Proxied

Type: A  
Name: @
Content: 185.199.109.153
Proxy Status: Proxied

Type: A
Name: @
Content: 185.199.110.153
Proxy Status: Proxied

Type: A
Name: @
Content: 185.199.111.153
Proxy Status: Proxied
```

---

## Phase 4: Email Setup (FREE with Cloudflare)

### 1. Enable Email Routing
1. In Cloudflare dashboard → Email → Email Routing
2. Click "Enable Email Routing"
3. Add destination email (Charuka's personal Gmail)

### 2. Create Email Addresses
```
charukar@chimetex.com → charuka@gmail.com
info@chimetex.com → charuka@gmail.com
sales@chimetex.com → charuka@gmail.com
```

### 3. Send Email Setup
**Option A: Gmail SMTP (Free)**
- Configure Gmail to send as charukar@chimetex.com
- Add custom "From" address in Gmail settings

**Option B: Cloudflare Email Workers (Advanced)**
- Use Cloudflare Workers for sending emails
- More complex but fully branded

---

## Phase 5: SSL & Security (Automatic)

### 1. SSL Certificate
- Cloudflare provides free SSL automatically
- GitHub Pages enforces HTTPS
- Your site will be secure by default

### 2. Additional Security Features (Free)
- DDoS protection
- Bot protection  
- Analytics
- Speed optimization

---

## Phase 6: Deployment Process

### Automatic Deployment
Every time you push to the main branch:
1. GitHub Actions runs the build
2. Deploys to GitHub Pages
3. Site updates automatically at chimetex.com

### Manual Deployment
```bash
# Make changes to your code
git add .
git commit -m "Update website content"
git push origin main
# Site updates automatically in 2-5 minutes
```

---

## Phase 7: Email Client Configuration

### For Receiving Emails:
- All emails automatically forward to personal Gmail
- No additional setup needed

### For Sending Emails:
**Gmail Setup:**
1. Gmail Settings → Accounts and Import
2. Add another email address: charukar@chimetex.com
3. Use Gmail's SMTP server
4. Verify ownership via forwarded email

**Mobile/Desktop Email Clients:**
```
SMTP Server: smtp.gmail.com
Port: 587 (TLS) or 465 (SSL)
Username: your-personal-gmail@gmail.com
Password: Gmail App Password
From Address: charukar@chimetex.com
```

---

## Cost Breakdown

| Service | Cost | What You Get |
|---------|------|--------------|
| **GitHub Pages** | FREE | Hosting, SSL, CDN |
| **Cloudflare Domain** | $9.77/year | chimetex.com domain |
| **Email Routing** | FREE | Unlimited email forwarding |
| **SSL Certificate** | FREE | HTTPS security |
| **CDN & Analytics** | FREE | Global performance |
| **Total Year 1** | **$9.77** | Complete professional setup |

---

## Advantages of This Setup

### ✅ **Performance**
- Global CDN via Cloudflare
- Fast loading times worldwide
- GitHub's reliable infrastructure

### ✅ **Security** 
- Free SSL certificates
- DDoS protection
- Automatic security updates

### ✅ **Reliability**
- 99.9% uptime guarantee
- Automatic backups via Git
- Redundant infrastructure

### ✅ **Scalability**
- Handles traffic spikes
- No bandwidth limits
- Professional email system

### ✅ **Developer Experience**
- Git-based deployments
- Version control
- Easy rollbacks
- Staging environments possible

---

## Alternative Email Solutions

### If you need a more professional email:

**Google Workspace Starter**
- Cost: $6/user/month ($72/year)
- Full Gmail interface
- Google Drive, Meet, Calendar
- Professional email apps

**Microsoft 365 Business Basic**  
- Cost: $5/user/month ($60/year)
- Outlook, Teams, OneDrive
- Professional features

**Zoho Mail Professional**
- Cost: $1/user/month ($12/year) 
- Budget-friendly option
- Good features for small business

---

## Next Steps

1. ✅ GitHub workflow is ready
2. ⏳ Purchase domain from Cloudflare
3. ⏳ Configure DNS records
4. ⏳ Set up email routing
5. ⏳ Test deployment

Would you like me to help you with any specific step?
