import React, { useContext } from "react";
import Sun from "../Atoms/Sun";
import Moon from "../Atoms/Moon";
import ThemeContext from "../../Context/ThemeContext";

const ThemeToggler = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div class = "flex cursor-pointer capitalize items-center" onClick = {() => {setTheme(theme === "light" ? "dark" : "light")}}>
      <Moon />
      <p class = "ml-4 font-semibold">{theme} mode</p>
    </div>
  );
};

export default ThemeToggler;
