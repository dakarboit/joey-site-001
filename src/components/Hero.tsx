
import { motion } from "framer-motion";
import { Github, Linkedin, Phone, FolderGit } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Projects from "@/components/Projects";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXd4NWp1MzBwMnYyOXBvbjY5YmFyM3F6ZjJkOWl5MHBhbDdqcm95eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPEqDGUULpEU0aQ/giphy.gif')] bg-cover bg-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900" />
      </div>
      <div className="container max-w-4xl text-center space-y-8 fade-up">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
        >
          Cybersecurity Specialist
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
        >
          Joe Daniels Taomhera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-neutral-300 max-w-2xl mx-auto"
        >
          I'm an Information Security Researcher with a passion for defensive security, SOC operations, and cyber resilience. Skilled in a wide range of cybersecurity tools and methodologies, I focus on hardening infrastructures and defending against modern cyber threats.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg italic text-purple-300"
        >
          "To be yourself in a world that is constantly trying to make you something else, is the greatest accomplishment" - Ralph Waldo Emerson
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8"
        >
          <Tabs defaultValue="github" className="w-full max-w-md mx-auto">
            <TabsList className="grid w-full grid-cols-4 bg-neutral-800/50">
              <TabsTrigger value="github" className="data-[state=active]:bg-purple-500">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </TabsTrigger>
              <TabsTrigger value="linkedin" className="data-[state=active]:bg-purple-500">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </TabsTrigger>
              <TabsTrigger value="whatsapp" className="data-[state=active]:bg-purple-500">
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </TabsTrigger>
              <TabsTrigger value="projects" className="data-[state=active]:bg-purple-500">
                <FolderGit className="w-5 h-5 mr-2" />
                Projects
              </TabsTrigger>
            </TabsList>
            <TabsContent value="github" className="mt-4">
              <a
                href="https://github.com/dakarboit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-neutral-800/50 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                Visit My GitHub Profile
              </a>
            </TabsContent>
            <TabsContent value="linkedin" className="mt-4">
              <a
                href="https://www.linkedin.com/in/joe-daniels-taomhera-4a1260342/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-neutral-800/50 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </TabsContent>
            <TabsContent value="whatsapp" className="mt-4">
              <a
                href="https://wa.me/27678280287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 bg-neutral-800/50 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </TabsContent>
            <TabsContent value="projects" className="mt-4">
              <Projects />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
