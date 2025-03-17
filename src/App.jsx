import React, { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy loaded components
const HomePage = lazy(() => import('./components/HomePage'));
const WithoutAi = lazy(() => import('./components/WithoutAi'));
const FAQ = lazy(() => import('./components/FAQ'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const Community = lazy(() => import('./components/Community'));

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'withoutai', label: 'Without AI' },
    { id: 'community', label: 'Community' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">
              AI Resume Builder
            </h1>
            <nav>
              <ul className="flex flex-wrap gap-2 md:gap-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`px-4 py-2 rounded transition-all duration-300 ${
                        activeTab === item.id
                          ? 'bg-white text-blue-600'
                          : 'hover:bg-blue-500'
                      }`}
                      aria-label={`${item.label} Page`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Suspense
          fallback={
            <div className="text-center py-12">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
              <p className="mt-2 text-gray-700">Loading...</p>
            </div>
          }
        >
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[50vh]"
          >
            {activeTab === 'home' && <HomePage />}
            {activeTab === 'withoutai' && <WithoutAi />}
            {activeTab === 'faq' && <FAQ />}
            {activeTab === 'about' && <AboutUs />}
            {activeTab === 'contact' && <ContactUs />}
            {activeTab === 'community' && <Community />}
            {activeTab === 'privacy' && <PrivacyPolicy />}
            {activeTab === 'terms' && <TermsOfService />}
          </motion.div>
        </Suspense>
      </main>

      <footer className="bg-gray-800 text-white mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 AI Resume Builder. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li>
                  <button
                    onClick={() => setActiveTab('privacy')}
                    className="hover:text-blue-300 transition-colors duration-300"
                    aria-label="View Privacy Policy"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('terms')}
                    className="hover:text-blue-300 transition-colors duration-300"
                    aria-label="View Terms of Service"
                  >
                    Terms of Service
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
