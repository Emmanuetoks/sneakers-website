/* eslint-disable react/no-unknown-property */
import UserInfoSection from "./UserInfoSection";
import Logo from "../../public/images/logo.svg";
import { useRef } from "react";

const NavBar = () => {
  const toggleBtn = useRef(null);
  const navMenu = useRef(null);

  const toggleMobileMenu = () => {
    toggleBtn.current.classList.toggle("menu-close");
    if (navMenu.current.getAttribute("ismobile") === "true") {
      navMenu.current.setAttribute("ismobile", "false");
    } else if (navMenu.current.getAttribute("ismobile") === "false") {
      navMenu.current.setAttribute("ismobile", "true");
    }
  };

  return (
    <nav className="navbar flex" style={{ "--gap": "4%" }}>
      <button
        onClick={toggleMobileMenu}
        ref={toggleBtn}
        className="navbar__toggler "
      >
        <span className="sr-only">Navbar Toggle button</span>
      </button>

      <img src={Logo} alt="logo" />

      <ul
        ref={navMenu}
        ismobile="false"
        className="navbar__menu flex"
        style={{ "--gap": "2rem" }}
      >
        <li>
          <a href="#" className="navbar__link capitalize">
            collections
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link capitalize">
            men
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link capitalize">
            women
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link capitalize">
            about
          </a>
        </li>
        <li>
          <a href="#" className="navbar__link capitalize">
            contact
          </a>
        </li>
      </ul>

      <UserInfoSection />
    </nav>
  );
};

export default NavBar;
