import React from "react";

const ContactCard = ({name}) => {
    return(
        <div class = "m-5 px-4 py-8 rounded-lg shadow-md border-1 border-blue-100 max-w-sm text-blue-400 text-lg">
            {name}
            <span class = "float-right font-bold text-xl">x</span>
        </div>
    );
}

export default ContactCard;