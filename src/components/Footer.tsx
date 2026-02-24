
const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-cyan-500/10 bg-[hsl(220,25%,6%)]">
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
              className="text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joe-daniels-taomhera-4a1260342/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
