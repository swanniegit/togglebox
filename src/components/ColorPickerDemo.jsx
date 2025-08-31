import React, { useState, useCallback } from 'react';
import { ColorPicker } from './ColorPicker';
import { IframePreview } from './IframePreview';
import { SampleHtmlTemplate } from './SampleHtmlTemplate';
import './ColorPickerDemo.css';

/**
 * ColorPickerDemo - Demonstrates ColorPicker integration with IframePreview
 * 
 * Features:
 * - Real-time color updates in preview
 * - Multiple CSS properties (color, background-color, border-color)
 * - Integration with existing SampleHtmlTemplate
 */
export const ColorPickerDemo = () => {
  const [colors, setColors] = useState({
    textColor: '#000000',
    backgroundColor: '#ffffff',
    borderColor: '#cccccc'
  });

  const [activeProperty, setActiveProperty] = useState('textColor');

  // Handle color changes from ColorPicker
  const handleColorChange = useCallback((rgbColor, property, hexValue) => {
    if (property && colors.hasOwnProperty(property)) {
      setColors(prev => ({
        ...prev,
        [property]: hexValue
      }));
    }
  }, [colors]);

  const handleColorPickerChange = useCallback((hexValue) => {
    setColors(prev => ({
      ...prev,
      [activeProperty]: hexValue
    }));
  }, [activeProperty]);

  // Generate CSS for the preview
  const generatePreviewCSS = useCallback(() => {
    return `
      /* Base styling */
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 20px;
        color: ${colors.textColor};
        background-color: ${colors.backgroundColor};
      }

      /* Headers */
      h1, h2, h3 {
        color: ${colors.textColor};
        margin-bottom: 1rem;
      }

      /* Paragraphs */
      p {
        margin-bottom: 1rem;
        color: ${colors.textColor};
      }

      /* Buttons */
      .btn {
        background-color: ${colors.borderColor};
        color: ${colors.textColor};
        border: 2px solid ${colors.borderColor};
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        margin: 5px;
        transition: all 0.2s;
      }

      .btn:hover {
        background-color: ${colors.textColor};
        color: ${colors.backgroundColor};
      }

      /* Cards */
      .card {
        background-color: ${colors.backgroundColor};
        border: 2px solid ${colors.borderColor};
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      /* Lists */
      ul li {
        color: ${colors.textColor};
        margin-bottom: 0.5rem;
      }

      /* Links */
      a {
        color: ${colors.borderColor};
        text-decoration: none;
      }

      a:hover {
        color: ${colors.textColor};
        text-decoration: underline;
      }

      /* Form elements */
      input, textarea {
        border: 2px solid ${colors.borderColor};
        color: ${colors.textColor};
        background-color: ${colors.backgroundColor};
        padding: 8px;
        border-radius: 4px;
        margin: 5px;
      }

      input:focus, textarea:focus {
        outline: none;
        border-color: ${colors.textColor};
      }
    `;
  }, [colors]);

  const propertyLabels = {
    textColor: 'Text Color',
    backgroundColor: 'Background Color',
    borderColor: 'Accent Color'
  };

  return (
    <div className="color-picker-demo">
      <div className="demo-header">
        <h2>Color Picker with Real-Time Preview</h2>
        <p>Select a color property to modify, then use the color picker to see real-time changes in the preview.</p>
      </div>

      <div className="demo-layout">
        <div className="demo-controls">
          <div className="property-selector">
            <h3>Select Property to Modify:</h3>
            <div className="property-buttons">
              {Object.entries(propertyLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveProperty(key)}
                  className={`property-btn ${activeProperty === key ? 'active' : ''}`}
                  style={{
                    backgroundColor: activeProperty === key ? colors[key] : 'transparent',
                    color: activeProperty === key ? 'white' : colors[key],
                    border: `2px solid ${colors[key]}`
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="color-picker-container">
            <h3>Color Picker:</h3>
            <ColorPicker
              value={colors[activeProperty]}
              onChange={handleColorPickerChange}
              onColorChange={handleColorChange}
              property={activeProperty}
              backgroundColor={activeProperty === 'textColor' ? colors.backgroundColor : '#ffffff'}
              showVisualPicker={true}
              showSliders={true}
              presets={[
                '#FF0000', '#00FF00', '#0000FF',
                '#FFFF00', '#FF00FF', '#00FFFF',
                '#000000', '#808080', '#FFFFFF'
              ]}
            />
          </div>

          <div className="current-colors">
            <h3>Current Colors:</h3>
            <div className="color-swatches">
              {Object.entries(colors).map(([key, color]) => (
                <div key={key} className="color-swatch-item">
                  <div 
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                  <span className="color-label">{propertyLabels[key]}</span>
                  <span className="color-value">{color}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="demo-preview">
          <h3>Live Preview:</h3>
          <IframePreview
            htmlContent={SampleHtmlTemplate}
            cssContent={generatePreviewCSS()}
            height="600px"
          />
        </div>
      </div>

    </div>
  );
};

export default ColorPickerDemo;