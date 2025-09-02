/**
 * DefaultControls - Standard control components for BaseDemo
 * Provides common UI controls for CSS editing and preset selection
 */

import React, { useState, useRef, useEffect } from 'react';

/**
 * CSSEditor - Simple CSS textarea editor
 */
export const CSSEditor = ({ 
  cssContent, 
  onCssChange, 
  placeholder = "/* Enter your CSS here */",
  className = ""
}) => {
  return (
    <div className={`css-editor ${className}`}>
      <label htmlFor="css-textarea" className="block text-sm font-medium text-gray-700 mb-2">
        CSS Editor
      </label>
      <textarea
        id="css-textarea"
        value={cssContent}
        onChange={(e) => onCssChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-64 p-3 border border-gray-300 rounded-md font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        style={{ resize: 'vertical', minHeight: '200px' }}
      />
    </div>
  );
};

/**
 * PresetSelector - Dropdown for CSS presets
 */
export const PresetSelector = ({ 
  presets, 
  selectedPreset, 
  onPresetSelect, 
  showPresets = true,
  className = ""
}) => {
  if (!showPresets || presets.length === 0) {
    return null;
  }

  return (
    <div className={`preset-selector ${className}`}>
      <label htmlFor="preset-select" className="block text-sm font-medium text-gray-700 mb-2">
        CSS Presets
      </label>
      <select
        id="preset-select"
        value={selectedPreset}
        onChange={(e) => onPresetSelect(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {presets.map(preset => (
          <option key={preset} value={preset}>
            {preset.charAt(0).toUpperCase() + preset.slice(1).replace(/([A-Z])/g, ' $1')}
          </option>
        ))}
      </select>
    </div>
  );
};

/**
 * SimpleControls - Basic controls with CSS editor and preset selector
 */
export const SimpleControls = ({ 
  cssContent,
  onCssChange,
  presets = [],
  selectedPreset,
  onPresetSelect,
  showPresets = true,
  className = ""
}) => {
  return (
    <div className={`simple-controls space-y-4 ${className}`}>
      {showPresets && presets.length > 0 && (
        <PresetSelector
          presets={presets}
          selectedPreset={selectedPreset}
          onPresetSelect={onPresetSelect}
          showPresets={showPresets}
        />
      )}
      <CSSEditor
        cssContent={cssContent}
        onCssChange={onCssChange}
      />
    </div>
  );
};

/**
 * TabbedControls - Controls with tabbed interface
 */
export const TabbedControls = ({ 
  cssContent,
  onCssChange,
  presets = [],
  selectedPreset,
  onPresetSelect,
  showPresets = true,
  customTabs = [],
  className = ""
}) => {
  const [activeTab, setActiveTab] = useState('editor');
  
  const tabs = [
    { id: 'editor', label: 'CSS Editor', icon: '📝' },
    ...(showPresets && presets.length > 0 ? [{ id: 'presets', label: 'Presets', icon: '🎨' }] : []),
    ...customTabs
  ];

  return (
    <div className={`tabbed-controls ${className}`}>
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'editor' && (
          <CSSEditor
            cssContent={cssContent}
            onCssChange={onCssChange}
          />
        )}
        
        {activeTab === 'presets' && showPresets && (
          <div className="presets-tab">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {presets.map(preset => (
                <button
                  key={preset}
                  onClick={() => onPresetSelect(preset)}
                  className={`p-3 border rounded-lg text-left transition-colors ${
                    selectedPreset === preset
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-medium">
                    {preset.charAt(0).toUpperCase() + preset.slice(1).replace(/([A-Z])/g, ' $1')}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Custom tabs content would be rendered here */}
        {customTabs.map(tab => {
          if (activeTab === tab.id && tab.component) {
            const TabComponent = tab.component;
            return <TabComponent key={tab.id} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

/**
 * CollapsibleControls - Controls that can be collapsed/expanded
 */
export const CollapsibleControls = ({ 
  cssContent,
  onCssChange,
  presets = [],
  selectedPreset,
  onPresetSelect,
  showPresets = true,
  title = "Controls",
  defaultExpanded = true,
  className = ""
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className={`collapsible-controls border border-gray-200 rounded-lg ${className}`}>
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 text-left font-medium text-gray-800 hover:bg-gray-50 flex items-center justify-between"
      >
        <span>{title}</span>
        <span className={`transform transition-transform ${expanded ? 'rotate-90' : ''}`}>
          ▶
        </span>
      </button>
      
      {/* Content */}
      {expanded && (
        <div className="p-4 border-t border-gray-200">
          <SimpleControls
            cssContent={cssContent}
            onCssChange={onCssChange}
            presets={presets}
            selectedPreset={selectedPreset}
            onPresetSelect={onPresetSelect}
            showPresets={showPresets}
          />
        </div>
      )}
    </div>
  );
};

/**
 * ResponsiveControls - Controls with responsive layout options
 */
export const ResponsiveControls = ({ 
  cssContent,
  onCssChange,
  presets = [],
  selectedPreset,
  onPresetSelect,
  showPresets = true,
  onViewportChange,
  currentViewport = 'desktop',
  className = ""
}) => {
  const viewports = [
    { id: 'mobile', label: 'Mobile', icon: '📱', width: '375px' },
    { id: 'tablet', label: 'Tablet', icon: '📱', width: '768px' },
    { id: 'desktop', label: 'Desktop', icon: '💻', width: '100%' }
  ];

  return (
    <div className={`responsive-controls space-y-4 ${className}`}>
      {/* Viewport Selector */}
      {onViewportChange && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Viewport Size
          </label>
          <div className="flex gap-2">
            {viewports.map(viewport => (
              <button
                key={viewport.id}
                onClick={() => onViewportChange(viewport)}
                className={`px-3 py-2 text-sm rounded-md flex items-center gap-2 transition-colors ${
                  currentViewport === viewport.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{viewport.icon}</span>
                {viewport.label}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Standard Controls */}
      <SimpleControls
        cssContent={cssContent}
        onCssChange={onCssChange}
        presets={presets}
        selectedPreset={selectedPreset}
        onPresetSelect={onPresetSelect}
        showPresets={showPresets}
      />
    </div>
  );
};