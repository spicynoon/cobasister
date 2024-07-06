import React from 'react';
import {
  FaUserCircle,
  FaThumbsUp,
  FaCommentDots,
  FaShareAlt,
} from 'react-icons/fa';

interface PostProps {
  avatar: string;
  author: string;
  title: string;
  content: string;
  votes: number;
  commentsCount: number;
  sharesCount: number;
  onVote: () => void;
  onComment: () => void;
  onShare: () => void;
}

const Post: React.FC<PostProps> = ({
  avatar,
  author,
  title,
  content,
  votes,
  commentsCount,
  sharesCount,
  onVote,
  onComment,
  onShare,
}) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center mb-2">
        <img
          src={avatar}
          alt="user avatar"
          className="rounded-full mr-2 w-10 h-10"
        />
        <div>
          <h2 className="font-bold">{author}</h2>
          <p className="text-gray-500">Lorem ipsum sit dolor amet.</p>
        </div>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="mb-4">{content}</p>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <button className="flex items-center space-x-1" onClick={onVote}>
          <FaThumbsUp />
          <span>Dukung</span>
          <span>{votes}</span>
        </button>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1" onClick={onComment}>
            <FaCommentDots />
            <span>{commentsCount}</span>
          </button>
          <button className="flex items-center space-x-1" onClick={onShare}>
            <FaShareAlt />
            <span>{sharesCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
