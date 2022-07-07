import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import navigationDescription from "./NavigationDescription.json";
import React from "react";

function NavigationBar() {
  const [showDescriptionID, setShowDescription] = useState(false);
  return (
    <div className="navigation_bar">
      {navigationDescription.map((item) => (
        <div className="navigation_title" key={item.id}>
          <div
            onMouseOver={() => {
              setShowDescription(item.id);
            }}
          >
            <NavLink
              className="navigation_title"
              activeClassName="navigation_title_active"
              exact
              to={`/${item.id}`}
            >
              {item.name}
            </NavLink>
          </div>
          {showDescriptionID === item.id && (
            <div className="navigation_description">
              {"- " + item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NavigationBar;
