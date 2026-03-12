import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Page2 = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Team Management System",
      description: "The Team Management System is a web-based platform designed to streamline team collaboration, task assignment, and progress tracking. It provides an intuitive and user-friendly interface for managing teams efficiently. The system supports user authentication, allowing both admins and employees to log in, manage tasks, assign roles, and track progress. ",
      tech: "React, Node.js",
      link:"https://teammanagementsystem.netlify.app",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Backend Project",
      description: "My backend site is designed to handle user authentication and content management efficiently. It provides basic login and logout functionality, ensuring secure access for registered users. New users can create an account, set up their profile, and start posting content on their personal feed. Once logged in, users can share updates, posts, or any information they want to display on their profile. The system manages user sessions, keeping track of authenticated users while maintaining security. Each user has their own profile where they can see their posts and possibly interact with others, depending on future enhancements.The backend is structured to handle requests smoothly, ensuring a seamless experience for users. Whether logging in, signing up, or posting content, the system efficiently processes data and maintains user sessions to keep everything running smoothly.",
      tech: "Nodejs,Express.js, MongoDb, Tailwind CSS, EJS",
      link:"https://github.com/U-jjwal/Login-Logout-Post-Function.git",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Chess Game",
      description: "My chess project is a backend-based game that allows two players to play against each other in real-time. It handles player moves, validates them according to chess rules, and ensures a smooth gameplay experience. The backend manages game sessions, stores move history, and prevents invalid moves. Since it's a two-player game, there's no AI, but it provides a fair and structured environment for users to enjoy chess online.",
      tech: "Express.js, Tailwind CSS, EJS, Node",
      link:"https://github.com/U-jjwal/chess.git",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Time Capsule",
      description: `My First Hackathon Project 
Key Features:
✅ Time-Locked Messages – Users could set a specific date and time for when their stored content would be unlocked.
✅ Secure Storage – Data was encrypted to ensure privacy and security until the release date.
✅ Multimedia Support – Allowed users to save text, images, audio, or even short videos.
✅ User Authentication – Ensured only authorized users could access their time capsules.
✅ Email Reminders – Sent users a notification when their time capsule was ready to be opened.`,
      tech: "React, Node.js/Express, MongoDb",
      link:"https://time-trace1-2d8k.onrender.com",
      bgColor: "bg-gradient-to-r from-indigo-500 to-blue-700"
    }
  ];
const gsapRef = useRef()
  useGSAP(() => {
      gsap.to(gsapRef.current,{
          scale: 0.8,
          opacity: 0,
          // ease: 'power3.out',
          scrollTrigger: {
            trigger: "card",
            start: 'top 25%',
            end: 'bottom 15%',
            scrub: true,
          },
        }
      );
    }, []);
  




  return (
    <div className="w-full min-h-screen pb-[20vh]">
      {/* Title */}
      <div className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center text-white drop-shadow-lg ">
          Projects
        </h1>
      </div>

      {/* Projects Container */}
      <div className="card space-y-16 sticky top-[15vh] sm:space-y-20 lg:space-y-24 pb-16"> 
        {projects.map((project, index) => (
          <div key={project.id} className="flex sticky top-[15vh] justify-center px-4 sm:px-6 lg:px-8">
            <div className={` w-full max-w-[90vw] sm:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[75vw] h-[70vh] sm:h-[75vh] lg:h-[80vh] ${project.bgColor} rounded-3xl sm:rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300`}>
              
              {/* Card Content */}
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left side - Project Info */}
                <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center text-white">
                  <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-relaxed whitespace-pre-line">
                      {project.description}
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-lg sm:text-xl font-semibold">Technologies:</h3>
                      <p className="text-sm sm:text-base opacity-80">{project.tech}</p>
                    </div>
                    <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-gray-800 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                    >
                      View Project
                    </a>

                    </div>
                  </div>
                </div>

                {/* Right side - Project Image/Preview */}
                <div className="w-full lg:w-1/2 relative  bg-opacity-10 backdrop-blur-sm">
                  <div className="absolute inset-4 sm:inset-6 lg:inset-8 bg-black bg-opacity-20 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <div className="text-center text-white"> 
                      <p className="text-sm sm:text-base opacity-80">Project Screenshot</p>
                      <p className="text-xs sm:text-sm opacity-60 mt-1">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;