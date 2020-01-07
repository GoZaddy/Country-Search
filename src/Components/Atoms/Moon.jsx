import React, { useContext } from "react";
import ThemeContext from "./../../Context/ThemeContext";

const Moon = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="20"
      height="20"
      viewBox="0 0 16 16"
    >
      <path
        fill={theme === "light" ? "#000":"#fff"}
        d="M13.2 11.9c-4.5 0-8.1-3.6-8.1-8.1 0-1.4.3-2.7.9-3.8-3.4.9-6 4.1-6 7.9C0 12.4 3.6 16 8.1 16c3.1 0 5.8-1.8 7.2-4.4-.6.2-1.3.3-2.1.3zM8.1 15C4.2 15 1 11.8 1 7.9c0-2.5 1.3-4.7 3.3-6-.2.6-.2 1.2-.2 1.9 0 5 4.1 9.1 9.1 9.2-1.4 1.2-3.2 2-5.1 2z"
      />
    </svg>
  );
};

export default Moon;
