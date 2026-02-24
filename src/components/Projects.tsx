
import { motion } from "framer-motion";
import { FolderGit, Github, ShieldAlert, ShieldCheck, UserX, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const Projects = () => {
  return (
    <div className="p-6 bg-[hsl(220,30%,12%)]/50 rounded-lg max-h-[500px] overflow-y-auto">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-cyan-500/20 rounded-lg p-6 bg-[hsl(220,30%,12%)]/30 hover:bg-[hsl(220,30%,14%)]/50 transition-all"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-3 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-red-400" />
            Phishing Attack Simulator
          </h3>
          
          <Card className="bg-[hsl(220,30%,12%)]/50 border-red-500/20 mb-4">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-red-400">Active Phishing Attempt Detected</CardTitle>
              <CardDescription className="text-neutral-400">
                Malicious email campaign targeting finance department
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-300">Attack Progress</span>
                  <span className="text-sm text-red-400">75%</span>
                </div>
                <Progress value={75} className="h-2 bg-[hsl(220,20%,18%)]" />
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-neutral-300">23 Emails Sent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserX className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-neutral-300">5 Clicked Links</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-3 mb-4">
            <h4 className="text-sm font-semibold text-cyan-300 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              Mitigation Steps
            </h4>
            <div className="space-y-2">
              {[
                { step: "Block Sender Domains", status: "Completed", progress: 100 },
                { step: "Alert Security Team", status: "In Progress", progress: 80 },
                { step: "User Training Initiated", status: "In Progress", progress: 45 },
                { step: "Update Email Filters", status: "Pending", progress: 20 },
              ].map((step, index) => (
                <div key={index} className="bg-[hsl(220,20%,15%)]/50 p-3 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-neutral-300">{step.step}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      step.status === "Completed" ? "bg-green-500/20 text-green-300" :
                      step.status === "In Progress" ? "bg-yellow-500/20 text-yellow-300" :
                      "bg-neutral-500/20 text-neutral-300"
                    }`}>
                      {step.status}
                    </span>
                  </div>
                  <Progress 
                    value={step.progress} 
                    className="h-1.5 bg-[hsl(220,20%,18%)]" 
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="text-neutral-300 mb-4">
            A comprehensive platform for simulating phishing attacks to test and improve organizational security awareness.
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">React</span>
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">TypeScript</span>
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">Tailwind CSS</span>
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">Security</span>
          </div>

          <Separator className="my-4 bg-cyan-500/20" />
          
          <div className="flex space-x-4">
            <a href="https://inspiring-llama-fdbf13.netlify.app/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors">
              <FolderGit className="w-4 h-4 mr-2" /> View Project
            </a>
            <a href="https://github.com/dakarboit/phishing-simulator-atk" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-900/40 text-blue-200 rounded-lg hover:bg-blue-900/60 transition-colors">
              <Github className="w-4 h-4 mr-2" /> Source Code
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border border-cyan-500/20 rounded-lg p-6 bg-[hsl(220,30%,12%)]/30 hover:bg-[hsl(220,30%,14%)]/50 transition-all"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-3">Incident Response Framework</h3>
          <p className="text-neutral-300 mb-4">
            A comprehensive incident response framework for detecting, analyzing, and recovering from cyber attacks.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">SIEM</span>
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">EDR</span>
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">Forensics</span>
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">Security</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://lively-griffin-01f13a.netlify.app/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors">
              <FolderGit className="w-4 h-4 mr-2" /> View Project
            </a>
            <a href="https://github.com/dakarboit/incident-response-framework/tree/main" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-900/40 text-blue-200 rounded-lg hover:bg-blue-900/60 transition-colors">
              <Github className="w-4 h-4 mr-2" /> Source Code
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-cyan-500/20 rounded-lg p-6 bg-[hsl(220,30%,12%)]/30 hover:bg-[hsl(220,30%,14%)]/50 transition-all"
        >
          <h3 className="text-xl font-semibold text-cyan-300 mb-3">Automated Malware Analysis Framework</h3>
          <p className="text-neutral-300 mb-4">
            An advanced malware analysis platform that automates the process of analyzing, classifying, and reporting on malware threats.
          </p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">Sandbox</span>
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">Forensics</span>
            <span className="px-3 py-1 text-sm bg-cyan-500/20 text-cyan-300 rounded-full">Threat Intel</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://fanciful-cascaron-a26ccd.netlify.app/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg hover:bg-cyan-500/30 transition-colors">
              <FolderGit className="w-4 h-4 mr-2" /> View Project
            </a>
            <a href="https://github.com/dakarboit/malware-analysis-framework" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-900/40 text-blue-200 rounded-lg hover:bg-blue-900/60 transition-colors">
              <Github className="w-4 h-4 mr-2" /> Source Code
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
