import React, { useContext } from "react";
import { Link } from "@reach/router";
import ThemeContext from "./../../Context/ThemeContext";

const CountryCard = ({
  countryName,
  population,
  region,
  capital,
  flag,
  nativeName,
  subRegion,
  topLevelDomain,
  currencies,
  languages,
  borders,
  id
}) => {
  const [theme] = useContext(ThemeContext);
  const CardInfo = {
    nativeName: nativeName,
    population: population,
    region: region,
    subRegion: subRegion,
    capital: capital,
    topLevelDomain: topLevelDomain,
    currencies: currencies,
    languages: languages,
    borders: borders,
    flag: flag
  };

  return (
    <div
      className={`country-card cursor-pointer relative rounded shadow-md ${theme}-mode-elements ${theme}-mode-text mb-16`}
    >
      <div class = "rounded-t w-full bg-cover bg-center" style = {{backgroundImage: `url(${flag})`, height: "200px"}}>

      </div>
      <div className="py-5 px-6">
        <strong className="text-lg">{countryName}</strong>
        <p className="mb-2 mt-5">
          <b>Population:</b> {population}
        </p>
        <p className="mb-2">
          <b>Region:</b> {region}
        </p>
        <p className="">
          <b>Capital:</b> {capital}
        </p>
      </div>
      <Link
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0",
          top: "0",
          backgroundColor: "transparent"
        }}
        to={`/details/${id}`}
        state={CardInfo}
      ></Link>
    </div>
  );
};

export default CountryCard;
