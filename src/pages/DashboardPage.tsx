import React, { useState } from 'react';
import Header from '../components/Dashboard/HeaderDashboard';
import SidebarToggle from '../components/Dashboard/SidebarToggle';
import SidebarDashboard from '../components/Dashboard/SidebarDashboard';
import ThoughtField from '../components/Dashboard/ThoughtField';
import Post from '../components/Dashboard/PostDashboard';
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
    avatar: '',
    author: 'John Mayer',
    title: 'Lorem ipsum dolor sit amet consectetur. Odio neque tortor?',
    content:
      'Lorem ipsum dolor sit amet consectetur. Risus ultrices purus faucibus luctus blandit euismod turpis...',
    likes: 10,
    dislikes: 2,
    comments: [
      { id: 1, author: 'User1', content: 'Great post!' },
      { id: 2, author: 'User2', content: 'Very informative.' },
      { id: 3, author: 'User3', content: 'Thanks for sharing!' },
    ],
    sharesCount: 31,
    likedByUser: true,
    commentedByUser: false,
    sharedByUser: false,
  },
  {
    id: 2,
    avatar: '',
    author: 'Jane Doe',
    title: 'Aliquam erat volutpat.',
    content:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;',
    likes: 5,
    dislikes: 1,
    comments: [
      { id: 4, author: 'User4', content: 'Nice post!' },
      { id: 5, author: 'User5', content: 'Thanks for the info.' },
    ],
    sharesCount: 10,
    likedByUser: false,
    commentedByUser: true,
    sharedByUser: true,
  },
];

const DashboardPage: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const [isCommentModalOpen, setCommentModalOpen] = useState(false);
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [filterType, setFilterType] = useState<
    'all' | 'liked' | 'commented' | 'shared'
  >('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handlePostSubmit = (title: string, content: string) => {
    const newPost = {
      id: posts.length + 1,
      avatar: '',
      author: 'Pengguna Baru',
      title,
      content,
      likes: 0,
      dislikes: 0,
      comments: [],
      sharesCount: 0,
      likedByUser: false,
      commentedByUser: false,
      sharedByUser: false,
    };
    const newPosts = [newPost, ...posts];
    setPosts(newPosts);
    setFilteredPosts(applyFilter(newPosts, filterType));
  };

  const handleLike = (id: number) => {
    const newPosts = posts.map(post =>
      post.id === id
        ? { ...post, likes: post.likes + 1, likedByUser: true }
        : post,
    );
    setPosts(newPosts);
    setFilteredPosts(applyFilter(newPosts, filterType));
  };

  const handleDislike = (id: number) => {
    const newPosts = posts.map(post =>
      post.id === id ? { ...post, dislikes: post.dislikes + 1 } : post,
    );
    setPosts(newPosts);
    setFilteredPosts(applyFilter(newPosts, filterType));
  };

  const handleComment = (id: number) => {
    setCurrentPostId(id);
    setCommentModalOpen(true);
  };

  const handleShare = (id: number) => {
    const newPosts = posts.map(post =>
      post.id === id
        ? { ...post, sharesCount: post.sharesCount + 1, sharedByUser: true }
        : post,
    );
    setPosts(newPosts);
    setFilteredPosts(applyFilter(newPosts, filterType));
  };

  const handleCommentSubmit = (postId: number, content: string) => {
    const newPosts = posts.map(post =>
      post.id === postId
        ? {
            ...post,
            comments: [
              ...post.comments,
              { id: post.comments.length + 1, author: 'User Baru', content },
            ],
            commentedByUser: true,
          }
        : post,
    );
    setPosts(newPosts);
    setFilteredPosts(applyFilter(newPosts, filterType));
  };

  const handleProfileClick = () => {
    setProfileModalOpen(true);
  };

  const applyFilter = (
    posts: typeof initialPosts,
    filter: typeof filterType,
  ) => {
    switch (filter) {
      case 'liked':
        return posts.filter(post => post.likedByUser);
      case 'commented':
        return posts.filter(post => post.commentedByUser);
      case 'shared':
        return posts.filter(post => post.sharedByUser);
      case 'all':
      default:
        return posts;
    }
  };

  const handleFilter = (type: typeof filterType) => {
    setFilterType(type);
    setFilteredPosts(applyFilter(posts, type));
  };

  const handleSearch = () => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = posts.filter(
      post =>
        post.author.toLowerCase().includes(lowercasedQuery) ||
        post.title.toLowerCase().includes(lowercasedQuery) ||
        post.content.toLowerCase().includes(lowercasedQuery),
    );
    setFilteredPosts(filtered);
  };

  const userPostsCount = posts.filter(
    post => post.author === 'Pengguna Baru',
  ).length;
  const friendsCount = friends.length;

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      <Header
        onProfileClick={handleProfileClick}
        onFilter={handleFilter}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <main className="flex-1">
          <ThoughtField onSubmit={handlePostSubmit} />
          {filteredPosts.map(post => (
            <Post
              key={post.id}
              avatar={post.avatar}
              author={post.author}
              title={post.title}
              content={post.content}
              likes={post.likes}
              dislikes={post.dislikes}
              commentsCount={post.comments.length}
              sharesCount={post.sharesCount}
              comments={post.comments}
              onLike={() => handleLike(post.id)}
              onDislike={() => handleDislike(post.id)}
              onComment={() => handleComment(post.id)}
              onShare={() => handleShare(post.id)}
            />
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
        <ProfileModal
          username="Pengguna Baru"
          postCount={userPostsCount}
          friendsCount={friendsCount}
          onClose={() => setProfileModalOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardPage;
