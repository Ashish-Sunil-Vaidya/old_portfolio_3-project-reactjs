import "./style-responsive.css"

import { AiOutlineCalculator } from "react-icons/ai";

function ProjectDetails() {
  const projects = [
    {
      id: 1,
      projectName: "React Calculator",
      projectDesc: "A Simple Calculator made from ReactJS inspired from MS calculator for PC and Samsung Calculator for Mobile.",
      projectImg: <AiOutlineCalculator className="project-img" />,
      projectLinks: [
        {
          id: 1,
          linkUrl:
            "https://ashish-sunil-vaidya.github.io/React-Calculator/",
        },
        {
          id: 2,
          linkUrl:
            "https://github.com/Ashish-Sunil-Vaidya/React-Calculator",
        },
      ],
    },
    {
      id: 2,
      projectName: "React Calculator",
      projectDesc: "A Simple Calculator made from ReactJS inspired from MS calculator for PC and Samsung Calculator for Mobile.",
      projectImg: <AiOutlineCalculator className="project-img" />,
      projectLinks: [
        {
          id: 1,
          linkUrl:
            "https://ashish-sunil-vaidya.github.io/React-Calculator/",
        },
        {
          id: 2,
          linkUrl:
            "https://github.com/Ashish-Sunil-Vaidya/React-Calculator",
        },
      ],
    },
    {
      id: 3,
      projectName: "React Calculator",
      projectDesc: "A Simple Calculator made from ReactJS inspired from MS calculator for PC and Samsung Calculator for Mobile.",
      projectImg: <AiOutlineCalculator className="project-img" />,
      projectLinks: [
        {
          id: 1,
          linkUrl:
            "https://ashish-sunil-vaidya.github.io/React-Calculator/",
        },
        {
          id: 2,
          linkUrl:
            "https://github.com/Ashish-Sunil-Vaidya/React-Calculator",
        },
      ],
    },

    {
      id: 4,
      projectName: "React Calculator",
      projectDesc: "A Simple Calculator made from ReactJS inspired from MS calculator for PC and Samsung Calculator for Mobile.",
      projectImg: <AiOutlineCalculator className="project-img" />,
      projectLinks: [
        {
          id: 1,
          linkUrl:
            "https://ashish-sunil-vaidya.github.io/React-Calculator/",
        },
        {
          id: 2,
          linkUrl:
            "https://github.com/Ashish-Sunil-Vaidya/React-Calculator",
        },
      ],
    },
    {
      id: 5,
      projectName: "React Calculator",
      projectDesc: "A Simple Calculator made from ReactJS inspired from MS calculator for PC and Samsung Calculator for Mobile.",
      projectImg: <AiOutlineCalculator className="project-img" />,
      projectLinks: [
        {
          id: 1,
          linkUrl:
            "https://ashish-sunil-vaidya.github.io/React-Calculator/",
        },
        {
          id: 2,
          linkUrl:
            "https://github.com/Ashish-Sunil-Vaidya/React-Calculator",
        },
      ],
    },
    {
      id: 6,
      projectName: "React Calculator",
      projectDesc: "A Simple Calculator made from ReactJS inspired from MS calculator for PC and Samsung Calculator for Mobile.",
      projectImg: <AiOutlineCalculator className="project-img" />,
      projectLinks: [
        {
          id: 1,
          linkUrl:
            "https://ashish-sunil-vaidya.github.io/React-Calculator/",
        },
        {
          id: 2,
          linkUrl:
            "https://github.com/Ashish-Sunil-Vaidya/React-Calculator",
        },
      ],
    },
  ];

  return (
    <>
      {projects.map((item) => (
        <div className="project-card" key={item.id}>
          <h3 className="project-name">{item.projectName}</h3>
          <div>{item.projectImg}</div>
          <div className="project-info">
            <p className="project-desc">{item.projectDesc}</p>
            <div className="project-links">
              <a href={item.projectLinks[0].linkUrl} className="project-link">
                Live Demo
              </a>
              <a href={item.projectLinks[1].linkUrl} className="project-link">
                Github Repo
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectDetails;
