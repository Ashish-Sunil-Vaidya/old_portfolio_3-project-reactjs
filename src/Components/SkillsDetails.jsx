import "./style.css";
import "./style-responsive.css";
import { FaReact, FaCss3Alt, FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoJavascript, BiLogoMongodb } from "react-icons/bi";
import { TbBrandCpp } from "react-icons/tb";
import { PiGraph } from "react-icons/pi";

// eslint-disable-next-line react/prop-types
function SkillsDetails({ start, end }) {
  const data = [
    {
      id: 1,
      skillName: "React",
      skillLogo: <FaReact className="skill-icon" />,
      progBarPercent: 90,
    },
    {
      id: 2,
      skillName: "CSS",
      skillLogo: <FaCss3Alt className="skill-icon" />,
      progBarPercent: 80,
    },
    {
      id: 3,
      skillName: "ExpressJS",
      skillLogo: <FaNodeJs className="skill-icon" />,
      progBarPercent: 70,
    },
    {
      id: 4,
      skillName: "Javascript",
      skillLogo: <BiLogoJavascript className="skill-icon" />,
      progBarPercent: 70,
    },
    {
      id: 5,
      skillName: "Python",
      skillLogo: <FaPython className="skill-icon" />,
      progBarPercent: 65,
    },

    {
      id: 6,
      skillName: "NodeJS",
      skillLogo: <FaNodeJs className="skill-icon" />,
      progBarPercent: 60,
    },
    {
      id: 7,
      skillName: "MongoDB",
      skillLogo: <BiLogoMongodb className="skill-icon" />,
      progBarPercent: 50,
    },
    {
      id: 8,
      skillName: "C++",
      skillLogo: <TbBrandCpp className="skill-icon" />,
      progBarPercent: 50,
    },
  ];
  return (
    <div className="skills-list">
      {data.slice(start, end).map((item) => (
        <div
          key={item.id}
          className="skill-card"
          style={{
            background: `linear-gradient(to right, rgb(0, 120, 255) ${item.progBarPercent}%, rgb(0, 120, 255,.2) ${item.progBarPercent}%)`,
          }}
        >
          <div className="skill-title">
            <div className="skill-logo">{item.skillLogo}</div>
            <div className="skill-name">{item.skillName}</div>
            <div className="skill-percentage">{item.progBarPercent}%</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsDetails;
