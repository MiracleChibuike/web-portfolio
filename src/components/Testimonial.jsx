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
            <strong style={{ color: "#aaaaaaff" }}>
              My Client's Testimonies
            </strong>
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
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      
     <div className="user-comments p-3 rounded-5">
                  <p>
                    Coming with a background in Front-End Development, I needed
                    to build a site for an upcoming conference{" "}
                    <strong>Gold in Real Estate Conference (GIRE25).</strong> I
                    have met many developers in the past that never delivered,
                    but Mr. Miracle's passsion and deep insight he shared with
                    me was exceptional and thus he delievred a great project. A
                    very responsive website with a great user interface was
                    delivered in record time! Our site visitors have also given
                    good reviews as the number of vistors rised from 300 to 1000
                    plus just few days after deploying.
                  </p>
                  <div className="user-avatar m-2">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <span>
                    <strong>Mr Nadis Umeh (CEO) Nadel Bitmaps</strong>
                  </span>
                </div>
    </div>
    <div class="carousel-item">
      
     <div className="user-comments p-3 rounded-5">
                  <p>
                    Coming with a background in Front-End Development, I needed
                    to build a site for an upcoming conference{" "}
                    <strong>Gold in Real Estate Conference (GIRE25).</strong> I
                    have met many developers in the past that never delivered,
                    but Mr. Miracle's passsion and deep insight he shared with
                    me was exceptional and thus he delievred a great project. A
                    very responsive website with a great user interface was
                    delivered in record time! Our site visitors have also given
                    good reviews as the number of vistors rised from 300 to 1000
                    plus just few days after deploying.
                  </p>
                  <div className="user-avatar m-2">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <span>
                    <strong>Mr Nadis Umeh (CEO) Nadel Bitmaps</strong>
                  </span>
                </div>
    </div>
    <div class="carousel-item">
      
     <div className="user-comments p-3 rounded-5">
                  <p>
                    Coming with a background in Front-End Development, I needed
                    to build a site for an upcoming conference{" "}
                    <strong>Gold in Real Estate Conference (GIRE25).</strong> I
                    have met many developers in the past that never delivered,
                    but Mr. Miracle's passsion and deep insight he shared with
                    me was exceptional and thus he delievred a great project. A
                    very responsive website with a great user interface was
                    delivered in record time! Our site visitors have also given
                    good reviews as the number of vistors rised from 300 to 1000
                    plus just few days after deploying.
                  </p>
                  <div className="user-avatar m-2">
                    <i className="fa-solid fa-user"></i>
                  </div>
                  <span>
                    <strong>Mr Nadis Umeh (CEO) Nadel Bitmaps</strong>
                  </span>
                </div>
    </div>
  </div>
  <button  class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
