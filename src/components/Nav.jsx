import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function getNavLinkClasses(isActive) {
  return `px-4 py-2 rounded-md font-medium transition-colors ${
    isActive ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'
  }`;
}

export default function Nav() {
  return (
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
            onClick={() => window.open('mailto:christo@yellowarcher.co.za?subject=ToggleBox%20Feedback&body=Hi%20Christo,%0D%0A%0D%0AI%27d%20like%20to%20share%20some%20feedback%20about%20ToggleBox:%0D%0A%0D%0A')}
            className="px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors"
            title="Send feedback to Christo"
          >
            💬 Feedback
          </button>
        </div>
      </div>
    </nav>
  );
}


