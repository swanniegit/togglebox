import React from 'react';

export default function ColorSystemPreview({ theme, buttonStyles, alertStyles, currentGradient, onUpdateButtonStyle }) {
  const primary = buttonStyles?.primary?.bg || theme?.primary;
  const primaryHover = buttonStyles?.primary?.hover || theme?.secondary;
  const secondary = buttonStyles?.secondary?.bg || theme?.secondary;
  const success = buttonStyles?.ok?.bg || theme?.success;
  const warning = theme?.warning;
  const danger = buttonStyles?.delete?.bg || theme?.danger;
  const neutral = (theme?.cardTints && theme?.cardTints[1]) || '#e5e7eb';
  const variants = [
    { key: 'primary', label: 'Primary', color: primary },
    { key: 'secondary', label: 'Secondary', color: secondary },
    { key: 'ok', label: 'Success', color: success },
    { key: 'submit', label: 'Submit', color: buttonStyles?.submit?.bg || '#3b82f6' },
    { key: 'delete', label: 'Danger', color: danger },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">🎨 Color System Preview</h3>

      {/* Buttons */}
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-700 mb-2">Buttons</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {variants.map(v => (
            <div key={v.key} className="flex items-center justify-between gap-3 p-3 rounded border">
              <button
                className="px-4 py-2 rounded-md text-white font-medium flex-1 text-left"
                style={{ background: buttonStyles?.[v.key]?.bg || v.color }}
              >
                {v.label}
              </button>
              {onUpdateButtonStyle && (
                <input
                  type="color"
                  className="w-10 h-10 rounded border cursor-pointer"
                  value={buttonStyles?.[v.key]?.bg || v.color}
                  onChange={(e) => onUpdateButtonStyle(v.key, 'bg', e.target.value)}
                  title={`${v.label} color`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Badges */}
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-700 mb-2">Badges</div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs px-2.5 py-1 rounded-full text-white" style={{ background: primary }}>New</span>
          <span className="text-xs px-2.5 py-1 rounded-full text-white" style={{ background: success }}>Success</span>
          <span className="text-xs px-2.5 py-1 rounded-full text-white" style={{ background: warning }}>Warning</span>
          <span className="text-xs px-2.5 py-1 rounded-full text-white" style={{ background: danger }}>Error</span>
          <span className="text-xs px-2.5 py-1 rounded-full text-gray-700" style={{ background: neutral }}>Neutral</span>
        </div>
      </div>

      {/* Form Controls */}
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-700 mb-2">Form Controls</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input className="px-3 py-2 rounded-md border" placeholder="Input" style={{ borderColor: '#d1d5db' }} />
          <select className="px-3 py-2 rounded-md border" style={{ borderColor: '#d1d5db' }}>
            <option>Select</option>
          </select>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" className="w-4 h-4" /> Checkbox
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <input type="radio" name="r" className="w-4 h-4" /> Radio
          </div>
        </div>
        <div className="text-xs text-gray-500 mt-2">Focus color uses your primary ({primary}).</div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-700 mb-2">Tabs</div>
        <div className="flex gap-4 border-b">
          <button className="pb-2 text-sm font-medium" style={{ borderBottom: `2px solid ${primary}`, color: primary }}>Active</button>
          <button className="pb-2 text-sm text-gray-600">Tab</button>
          <button className="pb-2 text-sm text-gray-600">Tab</button>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="text-sm font-medium text-gray-700 mb-2">Progress</div>
        <div className="w-full h-2 rounded bg-gray-200 overflow-hidden">
          <div className="h-2" style={{ width: '60%', background: `linear-gradient(90deg, ${currentGradient?.start || primary}, ${currentGradient?.end || primaryHover})` }}></div>
        </div>
      </div>

      {/* Links */}
      <div>
        <div className="text-sm font-medium text-gray-700 mb-2">Links</div>
        <a href="#" className="text-sm" style={{ color: primary }}>Link example</a>
      </div>
    </div>
  );
}


