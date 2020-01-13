import React, { useContext } from "react";
import ThemeContext from "./../../Context/ThemeContext";
import { Link } from "@reach/router";

const Border = ({ borderName, numericCode, CardInfo }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <div
      className={`${theme}-mode-elements m-1 ${theme}-mode-text px-5 py-2 country-border shadow-md rounded relative`}
    >
      <p>{borderName}</p>
      <Link to={`/details/${numericCode}`}
        state={{info:CardInfo}} className="w-full h-full absolute top-0 left-0"></Link>
    </div>
  );
};


export default Border;