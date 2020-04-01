import "../assets/styles.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithubAlt, faGoogle, faFacebook, faTwitter);

export default function About() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="">
          <div className="site-logo text-center py-4">
            <a href="#">
              <img
                src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585246633/8b62a-hire_full-stack-developer_4_fysdjg.jpg"
                alt="logo"
              />
            </a>
          </div>
        </div>
        <div className="social text-center">
          <h5 className="text-uppercase">Follow Me</h5>
          <a href="#">
            <FontAwesomeIcon
              size="1x"
              className="font-awesome"
              icon={faFacebook}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              size="1x"
              className="font-awesome"
              icon={faGoogle}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              size="1x"
              className="font-awesome"
              icon={faGithubAlt}
            />
          </a>
          <a href="#">
            <FontAwesomeIcon
              size="1x"
              className="font-awesome"
              icon={faTwitter}
            />
          </a>
        </div>
        <div className="copyrights text-center">
          <p className="para">Copyright ©{currentYear}</p>
          <a href="#"></a>
        </div>
      </div>
    </footer>
  );
  p;
}
