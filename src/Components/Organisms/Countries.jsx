import React from "react";
import CountryCard from "./../Molecules/CountryCard";

const Countries = ({ countries }) => {
  return (
    <div className = "countries px-10 md:px-0 -mr-4">
      {countries.map(country => (
        <CountryCard
          countryName={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag = {country.flag}
        />
      ))}
    </div>
  );
};

export default Countries;
