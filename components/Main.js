import "../assets/styles.scss";
export default function Main() {
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
                    Hire Me
                  </button>
                  <button
                    type="button"
                    className="btn button-secondary-button text-uppercase"
                  >
                    GET CV
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 banner-image ">
              <img
                src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585240558/8b62a-hire_full-stack-developer_1_adrqtr.jpg"
                alt="banner-img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
