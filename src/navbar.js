import React, {useState, useEffect} from "react";
import { SiCodechef } from "react-icons/si";
import { CiLogin } from "react-icons/ci";
import "./style.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="navigation" className={`${isScrolled ? 'navbar-transparent': ''}`}>
      <div className="wrapper flex">
        <h2 className="navbar-title">
          <SiCodechef />
          <span className="navbar-text">Swadista Khaja</span>
        </h2>
        <ul className="navigation-list flex">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
          <li>Another</li>
        </ul>
        <button className={`login-logout-button ${isScrolled ? 'navbar-transparent': ''}`}>
          <CiLogin />
          <span>Login</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
