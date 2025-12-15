/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Entry.css";
import "./Contact.css"
// Import Tippy JS package
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // For styling
import Resume from "../media/files/Miracle.pdf";
import dev_avatar from "../assets/devImages/dev-avatar.png";
import dev2 from "../assets/devImages/dev-2.png";
// import backgroundVideo from "../media/videos/dark-tone.mp4";
import NavMenu from "./NavMenu";
import Chatbot from "./Chatbot";
// Import Dev images
import hand_wave from "../assets/hand-wave.png";
import mainDev from "../assets/dev/Onyia_miracle_dev.webp";
// Import Project Images
import estate from "../assets/projects/real_estate.png";
import hospital from "../assets/projects/hospital.png";
import forex from "../assets/projects/forex.png";
import crypto from "../assets/projects/crypto.png";
import laptop from "../assets/projects/laptop.png";
import restaurant from "../assets/projects/restaurant.png";
import Testimonial from "./Testimonial";

const Entry = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

  })
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const navigate = useNavigate();
  const btnRef = useRef(null);
  const btnRefCurrent = btnRef.current;
  //  console.log("Button Ref Current:", btnRefCurrent);

  // Route to the Hero Container
  const home = useRef(null);
  console.log("Home Ref Current:", home.current);
  const buttonHome = useRef(null);
  console.log("Button Home Ref:", buttonHome.current);
  useEffect(() => {
    if (buttonHome.current) {
      buttonHome.current?.addEventListener("click", () => {
        // alert("Home Button Clicked");
        home.current?.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  //  Route to About Me Section
  const aboutMe = useRef(null);
  const aboutMeBtn = useRef(null);
  useEffect(() => {
    if (aboutMe.current) {
      aboutMeBtn.current?.addEventListener("click", () => {
        // alert("About Me Button Clicked");
        aboutMe.current?.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  // Route to Experience Section(Skills)
  const experienceMe = useRef(null);
  const experienceMeBtn = useRef(null);
  useEffect(() => {
    if (experienceMe.current) {
      experienceMeBtn.current?.addEventListener("click", () => {
        experienceMe.current?.scrollIntoView({ behavior: "smooth" });
      })
    }
  });

  // Route to Work Experience Section
  const experienceSection = useRef(null);
  const experienceSectionBtn = useRef(null);
  useEffect(() => {
    if (experienceSection.current) {
      experienceSectionBtn.current?.addEventListener("click", () => {
        experienceSection.current?.scrollIntoView({ behavior: "smooth" });
      })
    }
  });

  // Route to Projects Section
  const projectsSection = useRef(null);
  const projectsSectionBtn = useRef(null);
  useEffect(() => {
    if (projectsSection.current) {
      projectsSectionBtn.current?.addEventListener("click", () => {
        projectsSection.current?.scrollIntoView({ behavior: "smooth" });
      })
    }
  });

  // Route to Contact Section
  const contactSection = useRef(null);
  const contactBtn = useRef(null)
  useEffect(() => {
    if (contactSection.current) {
      contactBtn.current?.addEventListener("click", () => {
        contactSection.current?.scrollIntoView({behavior: "smooth"})
      })
    }
  })

  // Load whatsapp bot script
  const whatsAppBot = useRef(null);
  useEffect(() => {
    if (whatsAppBot.current) {
      whatsAppBot.current?.addEventListener("click", () => {
           window.location.href =
             "https://wa.me/+2349056255572?text=Hello Miracle, I saw your portfolio and would like to get in touch.";
      })
    }
  })

  // Show and Hide JD when clicked
 const [openJob, setOpenJob] = useState(null); 

//  Ad active style to the clicked nav buttons
const [isButtonActive, setIsButtonActive] = useState(null);
const handleButtonClick = (buttonIndex) => {
  setIsButtonActive(buttonIndex);
};

// Scroll to Footer 
const scrollFooter = useRef(null);
const buttonScroll = useRef(null);
useEffect(() => {
  if (scrollFooter.current) {
    buttonScroll.current?.addEventListener("click", () => {
      scrollFooter.current?.scrollIntoView({behavior: "smooth"})
    })
  }
})


//  Tool Tippy Initialization
// tippy("#singleElement", {
//   content: "Tooltip",
// });
tippy("[data-tippy-content]");

// Tippy for customization
useEffect(() => {
  tippy("[data-tippy-content]", {
    theme: "myTheme",
  });
}, []);

  return (
    <>
      {/* Helmet */}

      {/* Parent */}
      <div className="container" id="parent">
        {/* Nav Menu */}
        <div className="nav-menu">
          <div className="navMenuContainer d-flex justify-content-evenly">
            <button
              className={isButtonActive === "Home" ? "active" : ""}
              onClick={() => setIsButtonActive("Home")}
              id="singleElement"
              data-tippy-content="Home"
              ref={buttonHome}>
              <span className="fa-solid fa-house"></span>
            </button>

            <button
              className={isButtonActive === "About" ? "active" : ""}
              onClick={() => setIsButtonActive("About")}
              data-tippy-content="About Me"
              ref={aboutMeBtn}>
              <i className="fa-solid fa-user"></i>
            </button>
            <button
              className={isButtonActive === "Work" ? "active" : ""}
              onClick={() => setIsButtonActive("Work")}
              data-tippy-content="Work Experience"
              ref={experienceSectionBtn}>
              <i className="fa-solid fa-briefcase"></i>
            </button>

            <button
              className={isButtonActive === "Skills" ? "active" : ""}
              onClick={() => setIsButtonActive("Skills")}
              data-tippy-content="My Skills"
              ref={experienceMeBtn}>
              <i className="fa-solid fa-book"></i>
            </button>

            <button
              className={isButtonActive === "Projects" ? "active" : ""}
              onClick={() => setIsButtonActive("Projects")}
              data-tippy-content="My Projects"
              ref={projectsSectionBtn}>
              <i className="fa-solid fa-handshake"></i>
            </button>

            <button
              ref={contactBtn}
              className={isButtonActive === "Contact" ? "active" : ""}
              onClick={() => setIsButtonActive("Contact")}
              data-tippy-content="Contact Me">
              <i className="fa-solid fa-address-card"></i>
            </button>
          </div>
        </div>

        <div
          ref={whatsAppBot}
          className="whatsapp_bot"
          data-tippy-content="Send me a WhatsApp Message"
          role="button">
          <i className="fa-brands fa-whatsapp"></i>
        </div>
        <div className="hero-section" ref={home}>
          {/* <video src={backgroundVideo} autoPlay muted loop playsInline style={{width: "100%"}}>

          </video> */}
          <div className="wave-greet m-2" data-aos="zoom-in-up">
            <img src={hand_wave} className="img_wave" width={"50px"} alt="" />
          </div>
          <p>
            <strong>Hello World, I'm</strong>
          </p>
          <h1 className="dev-name" data-aos="zoom-in-up">
            Onyia Miracle
            <span style={{ color: "#4a90e2" }}>.</span>
          </h1>
          <p className="dev-role" style={{ color: "#aaaaaaff" }}>
            <span
              style={{
                color: "#aaaaaaff",
                // borderBottom: "2px solid #4a90e2",
              }}>
              Front-End
            </span>{" "}
            Engineer
          </p>
          <div
            className="dev-cv mt-5"
            style={{
              margin: "50px 0",
            }}>
            <a
              href={Resume}
              download={true}
              aria-label="Download my CV"
              className=""
              id="cv-download">
              Download Resume
            </a>
            <a href="" aria-label="Let's chat" className="let-chat ">
              Let's Connect
            </a>
          </div>
        </div>
        <div
          className="hero-dev-contacts d-flex justify-content-between"
          ref={aboutMe}>
          <div className="scroll">
            <button ref={buttonScroll}>
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </div>
          <div className="dev-image">
            <img src={dev_avatar} alt="Developer Avatar" />
          </div>
          <div className="dev-contacts">
            <button>
              <a
                aria-label="Go to my Github Page"
                href="https://github.com/MiracleChibuike"
                target="_blank"
                rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </button>
            <br />
            <button>
              <a
                aria-label="Go to my LinkedIn Page"
                href="https://linkedin.com/in/onyia-miracle"
                target="_blank"
                rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </button>
            <br />
            <div className="tiny">
              <button id="circle"></button>
              <button id="circle"></button>
              <button id="circle2"></button>
              <button id="circle2"></button>
              <button id="circle2"></button>
            </div>
          </div>
        </div>
        {/* About Me */}
        <div
          className="about-me"
          id="about"
          data-aos="zoom-in-up"
          ref={aboutMe}>
          <div className="text-center">
            <p>
              <strong style={{ color: "#aaaaaaff" }}>Behind the Name</strong>
            </p>
            <h3
              className="dev-about-header"
              style={{
                fontWeight: "700",
              }}>
              Get to Know Me
            </h3>
          </div>
          <div className="dev-info">
            <div className="img-dev">
              <div className="img-dev-me">
                <img id="img-dev" src={mainDev} alt="Onyia Miracle Chibuike" />
              </div>
            </div>
            <div className="dev-bio">
              <div className="dev-cards" data-aos="fade-right">
                <div className="experience-card">
                  <button style={{ background: "transparent", border: "none" }}>
                    <i className="fa-solid fa-award"></i>
                  </button>
                  <h5 style={{ background: "transparent" }}>Experience</h5>
                  <p style={{ background: "transparent" }}>
                    <small style={{ background: "transparent" }}>
                      2+ Years of Industry Experience
                    </small>
                  </p>
                </div>
                <div className="clients-card">
                  <button style={{ background: "transparent", border: "none" }}>
                    <i className="fa-solid fa-users"></i>
                  </button>
                  <h5 style={{ background: "transparent" }}>My Client's</h5>
                  <p style={{ background: "transparent" }}>
                    <small style={{ background: "transparent" }}>
                      10+ Verified WorldWide
                    </small>
                  </p>
                </div>
                <div className="projects">
                  <button style={{ background: "transparent", border: "none" }}>
                    <i className="fa-solid fa-book"></i>
                  </button>
                  <h5 style={{ background: "transparent" }}>Projects</h5>
                  <p style={{ background: "transparent" }}>
                    <small style={{ background: "transparent" }}>
                      Backed by 10+ Completed
                    </small>
                  </p>
                </div>
              </div>
              {/* Dev Into-detials */}
              <p
                style={{ color: "#aaaaaaff", whiteSpace: "wrap" }}
                data-aos="fade-right"
                id="int">
                Hello All! I am Onyia Miracle, a Certified Front-End Web
                Developer based out of Owerri, Nigeria. I enjoy turning ideas
                into clean, responsive, and user-friendly websites and
                applications, blending both logic and creativity in every
                project I build. Alongside development, I have experience
                teaching and coaching others as I have coached a total of 50
                students and still counting both in-person and online. I
                actively contribute to open-source projects, always looking for
                ways to add value to the tech community.
                <br />
                I’m excited to keep growing, improving my craft, and
                contributing my skills to the right company.
              </p>
              <div>
                <a
                  ref={contactBtn}
                  aria-label="Let's speak"
                  href=""
                  id="speak-with-me">
                  Speak with Me
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Working Experience */}
        <div
          data-aos="zoom-in-up"
          className="work_Exp"
          style={{
            margin: "90px 0",
          }}>
          <div className="text-center">
            <p>
              <strong style={{ color: "#aaaaaaff" }}>
                Professional Working Experience
              </strong>
            </p>
            <h3
              className="dev-about-header"
              style={{
                fontWeight: "700",
              }}>
              See where I've Worked and What I've Done
            </h3>
          </div>
          {/* Working Experience cards */}
          <div className="work_exp" ref={experienceSection}>
            <div className="work_exp_auto m-2" data-aos="fade-up-right">
              <div
                className="roles_info"
                role="button"
                onClick={() => setOpenJob(openJob === 0 ? null : 0)}
                aria-expanded={openJob === 0}>
                <div className="role d-flex justify-content-between">
                  <h5>Front-End Engineer </h5>
                  <p>
                    <i className="fa-solid fa-caret-down"></i>
                  </p>
                </div>
                <div className="role_details">
                  <span>Streethub Schola</span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-location-dot text-secondary"></i>{" "}
                    Owerri, Imo State Nigeria
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-calendar text-secondary"></i>{" "}
                    March 2023 — Present{" "}
                  </span>
                  <div className="job_type mt-3">
                    <span className="shadow-lg">Remote, Part-time</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className={`jD mt-2 ${openJob === 0 ? "retrieve" : ""}`}>
                <ul>
                  <li>
                    Developed and maintained the Newsletter page for teachers —
                    enabling educators to publish and manage announcements to
                    students and parents while working alongside a team of 5
                    developers
                  </li>
                  <li>
                    Built the Question Bank page for teachers — allowing
                    educators to create, organize, and categorize assessment
                    questions for classroom use
                  </li>
                  <li>
                    Extended Newsletter functionality to the student-facing
                    interface — implemented real-time course updates and
                    announcement delivery
                  </li>
                  <li>
                    Currently developing the "Take Test" feature — building an
                    interactive test-taking interface that fetches questions
                    dynamically from the question bank
                  </li>
                </ul>
                <div className="tech_used">
                  <p className="mt-3">
                    <strong>Technologies Used:</strong>{" "}
                  </p>
                  <div className="tech_used_illustrate">
                    <span>JavaScript(ES6) </span>
                    <span>Fetch/Axious</span>
                    <span>HTML5/CSS3</span>
                    <span>Bootstrap</span>
                    <span>Responsive Design Practices</span>
                    <span>Git/Github</span>
                  </div>
                </div>
              </div>
            </div>
            {/* auto 2 */}
            <div className="work_exp_auto2 m-2" data-aos="fade-up-right">
              <div
                className="roles_info"
                role="button"
                onClick={() => setOpenJob(openJob === 1 ? null : 1)}
                aria-expanded={openJob === 1}>
                <div className="role d-flex justify-content-between">
                  <h5>Front-End Engineer </h5>
                  <p>
                    <i className="fa-solid fa-caret-down"></i>
                  </p>
                </div>
                <div className="role_details">
                  <span>Zidio Development</span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-location-dot text-secondary"></i>{" "}
                    Delhi, India
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-calendar text-secondary"></i>{" "}
                    March 2024 - July 2024{" "}
                  </span>
                  <div className="job_type mt-3">
                    <span className="shadow-lg">Internship</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className={`jD mt-2 ${openJob === 1 ? "retrieve" : ""}`}>
                <ul>
                  <li>
                    Developed a chat application using the (Express, React,
                    Node.js) as part of a collaborative team
                  </li>
                  <li>Designed and implemented real-time messaging features</li>
                  <li>
                    Built responsive user interface components in React with
                    state management for conversation threads and user
                    authentication
                  </li>
                  <li>
                    Collaborated with team members on API design and database
                    schema optimization for efficient data retrieval
                  </li>
                </ul>
                <div className="tech_used">
                  <p className="mt-3">
                    <strong>Technologies Used:</strong>{" "}
                  </p>
                  <div className="tech_used_illustrate">
                    <span>Express.js</span>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Responsive Design Practices</span>
                    <span>Git/Github</span>
                  </div>
                </div>
              </div>
            </div>
            {/* auto 3 */}
            <div className="work_exp_auto2 m-2" data-aos="fade-up-right">
              <div
                className="roles_info"
                role="button"
                onClick={() => setOpenJob(openJob === 2 ? null : 2)}
                aria-expanded={openJob === 2}>
                <div className="role d-flex justify-content-between">
                  <h5>Front-End Engineer & Instructor </h5>
                  <p>
                    <i className="fa-solid fa-caret-down"></i>
                  </p>
                </div>
                <div className="role_details">
                  <span>Kunoch Digital</span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-location-dot text-secondary"></i>{" "}
                    Owerri, Imo State Nigeria
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-calendar text-secondary"></i>{" "}
                    August 2024 - Present{" "}
                  </span>
                  <div className="job_type mt-3">
                    <span className="shadow-lg">Full-Time (On-site)</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className={`jD mt-2 ${openJob === 2 ? "retrieve" : ""}`}>
                <ul>
                  <li>
                    Delivered a modern, industry-aligned web development
                    curriculum covering HTML5, CSS, JavaScript, and React plus
                    deployment best practices with Git/GitHub to four successful
                    cohorts — resulting in improved student competence, stronger
                    project outcomes, and higher course completion rates.
                  </li>
                  <li>
                    Led and supervised multiple student groups through hands-on
                    projects from concept to deployment — enabling learners to
                    build real-world applications and adopt professional
                    development workflows used in the industry today.
                  </li>
                  <li>
                    Designed and facilitated interactive lessons, practical
                    coding sessions, and real-time debugging — significantly
                    strengthening student's problem-solving abilities and
                    accelerating their understanding of core development
                    concepts.
                  </li>
                  <li>
                    Coordinated group activities and fostered collaboration
                    across batches — boosting teamwork, communication skills,
                    and consistent project delivery among learners.
                  </li>
                  <li>
                    Provided technical mentorship and detailed code reviews —
                    ensuring students produced efficient, scalable, and
                    maintainable applications while improving their technical
                    confidence.
                  </li>
                  <li>
                    Developed and updated course materials to reflect modern
                    industry standards — improving learning efficiency, keeping
                    learners up-to-date with current best practices, and
                    enhancing overall performance across cohorts.
                  </li>
                </ul>
                <div className="tech_used">
                  <p className="mt-3">
                    <strong>Technologies Used:</strong>{" "}
                  </p>
                  <div className="tech_used_illustrate">
                    <span>Node.js</span>
                    <span>React.js</span>
                    <span>JavaScript</span>
                    <span>HTML/CSS</span>
                    <span>Responsive Design Practices</span>
                    <span>Git/GitHub</span>
                    <span>React Deployment Best Practices</span>
                  </div>
                </div>
              </div>
            </div>
            {/* auto 4 */}
            <div className="work_exp_auto2 m-2" data-aos="fade-up-right">
              <div
                className="roles_info"
                role="button"
                onClick={() => setOpenJob(openJob === 3 ? null : 3)}
                aria-expanded={openJob === 2}>
                <div className="role d-flex justify-content-between">
                  <h5>Front-End Instructor </h5>
                  <p>
                    <i className="fa-solid fa-caret-down"></i>
                  </p>
                </div>
                <div className="role_details">
                  <span>Oluaka Institute of Technology</span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-location-dot text-secondary"></i>{" "}
                    Obinze, Imo State Nigeria
                  </span>
                  <span>
                    {" "}
                    <i className="fa-solid fa-calendar text-secondary"></i>{" "}
                    November 2023 - February 2024{" "}
                  </span>
                  <div className="job_type mt-3">
                    <span className="shadow-lg">Part-Time (Contract)</span>
                  </div>
                </div>
              </div>
              <hr />
              <div className={`jD mt-2 ${openJob === 3 ? "retrieve" : ""}`}>
                <ul>
                  <li>
                    Instructed a cohort of 25 students in the fundamentals and
                    advanced techniques of front-end web development - ensuring
                    their successful graduation with strong technical skills.
                  </li>
                  <li>
                    Provided personalized guidance and support to 25 students
                    through-out their front-web development projects - fostering
                    their problem-solving skills and facilitating projects
                    completion.
                  </li>
                  <li>
                    Designed and facilitated interactive lessons, practical
                    coding sessions, and real-time debugging — significantly
                    strengthening student's problem-solving abilities and
                    accelerating their understanding of core development
                    concepts.
                  </li>
                  Delivered a modern, industry-aligned web development
                  curriculum — resulting in improved student competence,
                  stronger project outcomes, and higher course completion rates.
                </ul>
                <div className="tech_used">
                  <p className="mt-3">
                    <strong>Technologies Used:</strong>{" "}
                  </p>
                  <div className="tech_used_illustrate">
                    <span>React.js</span>
                    <span>JavaScript</span>
                    <span>HTML/CSS</span>
                    <span>Responsive Design Practices</span>
                    <span>Git/GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div
          ref={experienceMe}
          data-aos="fade-down"
          id="experience-me"
          className=""
          style={{
            margin: "90px 0",
          }}>
          <div className="text-center">
            <p>
              <strong style={{ color: "#aaaaaaff" }}>
                What I Bring to the Table
              </strong>
            </p>
            <h3
              className="dev-about-header"
              style={{
                fontWeight: "700",
              }}>
              Skills & Expertise
            </h3>
          </div>
          <div className="skills mt-5" data-aos="zoom-in-out">
            <div className="skills_combine">
              <div className="FE">
                <h3 style={{ fontWeight: "bold" }}>Front-End Development</h3>
                <div className="fe_skills_set">
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> React.JS
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> HTML5/CSS3
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> JavaScript
                    (ES6+)
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> Performance
                    Optimization
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> Responsive
                    Design
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> SEO Best
                    Practices
                  </div>
                </div>
              </div>
              <div className="tools">
                <h3 style={{ fontWeight: "bold" }}>Tools & Technologies</h3>
                <div className="tools_skills">
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> Git/GitHub
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> NPM
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> VS Code
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> Vite
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> Figma
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> ESLint &
                    Pretier
                  </div>
                </div>
              </div>
              <div className="stylings">
                <h3 style={{ fontWeight: "bold" }}>Styling Frameworks</h3>
                <div className="css_scrsc">
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> Bootstrap
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> CSS Modules
                  </div>
                </div>
              </div>
              <div className="api_srtc">
                <h3 style={{ fontWeight: "bold" }}>APIs & State Management</h3>
                <div className="api_tst">
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> REST/Restful
                    API's
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> Axios/Fetch
                  </div>
                  <div data-aos="fade-down">
                    <i className="fa-solid fa-check-circle"></i> React Hooks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Education and Certifications */}
        <div className="education_certs" data-aos="zoom-in-out">
          <div className="text-center mt-lg-3">
            <p>
              <strong style={{ color: "#aaaaaaff" }}>
                Academic Background
              </strong>
            </p>
            <h3
              className="dev-about-header"
              style={{
                fontWeight: "700",
              }}>
              Education & Professional Certifications
            </h3>
          </div>
        </div>
        <div className="ed mt-4">
          <div className="ed_upper d-flex" data-aos="fade-down">
            <div className="check_ed">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div>
              <h5>Diploma in Software Development</h5>
              <p>Oluaka Institute of Technology - 2023</p>
            </div>
          </div>
          <div className="ed_e2 d-flex" data-aos="fade-down">
            <div className="check_ed">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div>
              <h5>Certified Web Developer (Internship)</h5>
              <p>Zidio Development - 2024</p>
            </div>
          </div>
          <div className="ed_e3 d-flex">
            <div className="check_ed">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div>
              <h5>Best Student Award </h5>
              <p>Noble Computer Institute - 2021</p>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div
          className="projects_showcase"
          style={{
            margin: "90px 0",
          }}
          data-aos="fade-up"
          ref={projectsSection}>
          <div className="text-center mt-lg-3">
            <p>
              <strong style={{ color: "#aaaaaaff" }}>My Projects</strong>
            </p>
            <h3
              className="dev-about-header"
              style={{
                fontWeight: "700",
              }}>
              Explore my featured projects
            </h3>
          </div>
          <div className="projects_lead mt-5">
            <div className="project_main p-4 rounded-4" data-aos="zoom-in-up">
              <div className="project_cover">
                <img
                  src={estate}
                  alt="real estate project"
                  className=""
                  width={"100%"}
                />
              </div>
              <div className="project_intro pt-4">
                <h4>KEEV Real Estate</h4>
                <p className="text-secondary">
                  A modern, responsive real estate web site built with React.js
                  and Bootstrap. It features secure user authentication,
                  protected routes, dynamic property listings, and detailed
                  house pages. Users can browse available homes, view full
                  property information, and submit buying or interest requests
                  seamlessly.
                  <p className="pt-4">
                    <a
                      href="https://github.com/MiracleChibuike/estate-app"
                      target="_blank"
                      id="link-gh">
                      GitHub
                    </a>
                    <a
                      id="link-live"
                      href="https://estate-app-five.vercel.app/">
                      Live Demo <i class="fa-regular fa-share-from-square"></i>
                    </a>
                  </p>
                </p>
                <div className="tech_stacks mt-5">
                  <p className="">
                    <strong>Tech Stacks used</strong>
                  </p>
                  <div className="tech_stack_illustrate">
                    <span>React.js</span>
                    <span>Bootstrap</span>
                    <span>CSS3</span>
                    <span>React Router</span>
                    <span>API Integration</span>
                    <span>Email JS</span>
                    <span>JSON Mock Server</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project_main p-4 rounded-4" data-aos="zoom-in-up">
              <div className="project_cover">
                <img
                  src={hospital}
                  alt="Capital Health Care is a modern Health Management System
                  designed to improve clinical efficiency and enhance patient
                  experience."
                  className=""
                  width={"100%"}
                />
              </div>
              <div className="project_intro pt-4">
                <h4>Capital Health Care</h4>
                <p className="text-secondary">
                  Capital Health Care is a modern Health Management System
                  designed to improve clinical efficiency and enhance patient
                  experience. Built with modern technologies, the platform
                  reduces long wait times by digitizing patient onboarding,
                  appointment booking, and clinic discovery. Patients can
                  securely access their health information, find the nearest
                  clinics, and schedule consultations with ease. For healthcare
                  providers, the system streamlines workflow, minimizes
                  administrative bottlenecks, and supports faster, more
                  coordinated patient care delivery. I am working alongside a
                  team of 3 one designer and 2 developers. It's still a work in
                  progress.
                  <p className="pt-4">
                    <a
                      href="https://github.com/MiracleChibuike/hospital"
                      target="_blank"
                      id="link-gh">
                      GitHub
                    </a>
                    <a id="link-live" href="https://capital-health.vercel.app">
                      Live Demo <i class="fa-regular fa-share-from-square"></i>
                    </a>
                  </p>
                </p>
                <div className="tech_stacks mt-5">
                  <p>
                    <strong>Tech Stacks used</strong>
                  </p>
                  <div className="tech_stack_illustrate">
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>API Integration</span>
                    <span>Node package managers</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project_main p-4 rounded-4" data-aos="zoom-in-up">
              <div className="project_cover">
                <img
                  src={forex}
                  alt="real estate project"
                  className=""
                  width={"100%"}
                />
              </div>
              <div className="project_intro pt-4">
                <h4>Signal FX</h4>
                <p className="text-secondary">
                  Signal FX, a responsive forex analytics platform built with
                  modern technologies. It provides secure user authentication,
                  protected dashboards, and forex training guides/mentorship
                  courses. Built to streamline analysis and enhance trading
                  efficiency for both beginners and experienced traders. It's
                  aimed at empowering users with the tools and insights needed
                  to make informed trading decisions in the dynamic forex
                  market. I'm currently working on integrating real-time forex
                  data to enhance user experience.
                  <p className="pt-4">
                    <a
                      href="https://github.com/MiracleChibuike/signalfx"
                      target="_blank"
                      id="link-gh">
                      GitHub
                    </a>
                    <a id="link-live" href="https://signalfx.vercel.app/">
                      Live Demo <i class="fa-regular fa-share-from-square"></i>
                    </a>
                  </p>
                </p>
                <div className="tech_stacks mt-5">
                  <p>
                    <strong>Tech Stacks used</strong>
                  </p>
                  <div className="tech_stack_illustrate">
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>API Integration</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="project_main p-4 rounded-4" data-aos="zoom-in-up">
              <div className="project_cover">
                <img
                  src={laptop}
                  alt="real estate project"
                  className=""
                  width={"100%"}
                />
              </div>
              <div className="project_intro pt-4">
                <h4>Tech Lap</h4>
                <p className="text-secondary">
                  Tech Lap is a sleek, responsive e-commerce platform designed
                  for browsing and purchasing laptops with ease. The site
                  includes secure user access, protected routes, and dynamically
                  loaded product listings. Users can explore available laptops,
                  view detailed specifications, compare options, and send
                  purchase requests seamlessly as development continues
                  <p className="pt-4">
                    <a
                      href="https://github.com/MiracleChibuike/laptopsite"
                      target="_blank"
                      id="link-gh">
                      GitHub
                    </a>
                    <a id="link-live" href="https://laptop-villa.vercel.app/">
                      Live Demo <i class="fa-regular fa-share-from-square"></i>
                    </a>
                  </p>
                </p>
                <div className="tech_stacks mt-5">
                  <p>
                    <strong>Tech Stacks used</strong>
                  </p>
                  <div className="tech_stack_illustrate">
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>HTM5</span>
                    <span>CSS3</span>
                    <span>API Integration</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="project_main p-4 rounded-4" data-aos="zoom-in-up">
              <div className="project_cover">
                <img
                  src={restaurant}
                  alt="real estate project"
                  className=""
                  width={"100%"}
                />
              </div>
              <div className="project_intro pt-4">
                <h4>La-Hot Naija Restaurant</h4>
                <p className="text-secondary">
                  La-Hot restaurant - a fully responsive restaurant and
                  food-ordering website built with Bootstrap, designed to help
                  users discover a wide range of Nigerian dishes and place
                  orders effortlessly. The platform features well-organized menu
                  listings, detailed meal descriptions, and a smooth ordering
                  flow. Customers can browse available dishes, explore
                  ingredients and pricing, and submit their food orders
                  seamlessly as the system continues to expand.
                  <p className="pt-4">
                    <a
                      href="https://github.com/MiracleChibuike/naijarestaurant"
                      target="_blank"
                      id="link-gh">
                      GitHub
                    </a>
                    <a
                      id="link-live"
                      href="https://naijarestaurant.vercel.app/">
                      Live Demo <i class="fa-regular fa-share-from-square"></i>
                    </a>
                  </p>
                </p>
                <div className="tech_stacks mt-5">
                  <p>
                    <strong>Tech Stacks used</strong>
                  </p>
                  <div className="tech_stack_illustrate">
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <Testimonial />
        {/* Contact Section */}
        <div
          ref={contactSection}
          className="contact_section"
          style={{
            margin: "90px 0",
          }}
          data-aos="fade-down">
          <div className="text-center mt-lg-3">
            <p>
              <strong style={{ color: "#aaaaaaff" }}>Let's Connect</strong>
            </p>
            <h3
              className="dev-about-header"
              style={{
                fontWeight: "700",
              }}>
              Send Me A Message and Let's Get In Touch!
            </h3>
          </div>
          <div className="contact_main mt-5">
            <div className="contact_card_left">
              <div className="address_card d-flex p-3 rounded-3 mb-4 shadow-lg">
                <div className="ml-1">
                  <i className="fa-solid fa-location-dot p-2 rounded-3 shadow"></i>
                </div>
                <div className="ct">
                  <p> Ikenegbu Extension Owerri</p>
                </div>
              </div>
              {/* Phone Number */}
              <div className="address_card d-flex p-3 rounded-3 mb-4 shadow-lg">
                <div>
                  <i className="fa-solid fa-phone p-2 rounded-3 shadow"></i>
                </div>
                <div className="ct">
                  <p>
                    {" "}
                    <a href="tel:+234 905 6255 572" className="text-white">
                      +234 905 6255 572
                    </a>
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="address_card d-flex p-3 rounded-3 mb-4 shadow-lg">
                <div>
                  <i className="fa-solid fa-envelope p-2 rounded-3 shadow"></i>
                </div>
                <div className="ct">
                  <p>
                    <a
                      href="mailto:miraclechibuike27@gmail.com"
                      className="text-white">
                      miraclechibuike27@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              {/*  */}
            </div>
            <div className="contact_card_right">
              <div className="contact_form m-b3">
                <form action="" method="get">
                  <div className="name mb-3">
                    <label htmlFor="name" className="pb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="p-3 rounded-3 text-secondary"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="email mb-3">
                    <label htmlFor="email" className="pb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="p-3 rounded-3 text-secondary"
                      placeholder="Enter your email"
                    />
                    <div id="emailHelp" class="text-secondary">
                      <small>
                        {" "}
                        I'll never share your email with anyone else.
                      </small>
                    </div>
                  </div>
                  <div className="message">
                    <label htmlFor="message" className="pb-2">
                      Message/Enquiry
                    </label>
                    <textarea
                      draggable="false"
                      className="p-3 rounded-3 text-secondary"
                      name=""
                      id=""
                      rows={"7"}
                      placeholder="Type in your message/enquiry you have"></textarea>
                  </div>
                  <button
                    type="submit"
                    id="send"
                    className="mb-lg-5 mt-3 p-3  rounded-3">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="nwt">
          <div className="letter_sub text-center">
            <div className="letter_sub_ct">
              <h2 className="">Subscribe to my Newsletter</h2>
              <p className="mt-2">
                I post, share valuable insights/experience on tech education,
                technologies, tools and mentorship. If that sounds good to you,
                then subscribe to my newsletter
              </p>
            </div>
            <div className="sub mt-4">
              <a
                href="https://onyiam.substack.com/subscribe"
                target="_blank"
                className="p-3 rounded-2">
                Subscribe Now <i className="fa-solid fa-arrow-right p-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-lg-5" ref={scrollFooter}>
        <div className="footer_contents p-5">
          <h2 className="text-center text-secondary">Onyia Miracle C.</h2>
          <div className="social_icons p-2">
            {/* <div className="useful_links">
              <p>Home</p>
              <p>About</p>
              <p>Portfolio</p>
              <p>Work Expereince</p>
              <p>Projects</p>
              <p>Contact</p>
            </div> */}
            <div className="social_icon_footer">
              <a
                href="http://github.com/MiracleChibuike"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa-brands fa-github m-2 text-secondary"></i>
              </a>
              <a
                href="http://linkedin.com/in/onyia-miracle"
                target="_blank"
                rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin m-2 text-secondary"></i>
              </a>
              <a
                href="https://onyiamiracle.substack.com/"
                target="_blank"
                rel="noopener noreferrer">
                <i class="fa-solid fa-envelope-open-text m-2 text-secondary"></i>
              </a>
            </div>
            <div className="rights">
              <p className="text-secondary">
                {" "}
                <i class="fa-solid fa-copyright text-secondary"></i> 2025 Onyia
                Miracle. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/* AI Chatbot - Outside parent to avoid blur effect */}
      <Chatbot onChatbotToggle={setChatbotOpen} />
    </>
  );
};

export default Entry;
