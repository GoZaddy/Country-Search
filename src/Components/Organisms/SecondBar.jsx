import React from "react";
import Search from "./../Molecules/Search";
import FilterByRegion from "./../Molecules/FilterByRegion";

const SecondBar = ({country, setCountry, setCountries, region, setRegion, getCountries, loadingHook}) => {
    
    return(
        <div className = "flex flex-col md:flex-row justify-between py-10">
            <Search loadingHook = {loadingHook} country = {country} setCountry = {setCountry} setCountries = {setCountries} getCountries = {async (countries) => { await getCountries(countries)}}/>
            <FilterByRegion region = {region} setRegion = {setRegion}/>
        </div>
    );
}

export default SecondBar;