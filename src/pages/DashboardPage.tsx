import React from 'react';
import Header from '../components/HeaderDashboard';
import Post from '../components/PostDashboard';
import Sidebar from '../components/SidebarDashboard';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 flex space-x-4">
        <main className="flex-1">
          <Post />
          <Post />
        </main>
        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardPage;
