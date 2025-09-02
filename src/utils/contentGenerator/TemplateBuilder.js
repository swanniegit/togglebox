/**
 * Template Builder - Manages template configurations and composition
 * Defines available templates and their component compositions
 */

export class TemplateBuilder {
  constructor() {
    this.template = null;
    this.components = null;
    this.options = {};
  }

  setTemplate(templateName) {
    this.template = templateName;
    return this;
  }

  withComponents(componentLibrary) {
    this.components = componentLibrary;
    return this;
  }

  withOptions(options) {
    this.options = { ...this.options, ...options };
    return this;
  }

  build() {
    if (!this.template || !this.components) {
      throw new Error('Template and ComponentLibrary must be set before building');
    }

    const template = this.getTemplateConfig(this.template);
    return this.components.render(template, this.options);
  }

  getTemplateConfig(templateName) {
    const templates = {
      // Original sample template - comprehensive showcase
      sample: {
        sections: ['hero', 'typography', 'buttons', 'forms', 'lists', 'cards', 'gradient'],
        layout: 'standard',
        defaultOptions: {
          title: 'Main Heading - Typography Showcase',
          subtitle: 'Web Design Elements - Visual Hierarchy',
          showButtons: true,
          cardCount: 3,
          showActions: false,
          showValidation: true
        }
      },

      // Six cards interactive demo
      sixCards: {
        sections: ['hero', 'alerts', 'cards', 'buttons'],
        layout: 'showcase',
        defaultOptions: {
          title: 'Six Cards Interactive Demo',
          subtitle: 'Real-time CSS Styling with Live Preview',
          cardCount: 6,
          showActions: true,
          showVariants: true,
          containerClass: 'preview-template p-6 max-w-6xl mx-auto bg-white'
        }
      },

      // Professional demo template
      professional: {
        sections: ['hero', 'alerts', 'cards', 'forms', 'buttons'],
        layout: 'professional',
        defaultOptions: {
          title: 'Professional Dashboard Demo',
          subtitle: 'Advanced UI Components with Interactive Styling',
          cardCount: 4,
          showActions: true,
          showVariants: true,
          showValidation: true,
          containerClass: 'preview-template p-8 max-w-7xl mx-auto bg-white'
        }
      },

      // Minimal template for basic previews
      minimal: {
        sections: ['hero', 'buttons', 'cards'],
        layout: 'minimal',
        defaultOptions: {
          title: 'Minimal Preview',
          subtitle: '',
          cardCount: 2,
          showActions: false,
          showVariants: false,
          containerClass: 'preview-template p-4 max-w-3xl mx-auto bg-white'
        }
      },

      // Typography focused template
      typography: {
        sections: ['typography', 'lists'],
        layout: 'standard',
        defaultOptions: {
          containerClass: 'preview-template p-6 max-w-4xl mx-auto bg-white typography-focus'
        }
      },

      // Form focused template
      forms: {
        sections: ['hero', 'forms', 'buttons'],
        layout: 'standard',
        defaultOptions: {
          title: 'Form Components Demo',
          subtitle: 'Interactive Form Elements and Validation',
          showValidation: true,
          showVariants: false
        }
      },

      // Alert components showcase
      alerts: {
        sections: ['hero', 'alerts', 'buttons'],
        layout: 'standard',
        defaultOptions: {
          title: 'Alert Components Showcase',
          subtitle: 'Different alert types and styling options'
        }
      }
    };

    const template = templates[templateName];
    if (!template) {
      console.warn(`Template "${templateName}" not found, using "sample" template`);
      return templates.sample;
    }

    // Merge default options with provided options
    return {
      ...template,
      defaultOptions: { ...template.defaultOptions, ...this.options }
    };
  }

  // Utility method to get available template names
  getAvailableTemplates() {
    return [
      'sample',
      'sixCards', 
      'professional',
      'minimal',
      'typography',
      'forms',
      'alerts'
    ];
  }

  // Utility method to get template description
  getTemplateDescription(templateName) {
    const descriptions = {
      sample: 'Comprehensive showcase with all component types',
      sixCards: 'Interactive demo focused on card layouts',
      professional: 'Advanced UI components for dashboard-style layouts',
      minimal: 'Simple preview with essential components',
      typography: 'Text-focused template for typography testing',
      forms: 'Form elements and validation showcase',
      alerts: 'Alert components with different states and styles'
    };
    
    return descriptions[templateName] || 'Template description not available';
  }

  // Reset builder state
  reset() {
    this.template = null;
    this.components = null;
    this.options = {};
    return this;
  }

  // Validate template configuration
  validateTemplate(templateName) {
    const config = this.getTemplateConfig(templateName);
    const errors = [];

    if (!config.sections || !Array.isArray(config.sections)) {
      errors.push('Template must have a sections array');
    }

    if (config.sections && config.sections.length === 0) {
      errors.push('Template must have at least one section');
    }

    if (!config.layout) {
      errors.push('Template must specify a layout');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}