import { motion } from "framer-motion";
import { Shield, Terminal, Network, Brain, Github, Linkedin, Phone, FolderGit } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 bg-[url('https://cdn.dribbble.com/users/1059583/screenshots/4171367/media/5c8264a20b247115b68e6c2f4c97d5e6.gif')] bg-cover bg-center opacity-20"
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

          {/* Mission Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-neutral-300 max-w-2xl mx-auto"
          >
            I'm an Information Security Researcher with a passion for defensive security, SOC operations, and cyber resilience. Skilled in a wide range of cybersecurity tools and methodologies, I focus on hardening infrastructures and defending against modern cyber threats.
          </motion.p>

          {/* Personal Motto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg italic text-purple-300"
          >
            "My Faith, views, ways are mine"
          </motion.p>

          {/* Social Connections Tabs */}
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
                <div className="p-4 bg-neutral-800/50 rounded-lg text-center">
                  <p className="text-neutral-300">Projects section coming soon...</p>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-4 bg-neutral-900/50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-neutral-400">Defending digital frontiers with advanced security solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl hover-lift border border-purple-500/20 bg-neutral-800/50"
              >
                <div className="w-12 h-12 bg-purple-500/20 text-purple-300 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-200">{item.title}</h3>
                <p className="text-neutral-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-neutral-800">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 mb-4 md:mb-0">
              © 2024 Joe Daniels Taomhera
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/dakarboit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-purple-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/joe-daniels-taomhera-4a1260342/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-purple-400 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const expertise = [
  {
    title: "SIEM/SOC Operations",
    description: "Expert in Security Information and Event Management, monitoring and responding to security threats in real-time.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Blockchain Security",
    description: "Specialized in securing blockchain infrastructure and smart contract auditing.",
    icon: <Network className="w-6 h-6" />,
  },
  {
    title: "Threat Detection",
    description: "Advanced threat detection and incident response capabilities.",
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    title: "Security Strategy",
    description: "Developing comprehensive security strategies and frameworks.",
    icon: <Brain className="w-6 h-6" />,
  },
];

export default Index;
