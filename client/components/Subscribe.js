// import "../assets/styles.scss";

export default function About() {
  return (
    <main className="site-main">
      <section className="subscribe-us-area">
        <div className="container subscribe">
          <div className="row">
            <div className="col-lg-12 text-center subscribe-title">
              <p className="para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorum fugiat delectus ut impedit expedita, sequi repellendus?
                Autem doloremque, voluptas consequuntur necessitatibus quod,
                ratione a dicta totam rerum at, illo animi.
              </p>
            </div>
          </div>
          <div className="d-sm-flex justify-content-center">
            <form className="w-50">
              <div className="row d-flex flex-row flex-wrap">
                <div className="col-input-textbox">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-success float-right">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
