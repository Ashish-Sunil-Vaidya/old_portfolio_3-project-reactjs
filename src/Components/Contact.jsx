import "./style.css";
import "./style-responsive.css"
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contacts-container fixed-bg bg-projects">
      <div className="projects-dashboard">
        <div className="contacts-card">
          <form className="feedback-form">
            <h1 className="contacts-heading">Message Me</h1>

            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="form-control"
            />

            <input
              type="email"
              id="email"
              placeholder="Your email"
              className="form-control"
            />

            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="form-control"
            ></input>
            <textarea
              id="message"
              placeholder="Message"
              className="form-textarea"
            ></textarea>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
          <div className="more-info">
            <h1 className="more-heading">Get in Touch</h1>
            <p className="more-text">
              I am available for freelance work. Contact me anytime for
              projects. I will get back to you as soon as possible.
            </p>
            <div className="main-info">
              <div>
                <span>
                  <FaMapMarkerAlt />
                </span>
                <marquee>
                  24/9,&apos;Satyashil&apos;, Murarji Peth, Solapur, IN -413001
                </marquee>
              </div>
              <div>
                <span>
                  <FaPhoneAlt />
                </span>{" "}
                <span>+91 9527343353</span>
              </div>
              <div>
                <span>
                  <FaEnvelope />
                </span>{" "}
                <span>ashuvaidya2003@gmail.com</span>
              </div>
            </div>
            <div className="contact-info">
              <a
                href="https://www.linkedin.com/in/ashutosh-vaidya-2b1b3b1b2/"
                className="contact-links"
              >
                <FaLinkedin className="contact-icons" />
              </a>
              <a
                href="https://github.com/Ashish-Sunil-Vaidya"
                className="contact-links"
              >
                <FaGithubSquare className="contact-icons" />
              </a>
              <a
                href="https://www.instagram.com/ashuvaidya2003/"
                className="contact-links"
              >
                <FaInstagramSquare className="contact-icons" />
              </a>
              <a
                href="https://twitter.com/ashuvaidya2003"
                className="contact-links"
              >
                <FaTwitterSquare className="contact-icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
