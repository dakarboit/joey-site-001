
import Hero from "@/components/Hero";
import KeySkills from "@/components/KeySkills";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Hero />
      <KeySkills />
      <Experience />
      <Expertise />
      <Certifications />
      <section className="py-24 px-4 bg-neutral-900/50">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-200">Projects</h2>
            <p className="text-neutral-400">Hands-on cybersecurity tools and frameworks</p>
          </div>
          <Projects />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
