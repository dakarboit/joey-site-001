
import { motion } from "framer-motion";
import { Shield, Terminal, Network, Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 -z-10">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center opacity-20"
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-neutral-300 max-w-2xl mx-auto"
          >
            Specializing in SIEM/SOC Operations and Blockchain Security
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4 flex gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300">
              View Projects
            </button>
            <button className="px-8 py-3 border border-purple-500/50 text-purple-300 rounded-full hover:bg-purple-500/10 transition-colors duration-300">
              Contact Me
            </button>
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
