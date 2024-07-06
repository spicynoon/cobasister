// src/components/Sidebar.tsx
import React from 'react';

const friends = ['Issa Ruth', 'Jono', 'Raissa', 'Gino La', 'Sarah', 'Raharjo'];

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-4">Teman</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend} className="flex items-center space-x-2 mb-2">
            <span className="h-3 w-3 bg-green-500 rounded-full"></span>
            <span>{friend}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
