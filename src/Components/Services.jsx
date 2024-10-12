import "./style.css";
import "./style-responsive.css"
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaRegPlusSquare,
  
} from "react-icons/fa";

function Services() {
  const services = [
    {
      id: 1,
      serviceName: "Frontend Development",
      serviceIcon: [
        <FaReact key={1} className="service-icon"/>,
        <FaHtml5 key={2} className="service-icon"/>,
        <FaCss3Alt key={3} className="service-icon"/>,
      ],
      serviceDesc:
        "I can build beautiful and responsive websites using React.js, HTML, CSS, etc.",
    },
    {
      id: 2,
      serviceName: "Backend Development",
      serviceIcon: [
        <FaNodeJs key={1} className="service-icon"/>,
        <FaPython key={2} className="service-icon"/>,
        <FaDatabase key={3} className="service-icon"/>,
      ],
      serviceDesc:
        "I can build backend for your website using Node.js, Express.js, MongoDB, etc.",
    },
    {
      id: 3,
      serviceName: "Full Stack Development",
      serviceIcon: [
        <FaReact key={1} className="service-icon"/>,
        <FaNodeJs key={2} className="service-icon"/>,
        <FaDatabase key={3} className="service-icon"/>,
      ],
      serviceDesc:
        "I can build both frontend and backend for your website using MERN stack.",
    },

    {
      id: 4,
      serviceName: "I am Growing!",
      serviceIcon: <FaRegPlusSquare className="service-icon"/>,
      serviceDesc:
        "I am learning new services and technologies everyday to improve my services.",
    },
  ];

  return (
    <section className="services-container">
      <div className="services-card">
        <h1 className="services-heading">Services</h1>
        <div className="services">
          {services.map((item) => (
            <div key={item.id} className="service">
              <div className="service-icons">{item.serviceIcon}</div>
              <div className="service-info">
                <h3 className="service-name">{item.serviceName}</h3>
                <p className="service-desc">{item.serviceDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
