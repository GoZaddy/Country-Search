import React, { useContext, useState, useEffect } from "react";
import ThemeContext from "./../../Context/ThemeContext";
import SecondBar from "./SecondBar";
import Countries from "./Countries";

const Main = () => {
  const [theme] = useContext(ThemeContext);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [countries, setCountries] = useState([]);

  const getCountries = async (country) => {
    let url;
    if(country === "all"){
      url = "https://restcountries.eu/rest/v2/all";
    }
    else{
      url = `https://restcountries.eu/rest/v2/name/${country}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  //console.log(getCountries("Niger"));

  useEffect(
     () => {
       async function setInitialCountries(){
        setCountries(await getCountries("all"));
       }
       setInitialCountries();
      
    }
  );

  

  return (
    <main className = {`${theme}-mode-background ${theme}-mode-text lg:px-10 xl:px-16 px-5`}>
      <SecondBar country = {country} setCountry = {(country) => {setCountry(country)}} region = {region} setRegion = {(region) => {setRegion(region)}}/>
      <Countries countries = {countries}/>
      <code>{JSON.stringify(getCountries("Nigeria"), null, 10)}</code>
    </main>
  );
};

export default Main;
