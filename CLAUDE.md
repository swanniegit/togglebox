# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ToggleBox is a real-time CSS preview engine built with React and Vite. The project is a showcase application featuring secure iframe-based CSS injection for live preview functionality. It includes multiple interactive demos: color pickers, gradient builders, CSS playgrounds, and responsive template previews.

## Development Commands

### Development Server
```bash
npm run dev         # Start Vite dev server on localhost:3000 (auto-opens browser)
npm run build       # Build for production
npm run preview     # Preview production build
```

### Testing
```bash
npm test            # Run Jest test suite
npm run test:watch  # Run tests in watch mode
```

### Single Test Execution
```bash
npm test -- --testNamePattern="specific test name"
npm test -- src/components/__tests__/ComponentName.test.jsx
```

## Architecture & Key Components

### Core Architecture
- **React 18** with Vite build system
- **TailwindCSS** for styling with PostCSS processing
- **Jest + React Testing Library** for testing
- **Modular component structure** with dedicated utilities

### Security-First Design
The project emphasizes security for CSS/HTML injection:
- `IframePreview` component uses sandboxed iframes with CSP headers
- Content sanitization utilities in `src/utils/htmlContentGenerator.js`
- XSS prevention through careful input validation

### Key Components

**IframePreview** (`src/components/IframePreview.jsx`)
- Secure iframe rendering with content sanitization
- Real-time CSS injection without page reload
- CSP headers and sandbox attributes for security
- Data URL generation for isolated content

**App Structure**
- React Router with multiple demo pages: Landing (`/`), Interactive (`/interactive`), Playground (`/playground`), Color Picker (`/color-picker`), Template (`/template`)
- Navigation component (`Nav.jsx`) provides route switching

**Interactive Demos**
- **SixCardsInteractive** - Main interactive demo with CSS editing and live preview
- **StylePlayground** - Advanced CSS playground with preset themes
- **ColorPicker** & **ColorPickerDemo** - Professional color picker with validation
- **GradientBuilder** - Interactive gradient creation tools
- **ProInteractivePreview** - Enhanced preview with additional features

**Content Generators**
- Multiple HTML content generators in `src/utils/` for different demo scenarios
- `htmlContentGenerator.js` - Core template content with security validation
- `sixCardsHtmlGenerator.js`, `proHtmlContentGenerator.js` - Specialized content for specific demos

### Testing Strategy
- Comprehensive test coverage in `src/components/__tests__/`
- Security-focused testing in `IframeSecurity.test.jsx`
- Custom Jest matchers defined in `src/test-setup.js`
- JSDoc environment with React Testing Library

### Utility Structure
- `src/utils/htmlContentGenerator.js` - Secure HTML/CSS content generation with validation functions
- `src/utils/colorUtils.js` - Color manipulation and validation utilities
- `src/utils/gradientUtils.js` - Gradient creation and processing utilities
- Multiple specialized content generators for different demo components
- Security utilities for sanitizing CSS and HTML content throughout all utilities

## Development Notes

### Component Styling
- Uses CSS modules for component-specific styles (`.css` files alongside components)
- TailwindCSS for utility classes and responsive design
- Consistent naming with `preview-` prefixed classes for iframe content

### Security Considerations
- All user input is sanitized before iframe injection
- CSP headers prevent script execution in preview iframes
- Sandbox attributes limit iframe capabilities to styling only
- Content validation utilities prevent XSS attacks

### Testing Patterns
- Components use `data-testid` attributes for reliable testing
- Custom Jest matchers in test setup for enhanced assertions
- Mocked iframe interactions for security testing
- Separated unit tests for utilities and integration tests for components

### File Organization
```
src/
├── components/          # React components (primarily .jsx files)
│   ├── __tests__/      # Component test files  
│   └── *.jsx           # Component files
├── utils/              # Utility functions and specialized content generators
├── pages/              # Page components (LandingPage.jsx)
├── main.jsx            # App entry point
├── App.jsx             # Main app component with routing
└── test-setup.js       # Jest configuration and custom matchers
```

### Application Routes
- `/` - Landing page with dynamic color schemes and feature showcase
- `/interactive` - Main interactive demo (SixCardsInteractive)
- `/playground` - Advanced CSS playground (StylePlayground)  
- `/color-picker` - Dedicated color picker demo
- `/template` - Sample HTML template component
- `/preview` - Preview demo component