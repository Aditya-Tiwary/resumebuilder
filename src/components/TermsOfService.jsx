import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
        Terms of Service
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-lg shadow-md p-6 mb-8"
      >
        <motion.div variants={sectionVariants} className="mb-6">
          <p className="text-gray-700 mb-4">
            By using the AI Resume Builder, you agree to the following terms:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              This tool is intended for educational purposes only and is
              provided as-is, without any warranties or guarantees.
            </li>
            <li>
              By using this tool, you agree to assume full responsibility for
              any consequences arising from the use of the tool.
            </li>
            <li>
              UpToSkills does not accept any liability for any data loss,
              misuse, or errors resulting from using this tool.
            </li>
            <li>
              Users must not use the tool for unlawful, harmful, or malicious
              activities.
            </li>
            <li>
              UpToSkills reserves the right to modify or discontinue the tool at
              any time, without notice.
            </li>
            <li>
              This tool may be temporarily unavailable due to maintenance,
              updates, or technical issues. UpToSkills does not guarantee
              uninterrupted access to the tool.
            </li>
          </ul>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            User Conduct
          </h3>
          <p className="text-gray-700 mb-4">
            You agree to use the AI Resume Builder in a responsible and
            respectful manner. You will not:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Submit any false, misleading, or inappropriate information through
              the tool.
            </li>
            <li>
              Engage in activities that could harm, disrupt, or damage the
              operation of the tool.
            </li>
            <li>
              Violate any local, state, or national laws in relation to the use
              of this tool.
            </li>
            <li>
              Use the tool to create, distribute, or promote malicious content,
              including but not limited to viruses, malware, or phishing
              schemes.
            </li>
            <li>
              Use the tool in any manner that could be seen as harassing or
              abusive to others, either within the UpToSkills community or
              externally.
            </li>
          </ul>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Intellectual Property
          </h3>
          <p className="text-gray-700 mb-4">
            All content, logos, designs, and trademarks associated with
            UpToSkills and the AI Resume Builder tool are the property of
            UpToSkills or its licensors. Users may not reproduce, distribute, or
            modify these assets without express written consent.
          </p>
          <p className="text-gray-700">
            Any content you create or upload using the tool (such as resumes,
            CVs, etc.) remains your property, but you grant UpToSkills a license
            to use, modify, and display the content for the purpose of improving
            the service, promoting the tool, or for educational purposes.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Indemnification
          </h3>
          <p className="text-gray-700">
            You agree to indemnify, defend, and hold harmless UpToSkills, its
            affiliates, employees, agents, and partners from any and all claims,
            damages, or liabilities arising from your use of the tool or
            violation of these Terms of Service, including any third-party
            claims.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Limitation of Liability
          </h3>
          <p className="text-gray-700">
            In no event will UpToSkills be liable for any indirect, special,
            incidental, consequential, or punitive damages, including but not
            limited to loss of profits or data, even if we have been advised of
            the possibility of such damages. Your sole remedy for any
            dissatisfaction with the tool is to discontinue using it.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants} className="mb-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Governing Law
          </h3>
          <p className="text-gray-700">
            These Terms of Service are governed by the laws of the jurisdiction
            in which UpToSkills operates, without regard to its conflict of law
            principles. Any disputes arising from these Terms will be resolved
            in the courts located in that jurisdiction. If any provision of
            these terms is found to be unenforceable, the remaining provisions
            will remain in full effect.
          </p>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Changes to the Terms of Service
          </h3>
          <p className="text-gray-700">
            UpToSkills reserves the right to modify these Terms of Service at
            any time. Updates will be posted on this page, and it is your
            responsibility to check for any changes. Continued use of the tool
            after such changes constitutes your acceptance of the updated terms.
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
          Questions About Our Terms?
        </h3>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms of Service, please contact
          our support team through the Contact page.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
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
        </div>
      </motion.div>
    </div>
  );
};

export default TermsOfService;
