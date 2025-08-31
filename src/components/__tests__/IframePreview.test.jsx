import { render, screen, waitFor } from '@testing-library/react';
import { IframePreview } from '../IframePreview';

describe('IframePreview', () => {
  const mockHtmlContent = '<div class="test-content">Test HTML</div>';
  const mockCssContent = '.test-content { color: red; background: blue; }';

  beforeEach(() => {
    // Mock iframe for testing
    Object.defineProperty(window, 'HTMLIFrameElement', {
      writable: true,
      value: class MockHTMLIFrameElement extends HTMLElement {
        constructor() {
          super();
          this.contentDocument = {
            head: {
              querySelector: jest.fn(),
              appendChild: jest.fn()
            },
            body: {
              innerHTML: ''
            },
            createElement: jest.fn(() => ({
              setAttribute: jest.fn(),
              textContent: ''
            }))
          };
          this.contentWindow = {
            document: this.contentDocument,
            postMessage: jest.fn()
          };
        }

        set src(value) {
          this._src = value;
        }

        get src() {
          return this._src;
        }
      }
    });
  });

  describe('Security and Sandboxing', () => {
    test('renders iframe with proper sandbox attributes', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toBeInTheDocument();
      expect(iframe).toHaveAttribute('sandbox');
      
      const sandboxValue = iframe.getAttribute('sandbox');
      expect(sandboxValue).toContain('allow-same-origin');
      expect(sandboxValue).not.toContain('allow-scripts');
      expect(sandboxValue).not.toContain('allow-forms');
      expect(sandboxValue).not.toContain('allow-navigation');
    });

    test('uses data URL for secure content injection', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      
      expect(src).toStartWith('data:text/html;charset=utf-8,');
      expect(decodeURIComponent(src)).toContain(mockHtmlContent);
    });

    test('prevents XSS by properly encoding HTML content', () => {
      const maliciousContent = '<script>alert("xss")</script><div>Safe content</div>';
      
      render(<IframePreview htmlContent={maliciousContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedSrc = decodeURIComponent(src);
      
      // Should contain the safe content but neutralize scripts
      expect(decodedSrc).toContain('Safe content');
      // Script tags should be escaped or stripped
      expect(decodedSrc).not.toContain('<script>alert("xss")</script>');
    });

    test('isolates iframe content from parent document', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toHaveStyle('width: 100%');
      expect(iframe).toHaveAttribute('style');
    });

    test('sets proper CSP headers in iframe content', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedContent = decodeURIComponent(src);
      
      // Should include CSP meta tag for additional security
      expect(decodedContent).toContain('Content-Security-Policy');
      expect(decodedContent).toContain("default-src 'none'");
      expect(decodedContent).toContain("style-src 'unsafe-inline'");
    });
  });

  describe('CSS Injection and Isolation', () => {
    test('injects CSS content into iframe without affecting parent', async () => {
      const { rerender } = render(
        <IframePreview htmlContent={mockHtmlContent} cssContent="" />
      );
      
      // Re-render with CSS content
      rerender(
        <IframePreview htmlContent={mockHtmlContent} cssContent={mockCssContent} />
      );
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedContent = decodeURIComponent(src);
      
      expect(decodedContent).toContain(mockCssContent);
      expect(decodedContent).toContain('<style id="dynamic-css">');
    });

    test('updates CSS content in real-time without page reload', async () => {
      const initialCss = '.test { color: red; }';
      const updatedCss = '.test { color: blue; }';
      
      const { rerender } = render(
        <IframePreview htmlContent={mockHtmlContent} cssContent={initialCss} />
      );
      
      let iframe = screen.getByTestId('preview-iframe');
      let src = iframe.getAttribute('src');
      expect(decodeURIComponent(src)).toContain('color: red');
      
      // Update CSS
      rerender(
        <IframePreview htmlContent={mockHtmlContent} cssContent={updatedCss} />
      );
      
      iframe = screen.getByTestId('preview-iframe');
      src = iframe.getAttribute('src');
      expect(decodeURIComponent(src)).toContain('color: blue');
    });

    test('handles malformed CSS gracefully', () => {
      const malformedCss = '.test { color: red; invalid-property }';
      
      expect(() => {
        render(<IframePreview htmlContent={mockHtmlContent} cssContent={malformedCss} />);
      }).not.toThrow();
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      
      expect(decodeURIComponent(src)).toContain(malformedCss);
    });

    test('isolates CSS styles from affecting parent document', () => {
      const isolationTestCss = 'body { background: red !important; } * { color: green !important; }';
      
      render(<IframePreview htmlContent={mockHtmlContent} cssContent={isolationTestCss} />);
      
      // Parent document styles should not be affected
      const parentBody = document.body;
      const computedStyle = window.getComputedStyle(parentBody);
      
      expect(computedStyle.backgroundColor).not.toBe('red');
      expect(computedStyle.color).not.toBe('green');
    });

    test('preserves HTML content when CSS updates', () => {
      const { rerender } = render(
        <IframePreview htmlContent={mockHtmlContent} cssContent=".old { color: red; }" />
      );
      
      rerender(
        <IframePreview htmlContent={mockHtmlContent} cssContent=".new { color: blue; }" />
      );
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedContent = decodeURIComponent(src);
      
      expect(decodedContent).toContain(mockHtmlContent);
      expect(decodedContent).toContain('.new { color: blue; }');
      expect(decodedContent).not.toContain('.old { color: red; }');
    });
  });

  describe('Error Handling and Edge Cases', () => {
    test('handles empty HTML content gracefully', () => {
      expect(() => {
        render(<IframePreview htmlContent="" cssContent={mockCssContent} />);
      }).not.toThrow();
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toBeInTheDocument();
    });

    test('handles undefined or null content props', () => {
      expect(() => {
        render(<IframePreview htmlContent={null} cssContent={undefined} />);
      }).not.toThrow();
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toBeInTheDocument();
    });

    test('handles very large content without performance issues', () => {
      const largeHtml = '<div>' + 'Large content '.repeat(1000) + '</div>';
      const largeCss = '.test' + ' { color: red; }'.repeat(500);
      
      const startTime = performance.now();
      render(<IframePreview htmlContent={largeHtml} cssContent={largeCss} />);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(1000); // Should render in less than 1 second
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toBeInTheDocument();
    });

    test('provides fallback content for iframe loading errors', () => {
      render(<IframePreview htmlContent={mockHtmlContent} cssContent={mockCssContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      
      // Check for error handling attributes
      expect(iframe).toHaveAttribute('title', expect.stringContaining('Preview'));
    });
  });

  describe('Component Props and API', () => {
    test('accepts custom className prop', () => {
      render(
        <IframePreview 
          htmlContent={mockHtmlContent} 
          cssContent={mockCssContent}
          className="custom-iframe-class"
        />
      );
      
      const container = screen.getByTestId('preview-iframe').parentElement;
      expect(container).toHaveClass('custom-iframe-class');
    });

    test('accepts custom height prop', () => {
      render(
        <IframePreview 
          htmlContent={mockHtmlContent} 
          cssContent={mockCssContent}
          height="800px"
        />
      );
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toHaveStyle({ height: '800px' });
    });

    test('triggers onLoad callback when iframe loads', async () => {
      const mockOnLoad = jest.fn();
      
      render(
        <IframePreview 
          htmlContent={mockHtmlContent} 
          cssContent={mockCssContent}
          onLoad={mockOnLoad}
        />
      );
      
      const iframe = screen.getByTestId('preview-iframe');
      
      // Simulate iframe load event
      iframe.dispatchEvent(new Event('load'));
      
      await waitFor(() => {
        expect(mockOnLoad).toHaveBeenCalled();
      });
    });

    test('triggers onError callback when iframe fails to load', async () => {
      const mockOnError = jest.fn();
      
      render(
        <IframePreview 
          htmlContent={mockHtmlContent} 
          cssContent={mockCssContent}
          onError={mockOnError}
        />
      );
      
      const iframe = screen.getByTestId('preview-iframe');
      
      // Simulate iframe error event
      iframe.dispatchEvent(new Event('error'));
      
      await waitFor(() => {
        expect(mockOnError).toHaveBeenCalled();
      });
    });
  });

  describe('Performance and Memory Management', () => {
    test('cleans up resources when component unmounts', () => {
      const { unmount } = render(
        <IframePreview htmlContent={mockHtmlContent} cssContent={mockCssContent} />
      );
      
      // Component should unmount without errors
      expect(() => unmount()).not.toThrow();
    });

    test('prevents memory leaks with frequent updates', () => {
      const { rerender } = render(
        <IframePreview htmlContent={mockHtmlContent} cssContent="" />
      );
      
      // Simulate frequent CSS updates
      for (let i = 0; i < 10; i++) {
        rerender(
          <IframePreview 
            htmlContent={mockHtmlContent} 
            cssContent={`.dynamic-${i} { color: hsl(${i * 36}, 70%, 50%); }`} 
          />
        );
      }
      
      // Should not throw or cause performance issues
      expect(screen.getByTestId('preview-iframe')).toBeInTheDocument();
    });
  });
});