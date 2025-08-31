/**
 * Professional HTML Content Generator
 * 
 * Generates comprehensive HTML content for the professional interactive preview
 * including all 6 card designs, semantic button system, and alert components
 */

export const generateProHtmlContent = (alertStyles = {}) => {
  return `
    <div data-testid="pro-html-template" class="preview-template p-6 max-w-5xl mx-auto bg-white">
      <!-- Hero Section with Gradient -->
      <section class="mb-12">
        <div class="gradient-showcase text-center">
          <h1 class="preview-heading text-4xl font-bold mb-4">
            🎨 Professional Component Showcase
          </h1>
          <p class="text-lg mb-6 opacity-90">
            Experience modern design systems with interactive cards, semantic buttons, and beautiful alerts.
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

      <!-- Card Showcase Grid -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Interactive Card Designs
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="preview-card" data-testid="showcase-card-1">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Project Alpha</h3>
                <p class="text-sm text-gray-600">Web Application Development</p>
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Active</span>
            </div>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Modern web application with real-time features and responsive design. Built with latest technologies.
            </p>
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-500">Due: March 15</div>
              <button class="btn-primary text-xs px-3 py-1">View Details</button>
            </div>
          </div>

          <div class="preview-card" data-testid="showcase-card-2">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">JS</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">JavaScript Course</h3>
                <p class="text-sm text-gray-600">Advanced Programming</p>
              </div>
            </div>
            <div class="mb-4">
              <div class="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-purple-600 h-2 rounded-full" style="width: 75%"></div>
              </div>
            </div>
            <button class="btn-secondary text-sm w-full">Continue Learning</button>
          </div>

          <div class="preview-card" data-testid="showcase-card-3">
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📈</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Analytics Report</h3>
              <p class="text-3xl font-bold text-green-600 mb-1">+24.5%</p>
              <p class="text-sm text-gray-600 mb-4">Growth this month</p>
              <button class="btn-ok text-sm px-4 py-2">View Report</button>
            </div>
          </div>

          <div class="preview-card" data-testid="showcase-card-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Team Collaboration</h3>
            <div class="flex -space-x-2 mb-4">
              <div class="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-white">JD</span>
              </div>
              <div class="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-white">SM</span>
              </div>
              <div class="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-white">AL</span>
              </div>
              <div class="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-gray-600">+3</span>
              </div>
            </div>
            <p class="preview-text text-sm text-gray-600 mb-4">
              6 team members working on this project. Last updated 2 hours ago.
            </p>
            <div class="flex gap-2">
              <button class="btn-primary text-xs px-3 py-1 flex-1">Join</button>
              <button class="btn-secondary text-xs px-3 py-1">Message</button>
            </div>
          </div>

          <div class="preview-card" data-testid="showcase-card-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-800">Server Status</h3>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span class="text-sm text-green-600 font-medium">Online</span>
              </div>
            </div>
            <div class="space-y-3 mb-4">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">CPU Usage</span>
                <span class="font-medium">45%</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Memory</span>
                <span class="font-medium">2.1GB / 4GB</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Uptime</span>
                <span class="font-medium">99.9%</span>
              </div>
            </div>
            <button class="btn-secondary text-sm w-full">View Details</button>
          </div>

          <div class="preview-card" data-testid="showcase-card-6">
            <div class="text-center">
              <span class="text-4xl mb-4 block">🎉</span>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Congratulations!</h3>
              <p class="preview-text text-sm text-gray-600 mb-4">
                You've completed all your tasks for today. Great job!
              </p>
              <button class="btn-submit text-sm px-6 py-2">Claim Reward</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Button System Showcase -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Semantic Button System
        </h2>
        <div class="bg-gray-50 p-6 rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Primary Actions -->
            <div>
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Primary Actions</h4>
              <div class="space-y-3">
                <button class="btn-primary w-full">Create New Project</button>
                <button class="btn-primary w-full">Start Campaign</button>
                <button class="btn-primary w-full">Upgrade Account</button>
              </div>
            </div>

            <!-- Secondary Actions -->
            <div>
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Secondary Actions</h4>
              <div class="space-y-3">
                <button class="btn-secondary w-full">View Details</button>
                <button class="btn-secondary w-full">Export Data</button>
                <button class="btn-secondary w-full">Share Link</button>
              </div>
            </div>

            <!-- Confirmation Actions -->
            <div>
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Confirmations</h4>
              <div class="space-y-3">
                <button class="btn-submit w-full">Submit Form</button>
                <button class="btn-ok w-full">OK, Got It</button>
                <button class="btn-delete w-full">Delete Item</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Form Example -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Interactive Form Components
        </h2>
        <div class="preview-card">
          <form>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input 
                type="email" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="john.doe@example.com"
              />
            </div>
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your project..."
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

      <!-- Stats Dashboard -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Dashboard Statistics
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="preview-card text-center">
            <div class="text-3xl font-bold text-blue-600 mb-2">2,847</div>
            <div class="text-sm text-gray-600">Total Users</div>
            <div class="text-xs text-green-600 mt-1">+12% this month</div>
          </div>
          
          <div class="preview-card text-center">
            <div class="text-3xl font-bold text-green-600 mb-2">$47,293</div>
            <div class="text-sm text-gray-600">Revenue</div>
            <div class="text-xs text-green-600 mt-1">+8.3% this month</div>
          </div>
          
          <div class="preview-card text-center">
            <div class="text-3xl font-bold text-purple-600 mb-2">94.2%</div>
            <div class="text-sm text-gray-600">Satisfaction</div>
            <div class="text-xs text-green-600 mt-1">+2.1% this month</div>
          </div>
          
          <div class="preview-card text-center">
            <div class="text-3xl font-bold text-orange-600 mb-2">1,439</div>
            <div class="text-sm text-gray-600">Support Tickets</div>
            <div class="text-xs text-red-600 mt-1">-5.2% this month</div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="text-center">
        <div class="preview-card">
          <h2 class="preview-heading text-2xl font-semibold mb-4 text-gray-800">
            Ready to Get Started?
          </h2>
          <p class="preview-text text-gray-600 mb-6 max-w-2xl mx-auto">
            Experience the power of professional design systems. Create beautiful, consistent user interfaces 
            with our comprehensive component library and real-time preview system.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn-submit px-8 py-3">Start Free Trial</button>
            <button class="btn-secondary px-8 py-3">View Documentation</button>
            <button class="btn-primary px-8 py-3">Contact Sales</button>
          </div>
          <p class="text-xs text-gray-500 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  `;
};

