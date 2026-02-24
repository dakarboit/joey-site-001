
import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

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

const education = [
  { degree: "BSc Hons in Information & Communication Technology", school: "National University of Science and Technology", year: "2013" },
  { degree: "Diploma in Management: Business Administration", school: "Nexford University", year: "2019" },
];

const Certifications = () => {
  return (
    <section className="py-24 px-4 bg-neutral-900">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <Award className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-purple-200">Certifications</h2>
            </motion.div>
            <div className="space-y-3">
              {certs.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-purple-500/10 bg-neutral-800/30"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                  <span className="text-sm text-neutral-300">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <GraduationCap className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-purple-200">Education</h2>
            </motion.div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl border border-purple-500/15 bg-neutral-800/40"
                >
                  <h3 className="font-semibold text-purple-200">{edu.degree}</h3>
                  <p className="text-sm text-neutral-400 mt-1">{edu.school}</p>
                  <span className="text-xs text-purple-400 mt-2 inline-block">{edu.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
