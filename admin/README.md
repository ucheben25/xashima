# XASHIMA Website Content Management Guide & Admin Panel

This guide provides instructions for managing content on the XASHIMA website.

---

## 1. Interactive Admin Portal

The website includes an interactive, browser-based administrative dashboard located at:
**`admin/index.html`**

- **Access Passcode:** `xashima2026`
- **Features:**
  - Full CRUD management for Services (11 services), Leadership (5 executives), Projects, Insights, Milestones, and Contact Information.
  - Image selector and real-time live preview.
  - JSON data export, backup, and restore capabilities.
  - Factory reset to default data state.

---

## 2. Quick File Map

| Content Area | File to Edit | Key Section / Details |
| :--- | :--- | :--- |
| **Interactive Admin** | `admin/index.html` | Browser-based CMS portal |
| **Central Site Data** | `js/site-data.js` | Central JSON state models & defaults |
| **Homepage Hero & Banner** | `index.html` | `<section class="hero">` |
| **About Company & Leadership** | `about.html` | 5 Executives & 4 Milestones |
| **Services Overview (11 Services)** | `services.html` | `.services-grid-3col` |
| **Service Detail Pages** | `services/` folder | `services/*.html` (11 service pages) |
| **Projects Portfolio** | `projects.html` | `.projects-grid` |
| **Insights & Articles** | `insights.html` | `.insights-grid` & `#article1Detail` |
| **Contact & Offices** | `contact.html` & Footers | Abayi Head Office & Osisioma Branch |
| **Brand Colors & Theme** | `css/style.css` | `:root` section |
| **Navigation Links** | All HTML files | `<nav class="nav-menu">` |

---

## 2. How to Edit Website Colors & Styling

Open `css/style.css` in any text editor (such as Notepad or VS Code):

```css
:root {
  /* Primary Red Accent */
  --color-primary-red: #D62828;
  --color-primary-red-hover: #B91C1C;
  --color-primary-red-light: #FEE2E2;

  /* Background Colors */
  --bg-main: #FFFFFF;
  --bg-surface: #FAFAFA;
}
```
Change `#D62828` to any hex color code of your choice to update the accent color across all buttons, active navigation, badges, and icons simultaneously.

---

## 3. How to Add or Change Images

1. Copy your new image file into the `img/` folder.
2. Open the target HTML file (e.g., `index.html` or `projects.html`).
3. Locate the `<img>` tag and update the `src` attribute:

```html
<img src="./img/your-new-image-name.jpg" alt="Description of Project">
```

---

## 4. How to Update Phone Numbers & Contact Details

1. Open `contact.html` and `index.html`.
2. Locate the phone links:
```html
<a href="tel:+2348000000000">+234 800 XASHIMA</a>
```
3. Update the `tel:` attribute and the text displayed on screen.

---

## 5. How to Add a New Project Card

Open `projects.html` and duplicate one of the existing `.project-card` blocks inside `.projects-grid`:

```html
<div class="project-card" data-category="renovation">
  <div class="project-image-container">
    <span class="project-category-tag">Renovation</span>
    <img src="./img/your-image.jpg" alt="Project Title" class="project-image">
  </div>
  <div class="project-body">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-location">&#128205; Location | Status: Completed</p>
    <p class="project-summary">Project description...</p>
  </div>
</div>
```

---

## 6. How to Deploy to Hosting

Since the website consists of static files:
1. Upload all files (`index.html`, `css/`, `js/`, `img/`, `services/`, etc.) directly to any static web host (such as GitHub Pages, Netlify, Vercel, cPanel, or AWS S3).
2. No server-side installation or database setup is required.
