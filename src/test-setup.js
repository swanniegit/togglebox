import '@testing-library/jest-dom';

// Add string matchers that might not be included by default
expect.extend({
  toStartWith(received, expected) {
    if (typeof received !== 'string' || typeof expected !== 'string') {
      return {
        pass: false,
        message: () => `Expected both values to be strings`,
      };
    }
    
    const pass = received.startsWith(expected);
    return {
      pass,
      message: () =>
        pass
          ? `Expected "${received}" not to start with "${expected}"`
          : `Expected "${received}" to start with "${expected}"`,
    };
  },
});