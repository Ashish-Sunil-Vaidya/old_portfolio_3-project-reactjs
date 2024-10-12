

import {
  FaReddit,
  FaInstagram,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

function ContactDetails() {
  const contacts = [
    {
      id: 1,
      icon: <FaLinkedin className="contact-icon" />,
      title: "LinkedIn",
      info: "Ashish Vaidya",
    },
    {
      id: 2,
      icon: <FaGithubSquare className="contact-icon" />,
      title: "GitHub",
      info: "Ashish-Sunil-Vaidya",
    },
    {
      id: 3,
      icon: <FaInstagram className="contact-icon" />,
      title: "Instagram",
      info: "ashuvaidya2003",
    },
    {
      id: 4,
      icon: <FaReddit className="contact-icon" />,
      title: "Reddit",
      info: "__Ashish__Vaidya__",
    },
  ];

  return (
    <>
      {contacts.map((item) => (
        <div className="contact-info-card" key={item.id}>
          <div className="contact-icon-container">{item.icon}</div>
          <h1 className="contact-info-title">{item.title}</h1>
          <p className="contact-info-text">{item.info}</p>
        </div>
      ))}
    </>
  );
}

export default ContactDetails;
