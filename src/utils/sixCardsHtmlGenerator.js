/**
 * Six Cards HTML Content Generator
 * 
 * Generates HTML content showcasing all 6 individual cards (.card-1 through .card-6)
 * along with the complete button system and alert components for export
 */

export const generateSixCardsHtmlContent = (alertStyles = {}, colorSystem = {}) => {
  const primary = colorSystem.primary || '#3b82f6';
  const primaryHover = colorSystem.primaryHover || '#2563eb';
  const secondary = colorSystem.secondary || '#6b7280';
  const success = colorSystem.success || '#22c55e';
  const warning = colorSystem.warning || '#f59e0b';
  const danger = colorSystem.danger || '#ef4444';
  const neutral = colorSystem.neutral || '#e5e7eb';
  const gradStart = colorSystem.start || primary;
  const gradEnd = colorSystem.end || primaryHover;
  return `
    <div data-testid="six-cards-template" class="preview-template p-6 max-w-6xl mx-auto bg-white">
      <!-- Hero Section with Gradient -->
      <section class="mb-10">
        <div class="gradient-showcase text-center">
          <h1 class="preview-heading text-4xl font-bold mb-4">
            🃏 Six Cards Showcase
          </h1>
          <p class="text-lg mb-6 opacity-90">
            Individual card designs ready to export. Each card can be styled independently with custom colors, borders, and effects.
          </p>
          <button class="btn-primary mr-4">Get Started</button>
          <button class="btn-secondary">Learn More</button>
        </div>
      </section>

      <!-- Alert System Demo -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Alert System Components
        </h2>
        <div class="space-y-4">
          <div class="alert-error">
            <span class="text-xl">${alertStyles.error?.icon || '🔥'}</span>
            <div>
              <div class="font-semibold">Error Alert</div>
              <div class="text-sm mt-1">Something went wrong. Please check your input and try again.</div>
            </div>
          </div>
          
          <div class="alert-warning">
            <span class="text-xl">${alertStyles.warning?.icon || '⚠️'}</span>
            <div>
              <div class="font-semibold">Warning Alert</div>
              <div class="text-sm mt-1">This action cannot be undone. Please proceed with caution.</div>
            </div>
          </div>
          
          <div class="alert-message">
            <span class="text-xl">${alertStyles.message?.icon || '💬'}</span>
            <div>
              <div class="font-semibold">Information Message</div>
              <div class="text-sm mt-1">Here's some helpful information to guide you through the process.</div>
            </div>
          </div>
          
          <div class="alert-success">
            <span class="text-xl">${alertStyles.success?.icon || '✅'}</span>
            <div>
              <div class="font-semibold">Success Alert</div>
              <div class="text-sm mt-1">Great! Your changes have been saved successfully.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Color System (Badges, Form Controls, Tabs, Progress, Links) -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">Color System Elements</h2>
        <!-- Badges -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Badges</div>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-primary">New</span>
            <span class="badge badge-success">Success</span>
            <span class="badge badge-warning">Warning</span>
            <span class="badge badge-danger">Error</span>
            <span class="badge badge-neutral">Neutral</span>
          </div>
        </div>

        <!-- Form Controls -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Form Controls</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input class="px-3 py-2 rounded-md border" placeholder="Input" style="border-color:#d1d5db" />
            <select class="px-3 py-2 rounded-md border" style="border-color:#d1d5db"><option>Select</option></select>
            <label class="flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" class="w-4 h-4" /> Checkbox</label>
            <label class="flex items-center gap-2 text-sm text-gray-700"><input type="radio" name="r2" class="w-4 h-4" /> Radio</label>
          </div>
          <div class="text-xs text-gray-500 mt-2">Focus color uses your primary (${primary}).</div>
        </div>

        <!-- Tabs -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Tabs</div>
          <div class="tabs">
            <button class="tab active">Active</button>
            <button class="tab">Tab</button>
            <button class="tab">Tab</button>
          </div>
        </div>

        <!-- Progress -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Progress</div>
          <div class="progress"><div class="progress-bar" style="width:60%"></div></div>
        </div>

        <!-- Links -->
        <div>
          <div class="text-sm font-medium text-gray-700 mb-2">Links</div>
          <a href="#" class="text-sm link">Link example</a>
        </div>
      </section>

      <!-- Additional Colorful Components -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">Additional Components</h2>

        <!-- Chips / Tags -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Chips / Tags</div>
          <div class="flex flex-wrap gap-2">
            <span class="chip chip-primary">Primary</span>
            <span class="chip chip-success">Success</span>
            <span class="chip chip-warning">Warning</span>
            <span class="chip chip-danger">Danger</span>
            <span class="chip chip-outline">Outline</span>
          </div>
        </div>

        <!-- Avatars with Status Ring -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Avatars</div>
          <div class="flex items-center gap-4">
            <div class="avatar avatar-primary"></div>
            <div class="avatar avatar-success"></div>
            <div class="avatar avatar-warning"></div>
          </div>
        </div>

        <!-- Breadcrumbs -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Breadcrumbs</div>
          <nav class="breadcrumbs text-sm">
            <a href="#">Home</a>
            <span class="divider"> / </span>
            <a href="#">Library</a>
            <span class="divider"> / </span>
            <span class="current">Data</span>
          </nav>
        </div>

        <!-- Pagination -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Pagination</div>
          <div class="pagination">
            <button class="page">Prev</button>
            <button class="page">1</button>
            <button class="page page-active">2</button>
            <button class="page">3</button>
            <button class="page">Next</button>
          </div>
        </div>

        <!-- Table -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Table</div>
          <div class="overflow-auto rounded border" style="border-color:${neutral}">
            <table class="table min-w-full text-sm">
              <thead>
                <tr>
                  <th class="text-left px-3 py-2">User</th>
                  <th class="text-left px-3 py-2">Role</th>
                  <th class="text-left px-3 py-2">Status</th>
                  <th class="text-left px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t" style="border-color:${neutral}">
                  <td class="px-3 py-2">Jane Cooper</td>
                  <td class="px-3 py-2">Admin</td>
                  <td class="px-3 py-2"><span class="pill pill-success">Active</span></td>
                  <td class="px-3 py-2"><button class="btn-secondary text-xs px-3 py-1">View</button></td>
                </tr>
                <tr class="border-t bg-gray-50" style="border-color:${neutral}">
                  <td class="px-3 py-2">Cody Fisher</td>
                  <td class="px-3 py-2">Editor</td>
                  <td class="px-3 py-2"><span class="pill pill-warning">Pending</span></td>
                  <td class="px-3 py-2"><button class="btn-primary text-xs px-3 py-1">Invite</button></td>
                </tr>
                <tr class="border-t" style="border-color:${neutral}">
                  <td class="px-3 py-2">Esther Howard</td>
                  <td class="px-3 py-2">Viewer</td>
                  <td class="px-3 py-2"><span class="pill pill-danger">Blocked</span></td>
                  <td class="px-3 py-2"><button class="btn-delete text-xs px-3 py-1">Remove</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Toggle Switches -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Toggles</div>
          <div class="flex items-center gap-6">
            <div class="toggle on"><div class="knob"></div></div>
            <div class="toggle"><div class="knob"></div></div>
          </div>
        </div>

        <!-- Toasts -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Toasts</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="toast toast-success"><span class="icon">✓</span><div><div class="font-semibold">Saved</div><div class="text-sm text-gray-600">Your changes were saved successfully.</div></div></div>
            <div class="toast toast-warning"><span class="icon">!</span><div><div class="font-semibold">Heads up</div><div class="text-sm text-gray-600">This action may affect live users.</div></div></div>
            <div class="toast toast-danger"><span class="icon">⨉</span><div><div class="font-semibold">Failed</div><div class="text-sm text-gray-600">Something went wrong. Try again.</div></div></div>
            <div class="toast toast-message"><span class="icon">i</span><div><div class="font-semibold">Info</div><div class="text-sm text-gray-600">New update available.</div></div></div>
          </div>
        </div>

        <!-- Code Block -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Code Block</div>
          <pre class="code-block"><code><span class="c">/* Import stylesheet */</span>
<span class="k">link</span><span class="p">(</span><span class="fn">rel</span><span class="p">=</span><span class="s">"stylesheet"</span><span class="p">,</span> <span class="fn">href</span><span class="p">=</span><span class="s">"six-cards-stylesheet.css"</span><span class="p">)</span>

<span class="c">// Use classes</span>
<span class="k">div</span><span class="p">(</span><span class="fn">class</span><span class="p">=</span><span class="s">"card-1"</span><span class="p">)</span>
</code></pre>
        </div>

        <!-- Simple Chart -->
        <div>
          <div class="text-sm font-medium text-gray-700 mb-2">Mini Chart</div>
          <div class="chart">
            <div class="bar"><div class="bar-fill" style="width:70%"></div></div>
            <div class="bar"><div class="bar-fill" style="width:45%"></div></div>
            <div class="bar"><div class="bar-fill" style="width:85%"></div></div>
          </div>
        </div>
      </section>

      <!-- Six Individual Cards Showcase -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Individual Card Designs (.card-1 through .card-6)
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Card 1 -->
          <div class="card-1" data-testid="card-1-showcase">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-1">Card 1 Design</h3>
                <p class="text-sm text-gray-600">.card-1</p>
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Featured</span>
            </div>
            <p class="preview-text text-sm text-gray-700 mb-4">
              This is Card 1 with customizable styling. Perfect for featured content, announcements, or primary information blocks.
            </p>
            <div class="flex gap-2">
              <button class="btn-primary text-xs px-3 py-1">Action</button>
              <button class="btn-secondary text-xs px-3 py-1">Details</button>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="card-2" data-testid="card-2-showcase">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Card 2 Design</h3>
                <p class="text-sm text-gray-600">.card-2</p>
              </div>
            </div>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 2 showcases profile-style layouts with avatar integration and modern spacing.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">Updated 2h ago</span>
              <button class="btn-ok text-xs px-3 py-1">View</button>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="card-3" data-testid="card-3-showcase">
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📊</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Card 3 Design</h3>
              <p class="text-sm text-gray-600 mb-1">.card-3</p>
              <p class="text-2xl font-bold text-purple-600 mb-2">+15.3%</p>
              <p class="preview-text text-sm text-gray-700 mb-4">
                Statistics and metrics display with centered content layout.
              </p>
              <button class="btn-submit text-xs px-4 py-2">Analyze</button>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="card-4" data-testid="card-4-showcase">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Card 4 Design</h3>
            <p class="text-sm text-gray-600 mb-3">.card-4</p>
            <div class="space-y-2 mb-4">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Progress</span>
                <span class="font-medium">73%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full" style="width: 73%"></div>
              </div>
            </div>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Progress tracking and status updates with visual indicators.
            </p>
            <button class="btn-primary text-sm w-full">Continue</button>
          </div>

          <!-- Card 5 -->
          <div class="card-5" data-testid="card-5-showcase">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-1">Card 5 Design</h3>
                <p class="text-sm text-gray-600">.card-5</p>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span class="text-sm text-red-600 font-medium">Alert</span>
              </div>
            </div>
            <div class="flex -space-x-2 mb-4">
              <div class="w-8 h-8 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-white">A</span>
              </div>
              <div class="w-8 h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-white">B</span>
              </div>
              <div class="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-white">C</span>
              </div>
            </div>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Team collaboration and notification cards with status indicators.
            </p>
            <div class="flex gap-2">
              <button class="btn-delete text-xs px-3 py-1">Dismiss</button>
              <button class="btn-secondary text-xs px-3 py-1">Review</button>
            </div>
          </div>

          <!-- Card 6 -->
          <div class="card-6" data-testid="card-6-showcase">
            <div class="text-center">
              <span class="text-4xl mb-4 block">🎨</span>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Card 6 Design</h3>
              <p class="text-sm text-gray-600 mb-3">.card-6</p>
              <p class="preview-text text-sm text-gray-700 mb-4">
                Creative and artistic content with centered layout and visual emphasis.
              </p>
              <div class="flex justify-center gap-2">
                <button class="btn-primary text-xs px-3 py-1">Create</button>
                <button class="btn-ok text-xs px-3 py-1">Preview</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Button System Showcase -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Complete Button System
        </h2>
        <div class="bg-gray-50 p-6 rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            
            <!-- Primary Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Primary</h4>
              <div class="space-y-2">
                <button class="btn-primary w-full text-sm">Create New</button>
                <button class="btn-primary w-full text-sm">Get Started</button>
              </div>
            </div>

            <!-- Secondary Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Secondary</h4>
              <div class="space-y-2">
                <button class="btn-secondary w-full text-sm">Learn More</button>
                <button class="btn-secondary w-full text-sm">View Details</button>
              </div>
            </div>

            <!-- Submit Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Submit</h4>
              <div class="space-y-2">
                <button class="btn-submit w-full text-sm">Submit Form</button>
                <button class="btn-submit w-full text-sm">Save Changes</button>
              </div>
            </div>

            <!-- OK Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">OK / Confirm</h4>
              <div class="space-y-2">
                <button class="btn-ok w-full text-sm">OK, Got It</button>
                <button class="btn-ok w-full text-sm">Confirm</button>
              </div>
            </div>

            <!-- Delete Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Delete</h4>
              <div class="space-y-2">
                <button class="btn-delete w-full text-sm">Delete Item</button>
                <button class="btn-delete w-full text-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Form with Cards -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Form Integration Example
        </h2>
        <div class="card-1">
          <form>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Contact Form in Card 1</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div class="flex gap-3">
              <button type="button" class="btn-submit flex-1">Send Message</button>
              <button type="button" class="btn-secondary">Save Draft</button>
              <button type="button" class="btn-delete px-4">Clear</button>
            </div>
          </form>
        </div>
      </section>

      <!-- Visual Divider -->
      <div class="my-12 h-px bg-gray-200"></div>

      <!-- Usage Examples (reusing same six card classes) -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-2 text-gray-800">
          Examples using the same six card classes
        </h2>
        <p class="text-sm text-gray-600 mb-6">
          These examples reuse .card-1 through .card-6 to show the same styles in different contexts.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="card-2">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Dashboard Widget</h3>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 2 styling perfect for dashboard widgets, metrics display, and status cards.
            </p>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600">Status: <span class="text-green-600 font-medium">Active</span></span>
              <button class="btn-ok text-xs px-3 py-1">Monitor</button>
            </div>
          </div>

          <div class="card-3">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Product Card</h3>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 3 styling ideal for product listings, feature highlights, and call-to-action sections.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-600">$29.99</span>
              <button class="btn-primary text-sm px-4 py-2">Add to Cart</button>
            </div>
          </div>

          <div class="card-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Settings Panel</h3>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 4 styling works great for settings panels, configuration forms, and control interfaces.
            </p>
            <div class="flex gap-2">
              <button class="btn-secondary text-sm flex-1">Configure</button>
              <button class="btn-primary text-sm flex-1">Apply</button>
            </div>
          </div>

          <div class="card-5">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Notification Card</h3>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 5 styling perfect for notifications, alerts, and important messages that need attention.
            </p>
            <div class="flex gap-2">
              <button class="btn-ok text-sm flex-1">Mark Read</button>
              <button class="btn-delete text-sm px-4">Dismiss</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Export Information -->
      <section class="text-center">
        <div class="card-6">
          <h2 class="preview-heading text-2xl font-semibold mb-4 text-gray-800">
            Ready to Export Your Styles?
          </h2>
          <p class="preview-text text-gray-700 mb-6 max-w-2xl mx-auto">
            Your custom stylesheet includes all 6 card classes (.card-1 through .card-6), 
            complete button system (.btn-primary, .btn-secondary, .btn-delete, .btn-submit, .btn-ok), 
            and alert components (.alert-error, .alert-warning, .alert-message, .alert-success).
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn-submit px-8 py-3">Export Stylesheet</button>
            <button class="btn-secondary px-8 py-3">View Documentation</button>
            <button class="btn-primary px-8 py-3">Download All</button>
          </div>
          <p class="text-xs text-gray-500 mt-4">
            Complete CSS ready for production • Mobile responsive • Cross-browser compatible
          </p>
        </div>
      </section>
    </div>
  `;
};

/**
 * Generates minimal HTML for testing individual cards
 */
export const generateSingleCardTestContent = (cardNumber = 1) => {
  return `
    <div class="preview-template p-6 max-w-lg mx-auto">
      <h1 class="preview-heading text-2xl font-bold mb-6">Card ${cardNumber} Test</h1>
      
      <div class="card-${cardNumber} mb-6">
        <h2 class="text-lg font-semibold mb-3">Card ${cardNumber} Design</h2>
        <p class="preview-text mb-4">This is a test of Card ${cardNumber} styling with custom properties.</p>
        <div class="flex gap-3">
          <button class="btn-primary">Primary</button>
          <button class="btn-secondary">Secondary</button>
        </div>
      </div>

      <div class="alert-message mb-4">
        <span class="text-xl">💡</span>
        <div>
          <div class="font-semibold">Card ${cardNumber} Active</div>
          <div class="text-sm mt-1">This card is using the .card-${cardNumber} class with your custom styling.</div>
        </div>
      </div>
    </div>
  `;
};