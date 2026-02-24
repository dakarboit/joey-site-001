
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "NOC / SOC Engineer",
    company: "BDR Group UK – Cape Town",
    period: "2025 – Present",
    highlights: [
      "Monitor enterprise infrastructure and security alerts across 24/7 NOC/SOC operations",
      "Analyse and respond to security events using SIEM and EDR platforms",
      "Investigate incidents involving malware, phishing, brute force, lateral movement, and data exfiltration",
      "Improved threat detection coverage aligned with MITRE ATT&CK framework",
    ],
  },
  {
    role: "Penetration Tester / Security Consultant",
    company: "RedShoulder – Cape Town",
    period: "2023 – 2025",
    highlights: [
      "Executed penetration tests against web applications, APIs, and internal networks",
      "Identified and exploited vulnerabilities including SQLi, XSS, SSRF, privilege escalation",
      "Supported red team engagements and phishing simulations",
    ],
  },
  {
    role: "Cloud Engineer",
    company: "Barrows Global – Durban",
    period: "2020 – 2023",
    highlights: [
      "Implemented secure Microsoft Azure architectures aligned with Zero Trust",
      "Configured Microsoft Entra ID including RBAC, Conditional Access, PIM, and MFA",
      "Deployed Microsoft Sentinel for cloud-native SIEM with custom analytics rules",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 px-4 bg-neutral-900/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-purple-200"
          >
            Professional Experience
          </motion.h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-purple-500/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative pl-12 md:pl-0 mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <div className="absolute left-2 md:left-auto md:right-auto top-1 w-5 h-5 bg-purple-500/30 border-2 border-purple-400 rounded-full z-10"
                style={index % 2 === 0 ? { right: "-10px", left: "auto" } : { left: "-10px" }}
              />
              <div className="p-5 rounded-xl border border-purple-500/15 bg-neutral-800/40">
                <span className="text-xs text-purple-400 font-medium">{exp.period}</span>
                <h3 className="text-lg font-semibold text-purple-200 mt-1">{exp.role}</h3>
                <p className="text-sm text-neutral-400 mb-3">{exp.company}</p>
                <ul className={`space-y-1.5 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-sm text-neutral-400 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-purple-400 mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
