import React, { useContext } from "react";
import ThemeContext from "./../../Context/ThemeContext";

const CountryCard = ({ countryName, population, region, capital, flag }) => {
  const [theme] = useContext(ThemeContext);
  return (
    <div
      className={`rounded shadow-md ${theme}-mode-elements ${theme}-mode-text mb-16`}
    >
      <img className = "rounded-t w-full" src={flag} alt={`${countryName}'s flag`} />
      <div className = "py-5 px-6">
        <strong className = "text-lg" >{countryName}</strong>
        <p className = "mb-2 mt-5">
          <b>Population:</b> {population}
        </p>
        <p className = "mb-2">
          <b>Region:</b> {region}
        </p>
        <p className = "">
          <b>Capital:</b> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
