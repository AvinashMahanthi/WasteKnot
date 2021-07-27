import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookF,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col col-md-4">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="# ">AboutUs</a>
                </li>
                <li>
                  <a href="# ">Objectives</a>
                </li>
                <li>
                  <a href="# ">Community support</a>
                </li>
                <li>
                  <a href="# ">Join us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h4>Initiatives</h4>
              <ul>
                <li>
                  <a href="# ">Labs</a>
                </li>
                <li>
                  <a href="# ">hackathons</a>
                </li>
                <li>
                  <a href="# ">Academy</a>
                </li>
                <li>
                  <a href="# ">Payment Options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col col-md-4">
              <h4>Address</h4>
              <ul>
                <li>
                  <a href="# ">Be The Change Academy, Eco Hub</a>
                </li>
                <li>
                  <a href="# ">BettaHalsoor, Bengaluru, Karnataka, IN</a>
                </li>
                <li>
                  <a href="# ">+91 9444940707</a>
                </li>
              </ul>
            </div>
            <div className="footer-col pt-2">
              <h5 className="py-3">Follow us</h5>
              <div className="social-links">
                <a href="# ">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="# ">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="# ">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="# ">
                  <FontAwesomeIcon icon={faTwitterSquare} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
