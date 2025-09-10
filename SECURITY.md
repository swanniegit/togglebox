# PayFast Security Deployment Guide

## 🔒 Secure Deployment Steps

### 1. Move Config File (CRITICAL)
Move `/config/payfast.php` outside your web directory:
```bash
# On your server, move to private location
mv /public_html/config/payfast.php /private/config/payfast.php
# Or: /home/username/private/payfast.php
```

### 2. Update API Path
Edit `/public/api/payfast/create-payment.php` line 31:
```php
// Change from:
$config = include '../config/payfast-config.php';
// To (your actual private path):
$config = include '/private/config/payfast.php';
```

### 3. File Permissions (Plesk)
Set strict permissions:
- Config file: `600` (owner read/write only)
- API files: `644` (standard web files)

### 4. Additional Security Measures

#### A. IP Whitelisting
Only allow PayFast IPs to access your ITN endpoint.

#### B. Rate Limiting
Prevent abuse of payment API (already included in config).

#### C. HTTPS Only
Ensure all PayFast URLs use HTTPS.

#### D. Log Monitoring
Monitor failed payment attempts.

## ⚠️ Security Risks by Method

### Current Solution (SECURE ✅)
- Frontend: No credentials exposed
- Backend: Credentials in private config file
- Risk Level: **LOW**

### Previous Method (INSECURE ❌)  
- Frontend: Credentials in JavaScript source
- Risk Level: **HIGH** - Anyone can see your PayFast credentials

## 🚨 Emergency Actions
If credentials are compromised:
1. Change PayFast Merchant Key immediately
2. Update config file with new credentials
3. Monitor transactions for unauthorized payments
4. Contact PayFast support if needed

## ✅ Verification Checklist
- [ ] Config file moved outside web directory
- [ ] API updated to use new config path
- [ ] File permissions set correctly
- [ ] Test payment flow works
- [ ] No credentials visible in browser source
- [ ] ITN endpoint receiving notifications