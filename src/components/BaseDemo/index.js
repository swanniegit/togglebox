/**
 * BaseDemo Module Index
 * Exports all components and utilities from the BaseDemo system
 */

// Main component
export { BaseDemo, DefaultExportComponent, useBaseDemo } from './BaseDemo.jsx';

// Control components
export {
  CSSEditor,
  PresetSelector,
  SimpleControls,
  TabbedControls,
  CollapsibleControls,
  ResponsiveControls
} from './DefaultControls.jsx';

// Default export
export { BaseDemo as default } from './BaseDemo.jsx';