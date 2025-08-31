import { render, screen } from '@testing-library/react';
import { SampleHtmlTemplate } from '../SampleHtmlTemplate';

describe('SampleHtmlTemplate', () => {
  beforeEach(() => {
    render(<SampleHtmlTemplate />);
  });

  describe('Structure and Semantic Elements', () => {
    test('renders main container with preview-template class', () => {
      const container = screen.getByTestId('html-template');
      expect(container).toHaveClass('preview-template');
    });

    test('renders all heading levels (h1-h6)', () => {
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
      expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByRole('heading', { level: 4 }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument();
    });

    test('renders paragraph elements with preview-text class', () => {
      const paragraphs = screen.getAllByText(/Lorem ipsum|This is a sample paragraph/i);
      expect(paragraphs.length).toBeGreaterThan(0);
      paragraphs.forEach(p => {
        expect(p.closest('p')).toHaveClass('preview-text');
      });
    });

    test('renders interactive buttons with preview-button class', () => {
      const primaryButton = screen.getByRole('button', { name: /primary button/i });
      const secondaryButton = screen.getByRole('button', { name: /secondary button/i });
      
      expect(primaryButton).toHaveClass('preview-button');
      expect(secondaryButton).toHaveClass('preview-button');
    });

    test('renders form elements with proper labels and accessibility', () => {
      expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    });

    test('renders different list types (ordered and unordered)', () => {
      const lists = screen.getAllByRole('list');
      expect(lists.length).toBeGreaterThanOrEqual(2);
      
      // Check for list items
      const listItems = screen.getAllByRole('listitem');
      expect(listItems.length).toBeGreaterThanOrEqual(6);
    });
  });

  describe('CSS Class Structure', () => {
    test('applies color-modifiable classes to text elements', () => {
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toHaveClass('text-gray-900'); // Default color class
    });

    test('applies background-modifiable classes to card elements', () => {
      const cards = screen.getAllByTestId(/card/i);
      expect(cards.length).toBeGreaterThan(0);
      cards.forEach(card => {
        expect(card).toHaveClass('bg-white');
      });
    });

    test('includes gradient-ready elements', () => {
      const gradientElement = screen.getByTestId('gradient-showcase');
      expect(gradientElement).toBeInTheDocument();
      expect(gradientElement).toHaveClass('bg-gradient-to-r');
    });

    test('includes spacing classes that can be modified', () => {
      const container = screen.getByTestId('html-template');
      expect(container).toHaveClass('p-6'); // Padding class
    });
  });

  describe('Visual Hierarchy and Responsive Design', () => {
    test('implements proper heading hierarchy with different font sizes', () => {
      const h1 = screen.getByRole('heading', { level: 1 });
      const h2 = screen.getByRole('heading', { level: 2 });
      const h3s = screen.getAllByRole('heading', { level: 3 });
      
      expect(h1).toHaveClass('text-3xl');
      expect(h2).toHaveClass('text-2xl');
      // Check that at least one h3 has the expected class
      expect(h3s.some(h3 => h3.classList.contains('text-xl'))).toBe(true);
    });

    test('includes responsive grid layout', () => {
      const gridContainer = screen.getByTestId('responsive-grid');
      expect(gridContainer).toHaveClass('grid');
      expect(gridContainer).toHaveClass('grid-cols-1');
      expect(gridContainer).toHaveClass('md:grid-cols-2');
      expect(gridContainer).toHaveClass('lg:grid-cols-3');
    });

    test('includes responsive text sizing', () => {
      const responsiveText = screen.getByTestId('responsive-text');
      const responsiveSpan = responsiveText.querySelector('span');
      expect(responsiveSpan).toHaveClass('text-sm');
      expect(responsiveSpan).toHaveClass('md:text-base');
      expect(responsiveSpan).toHaveClass('lg:text-lg');
    });
  });

  describe('Content Diversity', () => {
    test('includes various text content for typography testing', () => {
      expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
      expect(screen.getByText(/The quick brown fox jumps/i)).toBeInTheDocument();
      expect(screen.getByText(/Typography is the art/i)).toBeInTheDocument();
    });

    test('includes special characters and symbols', () => {
      expect(screen.getByText(/©|®|™|&|@/)).toBeInTheDocument();
    });

    test('includes numbers and dates for testing', () => {
      expect(screen.getByText(/© 2024/)).toBeInTheDocument();
      expect(screen.getByText(/\$129\.99/)).toBeInTheDocument();
      expect(screen.getByText(/50% off/)).toBeInTheDocument();
    });
  });
});