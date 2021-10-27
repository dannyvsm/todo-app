import React from "react";
import "./header.css";
import { BsSunFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaTree } from "react-icons/fa";

function Header() {
  return (
    <div class="head">
      <div className="timedate">
        <h2>19:00</h2>
        <p>manchester, 12°c</p>
      </div>
      <div class="theme-btns">
        <BsSunFill className="light" />
        <BsMoonStarsFill className="dark" />
        <FaTree className="forest" />
      </div>
    </div>
  );
}

export default Header;
