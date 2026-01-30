'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with real-time inventory management and secure payment processing.',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization.',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication and instant transfers.',
      tags: ['React Native', 'Firebase', 'Redux', 'Plaid API'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'Intelligent customer service chatbot using natural language processing and machine learning.',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'WebSocket'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative project management platform with task tracking and team communication.',
      tags: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      title: 'Real Estate Portal',
      description: 'Property listing and management system with virtual tours and advanced search filters.',
      tags: ['Next.js', 'Prisma', 'Mapbox', 'AWS S3'],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="p-6 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-6 w-full py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
