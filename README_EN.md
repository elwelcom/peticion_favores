# 🎉 Official Favor Request System 2026™

The most bureaucratic system for asking favors at your office. Free, no registration, and ready in 2 minutes!

## 🚀 Start in 2 minutes

### Windows (easiest)
1. Download the repository
2. Double-click on `INICIAR_SERVIDOR.bat`
3. Copy the URL that appears and share it

## 📋 Complete Instructions

### For you (admin)
1. Start the server (double-click on `INICIAR_SERVIDOR.bat`)
2. If Windows asks about the firewall, click **"Allow access"**, otherwise you'll need to open port 5501 so others can connect to you
3. Open `http://localhost:5501/admin.html`
4. Enter your email where you'll receive requests
5. The system detects your IP automatically
6. Save and copy the generated link
7. Share the link with your colleagues!

### For your colleagues
1. They open the link you shared
2. They accept the terms (very important and serious)
3. They watch 5 seconds of advertising to earn 1 point (favor)
4. They fill out the absurdly bureaucratic form
5. You receive an email with the request!

## 🔥 Firewall Issues

If other devices cannot access the server:

**Windows:**
1. Search for "Windows Firewall" in the start menu
2. Go to "Allow an app through firewall"
3. Look for "Node.js" or "Python" and enable them
4. Or simply click "Allow access" when Windows asks

**McAfee, Avira, Kaspersky, etc.:**
1. Open your antivirus application
2. Go to the firewall/network section
3. Allow connections for Node.js or Python

## 📂 Files

- `admin.html` - Panel to configure your email
- `Sistema_de_peticion_de_favores_fremium.html` - Form to request favors
- `server.js` / `server.py` - Local server
- `INICIAR_SERVIDOR.bat` - Start server (Windows)

## ❓ FAQ

**How much does it cost?**
Nothing. Totally free.

**Do I need to register anywhere?**
No. Just open the files and you're ready.

**Are the emails real?**
Yes, they are sent using FormSubmit.co (free up to 50 emails/month).

**Does it work on mobile?**
Yes, as long as they're on the same Wifi as your server.

**Does the server need to be always on?**
Yes, so others can access it.

## 🔧 Troubleshooting

**I can't access from another device**
→ Check that the firewall allows connections
→ Make sure you're on the same WiFi
→ Copy the URL shown by the server (don't use localhost)

**Emails don't arrive**
→ Check spam
→ The first time you need to confirm the FormSubmit.co email

**Server won't start (port occupied)**
→ Port 5501 is occupied
→ Close other applications using that port
→ Or change the port in server.js and server.py

**Server won't start**
→ Install Node.js from https://nodejs.org/

## 📝 License

MIT - Do whatever you want with this, but don't blame me for anything.

---

Made with humor and bureaucracy

## 🌐 Language / Idioma

This system is available in:
- 🇪🇸 Español (Spanish)
- 🇬🇧 English

The system automatically detects your browser's language. You can also switch languages using the flags in the top right corner of any page.
