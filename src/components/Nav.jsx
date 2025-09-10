import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FeedbackForm from './FeedbackForm';

function getNavLinkClasses(isActive) {
  return `px-4 py-2 rounded-md font-medium transition-colors ${
    isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'
  }`;
}

export default function Nav() {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <>
      <FeedbackForm 
        isOpen={showFeedbackForm} 
        onClose={() => setShowFeedbackForm(false)} 
      />
    <nav className="w-full bg-white border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          ToggleBox
        </Link>
        <div className="flex items-center gap-4">
          <div className="bg-white rounded-lg p-1">
            <NavLink to="/interactive" className={({ isActive }) => getNavLinkClasses(isActive)}>
              🎨 Stylesheet Builder
            </NavLink>
            <NavLink to="/color-picker" className={({ isActive }) => getNavLinkClasses(isActive)}>
              Color Picker
            </NavLink>
            {/* Hidden unfinished: preview, playground, template */}
          </div>
          <button 
            onClick={() => setShowFeedbackForm(true)}
            className="px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
            title="Send feedback to Christo"
          >
            💬 Feedback
          </button>
        </div>
      </div>
    </nav>
    </>
  );
}


