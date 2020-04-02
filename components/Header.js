import { Navbar, Nav } from "react-bootstrap";
const Header = () => (
  <Navbar expand="lg" className="header_area">
    <Navbar.Brand href="#home">
      {" "}
      <a className="navbar-brand" href="#">
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
        <Nav.Link href="/" className="nav-link">
          Home
        </Nav.Link>
        <Nav.Link href="/about" className="nav-link">
          About
        </Nav.Link>
        <Nav.Link href="/services" className="nav-link">
          Services
        </Nav.Link>
        <Nav.Link href="/portfolio" className="nav-link">
          Portfolio
        </Nav.Link>
        <Nav.Link href="/contact" className="nav-link">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
