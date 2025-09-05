import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import { SampleHtmlTemplate } from './components/SampleHtmlTemplate';
import { PreviewDemo } from './components/PreviewDemo';
import { ColorPickerDemo } from './components/ColorPickerDemo';
import { SixCardsInteractive } from './components/SixCardsInteractive';
import { StylePlayground } from './components/StylePlayground';
import EmailConfirmationPage from './components/EmailConfirmationPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Nav />
        <div className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/preview" element={<PreviewDemo />} />
            <Route path="/interactive" element={<SixCardsInteractive />} />
            <Route path="/playground" element={<StylePlayground />} />
            <Route path="/color-picker" element={<ColorPickerDemo />} />
            <Route path="/template" element={<SampleHtmlTemplate />} />
            <Route path="/confirm/:token" element={<EmailConfirmationPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;