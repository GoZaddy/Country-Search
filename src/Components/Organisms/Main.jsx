import React, { useContext, useState, useEffect, useRef } from "react";
import ThemeContext from "./../../Context/ThemeContext";
import SecondBar from "./SecondBar";
import Countries from "./Countries";

const Main = () => {
  const [theme] = useContext(ThemeContext);
  const [country, setCountry] = useState("");
  const region = useRef("All");
  const [countries, setCountries] = useState([]);
  const loadingHook = useState(false);
  let baseCountries;

  
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
  
  //console.log(getCountries("Niger"));

  useEffect(() => {
    async function setInitialCountries() {
      setCountries([...await getCountries("all")]);
      
    }
    setInitialCountries();
    baseCountries = [...countries];

  }, []);

  async function getBase() {
    return await getCountries("all");
  }
  baseCountries = getBase();
  return (
    <main
      className={`${theme}-mode-background ${theme}-mode-text lg:px-10 xl:px-16 px-5`}
    >
      
      <SecondBar
        country={country}
        baseCountries={baseCountries}
        setCountry={country => {
          setCountry(country);
        }}
        setCountries={countries => {
          setCountries(countries);
        }}
        region={region}
        /*setRegion={region => {
          setRegion(region);
        }}*/
        getCountries={async country => {
          await getCountries(country);
        }}
        loadingHook={loadingHook}
      />
      <Countries loadingHook={loadingHook} countries={countries} />
    </main>
  );
};

export default Main;
