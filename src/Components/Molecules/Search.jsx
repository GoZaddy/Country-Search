import React, { useContext } from "react";
import ThemeContext from "./../../Context/ThemeContext";

const Search = ({
  country,
  setCountry,
  getTCountries,
  setCountries,
  loadingHook
}) => {
  const [theme] = useContext(ThemeContext);
  const [isLoading, setLoading] = loadingHook;
  const blackOrWhite = theme === "light" ? "gray-500" : "white";

  const getCountries = async country => {
    let url;
    if (country === "all") {
      url = "https://restcountries.eu/rest/v2/all";
    } else {
      url = `https://restcountries.eu/rest/v2/name/${country}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

 

  const searchCountry = async e => {
    e.preventDefault();
    setLoading(true);
    let searchResults = await getCountries(country);
    if ((await searchResults.length) >= 1) {
      setLoading(false);
      setCountries(await getCountries(country));
    }
  };

  return (
    <form
      action=""
      onSubmit={searchCountry}
      className = "w-full md:w-auto"
    >
      <label htmlFor="country" >
        
        <input
          className={`placeholder-${blackOrWhite} ${theme}-mode-elements bg-left bg-no-repeat rounded border-1 py-4 px-10 shadow-md ${theme}-mode-elements mb-10 md:mb-0 w-full`}
          type="text"
          name=""
          id = "country"
          value={country}
          onChange={e => {
            setCountry(e.currentTarget.value);
          }}
          style = {
            {
              backgroundImage: `url('https://res.cloudinary.com/dqcsk8rsc/image/upload/v1578427182/Search_1_1_1_dms40o.svg')`,
              backgroundSize: "30px",
              backgroundPositionX: "10px"
            }
          }
          placeholder="Search for a country..."
          id="country"
        />
      </label>
    </form>
  );
};

export default Search;
