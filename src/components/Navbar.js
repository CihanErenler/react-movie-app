import React from "react";
import logo from "../assets/MBOX.svg";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useGlobalContext } from "../context";

function Navbar() {
  const { searchValue, setSearchValue } = useGlobalContext();

  const navigate = useNavigate();

  const handleInput = (e) => {
    if (searchValue !== "") return navigate(`/search/${searchValue}`);
    navigate(`/search/${searchValue}`);
  };

  return (
    <div className="navbar">
      <div className="container align-center">
        <Link to="/" className="d-flex align-center">
          <img className="logo-svg" src={logo} alt="logo" />
        </Link>
        <div className="form-container">
          <input
            className="search-box"
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleInput();
            }}
          />
          <SearchIcon className="search-icon" onClick={handleInput} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
