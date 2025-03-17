import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  // Animation variants for sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Privacy Policy
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <motion.div variants={sectionVariants} className="mb-6">
          <p className="text-gray-700">
            This AI Resume Builder is an open-source project developed under the
            guidance of UpToSkills, a platform dedicated to providing
            internships and skill-building opportunities. The tool is for
            educational purposes, and no data safety is guaranteed. By using
            this tool, you consent to the collection and use of information as
            described in this Privacy Policy.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Data Collection
          </h3>
          <p className="text-gray-700 mb-4">
            This tool collects data provided by users during the signup process.
            This includes your name, email, skills, and experience. It is
            important to note that you should not use your regular email address
            or password when signing up, as this tool may expose your data to
            multiple individuals within the UpToSkills community or even to
            individuals outside the community. By submitting your information,
            you acknowledge that the data may be accessible to other users, and
            the exposure risk is entirely on you.
          </p>
          <p className="text-gray-700">
            Additionally, the tool may automatically collect certain information
            related to your device, such as browser type, operating system, and
            IP address, for the purpose of improving the tool's functionality
            and performance.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Data Security
          </h3>
          <p className="text-gray-700 mb-4">
            While we take reasonable steps to protect the security of the tool
            and its users, please note that no system is completely secure. We
            use industry-standard encryption and security protocols to protect
            sensitive data; however, no method of transmission over the internet
            or electronic storage is 100% secure. By using this tool, you
            acknowledge that there are inherent risks involved in entering any
            data online.
          </p>
          <p className="text-gray-700">
            You agree to notify us immediately if you suspect any unauthorized
            access to your data or any potential security breaches.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Third-Party Services
          </h3>
          <p className="text-gray-700">
            The tool may contain links or references to third-party websites and
            services. We are not responsible for the privacy practices or
            content of these external sites, and we encourage you to review the
            privacy policies of those sites. Please be aware that any data
            shared with third-party services will be subject to their respective
            privacy policies.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            User Responsibility
          </h3>
          <p className="text-gray-700 mb-4">
            You are solely responsible for the data you enter into this tool. We
            recommend that you do not input sensitive personal information, such
            as your Social Security number, financial information, or any
            confidential data. Additionally, you should avoid sharing personal
            details with other users or any third-party services.
          </p>
          <p className="text-gray-700">
            If you choose to integrate the AI Resume Builder tool with external
            services (such as LinkedIn, GitHub, etc.), you agree to ensure that
            your personal data shared through such integrations complies with
            the terms of service and privacy policies of those platforms.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Changes to the Privacy Policy
          </h3>
          <p className="text-gray-700">
            UpToSkills reserves the right to update or modify this privacy
            policy at any time. Changes will be posted on this page, and we
            encourage you to review it periodically. By continuing to use the
            tool after any changes are made, you signify your acceptance of the
            revised privacy policy.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-blue-50 rounded-lg p-6 border border-blue-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-blue-600 mb-4">
          Questions About Our Privacy Policy?
        </h3>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns about our privacy practices,
          please contact us using the information provided on our Contact page.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Return to top of page"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
          Back to Top
        </button>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
