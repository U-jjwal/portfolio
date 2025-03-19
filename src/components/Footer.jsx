import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" border-t text-black py-6 text-center h-[10vh] relative top-[46vh]">
        <h2 className="text-5xl font-extrabold">Get in Touch</h2>
      <div className=" mx-auto flex flex-col flex-row items-center justify-center gap-10  flex-wrap relative top-[10vh]">
        
        {/* GitHub */}
        <a href="https://github.com/U-jjwal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-400 transition">
          <FaGithub size={25} />
          <span className="hidden md:inline">GitHub</span>
        </a>

        {/* Email */}
        <a href="mailto:ujjwaltiwari242@gmail.com" className="flex items-center gap-2 hover:text-gray-400 transition">
          <FaEnvelope size={25} />
          <span className="hidden md:inline">Email</span>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/-ujjwaltiwari/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-400 transition">
          <FaLinkedin size={25} />
          <span className="hidden md:inline">LinkedIn</span>
        </a>

      </div>
      <p className="text-sm text-gray-700 mt-4 relative top-[15vh]">© {new Date().getFullYear()} Ujjwal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;