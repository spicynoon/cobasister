// src/components/Post.tsx
import React from 'react';

const Post: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center mb-2">
        <img
          src="https://via.placeholder.com/40"
          alt="user"
          className="rounded-full mr-2"
        />
        <div>
          <h2 className="font-bold">John Mayer</h2>
          <p className="text-gray-500">Lorem ipsum sit dolor amet.</p>
        </div>
      </div>
      <h3 className="font-bold mb-2">
        Lorem ipsum dolor sit amet consectetur. Odio neque tortor?
      </h3>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur. Risus ultrices purus faucibus
        luctus blandit euismod turpis...
      </p>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <button className="flex items-center space-x-1">
          <span>👍</span>
          <span>Dukung naik</span>
        </button>
        <div className="flex space-x-4">
          <span>30</span>
          <span>31</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
