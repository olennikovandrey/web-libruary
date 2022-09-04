import Main from "./components/Main/Main";
import React, { useEffect } from "react";

function App() {
  const propgressBar = () => {
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = scroll / height * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  };

  const toTop = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      window.scrollBy(0, -2000);
      setTimeout(toTop, 1);
    }
  };

  window.onscroll = function toTopOpacity () {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const toTopBtn = document.querySelector(".app__to-top-btn");
    scrolled > 1000 ? toTopBtn.style.opacity = "1" : toTopBtn.style.opacity = "0";
  };

  useEffect(() => {
    document.addEventListener("scroll", () => propgressBar());
    return document.addEventListener("scroll", () => propgressBar());
  }, []);

  return (
    <div className="app">
      <div className="progress-container">
        <div className="progress-bar" id="progressBar"></div>
      </div>
      <Main />
      <div className="app__to-top-btn" onClick={ () => toTop() }></div>
    </div>
  );
}

export default App;
