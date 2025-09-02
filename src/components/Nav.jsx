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
        <div className="bg-white rounded-lg p-1">
          <NavLink to="/preview" className={({ isActive }) => getNavLinkClasses(isActive)}>
            Live Preview Demo
          </NavLink>
          <NavLink to="/interactive" className={({ isActive }) => getNavLinkClasses(isActive)}>
            🎨 Stylesheet Builder
          </NavLink>
          <NavLink to="/playground" className={({ isActive }) => getNavLinkClasses(isActive)}>
            Style Playground
          </NavLink>
          <NavLink to="/color-picker" className={({ isActive }) => getNavLinkClasses(isActive)}>
            Color Picker Demo
          </NavLink>
          <NavLink to="/template" className={({ isActive }) => getNavLinkClasses(isActive)}>
            Template Component
          </NavLink>
        </div>
      </div>
    </nav>
  );
}


