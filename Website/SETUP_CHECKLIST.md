# ChimeTex.com Setup Checklist

## ✅ Step 1: GitHub Pages Configuration (Do This Now!)

### Enable GitHub Pages:
1. Go to: https://github.com/hashen-ruwanpura/ChimeTex/settings/pages
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions" (not Deploy from a branch)
3. Click "Save"

### Wait for Deployment:
1. Go to: https://github.com/hashen-ruwanpura/ChimeTex/actions
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait 2-5 minutes for it to complete (green checkmark)
4. Your site will be live at: https://hashen-ruwanpura.github.io/ChimeTex/

---

## 📋 Step 2: Buy Domain from Cloudflare (~$9.77/year)

### Purchase Domain:
1. Go to: https://www.cloudflare.com/
2. Click "Sign Up" or "Log In"
3. Navigate to "Domain Registration" in the left sidebar
4. Search for: **chimetex.com**
5. If available, add to cart and complete purchase (~$9.77/year)
6. If not available, try alternatives:
   - chimetexintl.com
   - chimetex.co
   - chimetex.net

### After Purchase:
- Domain will be automatically added to your Cloudflare account
- DNS management will be available immediately
- Email routing can be set up right away

---

## 📧 Step 3: Set Up Email Routing (FREE - Unlimited)

### Enable Email Routing:
1. In Cloudflare dashboard, select your domain (chimetex.com)
2. Go to "Email" → "Email Routing"
3. Click "Get started" or "Enable Email Routing"
4. Follow the setup wizard

### Add Destination Email:
1. Add Charuka's personal email as destination (e.g., charuka@gmail.com)
2. Verify the email address (check inbox for verification link)

### Create Email Addresses:
1. Add custom addresses:
   ```
   charukar@chimetex.com → charuka@gmail.com
   info@chimetex.com → charuka@gmail.com
   sales@chimetex.com → charuka@gmail.com
   support@chimetex.com → charuka@gmail.com
   ```

### Configure Sending Email (Gmail):
1. Open Gmail settings
2. Go to "Accounts and Import"
3. Click "Add another email address"
4. Enter: charukar@chimetex.com
5. Follow verification steps
6. Now you can send emails from Gmail as charukar@chimetex.com

---

## 🌐 Step 4: Connect Domain to GitHub Pages

### In GitHub Repository Settings:
1. Go to: https://github.com/hashen-ruwanpura/ChimeTex/settings/pages
2. Under "Custom domain", enter: **chimetex.com**
3. Click "Save"
4. Check "Enforce HTTPS" (wait 24 hours if not available immediately)

### In Cloudflare DNS Settings:
1. Go to your domain in Cloudflare
2. Navigate to "DNS" → "Records"
3. Delete any existing A or CNAME records for @ and www

### Add These DNS Records:

#### For Root Domain (@):
```
Type: A
Name: @
IPv4 address: 185.199.108.153
Proxy status: Proxied (Orange cloud ON)
TTL: Auto

Type: A
Name: @
IPv4 address: 185.199.109.153
Proxy status: Proxied (Orange cloud ON)
TTL: Auto

Type: A
Name: @
IPv4 address: 185.199.110.153
Proxy status: Proxied (Orange cloud ON)
TTL: Auto

Type: A
Name: @
IPv4 address: 185.199.111.153
Proxy status: Proxied (Orange cloud ON)
TTL: Auto
```

#### For WWW Subdomain:
```
Type: CNAME
Name: www
Target: hashen-ruwanpura.github.io
Proxy status: Proxied (Orange cloud ON)
TTL: Auto
```

### Create CNAME File (Important!):
GitHub needs to know your custom domain. Let's create the file:

---

## 🔒 Step 5: Configure SSL & Security

### SSL Certificate (Automatic):
1. In Cloudflare, go to "SSL/TLS"
2. Set encryption mode to: **Full (strict)**
3. Enable "Always Use HTTPS"
4. Enable "Automatic HTTPS Rewrites"

### Additional Security:
1. Enable "Auto Minify" for HTML, CSS, JS
2. Enable "Brotli" compression
3. Set up "Page Rules" for caching (optional)

---

## 📊 Step 6: Set Up Analytics & Monitoring

### Cloudflare Analytics (Free):
- Automatically available in your Cloudflare dashboard
- Shows traffic, threats blocked, bandwidth saved

### Google Analytics (Optional):
1. Create Google Analytics account
2. Add tracking code to your website
3. Monitor visitor statistics

---

## ✉️ Step 7: Test Everything

### Test Website:
- [ ] Visit https://chimetex.com
- [ ] Visit https://www.chimetex.com
- [ ] Check SSL certificate (lock icon in browser)
- [ ] Test all pages and links
- [ ] Test contact form
- [ ] Test on mobile devices

### Test Email:
- [ ] Send test email TO: charukar@chimetex.com
- [ ] Verify it arrives in personal Gmail
- [ ] Send email FROM Gmail as charukar@chimetex.com
- [ ] Verify recipient sees chimetex.com address

---

## 📝 Important Notes

### DNS Propagation:
- DNS changes can take 24-48 hours to fully propagate
- Your site might not work immediately on custom domain
- Be patient! It will work eventually

### GitHub Pages Limits:
- 100GB bandwidth/month (more than enough)
- 1GB repository size (plenty for your site)
- No cost, completely free!

### Email Forwarding Limits:
- Unlimited email addresses
- Unlimited forwards
- No storage (forwards immediately)
- Completely FREE

---

## 🎯 Expected Timeline

| Step | Time Required |
|------|---------------|
| GitHub Pages Setup | 5-10 minutes |
| Domain Purchase | 5 minutes |
| Email Routing Setup | 10 minutes |
| DNS Configuration | 10 minutes |
| **DNS Propagation** | **24-48 hours** |
| SSL Certificate | Automatic after DNS |
| Testing | 15 minutes |

---

## 💰 Total Cost Summary

| Service | Cost | Frequency |
|---------|------|-----------|
| GitHub Pages Hosting | FREE | Forever |
| Cloudflare Domain | $9.77 | Annual |
| Email Routing | FREE | Forever |
| SSL Certificate | FREE | Forever |
| CDN & Security | FREE | Forever |
| **TOTAL** | **$9.77/year** | **Annual** |

---

## 🆘 Troubleshooting

### Website not loading on custom domain?
- Wait 24-48 hours for DNS propagation
- Check DNS records are correct in Cloudflare
- Verify custom domain is set in GitHub Pages settings

### Emails not being forwarded?
- Verify destination email is confirmed
- Check spam folder
- Ensure MX records are set correctly (Cloudflare does this automatically)

### SSL Certificate error?
- Wait 24 hours after DNS setup
- Ensure "Enforce HTTPS" is enabled in GitHub
- Check SSL mode is "Full (strict)" in Cloudflare

---

## 📞 Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Cloudflare Support: https://support.cloudflare.com/
- Email Routing Guide: https://developers.cloudflare.com/email-routing/

---

## ✅ Success Criteria

Your setup is complete when:
- [ ] Website loads at https://chimetex.com
- [ ] Website loads at https://www.chimetex.com
- [ ] SSL certificate shows as valid (green lock)
- [ ] Emails sent to charukar@chimetex.com arrive in Gmail
- [ ] Can send emails from Gmail as charukar@chimetex.com
- [ ] All website pages and features work correctly

---

**Next Action:** Follow Step 1 above to enable GitHub Pages!
