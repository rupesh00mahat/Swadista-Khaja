import React from "react";
import "./style.css";
import MainLogo from './assets/main-logo.jpg'

function MainShowCase() {
  return (
    <section id="main-showcase">
     <img src={MainLogo} alt="Swadista khaja main logo"/>
    </section>
  );
}

export default MainShowCase;
