import React from "react";
import Search from "./../Molecules/Search";
import FilterByRegion from "./../Molecules/FilterByRegion";

const SecondBar = ({country, setCountry, baseCountries, setCountries, region, setRegion, getCountries, loadingHook}) => {
    
    return(
        <div className = "flex flex-col md:flex-row justify-between py-10 items-center">
            <Search loadingHook = {loadingHook} country = {country} setCountry = {setCountry} setCountries = {setCountries} getCountries = {async (countries) => { await getCountries(countries)}}/>
            <FilterByRegion region = {region} setRegion = {setRegion} baseCountries = {baseCountries} setCountries = {setCountries}/>
        </div>
    );
}

export default SecondBar;