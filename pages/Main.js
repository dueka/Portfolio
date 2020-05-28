import axios from "axios";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Images from "../images";

export default function Main() {
  function viewHandler() {
    axios
      .get(`http://localhost:4000/pdf`, {
        responseType: "blob",
        //Force to receive data in a Blob Format
      })
      .then((response) => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf",
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <main className="site-main" id="main">
        <section className="site-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 banner_para">
                <h3 className="title-text">Hi, I'm Due,</h3>
                <p className="para">
                  a Software craftsman and content creator. Do you desire to
                  give your users a great user experience or desire to develop
                  your web ideas? I'm the man for the job. Hit me up and let's
                  get talking.
                </p>
                <div className="site-buttons">
                  <div className="d-flex flex-row flex-wrap">
                    <button
                      type="button"
                      className="btn button-secondary-button mr-4 text-uppercase"
                    >
                      <a href="mailto:ekanemd@live.com">Hire Me</a>
                    </button>
                    <button
                      type="button"
                      className="btn button-secondary-button text-uppercase"
                      // onClick={viewHandler}
                    >
                      <a href="https://drive.google.com/open?id=1qtC9TwOoU5-kFK0MV8F6tUFkqifQClip">
                        GET CV
                      </a>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 site-title">
                <img
                  src="https://res.cloudinary.com/ibkrice-com/image/upload/v1590623379/myAvatar_l4hjz7.png"
                  alt="avatar"
                  className="avatar"
                />
              </div>

              <div className="banner_para"></div>
            </div>
          </div>
          <Card />
          <Portfolio />
          <Footer />
        </section>
      </main>
    </div>
  );
}
