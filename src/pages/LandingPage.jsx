import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const [demoIndex, setDemoIndex] = useState(0);

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

  // Mini demo carousel – rotates colors independently every 2.5s
  useEffect(() => {
    const id = setInterval(() => {
      setDemoIndex((prev) => (prev + 1) % colorSchemes.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  const mix = (hex1, hex2, ratio = 0.5) => {
    const toRgb = (hex) => {
      const h = hex.replace('#', '');
      const n = parseInt(h, 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    };
    const toHex = (n) => n.toString(16).padStart(2, '0');
    const a = toRgb(hex1);
    const b = toRgb(hex2);
    const r = Math.round(a.r * (1 - ratio) + b.r * ratio);
    const g = Math.round(a.g * (1 - ratio) + b.g * ratio);
    const bl = Math.round(a.b * (1 - ratio) + b.b * ratio);
    return `#${toHex(r)}${toHex(g)}${toHex(bl)}`;
  };

  const scheme = colorSchemes[schemeIndex];
  const nextScheme = colorSchemes[(schemeIndex + 1) % colorSchemes.length];
  const demoScheme = colorSchemes[demoIndex];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-1000 ${scheme.bg} ${scheme.text} font-sans`}>
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
        <div
          onClick={() => setIsRotating(true)}
          className="w-16 h-10 flex items-center justify-center rounded cursor-pointer border bg-black text-white text-xs font-medium"
        >
          Re-start
        </div>
        {isRotating && (
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-gray-200 overflow-hidden">
            <div
              className="h-2 transition-[width] duration-100 linear"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(to right, ${scheme.accent}, ${nextScheme.accent})`,
              }}
            />
          </div>
        )}
      </div>
      <p className="text-center text-xs text-gray-500 mt-4">
        Tip: Click a color to stop rotation. Use the black block to restart.
      </p>

      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">Design your site’s color system in minutes</h1>
        <p className="text-xl md:text-2xl opacity-80 mb-8">Build a production‑ready stylesheet with six cards, button states, alerts, badges, forms and more — then export.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/interactive"
            className="rounded-xl px-8 py-4 text-lg text-white"
            style={{ backgroundColor: scheme.accentDark }}
          >
            Try the Stylesheet Builder →
          </Link>
          <Link
            to="/color-picker"
            className="rounded-xl px-8 py-4 text-lg border"
            style={{ borderColor: scheme.accentDark, color: scheme.accentDark }}
          >
            Start with the Color Picker (free export)
          </Link>
        </div>
        <div className="mt-12 max-w-5xl w-full border rounded-xl shadow-sm bg-white">
          <div className="rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-lg border text-left">
                <h3 className="font-semibold mb-1">Six Card Surfaces</h3>
                <p className="text-sm opacity-80">Preview typography, spacing and gradients across six card variations.</p>
              </div>
              <div className="p-6 rounded-lg border text-left">
                <h3 className="font-semibold mb-1">Buttons & Alerts</h3>
                <p className="text-sm opacity-80">Primary, secondary, submit, ok, delete with hover states — plus alert styles.</p>
              </div>
              <div className="p-6 rounded-lg border text-left">
                <h3 className="font-semibold mb-1">Badges, Forms & Tabs</h3>
                <p className="text-sm opacity-80">Cohesive micro components that match your palette automatically.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm opacity-70">Color Picker lets you download a free HTML + CSS with your colors. For full component exports, use the Stylesheet Builder.</p>
      </section>

      <section className="py-20 px-6 border-t border-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-12">Why teams pick ToggleBox</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {[
            { title: "🎨 LEGO Builder Architecture", desc: "Atomic components and clean CSS you can drop into any stack." },
            { title: "⚡ Live Preview", desc: "Everything updates as you tweak colors — no rebuilds required." },
            { title: "⬇️ One‑click Export", desc: "CSS + demo page ready for your repo. Optional AI integration guide." },
            { title: "🧪 Accessible by default", desc: "Automatic text contrast on cards; WCAG‑friendly choices." },
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

      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">See It in Action</h2>
        <div className="max-w-4xl mx-auto border rounded-xl shadow-sm bg-white overflow-hidden">
          <div className="p-6 text-left transition-colors duration-500" style={{ borderColor: demoScheme.accent }}>
            {/* Tabs */}
            <div className="flex gap-6 border-b pb-3" style={{ borderColor: mix(demoScheme.accent, demoScheme.accentDark, 0.3) }}>
              {['Overview','Stats','Settings'].map((t, i) => (
                <button key={t} className={`text-sm font-semibold pb-2 relative ${i===0 ? '' : 'text-gray-500'}`} style={i===0 ? { color: demoScheme.accent } : {}}>
                  {t}
                  {i===0 && <span className="absolute left-0 right-0 -bottom-1 h-0.5" style={{ background: `linear-gradient(90deg, ${demoScheme.accent}, ${demoScheme.accentDark})` }} />}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Card */}
              <div className="rounded-lg border p-4 shadow-sm transition-colors duration-500" style={{ borderColor: mix(demoScheme.accent, '#cccccc', 0.3) }}>
                <h3 className="font-semibold mb-1">Demo Card</h3>
                <p className="text-sm text-gray-600 mb-4">Buttons, badges and progress all follow the active color.</p>
                <div className="flex gap-2">
                  <button className="px-3 py-2 rounded text-white text-sm" style={{ background: demoScheme.accentDark }}>Primary</button>
                  <button className="px-3 py-2 rounded text-sm" style={{ color: demoScheme.accentDark, borderColor: demoScheme.accentDark, borderWidth: 1, borderStyle: 'solid' }}>Secondary</button>
                </div>
              </div>

              {/* Badges & Progress */}
              <div className="rounded-lg border p-4 shadow-sm transition-colors duration-500" style={{ borderColor: mix(demoScheme.accent, '#cccccc', 0.3) }}>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full text-white" style={{ background: demoScheme.accent }}>New</span>
                  <span className="text-xs px-2.5 py-1 rounded-full text-white" style={{ background: mix(demoScheme.accent, '#22c55e', 0.4) }}>Success</span>
                  <span className="text-xs px-2.5 py-1 rounded-full text-white" style={{ background: mix(demoScheme.accent, '#f59e0b', 0.4) }}>Warning</span>
                </div>
                <div className="w-full h-2 rounded bg-gray-200 overflow-hidden">
                  <div className="h-2" style={{ width: '66%', background: `linear-gradient(90deg, ${demoScheme.accent}, ${demoScheme.accentDark})` }} />
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-2 rounded-lg border p-4 shadow-sm transition-colors duration-500" style={{ borderColor: mix(demoScheme.accent, '#cccccc', 0.3) }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input className="px-3 py-2 rounded border" placeholder="Your email" style={{ borderColor: mix(demoScheme.accent, '#d1d5db', 0.3) }} />
                  <select className="px-3 py-2 rounded border" style={{ borderColor: mix(demoScheme.accent, '#d1d5db', 0.3) }}>
                    <option>Pick an option</option>
                  </select>
                  <button className="px-4 py-2 rounded text-white" style={{ background: `linear-gradient(135deg, ${demoScheme.accent}, ${demoScheme.accentDark})` }}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/interactive"
          className="mt-8 inline-block rounded-xl px-8 py-4 text-lg text-white"
          style={{ backgroundColor: scheme.accentDark }}
        >
          Open Full Playground →
        </Link>
      </section>

      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Every website starts with the right colors.</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/interactive"
            className="rounded-xl px-8 py-4 text-lg text-white"
            style={{ backgroundColor: scheme.accentDark }}
          >
            Start Free →
          </Link>
        </div>
      </section>

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


