import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Function to handle the Get Started button click
  const handleGetStarted = () => {
    // Find the Without AI button in the navigation and trigger a click
    const withoutAiButton = document.querySelector(
      'button[aria-label="Without AI Page"]'
    );
    if (withoutAiButton) {
      withoutAiButton.click();
    }
  };

  // Enhanced animation variants with more dramatic effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.1, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  // Enhanced features with more sophisticated icons
  const features = [
    {
      title: 'AI-Powered Content',
      description:
        'Get tailored suggestions for your skills, experience, and achievements that match your target industry and role perfectly.',
      icon: (
        <svg
          className="w-16 h-16 text-blue-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: 'ATS-Optimized Templates',
      description:
        'Beat the algorithms with our ATS-friendly templates designed to showcase your strengths and pass through automated screening systems.',
      icon: (
        <svg
          className="w-16 h-16 text-blue-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: 'Real-Time Feedback',
      description:
        'Get instant, personalized suggestions that transform your resume from ordinary to extraordinary with powerful language and formatting.',
      icon: (
        <svg
          className="w-16 h-16 text-blue-600 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
    },
  ];

  // Enhanced steps with more compelling descriptions
  const steps = [
    {
      step: '1',
      title: 'Enter Your Information',
      description:
        'Input your professional details through our sleek, intuitive interface that guides you every step of the way.',
    },
    {
      step: '2',
      title: 'AI Enhancement',
      description:
        'Watch our advanced AI transform your content with powerful phrasing, keyword optimization, and strategic formatting.',
    },
    {
      step: '3',
      title: 'Download & Apply',
      description:
        'Export your polished resume in multiple formats and start applying with confidence to positions that match your ambitions.',
    },
  ];

  // Enhanced testimonials with more persuasive stories
  const testimonials = [
    {
      quote:
        'After 6 months of silence from employers, I used this AI Resume Builder and everything changed. Within two weeks, I had multiple interviews and a job offer that increased my salary by 40%!',
      author: 'Rakesh Dubey',
      role: 'Marketing Specialist',
    },
    {
      quote:
        'The AI suggestions revealed achievements I never thought to include. My resume now showcases my true professional value, and Ive received interview requests from companies I once thought were out of my league.',
      author: 'Aditya Tiwary',
      role: 'Software Engineer',
    },
    {
      quote:
        'As a recent graduate competing against experienced candidates, this tool was my secret weapon. It helped me create a resume that landed me a position at a Fortune 500 company within weeks of graduating!',
      author: 'Nayan',
      role: 'Financial Analyst',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto overflow-hidden">
      {/* Hero Section with dynamic background elements */}
      <AnimatePresence>
        {isLoaded && (
          <motion.section
            className="py-24 md:py-32 px-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Enhanced background elements with animation */}
            <motion.div
              className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.5, 0.4],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-20 left-10 w-72 h-72 bg-purple-100 rounded-full opacity-40 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 10,
                delay: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            ></motion.div>

            <div className="flex flex-col md:flex-row items-center relative z-10">
              <motion.div
                className="md:w-1/2 mb-20 md:mb-0 md:pr-12"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, delay: 0.2 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="inline-block px-5 py-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-sm">
                    NEXT-GEN RESUME BUILDER
                  </div>
                </motion.div>
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 mb-8 leading-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.6 }}
                >
                  Create{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                    Irresistible
                  </span>{' '}
                  Resumes with AI
                </motion.h1>
                <motion.p
                  className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                >
                  Stand out in a competitive job market with ATS-friendly
                  resumes engineered to bypass algorithms and captivate human
                  recruiters.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.8 }}
                >
                  <button
                    onClick={handleGetStarted}
                    className="px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-2xl transition-all duration-300 text-center text-lg cursor-pointer transform hover:-translate-y-1 hover:scale-105 shadow-lg"
                  >
                    Get Started
                  </button>
                  <a
                    href="#how-it-works"
                    className="px-10 py-5 bg-white text-gray-800 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 text-center text-lg transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    Learn More
                  </a>
                </motion.div>
                <motion.div
                  className="mt-12 flex items-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9, delay: 1 }}
                >
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-blue-${
                          300 + i * 100
                        } to-purple-${300 + i * 100} shadow-md`}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
                      ></motion.div>
                    ))}
                  </div>
                  <span className="text-gray-600 font-medium">
                    Made By Aditya
                  </span>
                </motion.div>
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.1, delay: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-100 rounded-full z-0 blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-purple-100 rounded-full z-0 blur-xl"></div>
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  ></motion.div>
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <video
                      className="rounded-2xl shadow-2xl relative z-10 border-4 border-white transform rotate-1"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src="https://www.visualcv.com/static/2f2be8a76716380983b890822917b386/AI_resume_builder_hero.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl shadow-xl z-20 transform rotate-3"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.7, type: 'spring' }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                  >
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-medium">
                        ATS-Optimized
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute -top-6 -left-6 bg-white p-5 rounded-xl shadow-xl z-20 transform -rotate-3"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.7, type: 'spring' }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                  >
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                      </svg>
                      <span className="text-base font-medium">AI Powered</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Features Section with enhanced glass morphism */}
      <motion.section
        id="features"
        className="py-28 my-20 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gray-50 to-white"></div>
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full opacity-70 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-50 rounded-full opacity-70 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>

        <div className="text-center mb-24 relative z-10">
          <motion.div
            variants={itemVariants}
            className="inline-block px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-5 shadow-sm"
          >
            STAND OUT FROM THE CROWD
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
          >
            Why Choose Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              AI Resume Builder
            </span>
            ?
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Our platform combines cutting-edge AI with professional resume
            expertise to give you the competitive edge in today's job market
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-50 backdrop-blur-lg bg-opacity-80"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl mb-8 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How It Works Section with enhanced visuals */}
      <motion.section
        id="how-it-works"
        className="py-28 px-4 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-70"></div>

        <div className="text-center mb-24 relative z-10">
          <motion.div
            variants={itemVariants}
            className="inline-block px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-5 shadow-sm"
          >
            EFFORTLESS PROCESS
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
          >
            Three Simple Steps to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Success
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Create a professional resume in minutes that will get you noticed
            and interviewed
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={fadeInUp}
              custom={index}
            >
              <div className="bg-white p-12 rounded-2xl shadow-xl relative z-10 border border-gray-50 h-full backdrop-blur-lg bg-opacity-90">
                <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-10 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-2/3 -translate-y-1/2 z-20">
                  <svg
                    className="w-16 h-16 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section with enhanced cards */}
      <motion.section
        className="py-28 my-20 relative overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full opacity-70 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-50 rounded-full opacity-70 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>

        <div className="text-center mb-24 relative z-10">
          <motion.div
            variants={itemVariants}
            className="inline-block px-5 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-5 shadow-sm"
          >
            SUCCESS STORIES
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-8"
          >
            Transforming{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Careers
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real success stories from professionals who launched their dream
            careers with our platform
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-50 transform hover:-translate-y-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-8 text-blue-500">
                  <svg
                    className="w-14 h-14"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-10 flex-grow text-xl italic font-light leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full mr-5 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-xl">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section with enhanced gradient and effects */}
      <motion.section
        className="py-36 my-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transform -skew-y-4"></div>
        <div className="absolute inset-0 opacity-40">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          ></motion.div>
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-60"
            animate={{
              x: [0, -30, 0],
              y: [0, -40, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          ></motion.div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Land Your{' '}
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Dream Job
            </span>
            ?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Join thousands of professionals who've transformed their careers
            with our AI-powered resume builder.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button
              onClick={handleGetStarted}
              className="px-12 py-6 bg-white text-blue-700 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 text-center text-xl transform hover:-translate-y-1 hover:scale-105 shadow-xl"
            >
              Build Your Resume Now
            </button>
          </motion.div>
          <motion.p
            className="mt-8 text-blue-100 text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            No credit card required • Free resume templates available
          </motion.p>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
