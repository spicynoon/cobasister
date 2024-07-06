import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

interface CommentProps {
  author: string;
  content: string;
}

const Comment: React.FC<CommentProps> = ({ author, content }) => {
  return (
    <div className="bg-white p-2 rounded shadow mb-2">
      <div className="flex items-center mb-1">
        <FaUserCircle size={24} className="text-gray-400 mr-2" />
        <span className="font-bold">{author}</span>
      </div>
      <p>{content}</p>
    </div>
  );
};

export default Comment;
