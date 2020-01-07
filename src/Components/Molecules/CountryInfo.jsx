import React from "react";

const CountryInfo = ({
  info: {
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
  }
}) => {
  return (
    <section>
      <h1>{countryName}</h1>
      <div>
        <div>
          <p>
            <b>Native Name:</b> {nativeName}
          </p>
          <p>
            <b>Population:</b> {population}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Sub Region:</b> {subRegion}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
        <div>
          <p>
            <b>Top Level Domain:</b> {topLevelDomain}
          </p>
          <p>
            <b>Currencies:</b> {currencies.join(' , ')}
          </p>
          <p>
            <b>Languages:</b> {languages.join(' , ')}
          </p>
        </div>
      </div>
      <div>
        <h2>Border Countries:</h2>
        {}
      </div>
    </section>
  );
};

export default CountryInfo;
