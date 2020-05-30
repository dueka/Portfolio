const Header = () => {
  return (
    <div className="nav_body">
      <div className="nav_container">
        <nav>
          <input type="checkbox" id="nav" className="hidden" />
          <label htmlFor="nav" className="nav-btn">
            <i></i>
            <i></i>
            <i></i>
          </label>
          <div className="nav_logo">
            <a href="">
              <img
                src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585246633/8b62a-hire_full-stack-developer_4_fysdjg.jpg"
                alt="logo"
                className="logo"
              />
            </a>
          </div>
          <div className="nav-wrapper">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
