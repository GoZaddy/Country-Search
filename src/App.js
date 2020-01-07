import React, {useState} from 'react';
import Search from "./Components/Molecules/Search";
import FilterByRegion from "./Components/Molecules/FilterByRegion";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Organisms/Header";
import Main from "./Components/Organisms/Main";
function App() {
  return (
    <ThemeContext.Provider value = {useState("light")}>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}

export default App;
