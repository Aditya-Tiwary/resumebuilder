import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content:
        'Tip 1: Use a clean and simple layout for your resume. Focus on highlighting your skills and achievements rather than including unnecessary details. A clean design ensures your resume is easily readable and helps recruiters quickly spot your key skills and experience. Remember, less is more!',
      userName: 'John Doe',
      author: 'Jane Smith',
      reviewer: 'Alex Lee',
      publishedDate: '2024-12-01',
      updatedDate: '2024-12-05',
      readTime: '3 min',
      likes: 12,
      dislikes: 2,
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBaumVzDvZRVGVd681-i2wJn3U7_txFllvg&s',
    },
    {
      id: 2,
      content:
        "Tip 2: Focus on your achievements, not just responsibilities. When listing your work experience, try to showcase specific accomplishments, metrics, or challenges you've overcome. This provides a clearer picture of what you've achieved and the value you can bring to potential employers.",
      userName: 'Alice Johnson',
      author: 'Mark Brown',
      reviewer: 'Sally White',
      publishedDate: '2024-12-15',
      updatedDate: '2024-12-20',
      readTime: '4 min',
      likes: 8,
      dislikes: 1,
      profilePic:
        'https://thissongissick.com/wp-content/uploads/2018/10/lorde-green-light.png',
    },
    {
      id: 3,
      content:
        "Tip 3: Tailor your resume for each application. Don't use the same generic resume for every job. Instead, customize it to highlight the skills and experiences most relevant to the specific position you're applying for. This targeted approach shows employers you're a perfect fit for their needs.",
      userName: 'Aditya Tiwary',
      author: 'Aditya Tiwary',
      reviewer: 'Community',
      publishedDate: '2025-01-05',
      updatedDate: '2025-01-05',
      readTime: '3 min',
      likes: 15,
      dislikes: 0,
      profilePic:
        'https://t4.ftcdn.net/jpg/05/39/25/19/360_F_539251994_FRTzt2xfSZvrrzoXvMzeTbA5AO7JKLqE.jpg',
    },
  ]);

  const [newPost, setNewPost] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [author, setAuthor] = useState('');
  const [reviewer, setReviewer] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [updatedDate, setUpdatedDate] = useState('');
  const [readTime, setReadTime] = useState('');
  const [error, setError] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isPostFormVisible, setIsPostFormVisible] = useState(false);
  const [filter, setFilter] = useState('latest');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  useEffect(() => {
    // Add some animation delay when component mounts
    const timer = setTimeout(() => {
      document
        .getElementById('community-container')
        .classList.add('opacity-100');
      document
        .getElementById('community-container')
        .classList.remove('opacity-0');
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handlePostSubmit = () => {
    if (!userEmail.trim()) {
      setError('Email is required.');
      return;
    }

    if (!validateEmail(userEmail)) {
      setError('Please enter a valid email.');
      return;
    }

    if (!userName.trim()) {
      setError('Name is required.');
      return;
    }

    if (!newPost.trim()) {
      setError('Post content is required.');
      return;
    }

    setError('');

    const newPostData = {
      id: Date.now(),
      content: newPost,
      userName,
      author: author || userName,
      reviewer: reviewer || 'Community',
      publishedDate: publishedDate || new Date().toISOString().split('T')[0],
      updatedDate: updatedDate || new Date().toISOString().split('T')[0],
      readTime: readTime || '2 min',
      likes: 0,
      dislikes: 0,
      profilePic: '/api/placeholder/60/60',
    };

    setPosts([newPostData, ...posts]);
    setNewPost('');
    setUserEmail('');
    setUserName('');
    setAuthor('');
    setReviewer('');
    setPublishedDate('');
    setUpdatedDate('');
    setReadTime('');
    setIsPostFormVisible(false);
  };

  const handlePostClick = (postId) => {
    if (selectedPostId === postId) {
      setSelectedPostId(null);
    } else {
      setSelectedPostId(postId);
    }
  };

  const handleLike = (postId, e) => {
    e.stopPropagation();
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (postId, e) => {
    e.stopPropagation();
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
      )
    );
  };

  const filterPosts = () => {
    let filteredPosts = [...posts];

    if (filter === 'latest') {
      filteredPosts.sort(
        (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
      );
    } else if (filter === 'popular') {
      filteredPosts.sort(
        (a, b) => b.likes - b.dislikes - (a.likes - a.dislikes)
      );
    } else if (filter === 'oldest') {
      filteredPosts.sort(
        (a, b) => new Date(a.publishedDate) - new Date(b.publishedDate)
      );
    }

    return filteredPosts;
  };

  const getPostReadability = (likes, dislikes) => {
    const ratio = likes / (likes + dislikes || 1);
    if (ratio > 0.8) return 'bg-green-50 border-l-4 border-green-500';
    if (ratio > 0.6) return 'bg-blue-50 border-l-4 border-blue-500';
    if (ratio > 0.4) return 'bg-gray-50 border-l-4 border-gray-400';
    return 'bg-red-50 border-l-4 border-red-300';
  };

  return (
    <div
      id="community-container"
      className="max-w-6xl mx-auto py-8 px-4 transition-opacity duration-500 opacity-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {/* Header with animated background gradient */}
        <motion.header
          className="text-center p-8 md:p-12 rounded-2xl shadow-xl mb-10 relative overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 animate-gradient-x"></div>

          {/* Glass morphism effect overlay */}
          <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm"></div>

          {/* Header content */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              AI Resume Builder Community
            </h1>
            <p className="text-lg md:text-xl font-light text-white max-w-2xl mx-auto">
              Share tips, get advice, and connect with fellow professionals to
              build the perfect resume.
            </p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.button
                onClick={() => setIsPostFormVisible(true)}
                className="bg-white hover:bg-gray-100 text-indigo-600 py-3 px-8 rounded-full text-lg font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isPostFormVisible}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Share Your Tip
              </motion.button>

              <motion.button
                className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-medium shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-white hover:bg-opacity-10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Templates
              </motion.button>
            </motion.div>
          </div>
        </motion.header>

        {/* Stats Bar */}
        <motion.div
          className="bg-white rounded-xl shadow-lg p-4 mb-8 flex flex-wrap justify-around items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center p-4">
            <p className="text-gray-500 text-sm">Community Members</p>
            <p className="text-3xl font-bold text-indigo-600">1,247</p>
          </div>
          <div className="text-center p-4">
            <p className="text-gray-500 text-sm">Resume Tips</p>
            <p className="text-3xl font-bold text-indigo-600">{posts.length}</p>
          </div>
          <div className="text-center p-4">
            <p className="text-gray-500 text-sm">Success Stories</p>
            <p className="text-3xl font-bold text-indigo-600">128</p>
          </div>
          <div className="text-center p-4">
            <p className="text-gray-500 text-sm">Job Offers</p>
            <p className="text-3xl font-bold text-indigo-600">376</p>
          </div>
        </motion.div>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section for Posts */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Filter and Sort Bar */}
            <div className="bg-white rounded-xl shadow-lg p-4 mb-6 flex flex-wrap justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Community Tips
              </h2>

              <div className="relative mt-2 sm:mt-0">
                <button
                  onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2 transition-colors"
                >
                  <span>
                    Sort by: {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isFilterMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10">
                    <button
                      onClick={() => {
                        setFilter('latest');
                        setIsFilterMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                    >
                      Latest
                    </button>
                    <button
                      onClick={() => {
                        setFilter('popular');
                        setIsFilterMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Popular
                    </button>
                    <button
                      onClick={() => {
                        setFilter('oldest');
                        setIsFilterMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg"
                    >
                      Oldest
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Show Create Post Button (Mobile Only) */}
            <div className="lg:hidden mb-6">
              {!isPostFormVisible && (
                <motion.button
                  onClick={() => setIsPostFormVisible(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-8 rounded-lg text-lg font-medium shadow-md transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Share Your Resume Tip
                </motion.button>
              )}
            </div>

            {/* Posts List */}
            <div className="space-y-6">
              <AnimatePresence>
                {filterPosts().length > 0 ? (
                  filterPosts().map((post) => (
                    <motion.div
                      key={post.id}
                      layoutId={`post-${post.id}`}
                      className={`${getPostReadability(
                        post.likes,
                        post.dislikes
                      )} rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300`}
                      onClick={() => handlePostClick(post.id)}
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={post.profilePic}
                            alt={post.userName}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {post.userName}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {post.publishedDate} • {post.readTime} read
                            </p>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-indigo-600 mb-3">
                          {post.content.split('.')[0] + '.'}
                        </h3>

                        {/* Show full post content when expanded */}
                        <AnimatePresence>
                          {selectedPostId === post.id ? (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-gray-700 mb-4 leading-relaxed">
                                {post.content}
                              </p>

                              <div className="flex flex-wrap text-xs text-gray-600 mt-4 pt-4 border-t border-gray-200">
                                <span className="mr-4 mb-2">
                                  <span className="font-medium">Author:</span>{' '}
                                  {post.author}
                                </span>
                                <span className="mr-4 mb-2">
                                  <span className="font-medium">Reviewer:</span>{' '}
                                  {post.reviewer}
                                </span>
                                <span className="mr-4 mb-2">
                                  <span className="font-medium">Updated:</span>{' '}
                                  {post.updatedDate}
                                </span>
                              </div>
                            </motion.div>
                          ) : (
                            <p className="text-gray-600 line-clamp-2">
                              {post.content
                                .substring(post.content.indexOf('.') + 1)
                                .trim()}
                            </p>
                          )}
                        </AnimatePresence>

                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center space-x-4">
                            <button
                              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                              onClick={(e) => handleLike(post.id, e)}
                              aria-label="Like post"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                              </svg>
                              <span className="text-sm">{post.likes}</span>
                            </button>
                            <button
                              className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
                              onClick={(e) => handleDislike(post.id, e)}
                              aria-label="Dislike post"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.095c.5 0 .905-.405.905-.905 0-.714.211-1.412.608-2.006L17 13V4m-7 10h2"
                                />
                              </svg>
                              <span className="text-sm">{post.dislikes}</span>
                            </button>
                          </div>

                          <button
                            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                            onClick={() => handlePostClick(post.id)}
                          >
                            {selectedPostId === post.id
                              ? 'Show Less'
                              : 'Read More'}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-16 bg-white rounded-xl shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto text-gray-400 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="text-gray-500 text-lg">
                      No posts yet. Be the first to share!
                    </p>
                    <motion.button
                      onClick={() => setIsPostFormVisible(true)}
                      className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg font-medium shadow-md transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Create New Post
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Section - Post Creation Form or Featured Content */}
          <AnimatePresence mode="wait">
            {isPostFormVisible ? (
              <motion.div
                key="post-form"
                className="w-full lg:w-1/3 bg-white rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Share Your Resume Tip
                  </h3>

                  {/* Form Fields */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handlePostSubmit();
                    }}
                  >
                    <div className="space-y-5">
                      {/* User Info */}
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="userName"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="userName"
                            placeholder="Enter your name"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                            required
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="userEmail"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Your Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="userEmail"
                            placeholder="Enter your email"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                            required
                          />
                        </div>
                      </div>

                      {/* Post Content */}
                      <div>
                        <label
                          htmlFor="postContent"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Resume Tip{' '}
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="postContent"
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                          placeholder="Share your resume tips or ask for advice..."
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors h-32"
                          required
                        ></textarea>
                      </div>

                      {/* Optional Fields Section */}
                      <div>
                        <details className="mt-3">
                          <summary className="text-sm font-medium text-indigo-600 cursor-pointer">
                            Additional Options (Optional)
                          </summary>

                          <div className="mt-4 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label
                                  htmlFor="author"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Author
                                </label>
                                <input
                                  type="text"
                                  id="author"
                                  placeholder="Author name"
                                  value={author}
                                  onChange={(e) => setAuthor(e.target.value)}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="reviewer"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Reviewer
                                </label>
                                <input
                                  type="text"
                                  id="reviewer"
                                  placeholder="Reviewer name"
                                  value={reviewer}
                                  onChange={(e) => setReviewer(e.target.value)}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="publishedDate"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Published Date
                                </label>
                                <input
                                  type="date"
                                  id="publishedDate"
                                  value={publishedDate}
                                  onChange={(e) =>
                                    setPublishedDate(e.target.value)
                                  }
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="updatedDate"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Updated Date
                                </label>
                                <input
                                  type="date"
                                  id="updatedDate"
                                  value={updatedDate}
                                  onChange={(e) =>
                                    setUpdatedDate(e.target.value)
                                  }
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                                />
                              </div>

                              <div>
                                <label
                                  htmlFor="readTime"
                                  className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                  Reading Time
                                </label>
                                <input
                                  type="text"
                                  id="readTime"
                                  placeholder="e.g., 5 min"
                                  value={readTime}
                                  onChange={(e) => setReadTime(e.target.value)}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-colors"
                                />
                              </div>
                            </div>
                          </div>
                        </details>
                      </div>

                      {/* Error Message */}
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 text-red-600 p-3 rounded-lg"
                        >
                          {error}
                        </motion.div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex space-x-4 pt-2">
                        <motion.button
                          type="submit"
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 px-6 rounded-lg font-medium shadow-md transition-all duration-300 flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Post
                        </motion.button>

                        <motion.button
                          type="button"
                          onClick={() => setIsPostFormVisible(false)}
                          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-6 rounded-lg font-medium shadow-md transition-all duration-300 flex-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Cancel
                        </motion.button>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="featured-content"
                className="w-full lg:w-1/3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Featured Content Sidebar */}
                <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Featured Tips
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <p className="text-gray-700 font-medium">
                        "Quantify your achievements with numbers whenever
                        possible."
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        - Career Expert
                      </p>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <p className="text-gray-700 font-medium">
                        "Use action verbs to start each bullet point."
                      </p>
                      <p className="text-sm text-gray-500 mt-1">- HR Manager</p>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <p className="text-gray-700 font-medium">
                        "Keep it to one page if possible."
                      </p>
                      <p className="text-sm text-gray-500 mt-1">- Recruiter</p>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      Quick Links
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          Resume Templates
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          Writing Guide
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-800"
                        >
                          Success Stories
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Community;
