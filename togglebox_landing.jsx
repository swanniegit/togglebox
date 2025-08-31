// src/pages/LandingPage.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const colorSchemes = [
    { bg: "bg-gray-100", text: "text-gray-900", accent: "#111827", accentDark: "#000000" },
    { bg: "bg-blue-100", text: "text-blue-900", accent: "#2563eb", accentDark: "#1e3a8a" },
    { bg: "bg-green-100", text: "text-green-900", accent: "#16a34a", accentDark: "#14532d" },
    { bg: "bg-yellow-100", text: "text-yellow-900", accent: "#eab308", accentDark: "#854d0e" },
    { bg: "bg-pink-100", text: "text-pink-900", accent: "#db2777", accentDark: "#831843" },
    { bg: "bg-purple-100", text: "text-purple-900", accent: "#9333ea", accentDark: "#581c87" },
    { bg: "bg-orange-100", text: "text-orange-900", accent: "#ea580c", accentDark: "#7c2d12" },
    { bg: "bg-teal-100", text: "text-teal-900", accent: "#0d9488", accentDark: "#134e4a" },
  ];

  const [schemeIndex, setSchemeIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setSchemeIndex((prev) => (prev + 1) % colorSchemes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isRotating, colorSchemes.length]);

  useEffect(() => {
    if (!isRotating) return;
    const start = Date.now();
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - start + schemeIndex * 8000;
      const percent = Math.min((elapsed / (8000 * colorSchemes.length)) * 100, 100);
      setProgress(percent);
    }, 50);
    return () => clearInterval(progressInterval);
  }, [isRotating, schemeIndex]);

  const scheme = colorSchemes[schemeIndex];
  const nextScheme = colorSchemes[(schemeIndex + 1) % colorSchemes.length];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-1000 ${scheme.bg} ${scheme.text} font-sans`}>
      {/* Color Palette Bar */}
      <div className="flex items-center justify-between px-12 py-4 border-b border-gray-200 relative">
        {colorSchemes.map((s, idx) => (
          <div
            key={idx}
            onClick={() => {
              setSchemeIndex(idx);
              setIsRotating(false);
            }}
            className={`w-10 h-10 rounded cursor-pointer border ${idx === schemeIndex ? "ring-2 ring-offset-2 ring-gray-800" : ""} ${s.bg}`}
          />
        ))}
        {/* Ninth block: Restart */}
        <div
          onClick={() => setIsRotating(true)}
          className="w-16 h-10 flex items-center justify-center rounded cursor-pointer border bg-black text-white text-xs font-medium"
        >
          Re-start
        </div>
        {/* Progress Bar */}
        {isRotating && (
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-gray-200 overflow-hidden">
            <div
              className="h-2 transition-[width] duration-100 linear"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(to right, ${scheme.accent}, ${nextScheme.accent})`
              }}
            />
          </div>
        )}
      </div>
      <p className="text-center text-xs text-gray-500 mt-4">
        Tip: Click a color to stop rotation. Use the black block to restart.
      </p>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          ToggleBox
        </h1>
        <p className="text-xl md:text-2xl opacity-80 mb-8">
          Real-time CSS Preview Engine — simple, calm, focused on color.
        </p>
        <Button
          size="lg"
          className={`rounded-xl px-8 py-4 text-lg text-white`}
          style={{ backgroundColor: scheme.accentDark }}
        >
          Start Playing →
        </Button>
        <div className="mt-12 max-w-4xl w-full border rounded-xl shadow-sm bg-white">
          <img
            src="/demo-screenshot.png"
            alt="ToggleBox live preview"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 border-t border-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why ToggleBox?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { title: "🎨 Simple by Design", desc: "No clutter. Just a clean space to explore colors and styles." },
            { title: "⚡ Live Preview", desc: "Instantly see how your colors look on buttons, cards, and headers." },
            { title: "⬇️ Export CSS", desc: "Download clean CSS once you’re happy — ready to drop into any project." },
            { title: "🤖 Export AI Prompt", desc: "Generate a tailored AI builder prompt using your chosen palette." },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-md border text-white"
              style={{ backgroundColor: idx % 2 === 0 ? scheme.accent : scheme.accentDark }}
            >
              <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
              <p className="opacity-90">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">See It in Action</h2>
        <div className="max-w-4xl mx-auto border rounded-xl shadow-sm bg-white">
          <div className="p-10 text-gray-400">[Live Playground Demo]</div>
        </div>
        <Button
          size="lg"
          className={`mt-8 rounded-xl px-8 py-4 text-lg text-white`}
          style={{ backgroundColor: scheme.accentDark }}
        >
          Open Full Playground →
        </Button>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Every website starts with the right colors.
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className={`rounded-xl px-8 py-4 text-lg text-white`}
            style={{ backgroundColor: scheme.accentDark }}
          >
            Start Free →
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-900 text-gray-400 text-center text-sm">
        <p className="mb-4">ToggleBox — Real-time CSS Preview Engine</p>
        <div className="flex gap-6 justify-center">
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Docs</a>
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </footer>
    </div>
  );
}
