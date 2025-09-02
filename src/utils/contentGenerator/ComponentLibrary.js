/**
 * Component Library - Reusable content components for template generation
 * Provides standardized HTML components that can be composed into templates
 */

export class ComponentLibrary {
  constructor() {
    this.components = {
      hero: this.createHeroComponent,
      typography: this.createTypographyComponent,
      buttons: this.createButtonsComponent,
      cards: this.createCardsComponent,
      forms: this.createFormsComponent,
      alerts: this.createAlertsComponent,
      lists: this.createListsComponent,
      gradient: this.createGradientComponent
    };
  }

  render(template, options = {}) {
    const { sections, layout } = template;
    const renderedSections = sections.map(sectionName => {
      const component = this.components[sectionName.replace('-showcase', '').replace('cards-', 'cards').replace('buttons-system', 'buttons')];
      return component ? component.call(this, options) : '';
    }).filter(Boolean);

    return this.wrapInLayout(renderedSections.join('\n'), layout, options);
  }

  createHeroComponent(options = {}) {
    const { 
      title = 'Component Showcase', 
      subtitle = 'Real-time CSS Preview Engine',
      showButtons = true 
    } = options;
    
    return `
      <section class="mb-10">
        <div class="gradient-showcase text-center p-8 rounded-lg">
          <h1 class="preview-heading text-4xl font-bold mb-4 text-gray-900">${title}</h1>
          ${subtitle ? `<p class="text-lg mb-6 text-gray-700">${subtitle}</p>` : ''}
          ${showButtons ? `
            <div class="flex justify-center gap-4">
              <button class="preview-button btn-primary px-6 py-3 rounded-lg font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">Get Started</button>
              <button class="preview-button btn-secondary px-6 py-3 rounded-lg font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300">Learn More</button>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }

  createTypographyComponent(options = {}) {
    return `
      <section class="mb-8">
        <h1 class="preview-heading text-3xl font-bold mb-4 text-gray-900">Main Heading - Typography Showcase</h1>
        <h2 class="preview-subheading text-2xl font-semibold mb-3 text-gray-800">Secondary Heading - Web Design Elements</h2>
        <h3 class="text-xl font-medium mb-3 text-gray-700">Third Level Heading</h3>
        <h4 class="text-lg font-medium mb-2 text-gray-600">Fourth Level Heading</h4>
        <h5 class="text-base font-medium mb-2 text-gray-600">Fifth Level Heading</h5>
        <h6 class="text-sm font-medium mb-2 text-gray-500">Sixth Level Heading</h6>
        
        <div class="mt-6">
          <p class="preview-text text-base leading-relaxed mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            This paragraph demonstrates how text flows and wraps in different container widths. Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.
          </p>
          <p class="preview-text text-base leading-relaxed mb-4 text-gray-700">
            The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for font testing. Special characters include: © 2024 ToggleBox™, user@example.com, $129.99, 50% off, and symbols like &amp;, @, #, %, and *.
          </p>
          <p class="preview-text text-base leading-relaxed mb-4 text-gray-600" data-testid="responsive-text">
            <span class="text-sm md:text-base lg:text-lg">
              This paragraph demonstrates responsive typography with different sizes across screen widths. It showcases how text can adapt to various viewport dimensions while maintaining readability.
            </span>
          </p>
          <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-4">
            "This blockquote demonstrates how quoted content appears with custom styling and proper semantic markup for accessibility and SEO."
          </blockquote>
        </div>
      </section>
    `;
  }

  createButtonsComponent(options = {}) {
    const { showVariants = true } = options;
    
    return `
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Interactive Buttons</h3>
        <div class="flex flex-wrap gap-4">
          <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
            Primary Button
          </button>
          <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300">
            Secondary Button
          </button>
          ${showVariants ? `
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors border border-blue-600 text-blue-600 hover:bg-blue-50">
              Outline Button
            </button>
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700">
              Success Button
            </button>
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-red-600 text-white hover:bg-red-700">
              Danger Button
            </button>
          ` : ''}
        </div>
      </section>
    `;
  }

