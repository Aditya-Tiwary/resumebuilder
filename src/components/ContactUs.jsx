import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [hoverState, setHoverState] = useState({
    email: false,
    phone: false,
    location: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const handleHover = (key, isHovering) => {
    setHoverState((prev) => ({ ...prev, [key]: isHovering }));
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.span
          variants={itemVariants}
          className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4"
        >
          Support & Assistance
        </motion.span>
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-xl text-gray-600"
        >
          Have questions or need help with your resume? We're here for you every
          step of the way.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
      >
        {/* Contact Cards */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          onMouseEnter={() => handleHover('email', true)}
          onMouseLeave={() => handleHover('email', false)}
        >
          <div className="p-8">
            <div
              className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 transition-all duration-300 ${
                hoverState.email ? 'bg-blue-500 scale-110' : 'bg-blue-100'
              }`}
            >
              <svg
                className={`w-8 h-8 transition-colors duration-300 ${
                  hoverState.email ? 'text-white' : 'text-blue-500'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
              Email Us
            </h3>
            <div className="text-center">
              <a
                href="mailto:support@airesumebuilder.com"
                className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors"
              >
                support@airesumebuilder.com
              </a>
              <p className="text-gray-600 mt-2">Responses within 24 hours</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          onMouseEnter={() => handleHover('phone', true)}
          onMouseLeave={() => handleHover('phone', false)}
        >
          <div className="p-8">
            <div
              className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 transition-all duration-300 ${
                hoverState.phone ? 'bg-green-500 scale-110' : 'bg-green-100'
              }`}
            >
              <svg
                className={`w-8 h-8 transition-colors duration-300 ${
                  hoverState.phone ? 'text-white' : 'text-green-500'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
              Call Us
            </h3>
            <div className="text-center">
              <p className="text-green-600 font-medium">+1 (555) 123-4567</p>
              <p className="text-gray-600 mt-2">Mon-Fri, 9AM to 6PM EST</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          onMouseEnter={() => handleHover('location', true)}
          onMouseLeave={() => handleHover('location', false)}
        >
          <div className="p-8">
            <div
              className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-6 transition-all duration-300 ${
                hoverState.location
                  ? 'bg-purple-500 scale-110'
                  : 'bg-purple-100'
              }`}
            >
              <svg
                className={`w-8 h-8 transition-colors duration-300 ${
                  hoverState.location ? 'text-white' : 'text-purple-500'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">
              Visit Us
            </h3>
            <div className="text-center">
              <p className="text-gray-700">123 Resume Street</p>
              <p className="text-gray-700">San Francisco, CA 94107</p>
              <p className="text-gray-600 mt-2">United States</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Hours</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-700 font-medium">Monday - Friday</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                9:00 AM - 6:00 PM
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-700 font-medium">Saturday</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                10:00 AM - 4:00 PM
              </span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-200">
              <span className="text-gray-700 font-medium">Sunday</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Closed
              </span>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Holiday Hours
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>
                    Our hours may vary during holidays. Please check our website
                    for updated schedules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Support Response
          </h3>

          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Email Support
                </h4>
                <p className="text-gray-600">
                  Responses within 24 hours, typically faster during business
                  hours
                </p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Phone Support
                </h4>
                <p className="text-gray-600">
                  Immediate assistance during business hours
                </p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Urgent Issues
                </h4>
                <p className="text-gray-600">
                  Priority handling with dedicated support specialists
                </p>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-purple-600 h-2.5 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-green-50 rounded-xl p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  95% Customer Satisfaction
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>
                    Our support team consistently maintains a high satisfaction
                    rating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-16 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Thank you for choosing AI Resume Builder. We're committed to providing
          exceptional support and helping you create the perfect resume for your
          career goals.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactUs;
