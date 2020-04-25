import Header from "../components/Header";
import Footer from "../components/Footer";
// import "../assets/styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCode,
  faBrush,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <main id="services">
      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">Our Services</h1>
          <div className="border"></div>
          <div className="services-container">
            <div className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faPaintBrush}
                />
              </div>
              <div className="section-title">Web Designs</div>
              <div className="service-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                maxime debitis nam vitae, ullam, reprehenderit commodi animi
                dolorum placeat est quaerat labore sequi amet ex praesentium
                aperiam numquam? Inventore, modi?
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faCode}
                />
              </div>
              <div className="section-title">Web Developments</div>
              <div className="service-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                maxime debitis nam vitae, ullam, reprehenderit commodi animi
                dolorum placeat est quaerat labore sequi amet ex praesentium
                aperiam numquam? Inventore, modi?
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faBrush}
                />
              </div>
              <div className="section-title">Responsive Designs</div>
              <div className="service-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                maxime debitis nam vitae, ullam, reprehenderit commodi animi
                dolorum placeat est quaerat labore sequi amet ex praesentium
                aperiam numquam? Inventore, modi?
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faPaintBrush}
                />
              </div>
              <div className="section-title">Web Designs</div>
              <div className="service-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                maxime debitis nam vitae, ullam, reprehenderit commodi animi
                dolorum placeat est quaerat labore sequi amet ex praesentium
                aperiam numquam? Inventore, modi?
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faPaintBrush}
                />
              </div>
              <div className="section-title">Web Designs</div>
              <div className="service-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                maxime debitis nam vitae, ullam, reprehenderit commodi animi
                dolorum placeat est quaerat labore sequi amet ex praesentium
                aperiam numquam? Inventore, modi?
              </div>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faPaintBrush}
                />
              </div>
              <div className="section-title">Web Designs</div>
              <div className="service-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
                maxime debitis nam vitae, ullam, reprehenderit commodi animi
                dolorum placeat est quaerat labore sequi amet ex praesentium
                aperiam numquam? Inventore, modi?
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