  createCardsComponent(options = {}) {
    const { cardCount = 3, showActions = true } = options;
    const cards = Array.from({ length: cardCount }, (_, i) => `
      <div data-testid="card-${i + 1}" class="preview-card p-6 rounded-lg shadow-sm border bg-white">
        <h4 class="font-semibold mb-3 text-gray-800">Card Title ${i + 1}</h4>
        <p class="text-gray-600 text-sm mb-4">
          This card demonstrates responsive layout behavior and styling effects. Each card adapts to different screen sizes.
        </p>
        ${showActions ? `
          <div class="flex gap-2">
            <button class="preview-button px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600">Action</button>
            <button class="preview-button px-3 py-1 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
          </div>
        ` : ''}
      </div>
    `).join('');

    return `
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Responsive Card Grid</h3>
        <div data-testid="responsive-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${cards}
        </div>
      </section>
    `;
  }

  createAlertsComponent(options = {}) {
    const { alertStyles = {} } = options;
    
    return `
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Alert Components</h3>
        <div class="space-y-4">
          <div class="alert alert-info p-4 rounded-lg border border-blue-200 bg-blue-50">
            <div class="flex items-center">
              <div class="info-icon mr-3 text-blue-600">ℹ️</div>
              <div>
                <h4 class="font-medium text-blue-800">Information Alert</h4>
                <p class="text-blue-700 text-sm">This is an informational message with helpful details.</p>
              </div>
            </div>
          </div>
          
          <div class="alert alert-success p-4 rounded-lg border border-green-200 bg-green-50">
            <div class="flex items-center">
              <div class="success-icon mr-3 text-green-600">✅</div>
              <div>
                <h4 class="font-medium text-green-800">Success Alert</h4>
                <p class="text-green-700 text-sm">Operation completed successfully!</p>
              </div>
            </div>
          </div>
          
          <div class="alert alert-warning p-4 rounded-lg border border-yellow-200 bg-yellow-50">
            <div class="flex items-center">
              <div class="warning-icon mr-3 text-yellow-600">⚠️</div>
              <div>
                <h4 class="font-medium text-yellow-800">Warning Alert</h4>
                <p class="text-yellow-700 text-sm">Please review this information carefully.</p>
              </div>
            </div>
          </div>
          
          <div class="alert alert-error p-4 rounded-lg border border-red-200 bg-red-50">
            <div class="flex items-center">
              <div class="error-icon mr-3 text-red-600">❌</div>
              <div>
                <h4 class="font-medium text-red-800">Error Alert</h4>
                <p class="text-red-700 text-sm">An error occurred. Please try again.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  createFormsComponent(options = {}) {
    const { showValidation = true } = options;
    
    return `
      <section class="mb-8">
        <form class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Sample Form</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
              ${showValidation ? '<p class="text-xs text-gray-500 mt-1">We\'ll never share your email</p>' : ''}
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" class="preview-button px-6 py-2 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700">
            Submit Form
          </button>
        </form>
      </section>
    `;
  }

  createListsComponent(options = {}) {
    return `
      <section class="mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800">Unordered List</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>First list item with standard content</li>
              <li>Second item demonstrating list styling</li>
              <li>Third item with <strong>bold text</strong> and <em>emphasis</em></li>
              <li>Fourth item with <a href="#" class="text-blue-600 hover:underline">hyperlink example</a></li>
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
    `;
  }

  createGradientComponent(options = {}) {
    const { gradientDirection = 'to-r', colors = ['purple-500', 'pink-500'] } = options;
    
    return `
      <section class="mb-8">
        <div 
          data-testid="gradient-showcase" 
          class="bg-gradient-${gradientDirection} from-${colors[0]} to-${colors[1]} p-8 rounded-lg text-white text-center"
        >
          <h3 class="text-xl font-bold mb-2">Gradient Background Demonstration</h3>
          <p class="text-purple-100">
            This section showcases gradient backgrounds that can be dynamically modified 
            for color, direction, and stop points in the CSS preview engine.
          </p>
        </div>
      </section>
    `;
  }

  wrapInLayout(content, layout = 'standard', options = {}) {
    const { containerClass = 'preview-template p-6 max-w-4xl mx-auto bg-white' } = options;
    
    const layouts = {
      standard: `<div data-testid="html-template" class="${containerClass}">${content}</div>`,
      showcase: `<div data-testid="html-template" class="${containerClass} showcase-layout">${content}</div>`,
      professional: `<div data-testid="html-template" class="${containerClass} professional-layout">${content}</div>`,
      minimal: `<div data-testid="html-template" class="${containerClass} minimal-layout">${content}</div>`
    };
    
    return layouts[layout] || layouts.standard;
  }
}