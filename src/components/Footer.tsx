
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com/sathwikrao4545" 
              className="hover:text-gray-300 transition-colors duration-300 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/sathwik-rao" 
              className="hover:text-gray-300 transition-colors duration-300 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/SathwikRao45" 
              className="hover:text-gray-300 transition-colors duration-300 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="mailto:sraov369@gmail.com" 
              className="hover:text-gray-300 transition-colors duration-300 hover:scale-110 transform"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="text-center">
            <p className="mb-2 hover:text-gray-300 transition-colors duration-300">Feel free to reach out if you'd like to work together!</p>
            <p className="text-gray-400 text-sm transition-colors duration-300">
              &copy; {currentYear} Sathwik Rao. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
