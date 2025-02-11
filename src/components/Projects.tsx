
import { motion } from "framer-motion";
import { FolderGit, Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="p-6 bg-neutral-800/50 rounded-lg max-h-[500px] overflow-y-auto scrollbar-thin">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-purple-500/20 rounded-lg p-6 bg-neutral-800/30 hover:bg-neutral-800/50 transition-all"
        >
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Phishing Attack Simulator</h3>
          <p className="text-neutral-300 mb-4">
            A comprehensive platform for simulating phishing attacks to test and improve organizational security awareness. Features include customizable email templates, response tracking, and detailed analytics.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">React</span>
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">TypeScript</span>
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">Security</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://inspiring-llama-fdbf13.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              <FolderGit className="w-4 h-4 mr-2" />
              View Project
            </a>
            <a
              href="https://github.com/dakarboit/phishing-simulator-atk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-neutral-700/50 text-neutral-300 rounded-lg hover:bg-neutral-700/70 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-purple-500/20 rounded-lg p-6 bg-neutral-800/30 hover:bg-neutral-800/50 transition-all"
        >
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Incident Response Framework</h3>
          <p className="text-neutral-300 mb-4">
            A comprehensive incident response framework for detecting, analyzing, and recovering from cyber attacks. Features include attack identification, containment procedures, and post-incident analysis tools.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">SIEM</span>
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">EDR</span>
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">Forensics</span>
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">Security</span>
          </div>
          <div className="flex space-x-4">
            <a
              href ="https://lively-griffin-01f13a.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              <FolderGit className="w-4 h-4 mr-2" />
              View Project
            </a>
            <a
              href="https://github.com/dakarboit/incident-response-framework/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-neutral-700/50 text-neutral-300 rounded-lg hover:bg-neutral-700/70 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-purple-500/20 rounded-lg p-6 bg-neutral-800/30 hover:bg-neutral-800/50 transition-all"
        >
          <h3 className="text-xl font-semibold text-purple-300 mb-3">Automated Malware Analysis Framework</h3>
          <p className="text-neutral-300 mb-4">
            An advanced malware analysis platform that automates the process of analyzing, classifying, and reporting on malware threats. Features include static/dynamic analysis, sandbox environment, and automated threat intelligence reporting.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">Sandbox</span>
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">Forensics</span>
            <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full">Threat Intel</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/dakarboit/malware-analysis-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              <FolderGit className="w-4 h-4 mr-2" />
              View Project
            </a>
            <a
              href="https://github.com/dakarboit/malware-analysis-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-neutral-700/50 text-neutral-300 rounded-lg hover:bg-neutral-700/70 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
