import React, { useState } from 'react';
import Header from '../components/Dashboard/HeaderDashboard';
import SidebarToggle from '../components/Dashboard/SidebarToggle';
import SidebarDashboard from '../components/Dashboard/SidebarDashboard';
import ThoughtField from '../components/Dashboard/ThoughtField';
import Post from '../components/Dashboard/PostDashboard';
import Comment from '../components/Dashboard/Comment';
import ModalComment from '../components/Dashboard/ModalComment';
import ProfileModal from '../components/Dashboard/ProfileModal';
import { FaUserCircle } from 'react-icons/fa';

const friends = [
  { name: 'Issa Ruth', online: true },
  { name: 'Jono', online: false },
  { name: 'Raissa', online: true },
  { name: 'Gino La', online: false },
  { name: 'Sarah', online: true },
  { name: 'Raharjo', online: false },
];

const initialPosts = [
  {
    id: 1,
    avatar: 'https://via.placeholder.com/40',
    author: 'John Mayer',
    title: 'Lorem ipsum dolor sit amet consectetur. Odio neque tortor?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Risus ultrices purus faucibus luctus blandit euismod turpis...',
    votes: 10,
    comments: [
      { id: 1, author: 'User1', content: 'Great post!' },
      { id: 2, author: 'User2', content: 'Very informative.' },
      { id: 3, author: 'User3', content: 'Thanks for sharing!' },
    ],
    sharesCount: 31,
  },
];

const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const [isCommentModalOpen, setCommentModalOpen] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handlePostSubmit = (title: string, content: string) => {
    const newPost = {
      id: posts.length + 1,
      avatar: 'https://via.placeholder.com/40',
      author: 'Pengguna Baru',
      title,
      content,
      votes: 0,
      comments: [],
      sharesCount: 0,
    };
    setPosts([newPost, ...posts]);
  };

  const handleVote = (id: number) => {
    setPosts(
      posts.map(post =>
        post.id === id ? { ...post, votes: post.votes + 1 } : post,
      ),
    );
  };

  const handleComment = (id: number) => {
    setCurrentPostId(id);
    setCommentModalOpen(true);
  };

  const handleShare = (id: number) => {
    setPosts(
      posts.map(post =>
        post.id === id ? { ...post, sharesCount: post.sharesCount + 1 } : post,
      ),
    );
  };

  const handleCommentSubmit = (postId: number, content: string) => {
    setPosts(
      posts.map(post =>
        post.id === postId ? { ...post, comments: [...post.comments, { id: post.comments.length + 1, author: 'User Baru', content }] } : post,
      ),
    );
  };

  const handleProfileClick = () => {
    setProfileModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      <Header onProfileClick={handleProfileClick} />
      <div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <main className="flex-1">
          <ThoughtField onSubmit={handlePostSubmit} />
          {posts.map(post => (
            <div key={post.id}>
              <Post
                avatar={post.avatar}
                author={post.author}
                title={post.title}
                content={post.content}
                votes={post.votes}
                commentsCount={post.comments.length}
                sharesCount={post.sharesCount}
                onVote={() => handleVote(post.id)}
                onComment={() => handleComment(post.id)}
                onShare={() => handleShare(post.id)}
              />
              <div className="mt-4">
                {post.comments.slice(0, 3).map(comment => (
                  <Comment key={comment.id} author={comment.author} content={comment.content} />
                ))}
              </div>
            </div>
          ))}
        </main>
        <div className="hidden lg:block w-64">
          <aside className="bg-white p-4 rounded shadow-md">
            <h2 className="font-bold mb-4 text-blue-600">Teman</h2>
            <ul>
              {friends.map(friend => (
                <li
                  key={friend.name}
                  className="flex items-center justify-between mb-2"
                >
                  <div className="flex items-center space-x-2">
                    <FaUserCircle size={24} className="text-gray-400" />
                    <span className="text-blue-600">{friend.name}</span>
                  </div>
                  <span
                    className={`h-3 w-3 rounded-full ${friend.online ? 'bg-green-500' : 'bg-red-500'}`}
                  ></span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
      <SidebarToggle
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <SidebarDashboard isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {isCommentModalOpen && currentPostId !== null && (
        <ModalComment
          postId={currentPostId}
          onSubmit={handleCommentSubmit}
          onClose={() => setCommentModalOpen(false)}
        />
      )}
      {isProfileModalOpen && (
        <ProfileModal username="Pengguna Baru" onClose={() => setProfileModalOpen(false)} />
      )}
    </div>
  );
};

export default DashboardPage;
