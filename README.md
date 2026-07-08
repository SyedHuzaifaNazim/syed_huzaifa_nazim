# 🌌 Ultra-Premium Cyber-Minimalist Portfolio

A state-of-the-art personal portfolio showcasing the work, skills, and experience of **Syed Huzaifa Nazim**. Built using **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**, this portfolio leverages modern glassmorphic aesthetics, fluid 3D tilt interactions, and a custom theme engine to deliver an immersive user experience.

---

## ✨ Features

- **🛡️ Custom Selector-Based Theme Engine**: Seamless light and dark mode switching utilizing a custom Tailwind v4 selector-based variant system (`@custom-variant dark`) that resolves React client-side hydration issues and aligns manually chosen preferences without conflict.
- **🍱 Asymmetrical Bento Grid About Section**: Dynamic layout organizing education details, quick biography cards, and interactive statistics.
- **🌀 3D Tilt Panels & Orbiting Rings**: Floating badges, interactive cards, and profile images that respond dynamically to cursor movement with fluid physics using custom Framer Motion spring hooks.
- **📈 Circular Proficiency Indicators**: Visual, theme-aware circular progress meters for technical skills, complete with category tab filtering.
- **📅 Glowing Timeline Work History**: Interactive experience cards tracking professional achievements at *TaxFilerz & Co.* and *Freelance & Contract* with timeline connectors and hover-glow highlights.
- **💼 Premium Projects Showcase**: Categorized list of production-ready projects with overlay gradient borders, preview cards, code link redirects, and dynamic project details.
- **📄 Interactive Glassmorphic Resume Viewer**: Integrated client-side PDF document previewer using `react-pdf` and `pdfjs-dist`, complete with print, download, and fullscreen capabilities.
- **✉️ Secure Contact Form**: Sleek, validated inputs with immediate feedback, connected directly to **EmailJS** for instant message delivery.

---

## 🛠️ Tech Stack

| Category | Technologies Used |
| :--- | :--- |
| **Framework & Engine** | Next.js 16 (App Router, Turbopack), React 19 |
| **Styling & Animations** | Tailwind CSS v4, HSL Design Tokens, Framer Motion, Vanilla CSS (Glassmorphism) |
| **Libraries & APIs** | `react-icons` (Hi2 pack), `react-type-animation`, `@emailjs/browser` |
| **Document Processing** | `react-pdf` (v10), `pdfjs-dist` (v5) |
| **Design Tools** | Figma |

---

## 📁 Folder Structure

```text
syed-huzaifa-nazim/
├── public/                 # Static assets
│   ├── assets/             # Project screenshots, profile photos, and graphics
│   └── Syed-Huzaifa-*.pdf  # CV/Resume PDF files
├── src/
│   ├── app/                # Next.js App Router (Layouts, pages, globals.css)
│   ├── components/         # Reusable glassmorphic UI components
│   │   ├── About.jsx       # Bento grid Bio and Stats
│   │   ├── Contact.jsx     # Form with EmailJS integration
│   │   ├── Experience.jsx  # Glowing timeline cards
│   │   ├── Hero.jsx        # Landing hero with 3D tilts and animated orbit rings
│   │   ├── Navbar.jsx      # Expanding Dynamic Island floating menu
│   │   ├── Projects.jsx    # Projects grid and overlays
│   │   ├── Resume.jsx      # Inline client PDF viewer
│   │   ├── Skills.jsx      # Skills circular proficiency widgets
│   │   └── ThemeToggle.jsx # Theme switch button
│   └── context/            # React Context Providers (ThemeContext)
├── package.json            # Scripts and dependencies
└── next.config.mjs         # Next.js configurations
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Make sure you have Node.js (v18+) installed on your machine.

### ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SyedHuzaifaNazim/syed_huzaifa_nazim.git
   cd syed_huzaifa_nazim/syed-huzaifa-nazim
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root folder to connect the Contact form with EmailJS:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 📦 Production Build

To build the project for production and verify optimizations:
```bash
npm run build
npm run start
```

---

## 🎨 Theme Customization

The theme utilizes custom Tailwind CSS v4 selector-based dark mode rules. The primary style definitions reside in `src/app/globals.css`. You can customize the colors by adjusting the HSL variables:

```css
:root {
  --bg-color: #fafafa;
  --text-primary: #0f172a;
  --primary: #4f46e5;      /* Indigo */
  --secondary: #d946ef;    /* Magenta */
  --accent: #10b981;       /* Emerald */
  /* ... */
}

.dark {
  --bg-color: #030712;
  --text-primary: #f8fafc;
  --primary: #6366f1;
  /* ... */
}
```

---

## 📝 License

This project is licensed under the MIT License. Feel free to use it to build your own portfolio.
