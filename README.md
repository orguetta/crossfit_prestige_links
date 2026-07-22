# CrossFit Prestige Links 🏋️‍♂️✨

A custom link-in-bio (Linktree alternative) and link shortener tailored for **CrossFit Prestige**. Built on top of **Astro** for maximum speed and performance, and designed for seamless deployment to **Cloudflare Pages**.

---

## 🚀 Key Features

- **Ultra-Fast Performance**: Built with Astro to ensure instant loading times and top-tier core web vitals.
- **Rich Link Tree**: Supports FontAwesome icons, direct WhatsApp chat integration, mobile app download links, and more.
- **Fully Responsive**: Optimized for perfect presentation on mobile, tablet, and desktop devices.
- **Style Customization**: Centrally managed styling and themes using a dedicated SCSS stylesheet.

---

## ⚙️ Configuration

To customize the links and content for your brand:

1. **Content & Links**:  
   Open and edit the config/config.ts file to update the page title, subtitle, about description, link items, and social media profiles.

2. **Styling & Colors**:  
   Modify the config/styles.scss file to customize fonts, primary colors, backgrounds, and themes.

---

## 💻 Local Development

Ensure you have a modern version of Node.js installed.

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Local Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser to: `http://localhost:4321`

3. **Verify and Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deployment

This project is configured for effortless deployment with **Cloudflare Pages**:

1. Connect your GitHub repository to your Cloudflare Pages dashboard.
2. Configure the following build settings:
   - **Framework Preset**: `Astro`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
3. Deploy and optionally assign your custom domain.

---

## 📄 License

This project is licensed under the **GNU Affero General Public License v3.0 (AGPL-3.0)**.

Under the terms of the AGPL-3.0 license, if you host modified versions of this software on a public network server to serve users, you must make the complete source code of your modified version available to those users under the same license.
