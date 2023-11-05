import React, { useState } from "react";
import "./header.css";

import { useIp } from "../../Context/IpContext";

function Header() {
  const { setInputValue } = useIp();
  const [inputTempValue, setInputTempValue] = useState('');

  const handleChange = (e) => {
    const temp = e.target.value;
    setInputTempValue(temp);
  };

  const handleClick = () => {
    setInputValue(inputTempValue);
  };

  return (
    <header className="header">
      <img
        src="assets/pattern-bg-desktop.png"
        alt="headerBg"
        className="headerBg"
      />
      <h1 className="headerTitle headingL whiteText">IP Address Tracker</h1>
      <div className="searchBar whiteBg">
        <input
          className="searchBarInput"
          type="text"
          placeholder="Search for any IP address or domain"
          value={inputTempValue}
          onChange={handleChange}
        />
        <button className="searchBarButton blackBg" onClick={handleClick}>
          <img
            src="assets/icon-arrow.svg"
            alt="arrowIcon"
            className="searchBarButtonIcon"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
