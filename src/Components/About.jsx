import "./style.css";
import "./style-responsive.css";
import avatar from "../assets/bg-home.jpg";
import SkillsDetails from "./SkillsDetails";
// import { useState,useEffect } from "react";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function About() {
  // const slides = [
  //   <SkillsDetails key={1} start={0} end={3}  />,
  //   <SkillsDetails key={2} start={3} end={6}  />,
  //   <SkillsDetails key={3} start={6} end={9}  />,
  // ];

  // const [current, setCurrent] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent(current === slides.length - 1 ? 0 : current + 1);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [current, slides.length]);

  // const nextSlide = () => {
  //   setCurrent(current === slides.length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? slides.length - 1 : current - 1);
  // };

  return (
    <section className="about-container scroll-bg">
      <div className="about-card">
        <div className="about-card-c1">
          <div className="my-info">
            <div className="my-info-img">
              <img src={avatar} alt="avatar" className="avatar"/>
            </div>
            <div className="my-info-details">
              <p className="my-info-name">
                <strong style={{marginRight:"10px",color:"#0078ff"}}>Name:</strong>Ashish Sunil Vaidya
              </p>
              <p className="my-info-role">
                <strong style={{marginRight:"10px",color:"#0078ff"}}>Title:</strong>Full Stack Developer
              </p>
            </div>
          </div>
          <div className="my-skills">
            <h3 className="my-skills-heading">My Skills</h3>
            <SkillsDetails/>
          </div>
        </div>
        <div className="about-card-c2">
          <h2 className="about-me-heading">About Me</h2>
          <p>
            I am a{" "}
            <span style={{ color: "white", fontWeight: "900" }}>
              Full Stack Developer
            </span>{" "}
            with a passion for learning and developing new skills. I am a quick
            learner and a team player. I have experience in{" "}
            <span style={{ color: "white" }}>
              developing web applications using MERN stack
            </span>
            . I am currently pursuing my B.Tech in Computer Science and
            Engineering from Walchand Institute of Technology, Solapur.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
