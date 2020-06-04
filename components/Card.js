import React from "react";
export default function Card() {
  return (
    <div className="card_body" id="about">
      <div className="card_container">
        <div className="card">
          <div className="imgBx">
            <img
              src="https://res.cloudinary.com/ibkrice-com/image/upload/v1590624467/design_awju3h.png"
              alt=""
            />
          </div>
          <div className="contentBx">
            <h2>Ideation</h2>
            <p>
              Talking about your ideas and building concepts and technical
              solutions that work to solve whatever real world or business
              problem you are facing, exploring the benefits of technology to
              solving problems is my desire.
            </p>
            {/* <a href="/contacts">
              <span>Read More</span>
            </a> */}
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img
              src="https://res.cloudinary.com/ibkrice-com/image/upload/v1591304787/code_qoumpr.png"
              alt=""
            />
          </div>
          <div className="contentBx">
            <h2>Design</h2>
            <p>
              Being involved in technology that makes an impact on the world. I
              am interested in writing code that solves problems and helps make
              the World, a better and more interesting place to live in.
            </p>
            {/* <a href="#">
              <span>Read More</span>
            </a> */}
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img
              src="https://res.cloudinary.com/ibkrice-com/image/upload/v1590624599/launch_lzj2xy.png"
              alt=""
            />
          </div>
          <div className="contentBx">
            <h2>Deploy</h2>
            <p>Houston, We Have Lift Off!</p>
            {/* <a href="#">
              <span>Read More</span>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
