import React from 'react';

export default function AccessibilityPanel({ info }) {
  if (!info) return null;
  const { contrastRatio, wcagAA, wcagAALarge, wcagAAA } = info;
  return (
    <div className="accessibility-info">
      <div className="accessibility-title">Accessibility</div>
      <div className="contrast-info">
        <span>Contrast Ratio: {contrastRatio}:1</span>
        <div className="wcag-compliance">
          <span className={wcagAA ? 'wcag-pass' : 'wcag-fail'}>
            WCAG AA: {wcagAA ? '✓' : '✗'}
          </span>
          <span className={wcagAALarge ? 'wcag-pass' : 'wcag-fail'}>
            AA Large: {wcagAALarge ? '✓' : '✗'}
          </span>
          <span className={wcagAAA ? 'wcag-pass' : 'wcag-fail'}>
            WCAG AAA: {wcagAAA ? '✓' : '✗'}
          </span>
        </div>
      </div>
    </div>
  );
}


