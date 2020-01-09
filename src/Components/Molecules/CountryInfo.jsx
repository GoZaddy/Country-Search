import React, { useContext } from "react";
import ThemeContext from "./../../Context/ThemeContext";
import Border from "./../Atoms/Border";
import { extractCountryInfo } from "./../../functions";
import {useQuery} from "react-query";

const CountryInfo = ({
  info,
  allCountries
  
}) => {
  const [theme] = useContext(ThemeContext);
  const {
    countryName,
    nativeName,
    population,
    region,
    subRegion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = extractCountryInfo(info);

  const getBorders = async ({borders}) => {
    let countries = await allCountries;
    return(await countries.filter(country => borders.includes(country.alpha3Code)))
  }
  const {data, isLoading, error} = useQuery(["getBorders", {borders}], getBorders);
  
  console.log(info);
  console.log(extractCountryInfo(info));
  return (
    <section>
      <h1 className="text-xl font-bold mt-8 mb-6">{countryName}</h1>

      <div className="flex flex-col md:flex-row">
        <div className = "md:mr-10">
          <p className="mb-2">
            <b>Native Name:</b> {nativeName}
          </p>
          <p className="mb-2">
            <b>Population:</b> {population}
          </p>
          <p className="mb-2">
            <b>Region:</b> {region}
          </p>
          <p className="mb-2">
            <b>Sub Region:</b> {subRegion}
          </p>
          <p className="mb-2">
            <b>Capital:</b> {capital}
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <p className="mb-2">
            <b>Top Level Domain:</b> {topLevelDomain}
          </p>
          <p className="mb-2">
            <b>Currencies:</b> {currencies.join(" , ")}
          </p>
          <p className="mb-2">
            <b>Languages:</b> {languages.join(" , ")}
          </p>
        </div>
      </div>
      <div>
        <b>Border Countries:</b>
        {isLoading ? (  
          "Loading..."
        ) : error ? (
          "Error"
        ) : data ? (
          <div className="flex flex-wrap justify-start">
            {data.map(border => (
              <Border
                borderName={border.name}
                numericCode={border.numericCode}
                CardInfo={extractCountryInfo(border)}
              />
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </section>
  );
};

export default CountryInfo;
