import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { StylePlayground } from '../StylePlayground';

// Mock the IframePreview component
jest.mock('../IframePreview', () => ({
  IframePreview: jest.fn(({ htmlContent, cssContent, onLoad, onError, height }) => (
    <div data-testid="mock-iframe-preview" style={{ height }}>
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

// Mock URL.createObjectURL for export functionality
global.URL.createObjectURL = jest.fn(() => 'mock-url');
global.URL.revokeObjectURL = jest.fn();

describe('StylePlayground Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    test('renders without crashing', () => {
      render(<StylePlayground />);
      expect(screen.getByTestId('style-playground')).toBeInTheDocument();
    });

    test('renders main heading and description', () => {
      render(<StylePlayground />);
      
      expect(screen.getByText('CSS Style Playground')).toBeInTheDocument();
      expect(screen.getByText(/Experiment with different layouts and CSS styles/)).toBeInTheDocument();
    });

    test('renders all template options', () => {
      render(<StylePlayground />);
      
      expect(screen.getByTestId('template-default')).toBeInTheDocument();
      expect(screen.getByTestId('template-blog')).toBeInTheDocument();
      expect(screen.getByTestId('template-dashboard')).toBeInTheDocument();
      expect(screen.getByTestId('template-portfolio')).toBeInTheDocument();
    });

    test('renders all viewport size options', () => {
      render(<StylePlayground />);
      
      expect(screen.getByTestId('viewport-mobile')).toBeInTheDocument();
      expect(screen.getByTestId('viewport-tablet')).toBeInTheDocument();
      expect(screen.getByTestId('viewport-desktop')).toBeInTheDocument();
    });

    test('renders CSS editor', () => {
      render(<StylePlayground />);
      
      expect(screen.getByTestId('css-editor')).toBeInTheDocument();
      expect(screen.getByText('CSS Editor')).toBeInTheDocument();
    });

    test('renders control buttons', () => {
      render(<StylePlayground />);
      
      expect(screen.getByTestId('export-css-button')).toBeInTheDocument();
      expect(screen.getByTestId('clear-css-button')).toBeInTheDocument();
    });

    test('shows default template as selected initially', () => {
      render(<StylePlayground />);
      
      const defaultTemplate = screen.getByTestId('template-default');
      expect(defaultTemplate).toHaveClass('border-blue-500', 'bg-blue-50');
    });

    test('shows desktop viewport as selected initially', () => {
      render(<StylePlayground />);
      
      const desktopViewport = screen.getByTestId('viewport-desktop');
      expect(desktopViewport).toHaveClass('border-blue-500', 'bg-blue-50');
    });
  });

  describe('Template Selection', () => {
    test('switches to blog template when clicked', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('template-blog'));
      
      // Check that blog template is now selected
      const blogTemplate = screen.getByTestId('template-blog');
      expect(blogTemplate).toHaveClass('border-blue-500', 'bg-blue-50');
      
      // Check that default is no longer selected
      const defaultTemplate = screen.getByTestId('template-default');
      expect(defaultTemplate).not.toHaveClass('border-blue-500', 'bg-blue-50');
      
      // Preview should show blog template name
      expect(screen.getByText('Preview - Blog Layout')).toBeInTheDocument();
    });

    test('switches to dashboard template when clicked', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('template-dashboard'));
      
      const dashboardTemplate = screen.getByTestId('template-dashboard');
      expect(dashboardTemplate).toHaveClass('border-blue-500', 'bg-blue-50');
      
      expect(screen.getByText('Preview - Dashboard Layout')).toBeInTheDocument();
    });

    test('switches to portfolio template when clicked', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('template-portfolio'));
      
      const portfolioTemplate = screen.getByTestId('template-portfolio');
      expect(portfolioTemplate).toHaveClass('border-blue-500', 'bg-blue-50');
      
      expect(screen.getByText('Preview - Portfolio Layout')).toBeInTheDocument();
    });

    test('template content changes when template is selected', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('template-blog'));
      
      await waitFor(() => {
        const htmlContent = screen.getByTestId('html-content');
        expect(htmlContent.textContent).toContain('blog-template');
      });
    });
  });

  describe('Viewport Selection', () => {
    test('switches to mobile viewport when clicked', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('viewport-mobile'));
      
      const mobileViewport = screen.getByTestId('viewport-mobile');
      expect(mobileViewport).toHaveClass('border-blue-500', 'bg-blue-50');
    });

    test('switches to tablet viewport when clicked', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('viewport-tablet'));
      
      const tabletViewport = screen.getByTestId('viewport-tablet');
      expect(tabletViewport).toHaveClass('border-blue-500', 'bg-blue-50');
    });
  });

  describe('CSS Editor', () => {
    test('allows typing CSS in the editor', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      const cssEditor = screen.getByTestId('css-editor');
      const testCSS = '.preview-card { background: red; }';
      
      await user.type(cssEditor, testCSS);
      
      expect(cssEditor.value).toBe(testCSS);
    });

    test('updates preview when CSS changes', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      const cssEditor = screen.getByTestId('css-editor');
      const testCSS = '.preview-button { color: blue; }';
      
      await user.type(cssEditor, testCSS);
      
      await waitFor(() => {
        const cssContent = screen.getByTestId('css-content');
        expect(cssContent.textContent).toBe(testCSS);
      });
    });

    test('clears CSS when clear button is clicked', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      const cssEditor = screen.getByTestId('css-editor');
      await user.type(cssEditor, 'test css');
      
      await user.click(screen.getByTestId('clear-css-button'));
      
      expect(cssEditor.value).toBe('');
    });

    test('has helpful placeholder text', () => {
      render(<StylePlayground />);
      
      const cssEditor = screen.getByTestId('css-editor');
      expect(cssEditor.placeholder).toContain('.preview-card');
      expect(cssEditor.placeholder).toContain('.preview-button');
    });
  });

  describe('Export Functionality', () => {
    test('export button is disabled when no CSS', () => {
      render(<StylePlayground />);
      
      const exportButton = screen.getByTestId('export-css-button');
      expect(exportButton).toBeDisabled();
    });

    test('export button is enabled when CSS exists', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      const cssEditor = screen.getByTestId('css-editor');
      await user.type(cssEditor, '.test { color: red; }');
      
      const exportButton = screen.getByTestId('export-css-button');
      expect(exportButton).not.toBeDisabled();
    });

    test('creates download link when export is clicked', async () => {
      // Mock createElement and click
      const mockAnchor = {
        href: '',
        download: '',
        click: jest.fn()
      };
      document.createElement = jest.fn(() => mockAnchor);
      
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      const cssEditor = screen.getByTestId('css-editor');
      await user.type(cssEditor, '.test { color: red; }');
      
      await user.click(screen.getByTestId('export-css-button'));
      
      expect(document.createElement).toHaveBeenCalledWith('a');
      expect(mockAnchor.download).toBe('default-styles.css');
      expect(mockAnchor.click).toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    test('handles iframe load events', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('trigger-load'));
      
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    test('displays error when iframe fails to load', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('trigger-error'));
      
      expect(screen.getByText('Failed to load preview content')).toBeInTheDocument();
    });
  });

  describe('Responsive Behavior', () => {
    test('preview container adapts to viewport size', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      // Switch to mobile viewport
      await user.click(screen.getByTestId('viewport-mobile'));
      
      // Check that iframe has mobile dimensions
      const iframe = screen.getByTestId('mock-iframe-preview');
      expect(iframe).toHaveStyle('height: 667px');
    });
  });

  describe('Template Content Validation', () => {
    test('blog template contains expected elements', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('template-blog'));
      
      await waitFor(() => {
        const htmlContent = screen.getByTestId('html-content');
        expect(htmlContent.textContent).toContain('The Art of Modern Web Design');
        expect(htmlContent.textContent).toContain('blog-article');
      });
    });

    test('dashboard template contains expected elements', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('template-dashboard'));
      
      await waitFor(() => {
        const htmlContent = screen.getByTestId('html-content');
        expect(htmlContent.textContent).toContain('Analytics Dashboard');
        expect(htmlContent.textContent).toContain('stats-grid');
      });
    });

    test('portfolio template contains expected elements', async () => {
      const user = userEvent.setup();
      render(<StylePlayground />);
      
      await user.click(screen.getByTestId('template-portfolio'));
      
      await waitFor(() => {
        const htmlContent = screen.getByTestId('html-content');
        expect(htmlContent.textContent).toContain('Creative Portfolio');
        expect(htmlContent.textContent).toContain('projects-grid');
      });
    });
  });

  describe('Accessibility', () => {
    test('has proper ARIA labels and structure', () => {
      render(<StylePlayground />);
      
      // Check that main sections are properly labeled
      expect(screen.getByText('Template')).toBeInTheDocument();
      expect(screen.getByText('Viewport Size')).toBeInTheDocument();
      expect(screen.getByText('CSS Editor')).toBeInTheDocument();
    });

    test('provides helpful tips for users', () => {
      render(<StylePlayground />);
      
      expect(screen.getByText(/Try different CSS properties/)).toBeInTheDocument();
      expect(screen.getByText(/.preview-card/)).toBeInTheDocument();
    });
  });
});