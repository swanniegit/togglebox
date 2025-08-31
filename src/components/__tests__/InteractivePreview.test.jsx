import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { InteractivePreview } from '../InteractivePreview';

// Mock the IframePreview component
jest.mock('../IframePreview', () => ({
  IframePreview: jest.fn(({ htmlContent, cssContent, onLoad, onError }) => (
    <div data-testid="mock-iframe-preview">
      <div data-testid="html-content">{htmlContent}</div>
      <div data-testid="css-content">{cssContent}</div>
      <button onClick={() => onLoad && onLoad()} data-testid="trigger-load">
        Trigger Load
      </button>
      <button onClick={() => onError && onError('Mock error')} data-testid="trigger-error">
        Trigger Error
      </button>
    </div>
  ))
}));

// Mock the ColorPicker component
jest.mock('../ColorPicker', () => ({
  ColorPicker: jest.fn(({ value, onChange, className }) => (
    <div data-testid={className} data-value={value}>
      <input
        type="color"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        data-testid={`${className}-input`}
      />
    </div>
  ))
}));

describe('InteractivePreview Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders without crashing', () => {
      render(<InteractivePreview />);
      expect(screen.getByTestId('interactive-preview')).toBeInTheDocument();
    });

    test('renders all control sections', () => {
      render(<InteractivePreview />);
      
      expect(screen.getByText('Card Properties')).toBeInTheDocument();
      expect(screen.getByText('Button Properties')).toBeInTheDocument();
      expect(screen.getByText('Text & Layout')).toBeInTheDocument();
    });

    test('renders all card property sliders', () => {
      render(<InteractivePreview />);
      
      expect(screen.getByTestId('card-border-radius-slider')).toBeInTheDocument();
      expect(screen.getByTestId('card-padding-slider')).toBeInTheDocument();
      expect(screen.getByTestId('card-shadow-slider')).toBeInTheDocument();
      expect(screen.getByTestId('card-border-width-slider')).toBeInTheDocument();
    });

    test('renders all button property sliders', () => {
      render(<InteractivePreview />);
      
      expect(screen.getByTestId('button-border-radius-slider')).toBeInTheDocument();
      expect(screen.getByTestId('button-padding-x-slider')).toBeInTheDocument();
      expect(screen.getByTestId('button-padding-y-slider')).toBeInTheDocument();
      expect(screen.getByTestId('button-font-size-slider')).toBeInTheDocument();
      expect(screen.getByTestId('button-shadow-slider')).toBeInTheDocument();
    });

    test('renders text and layout controls', () => {
      render(<InteractivePreview />);
      
      expect(screen.getByTestId('text-font-size-slider')).toBeInTheDocument();
      expect(screen.getByTestId('heading-font-size-slider')).toBeInTheDocument();
      expect(screen.getByTestId('line-height-slider')).toBeInTheDocument();
      expect(screen.getByTestId('container-padding-slider')).toBeInTheDocument();
      expect(screen.getByTestId('element-spacing-slider')).toBeInTheDocument();
    });

    test('renders color pickers', () => {
      render(<InteractivePreview />);
      
      expect(screen.getByTestId('card-color-picker')).toBeInTheDocument();
      expect(screen.getByTestId('button-color-picker')).toBeInTheDocument();
      expect(screen.getByTestId('text-color-picker')).toBeInTheDocument();
    });

    test('renders preset buttons', () => {
      render(<InteractivePreview />);
      
      expect(screen.getByTestId('preset-default')).toBeInTheDocument();
      expect(screen.getByTestId('preset-modern')).toBeInTheDocument();
      expect(screen.getByTestId('preset-minimal')).toBeInTheDocument();
    });
  });

  describe('Slider Interactions', () => {
    test('updates card border radius when slider changes', async () => {
      render(<InteractivePreview />);
      
      const slider = screen.getByTestId('card-border-radius-slider');
      
      // Use fireEvent.change for range inputs
      fireEvent.change(slider, { target: { value: '12' } });
      
      expect(slider.value).toBe('12');
      
      // Check that the label updates
      expect(screen.getByText('Border Radius: 12px')).toBeInTheDocument();
    });

    test('updates button padding when sliders change', async () => {
      render(<InteractivePreview />);
      
      const paddingXSlider = screen.getByTestId('button-padding-x-slider');
      const paddingYSlider = screen.getByTestId('button-padding-y-slider');
      
      fireEvent.change(paddingXSlider, { target: { value: '20' } });
      fireEvent.change(paddingYSlider, { target: { value: '10' } });
      
      expect(paddingXSlider.value).toBe('20');
      expect(paddingYSlider.value).toBe('10');
      
      expect(screen.getByText('Horizontal Padding: 20px')).toBeInTheDocument();
      expect(screen.getByText('Vertical Padding: 10px')).toBeInTheDocument();
    });

    test('updates text properties when sliders change', async () => {
      render(<InteractivePreview />);
      
      const fontSizeSlider = screen.getByTestId('text-font-size-slider');
      const lineHeightSlider = screen.getByTestId('line-height-slider');
      
      fireEvent.change(fontSizeSlider, { target: { value: '18' } });
      fireEvent.change(lineHeightSlider, { target: { value: '1.6' } });
      
      expect(fontSizeSlider.value).toBe('18');
      expect(lineHeightSlider.value).toBe('1.6');
      
      expect(screen.getByText('Text Size: 18px')).toBeInTheDocument();
      expect(screen.getByText('Line Height: 1.6')).toBeInTheDocument();
    });
  });

  describe('Color Picker Interactions', () => {
    test('updates card background color', async () => {
      const user = userEvent.setup();
      render(<InteractivePreview />);
      
      const colorInput = screen.getByTestId('card-color-picker-input');
      await user.clear(colorInput);
      await user.type(colorInput, '#ff0000');
      
      // Check that the color picker received the new value
      expect(screen.getByTestId('card-color-picker')).toHaveAttribute('data-value', '#ff0000');
    });

    test('updates button background color', async () => {
      const user = userEvent.setup();
      render(<InteractivePreview />);
      
      const colorInput = screen.getByTestId('button-color-picker-input');
      await user.clear(colorInput);
      await user.type(colorInput, '#00ff00');
      
      expect(screen.getByTestId('button-color-picker')).toHaveAttribute('data-value', '#00ff00');
    });

    test('updates text color', async () => {
      const user = userEvent.setup();
      render(<InteractivePreview />);
      
      const colorInput = screen.getByTestId('text-color-picker-input');
      await user.clear(colorInput);
      await user.type(colorInput, '#0000ff');
      
      expect(screen.getByTestId('text-color-picker')).toHaveAttribute('data-value', '#0000ff');
    });
  });

  describe('Preset Buttons', () => {
    test('applies default preset when clicked', async () => {
      const user = userEvent.setup();
      render(<InteractivePreview />);
      
      // Change some values first
      const borderRadiusSlider = screen.getByTestId('card-border-radius-slider');
      await user.clear(borderRadiusSlider);
      await user.type(borderRadiusSlider, '20');
      
      // Apply default preset
      await user.click(screen.getByTestId('preset-default'));
      
      // Check that values reset to default
      expect(borderRadiusSlider.value).toBe('8');
      expect(screen.getByText('Border Radius: 8px')).toBeInTheDocument();
    });

    test('applies modern preset when clicked', async () => {
      const user = userEvent.setup();
      render(<InteractivePreview />);
      
      await user.click(screen.getByTestId('preset-modern'));
      
      // Check that values changed to modern preset
      const borderRadiusSlider = screen.getByTestId('card-border-radius-slider');
      expect(borderRadiusSlider.value).toBe('16');
      expect(screen.getByText('Border Radius: 16px')).toBeInTheDocument();
    });

    test('applies minimal preset when clicked', async () => {
      const user = userEvent.setup();
      render(<InteractivePreview />);
      
      await user.click(screen.getByTestId('preset-minimal'));
      
      // Check that values changed to minimal preset
      const borderRadiusSlider = screen.getByTestId('card-border-radius-slider');
      const shadowSlider = screen.getByTestId('card-shadow-slider');
      
      expect(borderRadiusSlider.value).toBe('2');
      expect(shadowSlider.value).toBe('0');
    });
  });

  describe('CSS Generation', () => {
    test('generates CSS based on property values', () => {
      render(<InteractivePreview />);
      
      // Check that CSS content is generated and passed to IframePreview
      const cssContent = screen.getByTestId('css-content');
      expect(cssContent.textContent).toContain('.preview-card');
      expect(cssContent.textContent).toContain('.preview-button');
      expect(cssContent.textContent).toContain('.preview-text');
    });

    test('updates CSS when properties change', async () => {
      const user = userEvent.setup();
      render(<InteractivePreview />);
      
      const borderRadiusSlider = screen.getByTestId('card-border-radius-slider');
      await user.clear(borderRadiusSlider);
      await user.type(borderRadiusSlider, '15');
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('border-radius: 15px');
      });
    });
  });

  describe('Error Handling', () => {
    test('handles iframe load events', async () => {
      const user = userEvent.setup();
      render(<InteractivePreview />);
      
      await user.click(screen.getByTestId('trigger-load'));
      
      // Should not show loading indicator after load
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    test('handles iframe error events', async () => {
      const user = userEvent.setup();
      render(<InteractivePreview />);
      
      await user.click(screen.getByTestId('trigger-error'));
      
      // Should show error message
      expect(screen.getByText('Failed to load preview content')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    test('provides proper labels for sliders', () => {
      render(<InteractivePreview />);
      
      expect(screen.getByText('Border Radius: 8px')).toBeInTheDocument();
      expect(screen.getByText('Padding: 16px')).toBeInTheDocument();
      expect(screen.getByText('Shadow: 5px')).toBeInTheDocument();
    });

    test('has proper test IDs for automation', () => {
      render(<InteractivePreview />);
      
      expect(screen.getByTestId('interactive-preview')).toBeInTheDocument();
      expect(screen.getByTestId('card-border-radius-slider')).toBeInTheDocument();
      expect(screen.getByTestId('button-color-picker')).toBeInTheDocument();
    });
  });
});