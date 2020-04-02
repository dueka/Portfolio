import "../assets/styles.scss";
import axios from "axios";

export default function Main() {
  function viewHandler() {
    axios
      .get(`http://localhost:4000/pdf`, {
        responseType: "blob"
        //Force to receive data in a Blob Format
      })
      .then(response => {
        //Create a Blob from the PDF Stream
        const file = new Blob([response.data], {
          type: "application/pdf"
        });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
  }
  return (
    <main className="site-main">
      <section className="site-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 site-title">
              <h3 className="title-text">Hey</h3>
              <h1 className="title-text text-uppercase">I am DUE</h1>
              <h4 className="title-text text-uppercase">Full Stack Engineer</h4>
              <div className="site-buttons">
                <div className="d-flex flex-row flex-wrap">
                  <button
                    type="button"
                    className="btn button-primary-button mr-4 text-uppercase"
                  >
                    <a href="mailto:ekanemd@live.com" className="color_a">
                      Hire Me
                    </a>
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
            <div className="col-lg-6 col-md-12 banner-image">
              <img
                src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585246317/8b62a-hire_full-stack-developer_4_fm5x8i.jpg"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
            <div className="banner_para">
              <p className="para">
                I am a Software Engineer and Content Creator based in Lagos,
                Nigeria. I am a team player with experience working with teams
                remotely. Passionate about creating the perfect User Experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
