# Rushabhayan

A Next.js project with a custom design system featuring local fonts and a comprehensive color palette.

---

## 🚀 Getting Started

### Prerequisites

- Node.js v22.21.1 (managed via nvm)
- npm v10.9.4

### Setup & Run

1. **Use the correct Node version:**

   ```bash
   nvm use
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Main app: [http://localhost:3000](http://localhost:3000)
   - Font preview: [http://localhost:3000/fonts-preview](http://localhost:3000/fonts-preview)
   - Color preview: [http://localhost:3000/colors-preview](http://localhost:3000/colors-preview)

---

## 🎨 Design System

### Typography

We use two custom font families loaded locally from `/public/assets/fonts/`:

#### **Didot** (Serif)

Elegant serif typeface — Perfect for headlines and luxury branding

- **Regular** (400)
- **Bold** (700)
- **Italic** (400, italic style)
- **Title** (separate variant)

**Usage:**

```tsx
<h1 className="font-didot">Elegant Headline</h1>
<h1 className="font-didot font-bold">Bold Headline</h1>
<p className="font-didot italic">Italic text</p>
<h1 className="font-didot-title">Title Variant</h1>
```

#### **Manrope** (Sans-serif)

Modern sans-serif typeface — Perfect for body text and UI elements

Available in 7 weights:

- **ExtraLight** (200) - `font-extralight`
- **Light** (300) - `font-light`
- **Regular** (400) - `font-normal`
- **Medium** (500) - `font-medium`
- **SemiBold** (600) - `font-semibold`
- **Bold** (700) - `font-bold`
- **ExtraBold** (800) - `font-extrabold`

**Usage:**

```tsx
<p className="font-manrope font-light">Light text</p>
<p className="font-manrope font-semibold">SemiBold text</p>
<p className="font-manrope font-extrabold">ExtraBold text</p>
```

**Preview:** Visit [/fonts-preview](http://localhost:3000/fonts-preview) to see all font variants

---

### Color System

Our color system supports both light and dark modes with a comprehensive palette.

#### **UI Component Colors**

| Color       | Usage                | Tailwind Class    |
| ----------- | -------------------- | ----------------- |
| Background  | Main background      | `bg-background`   |
| Foreground  | Main text color      | `text-foreground` |
| Card        | Card backgrounds     | `bg-card`         |
| Primary     | Primary actions      | `bg-primary`      |
| Secondary   | Secondary actions    | `bg-secondary`    |
| Muted       | Subtle backgrounds   | `bg-muted`        |
| Accent      | Highlighted elements | `bg-accent`       |
| Destructive | Error/delete actions | `bg-destructive`  |
| Popover     | Popover backgrounds  | `bg-popover`      |

#### **Chart Colors**

For data visualization:

- `bg-chart-1` - Orange
- `bg-chart-2` - Teal
- `bg-chart-3` - Blue
- `bg-chart-4` - Yellow
- `bg-chart-5` - Amber

#### **Sidebar Colors**

- `bg-sidebar` - Sidebar background
- `bg-sidebar-primary` - Sidebar primary elements
- `bg-sidebar-accent` - Sidebar accent elements
- `bg-sidebar-border` - Sidebar borders

#### **Custom Figma Design Colors**

| Color            | Hex       | Tailwind Class        |
| ---------------- | --------- | --------------------- |
| Cream Light      | `#fff2d6` | `bg-cream-light`      |
| Cream Dark       | `#FFF2D6` | `bg-cream-dark`       |
| Brown Dark       | `#5e2a16` | `bg-brown-dark`       |
| Brown Darker     | `#5E2A16` | `bg-brown-darker`     |
| Brown Medium     | `#463e2d` | `bg-brown-medium`     |
| Brown Medium Alt | `#463E2D` | `bg-brown-medium-alt` |
| Brown Muted      | `#28271f` | `bg-brown-muted`      |
| Gray Dark        | `#555`    | `bg-gray-dark`        |
| Teal Muted       | `#3c5d64` | `bg-teal-muted`       |
| Black Soft       | `#141414` | `bg-black-soft`       |

#### **Form & Input Colors**

- `bg-input-background` - Input field backgrounds
- `bg-switch-background` - Toggle switch backgrounds
- `border-border` - Border color

**Preview:** Visit [/colors-preview](http://localhost:3000/colors-preview) to see all colors with dark mode toggle

---

## 🎯 Usage Examples

### Buttons

```tsx
<button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">
  Primary Button
</button>

<button className="px-6 py-3 bg-brown-dark text-cream-light rounded-lg">
  Custom Brown Button
</button>
```

### Cards

```tsx
<div className="bg-card text-card-foreground p-6 rounded-lg border border-border">
  <h3 className="font-didot font-bold text-xl mb-2">Card Title</h3>
  <p className="font-manrope text-muted-foreground">Card content</p>
</div>
```

### Alerts

```tsx
<div className="bg-destructive/10 text-destructive p-4 rounded-lg border-l-4 border-destructive">
  <strong>Error:</strong> This is an error message
</div>
```

---

## 📁 Project Structure

```
rushabhayan/
├── app/
│   ├── fonts-preview/       # Font preview page
│   ├── colors-preview/      # Color preview page
│   ├── globals.css          # Global styles & design tokens
│   └── layout.tsx           # Root layout
├── public/
│   └── assets/
│       └── fonts/           # Local font files
│           ├── Didot.otf
│           ├── Didot Bold.otf
│           ├── Didot Italic.otf
│           ├── Didot Title.otf
│           ├── Manrope-ExtraLight.ttf
│           ├── Manrope-Light.ttf
│           ├── Manrope-Regular.ttf
│           ├── Manrope-Medium.ttf
│           ├── Manrope-SemiBold.ttf
│           ├── Manrope-Bold.ttf
│           └── Manrope-ExtraBold.ttf
└── README.md
```

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS v4
- **Fonts:** Local custom fonts (Didot & Manrope)
- **Language:** TypeScript
- **Node:** v22.21.1

---

## 🌓 Dark Mode

The color system automatically supports dark mode. All colors adapt based on the `.dark` class applied to the root element.

**Toggle dark mode programmatically:**

```tsx
"use client";
import { useState } from "react";

export default function Component() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <button onClick={() => setIsDark(!isDark)}>Toggle Dark Mode</button>
    </div>
  );
}
```

---

## 📝 Design Tokens

All design tokens are defined as CSS custom properties in `app/globals.css`:

- **Colors:** `--background`, `--foreground`, `--primary`, etc.
- **Fonts:** `--font-didot`, `--font-didot-title`, `--font-manrope`
- **Spacing:** `--radius` (0.625rem)
- **Typography:** `--font-weight-medium` (500), `--font-weight-normal` (400)

These are automatically mapped to Tailwind utilities via the `@theme inline` directive.

---

## 🎨 Preview Pages

### Font Preview

**URL:** `/fonts-preview`

Showcases all font variants with:

- Different sizes (6xl, 4xl, 2xl, xl)
- All weights and styles
- Character sets (uppercase, lowercase, numbers)
- Usage examples with Tailwind classes

### Color Preview

**URL:** `/colors-preview`

Interactive color palette featuring:

- Light/Dark mode toggle
- All UI component colors
- Chart colors for data visualization
- Sidebar colors
- Custom Figma design colors
- Live component examples (buttons, cards, alerts)

---

## 📄 License

This project is private and proprietary.
