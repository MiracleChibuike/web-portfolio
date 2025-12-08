/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Entry.css";
import Resume from "../media/files/Miracle.pdf";
import dev_avatar from "../assets/devImages/dev-avatar.png";
import dev2 from "../assets/devImages/dev-2.png";
// import backgroundVideo from "../media/videos/dark-tone.mp4";
import NavMenu from "./NavMenu";
import Chatbot from "./Chatbot";
// Import Dev images
import react_logo from "../media/tech_stacks/react.png";
import node_logo from "../media/tech_stacks/node.png";
import javaScript_Logo from "../media/tech_stacks/js.png";
import html_logo from "../media/tech_stacks/hmtl.png";
import css_logo from "../media/tech_stacks/css.png";
import vsCode from "../media/tech_stacks/vs_code.png";
import github_logo from "../media/tech_stacks/git-hub.png";
import vite_logo from "../media/vite.svg";
import hand_wave from "../assets/hand-wave.png";
import mainDev from "../assets/dev/Onyia_miracle_dev.webp";

const Entry = () => {

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

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

  // Show and Hide JD when clicked
 const [openJob, setOpenJob] = useState(null); 

  // Apply data-aos attributes and observe parent children for scroll animations

  return (
    <>
      {/* Helmet */}

      {/* Parent */}
      <div className="container" id="parent">
        {/* Nav Menu */}
        <div className="nav-menu">
          <div className="navMenuContainer d-flex justify-content-evenly">
            <button title="Home" ref={buttonHome}>
              <span className="fa-solid fa-house"></span>
            </button>

            <button title="About Me" ref={aboutMeBtn}>
              <i className="fa-solid fa-user"></i>
            </button>

            <button>
              <i className="fa-solid fa-briefcase"></i>
            </button>

            <button>
              <i className="fa-solid fa-handshake"></i>
            </button>

            <button>
              <i className="fa-solid fa-address-card"></i>
            </button>
          </div>
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
            <button title="Scroll Down">
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
                <img
                  id="img-dev"
                  src={mainDev}
                  alt="Onyia Onyia Miracle Avatar"
                />
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
                  aria-label="Let's speak"
                  href="#contact-me"
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
          <div className="work_exp">
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
                    March 2023 - Present{" "}
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
                  <span>JavaScript(ES6) </span>
                  <span>Fetch/Axious</span>
                  <span>HTML5/CSS3</span>
                  <span>Bootstrap</span>
                  <span>Responsive Design Practices</span>
                  <span>Git/Github</span>
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
                  <span>Express.js</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Responsive Design Practices</span>
                  <span>Git/Github</span>
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
        {/* Experience */}
        <div
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
          <div className="skills mt-5">
            <div className="skills_combine">
              <div className="FE">
                <h3 style={{ fontWeight: "bold" }}>Front-End Development</h3>
                <div className="fe_skills_set">
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> React.JS
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> HTML5/CSS3
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> JavaScript
                    (ES6+)
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> Performance
                    Optimization
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> Responsive
                    Design
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> SEO Best
                    Practices
                  </div>
                </div>
              </div>
              <div className="tools">
                <h3 style={{ fontWeight: "bold" }}>Tools & Technologies</h3>
                <div className="tools_skills">
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> Git/GitHub
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> NPM
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> VS Code
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> Vite
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> Figma
                  </div>
                  <div data-aos="fade-up-left">
                    <i className="fa-solid fa-check-circle"></i> ESLint &
                    Pretier
                  </div>
                </div>
              </div>
              <div className="stylings">
                <h3 style={{ fontWeight: "bold" }}>Styling Frameworks</h3>
                <div className="css_scrsc">
                  <div>
                    <i className="fa-solid fa-check-circle"></i> Bootstrap
                  </div>
                  <div>
                    <i className="fa-solid fa-check-circle"></i> CSS Modules
                  </div>
                </div>
              </div>
              <div className="api_srtc">
                <h3 style={{ fontWeight: "bold" }}>APIs & State Management</h3>
                <div className="api_tst">
                  <div>
                    <i className="fa-solid fa-check-circle"></i> REST/Restful
                    API's
                  </div>
                  <div>
                    <i className="fa-solid fa-check-circle"></i> Axios/Fetch
                  </div>
                  <div>
                    <i className="fa-solid fa-check-circle"></i> React Hooks
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Education and Certifications */}
        <div className="education_certs">
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
          <div className="ed_upper d-flex">
            <div className="check_ed">
              <i className="fa-solid fa-circle-check"></i>
            </div>
            <div>
              <h5>Diploma in Software Development</h5>
              <p>Oluaka Institute of Technology - 2023</p>
            </div>
          </div>
          <div className="ed_e2 d-flex">
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
      </div>
      {/* AI Chatbot - Outside parent to avoid blur effect */}
      <Chatbot onChatbotToggle={setChatbotOpen} />
    </>
  );
};

export default Entry;
