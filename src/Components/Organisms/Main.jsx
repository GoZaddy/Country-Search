import React, { useContext, useState, useEffect, useRef } from "react";
import ThemeContext from "./../../Context/ThemeContext";
import SecondBar from "./SecondBar";
import Countries from "./Countries";
import {getCountries} from "../../App";




const Main = ({allCountries}) => {
  const [theme] = useContext(ThemeContext);
  const [country, setCountry] = useState("");
  const region = useRef("All");
  const [countries, setCountries] = useState([]);
  const loadingHook = useState(false);
  let baseCountries;

  
  
  
  //console.log(getCountries("Niger"));
  async function getBase() {
    return await getCountries("all");
  }
 baseCountries = getBase();

  useEffect(() => {
    async function setInitialCountries() {
      setCountries(await allCountries);
      
      
    }
    setInitialCountries();
    
    
    

  }, []);

  
  
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
