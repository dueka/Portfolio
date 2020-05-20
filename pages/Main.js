import axios from "axios";
import About from "./About";
import Services from "./Services";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
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
    <main className="site-main" id="main">
      <section className="site-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 site-title">
              <h3 className="title-text">Hey</h3>
              <h1 className="title-text text-uppercase">I am DUE</h1>
              <h4 className="title-text text-uppercase">Software Craftsman</h4>
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
                    onClick={viewHandler}
                  >
                    GET CV
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 banner_para">
              <p className="para">
                I am a Software Engineer and Content Creator based in Lagos,
                Nigeria. I am a team player with experience working with teams
                remotely. Passionate about creating the perfect User Experience.
              </p>
            </div>
            <div className="banner_para"></div>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Slider images={Images} />

      <Footer />
    </main>
  );
}
