import React, { useState } from 'react';
import {
  FaUserCircle,
  FaThumbsUp,
  FaThumbsDown,
  FaCommentDots,
  FaShareAlt,
  FaAngleDown,
  FaAngleUp,
} from 'react-icons/fa';
import Comment from './Comment';

interface PostProps {
  avatar: string;
  author: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  commentsCount: number;
  sharesCount: number;
  comments: { id: number; author: string; content: string }[];
  onLike: () => void;
  onDislike: () => void;
  onComment: () => void;
  onShare: () => void;
}

const Post: React.FC<PostProps> = ({
  avatar,
  author,
  title,
  content,
  likes,
  dislikes,
  commentsCount,
  sharesCount,
  comments,
  onLike,
  onDislike,
  onComment,
  onShare,
}) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center mb-2">
        <FaUserCircle size={40} className="text-gray-400 mr-2" />
        <div>
          <h2 className="font-bold">{author}</h2>
        </div>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="mb-4">{content}</p>
      <div className="flex justify-between items-center text-gray-500 text-sm">
        <div className="flex space-x-4">
          <button className="flex items-center space-x-1" onClick={onLike}>
            <FaThumbsUp />
            <span>{likes}</span>
          </button>
          <button className="flex items-center space-x-1" onClick={onDislike}>
            <FaThumbsDown />
            <span>{dislikes}</span>
          </button>
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
      <button
        className="flex items-center space-x-1 mt-2 text-blue-500"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? <FaAngleUp /> : <FaAngleDown />}
        <span>{showComments ? 'Sembunyikan Komentar' : 'Lihat Komentar'}</span>
      </button>
      {showComments && (
        <div className="mt-4">
          {comments.map(comment => (
            <Comment
              key={comment.id}
              author={comment.author}
              content={comment.content}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
