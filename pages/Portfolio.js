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
          {/* <div className="button-group">
            <button type="button" className="active">
              All
            </button>
            <button type="button" className="active" data-filter=".popular">
              Latest
            </button>
            <button type="button" className="active" data-filter=".upcoming">
              Upcoming
            </button>{" "}
          </div> */}
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
            <div className="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
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

// class Portfolio extends React.Component {
//   constructor() {
//     super();
//     this.handleClickAll = this.handleClickAll.bind(this);
//     this.handleClickLatest = this.handleClickLatest.bind(this);
//     this.handleClickUpcoming = this.handleClickUpcoming.bind(this);
//     this.state = {
//       isClickedAll: true,
//       isClickedLatest: false,
//       isClickedUpcoming: false
//     };
//   }

//   handleClickAll(e) {
//     this.setState({
//       isClickedAll: true,
//       isClickedLatest: false,
//       isClickedUpcoming: false
//     });
//     if (this.iso === undefined)
//       this.iso = new Isotope(`.${styles.articlesTiles}`, {
//         itemSelector: `.${styles.col}`,
//         layoutMode: "fitRows"
//       });
//     this.iso.arrange({ filter: "*" });
//   }

//   handleClickLatest(e) {
//     this.setState({
//       isClickedAll: false,
//       isClickedLatest: true,
//       isClickedUpcoming: false
//     });
//     if (this.iso === undefined)
//       this.iso = new Isotope(`.${styles.articlesTiles}`, {
//         itemSelector: `.${styles.col}`,
//         layoutMode: "fitRows"
//       });
//     this.iso.arrange({ filter: "styles.latest" });
//   }

//   handleClickUpcoming(e) {
//     this.setState({
//       isClickedAll: false,
//       isClickedLatest: false,
//       isClickedUpcoming: true
//     });
//     if (this.iso === undefined)
//       this.iso = new Isotope(`.${styles.articlesTiles}`, {
//         itemSelector: `.${styles.col}`,
//         layoutMode: "fitRows"
//       });
//     this.iso.arrange({ filter: "upcoming" });
//   }

//   render() {
//     return (
//       <main className="site-main">
//         <Header />
//         <section className="project-area">
//           <div className="container">
//             <div className="row">
//               <div className="project-title pb-5">
//                 <h1 className="text-uppercase title-h1">
//                   Recently Done Project
//                 </h1>
//               </div>
//             </div>
//             <div className="button-group">
//               <button
//                 onClick={this.handleClickAll}
//                 className={
//                   this.state.isClickedAll
//                     ? classNames(styles.filtersButton, styles.isChecked)
//                     : styles.filtersButton
//                 }
//                 type="button"
//               >
//                 All
//               </button>
//               <button
//                 type="button"
//                 onClick={this.handleClickLatest}
//                 className={
//                   this.state.isClickedLatest
//                     ? classNames(styles.filtersButton, styles.isChecked)
//                     : styles.filtersButton
//                 }
//               >
//                 Latest
//               </button>
//               <button
//                 type="button"
//                 className="active"
//                 onClick={this.handleClickUpcoming}
//                 className={
//                   this.state.isClickedUpcoming
//                     ? classNames(styles.filtersButton, styles.isChecked)
//                     : styles.filtersButton
//                 }
//               >
//                 Upcoming
//               </button>{" "}
//             </div>
//             <div className="row grid">
//               <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
//                 <div className="our-project">
//                   <div className="img">
//                     <img
//                       src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585403374/8b62a-hire_full-stack-developer_4_yyqawu.jpg"
//                       alt="portfolio"
//                       className="project-image"
//                     />
//                   </div>
//                   <div className="title py-4">
//                     <h4 className="text-uppercase">Design</h4>
//                     <span className="text-secondary">Latest, Portfolio</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
//                 <div className="our-project">
//                   <div className="img">
//                     <img
//                       src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585403396/8b62a-hire_full-stack-developer_5_a4l6nf.jpg"
//                       alt="portfolio"
//                       className="project-image"
//                     />
//                   </div>
//                 </div>
//                 <div className="title py-4">
//                   <h4 className="text-uppercase">Design</h4>
//                   <span className="text-secondary">Latest, Portfolio</span>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6 col-sm-12 element-item upcoming">
//                 <div className="our-project">
//                   <div className="img">
//                     <img
//                       src="https://res.cloudinary.com/ibkrice-com/image/upload/v1585403497/8b62a-hire_full-stack-developer_3_fkinbj.jpg"
//                       alt="portfolio"
//                       className="project-image"
//                     />
//                   </div>
//                 </div>
//                 <div className="title py-4">
//                   <h4 className="text-uppercase">Design</h4>
//                   <span className="text-secondary">Latest, Portfolio</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     );
//   }
// }
// export default Portfolio;
