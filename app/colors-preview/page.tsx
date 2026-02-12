"use client";

import { useState } from "react";

export default function ColorsPreview() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground py-16 px-4 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <h1 className="text-5xl font-bold mb-4">Color System Preview</h1>
              <p className="text-lg text-muted-foreground">
                Complete design system color palette
              </p>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          {/* Custom Figma Design Colors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">
              Custom Design Colors (Figma)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ColorCard
                name="Cream Light"
                className="bg-cream-light"
                textClassName="text-brown-darker"
                tailwind="bg-cream-light"
                hex="#fff2d6"
              />
              <ColorCard
                name="Cream Dark"
                className="bg-cream-dark"
                textClassName="text-brown-darker"
                tailwind="bg-cream-dark"
                hex="#FFF2D6"
              />
              <ColorCard
                name="Brown Dark"
                className="bg-brown-dark"
                textClassName="text-cream-light"
                tailwind="bg-brown-dark"
                hex="#5e2a16"
              />
              <ColorCard
                name="Brown Darker"
                className="bg-brown-darker"
                textClassName="text-cream-light"
                tailwind="bg-brown-darker"
                hex="#5E2A16"
              />
              <ColorCard
                name="Brown Medium"
                className="bg-brown-medium"
                textClassName="text-cream-light"
                tailwind="bg-brown-medium"
                hex="#463e2d"
              />
              <ColorCard
                name="Brown Medium Alt"
                className="bg-brown-medium-alt"
                textClassName="text-cream-light"
                tailwind="bg-brown-medium-alt"
                hex="#463E2D"
              />
              <ColorCard
                name="Brown Muted"
                className="bg-brown-muted"
                textClassName="text-cream-light"
                tailwind="bg-brown-muted"
                hex="#28271f"
              />
              <ColorCard
                name="Gray Dark"
                className="bg-gray-dark"
                textClassName="text-white"
                tailwind="bg-gray-dark"
                hex="#555"
              />
              <ColorCard
                name="Teal Muted"
                className="bg-teal-muted"
                textClassName="text-white"
                tailwind="bg-teal-muted"
                hex="#3c5d64"
              />
              <ColorCard
                name="Black Soft"
                className="bg-black-soft"
                textClassName="text-white"
                tailwind="bg-black-soft"
                hex="#141414"
              />
            </div>
          </section>

          {/* Input & Form Colors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Input & Form Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ColorCard
                name="Input Background"
                className="bg-input-background"
                textClassName="text-foreground"
                tailwind="bg-input-background"
              />
              <ColorCard
                name="Switch Background"
                className="bg-switch-background"
                textClassName="text-foreground"
                tailwind="bg-switch-background"
              />
              <ColorCard
                name="Border"
                className="bg-border"
                textClassName="text-foreground"
                tailwind="bg-border"
              />
            </div>
          </section>

          {/* Usage Examples */}
          <section>
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl shadow-xl p-8 md:p-12 text-primary-foreground">
              <h2 className="text-3xl font-bold mb-6">Usage Examples</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">UI Components</h3>
                  <div className="space-y-2 text-sm font-mono bg-black/20 p-4 rounded-lg">
                    <div>bg-background text-foreground</div>
                    <div>bg-primary text-primary-foreground</div>
                    <div>bg-card text-card-foreground</div>
                    <div>bg-muted text-muted-foreground</div>
                    <div>border-border</div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Custom Colors</h3>
                  <div className="space-y-2 text-sm font-mono bg-black/20 p-4 rounded-lg">
                    <div>bg-cream-light text-brown-darker</div>
                    <div>bg-brown-dark text-cream-light</div>
                    <div>bg-teal-muted text-white</div>
                    <div>bg-chart-1 (for data viz)</div>
                    <div>bg-sidebar text-sidebar-foreground</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Component Examples */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Component Examples</h2>

            {/* Buttons */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90">
                  Primary Button
                </button>
                <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:opacity-90">
                  Secondary Button
                </button>
                <button className="px-6 py-3 bg-destructive text-destructive-foreground rounded-lg font-medium hover:opacity-90">
                  Destructive Button
                </button>
                <button className="px-6 py-3 bg-brown-dark text-cream-light rounded-lg font-medium hover:opacity-90">
                  Custom Brown
                </button>
                <button className="px-6 py-3 bg-teal-muted text-white rounded-lg font-medium hover:opacity-90">
                  Custom Teal
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-4">Cards</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card text-card-foreground p-6 rounded-lg border border-border shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Default Card</h4>
                  <p className="text-muted-foreground">
                    Using card background with border
                  </p>
                </div>
                <div className="bg-muted text-muted-foreground p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Muted Card</h4>
                  <p>Subtle background for less emphasis</p>
                </div>
                <div className="bg-cream-light text-brown-darker p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Custom Card</h4>
                  <p>Using Figma design colors</p>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Alerts</h3>
              <div className="space-y-4">
                <div className="bg-accent text-accent-foreground p-4 rounded-lg border-l-4 border-primary">
                  <strong>Info:</strong> This is an informational message using
                  accent colors.
                </div>
                <div className="bg-destructive/10 text-destructive p-4 rounded-lg border-l-4 border-destructive">
                  <strong>Error:</strong> This is an error message using
                  destructive colors.
                </div>
                <div className="bg-brown-muted text-cream-light p-4 rounded-lg border-l-4 border-brown-dark">
                  <strong>Custom:</strong> This is a custom alert using Figma
                  design colors.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

interface ColorCardProps {
  name: string;
  className: string;
  textClassName: string;
  tailwind: string;
  hex?: string;
}

function ColorCard({
  name,
  className,
  textClassName,
  tailwind,
  hex,
}: ColorCardProps) {
  return (
    <div
      className={`${className} ${textClassName} p-6 rounded-xl shadow-lg transition-transform hover:scale-105 cursor-pointer`}
    >
      <h3 className="font-bold text-lg mb-2">{name}</h3>
      <code className="text-xs opacity-80 block mb-1">{tailwind}</code>
      {hex && <code className="text-xs opacity-60 block">{hex}</code>}
    </div>
  );
}
