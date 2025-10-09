# 🚀 Quick Start Guide - ChimeTex.com Deployment

## YOUR NEXT STEPS (Follow in Order):

---

## 1️⃣ ENABLE GITHUB PAGES (Do This Right Now!)

**Click this link:** https://github.com/hashen-ruwanpura/ChimeTex/settings/pages

**What to do:**
1. Under "Build and deployment"
2. **Source:** Select "**GitHub Actions**" from dropdown
3. Click **Save**

**Then check deployment:**
- Go to: https://github.com/hashen-ruwanpura/ChimeTex/actions
- You'll see "Deploy to GitHub Pages" workflow
- Wait 2-5 minutes for green checkmark ✅
- Your site will be live at: **https://hashen-ruwanpura.github.io/ChimeTex/**

---

## 2️⃣ BUY DOMAIN FROM CLOUDFLARE ($9.77/year)

**Click this link:** https://dash.cloudflare.com/

**Steps:**
1. Sign up or log in to Cloudflare
2. Click "**Domain Registration**" in left sidebar
3. Search for: **chimetex.com**
4. Add to cart and checkout (~$9.77/year)

**If chimetex.com is taken, try:**
- chimetexintl.com
- chimetex.co  
- chimetex.net

---

## 3️⃣ SET UP FREE EMAIL (After buying domain)

**In your Cloudflare dashboard:**

1. Select your domain (chimetex.com)
2. Go to "**Email**" → "**Email Routing**"
3. Click "**Enable Email Routing**"
4. Add destination email: `charuka@gmail.com` (or personal email)
5. Verify the email (check inbox)

**Create email addresses:**
```
charukar@chimetex.com → charuka@gmail.com
info@chimetex.com → charuka@gmail.com
sales@chimetex.com → charuka@gmail.com
```

---

## 4️⃣ CONNECT DOMAIN TO GITHUB PAGES

### Part A: In GitHub
1. Go to: https://github.com/hashen-ruwanpura/ChimeTex/settings/pages
2. Under "**Custom domain**", enter: `chimetex.com`
3. Click **Save**
4. Check "**Enforce HTTPS**" (might need to wait 24hrs)

### Part B: In Cloudflare DNS
1. Go to your domain in Cloudflare
2. Click "**DNS**" → "**Records**"
3. Delete any existing A or CNAME records for `@` and `www`

**Add these 5 records:**

**Record 1-4 (Root domain A records):**
```
Type: A, Name: @, Content: 185.199.108.153, Proxy: ON
Type: A, Name: @, Content: 185.199.109.153, Proxy: ON
Type: A, Name: @, Content: 185.199.110.153, Proxy: ON
Type: A, Name: @, Content: 185.199.111.153, Proxy: ON
```

**Record 5 (WWW subdomain):**
```
Type: CNAME
Name: www
Content: hashen-ruwanpura.github.io
Proxy: ON (Orange cloud)
```

---

## 5️⃣ CONFIGURE SSL (In Cloudflare)

1. Go to "**SSL/TLS**" in Cloudflare
2. Set mode to: "**Full (strict)**"
3. Go to "**SSL/TLS**" → "**Edge Certificates**"
4. Enable "**Always Use HTTPS**"
5. Enable "**Automatic HTTPS Rewrites**"

---

## 6️⃣ WAIT & TEST (24-48 hours for DNS)

**What to test after 24-48 hours:**

✅ Visit https://chimetex.com (should load your site)  
✅ Visit https://www.chimetex.com (should also work)  
✅ Check for green lock icon (SSL working)  
✅ Send email to charukar@chimetex.com  
✅ Check it arrives in Gmail  
✅ Test all pages work correctly

---

## 7️⃣ SET UP GMAIL SENDING (Optional)

**To send emails FROM Gmail as charukar@chimetex.com:**

1. Open Gmail
2. Settings → "**Accounts and Import**"
3. "**Send mail as**" → "**Add another email address**"
4. Enter: `charukar@chimetex.com`
5. Follow verification steps
6. Now you can send as charukar@chimetex.com from Gmail!

---

## ⏱️ TIMELINE

| Step | Time |
|------|------|
| Enable GitHub Pages | 5 minutes |
| Buy Domain | 5 minutes |
| Set up Email Routing | 10 minutes |
| Configure DNS | 10 minutes |
| **Wait for DNS propagation** | **24-48 hours** |
| Test everything | 15 minutes |

---

## 💰 COSTS

| Item | Cost |
|------|------|
| GitHub Pages | **FREE** |
| Domain (chimetex.com) | **$9.77/year** |
| Email (unlimited) | **FREE** |
| SSL Certificate | **FREE** |
| CDN & Security | **FREE** |
| **TOTAL** | **$9.77/year** |

---

## 🆘 TROUBLESHOOTING

**Website not loading?**
- Wait 24-48 hours for DNS propagation
- Double-check DNS records in Cloudflare
- Verify custom domain is set in GitHub Pages settings

**Email not working?**
- Confirm destination email is verified
- Check spam folder
- Wait for DNS propagation

**SSL error?**
- Wait 24 hours after DNS setup
- Make sure "Enforce HTTPS" is enabled
- Check SSL mode is "Full (strict)"

---

## ✅ SUCCESS CHECKLIST

Mark these when done:

- [ ] GitHub Pages workflow running successfully
- [ ] Domain purchased from Cloudflare
- [ ] Email routing enabled and verified
- [ ] DNS records added to Cloudflare
- [ ] Custom domain added to GitHub Pages
- [ ] SSL configured in Cloudflare
- [ ] Website loads at https://chimetex.com
- [ ] Email forwarding works
- [ ] All pages tested and working

---

## 📞 NEED HELP?

**If you get stuck:**
1. Check SETUP_CHECKLIST.md for detailed instructions
2. Check DEPLOYMENT_GUIDE.md for technical details
3. GitHub Pages Docs: https://docs.github.com/en/pages
4. Cloudflare Support: https://support.cloudflare.com/

---

## 🎉 WHAT YOU GET

✅ Professional website at chimetex.com  
✅ Free SSL certificate (HTTPS)  
✅ Global CDN (fast worldwide)  
✅ Professional email addresses  
✅ Automatic deployments  
✅ Version control via Git  
✅ 99.9% uptime guarantee  
✅ DDoS protection  
✅ Free analytics  

**All for just $9.77/year! 🎯**

---

**START NOW:** Go to https://github.com/hashen-ruwanpura/ChimeTex/settings/pages and enable GitHub Pages!
