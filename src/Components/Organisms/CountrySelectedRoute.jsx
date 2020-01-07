import React, { useContext } from "react";
import CountryInfo from "./../Molecules/CountryInfo";
import ThemeContext from "./../../Context/ThemeContext";
import {navigate} from "@reach/router";

const CountrySelectedRoute = ({ location: { state: info } }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <main
      class={`${theme}-mode-background ${theme}-mode-text lg:px-10 xl:px-16 px-5`}
    >
      <div>
          <button class = {`${theme}-mode-elements ${theme}-mode-text shadow-md rounded border-1 px-5 py-2`} onClick = {() => {navigate("/")}}>
              &larr; Back
          </button>
      </div>
      <div class="flex">
        <div
          style={{
            backgroundImage: `url(${info.flag})`,
            width: "200px",
            height: "200px"
          }}
        ></div>
        <CountryInfo info={info} />
      </div>
    </main>
  );
};

export default CountrySelectedRoute;
