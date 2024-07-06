import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const friends = [
  { name: 'Issa Ruth', online: true },
  { name: 'Jono', online: false },
  { name: 'Raissa', online: true },
  { name: 'Gino La', online: false },
  { name: 'Sarah', online: true },
  { name: 'Raharjo', online: false },
];

const SidebarDashboard: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button className="lg:hidden mb-4" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <aside className="bg-white p-4 rounded shadow-md">
            <h2 className="font-bold mb-4 text-blue-600">Teman</h2>
            <ul>
              {friends.map((friend) => (
                <li
                  key={friend.name}
                  className="flex items-center justify-between mb-2"
                >
                  <div className="flex items-center space-x-2">
                    <FaUserCircle size={24} className="text-gray-400" />
                    <span className="text-blue-600">{friend.name}</span>
                  </div>
                  <span
                    className={`h-3 w-3 rounded-full ${
                      friend.online ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
};

export default SidebarDashboard;
