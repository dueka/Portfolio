import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
export default function About() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-area">
      {/* <div className="middle">
        <a className="footer_btn" href="https://twitter.com/duekanem">
          <FaTwitter className="react_icon" />
        </a>
        <a
          className="footer_btn"
          href="https://www.linkedin.com/in/david-ekanem/"
        >
          <FaLinkedinIn className="react_icon" />
        </a>
        <a className="footer_btn" href="https://github.com/dueka">
          <FaGithub className="react_icon" />
        </a>
        <p className="para">Copyright ©{currentYear}</p>
      </div> */}

      <div className="social-media">
        <a href="https://twitter.com/duekanem">
          <FaTwitter className="react_icon" />
        </a>
        <a href="https://github.com/dueka">
          <FaGithub className="react_icon" />
        </a>
        <a href="https://www.linkedin.com/in/david-ekanem/">
          <FaLinkedinIn className="react_icon" />
        </a>
      </div>
    </footer>
  );
  p;
}
