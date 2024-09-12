'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { ChevronDown, Brain, Lightbulb, Cpu, Network } from 'lucide-react'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero')
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const sections = ['Expertise', 'Services', 'Projects', 'Achievements']

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const glowingBorder = {
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3), 0 0 45px rgba(255, 255, 255, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out'
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <motion.section
        className="h-screen flex flex-col items-center justify-center relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="text-center p-8 rounded-lg"
          style={glowingBorder}
          whileHover={{ scale: 1.05 }}
        >
          <motion.h1
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            {...fadeInUp}
          >
            Samantha Wright
          </motion.h1>
          <motion.p
            className="text-2xl mb-8 text-gray-300"
            {...fadeInUp}
          >
            AI Whisperer & Consultant
          </motion.p>
        </motion.div>
        <motion.div
          className="absolute bottom-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <ChevronDown className="w-10 h-10 animate-bounce" />
        </motion.div>
      </motion.section>

      {sections.map((section, index) => (
        <motion.section
          key={section}
          className="min-h-screen flex flex-col items-center justify-center p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            {...fadeInUp}
          >
            {section}
          </motion.h2>
          <motion.div
            className="max-w-4xl w-full"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {section === 'Expertise' && (
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" {...fadeInUp}>
                <ExpertiseCard
                  icon={<Brain className="w-12 h-12 mb-4" />}
                  title="AI Strategy"
                  description="Developing comprehensive AI strategies tailored to business needs and goals."
                />
                <ExpertiseCard
                  icon={<Lightbulb className="w-12 h-12 mb-4" />}
                  title="AI Innovation"
                  description="Identifying cutting-edge AI applications to drive innovation and competitive advantage."
                />
                <ExpertiseCard
                  icon={<Cpu className="w-12 h-12 mb-4" />}
                  title="AI Implementation"
                  description="Guiding organizations through the process of integrating AI solutions into existing systems."
                />
                <ExpertiseCard
                  icon={<Network className="w-12 h-12 mb-4" />}
                  title="AI Ethics"
                  description="Ensuring responsible and ethical AI practices in line with industry standards and regulations."
                />
              </motion.div>
            )}
            {section === 'Services' && (
              <motion.div className="space-y-8" {...fadeInUp}>
                <ServiceCard
                  title="AI Readiness Assessment"
                  description="Evaluating organizational capabilities and infrastructure to determine AI readiness and potential impact."
                />
                <ServiceCard
                  title="AI Workshop Facilitation"
                  description="Conducting interactive workshops to educate teams on AI concepts, applications, and best practices."
                />
                <ServiceCard
                  title="AI Project Management"
                  description="Overseeing the planning, execution, and delivery of AI initiatives from concept to deployment."
                />
                <ServiceCard
                  title="AI Performance Optimization"
                  description="Analyzing and fine-tuning AI models and systems to maximize efficiency and effectiveness."
                />
              </motion.div>
            )}
            {section === 'Projects' && (
              <motion.div className="space-y-8" {...fadeInUp}>
                <ProjectCard
                  title="AI-Driven Customer Service Transformation"
                  description="Led the implementation of an AI-powered chatbot and sentiment analysis system, resulting in a 40% reduction in response times and a 25% increase in customer satisfaction scores."
                />
                <ProjectCard
                  title="Predictive Maintenance AI Solution"
                  description="Developed and deployed a machine learning model for a manufacturing client, reducing equipment downtime by 30% and maintenance costs by 25%."
                />
                <ProjectCard
                  title="AI Ethics Framework Development"
                  description="Created a comprehensive AI ethics framework for a Fortune 500 company, ensuring responsible AI practices across all departments and projects."
                />
              </motion.div>
            )}
            {section === 'Achievements' && (
              <motion.ul className="list-disc list-inside space-y-4 text-lg text-gray-300" {...fadeInUp}>
                <li>Recognized as a "Top 50 AI Influencer" by TechWorld Magazine in 2023.</li>
                <li>Keynote speaker at the International AI Ethics Symposium, addressing over 5,000 industry professionals.</li>
                <li>Published author of "The AI Whisperer's Handbook: Navigating the Future of Artificial Intelligence in Business".</li>
                <li>Successfully guided over 50 companies in implementing AI strategies, resulting in an average 35% increase in operational efficiency.</li>
              </motion.ul>
            )}
          </motion.div>
        </motion.section>
      ))}
    </div>
  )
}

function ExpertiseCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-lg"
      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 255, 255, 0.5)' }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {icon}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

function ServiceCard({ title, description }) {
  return (
    <motion.div
      className="bg-white bg-opacity-5 p-6 rounded-lg backdrop-blur-lg"
      whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}

function ProjectCard({ title, description }) {
  return (
    <motion.div
      className="bg-gradient-to-r from-purple-800 to-indigo-800 p-6 rounded-lg"
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)' }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}