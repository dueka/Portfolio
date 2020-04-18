import "../assets/styles.scss";
// import About from "./About";

const Welcome = ({ stickyRef }) => (
  <main>
    <section className="welcome">
      <div ref={stickyRef}>
        <img
          src={
            "https://res.cloudinary.com/ibkrice-com/image/upload/v1585246633/8b62a-hire_full-stack-developer_4_fysdjg.jpg"
          }
          className="welcome--logo"
        />
        <button className="welcome__cta-primary">Contact Us</button>
      </div>
    </section>
  </main>
);

export default Welcome;
