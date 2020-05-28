import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Navbar fixed="top" expand="lg" className="header_area">
      <Navbar.Brand>
        {" "}
        <a className="navbar-brand">
          <img
            src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585246633/8b62a-hire_full-stack-developer_4_fysdjg.jpg"
            alt="logo"
            className="logo"
          />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="mr-auto"></div>
        <div className="mr-auto"></div>
        <div className="mr-auto"></div>
        <div className="mr-auto"></div>
        <div className="mr-auto"></div>
        <div className="mr-auto"></div>
        <div className="mr-auto"></div>
        <div className="mr-auto"></div>

        <Nav className="mr-auto">
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav-link">Home</div>
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav-link">About</div>
          </Link>
          {/* <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav-link">Services</div>
          </Link> */}
          <Link
            activeClass="active"
            to="slider"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav-link">Portfolio</div>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
