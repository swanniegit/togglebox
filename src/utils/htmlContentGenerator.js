/**
 * HTML Content Generator Utilities
 * 
 * Provides secure methods to convert React components to HTML strings
 * for injection into the IframePreview component.
 */

/**
 * Converts the SampleHtmlTemplate component structure to HTML string
 * This avoids security issues with rendering React components in iframes
 * while maintaining the same content structure for CSS testing
 */
export const generateSampleHtmlContent = () => {
  return `
    <div data-testid="html-template" class="preview-template p-6 max-w-4xl mx-auto bg-white">
      <!-- Typography Hierarchy -->
      <section class="mb-8">
        <h1 class="preview-heading text-3xl font-bold mb-4 text-gray-900">
          Main Heading - Typography Showcase
        </h1>
        <h2 class="preview-subheading text-2xl font-semibold mb-3 text-gray-800">
          Secondary Heading - Web Design Elements
        </h2>
        <h3 class="text-xl font-medium mb-3 text-gray-700">
          Third Level Heading - Visual Hierarchy
        </h3>
        <h4 class="text-lg font-medium mb-2 text-gray-600">
          Fourth Level Heading - Content Structure
        </h4>
        <h5 class="text-base font-medium mb-2 text-gray-600">
          Fifth Level Heading - Detail Organization
        </h5>
        <h6 class="text-sm font-medium mb-2 text-gray-500">
          Sixth Level Heading - Fine Print
        </h6>
      </section>

      <!-- Paragraph Content -->
      <section class="mb-8">
        <p class="preview-text text-base leading-relaxed mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          This paragraph demonstrates how text flows and wraps in different container widths. Typography is the art and technique 
          of arranging type to make written language legible, readable, and appealing when displayed.
        </p>
        <p class="preview-text text-base leading-relaxed mb-4 text-gray-700">
          The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly 
          used for font testing. Special characters include: © 2024 ToggleBox™, user@example.com, $129.99, 50% off, 
          and symbols like &amp;, @, #, %, and *.
        </p>
        <p class="preview-text text-base leading-relaxed mb-4 text-gray-600" data-testid="responsive-text">
          <span class="text-sm md:text-base lg:text-lg">
            This paragraph demonstrates responsive typography with different sizes across screen widths.
            It showcases how text can adapt to various viewport dimensions while maintaining readability.
          </span>
        </p>
      </section>

      <!-- Interactive Buttons -->
      <section class="mb-8">
        <div class="flex flex-wrap gap-4 mb-4">
          <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
            Primary Button
          </button>
          <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300">
            Secondary Button
          </button>
          <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors border border-blue-600 text-blue-600 hover:bg-blue-50">
            Outline Button
          </button>
        </div>
      </section>

      <!-- Form Elements -->
      <section class="mb-8">
        <form class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Sample Form</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="preview-button px-6 py-2 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700"
          >
            Submit Form
          </button>
        </form>
      </section>

      <!-- Lists -->
      <section class="mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800">Unordered List</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>First list item with standard content</li>
              <li>Second item demonstrating list styling</li>
              <li>Third item with <strong>bold text</strong> and <em>emphasis</em></li>
              <li>Fourth item containing a <a href="#" class="text-blue-600 hover:underline">hyperlink example</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800">Ordered List</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>First numbered item</li>
              <li>Second numbered item</li>
              <li>Third item with nested content</li>
              <li>Fourth item completing the sequence</li>
            </ol>
          </div>
        </div>
      </section>

      <!-- Responsive Grid Layout -->
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Responsive Card Grid</h3>
        <div data-testid="responsive-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div data-testid="card-1" class="preview-card p-4 rounded-lg shadow-sm border bg-white">
            <h4 class="font-semibold mb-2 text-gray-800">Card Title One</h4>
            <p class="text-gray-600 text-sm">
              This card demonstrates responsive layout behavior and shadow effects.
            </p>
          </div>
          <div data-testid="card-2" class="preview-card p-4 rounded-lg shadow-sm border bg-white">
            <h4 class="font-semibold mb-2 text-gray-800">Card Title Two</h4>
            <p class="text-gray-600 text-sm">
              Each card adapts to different screen sizes while maintaining consistent spacing.
            </p>
          </div>
          <div data-testid="card-3" class="preview-card p-4 rounded-lg shadow-sm border bg-white">
            <h4 class="font-semibold mb-2 text-gray-800">Card Title Three</h4>
            <p class="text-gray-600 text-sm">
              The grid system demonstrates mobile-first responsive design principles.
            </p>
          </div>
        </div>
      </section>

      <!-- Gradient Showcase -->
      <section class="mb-8">
        <div 
          data-testid="gradient-showcase" 
          class="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg text-white text-center"
        >
          <h3 class="text-xl font-bold mb-2">Gradient Background Demonstration</h3>
          <p class="text-purple-100">
            This section showcases gradient backgrounds that can be dynamically modified 
            for color, direction, and stop points in the CSS preview engine.
          </p>
        </div>
      </section>

      <!-- Additional Content for Testing -->
      <section class="mb-8">
        <div class="bg-gray-100 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-3 text-gray-800">Additional Typography Testing</h3>
          <p class="text-gray-700 mb-3">
            <strong>Bold text</strong>, <em>italic text</em>, <u>underlined text</u>, 
            <span class="line-through">strikethrough text</span>, and 
            <code class="bg-gray-200 px-1 rounded font-mono">inline code</code>.
          </p>
          <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            "This blockquote demonstrates how quoted content appears with custom styling 
            and proper semantic markup for accessibility and SEO."
          </blockquote>
        </div>
      </section>
    </div>
  `;
};

