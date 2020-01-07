import React from "react";
import Search from "./../Molecules/Search";
import FilterByRegion from "./../Molecules/FilterByRegion";

const SecondBar = () => {
    return(
        <div className = "flex flex-col md:flex-row justify-between py-10">
            <Search />
            <FilterByRegion />
        </div>
    );
}

export default SecondBar;