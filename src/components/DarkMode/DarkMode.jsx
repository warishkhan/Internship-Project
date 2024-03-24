import React from "react";
import "./DarkMode.css";
import { FaSun, FaMoon} from "react-icons/fa";

const DarkMode = ({setBgChange}) => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked){ 
      setDarkMode();
      setBgChange(false)
      localStorage.removeItem("setImage")
    }
    else{ 
      setLightMode();
      setBgChange(true)
      localStorage.setItem("setImage", "true");
    }
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
    <FaSun className="sunMoon sun" size={25}/>
    <FaMoon className="sunMoon moon" size={25}/>
      </label>
    </div>
  );
};

export default DarkMode;
