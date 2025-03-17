import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const navigateToWithoutAI = (e) => {
    e.preventDefault();
    window.location.href = '/WithoutAI';
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">About Us</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Transforming careers through intelligent resume technology
        </p>
      </motion.div>

      <motion.div 
        className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-blue-600 mb-6">
          Our Mission
        </h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          At AI Resume Builder, we're revolutionizing the way job seekers create
          professional resumes. Our mission is to empower everyone with the
          tools to showcase their talents effectively and land their dream jobs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Using the latest advancements in artificial intelligence, we provide
          tailored resume suggestions that highlight your unique skills and
          experiences, optimized for your industry and target positions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-purple-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <h3 className="text-2xl font-bold text-purple-600 mb-4">
            Our Story
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We are a group of passionate and innovative interns who came
            together with a shared goal: to make the resume-building process
            faster, smarter, and more accessible to everyone. As a team of
            diverse minds with backgrounds in software engineering, data
            science, and design, we recognized the challenges job seekers face
            when crafting the perfect resume. Our aim was to develop an
            AI-driven tool that simplifies and accelerates the process, while
            also making it more tailored to individual needs.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <h3 className="text-2xl font-bold text-blue-600 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We envision a world where everyone has access to
            professional-quality resume tools, regardless of their background or
            experience level. Our goal is to level the playing field and help
            qualified candidates stand out in competitive job markets by leveraging
            cutting-edge AI technology that adapts to evolving industry standards.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-xl p-8 mb-12 text-white overflow-hidden relative"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-20 -mb-20"></div>
        <h3 className="text-3xl font-bold mb-8 relative">Meet Our Exceptional Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">SA</div>
            </div>
            <h4 className="text-xl font-bold text-white">Shivam Aggrawal</h4>
            <p className="text-blue-100 mb-2">Mentor</p>
            <p className="text-blue-100 text-sm">Guiding our vision with expertise and passion</p>
          </motion.div>
          
          <motion.div 
            className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">AT</div>
            </div>
            <h4 className="text-xl font-bold text-white">Aditya Tiwary</h4>
            <p className="text-blue-100 mb-2">Intern</p>
            <p className="text-blue-100 text-sm">Driving innovation with fresh perspectives</p>
          </motion.div>
          
          <motion.div 
            className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-filter backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-20 h-20 bg-indigo-200 rounded-full mx-auto mb-4 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-400 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">TM</div>
            </div>
            <h4 className="text-xl font-bold text-white">Team Members</h4>
            <p className="text-blue-100 mb-2">Collaborators</p>
            <p className="text-blue-100 text-sm">The brilliant minds behind our success</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      >
        <h3 className="text-2xl font-bold text-blue-600 mb-6">
          Why Our Users Love Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100"
            whileHover={{ scale: 1.03, backgroundColor: "#EEF2FF" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">AI-Powered Intelligence</h4>
            <p className="text-gray-700">Smart suggestions tailored specifically to your industry and career goals</p>
          </motion.div>
          
          <motion.div 
            className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100"
            whileHover={{ scale: 1.03, backgroundColor: "#F5F3FF" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">ATS-Optimized</h4>
            <p className="text-gray-700">Engineered templates that beat applicant tracking systems every time</p>
          </motion.div>
          
          <motion.div 
            className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-white border border-indigo-100"
            whileHover={{ scale: 1.03, backgroundColor: "#EEF2FF" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Time-Saving</h4>
            <p className="text-gray-700">Create professional resumes in minutes, not hours</p>
          </motion.div>
          
          <motion.div 
            className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100"
            whileHover={{ scale: 1.03, backgroundColor: "#ECFDF5" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Free & Open Source</h4>
            <p className="text-gray-700">Premium quality without the premium price tag</p>
          </motion.div>
          
          <motion.div 
            className="p-5 rounded-xl bg-gradient-to-br from-yellow-50 to-white border border-yellow-100"
            whileHover={{ scale: 1.03, backgroundColor: "#FFFBEB" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Cutting-Edge Trends</h4>
            <p className="text-gray-700">Continuously updated based on the latest hiring trends</p>
          </motion.div>
          
          <motion.div 
            className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-white border border-red-100"
            whileHover={{ scale: 1.03, backgroundColor: "#FEF2F2" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Designed With Love</h4>
            <p className="text-gray-700">Beautiful templates that make your experience truly stand out</p>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >

      </motion.div>
    </div>
  );
};

export default AboutUs;