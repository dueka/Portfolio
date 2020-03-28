import Header from "../components/Header";
import "../assets/styles.scss";

export default function Portfolio() {
  return (
    <main className="site-main">
      <Header />
      <section className="project-area">
        <div className="container">
          <div className="row">
            <div className="project-title pb-5">
              <h1 className="text-uppercase title-h1">Recently Done Project</h1>
            </div>
          </div>
          <div className="button-group">
            <button type="button" className="active">
              All
            </button>
            <button type="button" className="active">
              Latest
            </button>
            <button type="button" className="active">
              Upcoming
            </button>{" "}
          </div>
          <div className="row grid">
            <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
              <div className="our-project">
                <div className="img">
                  <img
                    src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585403374/8b62a-hire_full-stack-developer_4_yyqawu.jpg"
                    alt="portfolio"
                    className="project-image"
                  />
                </div>
                <div className="title py-4">
                  <h4 className="text-uppercase">Design</h4>
                  <span className="text-secondary">Latest, Portfolio</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
              <div className="our-project">
                <div className="img">
                  <img
                    src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585403396/8b62a-hire_full-stack-developer_5_a4l6nf.jpg"
                    alt="portfolio"
                    className="project-image"
                  />
                </div>
              </div>
              <div className="title py-4">
                <h4 className="text-uppercase">Design</h4>
                <span className="text-secondary">Latest, Portfolio</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
              <div className="our-project">
                <div className="img">
                  <img
                    src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585403497/8b62a-hire_full-stack-developer_3_fkinbj.jpg"
                    alt="portfolio"
                    className="project-image"
                  />
                </div>
              </div>
              <div className="title py-4">
                <h4 className="text-uppercase">Design</h4>
                <span className="text-secondary">Latest, Portfolio</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
