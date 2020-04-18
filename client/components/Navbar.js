import "../assets/styles.scss";

const Navbar = () => (
  <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
    <div className="navbar--logo-holder">
      {sticky ? (
        <img
          src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585246633/8b62a-hire_full-stack-developer_4_fysdjg.jpg"
          alt="logo"
          className="navbar--logo"
        />
      ) : null}
    </div>
    <ul className="navbar--link">
      <div className="navbar--link-item">Home</div>
      <div className="navbar--link-item">Services</div>
      <div className="navbar--link-item">Portfolio</div>
    </ul>
  </nav>
);

export default Navbar;
