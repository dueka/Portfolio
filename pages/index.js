import React, { Fragment, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Main from "./Main";
import "../assets/styles.scss";
import "jquery/dist/jquery.min.js";
export default function Index() {
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const [isSticky, setSticky] = useState(false);

  const stickyRef = useRef(null);
  const handleScroll = () => {
    if (stickyRef.current) {
      window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
        ? setSticky(true)
        : setSticky(false);
    }
  };
  if (process.browser) {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <Fragment>
      {/* <Layout /> */}
      <Header sticky={isSticky} />
      <Main />
      {/* <Portfolio /> */}
    </Fragment>
  );
}
