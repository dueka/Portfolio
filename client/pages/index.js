// import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

import "../assets/styles.scss";
export default function Index() {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = useState(false);

  const stickyRef = useRef(null);
  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  // This function handle the scroll performance issue
  const debounce = (func, wait = 20, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  if (typeof window === "undefined") {
    global.window = {};
  }
  window.addEventListener("scroll", debounce(handleScroll));

  return (
    <Fragment>
      <Navbar sticky={isSticky} />
      <Welcome stickyRef={stickyRef} />
      <Main />
      <Footer />
    </Fragment>
  );
}
