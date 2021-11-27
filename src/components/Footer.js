import React from "react";
import logo from "../assets/MBOX.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <img
          className="footer-logo"
          src={logo}
          alt="tmdb-logo"
          style={{ display: "block", margin: "1.25rem auto" }}
        />
        <p></p>
        <p>
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/cihanerenler/"
            target="_blank"
            rel="noreferrer"
          >
            Cihan Erenler
          </a>{" "}
          &copy; 2021
        </p>
        <img
          className="footer-logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="tmdb-logo"
        />
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
      </div>
    </section>
  );
}

export default Footer;
