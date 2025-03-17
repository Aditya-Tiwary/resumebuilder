import React, { useState, useRef, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import { motion } from 'framer-motion';

const ResumeEditor = () => {
  const [resumeData, setResumeData] = useState({
    name: 'Aditya Tiwary',
    role: 'Experienced Business Analyst | Supply Chain Optimization | Data Analytics',
    phone: '+44 20 7123 4567',
    email: 'aditya@email.com',
    linkedin: 'linkedin.com/in/jack-taylor',
    location: 'Birmingham',
    summary:
      'With over 9 years of experience in business analysis, supply chain management, and logistics, I have a proven record of reducing costs while enhancing efficiency and customer satisfaction. My expertise includes running advanced business models, financial reporting, and streamlining processes to refine supply chain operations. I am eager to contribute to your commitment to sustainability and the journey to net zero.',
    experience: [
      {
        title: 'Supply Chain Analyst',
        companyName: 'Unilever',
        date: '01/2019 - 12/2022',
        companyLocation: 'London, UK',
        accomplishment:
          '• Led a cross-functional team to streamline logistics processes, reducing overall supply chain costs by 15% within a 12-month period.\n' +
          '• Optimized inventory levels through improved forecasting accuracy, resulting in a 20% reduction in working capital requirements.\n' +
          '• Managed supplier performance and initiated strategic partnerships which enhanced raw material availability by 25%.\n' +
          '• Developed robust business models in Excel, simulating various supply scenarios to improve decision-making efficiencies.\n' +
          '• Implemented an AIMMS-based planning solution that improved logistics scheduling, enhancing customer satisfaction rates by 30%.\n' +
          '• Contributed to a company-wide sustainability initiative aimed at reducing environmental impact, in line with the journey to net-zero emissions.',
      },
      {
        title: 'Logistics Coordinator',
        companyName: 'GlaxoSmithKline',
        date: '06/2016 - 12/2018',
        companyLocation: 'Brentford, UK',
        accomplishment:
          '• Coordinated shipping activities for pharmaceutical products, achieving a 99% on-time delivery record over two years.\n' +
          '• Reduced freight costs by 10% through the negotiation of more favorable terms with logistics providers.\n' +
          '• Managed a team responsible for ensuring compliance with international logistics and shipping regulations.\n' +
          '• Collaborated with manufacturing teams to align production schedules with customer demand, ensuring optimal resource allocation.',
      },
      {
        title: 'Commercial Analyst',
        companyName: 'Johnson Matthey',
        date: '09/2013 - 05/2016',
        companyLocation: 'Royston, UK',
        accomplishment:
          '• Analysed commercial data to provide insights driving a 5% year-over-year growth for specific product lines.\n' +
          '• Supported monthly financial close processes, improving reporting efficiency by 20%.\n' +
          '• Conducted competitive analysis leading to strategic adjustments and a subsequent 8% market share increase.',
      },
    ],
    education: [
      {
        degree: 'MSc Supply Chain and Logistics Management',
        institution: 'University of Warwick',
        duration: '01/2011 - 01/2012',
        location: 'Coventry, UK',
      },
      {
        degree: 'BSc Economics and Management',
        institution: 'University of Leeds',
        duration: '01/2008 - 01/2011',
        location: 'Leeds, UK',
      },
    ],
    achievements: [
      {
        keyAchievements: '• Team Lead for Sustainability Project',
        describe:
          'Spearheaded a cross-functional team initiative that targeted a 15% carbon footprint reduction.',
      },
      {
        keyAchievements: '• Award for Logistics Excellence',
        describe:
          'Received an internal accolade for outstanding work in logistics coordination.',
      },
      {
        keyAchievements: '• Negotiation Success',
        describe:
          'Renegotiated freight contracts, cutting transportation costs by 10%.',
      },
    ],
    courses: [
      {
        title: 'Advanced Excel for Productivity',
        description:
          'Certification program by Corporate Finance Institute, sharpening my data analysis and modelling skills for robust business decision-making.',
      },
      {
        title: 'SAP Supply Chain Management',
        description:
          'Focused training on supply chain processes via SAP SCM provided by the SAP Training and Certification Shop.',
      },
    ],
    skills: [
      'Supply Chain Management',
      'Logistics Planning',
      'Business Process Optimization',
      'Data Analysis',
      'Financial Reporting',
      'Microsoft Office',
    ],
    projects: [],
  });

  const [showButtons, setShowButtons] = useState(true);
  const [photo, setPhoto] = useState(null);
  const [branding, setBranding] = useState(false);
  const [showEnhancementOptions, setShowEnhancementOptions] = useState(false);
  const [sectionSettings, setSectionSettings] = useState({
    header: {
      showTitle: true,
      showPhone: true,
      showLink: true,
      showEmail: true,
      showLocation: true,
      uppercaseName: false,
      showPhoto: true,
    },
    summary: { showSummary: true },
    experience: { showExperience: true },
    education: { showEducation: true },
    achievements: { showAchievements: true },
    courses: { showCourses: true },
    skills: { showSkills: true },
    projects: { showProjects: true },
  });

  const [activeSection, setActiveSection] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [sectionsOrder, setSectionsOrder] = useState([
    'summary',
    'experience',
    'education',
    'achievements',
    'skills',
    'courses',
    'projects',
  ]);
  const [showShareNotification, setShowShareNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    const savedResume = localStorage.getItem('resumeData');
    if (savedResume) setResumeData(JSON.parse(savedResume));

    const savedSettings = localStorage.getItem('sectionSettings');
    if (savedSettings) setSectionSettings(JSON.parse(savedSettings));

    const savedBranding = localStorage.getItem('branding');
    if (savedBranding) setBranding(JSON.parse(savedBranding));
  }, []);

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    localStorage.setItem('sectionSettings', JSON.stringify(sectionSettings));
    localStorage.setItem('branding', JSON.stringify(branding));
  }, [resumeData, sectionSettings, branding]);

  const handleInputChange = (section, field, value, index = null) => {
    if (index !== null) {
      const updatedSection = [...(resumeData[section] || [])];
      updatedSection[index][field] = value;
      setResumeData({ ...resumeData, [section]: updatedSection });
    } else {
      setResumeData({ ...resumeData, [field]: value });
    }
  };

  const handleAddSection = (section) => {
    const newItem =
      {
        experience: {
          title: '',
          companyName: '',
          date: '',
          companyLocation: '',
          accomplishment: '• ',
        },
        education: { degree: '', institution: '', duration: '', location: '' },
        achievements: { keyAchievements: '• ', describe: '' },
        courses: { title: '', description: '' },
        skills: '',
        projects: { title: '', description: '', duration: '' },
      }[section] || {};
    setResumeData((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), newItem],
    }));
  };

  const handleRemoveSection = (section, index) => {
    const updatedSection = [...(resumeData[section] || [])];
    updatedSection.splice(index, 1);
    setResumeData({ ...resumeData, [section]: updatedSection });
  };

  const handleDownload = () => {
    setShowButtons(false);
    setActiveSection(null);

    setTimeout(() => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      let yPos = 10;

      const sanitizeText = (text) => {
        if (typeof text !== 'string') return '';
        return text.replace(/\u2605/g, '★').replace(/\u26A1/g, '⚡');
      };

      const removeLeadingBullets = (text) => {
        if (!text) return '';
        return text
          .split('\n')
          .map((line) => line.replace(/^\s*•\s*/, '').trim())
          .join('\n');
      };

      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(24);
      pdf.text(sanitizeText(resumeData.name), pageWidth / 2, yPos, {
        align: 'center',
      });
      yPos += 10;

      if (sectionSettings.header.showTitle) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(14);
        pdf.setTextColor(0, 0, 255);
        pdf.text(sanitizeText(resumeData.role), pageWidth / 2, yPos, {
          align: 'center',
        });
        pdf.setTextColor(0, 0, 0);
        yPos += 8;
      }

      if (
        sectionSettings.header.showPhone ||
        sectionSettings.header.showEmail ||
        sectionSettings.header.showLink ||
        sectionSettings.header.showLocation
      ) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        const contactItems = [
          sectionSettings.header.showPhone
            ? sanitizeText(resumeData.phone)
            : '',
          sectionSettings.header.showEmail
            ? sanitizeText(resumeData.email)
            : '',
          sectionSettings.header.showLink
            ? sanitizeText(resumeData.linkedin)
            : '',
          sectionSettings.header.showLocation
            ? sanitizeText(resumeData.location)
            : '',
        ].filter(Boolean);
        let contactText = contactItems.join(' • ');
        pdf.text(contactText, pageWidth / 2, yPos, { align: 'center' });
        yPos += 8;
      }

      if (sectionSettings.header.showPhoto && photo) {
        const imgData = photo.split(',')[1];
        pdf.addImage(imgData, 'PNG', pageWidth - 40, yPos, 30, 30);
        yPos += 40;
      }

      sectionsOrder.forEach((section) => {
        if (section === 'summary' && sectionSettings.summary.showSummary) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(16);
          pdf.text(sanitizeText('Summary'), pageWidth / 2, yPos, {
            align: 'center',
          });
          pdf.setDrawColor(0, 0, 0);
          pdf.line(10, yPos + 2, pageWidth - 10, yPos + 2);
          yPos += 8;
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(12);
          const summaryLines = pdf.splitTextToSize(
            sanitizeText(resumeData.summary),
            pageWidth - 20
          );
          pdf.text(summaryLines, 10, yPos, { align: 'left' });
          yPos += summaryLines.length * 5 + 10;
        }
        if (
          section === 'experience' &&
          sectionSettings.experience.showExperience
        ) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(16);
          pdf.text(sanitizeText('Experience'), pageWidth / 2, yPos, {
            align: 'center',
          });
          pdf.setDrawColor(0, 0, 0);
          pdf.line(10, yPos + 2, pageWidth - 10, yPos + 2);
          yPos += 8;
          resumeData.experience.forEach((exp) => {
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.setTextColor(0, 0, 255);
            pdf.text(sanitizeText(exp.companyName), 10, yPos, {
              align: 'left',
            });
            pdf.setTextColor(0, 0, 0);
            yPos += 5;
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            pdf.text(sanitizeText(exp.title), 15, yPos, { align: 'left' });
            yPos += 5;
            pdf.text(sanitizeText(exp.date), 15, yPos, { align: 'left' });
            yPos += 5;
            pdf.text(sanitizeText(exp.companyLocation), 15, yPos, {
              align: 'left',
            });
            yPos += 5;
            pdf.setTextColor(0, 0, 255);
            const bulletPoints = sanitizeText(
              removeLeadingBullets(exp.accomplishment)
            )
              .split('\n')
              .filter((line) => line.trim() !== '');
            bulletPoints.forEach((line, idx) => {
              pdf.text('•', 15, yPos + idx * 8, { align: 'left' });
              pdf.setTextColor(0, 0, 0);
              const bulletText = pdf.splitTextToSize(
                line.trim(),
                pageWidth - 30
              );
              pdf.text(bulletText, 20, yPos + idx * 8, { align: 'left' });
            });
            yPos += bulletPoints.length * 8 + 15;
          });
        }
        if (
          section === 'education' &&
          sectionSettings.education.showEducation
        ) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(16);
          pdf.text(sanitizeText('Education'), pageWidth / 2, yPos, {
            align: 'center',
          });
          pdf.setDrawColor(0, 0, 0);
          pdf.line(10, yPos + 2, pageWidth - 10, yPos + 2);
          yPos += 8;
          resumeData.education.forEach((edu) => {
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.setTextColor(0, 0, 255);
            pdf.text(sanitizeText(edu.institution), 10, yPos, {
              align: 'left',
            });
            pdf.setTextColor(0, 0, 0);
            yPos += 5;
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            pdf.text(sanitizeText(edu.degree), 15, yPos, { align: 'left' });
            yPos += 5;
            pdf.text(sanitizeText(edu.duration), 15, yPos, { align: 'left' });
            yPos += 5;
            pdf.text(sanitizeText(edu.location), 15, yPos, { align: 'left' });
            yPos += 10;
          });
        }
        if (
          section === 'achievements' &&
          sectionSettings.achievements.showAchievements
        ) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(16);
          pdf.text(sanitizeText('Key Achievements'), pageWidth / 2, yPos, {
            align: 'center',
          });
          pdf.setDrawColor(0, 0, 0);
          pdf.line(10, yPos + 2, pageWidth - 10, yPos + 2);
          yPos += 8;
          resumeData.achievements.forEach((achievement) => {
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.setTextColor(0, 0, 255);
            pdf.text(sanitizeText(achievement.keyAchievements), 10, yPos, {
              align: 'left',
            });
            pdf.setTextColor(0, 0, 0);
            yPos += 5;
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            const descLines = pdf.splitTextToSize(
              sanitizeText(achievement.describe),
              pageWidth - 25
            );
            pdf.text(descLines, 20, yPos, { align: 'left' });
            yPos += descLines.length * 5 + 10;
          });
        }
        if (section === 'skills' && sectionSettings.skills.showSkills) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(16);
          pdf.text(sanitizeText('Skills'), pageWidth / 2, yPos, {
            align: 'center',
          });
          pdf.setDrawColor(0, 0, 0);
          pdf.line(10, yPos + 2, pageWidth - 10, yPos + 2);
          yPos += 8;
          pdf.setFont('helvetica', 'normal');
          pdf.setFontSize(10);
          const skillsText = resumeData.skills.join(', ');
          const skillsLines = pdf.splitTextToSize(
            sanitizeText(skillsText),
            pageWidth - 20
          );
          pdf.text(skillsLines, 10, yPos, { align: 'left' });
          yPos += skillsLines.length * 5 + 10;
        }
        if (section === 'courses' && sectionSettings.courses.showCourses) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(16);
          pdf.text(sanitizeText('Courses'), pageWidth / 2, yPos, {
            align: 'center',
          });
          pdf.setDrawColor(0, 0, 0);
          pdf.line(10, yPos + 2, pageWidth - 10, yPos + 2);
          yPos += 8;
          resumeData.courses.forEach((course) => {
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.setTextColor(0, 0, 255);
            pdf.text(sanitizeText(course.title), 10, yPos, { align: 'left' });
            pdf.setTextColor(0, 0, 0);
            yPos += 5;
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            const descLines = pdf.splitTextToSize(
              sanitizeText(course.description),
              pageWidth - 20
            );
            pdf.text(descLines, 15, yPos, { align: 'left' });
            yPos += descLines.length * 5 + 10;
          });
        }
        if (section === 'projects' && sectionSettings.projects.showProjects) {
          pdf.setFont('helvetica', 'bold');
          pdf.setFontSize(16);
          pdf.text(sanitizeText('Projects'), pageWidth / 2, yPos, {
            align: 'center',
          });
          pdf.setDrawColor(0, 0, 0);
          pdf.line(10, yPos + 2, pageWidth - 10, yPos + 2);
          yPos += 8;
          resumeData.projects.forEach((project) => {
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.text(sanitizeText(project.title), 10, yPos, { align: 'left' });
            yPos += 5;
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            const descLines = pdf.splitTextToSize(
              sanitizeText(project.description),
              pageWidth - 20
            );
            pdf.text(descLines, 15, yPos, { align: 'left' });
            yPos += descLines.length * 5 + 5;
            pdf.text(sanitizeText(project.duration), 15, yPos, {
              align: 'left',
            });
            yPos += 10;
          });
        }

        if (yPos > pageHeight - 20) {
          pdf.addPage();
          yPos = 10;
        }
      });

      if (branding) {
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(10);
        pdf.text(
          sanitizeText('Made by Jack Taylor'),
          pageWidth / 2,
          pageHeight - 10,
          { align: 'center' }
        );
      }

      pdf.save('resume.pdf');
      setShowButtons(true);
    }, 500);
  };

  const handleShare = () => {
    const resumeLink = window.location.href;
    navigator.clipboard
      .writeText(resumeLink)
      .then(() => {
        setShowShareNotification(true);
        setTimeout(() => setShowShareNotification(false), 3000);
      })
      .catch(() => alert('Failed to copy link to clipboard.'));
  };

  const handleUploadResume = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file)
        alert('PDF uploaded successfully. Backend logic will be implemented.');
    };
    input.click();
  };

  const handleSettingChange = (section, setting) => {
    setSectionSettings((prev) => ({
      ...prev,
      [section]: { ...prev[section], [setting]: !prev[section][setting] },
    }));
  };

  const handleBrandingToggle = () => setBranding((prev) => !prev);

  const handleSettingsClick = (section) =>
    setActiveSection(activeSection === section ? null : section);

  const handleSectionHover = (section) => setHoveredSection(section);
  const handleSectionLeave = () => setHoveredSection(null);

  const handleMoveSectionUp = (index) => {
    if (index > 0) {
      const newOrder = [...sectionsOrder];
      [newOrder[index - 1], newOrder[index]] = [
        newOrder[index],
        newOrder[index - 1],
      ];
      setSectionsOrder(newOrder);
    }
  };

  const handleMoveSectionDown = (index) => {
    if (index < sectionsOrder.length - 1) {
      const newOrder = [...sectionsOrder];
      [newOrder[index + 1], newOrder[index]] = [
        newOrder[index],
        newOrder[index + 1],
      ];
      setSectionsOrder(newOrder);
    }
  };

  const handleAIEnhancement = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('AI enhancement is not available in offline mode.');
    }, 2000);
  };

  const enhanceSingleField = (field) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Enhancing ${field} is not available in offline mode.`);
    }, 1500);
  };

  const LoadingScreen = () => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-white text-xl font-semibold">
          Enhancing your resume...
        </p>
      </div>
    </div>
  );

  const ShareNotification = () => (
    <motion.div
      className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      Link copied to clipboard!
    </motion.div>
  );

  return (
    <div className="flex min-h-screen">
      <motion.div
        className="w-16 md:w-72 bg-gray-100 text-gray-800 p-4 md:p-6 rounded-r-3xl shadow-2xl border-r border-gray-200 flex flex-col items-center md:items-start"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-gray-200 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-gray-200 opacity-20 rounded-full blur-2xl"></div>

        <div className="w-full flex flex-col items-center md:items-start space-y-4 md:space-y-6 z-10">
          <motion.h3
            className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800 hidden md:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Resume Tools
          </motion.h3>

          <motion.button
            className="w-12 h-12 md:w-full md:h-auto bg-blue-500 text-white rounded-full md:rounded-full p-2 md:p-3 shadow-lg flex items-center justify-center group hover:bg-blue-600 hover:shadow-xl md:flex-row md:justify-start md:space-x-2"
            onClick={() => setActiveSection('rearrange')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
            <span className="text-2xl md:text-lg">↕️</span>
            <span className="hidden md:inline">Rearrange</span>
          </motion.button>

          <motion.button
            className="w-12 h-12 md:w-full md:h-auto bg-red-500 text-white rounded-full md:rounded-full p-2 md:p-3 shadow-lg flex items-center justify-center group hover:bg-red-600 hover:shadow-xl md:flex-row md:justify-start md:space-x-2"
            onClick={handleAIEnhancement}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
            <span className="text-2xl md:text-lg">🤖</span>
            <span className="hidden md:inline">AI Assistant</span>
          </motion.button>

          {showEnhancementOptions && (
            <motion.div
              className="w-full space-y-2 mt-2 p-2 bg-white rounded-xl shadow-md border border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h4 className="text-sm font-semibold text-gray-800 mb-2">
                Enhance Specific Field
              </h4>
              <motion.button
                className="w-full bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300 transition-all duration-300 text-sm hover:shadow-md"
                onClick={() => enhanceSingleField('summary')}
                whileHover={{ scale: 1.03 }}
              >
                Enhance Summary
              </motion.button>
              <motion.button
                className="w-full bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300 transition-all duration-300 text-sm hover:shadow-md"
                onClick={() => enhanceSingleField('skills')}
                whileHover={{ scale: 1.03 }}
              >
                Enhance Skills
              </motion.button>
              <motion.button
                className="w-full bg-gray-200 text-gray-800 p-2 rounded-lg hover:bg-gray-300 transition-all duration-300 text-sm hover:shadow-md"
                onClick={() => enhanceSingleField('experience')}
                whileHover={{ scale: 1.03 }}
              >
                Enhance Experience
              </motion.button>
            </motion.div>
          )}

          <hr className="border-gray-300 my-2 w-full hidden md:block" />

          <motion.button
            className="w-12 h-12 md:w-full md:h-auto bg-yellow-500 text-white rounded-full md:rounded-full p-2 md:p-3 shadow-lg flex items-center justify-center group hover:bg-yellow-600 hover:shadow-xl md:flex-row md:justify-start md:space-x-2"
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
            <span className="text-2xl md:text-lg">⬇️</span>
            <span className="hidden md:inline">Download</span>
          </motion.button>

          <motion.button
            className="w-12 h-12 md:w-full md:h-auto bg-green-500 text-white rounded-full md:rounded-full p-2 md:p-3 shadow-lg flex items-center justify-center group hover:bg-green-600 hover:shadow-xl md:flex-row md:justify-start md:space-x-2"
            onClick={handleShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
            <span className="text-2xl md:text-lg">🔗</span>
            <span className="hidden md:inline">Share</span>
          </motion.button>

          <motion.div
            className="flex items-center justify-between mt-2 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-gray-800 font-medium hidden md:block">
              Branding
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={branding}
                onChange={handleBrandingToggle}
                className="sr-only"
              />
              <div className="w-12 h-6 bg-gray-300 rounded-full relative transition-all duration-300">
                <motion.div
                  className="absolute w-5 h-5 bg-gray-600 rounded-full left-0.5 top-0.5"
                  initial={false}
                  animate={{ x: branding ? 24 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                />
              </div>
            </label>
          </motion.div>

          <motion.button
            className="w-12 h-12 md:w-full md:h-auto bg-purple-500 text-white rounded-full md:rounded-full p-2 md:p-3 shadow-lg flex items-center justify-center group hover:bg-purple-600 hover:shadow-xl md:flex-row md:justify-start md:space-x-2"
            onClick={handleUploadResume}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <span className="absolute inset-0 bg-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
            <span className="text-2xl md:text-lg">⬆️</span>
            <span className="hidden md:inline">Upload Resume</span>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 bg-white p-4 md:p-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div
          ref={resumeRef}
          className="w-[210mm] max-w-full mx-auto border border-gray-300 rounded-lg bg-white shadow-md p-4 md:p-5"
          style={{ minHeight: '297mm' }}
        >
          <div className="text-center mb-4">
            <h1
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                handleInputChange(null, 'name', e.target.innerText)
              }
              className="text-2xl font-bold text-gray-800"
              onMouseEnter={() => handleSectionHover('header')}
              onMouseLeave={handleSectionLeave}
            >
              {resumeData.name}
            </h1>
            <div className="flex justify-end mt-2">
              <button
                className="text-gray-500 hover:text-gray-700 settings-icon"
                onClick={() => handleSettingsClick('header')}
                aria-label="Open header settings"
              >
                ⚙
              </button>
            </div>
            {sectionSettings.header.showTitle && (
              <p
                contentEditable
                onBlur={(e) =>
                  handleInputChange(null, 'role', e.target.textContent)
                }
                className="text-lg text-blue-500"
              >
                {resumeData.role}
              </p>
            )}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {sectionSettings.header.showPhone && (
                <span
                  contentEditable
                  onBlur={(e) =>
                    handleInputChange(null, 'phone', e.target.textContent)
                  }
                  className="text-sm text-black"
                >
                  {resumeData.phone}
                </span>
              )}
              {sectionSettings.header.showEmail && (
                <span
                  contentEditable
                  onBlur={(e) =>
                    handleInputChange(null, 'email', e.target.textContent)
                  }
                  className="text-sm text-black"
                >
                  {resumeData.email}
                </span>
              )}
              {sectionSettings.header.showLink && (
                <span
                  contentEditable
                  onBlur={(e) =>
                    handleInputChange(null, 'linkedin', e.target.textContent)
                  }
                  className="text-sm text-black"
                >
                  {resumeData.linkedin}
                </span>
              )}
              {sectionSettings.header.showLocation && (
                <span
                  contentEditable
                  onBlur={(e) =>
                    handleInputChange(null, 'location', e.target.textContent)
                  }
                  className="text-sm text-black"
                >
                  {resumeData.location}
                </span>
              )}
            </div>
          </div>
          {sectionSettings.header.showPhoto && photo && (
            <div className="flex justify-center mb-4">
              <img
                src={photo}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          )}
          {sectionsOrder.map((section) => {
            if (section === 'summary' && sectionSettings.summary.showSummary) {
              return (
                <div className="mb-4" key={section}>
                  <h2
                    onMouseEnter={() => handleSectionHover('summary')}
                    onMouseLeave={handleSectionLeave}
                    className="text-xl font-bold border-b border-gray-300 pb-0 mb-2 text-center flex items-center justify-between"
                  >
                    <span>Summary</span>
                    <button
                      className="text-gray-500 hover:text-gray-700 settings-icon ml-2"
                      onClick={() => handleSettingsClick('summary')}
                      aria-label="Open summary settings"
                    >
                      ⚙
                    </button>
                  </h2>
                  <p
                    contentEditable
                    onBlur={(e) =>
                      handleInputChange(null, 'summary', e.target.textContent)
                    }
                    className="text-sm text-gray-700"
                  >
                    {resumeData.summary}
                  </p>
                </div>
              );
            }
            if (
              section === 'experience' &&
              sectionSettings.experience.showExperience
            ) {
              return (
                <div className="mb-4" key={section}>
                  <h2
                    onMouseEnter={() => handleSectionHover('experience')}
                    onMouseLeave={handleSectionLeave}
                    className="text-xl font-bold border-b border-gray-300 pb-0 mb-2 text-center flex items-center justify-between"
                  >
                    <span>Experience</span>
                    <button
                      className="text-gray-500 hover:text-gray-700 settings-icon ml-2"
                      onClick={() => handleSettingsClick('experience')}
                      aria-label="Open experience settings"
                    >
                      ⚙
                    </button>
                  </h2>
                  {resumeData.experience.map((exp, idx) => (
                    <div key={idx} className="mb-2">
                      <div className="border-t border-gray-300 pt-1">
                        <h3
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'experience',
                              'companyName',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-lg font-bold text-blue-500"
                        >
                          {exp.companyName}
                        </h3>
                        <p
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'experience',
                              'title',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-sm text-gray-600"
                        >
                          {exp.title}
                        </p>
                        <p
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'experience',
                              'date',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-sm text-gray-600"
                        >
                          {exp.date}
                        </p>
                        <p
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'experience',
                              'companyLocation',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-sm text-gray-600"
                        >
                          {exp.companyLocation}
                        </p>
                        <ul className="list-disc pl-5 text-sm text-gray-700 leading-relaxed">
                          {exp.accomplishment
                            .split('\n')
                            .filter((line) => line.trim() !== '')
                            .map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>
                                <span
                                  contentEditable
                                  onBlur={(e) => {
                                    const updatedBullets = exp.accomplishment
                                      .split('\n')
                                      .filter((line) => line.trim() !== '');
                                    updatedBullets[
                                      bulletIdx
                                    ] = `• ${e.target.textContent.trim()}`;
                                    handleInputChange(
                                      'experience',
                                      'accomplishment',
                                      updatedBullets.join('\n'),
                                      idx
                                    );
                                  }}
                                  className="text-sm text-gray-700"
                                >
                                  {bullet.trim().replace(/^•\s*/, '')}
                                </span>
                              </li>
                            ))}
                        </ul>
                      </div>
                      {showButtons && (
                        <button
                          onClick={() => handleRemoveSection('experience', idx)}
                          className="text-sm text-red-500 hover:text-red-700 mt-2"
                        >
                          Remove Experience
                        </button>
                      )}
                    </div>
                  ))}
                  {showButtons && (
                    <button
                      onClick={() => handleAddSection('experience')}
                      className="text-sm text-blue-500 hover:text-blue-700 mt-2"
                    >
                      Add Experience
                    </button>
                  )}
                </div>
              );
            }
            if (
              section === 'education' &&
              sectionSettings.education.showEducation
            ) {
              return (
                <div className="mb-4" key={section}>
                  <h2
                    onMouseEnter={() => handleSectionHover('education')}
                    onMouseLeave={handleSectionLeave}
                    className="text-xl font-bold border-b border-gray-300 pb-1 mb-2 text-center flex items-center justify-between"
                  >
                    <span>Education</span>
                    <button
                      className="text-gray-500 hover:text-gray-700 settings-icon ml-2"
                      onClick={() => handleSettingsClick('education')}
                      aria-label="Open education settings"
                    >
                      ⚙
                    </button>
                  </h2>
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx} className="mb-3">
                      <div>
                        <h3
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'education',
                              'institution',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-lg font-bold text-blue-500"
                        >
                          {edu.institution}
                        </h3>
                        <p
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'education',
                              'degree',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-sm text-gray-600"
                        >
                          {edu.degree}
                        </p>
                        <p
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'education',
                              'duration',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-sm text-gray-600"
                        >
                          {edu.duration}
                        </p>
                        <p
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'education',
                              'location',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-sm text-gray-600"
                        >
                          {edu.location}
                        </p>
                      </div>
                      {showButtons && (
                        <button
                          onClick={() => handleRemoveSection('education', idx)}
                          className="text-sm text-red-500 hover:text-red-700"
                        >
                          Remove Education
                        </button>
                      )}
                    </div>
                  ))}
                  {showButtons && (
                    <button
                      onClick={() => handleAddSection('education')}
                      className="text-sm text-blue-500 hover:text-blue-700"
                    >
                      Add Education
                    </button>
                  )}
                </div>
              );
            }
            if (
              section === 'achievements' &&
              sectionSettings.achievements.showAchievements
            ) {
              return (
                <div className="mb-4" key={section}>
                  <h2
                    onMouseEnter={() => handleSectionHover('achievements')}
                    onMouseLeave={handleSectionLeave}
                    className="text-xl font-bold border-b border-gray-300 pb-1 mb-2 text-center flex items-center justify-between"
                  >
                    <span>Key Achievements</span>
                    <button
                      className="text-gray-500 hover:text-gray-700 settings-icon ml-2"
                      onClick={() => handleSettingsClick('achievements')}
                      aria-label="Open achievements settings"
                    >
                      ⚙
                    </button>
                  </h2>
                  {resumeData.achievements.map((achievement, idx) => (
                    <div key={idx} className="mb-3">
                      <h3
                        contentEditable
                        onBlur={(e) =>
                          handleInputChange(
                            'achievements',
                            'keyAchievements',
                            e.target.textContent,
                            idx
                          )
                        }
                        className="text-lg font-bold text-blue-500"
                      >
                        {achievement.keyAchievements}
                      </h3>
                      <p
                        contentEditable
                        onBlur={(e) =>
                          handleInputChange(
                            'achievements',
                            'describe',
                            e.target.textContent,
                            idx
                          )
                        }
                        className="text-sm text-gray-700"
                      >
                        {achievement.describe}
                      </p>
                      {showButtons && (
                        <button
                          onClick={() =>
                            handleRemoveSection('achievements', idx)
                          }
                          className="text-sm text-red-500 hover:text-red-700"
                        >
                          Remove Achievement
                        </button>
                      )}
                    </div>
                  ))}
                  {showButtons && (
                    <button
                      onClick={() => handleAddSection('achievements')}
                      className="text-sm text-blue-500 hover:text-blue-700"
                    >
                      Add Achievement
                    </button>
                  )}
                </div>
              );
            }
            if (section === 'skills' && sectionSettings.skills.showSkills) {
              return (
                <div className="mb-4" key={section}>
                  <h2
                    onMouseEnter={() => handleSectionHover('skills')}
                    onMouseLeave={handleSectionLeave}
                    className="text-xl font-bold border-b border-gray-300 pb-1 mb-2 text-center flex items-center justify-between"
                  >
                    <span>Skills</span>
                    <button
                      className="text-gray-500 hover:text-gray-700 settings-icon ml-2"
                      onClick={() => handleSettingsClick('skills')}
                      aria-label="Open skills settings"
                    >
                      ⚙
                    </button>
                  </h2>
                  <ul className="list-disc pl-5">
                    {resumeData.skills.map((skill, idx) => (
                      <li key={`${skill}-${idx}`} className="mb-2">
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const updatedSkills = [...resumeData.skills];
                            updatedSkills[idx] = e.target.textContent;
                            setResumeData({
                              ...resumeData,
                              skills: updatedSkills,
                            });
                          }}
                          className="text-sm text-gray-700"
                        >
                          {skill}
                        </span>
                        {showButtons && (
                          <button
                            onClick={() => handleRemoveSection('skills', idx)}
                            className="text-sm text-red-500 hover:text-red-700 ml-2"
                          >
                            Remove Skill
                          </button>
                        )}
                      </li>
                    ))}
                  </ul>
                  {showButtons && (
                    <button
                      onClick={() => handleAddSection('skills')}
                      className="text-sm text-blue-500 hover:text-blue-700"
                    >
                      Add Skill
                    </button>
                  )}
                </div>
              );
            }
            if (section === 'courses' && sectionSettings.courses.showCourses) {
              return (
                <div className="mb-4" key={section}>
                  <h2
                    onMouseEnter={() => handleSectionHover('courses')}
                    onMouseLeave={handleSectionLeave}
                    className="text-xl font-bold border-b border-gray-300 pb-1 mb-2 text-center flex items-center justify-between"
                  >
                    <span>Courses</span>
                    <button
                      className="text-gray-500 hover:text-gray-700 settings-icon ml-2"
                      onClick={() => handleSettingsClick('courses')}
                      aria-label="Open courses settings"
                    >
                      ⚙
                    </button>
                  </h2>
                  {resumeData.courses.map((course, idx) => (
                    <div key={idx} className="mb-3">
                      <h3
                        contentEditable
                        onBlur={(e) =>
                          handleInputChange(
                            'courses',
                            'title',
                            e.target.textContent,
                            idx
                          )
                        }
                        className="text-lg font-bold text-blue-500"
                      >
                        {course.title}
                      </h3>
                      <p
                        contentEditable
                        onBlur={(e) =>
                          handleInputChange(
                            'courses',
                            'description',
                            e.target.textContent,
                            idx
                          )
                        }
                        className="text-sm text-gray-700"
                      >
                        {course.description}
                      </p>
                      {showButtons && (
                        <button
                          onClick={() => handleRemoveSection('courses', idx)}
                          className="text-sm text-red-500 hover:text-red-700"
                        >
                          Remove Course
                        </button>
                      )}
                    </div>
                  ))}
                  {showButtons && (
                    <button
                      onClick={() => handleAddSection('courses')}
                      className="text-sm text-blue-500 hover:text-blue-700"
                    >
                      Add Course
                    </button>
                  )}
                </div>
              );
            }
            if (
              section === 'projects' &&
              sectionSettings.projects.showProjects
            ) {
              return (
                <div className="mb-4" key={section}>
                  <h2
                    onMouseEnter={() => handleSectionHover('projects')}
                    onMouseLeave={handleSectionLeave}
                    className="text-xl font-bold border-b border-gray-300 pb-1 mb-2 text-center flex items-center justify-between"
                  >
                    <span>Projects</span>
                    <button
                      className="text-gray-500 hover:text-gray-700 settings-icon ml-2"
                      onClick={() => handleSettingsClick('projects')}
                      aria-label="Open projects settings"
                    >
                      ⚙
                    </button>
                  </h2>
                  {resumeData.projects.map((project, idx) => (
                    <div key={idx} className="mb-3">
                      <div>
                        <h3
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'projects',
                              'title',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-lg font-bold text-gray-800"
                        >
                          {project.title}
                        </h3>
                        <p
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'projects',
                              'description',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-sm text-gray-700"
                        >
                          {project.description}
                        </p>
                      </div>
                      <div>
                        <p
                          contentEditable
                          onBlur={(e) =>
                            handleInputChange(
                              'projects',
                              'duration',
                              e.target.textContent,
                              idx
                            )
                          }
                          className="text-sm text-gray-600"
                        >
                          {project.duration}
                        </p>
                      </div>
                      {showButtons && (
                        <button
                          onClick={() => handleRemoveSection('projects', idx)}
                          className="text-sm text-red-500 hover:text-red-700"
                        >
                          Remove Project
                        </button>
                      )}
                    </div>
                  ))}
                  {showButtons && (
                    <button
                      onClick={() => handleAddSection('projects')}
                      className="text-sm text-blue-500 hover:text-blue-700"
                    >
                      Add Project
                    </button>
                  )}
                </div>
              );
            }
            return null;
          })}
          {branding && (
            <motion.div
              className="text-center text-sm text-gray-500 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              Made by Jack Taylor
            </motion.div>
          )}
        </div>
      </motion.div>

      {activeSection === 'rearrange' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg w-80 max-w-full mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              Rearrange Sections
            </h3>
            {sectionsOrder.map((section, idx) => (
              <div
                key={section}
                className="flex items-center justify-between mb-2 p-2 bg-gray-50 rounded"
              >
                <span className="text-sm font-medium text-gray-800">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleMoveSectionUp(idx)}
                    className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300 disabled:opacity-50"
                    disabled={idx === 0}
                  >
                    ⬆️
                  </button>
                  <button
                    onClick={() => handleMoveSectionDown(idx)}
                    className="bg-gray-200 text-gray-700 p-1 rounded hover:bg-gray-300 disabled:opacity-50"
                    disabled={idx === sectionsOrder.length - 1}
                  >
                    ⬇️
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setActiveSection(null)}
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {activeSection && activeSection !== 'rearrange' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <motion.div
            className="bg-white p-4 rounded-lg shadow-lg w-80 max-w-full mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-800">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}{' '}
              Settings
            </h3>
            <div className="space-y-3">
              {Object.keys(sectionSettings[activeSection]).map((key) => (
                <label
                  key={key}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded"
                >
                  <span className="text-sm font-medium text-gray-800">
                    {key
                      .replace('show', '')
                      .replace(/([A-Z])/g, ' $1')
                      .trim()}
                  </span>
                  <div className="relative inline-block w-10 h-6 transition duration-200 ease-in-out rounded-full cursor-pointer">
                    <input
                      type="checkbox"
                      id={`toggle-${key}`}
                      className="sr-only"
                      checked={sectionSettings[activeSection][key]}
                      onChange={() => handleSettingChange(activeSection, key)}
                    />
                    <label
                      htmlFor={`toggle-${key}`}
                      className={`block h-6 overflow-hidden rounded-full cursor-pointer ${
                        sectionSettings[activeSection][key]
                          ? 'bg-blue-500'
                          : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out bg-white ${
                          sectionSettings[activeSection][key]
                            ? 'translate-x-4'
                            : 'translate-x-0'
                        }`}
                      />
                    </label>
                  </div>
                </label>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setActiveSection(null)}
                className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition-colors text-sm"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {showShareNotification && <ShareNotification />}
      {isLoading && <LoadingScreen />}
    </div>
  );
};

export default ResumeEditor;
