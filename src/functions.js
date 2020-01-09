export const extractCountryInfo = ({
  name,
  countryName,
  population,
  region,
  capital,
  flag,
  nativeName,
  subRegion,
  subregion,
  topLevelDomain,
  currencies,
  languages,
  borders,
  id
}) => {
  return {
    countryName: countryName || name,
    nativeName: nativeName,
    population: population,
    region: region,
    subRegion: subRegion || subregion,
    capital: capital,
    topLevelDomain: topLevelDomain,
    currencies: currencies.map(currency => currency.name || currency),
    languages: languages.map(language=> language.name || language),
    borders: borders,
    flag: flag
  };
};
