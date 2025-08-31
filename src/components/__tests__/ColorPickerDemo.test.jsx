import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ColorPickerDemo } from '../ColorPickerDemo';

// Mock the heavy components to speed up tests
jest.mock('../IframePreview', () => ({
  IframePreview: ({ htmlContent, cssContent }) => (
    <div data-testid="iframe-preview" data-css={cssContent}>
      Mock IframePreview
    </div>
  )
}));

jest.mock('../SampleHtmlTemplate', () => ({
  SampleHtmlTemplate: '<div>Mock HTML Template</div>'
}));

describe('ColorPickerDemo Component', () => {
  test('renders without crashing', () => {
    render(<ColorPickerDemo />);
    expect(screen.getByText('Color Picker with Real-Time Preview')).toBeInTheDocument();
  });

  test('renders all property selection buttons', () => {
    render(<ColorPickerDemo />);
    
    // Look for buttons specifically, not all text occurrences
    expect(screen.getByRole('button', { name: 'Text Color' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Background Color' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Accent Color' })).toBeInTheDocument();
  });

  test('renders color picker and preview components', () => {
    render(<ColorPickerDemo />);
    
    // Color picker should be present
    expect(screen.getByRole('group', { name: /color picker/i })).toBeInTheDocument();
    
    // Preview should be present
    expect(screen.getByTestId('iframe-preview')).toBeInTheDocument();
  });

  test('displays current color swatches with values', () => {
    render(<ColorPickerDemo />);
    
    // Should show color swatches for each property
    expect(screen.getByText('#000000')).toBeInTheDocument(); // text color
    expect(screen.getByText('#ffffff')).toBeInTheDocument(); // background color
    expect(screen.getByText('#cccccc')).toBeInTheDocument(); // border color
  });

  test('allows switching between color properties', async () => {
    render(<ColorPickerDemo />);
    
    const textColorBtn = screen.getByRole('button', { name: 'Text Color' });
    const backgroundColorBtn = screen.getByRole('button', { name: 'Background Color' });
    const accentColorBtn = screen.getByRole('button', { name: 'Accent Color' });
    
    // Initially text color should be active (check if button has active styling)
    expect(textColorBtn).toHaveStyle('background-color: rgb(0, 0, 0)');
    
    // Switch to background color
    fireEvent.click(backgroundColorBtn);
    await waitFor(() => {
      expect(backgroundColorBtn).toHaveStyle('background-color: rgb(255, 255, 255)');
    });
    
    // Switch to accent color
    fireEvent.click(accentColorBtn);
    await waitFor(() => {
      expect(accentColorBtn).toHaveStyle('background-color: rgb(204, 204, 204)');
    });
  });

  test('updates preview CSS when colors change', async () => {
    render(<ColorPickerDemo />);
    
    const preview = screen.getByTestId('iframe-preview');
    const initialCSS = preview.getAttribute('data-css');
    
    // Initial CSS should contain default colors
    expect(initialCSS).toContain('color: #000000');
    expect(initialCSS).toContain('background-color: #ffffff');
    expect(initialCSS).toContain('#cccccc');
    
    // Change text color using the color picker
    const hexInput = screen.getByLabelText(/hex/i);
    fireEvent.change(hexInput, { target: { value: '#FF0000' } });
    
    await waitFor(() => {
      const updatedCSS = preview.getAttribute('data-css');
      expect(updatedCSS).toContain('color: #FF0000');
    });
  });

  test('generates appropriate CSS for different color properties', () => {
    render(<ColorPickerDemo />);
    
    const preview = screen.getByTestId('iframe-preview');
    const cssContent = preview.getAttribute('data-css');
    
    // Check that CSS contains styling for various elements
    expect(cssContent).toContain('body {');
    expect(cssContent).toContain('h1, h2, h3 {');
    expect(cssContent).toContain('.btn {');
    expect(cssContent).toContain('.card {');
    expect(cssContent).toContain('input, textarea {');
    
    // Check color properties are applied
    expect(cssContent).toContain('color:');
    expect(cssContent).toContain('background-color:');
    expect(cssContent).toContain('border:');
  });

  test('provides color picker with presets', () => {
    render(<ColorPickerDemo />);
    
    // Should have preset colors available - check for at least some of them
    const redPreset = screen.getByTitle('#FF0000');
    const greenPreset = screen.getByTitle('#00FF00');
    const bluePreset = screen.getByTitle('#0000FF');
    
    expect(redPreset).toBeInTheDocument();
    expect(greenPreset).toBeInTheDocument();
    expect(bluePreset).toBeInTheDocument();
    
    // Check that they're actually clickable buttons
    expect(redPreset).toHaveAttribute('aria-label', 'Select preset color #FF0000');
  });

  test('shows accessibility features when appropriate', () => {
    render(<ColorPickerDemo />);
    
    // When text color is selected (default), should show contrast info with background
    expect(screen.getByText(/contrast ratio/i)).toBeInTheDocument();
  });

  test('updates color swatches when property values change', async () => {
    render(<ColorPickerDemo />);
    
    // Change the text color
    const hexInput = screen.getByLabelText(/hex/i);
    fireEvent.change(hexInput, { target: { value: '#FF0000' } });
    
    await waitFor(() => {
      // Should update the displayed color value
      expect(screen.getByText('#FF0000')).toBeInTheDocument();
    });
  });

  test('handles responsive layout', () => {
    render(<ColorPickerDemo />);
    
    // Check that main layout elements are present
    expect(screen.getByText('Select Property to Modify:')).toBeInTheDocument();
    expect(screen.getByText('Color Picker:')).toBeInTheDocument();
    expect(screen.getByText('Current Colors:')).toBeInTheDocument();
    expect(screen.getByText('Live Preview:')).toBeInTheDocument();
  });

  test('integrates ColorPicker and IframePreview correctly', () => {
    render(<ColorPickerDemo />);
    
    // Verify ColorPicker receives correct props
    const colorPicker = screen.getByRole('group', { name: /color picker/i });
    expect(colorPicker).toBeInTheDocument();
    
    // Verify IframePreview receives HTML and CSS
    const preview = screen.getByTestId('iframe-preview');
    expect(preview).toHaveAttribute('data-css');
    
    const cssContent = preview.getAttribute('data-css');
    expect(cssContent).toBeTruthy();
    expect(cssContent.length).toBeGreaterThan(100); // Should have substantial CSS
  });
});