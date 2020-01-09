import React, {useState} from 'react';
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Organisms/Header";
import Main from "./Components/Organisms/Main";
import CountrySelectedRoute from "./Components/Organisms/CountrySelectedRoute";
import {Router} from "@reach/router";


export const getCountries = async country => {
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

const getAllCountries = async () => {
  const allCountries  =  await getCountries("all");
  return allCountries;
}


function App() {
  return (
    <ThemeContext.Provider value = {useState("light")}>
      <Header />
      <Router>
        <Main allCountries = {getAllCountries()} path = "/"/>
        <CountrySelectedRoute allCountries = {getAllCountries()} path = {`/details/:id`}/>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
