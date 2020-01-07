import React, {useContext} from "react";
import ThemeContext from "./../../Context/ThemeContext";
import {Link} from "@reach/router";

const Border = ({borderName}) => {
    const [theme] = useContext(ThemeContext);
    return(
        <div class = {`${theme}-mode-elements ${theme}-mode-text px-5 py-3 shadow-md rounded`}>
        <p>{borderName}</p>
        
        </div>
    );
}