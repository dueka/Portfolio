import { useState } from "react";
import Swiper from "react-id-swiper";
import {
  FaGit,
  FaMobile,
  FaTimes,
  FaCode,
  FaPersonBooth,
  FaLock,
} from "react-icons/fa";

const HeroSliderConfigs = {
  containerClass: "swiper-container swiper-wrapper",
  parralax: true,
  centeredSlides: true,
  speed: 500,
  spaceBetweern: 0,
  effect: "slide",
};

export default function Portfolio() {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="swiper-container" id="slider">
        <div className="swiper-wrapper">
          <div
            className="swiper-slider"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <div className="slide1"></div>
            <a href="https://shefa-luxe.now.sh/">
              <h1>Shefa Luxe</h1>
            </a>
            <p>
              <p>
                {" "}
                <strong> Minimalist Shopping Application </strong>
              </p>
              Built with: HTML5 &#183; JavaScripT &#183; Node&#183;
              MongoDB&#183;{" "}
            </p>
            <div>
              <p>
                <FaLock />
                authentication <FaMobile /> mobile
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="swiper-wrapper">
          <div
            className="swiper-slider"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <div className="slide2"></div>
            <a href="ibkrice.com/">
              <h1>IBKRice</h1>
            </a>
            <p>
              <p>
                {" "}
                <strong> E-Commerce Application</strong>
              </p>
              Built with: React&#183; Redux&#183; Node&#183; MongoDB&#183;
              Jest&#183; Heroku&#183;
            </p>
            <div>
              <p>
                <FaLock />
                authentication <FaMobile /> mobile
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-wrapper">
          <div
            className="swiper-slider"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <div className="slide3"></div>
            <a href="https://hackathon-portal-client.now.sh/"></a>
            <h1>Hackathon Web</h1>
            <p>
              <p>
                {" "}
                <strong> Hackathon prep and management. </strong>
              </p>
              Built with: React &#183; Redux &#183; Ant Design&#183; Node&#183;
              Jest&#183; PostgreSQL&#183;{" "}
            </p>
            <div>
              <p>
                <FaLock />
                authentication <FaMobile /> mobile
              </p>
            </div>
          </div>
        </div>
        <div className="swiper-wrapper">
          <div
            className="swiper-slider"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <div className="slide4"></div>
            <a href="https://euafrica.now.sh/">
              <h1>EUAfrica</h1>
            </a>

            <p>
              <p>
                {" "}
                <strong>
                  Bridging the gap between Africa and Europe with the power of
                  Trade.
                </strong>
              </p>
              Built with: React&#183; CSS &#183; Node&#183;
            </p>
            <div>
              <p>
                <FaLock />
                authentication <FaMobile /> mobile
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </Swiper>
  );
}
