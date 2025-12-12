
import React from 'react';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
      <>
        <div
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
          <div className="contact_main">
              <div className="contact_card_left">
                <div className="address_card">
                <div><i className='fa-solid fa-location-dot'></i></div>
                <div>
                    <p>Ikenegbu Extension Owerri</p>
                </div>
                </div>
              </div>
              <div className="contact_card_right">

              </div>
          </div>
        </div>
      </>
    );
};

export default Contact;