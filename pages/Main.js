import axios from "axios";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Contacts from "./Contacts";
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
          <h3 className="title-text">Hi, I'm Due,</h3>
          <div className="main-box">
            <div className="main-left">
              <p className="para">
                a Software craftsman and content creator. I bring productivity
                to organisations using technology. I enjoy learning new
                technologies and their applications to problems faced by
                businesses and people around the world. I have worked with
                development teams remotely to develop projects i feel would be
                beneficial to the society such as my euafrica marketplace.
                <br />
                <br />
              </p>
              <p className="para">
                In my spare time, i like to listen to music and think on how to
                apply technology to solving problems facing Africa. Hit me up
                and let's get talking.
              </p>{" "}
              <div className="site-buttons">
                <button type="button" className="button-primary-button">
                  <a href="mailto:ekanemd@live.com">Message Me</a>
                </button>
                <br />
                <button type="button" className="button-secondary-button">
                  <a href="https://drive.google.com/open?id=1qtC9TwOoU5-kFK0MV8F6tUFkqifQClip">
                    GET CV
                  </a>
                </button>
              </div>
            </div>
            <div className="main-right">
              <div className="avatar">
                <img
                  src="https://res.cloudinary.com/ibkrice-com/image/upload/v1590623379/myAvatar_l4hjz7.png"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </section>
        <Card />
        <Portfolio />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}
