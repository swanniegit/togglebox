import React, { useState } from 'react';
import { SampleHtmlTemplate } from './components/SampleHtmlTemplate';
import { PreviewDemo } from './components/PreviewDemo';
import { ColorPickerDemo } from './components/ColorPickerDemo';
import { SixCardsInteractive } from './components/SixCardsInteractive';
import { StylePlayground } from './components/StylePlayground';

function App() {
  const [activeView, setActiveView] = useState('preview');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">ToggleBox</h1>
          <p className="text-gray-600">Real-time CSS Preview Engine</p>
        </header>
        
        {/* Navigation */}
        <nav className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm p-1">
            <button
              onClick={() => setActiveView('preview')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeView === 'preview'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Live Preview Demo
            </button>
            <button
              onClick={() => setActiveView('interactive')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeView === 'interactive'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🃏 Six Cards Studio
            </button>
            <button
              onClick={() => setActiveView('playground')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeView === 'playground'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Style Playground
            </button>
            <button
              onClick={() => setActiveView('colorPicker')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeView === 'colorPicker'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Color Picker Demo
            </button>
            <button
              onClick={() => setActiveView('template')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeView === 'template'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Template Component
            </button>
          </div>
        </nav>

        <main>
          {activeView === 'preview' && <PreviewDemo />}
          {activeView === 'interactive' && <SixCardsInteractive />}
          {activeView === 'playground' && <StylePlayground />}
          {activeView === 'colorPicker' && <ColorPickerDemo />}
          {activeView === 'template' && <SampleHtmlTemplate />}
        </main>
      </div>
    </div>
  );
}

export default App;