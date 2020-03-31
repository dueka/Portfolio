import Header from "../components/Header";
import "../assets/styles.scss";

export default function Portfolio() {
  return (
    <main className="contact-body">
      <div className="wrapper">
        <Header />
        <div id="container">
          <div className="title">
            <h1>Contact</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              quam quaerat debitis. Quam obcaecati laborum quos, error
              reprehenderit, ipsum sapiente iste fugit ex et minus explicabo
              possimus blanditiis illo nesciunt.
            </p>
            <div className="buttons">
              <button>Explore</button>
            </div>
          </div>
          <div className="view">
            <div className="clip-svg">
              <div className="night">
                <div className="surface moveRight"></div>
                <div className="car suspension">
                  <img
                    src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585474347/dribbble_w8xyn8.gif"
                    alt="animation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
