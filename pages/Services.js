import Header from "../components/Header";
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
                      src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585400919/8b62a-hire_full-stack-developer_4_ov3klo.jpg"
                      alt="Services"
                      className="img-services"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-roboto">
                      Web Developer
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
                      src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585401369/8b62a-hire_full-stack-developer_4_jtyvaq.jpg"
                      alt="Services"
                      className="img-services"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-roboto">
                      SAP HANA Developer
                    </h5>
                    <p className="card-text text-secondary">
                      Certified HANA Developer on the SAP HANA Database
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img
                      src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585401724/download_txhmsm.jpg"
                      alt="Services"
                      className="img-services"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-roboto">
                      SAP ABAP Developer
                    </h5>
                    <p className="card-text text-secondary">
                      Certified HANA Developer on the SAP HANA Database
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="services">
                  <div className="services-img text-center py-4">
                    <img
                      src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585401809/cropped-Lambda-School-Dice_wr0d1j.png"
                      alt="Services"
                      className="img-services"
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title text-uppercase font-roboto">
                      Content Creator
                    </h5>
                    <p className="card-text text-secondary">
                      Certified HANA Developer on the SAP HANA Database
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
