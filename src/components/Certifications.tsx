
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "CISSP – Certified Information Security Systems Professional",
  "CEH – Certified Ethical Hacker",
  "CSA – Certified Security Operations Analyst",
  "CAPen – Certified Application Security Pentester",
  "CRTeamerX – Certified Red Team eXpert",
  "CompTIA Security+",
  "AZ-500, AZ-104, SC-100, SC-200",
  "GCP Security Engineer & Workspace Administrator",
  "Fortinet NSE4",
];

const Certifications = () => {
  return (
    <section className="py-24 px-4 bg-[hsl(220,25%,8%)]">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Award className="w-6 h-6 text-cyan-400" />
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-200">Certifications</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certs.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-cyan-500/10 bg-[hsl(220,30%,12%)]/30"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span className="text-sm text-neutral-300">{cert}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
