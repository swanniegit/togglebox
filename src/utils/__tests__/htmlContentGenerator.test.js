import {
  generateSampleHtmlContent,
  sanitizeHtmlContent,
  sanitizeCssContent,
  validateHtmlSecurity,
  validateCssSecurity
} from '../htmlContentGenerator';

describe('htmlContentGenerator', () => {
  describe('generateSampleHtmlContent', () => {
    test('generates valid HTML string with expected structure', () => {
      const htmlContent = generateSampleHtmlContent();
      
      expect(typeof htmlContent).toBe('string');
      expect(htmlContent).toContain('data-testid="html-template"');
      expect(htmlContent).toContain('class="preview-template');
      expect(htmlContent).toContain('<h1');
      expect(htmlContent).toContain('<h2');
      expect(htmlContent).toContain('<h3');
      expect(htmlContent).toContain('<h4');
      expect(htmlContent).toContain('<h5');
      expect(htmlContent).toContain('<h6');
    });

    test('includes all expected content sections', () => {
      const htmlContent = generateSampleHtmlContent();
      
      expect(htmlContent).toContain('Typography Showcase');
      expect(htmlContent.toLowerCase()).toContain('lorem ipsum');
      expect(htmlContent).toContain('preview-button');
      expect(htmlContent).toContain('Sample Form');
      expect(htmlContent).toContain('Unordered List');
      expect(htmlContent).toContain('Ordered List');
      expect(htmlContent).toContain('responsive-grid');
      expect(htmlContent).toContain('gradient-showcase');
    });

    test('uses proper HTML attributes instead of React props', () => {
      const htmlContent = generateSampleHtmlContent();
      
      // Should use 'class' not 'className'
      expect(htmlContent).toContain('class=');
      expect(htmlContent).not.toContain('className=');
      
      // Should use 'for' not 'htmlFor'
      expect(htmlContent).toContain('for="email"');
      expect(htmlContent).not.toContain('htmlFor=');
    });

    test('includes test identifiers for component testing', () => {
      const htmlContent = generateSampleHtmlContent();
      
      expect(htmlContent).toContain('data-testid="html-template"');
      expect(htmlContent).toContain('data-testid="responsive-text"');
      expect(htmlContent).toContain('data-testid="responsive-grid"');
      expect(htmlContent).toContain('data-testid="card-1"');
      expect(htmlContent).toContain('data-testid="gradient-showcase"');
    });
  });

  describe('sanitizeHtmlContent', () => {
    test('removes script tags from HTML content', () => {
      const maliciousHtml = '<div>Safe content</div><script>alert("xss")</script>';
      const sanitized = sanitizeHtmlContent(maliciousHtml);
      
      expect(sanitized).toContain('Safe content');
      expect(sanitized).not.toContain('<script>');
      expect(sanitized).not.toContain('alert("xss")');
    });

    test('removes inline event handlers', () => {
      const maliciousHtml = '<button onclick="alert(\'xss\')">Click me</button><div onload="badScript()">Content</div>';
      const sanitized = sanitizeHtmlContent(maliciousHtml);
      
      expect(sanitized).toContain('<button');
      expect(sanitized).toContain('Click me');
      expect(sanitized).not.toContain('onclick=');
      expect(sanitized).not.toContain('onload=');
    });

    test('removes javascript: protocols', () => {
      const maliciousHtml = '<a href="javascript:alert(\'xss\')">Link</a>';
      const sanitized = sanitizeHtmlContent(maliciousHtml);
      
      expect(sanitized).toContain('<a');
      expect(sanitized).toContain('Link');
      expect(sanitized).not.toContain('javascript:');
    });

    test('removes iframe, embed, and object tags', () => {
      const maliciousHtml = `
        <div>Safe content</div>
        <iframe src="malicious.html"></iframe>
        <embed src="malicious.swf">
        <object data="malicious.pdf"></object>
      `;
      const sanitized = sanitizeHtmlContent(maliciousHtml);
      
      expect(sanitized).toContain('Safe content');
      expect(sanitized).not.toContain('<iframe');
      expect(sanitized).not.toContain('<embed');
      expect(sanitized).not.toContain('<object');
    });

    test('handles empty or null input gracefully', () => {
      expect(sanitizeHtmlContent('')).toBe('');
      expect(sanitizeHtmlContent(null)).toBe('');
      expect(sanitizeHtmlContent(undefined)).toBe('');
      expect(sanitizeHtmlContent(123)).toBe('');
    });

    test('preserves safe HTML content', () => {
      const safeHtml = `
        <div class="container">
          <h1>Title</h1>
          <p>Paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
          <ul><li>List item</li></ul>
          <img src="image.jpg" alt="Description">
        </div>
      `;
      const sanitized = sanitizeHtmlContent(safeHtml);
      
      expect(sanitized).toContain('<div class="container">');
      expect(sanitized).toContain('<h1>Title</h1>');
      expect(sanitized).toContain('<strong>bold</strong>');
      expect(sanitized).toContain('<em>italic</em>');
      expect(sanitized).toContain('<ul><li>List item</li></ul>');
      expect(sanitized).toContain('<img src="image.jpg"');
    });
  });

  describe('sanitizeCssContent', () => {
    test('removes CSS imports', () => {
      const maliciousCss = `
        @import url('malicious.css');
        .safe { color: red; }
      `;
      const sanitized = sanitizeCssContent(maliciousCss);
      
      expect(sanitized).toContain('.safe { color: red; }');
      expect(sanitized).not.toContain('@import');
    });

    test('removes CSS expressions', () => {
      const maliciousCss = `
        .malicious { width: expression(alert('xss')); }
        .safe { color: blue; }
      `;
      const sanitized = sanitizeCssContent(maliciousCss);
      
      expect(sanitized).toContain('.safe { color: blue; }');
      expect(sanitized).not.toContain('expression(');
    });

    test('removes dangerous protocols', () => {
      const maliciousCss = `
        .malicious1 { background: url(javascript:alert('xss')); }
        .malicious2 { background: url(vbscript:msgbox('xss')); }
        .safe { color: green; }
      `;
      const sanitized = sanitizeCssContent(maliciousCss);
      
      expect(sanitized).toContain('.safe { color: green; }');
      expect(sanitized).not.toContain('javascript:');
      expect(sanitized).not.toContain('vbscript:');
    });

    test('removes CSS behaviors and bindings', () => {
      const maliciousCss = `
        .malicious1 { behavior: url(malicious.htc); }
        .malicious2 { -moz-binding: url(malicious.xml#evil); }
        .safe { padding: 10px; }
      `;
      const sanitized = sanitizeCssContent(maliciousCss);
      
      expect(sanitized).toContain('.safe { padding: 10px; }');
      expect(sanitized).not.toContain('behavior:');
      expect(sanitized).not.toContain('-moz-binding');
    });

    test('handles empty or null input gracefully', () => {
      expect(sanitizeCssContent('')).toBe('');
      expect(sanitizeCssContent(null)).toBe('');
      expect(sanitizeCssContent(undefined)).toBe('');
      expect(sanitizeCssContent(123)).toBe('');
    });

    test('preserves safe CSS content', () => {
      const safeCss = `
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background: linear-gradient(to right, #blue, #green);
        }
        
        h1 { font-size: 2em; }
        .text { color: hsl(200, 50%, 60%); }
      `;
      const sanitized = sanitizeCssContent(safeCss);
      
      expect(sanitized).toContain('max-width: 1200px');
      expect(sanitized).toContain('margin: 0 auto');
      expect(sanitized).toContain('background: linear-gradient');
      expect(sanitized).toContain('font-size: 2em');
      expect(sanitized).toContain('color: hsl(200, 50%, 60%)');
    });
  });

  describe('validateHtmlSecurity', () => {
    test('identifies secure HTML content', () => {
      const safeHtml = '<div><h1>Title</h1><p>Content</p></div>';
      const result = validateHtmlSecurity(safeHtml);
      
      expect(result.isSecure).toBe(true);
      expect(result.violations).toHaveLength(0);
      expect(result.sanitizedContent).toBe(safeHtml);
    });

    test('identifies and reports security violations', () => {
      const maliciousHtml = '<div><script>alert("xss")</script><button onclick="badStuff()">Click</button></div>';
      const result = validateHtmlSecurity(maliciousHtml);
      
      expect(result.isSecure).toBe(false);
      expect(result.violations).toContain('Script tags');
      expect(result.violations).toContain('Event handlers');
      expect(result.sanitizedContent).not.toContain('<script>');
      expect(result.sanitizedContent).not.toContain('onclick=');
    });

    test('reports all types of security violations', () => {
      const maliciousHtml = `
        <script>alert('xss')</script>
        <button onclick="bad()">Button</button>
        <a href="javascript:void(0)">Link</a>
        <iframe src="evil.html"></iframe>
        <embed src="malicious.swf">
        <object data="bad.pdf"></object>
        <img src="data:text/html,<script>alert('xss')</script>">
      `;
      const result = validateHtmlSecurity(maliciousHtml);
      
      expect(result.isSecure).toBe(false);
      expect(result.violations).toContain('Script tags');
      expect(result.violations).toContain('Event handlers');
      expect(result.violations).toContain('JavaScript protocols');
      expect(result.violations).toContain('Iframe elements');
      expect(result.violations).toContain('Embed elements');
      expect(result.violations).toContain('Object elements');
      expect(result.violations).toContain('Non-image data URLs');
    });

    test('allows safe data URLs for images', () => {
      const safeHtml = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==">';
      const result = validateHtmlSecurity(safeHtml);
      
      expect(result.isSecure).toBe(true);
      expect(result.violations).toHaveLength(0);
    });
  });

  describe('validateCssSecurity', () => {
    test('identifies secure CSS content', () => {
      const safeCss = '.container { color: red; background: blue; }';
      const result = validateCssSecurity(safeCss);
      
      expect(result.isSecure).toBe(true);
      expect(result.violations).toHaveLength(0);
      expect(result.sanitizedContent).toBe(safeCss);
    });

    test('identifies and reports CSS security violations', () => {
      const maliciousCss = `
        @import url('malicious.css');
        .bad { width: expression(alert('xss')); }
      `;
      const result = validateCssSecurity(maliciousCss);
      
      expect(result.isSecure).toBe(false);
      expect(result.violations).toContain('CSS imports');
      expect(result.violations).toContain('CSS expressions');
      expect(result.sanitizedContent).not.toContain('@import');
      expect(result.sanitizedContent).not.toContain('expression(');
    });

    test('reports all types of CSS security violations', () => {
      const maliciousCss = `
        @import url('evil.css');
        .expr { width: expression(alert('xss')); }
        .js { background: url(javascript:alert('xss')); }
        .vbs { background: url(vbscript:msgbox('xss')); }
        .behavior { behavior: url(malicious.htc); }
        .binding { -moz-binding: url(evil.xml#bad); }
      `;
      const result = validateCssSecurity(maliciousCss);
      
      expect(result.isSecure).toBe(false);
      expect(result.violations).toContain('CSS imports');
      expect(result.violations).toContain('CSS expressions');
      expect(result.violations).toContain('JavaScript protocols');
      expect(result.violations).toContain('VBScript protocols');
      expect(result.violations).toContain('CSS behaviors');
      expect(result.violations).toContain('XBL bindings');
    });
  });
});