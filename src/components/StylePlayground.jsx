import React, { useState, useCallback } from 'react';
import { IframePreview } from './IframePreview';
import { generateSampleHtmlContent } from '../utils/htmlContentGenerator';

/**
 * StylePlayground - Dedicated page for exploring CSS styles with multiple layout options
 * 
 * Features:
 * - Multiple layout templates to choose from
 * - CSS editor with syntax highlighting
 * - Real-time preview with various screen sizes
 * - Export generated CSS
 */
export const StylePlayground = ({ className = '' }) => {
  const [cssContent, setCssContent] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('default');
  const [viewportSize, setViewportSize] = useState('desktop');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const templates = {
    default: {
      name: 'Default Template',
      description: 'Standard layout with cards, buttons, and text elements',
      content: generateSampleHtmlContent()
    },
    blog: {
      name: 'Blog Layout',
      description: 'Article-style layout with headings and paragraphs',
      content: `
        <div data-testid="blog-template" class="preview-template p-6 max-w-4xl mx-auto bg-white">
          <article class="blog-article">
            <header class="mb-8">
              <h1 class="preview-heading text-4xl font-bold mb-4 text-gray-900">
                The Art of Modern Web Design
              </h1>
              <div class="blog-meta text-sm text-gray-600 mb-4">
                Published on <time datetime="2024-03-15">March 15, 2024</time> by <span class="author">Design Team</span>
              </div>
            </header>

            <section class="mb-8">
              <h2 class="preview-subheading text-2xl font-semibold mb-4 text-gray-800">
                Introduction
              </h2>
              <p class="preview-text text-base leading-relaxed mb-4 text-gray-700">
                In today's digital landscape, web design has evolved beyond simple aesthetics. 
                Modern web design combines functionality, accessibility, and visual appeal to create 
                experiences that truly resonate with users.
              </p>
              <p class="preview-text text-base leading-relaxed mb-6 text-gray-700">
                This article explores the key principles that define contemporary web design, 
                from responsive layouts to interactive elements that enhance user engagement.
              </p>
            </section>

            <section class="mb-8">
              <h2 class="preview-subheading text-2xl font-semibold mb-4 text-gray-800">
                Key Design Principles
              </h2>
              <div class="design-principles grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
                  <h3 class="text-lg font-semibold mb-3 text-gray-800">Simplicity</h3>
                  <p class="text-gray-600 text-sm">
                    Clean, uncluttered designs that focus on essential elements and clear navigation.
                  </p>
                </div>
                <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
                  <h3 class="text-lg font-semibold mb-3 text-gray-800">Responsiveness</h3>
                  <p class="text-gray-600 text-sm">
                    Designs that adapt seamlessly across all devices and screen sizes.
                  </p>
                </div>
              </div>
              <div class="cta-section text-center">
                <button class="preview-button px-6 py-3 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
                  Learn More About Design
                </button>
              </div>
            </section>
          </article>
        </div>
      `
    },
    dashboard: {
      name: 'Dashboard Layout',
      description: 'Stats and metrics layout with cards and charts',
      content: `
        <div data-testid="dashboard-template" class="preview-template p-6 max-w-6xl mx-auto bg-gray-50">
          <header class="mb-8">
            <h1 class="preview-heading text-3xl font-bold mb-2 text-gray-900">
              Analytics Dashboard
            </h1>
            <p class="text-gray-600">Monitor your website's performance and user engagement</p>
          </header>

          <div class="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <div class="stat-icon w-10 h-10 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                📊
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-1">24.5K</h3>
              <p class="text-sm text-gray-600">Total Visitors</p>
              <div class="stat-change text-xs text-green-600 mt-1">+12% from last month</div>
            </div>

            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <div class="stat-icon w-10 h-10 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                💰
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-1">$15.2K</h3>
              <p class="text-sm text-gray-600">Revenue</p>
              <div class="stat-change text-xs text-green-600 mt-1">+8% from last month</div>
            </div>

            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <div class="stat-icon w-10 h-10 bg-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                📈
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-1">3.2%</h3>
              <p class="text-sm text-gray-600">Conversion Rate</p>
              <div class="stat-change text-xs text-red-600 mt-1">-0.3% from last month</div>
            </div>

            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <div class="stat-icon w-10 h-10 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                ⏱️
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-1">2m 34s</h3>
              <p class="text-sm text-gray-600">Avg. Session</p>
              <div class="stat-change text-xs text-green-600 mt-1">+15s from last month</div>
            </div>
          </div>

          <div class="dashboard-actions flex flex-wrap gap-4 mb-8">
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
              Export Report
            </button>
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300">
              Filter Data
            </button>
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors border border-blue-600 text-blue-600 hover:bg-blue-50">
              Share Dashboard
            </button>
          </div>

          <div class="chart-section">
            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <h3 class="text-lg font-semibold mb-4 text-gray-800">Traffic Overview</h3>
              <div class="chart-placeholder h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <p class="text-gray-500">📊 Chart visualization would appear here</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    portfolio: {
      name: 'Portfolio Layout',
      description: 'Showcase layout with image placeholders and project cards',
      content: `
        <div data-testid="portfolio-template" class="preview-template p-6 max-w-5xl mx-auto bg-white">
          <header class="text-center mb-12">
            <h1 class="preview-heading text-4xl font-bold mb-4 text-gray-900">
              Creative Portfolio
            </h1>
            <p class="preview-text text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative designs and creative solutions that bring ideas to life
            </p>
          </header>

          <section class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div class="preview-card rounded-lg overflow-hidden shadow-sm border bg-white">
              <div class="project-image h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span class="text-white text-2xl">🎨</span>
              </div>
              <div class="project-content p-6">
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Brand Identity Design</h3>
                <p class="preview-text text-sm text-gray-600 mb-4">
                  Complete brand identity system with logo, colors, and typography guidelines.
                </p>
                <button class="preview-button px-4 py-2 text-sm rounded-md font-medium transition-colors bg-purple-600 text-white hover:bg-purple-700">
                  View Project
                </button>
              </div>
            </div>

            <div class="preview-card rounded-lg overflow-hidden shadow-sm border bg-white">
              <div class="project-image h-48 bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center">
                <span class="text-white text-2xl">📱</span>
              </div>
              <div class="project-content p-6">
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Mobile App UI</h3>
                <p class="preview-text text-sm text-gray-600 mb-4">
                  User interface design for a productivity mobile application with clean aesthetics.
                </p>
                <button class="preview-button px-4 py-2 text-sm rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700">
                  View Project
                </button>
              </div>
            </div>

            <div class="preview-card rounded-lg overflow-hidden shadow-sm border bg-white">
              <div class="project-image h-48 bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center">
                <span class="text-white text-2xl">🌐</span>
              </div>
              <div class="project-content p-6">
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Website Redesign</h3>
                <p class="preview-text text-sm text-gray-600 mb-4">
                  Modern website redesign focusing on user experience and conversion optimization.
                </p>
                <button class="preview-button px-4 py-2 text-sm rounded-md font-medium transition-colors bg-orange-600 text-white hover:bg-orange-700">
                  View Project
                </button>
              </div>
            </div>
          </section>

          <section class="contact-section text-center">
            <div class="preview-card p-8 rounded-lg shadow-sm border bg-gray-50">
              <h2 class="preview-subheading text-2xl font-semibold mb-4 text-gray-800">
                Let's Work Together
              </h2>
              <p class="preview-text text-gray-600 mb-6 max-w-md mx-auto">
                Have a project in mind? Let's discuss how we can bring your vision to life.
              </p>
              <div class="contact-buttons flex flex-wrap justify-center gap-4">
                <button class="preview-button px-6 py-3 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
                  Get In Touch
                </button>
                <button class="preview-button px-6 py-3 rounded-md font-medium transition-colors border border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Resume
                </button>
              </div>
            </div>
          </section>
        </div>
      `
    }
  };

  const viewportSizes = {
    mobile: { width: '375px', height: '667px', name: 'Mobile (375px)' },
    tablet: { width: '768px', height: '1024px', name: 'Tablet (768px)' },
    desktop: { width: '100%', height: '700px', name: 'Desktop (Full)' }
  };

  const handleCssChange = useCallback((newCss) => {
    setError(null);
    setCssContent(newCss);
  }, []);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
    setError(null);
  }, []);

  const handleIframeError = useCallback((errorEvent) => {
    setIsLoading(false);
    setError('Failed to load preview content');
    console.error('Preview iframe error:', errorEvent);
  }, []);

  const exportCss = () => {
    const blob = new Blob([cssContent], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedTemplate}-styles.css`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const currentTemplate = templates[selectedTemplate];
  const currentViewport = viewportSizes[viewportSize];

  return (
    <div className={`style-playground ${className}`} data-testid="style-playground">
      {/* Header */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          CSS Style Playground
        </h2>
        <p className="text-gray-600">
          Experiment with different layouts and CSS styles in real-time. Choose a template and start styling!
        </p>
      </div>

      {/* Template & Viewport Controls */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Template Selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Template</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.entries(templates).map(([key, template]) => (
                <button
                  key={key}
                  onClick={() => setSelectedTemplate(key)}
                  className={`p-3 text-left rounded-lg border-2 transition-colors ${
                    selectedTemplate === key
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  data-testid={`template-${key}`}
                >
                  <div className="font-medium text-sm text-gray-800">{template.name}</div>
                  <div className="text-xs text-gray-600 mt-1">{template.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Viewport Selection */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Viewport Size</h3>
            <div className="space-y-2">
              {Object.entries(viewportSizes).map(([key, viewport]) => (
                <button
                  key={key}
                  onClick={() => setViewportSize(key)}
                  className={`w-full p-3 text-left rounded-lg border transition-colors ${
                    viewportSize === key
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  data-testid={`viewport-${key}`}
                >
                  {viewport.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Editor & Preview */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* CSS Editor */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">CSS Editor</h3>
            <div className="flex gap-2">
              <button
                onClick={exportCss}
                disabled={!cssContent.trim()}
                className="px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                data-testid="export-css-button"
              >
                Export CSS
              </button>
              <button
                onClick={() => setCssContent('')}
                className="px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                data-testid="clear-css-button"
              >
                Clear
              </button>
            </div>
          </div>
          
          <textarea
            value={cssContent}
            onChange={(e) => handleCssChange(e.target.value)}
            placeholder={`/* Start styling your ${currentTemplate.name.toLowerCase()} */
.preview-card {
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.preview-button {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.preview-button:hover {
  transform: translateY(-2px);
}`}
            className="w-full h-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-none"
            data-testid="css-editor"
          />
          
          {error && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
        </div>

        {/* Preview */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-800">
              Preview - {currentTemplate.name}
            </h3>
            {isLoading && (
              <div className="flex items-center text-sm text-gray-500">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></div>
                Loading...
              </div>
            )}
          </div>
          
          <div 
            className="border rounded-lg overflow-hidden mx-auto"
            style={{ 
              width: currentViewport.width,
              maxWidth: '100%'
            }}
          >
            <IframePreview
              htmlContent={currentTemplate.content}
              cssContent={cssContent}
              height={currentViewport.height}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              className="w-full"
            />
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 rounded-md">
            <p className="text-xs text-blue-700">
              <strong>Tip:</strong> Try different CSS properties on elements with classes like 
              <code className="bg-blue-100 px-1 rounded">.preview-card</code>, 
              <code className="bg-blue-100 px-1 rounded">.preview-button</code>, and 
              <code className="bg-blue-100 px-1 rounded">.preview-text</code> to see instant results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};