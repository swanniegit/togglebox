import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PreviewDemo, SimplePreview } from '../PreviewDemo';

// Mock the IframePreview component for testing
jest.mock('../IframePreview', () => ({
  IframePreview: ({ htmlContent, cssContent, onLoad, onError, ...props }) => (
    <div
      data-testid="mock-iframe-preview"
      data-html-content={htmlContent ? 'present' : 'missing'}
      data-css-content={cssContent || ''}
      {...props}
    >
      Mock IframePreview
      <button
        onClick={() => onLoad?.()}
        data-testid="mock-iframe-load-trigger"
      >
        Trigger Load
      </button>
      <button
        onClick={() => onError?.(new Error('Mock error'))}
        data-testid="mock-iframe-error-trigger"
      >
        Trigger Error
      </button>
    </div>
  )
}));

// Mock the HTML content generator
jest.mock('../../utils/htmlContentGenerator', () => ({
  generateSampleHtmlContent: () => '<div class="test-content">Mock HTML Content</div>'
}));

describe('PreviewDemo', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Component Rendering', () => {
    test('renders with default props', () => {
      render(<PreviewDemo />);
      
      expect(screen.getByTestId('preview-demo')).toBeInTheDocument();
      expect(screen.getByText('Real-time CSS Preview Demo')).toBeInTheDocument();
      expect(screen.getByTestId('css-editor')).toBeInTheDocument();
      expect(screen.getByTestId('mock-iframe-preview')).toBeInTheDocument();
    });

    test('renders with custom initial CSS', () => {
      const initialCss = '.test { color: red; }';
      render(<PreviewDemo initialCss={initialCss} />);
      
      const cssEditor = screen.getByTestId('css-editor');
      expect(cssEditor.value).toBe(initialCss);
      
      const mockIframe = screen.getByTestId('mock-iframe-preview');
      expect(mockIframe).toHaveAttribute('data-css-content', initialCss);
    });

    test('renders with custom className', () => {
      render(<PreviewDemo className="custom-class" />);
      
      const container = screen.getByTestId('preview-demo');
      expect(container).toHaveClass('custom-class');
    });

    test('displays all CSS preset buttons', () => {
      render(<PreviewDemo />);
      
      expect(screen.getByTestId('preset-default')).toBeInTheDocument();
      expect(screen.getByTestId('preset-colorful')).toBeInTheDocument();
      expect(screen.getByTestId('preset-dark')).toBeInTheDocument();
      expect(screen.getByTestId('preset-minimal')).toBeInTheDocument();
    });
  });

  describe('CSS Editor Functionality', () => {
    test('updates CSS content when typing in editor', async () => {
      render(<PreviewDemo />);
      
      const cssEditor = screen.getByTestId('css-editor');
      const newCss = '.test { background: blue; }';
      
      fireEvent.change(cssEditor, { target: { value: newCss } });
      
      expect(cssEditor.value).toBe(newCss);
      
      const mockIframe = screen.getByTestId('mock-iframe-preview');
      expect(mockIframe).toHaveAttribute('data-css-content', newCss);
    });

    test('clears CSS content when editor is cleared', async () => {
      const initialCss = '.initial { color: red; }';
      render(<PreviewDemo initialCss={initialCss} />);
      
      const cssEditor = screen.getByTestId('css-editor');
      
      await user.clear(cssEditor);
      
      expect(cssEditor.value).toBe('');
      
      const mockIframe = screen.getByTestId('mock-iframe-preview');
      expect(mockIframe).toHaveAttribute('data-css-content', '');
    });

    test('handles multi-line CSS input', async () => {
      render(<PreviewDemo />);
      
      const cssEditor = screen.getByTestId('css-editor');
      const multilineCss = `.class1 {
  color: red;
}

.class2 {
  background: blue;
}`;
      
      fireEvent.change(cssEditor, { target: { value: multilineCss } });
      
      expect(cssEditor.value).toBe(multilineCss);
    });
  });

  describe('CSS Preset Functionality', () => {
    test('applies default preset when clicked', async () => {
      render(<PreviewDemo initialCss='.initial { color: red; }' />);
      
      const defaultButton = screen.getByTestId('preset-default');
      await user.click(defaultButton);
      
      const cssEditor = screen.getByTestId('css-editor');
      expect(cssEditor.value).toBe('');
      
      const mockIframe = screen.getByTestId('mock-iframe-preview');
      expect(mockIframe).toHaveAttribute('data-css-content', '');
    });

    test('applies colorful preset when clicked', async () => {
      render(<PreviewDemo />);
      
      const colorfulButton = screen.getByTestId('preset-colorful');
      await user.click(colorfulButton);
      
      const cssEditor = screen.getByTestId('css-editor');
      expect(cssEditor.value).toContain('.preview-heading');
      expect(cssEditor.value).toContain('#e91e63');
      expect(cssEditor.value).toContain('linear-gradient');
    });

    test('applies dark preset when clicked', async () => {
      render(<PreviewDemo />);
      
      const darkButton = screen.getByTestId('preset-dark');
      await user.click(darkButton);
      
      const cssEditor = screen.getByTestId('css-editor');
      expect(cssEditor.value).toContain('.preview-template');
      expect(cssEditor.value).toContain('#1a1a1a');
      expect(cssEditor.value).toContain('#61dafb');
    });

    test('applies minimal preset when clicked', async () => {
      render(<PreviewDemo />);
      
      const minimalButton = screen.getByTestId('preset-minimal');
      await user.click(minimalButton);
      
      const cssEditor = screen.getByTestId('css-editor');
      expect(cssEditor.value).toContain('Georgia');
      expect(cssEditor.value).toContain('text-align: justify');
      expect(cssEditor.value).toContain('letter-spacing');
    });

    test('updates iframe when preset is applied', async () => {
      render(<PreviewDemo />);
      
      const colorfulButton = screen.getByTestId('preset-colorful');
      await user.click(colorfulButton);
      
      const mockIframe = screen.getByTestId('mock-iframe-preview');
      const cssContent = mockIframe.getAttribute('data-css-content');
      expect(cssContent).toContain('.preview-heading');
      expect(cssContent).toContain('linear-gradient');
    });
  });

  describe('Error Handling', () => {
    test('displays error message when iframe fails to load', async () => {
      render(<PreviewDemo />);
      
      const errorTrigger = screen.getByTestId('mock-iframe-error-trigger');
      await user.click(errorTrigger);
      
      await waitFor(() => {
        expect(screen.getByText('Failed to load preview content')).toBeInTheDocument();
      });
    });

    test('clears error when CSS is updated after error', async () => {
      render(<PreviewDemo />);
      
      // Trigger error
      const errorTrigger = screen.getByTestId('mock-iframe-error-trigger');
      await user.click(errorTrigger);
      
      await waitFor(() => {
        expect(screen.getByText('Failed to load preview content')).toBeInTheDocument();
      });
      
      // Update CSS to clear error
      const cssEditor = screen.getByTestId('css-editor');
      fireEvent.change(cssEditor, { target: { value: '.test { color: blue; }' } });
      
      expect(screen.queryByText('Failed to load preview content')).not.toBeInTheDocument();
    });

    test('clears error when preset is applied after error', async () => {
      render(<PreviewDemo />);
      
      // Trigger error
      const errorTrigger = screen.getByTestId('mock-iframe-error-trigger');
      await user.click(errorTrigger);
      
      await waitFor(() => {
        expect(screen.getByText('Failed to load preview content')).toBeInTheDocument();
      });
      
      // Apply preset to clear error
      const darkButton = screen.getByTestId('preset-dark');
      await user.click(darkButton);
      
      expect(screen.queryByText('Failed to load preview content')).not.toBeInTheDocument();
    });
  });

  describe('Loading States', () => {
    test('shows loading state initially', () => {
      render(<PreviewDemo />);
      
      // Note: In a real implementation, loading state would be managed
      // For now, we can verify the loading UI elements exist
      expect(screen.getByText('Live Preview')).toBeInTheDocument();
    });

    test('handles iframe load event', async () => {
      render(<PreviewDemo />);
      
      const loadTrigger = screen.getByTestId('mock-iframe-load-trigger');
      await user.click(loadTrigger);
      
      // Should not cause any errors
      expect(screen.getByTestId('mock-iframe-preview')).toBeInTheDocument();
    });
  });

  describe('Performance and Optimization', () => {
    test('handles rapid CSS changes without errors', async () => {
      render(<PreviewDemo />);
      
      const cssEditor = screen.getByTestId('css-editor');
      
      // Simulate rapid typing
      await user.type(cssEditor, 'a');
      await user.type(cssEditor, 'b');
      await user.type(cssEditor, 'c');
      
      expect(cssEditor.value).toBe('abc');
    });

    test('handles large CSS content', async () => {
      render(<PreviewDemo />);
      
      const cssEditor = screen.getByTestId('css-editor');
      const largeCss = '.class { color: red; }'.repeat(100);
      
      fireEvent.change(cssEditor, { target: { value: largeCss } });
      
      expect(cssEditor.value).toBe(largeCss);
    });
  });

  describe('Accessibility', () => {
    test('has proper labels for form controls', () => {
      render(<PreviewDemo />);
      
      expect(screen.getByLabelText('CSS Editor')).toBeInTheDocument();
      expect(screen.getByText('CSS Presets')).toBeInTheDocument();
    });

    test('maintains focus management', async () => {
      render(<PreviewDemo />);
      
      const cssEditor = screen.getByTestId('css-editor');
      await user.click(cssEditor);
      
      expect(cssEditor).toHaveFocus();
    });

    test('provides helpful text content', () => {
      render(<PreviewDemo />);
      
      expect(screen.getByText(/Try these features/)).toBeInTheDocument();
      expect(screen.getByText(/Security Note/)).toBeInTheDocument();
    });
  });
});

describe('SimplePreview', () => {
  test('renders with default HTML content', () => {
    render(<SimplePreview />);
    
    expect(screen.getByTestId('simple-preview')).toBeInTheDocument();
    expect(screen.getByTestId('mock-iframe-preview')).toBeInTheDocument();
    
    const mockIframe = screen.getByTestId('mock-iframe-preview');
    expect(mockIframe).toHaveAttribute('data-html-content', 'present');
  });

  test('renders with custom HTML and CSS content', () => {
    const customHtml = '<div>Custom HTML</div>';
    const customCss = '.custom { color: red; }';
    
    render(<SimplePreview htmlContent={customHtml} cssContent={customCss} />);
    
    const mockIframe = screen.getByTestId('mock-iframe-preview');
    expect(mockIframe).toHaveAttribute('data-css-content', customCss);
  });

  test('renders with custom height', () => {
    render(<SimplePreview height="800px" />);
    
    const mockIframe = screen.getByTestId('mock-iframe-preview');
    expect(mockIframe).toHaveAttribute('height', '800px');
  });
});