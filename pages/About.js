import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <main id="about">
      {/* <Navigation /> */}
      <section className="about-area">
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
                <p className="para">Software Craftsman.</p>
                <p className="para">
                  I am a highly motivated individual with a desire to learn and
                  grow. Make it a priority to create Web Applications that are
                  easy to use.
                </p>
                <p className="para">
                  I have two years of learning under my belt and currently a
                  student of <span className="color_span"> Lambda School</span>{" "}
                  and just finishing off Labs. I currently lead the Information
                  Technology department at{" "}
                  <span className="color_span">
                    Dimensions Agro Technology Limited
                  </span>{" "}
                  were i create Web technologies, create content and manage the
                  social media pages.
                </p>
                <p className="para">
                  I am interested in working on projects were i learn and
                  improve my tech stack, while improving my ability to produce
                  sites where User Experience is a priority.
                </p>
                <p className="para">
                  I am available to discuss on projects, you can message me at{" "}
                  <span className="color_span">ekanemd@live.com</span>
                </p>
              </div>
              <button
                type="button"
                className="btn button primary-button text-uppercase"
              >
                <a href="mailto:ekanemd@live.com" className="color_a">
                  Let's Connect
                </a>
              </button>
              <span>
                <FontAwesomeIcon
                  size="1x"
                  className="font-awesome"
                  icon={faPhone}
                />
                <a
                  href="tel:+2348168965269"
                  className="font-roboto py-2 color_a"
                >
                  (+234)-816-5269
                </a>
              </span>
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

                  <div className="call-now"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
