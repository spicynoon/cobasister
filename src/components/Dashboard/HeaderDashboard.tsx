import React, { useState } from 'react';
import {
  FaHome,
  FaTasks,
  FaBell,
  FaUser,
  FaFileAlt,
  FaSignOutAlt, // Changed from FaPlusCircle to FaSignOutAlt
} from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { Button } from '../ui/button'; // pastikan path sesuai dengan struktur proyek Anda

const Header: React.FC<{ onProfileClick: () => void }> = ({
  onProfileClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement search logic here
  };

  return (
    <header className="bg-white shadow p-4 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">Equilibrium</h1>
        <div className="hidden md:flex space-x-4">
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
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <BiSearch
            className="absolute left-3 top-2.5 text-gray-400"
            size={20}
            onClick={handleSearch}
          />
        </div>
        <Button variant="ghost" className="block md:hidden">
          <FaHome size={24} />
        </Button>
        <Button variant="ghost" onClick={onProfileClick}>
          <FaUser size={24} />
        </Button>
        <Button variant="ghost">
          <FaSignOutAlt size={24} />
        </Button>
      </div>
      <div className="flex md:hidden space-x-4">
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
    </header>
  );
};

export default Header;
