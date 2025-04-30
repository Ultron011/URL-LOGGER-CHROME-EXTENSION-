# 🔗 URL Logger - Chrome Extension

**URL Logger** is a lightweight Chrome extension that tracks and logs your browsing activity. When enabled, it records every URL you visit directly in your browser.

---

## 🚀 Features

- Start/Stop logging with a simple toggle
- Real-time tracking of visited URLs
- Stores logs locally in the browser
- Clean and minimal popup interface

---

## 🛠 How to Install (Developer Mode)

1. Download or clone this repository.
2. Go to `chrome://extensions/` in your Chrome browser.
3. Enable **Developer mode** (top right).
4. Click **"Load unpacked"** and select the project folder.
5. Click the extension icon and toggle logging!

---

## 📦 Project Files

url-logger/ ├── manifest.json ├── background.js ├── popup.html ├── popup.js ├── style.css └── README.md


---

## 🔐 Permissions Used

- `tabs`: Detect active tab URL
- `storage`: Save URLs locally
- `scripting`: (if used to interact with tab content)

---

## 🧠 Notes

- All data is stored **locally** and not shared.
- Ideal for developers, testers, or users who want a simple browsing log.

---
