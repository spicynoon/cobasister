import React from 'react';

interface SidebarToggleProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <button
      className="lg:hidden fixed right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-l-md z-50"
      onClick={toggleSidebar}
    >
      {isSidebarOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
};

export default SidebarToggle;
