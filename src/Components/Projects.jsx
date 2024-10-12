import "./style.css";
import "./style-responsive.css"
import { FaRegSmileBeam, FaGithub } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import ProjectDetails from "./ProjectDetails";

function Projects() {
  const stats = [
    {
      id: 1,
      statName: "Projects Completed",
      statIcon: <FaGithub />,
      statValue: 200,
    },
    {
      id: 2,
      statName: "Years of Experience",
      statIcon: <SlCalender />,
      statValue: 5,
    },
    {
      id: 3,
      statName: "Happy Clients",
      statIcon: <FaRegSmileBeam />,
      statValue: 50,
    },
  ];

  return (
    <section className="projects-container fixed-bg bg-projects">
      <div className="projects-dashboard">
        <div className="projects-stat">
          {stats.map((item) => (
            <div key={item.id} className="stat-card">
              <div className="stat-icon">{item.statIcon}</div>
              <div className="stat-value">{item.statValue}+</div>
              <div className="stat-name">{item.statName}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="projects">
        <h1 className="projects-heading">Projects</h1>
        <div className="projects-list">
          <ProjectDetails/>
        </div>
      </div>
    </section>
  );
}

export default Projects;
