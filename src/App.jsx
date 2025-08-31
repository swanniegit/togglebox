import React from 'react';
import { SampleHtmlTemplate } from './components/SampleHtmlTemplate';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">ToggleBox</h1>
          <p className="text-gray-600">Real-time CSS Preview Engine</p>
        </header>
        <main>
          <SampleHtmlTemplate />
        </main>
      </div>
    </div>
  );
}

export default App;