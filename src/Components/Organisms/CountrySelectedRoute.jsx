import React, { useContext } from "react";
import CountryInfo from "./../Molecules/CountryInfo";
import ThemeContext from "./../../Context/ThemeContext";
import {navigate} from "@reach/router";


const CountrySelectedRoute = ({ location: { state: {info} }, allCountries }) => {
  const [theme] = useContext(ThemeContext);
  
  return (
    <main
      className={`${theme}-mode-background ${theme}-mode-text lg:px-10 xl:px-16 px-5 pb-20`}
    >
      <div>
          <button className = {`${theme}-mode-elements country-border ${theme}-mode-text shadow-md rounded border-1 px-5 py-2 my-5`} onClick = {() => {navigate("/")}}>
              &larr; Back
          </button>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div
          className = "w-full md:w-3/4 lg:w-2/4 xl:w-5/12 h-56 lg:h-64 md:mr-12 lg:mr-20 xl:mr-30 md:h-12/12 self-center bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${info.flag})`,
           
          }}
        ></div>
        <CountryInfo allCountries = {allCountries} info={info} />

      </div>
    </main>
  );
};

export default CountrySelectedRoute;
