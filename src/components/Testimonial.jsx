/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import dev_avatar from "../assets/devImages/dev-avatar.png";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  });
  return (
    <>
      <div
        data-aos="fade-up"
        className="testimonial"
        style={{
          margin: "90px 0",
        }}>
        {" "}
        <div className="text-center mt-lg-3">
          <p>
            <strong style={{ color: "#aaaaaaff" }}>Testimonies</strong>
          </p>
          <h3
            className="dev-about-header"
            style={{
              fontWeight: "700",
            }}>
            What people say about me (Real People)
          </h3>
        </div>
        <div className="c-testimonies">
          <div
            id="carouselExampleRide"
            class="carousel slide"
            data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="20000">
                <div className="user-comments p-3 rounded-5" id="comments">
                  <p>
                    <i
                      class="fa-solid fa-quote-left p-1 text-light"
                      style={{ fontSize: "30px" }}></i>{" "}
                    Coming with a background in Front-End Development, I needed
                    to build a site for an upcoming conference{" "}
                    <strong>Gold in Real Estate Conference (GIRE25).</strong> I
                    have met many developers in the past that never delivered,
                    but Mr. Miracle's passsion and deep insight he shared with
                    me was exceptional and thus he delivered a great project. A
                    very responsive website with a great user interface was
                    delivered in record time! Our site visitors have also given
                    good reviews as the number of vistors rised from 300 to 1000
                    plus just few days after deploying.
                  </p>
                  <div className="user-avatar m-2">
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <span>
                    <strong>
                      Mr Nadis Umeh <br /> <small>(CEO) Nadel Bitmaps</small>
                    </strong>
                  </span>
                  <p className="mt-2">
                    <a href="https://www.linkedin.com/in/nnamdi-daniels-ume-arpa-970b072a/">
                      {" "}
                      <i
                        className="fa-brands fa-linkedin"
                        style={{ fontSize: "25px" }}></i>
                    </a>
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  className="user-comments p-3 rounded-5"
                  id="comments"
                  data-bs-interval="40000">
                  <p>
                    <i
                      class="fa-solid fa-quote-left p-1 text-light"
                      style={{ fontSize: "30px" }}></i>
                    I have known Miracle as a friend before professionally
                    connecting with him - first as my student and then, in the
                    space of 12 months as a faculty colleague mentoring our
                    interns on a Web development course and now having him
                    contribute to some of the projects I am working on is
                    another win for him. Following his rapid growth rate, I am
                    sure that he will be a good fit for hire.
                  </p>
                  <div className="user-avatar m-2">
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <span>
                    <strong>
                      Mr Godwin Eze <br />{" "}
                      <small>(Software Developer & Trainer)</small>
                    </strong>
                  </span>
                  <p className="mt-2">
                    <a href="https://www.linkedin.com/in/godwinkachi/">
                      {" "}
                      <i
                        className="fa-brands fa-linkedin"
                        style={{ fontSize: "25px" }}></i>
                    </a>
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div
                  className="user-comments p-3 rounded-5"
                  id="comments"
                  data-bs-interval="60000">
                  <p>
                    <i
                      class="fa-solid fa-quote-left p-1 text-light"
                      style={{ fontSize: "30px" }}></i>{" "}
                    Miracle is a highly skilled frontend engineer with strong a
                    user-centric mindset. He builds intuitive, easy-to-navigate
                    interfaces while aligning every design decision with
                    business objectives. His creativity, communication skills,
                    and ability to deliver promptly make him a standout
                    professional. His teamwork, adaptability, and
                    professionalism - especially during challenging projects
                    phases-make him a dependable contributor and a valuable
                    asset to any frontend team.
                  </p>
                  <div className="user-avatar m-2">
                    <i className="fa-solid fa-circle-user"></i>
                  </div>
                  <span>
                    <strong>
                      Mr JahBuikem Anderson <br />
                      <small>(Educator, Analyst & Designer)</small>
                    </strong>
                  </span>
                  <p className="mt-2">
                    <a href="https://www.linkedin.com/in/jahbuikemanderson/">
                      {" "}
                      <i
                        className="fa-brands fa-linkedin"
                        style={{ fontSize: "25px" }}></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev">
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next">
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