/**
 * Generates HTML content for testing specific card designs
 */
export const generateCardTestContent = (cardNumber = 1) => {
  const cardTypes = {
    1: { title: 'Classic Card', content: 'Clean and professional design with subtle shadows and traditional styling.' },
    2: { title: 'Modern Card', content: 'Contemporary look with rounded corners and soft backgrounds for a friendly feel.' },
    3: { title: 'Gradient Card', content: 'Eye-catching gradients that make your content stand out with vibrant colors.' },
    4: { title: 'Outlined Card', content: 'Minimalist approach with clean borders and transparent backgrounds.' },
    5: { title: 'Glass Card', content: 'Modern glassmorphism effect with backdrop blur for a premium appearance.' },
    6: { title: 'Neon Card', content: 'Futuristic neon styling perfect for dark themes and tech-focused applications.' }
  };

  const card = cardTypes[cardNumber] || cardTypes[1];

  return `
    <div class="preview-template p-6 max-w-2xl mx-auto">
      <h1 class="preview-heading text-2xl font-bold mb-6">Card Design ${cardNumber} Preview</h1>
      
      <div class="preview-card mb-6">
        <h2 class="text-lg font-semibold mb-3">${card.title}</h2>
        <p class="preview-text mb-4">${card.content}</p>
        <div class="flex gap-3">
          <button class="btn-primary">Primary Action</button>
          <button class="btn-secondary">Secondary</button>
        </div>
      </div>

      <div class="alert-message mb-4">
        <span class="text-xl">💡</span>
        <div>
          <div class="font-semibold">Design Tip</div>
          <div class="text-sm mt-1">This card design works great for ${card.title.toLowerCase()} layouts and professional applications.</div>
        </div>
      </div>
    </div>
  `;
};

/**
 * Generates minimal HTML for performance testing
 */
export const generateMinimalProContent = () => {
  return `
    <div class="preview-template p-6 max-w-lg mx-auto">
      <div class="preview-card mb-4">
        <h2 class="preview-heading">Quick Test</h2>
        <p class="preview-text">Minimal content for fast loading.</p>
        <button class="btn-primary">Test Button</button>
      </div>
      <div class="alert-message">
        <span>ℹ️</span>
        <div>Performance test mode active</div>
      </div>
    </div>
  `;
};