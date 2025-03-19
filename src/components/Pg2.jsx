import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Pg2 = () => {
  const sliRef = useRef(null);

  useGSAP(() => {
    if (!sliRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sliRef.current,
        scroller: "body",
        start: "top 80%",
        end: "top -50%",
        scrub: 2,
        toggleActions: "play none none none",
      },
    });
    tl.from(
      ".line1.right",
      {
        x: 300,
        opacity: 0,
        duration: 1,
      },
      "same"
    );

    tl.from(
      ".line1.left",
      {
        x: -300,
        opacity: 0,
        duration: 1,
      },
      "same"
    );

    tl.from(
      ".line2.right",
      {
        x: 300,
        opacity: 0,
        duration: 1,
      },
      "tim"
    );

    tl.from(
      ".line2.left",
      {
        x: -300,
        opacity: 0,
        duration: 1,
      },
      "tim"
    );

    tl.from(
      ".line3.right",
      {
        x: 300,
        opacity: 0,
        duration: 1,
      },
      "tm"
    );

    tl.from(
      ".line3.left",
      {
        x: -300,
        opacity: 0,
        duration: 1,
      },
      "tm"
    );
  }, []);

  return (
    <div ref={sliRef} id="intro" className=" h-screen w-screen ">
      <div className=" flex items-center justify-center">
        <span className="text-7xl font-extrabold w-[]">Projects</span>
      </div>
      <div className="container flex-wrap ">
        <div className="elem left line1 overflow-y-auto">
          <div className=" ">
            <h2 className="font-extrabold flex items-center justify-center ">Team Management System</h2>
                  <div className="pra overflow-y-auto  max-h-48 w-full">

              <p className="">
              The Team Management System is a web-based platform designed to streamline team collaboration, task assignment, and progress tracking. It provides an intuitive and user-friendly interface for managing teams efficiently. The system supports user authentication, allowing both admins and employees to log in, manage tasks, assign roles, and track progress.
<br></br>
Key Features:
✅ User Authentication – Secure login for admins and team members.
✅ Team & Role Management – Create teams, assign roles, and manage team members.
✅ Task Assignment – Assign and track tasks with real-time updates.
✅ Progress Monitoring – Keep track of team activities and individual contributions.
✅ User-Friendly Interface – A responsive and modern UI for a seamless experience.
<br></br>
How to Log In
<br></br>
Admin Login:
Email: admin@me.com
<br></br>
Password: 123
<br></br>
Employee Login:
<br></br>
Team Member 1:
Email: employee2@example.com
<br></br>
Password: 123
<br></br>
Team Member 2:
<br></br>
Email: employee3@example.com
<br></br>
Password: 123
<br></br>

(For more team members, change the number in the email from 2 to 3, 4, etc.)
<br></br>
Live Demo
🌐 Try the demo: click to see
<br></br>
This website is perfect for businesses, organizations, and teams looking to enhance productivity and streamline their workflow! 🚀
                
                     </p>
                  </div>
              
        
            
          </div>
          <a
                href="https://teammanagementsystem.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center"
              >
                <i class="ri-arrow-right-up-line"></i> See
              </a>
        </div>
        <div className="elem bg-black text-white right line1 overflow-y-auto">
        <div className=" ">
            <h2 className="font-extrabold flex items-center justify-center ">Backent Project</h2>
                  <div className="pra overflow-y-auto">

              <p className="">
              My backend site is designed to handle user authentication and content management efficiently. It provides basic login and logout functionality, ensuring secure access for registered users. New users can create an account, set up their profile, and start posting content on their personal feed.
<br></br>
Once logged in, users can share updates, posts, or any information they want to display on their profile. The system manages user sessions, keeping track of authenticated users while maintaining security. Each user has their own profile where they can see their posts and possibly interact with others, depending on future enhancements.
<br></br>
The backend is structured to handle requests smoothly, ensuring a seamless experience for users. Whether logging in, signing up, or posting content, the system efficiently processes data and maintains user sessions to keep everything running smoothly.
                     </p>
                  </div>
              
        
            
          </div>
          <a
                href="https://github.com/U-jjwal/Login-Logout-Post-Function.git"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center"
              >
                <i class="ri-arrow-right-up-line"></i> See
              </a>
        </div>
        <div className="elem bg-black text-white left line2 overflow-y-auto">
        <div className=" ">
            <h2 className="font-extrabold flex items-center justify-center">Chess Game</h2>
                  <div className="pra overflow-y-auto">

              <p className="">
              My chess project is a backend-based game that allows two players to play against each other in real-time. It handles player moves, validates them according to chess rules, and ensures a smooth gameplay experience. The backend manages game sessions, stores move history, and prevents invalid moves. Since it's a two-player game, there's no AI, but it provides a fair and structured environment for users to enjoy chess online.
                     </p>
                  </div>
              
        
            
          </div>
          <a
                href="https://github.com/U-jjwal/chess.git"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center"
              >
                <i class="ri-arrow-right-up-line"></i> See
              </a>
        </div>
        <div className="elem right line2 overflow-y-auto">
        <div className=" ">
            <h2 className="font-extrabold flex items-center justify-center">Time Capsule</h2>
                  <div className="pra overflow-y-auto">

              <p className="">Time Capsule - My First Hackathon Project

Time Capsule was my first hackathon project, designed as a platform where users could store digital messages, media, or documents to be accessed at a future date. The core idea was to allow users to send messages to their future selves or to loved ones, preserving memories, thoughts, and goals in a secure and time-locked format.
<br></br>
Key Features:
✅ Time-Locked Messages – Users could set a specific date and time for when their stored content would be unlocked.
✅ Secure Storage – Data was encrypted to ensure privacy and security until the release date.
✅ Multimedia Support – Allowed users to save text, images, audio, or even short videos.
✅ User Authentication – Ensured only authorized users could access their time capsules.
✅ Email Reminders – Sent users a notification when their time capsule was ready to be opened.
<br></br>
The Inspiration:
The idea came from the concept of traditional time capsules—physical boxes buried with meaningful items, only to be opened years later. This digital version brought the same sentiment to the online world, making it easier for people to store and relive memories without the risk of physical decay.
<br></br>
Technical Implementation:
The project was built using a React frontend with a Node.js/Express backend, and MongoDB for storing user data and time capsules. A scheduler handled the timed release of messages, ensuring that capsules remained locked until their intended reveal date.
<br></br>
Hackathon Experience:
Participating in the hackathon taught me a lot about rapid development, teamwork, and problem-solving under pressure. It was an exciting challenge, and seeing the project come to life was incredibly rewarding.
<br></br>
Would you like me to refine this further or add any specific details? 🚀
               
                     </p>
                  </div>
              
        
            
          </div>
          <a
                href="https://time-trace1-2d8k.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center"
              >
                <i class="ri-arrow-right-up-line"></i> See
              </a>
        </div>

        <h4 className="text-2xl relative top-[]">More Projects Coming Soon</h4>
        {/* <div className="elem left line3 overflow-y-auto">
        <div className=" ">
            <h2 className="font-extrabold flex items-center justify-center ">Coming soon!</h2>
                  <div className="pra overflow-y-auto">

              <p className="">
              
                     </p>
                  </div>
              
        
            
          </div>
          <a
                href="https://github.com/U-jjwal"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center"
              >
                <i class="ri-arrow-right-up-line"></i> See
              </a>
        </div>
        <div className="elem bg-black text-white right line3 overflow-y-auto">
        <div className=" ">
            <h2 className="font-extrabold flex items-center justify-center">Coming soon!</h2>
                  <div className="pra overflow-y-auto">

              <p className="">
           
                     </p>
                  </div>
              
        
            
          </div>
          <a
                href="https://www.linkedin.com/in/-ujjwaltiwari/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center"
              >
                <i class="ri-arrow-right-up-line"></i> See
              </a>
        </div> */}
      </div>
    </div>
  );
};

export default Pg2;
