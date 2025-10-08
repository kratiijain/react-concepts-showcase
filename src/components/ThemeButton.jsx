import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton() {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        padding: "10px 20px",
        margin: "10px 0",
      }}
    >
      Theme Button
    </button>
  );
}

export default ThemeButton;
