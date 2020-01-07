import React, {useContext} from "react";
import ThemeContext from "./../../Context/ThemeContext";

const FilterByRegion = () => {
    const [theme] = useContext(ThemeContext);
    return(
        <select name="" id="" class = {`rounded px-4 py-5 ${theme}-mode-elements shadow-md`} >
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asian">Asian</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            
        </select>
    );
}

export default FilterByRegion;