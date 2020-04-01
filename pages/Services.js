import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles.scss";

export default function Services() {
  return (
    <main className="site-main">
      <Header />
      <section className="services-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center services-title">
              <h1 className="text-uppercase title-text">Services Offered</h1>
              <p className="para">
                Providing solutions to buisnesses and companies
              </p>
            </div>
          </div>
          <div className="container services-list">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img
                      src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585704713/cropped-Lambda-School-Dice_a9kfwa.png"
                      alt="Services"
                      className="img-services"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-roboto">
                      Full-Stack Web Developer
                    </h5>
                    <p className="card-text text-secondary">
                      Some example text
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img
                      src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585704814/cropped-Lambda-School-Dice_b4eyqr.png"
                      alt="Services"
                      className="img-services"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-roboto">
                      SAP HANA Developer
                    </h5>
                    <p className="card-text text-secondary">
                      HANA Developer on the SAP HANA Database maximizing the
                      speed and strength of the SAP HANA Database to build
                      business applications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img
                      src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585704973/cropped-Lambda-School-Dice_hyhuqe.png"
                      alt="Services"
                      className="img-services"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-roboto">
                      Content Creator
                    </h5>
                    <p className="card-text text-secondary">
                      I enjoy creating contents for brands and businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
