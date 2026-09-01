# XASHIMA — Civil Engineering, Building Renovation & Security Services Website

Welcome to the official **XASHIMA** website codebase.

This project is a multi-page website constructed using **HTML5, CSS3, and Vanilla JavaScript**. It requires zero framework compilers, node dependencies, or database backends to run.

---

## 🚀 How to Open & Run the Website

### Method 1: Direct File Opening (Easiest)
Double-click `index.html` in your file explorer to open the website directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari.

---

### Method 2: Running a Local Web Server (Optional)
If you prefer running a local HTTP server:

1. Open your terminal or Command Prompt in the project folder (`xashima`).
2. Run the built-in Python web server command:
   ```bash
   python -m http.server
   ```
3. Open your web browser and navigate to:
   ```text
   http://localhost:8000
   ```

---

## 📁 Project Architecture

```text
xashima/
│
├── index.html                 # Homepage
├── about.html                 # Company History, Mission, Values & Leadership
├── services.html              # Core Services Overview
├── projects.html             # Projects Portfolio & Interactive Lightbox
├── insights.html             # Knowledge Hub & Articles Reader
├── careers.html              # Job Openings & Application Form
├── contact.html              # Contact Details, Copy-Phone, WhatsApp & Form
├── quote.html                # Request a Quote / BOQ Multi-Field Form
├── faq.html                  # Frequently Asked Questions Accordion
├── privacy.html              # Corporate Privacy Policy
├── terms.html                # Website Terms & Conditions
│
├── services/                 # Detailed Service Profile Pages
│   ├── building-renovation.html
│   ├── roofing.html
│   ├── quantity-surveying.html
│   ├── security-doors.html
│   ├── cctv-installation.html
│   ├── building-maintenance.html
│   ├── electrical-engineering.html
│   ├── building-plastering.html
│   ├── pop-installation.html
│   └── water-connection.html
│
├── css/                      # CSS Design System
│   ├── style.css             # Color Tokens, Resets & Base Typography
│   ├── components.css        # Buttons, Header, Cards, Modals, Lightbox
│   └── responsive.css        # Mobile, Tablet & Large Display Queries
│
├── js/                       # Modular Vanilla JavaScript
│   ├── theme.js              # Light/Dark Theme Switcher (localStorage)
│   ├── navigation.js         # Sticky Header & Mobile Drawer Navigation
│   ├── forms.js              # Client-Side Form Validation & Feedback
│   ├── projects.js           # Portfolio Category Filtering & Lightbox
│   └── main.js               # Active Nav, Accordions & Copy Utilities
│
├── img/                      # 79 High-Resolution Site Image Assets
├── sitemap.xml               # SEO XML Sitemap
├── robots.txt                # Search Engine Crawler Guidance
│
├── admin/
│   └── README.md             # Non-Technical Content Editing Guide
└── README.md                 # Project Documentation
```

---

## 🎨 Color Palette & Visual Identity

The website follows a **White + Red** corporate identity:
- **Primary Background**: White (`#FFFFFF`) / Sleek Dark (`#0F0F11` in dark mode)
- **Primary Brand Accent**: Red (`#D62828`)
- **Hover Red Accent**: Dark Red (`#B91C1C`)
- **Text & Neutrals**: Dark Slate (`#18181B`) for text readability in light mode; Slate (`#F4F4F5`) in dark mode.

---

## 📄 License & Compliance

&copy; 2026 XASHIMA Engineering & Renovation Services. All rights reserved.
