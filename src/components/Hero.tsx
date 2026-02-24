
import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[url('/images/soc-background.jpg')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-900/90 to-neutral-900" />
      </div>

      <div className="container max-w-5xl text-center space-y-8 py-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
        >
          SOC Engineer / Analyst • Penetration Tester • Cloud Security Engineer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-cyan-300"
        >
          Joseph Daniel Taomhera
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed"
        >
          Highly skilled SOC Engineer/Analyst with extensive hands-on experience across Security Operations, penetration testing, and cloud security engineering. Proven ability to monitor, detect, analyse, and respond to complex security incidents while strengthening infrastructure resilience across on-prem and cloud environments.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg italic text-purple-300/80"
        >
          "To be yourself in a world that is constantly trying to make you something else, is the greatest accomplishment" — Ralph Waldo Emerson
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="https://github.com/dakarboit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors border border-purple-500/20"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joe-daniels-taomhera-4a1260342/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors border border-purple-500/20"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="https://wa.me/27678280287"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors border border-purple-500/20"
          >
            <Phone className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href="mailto:josepht.daniels@outlook.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-700/50 text-neutral-300 rounded-lg hover:bg-neutral-700/70 transition-colors border border-neutral-600/30"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-neutral-500 text-sm pt-2"
        >
          <MapPin className="w-3.5 h-3.5" /> Cape Town, South Africa
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
