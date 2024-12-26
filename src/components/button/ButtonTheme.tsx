"use client";

import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb as faDark} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ButtonTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    // console.log(savedTheme);
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <>
      <button
        onClick={toggleTheme}
        className="rounded-lg bg-rose-500 px-4 py-2 text-white"
      >
        {theme === "light" ? (
          <FontAwesomeIcon icon={faLightbulb} />
        ) : (
          <FontAwesomeIcon icon={faDark} />
        )}
      </button>
    </>
  );
};

export default ButtonTheme;
