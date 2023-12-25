import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./navbar.css";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import girl from "./Assets/girl.jpg";
import Typed from "typed.js";
import CV from "./Assets/Shreya_Kasare__CV.pdf";
import splash from "./Assets/splash.jpg";

const NavBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Myself Shreya", "I'm a FrontEnd Developer."],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const handleDownload = () => {
    debugger;
    const link = document.createElement("a");

    link.href = CV; // Replace with the actual path to your CV file
    link.download = 'Shreya_Kasare.pdf'; // Specify the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  };

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            {/* <span>S</span>hreya */}
            <span>P</span>ortfolio
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="layout">CycleThrough</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>{" "}
            <li>
              <NavLink to="/service">services</NavLink>
            </li>{" "}
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="/weather">Weather App</NavLink>
            </li>
            <li>
              <NavLink to="/cssstudy">CSS</NavLink>
            </li>
          </ul>
        </div>

        {/* Social media links */}

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="" target="_shreya">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>

            <li>
              <a href="" target="_shreya">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>

            <li>
              <a href="" target="_shreya">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      <div className="wrappper">
        <div className="cols cols0">
          <span className="topline">Hello</span>
          <h1>
            <span ref={el} />
          </h1>
          <p>
            My specialization lies in building complex applications using modern
            technologies.
          </p>
          <div className="btns">
            <button onClick={handleDownload}>Download CV</button>
            <button>Hire Me</button>
          </div>
        </div>
        <div className="cols cols1">
          <div className="imgbox">
            {/* <img src={splash} id="splash"></img> */}
            <img src={girl} id="girl"></img>
            {/* <img src={splash} id="splash"></img> */}
          </div>
        </div>
      </div>

      {/* <section className="hero-section">
        <p>Welcome</p>
      </section>  */}
    </>
  );
};

export default NavBar;
