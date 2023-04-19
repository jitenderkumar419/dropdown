import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "react-bootstrap";
import "./style.css";

export default function Component() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="main-container">
      <div className="container">
        <h3 id="head">Should You use a dropdown?</h3>
        <div className="content">
          <Dropdown
            className="drop"
            onMouseLeave={() => setShowDropdown(false)}
            onMouseOver={() => setShowDropdown(true)}
          >
            <Dropdown.Toggle className="main-style" id="dropdown-basic">
              Select
            </Dropdown.Toggle>

            <Dropdown.Menu show={showDropdown}>
              <Dropdown.Item id="b" href="#/action-1">
                Yes
              </Dropdown.Item>
              <Dropdown.Item id="b" href="#/action-2">
                Probably Not
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
