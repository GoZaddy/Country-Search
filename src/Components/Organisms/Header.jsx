import React, { useContext } from "react";
import ThemeToggler from "../Molecules/ThemeToggler";
import ThemeContext from "./../../Context/ThemeContext";
import {Link} from "@reach/router";

const Header = () => {
  const [theme] = useContext(ThemeContext);
  const headerClassNameStyles = `flex justify-between z-10 relative lg:px-10 xl:px-16 py-8 px-5 shadow-md items-center ${theme}-mode-elements ${theme}-mode-text`;
  return (
    <header
      className={headerClassNameStyles}
    >
      <Link to = "/" className="font-bold text-xl">Where in the world?</Link>
      <ThemeToggler />
    </header>
  );
};

export default Header;
