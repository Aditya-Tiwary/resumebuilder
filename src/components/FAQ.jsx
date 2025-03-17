import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the AI Resume Builder?',
      answer:
        'The AI Resume Builder is an advanced tool that helps you create professional, optimized resumes using artificial intelligence. It analyzes your skills, experience, and career goals to suggest impactful content, proper formatting, and industry-specific keywords that will make your resume stand out to employers and applicant tracking systems.',
      tags: ['general', 'features'],
    },
    {
      question: 'How does the AI Resume Builder work?',
      answer:
        'Our platform collects information about your work history, education, skills, and career goals through a user-friendly interface. The AI then processes this information, comparing it against successful resumes in your industry and providing tailored suggestions for content, format, and keywords. You maintain full control to accept, modify, or reject these suggestions.',
      tags: ['features', 'process'],
    },
    {
      question: 'Is my information secure?',
      answer:
        'Absolutely. We take data security seriously and employ industry-standard encryption and security protocols. Your personal information is never sold or shared with third parties without your explicit consent. You can review our Privacy Policy for more details on how we handle your data.',
      tags: ['security', 'privacy'],
    },
    {
      question: 'What formats can I download my resume in?',
      answer:
        'You can download your completed resume in several formats including PDF, DOCX (Microsoft Word), and plain text. PDF is recommended for most job applications as it preserves formatting across all devices. DOCX is useful if you need to make additional edits, and plain text works well for copy-pasting into online application forms.',
      tags: ['features', 'export'],
    },
    {
      question: 'How much does it cost to use AI Resume Builder?',
      answer:
        'We are completely free! All our features are available at no cost, including resume building, cover letter assistance, and AI suggestions. Enjoy full access with no hidden fees or subscriptions.',
      tags: ['pricing', 'general'],
    },
    {
      question: 'Do you offer resume templates?',
      answer:
        'Yes, we offer dozens of professionally designed, ATS-friendly templates suitable for various industries and career levels. All templates are fully customizable, allowing you to adjust colors, fonts, and layout elements to match your personal style while maintaining professional standards.',
      tags: ['features', 'templates'],
    },
    {
      question: 'Can I import my existing resume?',
      answer:
        'Yes, you can upload your existing resume in PDF or DOCX format. Our AI will analyze it, extract the information, and suggest improvements while maintaining the parts that already work well. This is a great way to update and enhance your current resume quickly.',
      tags: ['features', 'import'],
    },
    {
      question: 'How do I know if my resume is ATS-compatible?',
      answer:
        "All resumes created with our platform are designed to be ATS (Applicant Tracking System) compatible. We provide an ATS compatibility score and specific feedback on how to improve it. Our premium plans include detailed keyword analysis based on job descriptions you're targeting.",
      tags: ['features', 'ats'],
    },
  ];

  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) => tag.includes(searchTerm.toLowerCase()))
  );

  // All unique tags for filter buttons
  const allTags = [...new Set(faqs.flatMap((faq) => faq.tags))];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our AI Resume Builder. Can't
          find what you're looking for? Our support team is just a click away.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-white border border-gray-200 rounded-full shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pl-12"
          />
          <svg
            className="absolute left-4 top-5 w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-5 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setSearchTerm('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              searchTerm === ''
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchTerm(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                searchTerm === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="space-y-4 mb-12">
        {filteredFaqs.length > 0 ? (
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:ring-inset"
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        activeIndex === index
                          ? 'bg-blue-100 text-blue-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      id={`faq-answer-${index}`}
                      className="border-t border-gray-100"
                      aria-hidden={activeIndex !== index}
                    >
                      <div className="p-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {faq.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full capitalize"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-xl p-8 text-center border border-gray-100"
          >
            <svg
              className="w-16 h-16 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              No results found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-lg"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
            <p className="text-blue-100 max-w-md">
              Our support team is ready to help you with any questions or issues
              you might have. Reach out anytime!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-sm"
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Live Chat
            </a>
            <a
              href="mailto:support@airesume.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 bg-opacity-20 text-white font-medium rounded-full hover:bg-opacity-30 transition-colors duration-300"
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Support
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQ;
