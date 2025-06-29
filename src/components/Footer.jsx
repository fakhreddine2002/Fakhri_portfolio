import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-white/10 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Fakhri Eddine Mahfoudh. All rights reserved.
        </p>
        
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/fakhreddine2002"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaGithub size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fakhrieddine-mahfoudh-a49072309/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
          >
            <FaLinkedin size={24} />
          </a>

          {/* Gmail */}
          <a
            href="mailto:fakhrieddine.mahfoudh@ensi-uma.tn"
            className="text-gray-400 hover:text-red-500 transition transform hover:scale-110"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
