# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ToggleBox is a real-time CSS preview engine built with React and Vite. The project demonstrates secure iframe-based CSS injection for live preview functionality with multiple demo components including color pickers and gradient builders.

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

**PreviewDemo** (`src/components/PreviewDemo.jsx`)
- Main demo interface with CSS editor and presets
- Real-time preview updates using IframePreview
- Built-in CSS themes (colorful, dark, minimal)

**ColorPicker** (`src/components/ColorPicker.jsx`)
- Professional color picker with multiple input modes (HEX, RGB, HSV)
- Accessibility features including contrast checking
- Color validation utilities in `src/utils/colorUtils.js`

**GradientBuilder** (`src/components/GradientBuilder.jsx`)
- Interactive gradient creation with live preview
- Multiple gradient types and direction controls

### Testing Strategy
- Comprehensive test coverage in `src/components/__tests__/`
- Security-focused testing in `IframeSecurity.test.jsx`
- Custom Jest matchers defined in `src/test-setup.js`
- JSDoc environment with React Testing Library

### Utility Structure
- `src/utils/htmlContentGenerator.js` - Secure HTML/CSS content generation
- `src/utils/colorUtils.js` - Color manipulation and validation utilities
- Security utilities for sanitizing CSS and HTML content

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
├── components/          # React components with co-located CSS
│   ├── __tests__/      # Component test files  
│   └── *.jsx, *.css    # Component files and styles
├── utils/              # Utility functions and helpers
└── test-setup.js       # Jest configuration and custom matchers
```