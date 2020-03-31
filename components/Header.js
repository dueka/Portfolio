import "../assets/styles.scss";

const Header = ({ sticky }) => (
  <div>
    <header className="header_area">
      <div className="main-menu">
        <nav
          className={
            sticky
              ? "navbar navbar-sticky navbar-expand-lg navbar-light"
              : "navbar "
          }
        >
          <a className="navbar-brand navbar--logo-holder" href="#">
            {sticky ? (
              <img
                src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585246633/8b62a-hire_full-stack-developer_4_fysdjg.jpg"
                alt="logo"
                className="logo"
              />
            ) : null}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div classNameName="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
);

export default Header;
