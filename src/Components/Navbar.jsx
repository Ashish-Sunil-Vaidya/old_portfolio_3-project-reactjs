import "./style.css";
import "./style-responsive.css"
import { Link } from "react-scroll";

function Navbar() {
  const duration = 1000;
  return (
    <header className="nav-container">
      <div className="logo">Logo</div>
      <nav className="nav-items">
        <Link
          className="nav-item"
          activeClass="active"
          to="home-container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={duration}
        >
          HOME
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="about-container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={duration}
        >
          ABOUT
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="services-container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={duration}
        >
          SERVICES
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="projects-container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={duration}
        >
          PROJECTS
        </Link>
        <Link
          className="nav-item"
          activeClass="active"
          to="contacts-container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={duration}
        >
          CONTACT
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
