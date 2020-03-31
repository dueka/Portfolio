import React, { Fragment, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Welcome from "../components/welcome";

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
  if (process.browser) {
    window.addEventListener("scroll", debounce(handleScroll));
  }

  return (
    <Fragment>
      <Header sticky={isSticky} />
      <Welcome sticky={isSticky} />
      <Main />
      <Footer />
    </Fragment>
  );
}
