import "../assets/styles.scss";
import Header from "../components/Header";
import Subscribe from "../Components/Subscribe";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <main className="site-main">
      <section className="about-area">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585703770/8b62a-hire_full-stack-developer_3_bafnae.jpg"
                  alt="About DUE"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 about-title">
              <h2 className="text-uppercase pt-5">
                <span>INTRODUCING </span>
                <span> DUE </span>
                <span>TO YOU</span>
              </h2>
              <div className="paragraph py-4 w-75">
                <p className="para">
                  Software Engineer, with a passion for learning.
                </p>
                <p className="para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptas cumque, quae dolore et odio veritatis nemo delectus
                  deserunt recusandae nihil, corrupti non ratione, placeat
                  provident molestias. Ipsam necessitatibus in repudiandae?
                </p>
              </div>
              <button
                type="button"
                className="btn button primary-button text-uppercase"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
        <section className="brand-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="first-row row">
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-brand">
                      <img
                        src="https://res.cloudinary.com/ibkrice-com/image/upload/v1574514315/ibklogo_vebmtc.svg"
                        alt="Brand Logo IBKRice"
                        className="brand-logo"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="single-brand">
                      <img
                        src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585345496/cropped-Lambda-School-Dice_azhnvo.png"
                        alt="Brand Logo IBKRice"
                        className="brand-logo"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="experience-area">
                  <div className="d-flex flex-row years-area">
                    <h2 className="p-3 years">2</h2>
                    <h2>
                      <span> Years</span>
                      <span>Experience</span>
                    </h2>
                  </div>
                  <div className="d-flex flex-row flex-wrap call-area p-3">
                    <span>
                      <FontAwesomeIcon
                        size="3x"
                        className="font-awesome"
                        icon={faPhone}
                      />
                    </span>
                    <div className="call-now">
                      <a href="#" className="text-uppercase h4 font-roboto">
                        Call Now
                      </a>
                      <span className="font-roboto py-2">(+234)-816-5269</span>
                    </div>
                  </div>
                  <div className="bg-panel"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Subscribe />
      <Footer />
    </main>
  );
}
