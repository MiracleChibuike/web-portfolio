/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Entry.css";
import Resume from "../media/files/Miracle.pdf";
import dev_avatar from "../assets/devImages/dev-avatar.png";
import dev2 from "../assets/devImages/dev-2.png";
// import backgroundVideo from "../media/videos/dark-tone.mp4";
import NavMenu from "./NavMenu";
// Import Dev images
import react_logo from "../media/tech_stacks/react.png";
import node_logo from "../media/tech_stacks/node.png";
import javaScript_Logo from "../media/tech_stacks/js.png";
import html_logo from "../media/tech_stacks/hmtl.png";
import css_logo from "../media/tech_stacks/css.png";
import vsCode from "../media/tech_stacks/vs_code.png";
import github_logo from "../media/tech_stacks/git-hub.png";
import vite_logo from "../media/vite.svg"
import hand_wave from "../assets/hand-wave.png";

const Entry = () => {
  const navigate = useNavigate();
  const btnRef = useRef(null);
  const btnRefCurrent = btnRef.current;
  //  console.log("Button Ref Current:", btnRefCurrent);
  useEffect(() => {
    btnRefCurrent?.addEventListener("click", () => {
      navigate("/menu");
    });
  });

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
          <div className="wave-greet m-2">
            <img src={hand_wave} className="img_wave" width={"50px"} alt="" />
          </div>
          <p>
            <strong>Hello World, I'm</strong>
          </p>
          <h1 className="dev-name">
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
            <a href={Resume} download={true} className="" id="cv-download">
              Download Resume
            </a>
            <a href="" className="let-chat ">
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
                href="https://github.com/MiracleChibuike"
                target="_blank"
                rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </button>
            <br />
            <button>
              <a
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
        <div className="about-me" id="about" ref={aboutMe}>
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
                <img id="img-dev" src={dev2} alt="Onyia Onyia Miracle Avatar" />
              </div>
            </div>
            <div className="dev-bio">
              <div className="dev-cards">
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
              <p style={{ color: "#aaaaaaff", whiteSpace: "wrap" }} id="int">
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
                <a href="#contact-me" id="speak-with-me">
                  Speak with Me
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div
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
          <div className="experience_cards mt-lg-5">
            <div className="tech_skill">
              <div className="education">
                <h3
                  style={{
                    fontWeight: "800",
                  }}>
                  Education
                </h3>
                <div className="school">
                  <h5>Diploma in Software Development</h5>
                  <p>Oluaka Institute of Technology - 2023</p>
                  <br />
                  <h5>Certified Web Developer (Internship)</h5>
                  <p>Zidio Development - 2024</p>
                </div>
              </div>
              <br />
              <div className="tech">
                <h3
                  style={{
                    fontWeight: "800",
                  }}>
                  Technical Skills
                </h3>
                <div className="skills_set mt-3">
                  <>
                    <div>
                      <i className="fa-solid fa-check-circle"></i>
                      <strong>React JS</strong>
                    </div>
                  </>
                  <>
                    <div>
                      <i className="fa-solid fa-check-circle"></i>
                      <strong>JavaScript</strong>
                    </div>
                  </>
                  <>
                    {" "}
                    <div>
                      <i className="fa-solid fa-check-circle"></i>
                      <strong>CSS</strong>
                    </div>
                  </>
                  <>
                    {" "}
                    <div>
                      <i className="fa-solid fa-check-circle"></i>
                      <strong>HTML 5</strong>
                    </div>
                  </>
                  <div>
                    <i className="fa-solid fa-check-circle"></i>
                    <strong>GIT</strong>
                  </div>
                  {/* Git hub logo */}
                  <div>
                    <i className="fa-solid fa-check-circle"></i>
                    <strong>GitHub</strong>
                  </div>
                  <div>
                    <i className="fa-solid fa-check-circle"></i>
                    <strong>VS Code</strong>
                  </div>
                  <div>
                    <i className="fa-solid fa-check-circle"></i>
                    <strong>NPM</strong>
                  </div>
                  <div>
                    <i className="fa-solid fa-check-circle"></i>
                    <strong>Vite</strong>
                  </div>
                  {/* Bootstrap logo */}
                  <div>
                    <i className="fa-solid fa-check-circle"></i>
                    <strong>Bootstrap</strong>
                  </div>
                </div>
                <div className="learning mt-4">
                  <h3>Currently Learning</h3>
                  <div className="learn_img d-grid mt-4">
                    <>
                      {" "}
                      <div>
                        <i className="fa-solid fa-check"></i>
                        <strong>Node</strong>
                      </div>
                    </>
                    {/* Figma */}
                    <div>
                      <i className="fa-solid fa-check"></i>
                      <strong>Figma</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="interest m-3">
                <h3
                  style={{
                    fontWeight: "800",
                  }}>
                  Interest
                </h3>
                <div className="d-flex gap-4">
                  <p>
                    {" "}
                    <i className="fa-solid fa-circle-check"></i> Coding
                  </p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-circle-check"></i> Teaching
                  </p>
                  <p>
                    {" "}
                    <i className="fa-solid fa-circle-check"></i> Reading
                  </p>
                </div>
              </div>
            </div>
            <div className="soft">
              <div className="soft">
                <h3>Soft Skils</h3>
                <div className="soft">
                  <p>Teamwork</p>
                  <p>Communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entry;
