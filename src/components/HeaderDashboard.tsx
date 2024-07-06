// src/components/Header.tsx
import React from 'react';
import {
  FaHome,
  FaTasks,
  FaBell,
  FaUser,
  FaFileAlt,
  FaPlusCircle,
} from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { Button } from '../components/ui/button'; // pastikan path sesuai dengan struktur proyek Anda

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">Equilibrium</h1>
        <div className="flex space-x-4">
          <Button variant="ghost" className="text-blue-600">
            <FaHome size={24} />
          </Button>
          <Button variant="ghost">
            <FaTasks size={24} />
          </Button>
          <Button variant="ghost">
            <FaFileAlt size={24} />
          </Button>
          <Button variant="ghost">
            <FaBell size={24} />
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Equilibrium"
            className="border p-2 rounded-full pl-10 bg-gray-100"
          />
          <BiSearch
            className="absolute left-3 top-2.5 text-gray-400"
            size={20}
          />
        </div>
        <Button variant="ghost">
          <FaUser size={24} />
        </Button>
        <Button variant="ghost">
          <FaPlusCircle size={24} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
