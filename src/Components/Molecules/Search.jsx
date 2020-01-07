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
      className={`rounded border-1 py-4 px-8 shadow-md ${theme}-mode-elements mb-10 md:mb-0`}
    >
      <label htmlFor="country" className="flex">
        <svg
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 101 101"
          height="25px"
          width="25px"
          className="mr-2"
          style={{ path: "red" }}
        >
          <path
            d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"
            fill="#cccccc"
          />
        </svg>
        <input
          className={`placeholder-${blackOrWhite} ${theme}-mode-elements`}
          type="text"
          name=""
          value={country}
          onChange={e => {
            setCountry(e.currentTarget.value);
          }}
          placeholder="Search for a country..."
          id="country"
        />
      </label>
    </form>
  );
};

export default Search;
