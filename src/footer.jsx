import React from "react";
import { SiCodechef } from "react-icons/si";
import "./style.css";
import {
  FaDribbble,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div id="footer">
      <div className="footer-section-one">
      <div className="footer-section-one-wrapper">
        <SiCodechef />
        <h2 className="footer-text">Swadista Khaja</h2>
      </div>
      </div>
      <div className="footer-section-two">
        <span>© 2024 AR™. All Rights Reserved.</span>
        <ul id="footer-links">
          <li>
            <a href="">
              <FaDribbble />
            </a>
          </li>
          <li>
            <a href="">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
