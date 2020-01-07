import React from "react";
import CountryCard from "./../Molecules/CountryCard";
import Loader from "react-loader-spinner";

const Countries = ({ countries, loadingHook }) => {
  const [isLoading] = loadingHook;

  if(isLoading){
    return(
      <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={0}
         className = "flex justify-center mt-20" 

      />
    );
  }
  return (
    <div className = "countries px-10 md:px-0">
      {countries.map(country => (
        <CountryCard
          countryName={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag = {country.flag}
          key = {country.numericCode}
          id = {country.numericCode}
          nativeName = {country.nativeName}
          subRegion = {country.subregion}
          topLevelDomain = {country.topLevelDomain}
          currencies = {country.currencies.map(currency => currency.name)}
          languages = {country.languages.map(language=> language.name)}
          borders = {country.borders}
        />
      ))}
    </div>
  );
};

export default Countries;
