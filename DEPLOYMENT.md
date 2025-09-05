# ToggleBox Deployment Guide - www.togglebox.co.za

## 📦 Files to Upload to Plesk

Upload these files from the `dist/` folder to your domain's document root:

### Required Files:
- `index.html` → `/public_html/index.html`
- `assets/` folder → `/public_html/assets/` 
- `.htaccess` → `/public_html/.htaccess`
- `api/` folder → `/public_html/api/`

## 🔧 Plesk Configuration

### 1. Document Root
Make sure your domain points to the folder containing `index.html`

### 2. PHP Settings (for email functionality)
- Enable PHP 8.0+ 
- Ensure `mail()` function is enabled
- Check that outgoing emails are not blocked

### 3. File Permissions
Set proper permissions:
- `api/email/send-confirmation.php` → 755
- `.htaccess` → 644

## 📧 Email System

### Demo Mode (Works Immediately)
- Emails auto-confirm after 2 seconds
- Confirmation URLs show in browser console
- Good for testing deployment

### Production Mode (Real Emails)
- Uses PHP `mail()` function via `/api/email/send-confirmation.php`
- Automatically detects www.togglebox.co.za domain
- Falls back to demo mode if email fails

## 🧪 Testing Deployment

1. Visit `https://www.togglebox.co.za`
2. Navigate to "Stylesheet Builder" (`/interactive`)
3. Try exporting CSS - email modal should appear
4. Enter test email and submit
5. Check if email arrives or auto-confirmation happens

## 🚀 Going Live

### URLs that should work:
- `https://www.togglebox.co.za/` (Landing page)
- `https://www.togglebox.co.za/interactive` (Main tool)
- `https://www.togglebox.co.za/color-picker` (Color picker)
- `https://www.togglebox.co.za/confirm/abc123` (Email confirmation)

### Email From Address
Emails will be sent from: `noreply@togglebox.co.za`

### File Downloads Include:
- `six-cards-stylesheet.css` (Main CSS file)
- `index.html` (Demo page)  
- `agent-instructions.md` (AI integration guide)

## 🔍 Troubleshooting

**If emails don't work:**
- Check PHP mail configuration in Plesk
- Verify domain email settings
- System falls back to demo mode automatically

**If routing doesn't work:**
- Ensure `.htaccess` is uploaded and working
- Check Apache mod_rewrite is enabled

**If downloads don't start:**
- Check browser console for errors
- Verify JavaScript is enabled
- Test with different browsers

## 📊 Features Active After Deployment

✅ **Email Registration System** - Replaces paywall completely
✅ **Free Downloads** - All exports available after email confirmation  
✅ **Multi-file Downloads** - CSS, HTML, and instructions included
✅ **Responsive Design** - Works on all devices
✅ **Real-time Preview** - Secure iframe-based CSS preview
✅ **Multiple Demos** - Color picker, gradient builder, card system

---

**Need help?** Check browser console for debugging info or contact support.