/**
 * Content sanitization utilities
 */
export const sanitizeHtmlContent = (html) => {
  if (!html || typeof html !== 'string') return '';
  
  // Remove potentially dangerous elements and attributes
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/<embed\b[^>]*>/gi, '')
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
    .replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '')
    .replace(/\son\w+\s*=\s*[^>\s]+/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/data:(?!image\/)/gi, '');
};

/**
 * CSS sanitization utilities
 */
export const sanitizeCssContent = (css) => {
  if (!css || typeof css !== 'string') return '';
  
  // Remove potentially dangerous CSS
  return css
    .replace(/@import\s+url\s*\([^)]*\)/gi, '')
    .replace(/expression\s*\([^)]*\)/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/behavior\s*:/gi, '')
    .replace(/-moz-binding/gi, '')
    .replace(/data:(?!image\/)/gi, '');
};

/**
 * Validates HTML content for security issues
 */
export const validateHtmlSecurity = (html) => {
  const dangerousPatterns = [
    { pattern: /<script/i, description: 'Script tags' },
    { pattern: /on\w+\s*=/i, description: 'Event handlers' },
    { pattern: /javascript:/i, description: 'JavaScript protocols' },
    { pattern: /<iframe/i, description: 'Iframe elements' },
    { pattern: /<embed/i, description: 'Embed elements' },
    { pattern: /<object/i, description: 'Object elements' },
    { pattern: /data:(?!image\/)/i, description: 'Non-image data URLs' }
  ];

  const violations = [];
  
  for (const { pattern, description } of dangerousPatterns) {
    if (pattern.test(html)) {
      violations.push(description);
    }
  }

  return {
    isSecure: violations.length === 0,
    violations,
    sanitizedContent: violations.length > 0 ? sanitizeHtmlContent(html) : html
  };
};

/**
 * Validates CSS content for security issues
 */
export const validateCssSecurity = (css) => {
  const dangerousPatterns = [
    { pattern: /@import/i, description: 'CSS imports' },
    { pattern: /expression\s*\(/i, description: 'CSS expressions' },
    { pattern: /javascript:/i, description: 'JavaScript protocols' },
    { pattern: /vbscript:/i, description: 'VBScript protocols' },
    { pattern: /behavior\s*:/i, description: 'CSS behaviors' },
    { pattern: /-moz-binding/i, description: 'XBL bindings' }
  ];

  const violations = [];
  
  for (const { pattern, description } of dangerousPatterns) {
    if (pattern.test(css)) {
      violations.push(description);
    }
  }

  return {
    isSecure: violations.length === 0,
    violations,
    sanitizedContent: violations.length > 0 ? sanitizeCssContent(css) : css
  };
};