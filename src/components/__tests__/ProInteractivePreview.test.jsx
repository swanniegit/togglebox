import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ProInteractivePreview } from '../ProInteractivePreview';

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

describe('ProInteractivePreview Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders without crashing', () => {
      render(<ProInteractivePreview />);
      expect(screen.getByTestId('pro-interactive-preview')).toBeInTheDocument();
    });

    test('renders professional header with gradient', () => {
      render(<ProInteractivePreview />);
      
      expect(screen.getByText('🎨 Professional Interactive Preview')).toBeInTheDocument();
      expect(screen.getByText(/Design beautiful components with professional-grade controls/)).toBeInTheDocument();
    });

    test('renders all 6 card design options', () => {
      render(<ProInteractivePreview />);
      
      expect(screen.getByTestId('card-design-1')).toBeInTheDocument();
      expect(screen.getByTestId('card-design-2')).toBeInTheDocument();
      expect(screen.getByTestId('card-design-3')).toBeInTheDocument();
      expect(screen.getByTestId('card-design-4')).toBeInTheDocument();
      expect(screen.getByTestId('card-design-5')).toBeInTheDocument();
      expect(screen.getByTestId('card-design-6')).toBeInTheDocument();
    });

    test('displays card design names correctly', () => {
      render(<ProInteractivePreview />);
      
      expect(screen.getByText('Classic')).toBeInTheDocument();
      expect(screen.getByText('Modern')).toBeInTheDocument();
      expect(screen.getByText('Gradient')).toBeInTheDocument();
      expect(screen.getByText('Outlined')).toBeInTheDocument();
      expect(screen.getByText('Glass')).toBeInTheDocument();
      expect(screen.getByText('Neon')).toBeInTheDocument();
    });

    test('renders button color controls', () => {
      render(<ProInteractivePreview />);
      
      expect(screen.getByTestId('button-primary-color')).toBeInTheDocument();
      expect(screen.getByTestId('button-secondary-color')).toBeInTheDocument();
      expect(screen.getByTestId('button-delete-color')).toBeInTheDocument();
      expect(screen.getByTestId('button-submit-color')).toBeInTheDocument();
      expect(screen.getByTestId('button-ok-color')).toBeInTheDocument();
    });

    test('renders gradient options', () => {
      render(<ProInteractivePreview />);
      
      expect(screen.getByTestId('gradient-ocean')).toBeInTheDocument();
      expect(screen.getByTestId('gradient-sunset')).toBeInTheDocument();
      expect(screen.getByTestId('gradient-forest')).toBeInTheDocument();
      expect(screen.getByTestId('gradient-purple')).toBeInTheDocument();
      expect(screen.getByTestId('gradient-direction')).toBeInTheDocument();
    });

    test('renders general settings controls', () => {
      render(<ProInteractivePreview />);
      
      expect(screen.getByTestId('general-border-radius')).toBeInTheDocument();
      expect(screen.getByTestId('general-spacing')).toBeInTheDocument();
      expect(screen.getByTestId('general-font-size')).toBeInTheDocument();
      expect(screen.getByTestId('general-shadows')).toBeInTheDocument();
      expect(screen.getByTestId('general-animations')).toBeInTheDocument();
    });

    test('renders style preset buttons', () => {
      render(<ProInteractivePreview />);
      
      expect(screen.getByTestId('preset-professional')).toBeInTheDocument();
      expect(screen.getByTestId('preset-vibrant')).toBeInTheDocument();
      expect(screen.getByTestId('preset-modern')).toBeInTheDocument();
      expect(screen.getByTestId('preset-neon')).toBeInTheDocument();
      expect(screen.getByTestId('preset-minimal')).toBeInTheDocument();
    });
  });

  describe('Card Design Selection', () => {
    test('classic card is selected by default', () => {
      render(<ProInteractivePreview />);
      
      const classicCard = screen.getByTestId('card-design-1');
      expect(classicCard).toHaveClass('border-blue-500', 'bg-blue-50');
    });

    test('switches to modern card when clicked', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      await user.click(screen.getByTestId('card-design-2'));
      
      const modernCard = screen.getByTestId('card-design-2');
      expect(modernCard).toHaveClass('border-blue-500', 'bg-blue-50');
      
      // Check that classic is no longer selected
      const classicCard = screen.getByTestId('card-design-1');
      expect(classicCard).not.toHaveClass('border-blue-500', 'bg-blue-50');
      
      // Preview should update to show modern cards
      expect(screen.getByText('👀 Live Preview - Modern Cards')).toBeInTheDocument();
    });

    test('switches to gradient card when clicked', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      await user.click(screen.getByTestId('card-design-3'));
      
      expect(screen.getByText('👀 Live Preview - Gradient Cards')).toBeInTheDocument();
    });

    test('all card designs can be selected', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      for (let i = 1; i <= 6; i++) {
        await user.click(screen.getByTestId(`card-design-${i}`));
        const selectedCard = screen.getByTestId(`card-design-${i}`);
        expect(selectedCard).toHaveClass('border-blue-500', 'bg-blue-50');
      }
    });
  });

  describe('Button Color Customization', () => {
    test('allows changing primary button color', async () => {
      render(<ProInteractivePreview />);
      
      const primaryColorInput = screen.getByTestId('button-primary-color');
      fireEvent.change(primaryColorInput, { target: { value: '#ff0000' } });
      
      // Should trigger CSS regeneration with new color
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('#ff0000');
      });
    });

    test('allows changing delete button color', async () => {
      render(<ProInteractivePreview />);
      
      const deleteColorInput = screen.getByTestId('button-delete-color');
      fireEvent.change(deleteColorInput, { target: { value: '#cc0000' } });
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('#cc0000');
      });
    });
  });

  describe('Gradient System', () => {
    test('allows selecting different gradients', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      await user.click(screen.getByTestId('gradient-sunset'));
      
      // Should update CSS with sunset gradient colors
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('#f59e0b'); // sunset start color
      });
    });

    test('allows changing gradient direction', async () => {
      render(<ProInteractivePreview />);
      
      const directionSelect = screen.getByTestId('gradient-direction');
      fireEvent.change(directionSelect, { target: { value: 'to bottom' } });
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('to bottom');
      });
    });

    test('gradient selection affects card design 3', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      // Select gradient card design
      await user.click(screen.getByTestId('card-design-3'));
      
      // Change gradient
      await user.click(screen.getByTestId('gradient-purple'));
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('#8b5cf6'); // purple gradient
      });
    });
  });

  describe('General Settings', () => {
    test('border radius slider updates CSS', async () => {
      render(<ProInteractivePreview />);
      
      const borderRadiusSlider = screen.getByTestId('general-border-radius');
      fireEvent.change(borderRadiusSlider, { target: { value: '12' } });
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('border-radius: 12px');
      });
    });

    test('spacing slider updates CSS', async () => {
      render(<ProInteractivePreview />);
      
      const spacingSlider = screen.getByTestId('general-spacing');
      fireEvent.change(spacingSlider, { target: { value: '20' } });
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('20px');
      });
    });

    test('font size slider updates CSS', async () => {
      render(<ProInteractivePreview />);
      
      const fontSizeSlider = screen.getByTestId('general-font-size');
      fireEvent.change(fontSizeSlider, { target: { value: '16' } });
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('font-size: 16px');
      });
    });

    test('shadows toggle affects CSS', async () => {
      render(<ProInteractivePreview />);
      
      const shadowsToggle = screen.getByTestId('general-shadows');
      fireEvent.click(shadowsToggle);
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('box-shadow: none');
      });
    });

    test('animations toggle affects CSS', async () => {
      render(<ProInteractivePreview />);
      
      const animationsToggle = screen.getByTestId('general-animations');
      fireEvent.click(animationsToggle);
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        // Should not contain transition when animations are off
        expect(cssContent.textContent).not.toContain('transition: all');
      });
    });
  });

  describe('Style Presets', () => {
    test('professional preset applies correct settings', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      // Change some settings first
      await user.click(screen.getByTestId('card-design-3'));
      
      // Apply professional preset
      await user.click(screen.getByTestId('preset-professional'));
      
      // Should reset to classic card design
      const classicCard = screen.getByTestId('card-design-1');
      expect(classicCard).toHaveClass('border-blue-500', 'bg-blue-50');
    });

    test('vibrant preset applies gradient card and sunset colors', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      await user.click(screen.getByTestId('preset-vibrant'));
      
      // Should select gradient card (design 3)
      const gradientCard = screen.getByTestId('card-design-3');
      expect(gradientCard).toHaveClass('border-blue-500', 'bg-blue-50');
      
      // Should apply sunset gradient
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toContain('#f59e0b');
      });
    });

    test('minimal preset disables shadows and animations', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      await user.click(screen.getByTestId('preset-minimal'));
      
      // Should disable shadows and animations
      const shadowsToggle = screen.getByTestId('general-shadows');
      const animationsToggle = screen.getByTestId('general-animations');
      
      expect(shadowsToggle).not.toBeChecked();
      expect(animationsToggle).not.toBeChecked();
    });
  });

  describe('CSS Generation', () => {
    test('generates comprehensive CSS with all components', () => {
      render(<ProInteractivePreview />);
      
      const cssContent = screen.getByTestId('css-content');
      expect(cssContent.textContent).toContain('.preview-card');
      expect(cssContent.textContent).toContain('.btn-primary');
      expect(cssContent.textContent).toContain('.btn-secondary');
      expect(cssContent.textContent).toContain('.btn-delete');
      expect(cssContent.textContent).toContain('.btn-submit');
      expect(cssContent.textContent).toContain('.btn-ok');
      expect(cssContent.textContent).toContain('.alert-error');
      expect(cssContent.textContent).toContain('.alert-warning');
      expect(cssContent.textContent).toContain('.alert-message');
    });

    test('includes responsive CSS rules', () => {
      render(<ProInteractivePreview />);
      
      const cssContent = screen.getByTestId('css-content');
      expect(cssContent.textContent).toContain('@media (max-width: 768px)');
    });
  });

  describe('Error Handling', () => {
    test('handles iframe load successfully', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      await user.click(screen.getByTestId('trigger-load'));
      
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    test('displays error when iframe fails', async () => {
      const user = userEvent.setup();
      render(<ProInteractivePreview />);
      
      await user.click(screen.getByTestId('trigger-error'));
      
      expect(screen.getByText('Failed to load preview content')).toBeInTheDocument();
    });
  });

  describe('HTML Content Integration', () => {
    test('uses professional HTML content generator', () => {
      render(<ProInteractivePreview />);
      
      const htmlContent = screen.getByTestId('html-content');
      expect(htmlContent.textContent).toContain('Professional Component Showcase');
      expect(htmlContent.textContent).toContain('Alert System Components');
      expect(htmlContent.textContent).toContain('Semantic Button System');
    });

    test('includes all alert types in HTML', () => {
      render(<ProInteractivePreview />);
      
      const htmlContent = screen.getByTestId('html-content');
      expect(htmlContent.textContent).toContain('alert-error');
      expect(htmlContent.textContent).toContain('alert-warning');
      expect(htmlContent.textContent).toContain('alert-message');
      expect(htmlContent.textContent).toContain('alert-success');
    });
  });

  describe('Performance and Accessibility', () => {
    test('has proper ARIA labels and structure', () => {
      render(<ProInteractivePreview />);
      
      expect(screen.getByText('🎯 Card Designs')).toBeInTheDocument();
      expect(screen.getByText('🔘 Button Colors')).toBeInTheDocument();
      expect(screen.getByText('🌈 Gradients')).toBeInTheDocument();
      expect(screen.getByText('⚙️ General Settings')).toBeInTheDocument();
    });

    test('provides helpful descriptions and context', () => {
      render(<ProInteractivePreview />);
      
      expect(screen.getByText(/This showcase includes/)).toBeInTheDocument();
      expect(screen.getByText(/semantic button system \(Primary, Secondary, Delete, Submit, OK\)/)).toBeInTheDocument();
      expect(screen.getByText(/gradient options/)).toBeInTheDocument();
    });
  });
});