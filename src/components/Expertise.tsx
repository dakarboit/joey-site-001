
import { motion } from "framer-motion";
import { Shield, Terminal, Network, Brain } from "lucide-react";

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

const Expertise = () => {
  return (
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
  );
};

export default Expertise;
