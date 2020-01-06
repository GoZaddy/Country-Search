import React from "react";

const Button = ({ children }) => {
    return (
        <button
            className = "btn bg-blue-500 font-bold text-white"
        >
            {children}
        </button>
    );
}

export default Button;