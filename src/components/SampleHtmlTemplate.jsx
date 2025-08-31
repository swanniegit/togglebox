import React from 'react';

export const SampleHtmlTemplate = () => {
  return (
    <div data-testid="html-template" className="preview-template p-6 max-w-4xl mx-auto bg-white">
      {/* Typography Hierarchy */}
      <section className="mb-8">
        <h1 className="preview-heading text-3xl font-bold mb-4 text-gray-900">
          Main Heading - Typography Showcase
        </h1>
        <h2 className="preview-subheading text-2xl font-semibold mb-3 text-gray-800">
          Secondary Heading - Web Design Elements
        </h2>
        <h3 className="text-xl font-medium mb-3 text-gray-700">
          Third Level Heading - Visual Hierarchy
        </h3>
        <h4 className="text-lg font-medium mb-2 text-gray-600">
          Fourth Level Heading - Content Structure
        </h4>
        <h5 className="text-base font-medium mb-2 text-gray-600">
          Fifth Level Heading - Detail Organization
        </h5>
        <h6 className="text-sm font-medium mb-2 text-gray-500">
          Sixth Level Heading - Fine Print
        </h6>
      </section>

      {/* Paragraph Content */}
      <section className="mb-8">
        <p className="preview-text text-base leading-relaxed mb-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          This paragraph demonstrates how text flows and wraps in different container widths. Typography is the art and technique 
          of arranging type to make written language legible, readable, and appealing when displayed.
        </p>
        <p className="preview-text text-base leading-relaxed mb-4 text-gray-700">
          The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly 
          used for font testing. Special characters include: © 2024 ToggleBox™, user@example.com, $129.99, 50% off, 
          and symbols like &amp;, @, #, %, and *.
        </p>
        <p className="preview-text text-base leading-relaxed mb-4 text-gray-600" data-testid="responsive-text">
          <span className="text-sm md:text-base lg:text-lg">
            This paragraph demonstrates responsive typography with different sizes across screen widths.
            It showcases how text can adapt to various viewport dimensions while maintaining readability.
          </span>
        </p>
      </section>

      {/* Interactive Buttons */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-4 mb-4">
          <button className="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
            Primary Button
          </button>
          <button className="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300">
            Secondary Button
          </button>
          <button className="preview-button px-4 py-2 rounded-md font-medium transition-colors border border-blue-600 text-blue-600 hover:bg-blue-50">
            Outline Button
          </button>
        </div>
      </section>

      {/* Form Elements */}
      <section className="mb-8">
        <form className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Sample Form</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="preview-button px-6 py-2 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700"
          >
            Submit Form
          </button>
        </form>
      </section>

      {/* Lists */}
      <section className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Unordered List</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>First list item with standard content</li>
              <li>Second item demonstrating list styling</li>
              <li>Third item with <strong>bold text</strong> and <em>emphasis</em></li>
              <li>Fourth item containing a <a href="#" className="text-blue-600 hover:underline">hyperlink example</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Ordered List</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>First numbered item</li>
              <li>Second numbered item</li>
              <li>Third item with nested content</li>
              <li>Fourth item completing the sequence</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Responsive Grid Layout */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Responsive Card Grid</h3>
        <div data-testid="responsive-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div data-testid="card-1" className="preview-card p-4 rounded-lg shadow-sm border bg-white">
            <h4 className="font-semibold mb-2 text-gray-800">Card Title One</h4>
            <p className="text-gray-600 text-sm">
              This card demonstrates responsive layout behavior and shadow effects.
            </p>
          </div>
          <div data-testid="card-2" className="preview-card p-4 rounded-lg shadow-sm border bg-white">
            <h4 className="font-semibold mb-2 text-gray-800">Card Title Two</h4>
            <p className="text-gray-600 text-sm">
              Each card adapts to different screen sizes while maintaining consistent spacing.
            </p>
          </div>
          <div data-testid="card-3" className="preview-card p-4 rounded-lg shadow-sm border bg-white">
            <h4 className="font-semibold mb-2 text-gray-800">Card Title Three</h4>
            <p className="text-gray-600 text-sm">
              The grid system demonstrates mobile-first responsive design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Gradient Showcase */}
      <section className="mb-8">
        <div 
          data-testid="gradient-showcase" 
          className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg text-white text-center"
        >
          <h3 className="text-xl font-bold mb-2">Gradient Background Demonstration</h3>
          <p className="text-purple-100">
            This section showcases gradient backgrounds that can be dynamically modified 
            for color, direction, and stop points in the CSS preview engine.
          </p>
        </div>
      </section>

      {/* Additional Content for Testing */}
      <section className="mb-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Additional Typography Testing</h3>
          <p className="text-gray-700 mb-3">
            <strong>Bold text</strong>, <em>italic text</em>, <u>underlined text</u>, 
            <span className="line-through">strikethrough text</span>, and 
            <code className="bg-gray-200 px-1 rounded font-mono">inline code</code>.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
            "This blockquote demonstrates how quoted content appears with custom styling 
            and proper semantic markup for accessibility and SEO."
          </blockquote>
        </div>
      </section>
    </div>
  );
};