
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-50/20" />
        </div>
        <div className="container max-w-4xl text-center space-y-6 fade-up">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium"
          >
            Introducing Innovation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-neutral-900"
          >
            Create the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-neutral-600 max-w-2xl mx-auto"
          >
            Experience technology that transforms the way you interact with the
            world. Simple. Intuitive. Revolutionary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <button className="px-8 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors duration-300">
              Discover More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-2xl hover-lift"
              >
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-neutral-200">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-600 mb-4 md:mb-0">
              © 2024 All rights reserved
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const features = [
  {
    title: "Seamless Integration",
    description:
      "Connect and synchronize your digital experience across all devices with zero friction.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Intelligent Design",
    description:
      "Experience thoughtfully crafted interfaces that anticipate your needs and enhance productivity.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Advanced Security",
    description:
      "Rest assured with state-of-the-art security measures protecting your data at every step.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
];

export default Index;
