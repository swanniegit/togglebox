import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ColorPicker } from '../ColorPicker';

describe('ColorPicker Component', () => {
  const defaultProps = {
    value: '#FF0000',
    onChange: jest.fn(),
    onColorChange: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders without crashing', () => {
      render(<ColorPicker {...defaultProps} />);
      expect(screen.getByRole('group', { name: /color picker/i })).toBeInTheDocument();
    });

    test('displays current color value', () => {
      render(<ColorPicker {...defaultProps} value="#00FF00" />);
      expect(screen.getByDisplayValue('#00FF00')).toBeInTheDocument();
    });

    test('renders color preview', () => {
      render(<ColorPicker {...defaultProps} />);
      const preview = screen.getByTestId('color-preview');
      expect(preview).toBeInTheDocument();
      expect(preview).toHaveStyle('background-color: rgb(255, 0, 0)');
    });

    test('renders HEX input by default', () => {
      render(<ColorPicker {...defaultProps} showVisualPicker={false} />);
      
      // Check for HEX input (default mode)
      expect(screen.getByLabelText(/hex/i)).toBeInTheDocument();
      
      // RGB and HSV inputs should not be visible by default
      expect(screen.queryByLabelText(/red/i)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/hue/i)).not.toBeInTheDocument();
    });

    test('renders visual color picker when showVisualPicker is true', () => {
      render(<ColorPicker {...defaultProps} showVisualPicker={true} />);
      expect(screen.getByTestId('visual-color-picker')).toBeInTheDocument();
    });

    test('hides visual color picker when showVisualPicker is false', () => {
      render(<ColorPicker {...defaultProps} showVisualPicker={false} />);
      expect(screen.queryByTestId('visual-color-picker')).not.toBeInTheDocument();
    });
  });

  describe('Color Input Modes', () => {
    test('allows switching between input modes', async () => {
      const user = userEvent.setup();
      render(<ColorPicker {...defaultProps} />);
      
      // Switch to RGB mode
      await user.click(screen.getByText('RGB'));
      expect(screen.getAllByLabelText(/red/i)[0]).toBeVisible();
      
      // Switch to HSV mode
      await user.click(screen.getByText('HSV'));
      expect(screen.getAllByLabelText(/hue/i)[0]).toBeVisible();
      
      // Switch back to HEX mode
      await user.click(screen.getByText('HEX'));
      expect(screen.getByLabelText(/hex/i)).toBeVisible();
    });

    test('maintains color value when switching between modes', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} value="#FF8040" onChange={onChange} />);
      
      // Switch to RGB mode
      await user.click(screen.getByText('RGB'));
      
      // Check RGB values are correct for #FF8040
      expect(screen.getAllByDisplayValue('255')[0]).toBeInTheDocument(); // Red input
      expect(screen.getByDisplayValue('128')).toBeInTheDocument(); // Green
      expect(screen.getByDisplayValue('64')).toBeInTheDocument();  // Blue
      
      // Switch to HSV mode
      await user.click(screen.getByText('HSV'));
      
      // HSV values should be calculated correctly
      const hueInput = screen.getAllByLabelText(/hue/i)[0];
      const saturationInput = screen.getAllByLabelText(/saturation/i)[0];
      const valueInput = screen.getAllByLabelText(/value/i)[0];
      
      expect(hueInput.value).toBe('20'); // Approximately 20 degrees
      expect(saturationInput.value).toBe('75'); // 75% saturation
      expect(valueInput.value).toBe('100'); // 100% value
    });
  });

  describe('HEX Input', () => {
    test('handles valid HEX input', async () => {
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} onChange={onChange} />);
      
      const hexInput = screen.getByLabelText(/hex/i);
      
      // Simulate direct value change instead of typing character by character
      fireEvent.change(hexInput, { target: { value: '#00FF00' } });
      
      expect(onChange).toHaveBeenLastCalledWith('#00FF00');
    });

    test('handles HEX input without hash', async () => {
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} onChange={onChange} />);
      
      const hexInput = screen.getByLabelText(/hex/i);
      fireEvent.change(hexInput, { target: { value: '00FF00' } });
      
      expect(onChange).toHaveBeenLastCalledWith('#00FF00');
    });

    test('handles 3-character HEX input', async () => {
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} onChange={onChange} />);
      
      const hexInput = screen.getByLabelText(/hex/i);
      fireEvent.change(hexInput, { target: { value: '#0F0' } });
      
      expect(onChange).toHaveBeenLastCalledWith('#00FF00');
    });

    test('shows error for invalid HEX input', async () => {
      const user = userEvent.setup();
      render(<ColorPicker {...defaultProps} />);
      
      const hexInput = screen.getByLabelText(/hex/i);
      await user.clear(hexInput);
      await user.type(hexInput, 'invalid');
      
      expect(screen.getByText(/invalid hex color/i)).toBeInTheDocument();
    });
  });

  describe('RGB Inputs', () => {
    test('handles RGB input changes', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} onChange={onChange} />);
      
      // Switch to RGB mode
      await user.click(screen.getByText('RGB'));
      
      // Change red value
      const redInput = screen.getAllByLabelText(/red/i)[0];
      await user.clear(redInput);
      await user.type(redInput, '128');
      
      expect(onChange).toHaveBeenCalledWith('#800000');
    });

    test('validates RGB input ranges', async () => {
      const user = userEvent.setup();
      render(<ColorPicker {...defaultProps} />);
      
      // Switch to RGB mode
      await user.click(screen.getByText('RGB'));
      
      // Try to enter invalid value
      const redInput = screen.getAllByLabelText(/red/i)[0];
      await user.clear(redInput);
      await user.type(redInput, '300');
      
      expect(screen.getByText(/value must be between 0 and 255/i)).toBeInTheDocument();
    });

    test('handles RGB slider interactions', async () => {
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} onChange={onChange} showSliders={true} />);
      
      // Switch to RGB mode
      await userEvent.click(screen.getByText('RGB'));
      
      // Find and interact with red slider
      const redSlider = screen.getByLabelText(/red slider/i);
      fireEvent.change(redSlider, { target: { value: '128' } });
      
      expect(onChange).toHaveBeenCalledWith('#800000');
    });
  });

  describe('HSV Inputs', () => {
    test('handles HSV input changes', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} onChange={onChange} />);
      
      // Switch to HSV mode
      await user.click(screen.getByText('HSV'));
      
      // Change hue value
      const hueInput = screen.getAllByLabelText(/hue/i)[0];
      await user.clear(hueInput);
      await user.type(hueInput, '120');
      
      expect(onChange).toHaveBeenCalledWith('#00FF00');
    });

    test('validates HSV input ranges', async () => {
      const user = userEvent.setup();
      render(<ColorPicker {...defaultProps} />);
      
      // Switch to HSV mode
      await user.click(screen.getByText('HSV'));
      
      // Try to enter invalid hue value
      const hueInput = screen.getAllByLabelText(/hue/i)[0];
      await user.clear(hueInput);
      await user.type(hueInput, '400');
      
      expect(screen.getByText(/hue must be between 0 and 360/i)).toBeInTheDocument();
    });

    test('handles HSV slider interactions', async () => {
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} onChange={onChange} showSliders={true} />);
      
      // Switch to HSV mode
      await userEvent.click(screen.getByText('HSV'));
      
      // Find and interact with hue slider
      const hueSlider = screen.getByLabelText(/hue slider/i);
      fireEvent.change(hueSlider, { target: { value: '120' } });
      
      expect(onChange).toHaveBeenCalledWith('#00FF00');
    });
  });

  describe('Visual Color Picker', () => {
    test('renders color wheel when visual picker is enabled', () => {
      render(<ColorPicker {...defaultProps} showVisualPicker={true} />);
      expect(screen.getByTestId('color-wheel')).toBeInTheDocument();
    });

    test('handles color wheel interactions', () => {
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} onChange={onChange} showVisualPicker={true} />);
      
      const colorWheel = screen.getByTestId('color-wheel');
      
      // Simulate click on color wheel
      fireEvent.click(colorWheel, { clientX: 100, clientY: 100 });
      
      expect(onChange).toHaveBeenCalled();
    });

    test('renders lightness slider when visual picker is enabled', () => {
      render(<ColorPicker {...defaultProps} showVisualPicker={true} />);
      expect(screen.getByTestId('lightness-slider')).toBeInTheDocument();
    });

    test('handles lightness slider interactions', () => {
      const onChange = jest.fn();
      render(<ColorPicker {...defaultProps} onChange={onChange} showVisualPicker={true} />);
      
      const lightnessSlider = screen.getByTestId('lightness-slider');
      fireEvent.change(lightnessSlider, { target: { value: '50' } });
      
      expect(onChange).toHaveBeenCalled();
    });
  });

  describe('Accessibility Features', () => {
    test('shows contrast ratio when background color is provided', () => {
      render(<ColorPicker {...defaultProps} backgroundColor="#FFFFFF" />);
      expect(screen.getByText(/contrast ratio/i)).toBeInTheDocument();
    });

    test('shows WCAG compliance status', () => {
      render(<ColorPicker {...defaultProps} backgroundColor="#FFFFFF" value="#000000" />);
      expect(screen.getByText('WCAG AA: ✓')).toBeInTheDocument();
    });

    test('provides keyboard navigation for visual picker', () => {
      render(<ColorPicker {...defaultProps} showVisualPicker={true} />);
      const colorWheel = screen.getByTestId('color-wheel');
      expect(colorWheel).toHaveAttribute('tabindex', '0');
    });

    test('provides screen reader labels', () => {
      render(<ColorPicker {...defaultProps} showVisualPicker={true} />);
      expect(screen.getByLabelText(/color wheel/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/lightness slider/i)).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    test('handles invalid prop values gracefully', () => {
      const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
      
      render(<ColorPicker value="invalid-color" onChange={jest.fn()} />);
      
      expect(consoleSpy).toHaveBeenCalledWith(
        'ColorPicker: Could not parse color value:',
        'invalid-color'
      );
      
      consoleSpy.mockRestore();
    });

    test('provides fallback when color parsing fails', () => {
      render(<ColorPicker value="invalid" onChange={jest.fn()} />);
      
      // Should fall back to black
      const preview = screen.getByTestId('color-preview');
      expect(preview).toHaveStyle('background-color: rgb(0, 0, 0)');
    });
  });

  describe('Integration with onColorChange callback', () => {
    test('calls onColorChange with RGB object', async () => {
      const onColorChange = jest.fn();
      render(<ColorPicker {...defaultProps} onColorChange={onColorChange} />);
      
      const hexInput = screen.getByLabelText(/hex/i);
      fireEvent.change(hexInput, { target: { value: '#00FF00' } });
      
      expect(onColorChange).toHaveBeenLastCalledWith({
        r: 0,
        g: 255,
        b: 0
      }, undefined, '#00FF00');
    });

    test('provides color information for CSS injection', async () => {
      const onColorChange = jest.fn();
      render(<ColorPicker {...defaultProps} onColorChange={onColorChange} property="color" />);
      
      const hexInput = screen.getByLabelText(/hex/i);
      fireEvent.change(hexInput, { target: { value: '#FF8040' } });
      
      expect(onColorChange).toHaveBeenLastCalledWith(
        { r: 255, g: 128, b: 64 },
        'color',
        '#FF8040'
      );
    });
  });

  describe('Presets and Saved Colors', () => {
    test('renders color presets when provided', () => {
      const presets = ['#FF0000', '#00FF00', '#0000FF'];
      render(<ColorPicker {...defaultProps} presets={presets} />);
      
      presets.forEach(color => {
        expect(screen.getByTitle(color)).toBeInTheDocument();
      });
    });

    test('allows selecting preset colors', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      const presets = ['#FF0000', '#00FF00', '#0000FF'];
      render(<ColorPicker {...defaultProps} onChange={onChange} presets={presets} />);
      
      await user.click(screen.getByTitle('#00FF00'));
      expect(onChange).toHaveBeenCalledWith('#00FF00');
    });
  });
});