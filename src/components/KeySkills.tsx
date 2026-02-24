
import { motion } from "framer-motion";
import { Shield, Cloud, Crosshair, Monitor, Terminal, Lock } from "lucide-react";

const skills = [
  {
    category: "Security Operations & Monitoring",
    icon: <Monitor className="w-5 h-5" />,
    items: ["SIEM (Splunk, QRadar, Sentinel, Seceon)", "Incident Detection & Triage", "Log Analysis", "SOAR & Automation Playbooks", "OSINT"],
  },
  {
    category: "Penetration Testing & Offensive Security",
    icon: <Crosshair className="w-5 h-5" />,
    items: ["Web App & API Pen Testing", "Vulnerability Assessment", "Red & Blue Team Exercises", "OWASP Top 10", "Social Engineering"],
  },
  {
    category: "Cloud & Infrastructure Security",
    icon: <Cloud className="w-5 h-5" />,
    items: ["AWS / Azure / GCP Security", "IAM, RBAC & Least Privilege", "Container & Kubernetes Security", "Zero Trust Architecture", "Secure Networking (VPC, NSGs, FW)"],
  },
  {
    category: "Tools & Technologies",
    icon: <Terminal className="w-5 h-5" />,
    items: ["EDR/XDR: Defender, CrowdStrike, S1", "Email: Mimecast, Darktrace, ProofPoint", "Vuln: Nessus, Qualys, OpenVAS", "Offensive: Metasploit, Burp Suite, Nmap"],
  },
  {
    category: "Frameworks & Compliance",
    icon: <Shield className="w-5 h-5" />,
    items: ["MITRE ATT&CK", "NIST", "ISO 27001", "CIS Benchmarks", "SOC Playbooks & Runbooks"],
  },
  {
    category: "Scripting & OS",
    icon: <Lock className="w-5 h-5" />,
    items: ["Python", "Bash", "PowerShell", "Linux / Windows / MacOS", "TCP/IP, DNS, VPNs"],
  },
];

const KeySkills = () => {
  return (
    <section className="py-24 px-4 bg-neutral-900">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-purple-200"
          >
            Key Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-neutral-400 max-w-2xl mx-auto"
          >
            Comprehensive cybersecurity capabilities spanning defensive, offensive, and cloud security domains
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-purple-500/15 bg-neutral-800/40 hover:bg-neutral-800/60 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/20 text-purple-300 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-purple-200 text-sm">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-neutral-400 flex items-start gap-2">
                    <span className="text-purple-500 mt-1.5 w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeySkills;
