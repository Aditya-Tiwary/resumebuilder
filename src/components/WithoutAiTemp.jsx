import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WithoutAiTemp = ({ setActiveStep }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [hoveredTemplate, setHoveredTemplate] = useState(null);
  const [showResumeEditor, setShowResumeEditor] = useState(false);
  const [showModernEditor, setShowModernEditor] = useState(false);
  //Links used cuz u cant upload manual image
  const templates = [
    {
      id: 1,
      name: 'Classic',
      preview:
        'https://cdn.enhancv.com/images/1920/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy8wVmFNNWVEdm5lSzFDNVlwZ1FXbmdtYVhZZkpJZTJzU0NzbTVlTDBML2ltYWdlLnBuZw~~.png',
      description: 'Timeless elegance for traditional industries',
    },
    {
      id: 2,
      name: 'Creative',
      preview:
        'https://cdn.enhancv.com/predefined-examples/OWMJYjIA657eHTyP8VzUVFluBa69VsJEvlwYdDk6/image.png',
      description: 'Stand out with unique flair and personality',
    },
    {
      id: 3,
      name: 'Modern',
      preview:
        'https://cdn.enhancv.com/images/1098/i/aHR0cHM6Ly9jZG4uZW5oYW5jdi5jb20vcHJlZGVmaW5lZC1leGFtcGxlcy8yTTNwUUJUeDk0cFM4dEVDdjBmdWRiZ0VZVEFaY0o3RzFldWhwbVM4L2ltYWdlLnBuZw~~.png',
      description: 'Clean, contemporary design for the digital age',
    },
  ];

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
    if (setActiveStep) {
      setActiveStep(2);
    }
  };

  const handleContinue = () => {
    if (selectedTemplate === 1) {
      setShowResumeEditor(true);
    } else if (selectedTemplate === 3) {
      setShowModernEditor(true);
    } else {
      alert(
        `The ${
          templates.find((t) => t.id === selectedTemplate)?.name
        } template is currently under development. Please try the Classic or Modern template.`
      );
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const templateVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // If resume editor is shown, import and render the appropriate editor component
  if (showResumeEditor) {
    const ResumeEditor = React.lazy(() => import('./ResumeEditor'));
    return (
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            <p className="ml-3 text-lg text-gray-700">Loading editor...</p>
          </div>
        }
      >
        <ResumeEditor />
      </React.Suspense>
    );
  }

  if (showModernEditor) {
    const ResumeEditorModern = React.lazy(() => import('./ResumeEditorModern'));
    return (
      <React.Suspense
        fallback={
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            <p className="ml-3 text-lg text-gray-700">
              Loading modern editor...
            </p>
          </div>
        }
      >
        <ResumeEditorModern />
      </React.Suspense>
    );
  }

  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h3 className="text-4xl font-extrabold mb-3 text-center tracking-wide bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
          Choose Your Perfect Template
        </h3>
        <p className="text-lg text-center text-indigo-200 mb-12 max-w-2xl mx-auto">
          Select a design that showcases your professional identity and captures
          attention
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              variants={templateVariants}
              className="relative group"
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              <motion.div
                className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                  selectedTemplate === template.id
                    ? 'ring-4 ring-pink-500 shadow-xl shadow-pink-500/30'
                    : 'ring-2 ring-indigo-300/30 shadow-lg'
                }`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelectTemplate(template.id)}
              >
                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 opacity-0 ${
                    selectedTemplate === template.id
                      ? 'opacity-100'
                      : 'group-hover:opacity-80'
                  } transition-opacity duration-300 bg-gradient-to-br from-pink-600/80 via-purple-600/80 to-indigo-600/80 backdrop-blur-sm`}
                ></div>

                {/* Template preview */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={template.preview}
                    alt={`${template.name} template preview`}
                    className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
                  />
                </div>

                {/* Overlay content */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-6 opacity-0 ${
                    hoveredTemplate === template.id ||
                    selectedTemplate === template.id
                      ? 'opacity-100'
                      : 'group-hover:opacity-100'
                  } transition-opacity duration-300`}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={
                      hoveredTemplate === template.id ||
                      selectedTemplate === template.id
                        ? { y: 0, opacity: 1 }
                        : { y: 20, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="backdrop-blur-sm bg-gradient-to-t from-black/70 to-transparent p-4 -mx-6 -mb-6"
                  >
                    <h4 className="text-xl font-bold text-white mb-1">
                      {template.name}
                    </h4>
                    <p className="text-white/80 text-sm mb-3">
                      {template.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        selectedTemplate === template.id
                          ? 'bg-pink-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      } backdrop-blur-sm transition-colors duration-300`}
                    >
                      {selectedTemplate === template.id
                        ? 'Selected'
                        : 'Select Template'}
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Selection indicator */}
              {selectedTemplate === template.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-3 -right-3 bg-pink-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {selectedTemplate && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <motion.button
              onClick={handleContinue}
              className="px-10 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full shadow-xl shadow-purple-500/30 transform transition-all duration-500 hover:shadow-purple-500/50"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  '0 20px 25px -5px rgba(147, 51, 234, 0.4), 0 8px 10px -6px rgba(147, 51, 234, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center text-lg font-semibold">
                Continue with{' '}
                {templates.find((t) => t.id === selectedTemplate)?.name}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  ></path>
                </svg>
              </span>
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default WithoutAiTemp;
