import React, { useRef, useEffect } from "react";
import logo from "../assets/MBOX.svg";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  // const navbar = useRef(null);
  // useEffect(() => {
  //   function handleScroll() {
  //     if (
  //       document.documentElement.scrollTop > 30 ||
  //       document.body.scrollTop > 30
  //     ) {
  //       navbar.current.classlist.add("dark");
  //     } else {
  //       navbar.current.classlist.remove("dark");
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="navbar">
      <div className="container align-center">
        <Link to="/" className="d-flex align-center">
          <img className="logo-svg" src={logo} alt="logo" />
        </Link>
        <div className="form-container">
          <input className="search-box" type="text" placeholder="Search..." />
          <SearchIcon className="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
