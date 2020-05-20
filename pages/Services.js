import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCode,
  faBrush,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAccessibleIcon,
  faAcquisitionsIncorporated,
  faAlgolia,
} from "@fortawesome/free-brands-svg-icons";

export default function Services() {
  return (
    <main id="services">
      <div className="services-section">
        <div className="inner-width">
          <h1 className="section-title">Interests</h1>
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
              <div className="section-title">UI / UX Design</div>
              <div className="service-desc">
                Understanding the User Mindset and what a user wants when they
                use a product. Thinking through the product development process
                to make sure i create the best possible experience.
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
              <div className="section-title">Frontend</div>
              <div className="service-desc">
                Understanding UX principles and best practices and implementing
                that in code to produce aesthetic pleasing interfaces. I create
                Interfaces with HTML, CSS, Javascript and use the React Library.
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
              <div className="section-title">Backend</div>
              <div className="service-desc">
                Writing server-side code to serve my User Interfaces and i do
                this with Express and create my databases with Knex with
                PostgreSQL as my relational database.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faAccessibleIcon}
                />
              </div>
              <div className="section-title">TESTING</div>
              <div className="service-desc">
                Writing tests for my components and my user interface is one the
                key principles i learnt from Lambda School and i have worked in
                implenting TDD principles in my development.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faAcquisitionsIncorporated}
                />
              </div>
              <div className="section-title">SAP HANA</div>
              <div className="service-desc">
                Interested in the inner workings of ERP Software and how i can
                build the techincal know-how to serve large corportations and
                harnessing the power of SAP HANA to build such applications.
              </div>
            </div>

            <div className="service-box">
              <div className="service-icon">
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faAlgolia}
                />
              </div>
              <div className="section-title">bLOCKCHAIN</div>
              <div className="service-desc">
                I enjoy building applications on the Ethereum Blockchain, but
                not fully profecient yet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
