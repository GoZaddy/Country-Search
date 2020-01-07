import React, {useContext, useRef} from "react";
import ThemeContext from "./../../Context/ThemeContext";

const FilterByRegion = ({region, setRegion, baseCountries, setCountries}) => {
    const [theme] = useContext(ThemeContext);
    
    

    async function regionSelectHandler(e){
        region.current = (e.currentTarget.value);
        baseCountries = await baseCountries;
        if(region.current === "All"){
            setCountries(baseCountries);
        }
        else{
            setCountries(baseCountries.filter(country => country.region === region.current));
        }
        
        
    }
    return(
        <>
        
        <select name="region" value = {region.current} onChange = {regionSelectHandler} id="" className = {`rounded px-4 py-5 ${theme}-mode-elements shadow-md`} >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            
        </select>
        </>
    );
}

export default FilterByRegion;