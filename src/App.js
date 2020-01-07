import React, {useState} from 'react';
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Organisms/Header";
import Main from "./Components/Organisms/Main";
import CountrySelectedRoute from "./Components/Organisms/CountrySelectedRoute";
import {Router} from "@reach/router";
function App() {
  return (
    <ThemeContext.Provider value = {useState("light")}>
      <Header />
      <Router>
        <Main path = "/"/>
        <CountrySelectedRoute path = {`/details/:id`}/>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
